"use client";
import { useState, useEffect } from "react";
import { 
  getSecretsByProject, 
  revealSecret, 
  createSecret, 
  updateSecret, 
  deleteSecret,
  exportSecretAsEnv,
  maskSecret
} from "../utils/secretsVault";

export default function SecretsVault({ projectId, userId, userRole }) {
  const [secrets, setSecrets] = useState([]);
  const [revealedSecrets, setRevealedSecrets] = useState({});
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    key_name: "",
    value: "",
    environment: "dev"
  });

  useEffect(() => {
    loadSecrets();
  }, [projectId]);

  const loadSecrets = () => {
    const projectSecrets = getSecretsByProject(projectId, userId, userRole);
    setSecrets(projectSecrets);
  };

  const handleReveal = (secretId) => {
    const revealed = revealSecret(secretId, userId, userRole);
    if (revealed) {
      setRevealedSecrets(prev => ({
        ...prev,
        [secretId]: revealed.value
      }));
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    try {
      createSecret(projectId, formData.key_name, formData.value, formData.environment, userId);
      setShowCreateForm(false);
      setFormData({ key_name: "", value: "", environment: "dev" });
      loadSecrets();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdate = (secretId, newValue) => {
    try {
      updateSecret(secretId, newValue, userId, userRole);
      setRevealedSecrets(prev => ({
        ...prev,
        [secretId]: newValue
      }));
      loadSecrets();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = (secretId) => {
    if (!confirm("Are you sure you want to delete this secret?")) return;
    try {
      deleteSecret(secretId, userId, userRole);
      loadSecrets();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleExport = (secretId) => {
    const envLine = exportSecretAsEnv(secretId, userId, userRole);
    if (envLine) {
      navigator.clipboard.writeText(envLine);
      alert("Copied to clipboard!");
    }
  };

  const canManage = userRole === "super_admin" || userRole === "admin";

  return (
    <div id="secrets" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Secrets Vault</h3>
          <p className="text-sm text-gray-500">Secure storage for API keys and credentials</p>
        </div>
        {canManage && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm font-medium"
          >
            + Add Secret
          </button>
        )}
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreate} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Key Name</label>
            <input
              type="text"
              value={formData.key_name}
              onChange={(e) => setFormData({ ...formData, key_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="API_KEY"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
            <input
              type="password"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter secret value"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Environment</label>
            <select
              value={formData.environment}
              onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="dev">Development</option>
              <option value="staging">Staging</option>
              <option value="prod">Production</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {secrets.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No secrets found for this project</p>
        ) : (
          secrets.map((secret) => (
            <div key={secret.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-medium text-gray-900">{secret.key_name}</span>
                  <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                    {secret.environment}
                  </span>
                </div>
                <div className="flex gap-2">
                  {!revealedSecrets[secret.id] ? (
                    <button
                      onClick={() => handleReveal(secret.id)}
                      className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                    >
                      Reveal
                    </button>
                  ) : (
                    <button
                      onClick={() => handleExport(secret.id)}
                      className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded"
                    >
                      Copy .env
                    </button>
                  )}
                  {canManage && (
                    <>
                      <button
                        onClick={() => {
                          const newValue = prompt("Enter new value:", revealedSecrets[secret.id] || "");
                          if (newValue) handleUpdate(secret.id, newValue);
                        }}
                        className="px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(secret.id)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-2">
                {revealedSecrets[secret.id] ? (
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">
                    {revealedSecrets[secret.id]}
                  </code>
                ) : (
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">
                    {secret.masked_value}
                  </code>
                )}
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Last updated: {new Date(secret.updated_at).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

