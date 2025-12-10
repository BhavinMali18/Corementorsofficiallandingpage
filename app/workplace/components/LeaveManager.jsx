"use client";
import { useState, useEffect } from "react";
import { LEAVE_STATUS, LEAVE_TYPE } from "../utils/dataModels";

export default function LeaveManager({ userId, userRole, employeeId = null }) {
  const [leaves, setLeaves] = useState([]);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    leave_type: LEAVE_TYPE.CASUAL,
    start_date: "",
    end_date: "",
    reason: "",
    status: LEAVE_STATUS.PENDING
  });

  useEffect(() => {
    loadLeaves();
  }, [employeeId]);

  const loadLeaves = () => {
    const allLeaves = JSON.parse(localStorage.getItem("workplace_leaves") || "[]");
    const targetId = employeeId || userId;
    let filtered = allLeaves.filter(l => l.employee_id === targetId);
    
    if (userRole === "hr_manager" || userRole === "manager" || userRole === "admin" || userRole === "super_admin") {
      filtered = allLeaves; // Show all leaves for managers/HR/Admin
    }
    
    setLeaves(filtered);
  };

  const handleRequest = (e) => {
    e.preventDefault();
    const allLeaves = JSON.parse(localStorage.getItem("workplace_leaves") || "[]");
    const targetId = employeeId || userId;
    
    const newLeave = {
      id: Date.now().toString(),
      employee_id: targetId,
      ...formData,
      requested_at: new Date().toISOString(),
      days: calculateDays(formData.start_date, formData.end_date)
    };
    
    allLeaves.push(newLeave);
    localStorage.setItem("workplace_leaves", JSON.stringify(allLeaves));
    setShowRequestForm(false);
    setFormData({
      leave_type: LEAVE_TYPE.CASUAL,
      start_date: "",
      end_date: "",
      reason: "",
      status: LEAVE_STATUS.PENDING
    });
    loadLeaves();
  };

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const diff = new Date(end) - new Date(start);
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleApprove = (leaveId) => {
    const allLeaves = JSON.parse(localStorage.getItem("workplace_leaves") || "[]");
    const leave = allLeaves.find(l => l.id === leaveId);
    if (leave) {
      leave.status = LEAVE_STATUS.APPROVED;
      leave.approved_by = userId;
      leave.approved_at = new Date().toISOString();
      localStorage.setItem("workplace_leaves", JSON.stringify(allLeaves));
      loadLeaves();
    }
  };

  const handleReject = (leaveId) => {
    const allLeaves = JSON.parse(localStorage.getItem("workplace_leaves") || "[]");
    const leave = allLeaves.find(l => l.id === leaveId);
    if (leave) {
      leave.status = LEAVE_STATUS.REJECTED;
      leave.approved_by = userId;
      leave.approved_at = new Date().toISOString();
      localStorage.setItem("workplace_leaves", JSON.stringify(allLeaves));
      loadLeaves();
    }
  };

  const canRequest = !employeeId || employeeId === userId;
  const canApprove = userRole === "hr_manager" || userRole === "manager" || userRole === "admin" || userRole === "super_admin";

  return (
    <div id="leaves" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Leave Management</h3>
          <p className="text-sm text-gray-500">Request and manage leaves</p>
        </div>
        {canRequest && (
          <button
            onClick={() => setShowRequestForm(!showRequestForm)}
            className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors text-sm font-medium"
          >
            + Request Leave
          </button>
        )}
      </div>

      {showRequestForm && (
        <form onSubmit={handleRequest} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Leave Type</label>
              <select
                value={formData.leave_type}
                onChange={(e) => setFormData({ ...formData, leave_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value={LEAVE_TYPE.SICK}>Sick Leave</option>
                <option value={LEAVE_TYPE.CASUAL}>Casual Leave</option>
                <option value={LEAVE_TYPE.EARNED}>Earned Leave</option>
                <option value={LEAVE_TYPE.COMP_OFF}>Comp-Off</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Days</label>
              <input
                type="text"
                value={formData.start_date && formData.end_date ? calculateDays(formData.start_date, formData.end_date) : ""}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                readOnly
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows={3}
              required
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#B43E8F] text-white rounded-lg hover:bg-[#6200B3] transition-colors"
            >
              Submit Request
            </button>
            <button
              type="button"
              onClick={() => setShowRequestForm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {leaves.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No leave requests found</p>
        ) : (
          leaves.map((leave) => (
            <div key={leave.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">
                    {new Date(leave.start_date).toLocaleDateString()} - {new Date(leave.end_date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">{leave.leave_type} • {leave.days} days</p>
                  {leave.reason && (
                    <p className="text-sm text-gray-500 mt-1">{leave.reason}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    leave.status === LEAVE_STATUS.APPROVED ? "bg-green-100 text-green-700" :
                    leave.status === LEAVE_STATUS.REJECTED ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {leave.status}
                  </span>
                  {canApprove && leave.status === LEAVE_STATUS.PENDING && (
                    <>
                      <button
                        onClick={() => handleApprove(leave.id)}
                        className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(leave.id)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
                      >
                        Reject
                      </button>
                    </>
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

