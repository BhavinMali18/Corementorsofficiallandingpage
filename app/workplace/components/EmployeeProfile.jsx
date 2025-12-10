"use client";
import { useState, useEffect } from "react";

export default function EmployeeProfile({ employeeId, canEdit = false }) {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    loadProfile();
  }, [employeeId]);

  const loadProfile = () => {
    const employees = JSON.parse(localStorage.getItem("workplace_employees") || "[]");
    const emp = employees.find(e => e.id === employeeId);
    if (emp) {
      setProfile(emp);
      setFormData(emp);
    }
  };

  const handleSave = () => {
    const employees = JSON.parse(localStorage.getItem("workplace_employees") || "[]");
    const index = employees.findIndex(e => e.id === employeeId);
    if (index !== -1) {
      employees[index] = { ...employees[index], ...formData, updated_at: new Date().toISOString() };
      localStorage.setItem("workplace_employees", JSON.stringify(employees));
      setProfile(employees[index]);
      setIsEditing(false);
    }
  };

  if (!profile) {
    return <div className="text-center py-8 text-gray-500">Loading profile...</div>;
  }

  return (
    <div id="employees" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Employee Profile</h3>
        {canEdit && (
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <p className="text-gray-900">{profile.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone || ""}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.phone || "N/A"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.designation || ""}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.designation || "N/A"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
          {isEditing ? (
            <select
              value={formData.department || ""}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Department</option>
              <option value="gfx">Graphics</option>
              <option value="vfx">Visual Effects</option>
              <option value="development">Development</option>
              <option value="business">Business Development</option>
              <option value="accounts">Accounts</option>
              <option value="hr">HR</option>
              <option value="management">Management</option>
            </select>
          ) : (
            <p className="text-gray-900">{profile.department || "N/A"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
          {isEditing ? (
            <input
              type="date"
              value={formData.joining_date || ""}
              onChange={(e) => setFormData({ ...formData, joining_date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.joining_date ? new Date(profile.joining_date).toLocaleDateString() : "N/A"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current CTC</label>
          {isEditing ? (
            <input
              type="number"
              value={formData.current_ctc || ""}
              onChange={(e) => setFormData({ ...formData, current_ctc: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">₹{profile.current_ctc ? profile.current_ctc.toLocaleString() : "N/A"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
          {isEditing ? (
            <input
              type="number"
              step="0.1"
              value={formData.experience || ""}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.experience || "0"} years</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
        {isEditing ? (
          <textarea
            value={formData.skills ? formData.skills.join(", ") : ""}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(",").map(s => s.trim()) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="React, Node.js, Python (comma separated)"
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {profile.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No skills added</p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contacts</label>
        {isEditing ? (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Contact Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Contact Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ) : (
          <div className="space-y-2">
            {profile.emergency_contacts && profile.emergency_contacts.length > 0 ? (
              profile.emergency_contacts.map((contact, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                  <p className="text-xs text-gray-500">{contact.relation}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No emergency contacts added</p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">KYC Documents</label>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm font-medium mb-1">Aadhaar/PAN</p>
            {profile.kyc_docs?.aadhaar ? (
              <a href="#" className="text-blue-600 text-sm">View Document</a>
            ) : (
              <p className="text-gray-500 text-sm">Not uploaded</p>
            )}
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm font-medium mb-1">Agreement</p>
            {profile.kyc_docs?.agreement ? (
              <a href="#" className="text-blue-600 text-sm">View Document</a>
            ) : (
              <p className="text-gray-500 text-sm">Not uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

