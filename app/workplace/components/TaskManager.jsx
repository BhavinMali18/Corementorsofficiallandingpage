"use client";
import { useState, useEffect } from "react";
import { TASK_STATUS, TASK_PRIORITY } from "../utils/dataModels";

export default function TaskManager({ userId, userRole, assignedTo = null }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project_id: "",
    assigned_to: assignedTo || "",
    priority: TASK_PRIORITY.MEDIUM,
    deadline: "",
    status: TASK_STATUS.TODO
  });

  useEffect(() => {
    loadTasks();
    loadProjects();
  }, [assignedTo]);

  const loadTasks = () => {
    const allTasks = JSON.parse(localStorage.getItem("workplace_tasks") || "[]");
    let filtered = allTasks;
    
    if (assignedTo) {
      filtered = allTasks.filter(t => t.assigned_to === assignedTo);
    } else if (userRole !== "admin" && userRole !== "super_admin" && userRole !== "manager") {
      filtered = allTasks.filter(t => t.assigned_to === userId);
    }
    
    setTasks(filtered);
  };

  const loadProjects = () => {
    const allProjects = JSON.parse(localStorage.getItem("workplace_projects") || "[]");
    setProjects(allProjects);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const allTasks = JSON.parse(localStorage.getItem("workplace_tasks") || "[]");
    const newTask = {
      id: Date.now().toString(),
      ...formData,
      created_by: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      time_logs: [],
      attachments: []
    };
    
    allTasks.push(newTask);
    localStorage.setItem("workplace_tasks", JSON.stringify(allTasks));
    setShowCreateForm(false);
    setFormData({
      title: "",
      description: "",
      project_id: "",
      assigned_to: assignedTo || "",
      priority: TASK_PRIORITY.MEDIUM,
      deadline: "",
      status: TASK_STATUS.TODO
    });
    loadTasks();
  };

  const handleStatusChange = (taskId, newStatus) => {
    const allTasks = JSON.parse(localStorage.getItem("workplace_tasks") || "[]");
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
      task.updated_at = new Date().toISOString();
      localStorage.setItem("workplace_tasks", JSON.stringify(allTasks));
      loadTasks();
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      [TASK_PRIORITY.LOW]: "bg-gray-100 text-gray-700",
      [TASK_PRIORITY.MEDIUM]: "bg-blue-100 text-blue-700",
      [TASK_PRIORITY.HIGH]: "bg-orange-100 text-orange-700",
      [TASK_PRIORITY.URGENT]: "bg-red-100 text-red-700"
    };
    return colors[priority] || colors[TASK_PRIORITY.MEDIUM];
  };

  const getStatusColor = (status) => {
    const colors = {
      [TASK_STATUS.TODO]: "bg-gray-200 text-gray-700",
      [TASK_STATUS.IN_PROGRESS]: "bg-blue-200 text-blue-700",
      [TASK_STATUS.COMPLETED]: "bg-green-200 text-green-700",
      [TASK_STATUS.ON_HOLD]: "bg-yellow-200 text-yellow-700",
      [TASK_STATUS.CANCELLED]: "bg-red-200 text-red-700"
    };
    return colors[status] || colors[TASK_STATUS.TODO];
  };

  const canCreate = userRole === "admin" || userRole === "super_admin" || userRole === "manager";

  return (
    <div id="tasks" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
          <p className="text-sm text-gray-500">
            {assignedTo ? "Assigned Tasks" : "All Tasks"}
          </p>
        </div>
        {canCreate && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm font-medium"
          >
            + Create Task
          </button>
        )}
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreate} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
              <select
                value={formData.project_id}
                onChange={(e) => setFormData({ ...formData, project_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Project</option>
                {projects.map(project => (
                  <option key={project.id} value={project.id}>{project.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value={TASK_PRIORITY.LOW}>Low</option>
                <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
                <option value={TASK_PRIORITY.HIGH}>High</option>
                <option value={TASK_PRIORITY.URGENT}>Urgent</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
              <input
                type="text"
                value={formData.assigned_to}
                onChange={(e) => setFormData({ ...formData, assigned_to: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="User email or ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors"
            >
              Create Task
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
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{task.title}</h4>
                  {task.description && (
                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status.replace("_", " ")}
                    </span>
                    {task.deadline && (
                      <span className="text-xs text-gray-500">
                        Due: {new Date(task.deadline).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {task.status !== TASK_STATUS.COMPLETED && (
                    <select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      className="text-xs px-2 py-1 border border-gray-300 rounded"
                    >
                      <option value={TASK_STATUS.TODO}>Todo</option>
                      <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
                      <option value={TASK_STATUS.ON_HOLD}>On Hold</option>
                      <option value={TASK_STATUS.COMPLETED}>Completed</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

