"use client";
import { useState, useEffect } from "react";

export default function DocumentManager({ userId, userRole, projectId = null }) {
  const [documents, setDocuments] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "company",
    access_level: "public",
    description: ""
  });

  useEffect(() => {
    loadDocuments();
  }, [projectId]);

  const loadDocuments = () => {
    const allDocs = JSON.parse(localStorage.getItem("workplace_documents") || "[]");
    let filtered = allDocs;
    
    if (projectId) {
      filtered = allDocs.filter(d => d.project_id === projectId);
    }
    
    setDocuments(filtered);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // In production, upload file to server
    const allDocs = JSON.parse(localStorage.getItem("workplace_documents") || "[]");
    const newDoc = {
      id: Date.now().toString(),
      ...formData,
      project_id: projectId,
      uploaded_by: userId,
      uploaded_at: new Date().toISOString(),
      version: 1,
      file_url: "#", // In production, actual file URL
      file_name: formData.title + ".pdf"
    };
    
    allDocs.push(newDoc);
    localStorage.setItem("workplace_documents", JSON.stringify(allDocs));
    setShowUploadForm(false);
    setFormData({ title: "", category: "company", access_level: "public", description: "" });
    loadDocuments();
  };

  const canUpload = userRole === "admin" || userRole === "super_admin" || userRole === "manager" || userRole === "hr_manager";

  return (
    <div id="documents" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Document Library</h3>
          <p className="text-sm text-gray-500">
            {projectId ? "Project Documents" : "Company Documents"}
          </p>
        </div>
        {canUpload && (
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm font-medium"
          >
            + Upload Document
          </button>
        )}
      </div>

      {showUploadForm && (
        <form onSubmit={handleUpload} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="company">Company Policy</option>
                <option value="sop">SOP</option>
                <option value="template">Template</option>
                <option value="project">Project Document</option>
                <option value="contract">Contract</option>
                <option value="invoice">Invoice</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Access Level</label>
              <select
                value={formData.access_level}
                onChange={(e) => setFormData({ ...formData, access_level: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="public">Public (All)</option>
                <option value="department">Department Only</option>
                <option value="specific">Specific Users</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows={2}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors"
            >
              Upload
            </button>
            <button
              type="button"
              onClick={() => setShowUploadForm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {documents.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No documents found</p>
        ) : (
          documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{doc.title}</h4>
                  <p className="text-sm text-gray-500">{doc.category} • v{doc.version}</p>
                  <p className="text-xs text-gray-400">
                    Uploaded {new Date(doc.uploaded_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={doc.file_url}
                  target="_blank"
                  className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                >
                  View
                </a>
                <a
                  href={doc.file_url}
                  download
                  className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded"
                >
                  Download
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

