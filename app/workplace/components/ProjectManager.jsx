"use client";
import { useState, useEffect } from "react";
import { PROJECT_STATUS } from "../utils/dataModels";

export default function ProjectManager({ userId, userRole }) {
  const [projects, setProjects] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    client: "",
    description: "",
    budget: "",
    timeline: "",
    status: PROJECT_STATUS.PLANNING
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const allProjects = JSON.parse(localStorage.getItem("workplace_projects") || "[]");
    setProjects(allProjects);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const allProjects = JSON.parse(localStorage.getItem("workplace_projects") || "[]");
    const newProject = {
      id: Date.now().toString(),
      ...formData,
      budget: parseFloat(formData.budget) || 0,
      created_by: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      team_members: [],
      documents: []
    };
    
    allProjects.push(newProject);
    localStorage.setItem("workplace_projects", JSON.stringify(allProjects));
    setShowCreateForm(false);
    setFormData({
      name: "",
      client: "",
      description: "",
      budget: "",
      timeline: "",
      status: PROJECT_STATUS.PLANNING
    });
    loadProjects();
  };

  const canCreate = userRole === "admin" || userRole === "super_admin" || userRole === "manager" || userRole === "business_developer";

  return (
    <div id="projects" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
          <p className="text-sm text-gray-500">Manage client projects and timelines</p>
        </div>
        {canCreate && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm font-medium"
          >
            + Create Project
          </button>
        )}
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreate} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget (₹)</label>
              <input
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
            <input
              type="text"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="e.g., 3 months"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows={3}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors"
            >
              Create Project
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center py-8">No projects found</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">{project.name}</h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  project.status === PROJECT_STATUS.ACTIVE ? "bg-green-100 text-green-700" :
                  project.status === PROJECT_STATUS.COMPLETED ? "bg-blue-100 text-blue-700" :
                  project.status === PROJECT_STATUS.PLANNING ? "bg-yellow-100 text-yellow-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {project.status}
                </span>
              </div>
              {project.client && (
                <p className="text-sm text-gray-600 mb-2">Client: {project.client}</p>
              )}
              {project.budget > 0 && (
                <p className="text-sm text-gray-600 mb-2">Budget: ₹{project.budget.toLocaleString()}</p>
              )}
              {project.timeline && (
                <p className="text-sm text-gray-600 mb-2">Timeline: {project.timeline}</p>
              )}
              <a
                href={`/workplace/projects/${project.id}`}
                className="text-sm text-[#B43E8F] hover:underline"
              >
                View Details →
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

