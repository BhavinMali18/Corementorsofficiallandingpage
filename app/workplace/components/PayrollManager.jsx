"use client";
import { useState, useEffect } from "react";
import { getSalarySuggestion } from "../utils/dataModels";

export default function PayrollManager({ userId, userRole }) {
  const [employees, setEmployees] = useState([]);
  const [payroll, setPayroll] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
    loadPayroll();
  }, []);

  const loadEmployees = () => {
    const allEmployees = JSON.parse(localStorage.getItem("workplace_employees") || "[]");
    setEmployees(allEmployees);
  };

  const loadPayroll = () => {
    const allPayroll = JSON.parse(localStorage.getItem("workplace_payroll") || "[]");
    setPayroll(allPayroll);
  };

  const canManage = userRole === "admin" || userRole === "super_admin" || userRole === "accounts";

  return (
    <div id="payroll" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Payroll & Salary</h3>
          <p className="text-sm text-gray-500">Manage employee salaries and payroll</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Employees</p>
          <p className="text-2xl font-bold text-blue-600">{employees.length}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Monthly Salary Cost</p>
          <p className="text-2xl font-bold text-green-600">
            ₹{employees.reduce((sum, emp) => sum + (emp.current_ctc || 0) / 12, 0).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Pending Revisions</p>
          <p className="text-2xl font-bold text-purple-600">0</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">This Month Payout</p>
          <p className="text-2xl font-bold text-orange-600">100%</p>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">Employee Salary Overview</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Department</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Annual CTC</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Monthly</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <p className="font-medium text-gray-900">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.email}</p>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{emp.department || "N/A"}</td>
                  <td className="py-3 px-4 text-right font-medium text-gray-900">
                    ₹{emp.current_ctc ? emp.current_ctc.toLocaleString('en-IN') : "0"}
                  </td>
                  <td className="py-3 px-4 text-right text-sm text-gray-600">
                    ₹{emp.current_ctc ? Math.round(emp.current_ctc / 12).toLocaleString('en-IN') : "0"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {canManage && (
                      <button
                        onClick={() => setSelectedEmployee(emp)}
                        className="text-sm text-[#B43E8F] hover:underline"
                      >
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEmployee && canManage && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-3">Salary Structure: {selectedEmployee.name}</h5>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Basic: ₹{Math.round((selectedEmployee.current_ctc || 0) * 0.5).toLocaleString('en-IN')}</p>
              <p className="text-gray-600">HRA: ₹{Math.round((selectedEmployee.current_ctc || 0) * 0.2).toLocaleString('en-IN')}</p>
            </div>
            <div>
              <p className="text-gray-600">Allowances: ₹{Math.round((selectedEmployee.current_ctc || 0) * 0.2).toLocaleString('en-IN')}</p>
              <p className="text-gray-600">Incentives: ₹{Math.round((selectedEmployee.current_ctc || 0) * 0.1).toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

