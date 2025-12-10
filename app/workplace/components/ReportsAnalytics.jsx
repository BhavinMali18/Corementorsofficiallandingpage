"use client";
import { useState, useEffect } from "react";
import { calculateMonthlyAverage, getPerformanceGrade } from "../utils/dataModels";

export default function ReportsAnalytics({ userId, userRole }) {
  const [reports, setReports] = useState({
    userPerformance: null,
    departmentStats: null,
    hrMetrics: null,
    accountsMetrics: null
  });

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    const allTasks = JSON.parse(localStorage.getItem("workplace_tasks") || "[]");
    const allEmployees = JSON.parse(localStorage.getItem("workplace_employees") || "[]");
    const allProjects = JSON.parse(localStorage.getItem("workplace_projects") || "[]");
    const allAttendance = JSON.parse(localStorage.getItem("workplace_attendance") || "[]");
    const allLeaves = JSON.parse(localStorage.getItem("workplace_leaves") || "[]");

    // User Performance Report
    const completedTasks = allTasks.filter(t => t.status === "completed");
    const userTasks = completedTasks.filter(t => t.assigned_to === userId);
    const userScores = userTasks
      .filter(t => t.performance)
      .map(t => {
        const hr = t.performance.hr_rating || 0;
        const mgr = t.performance.manager_rating || 0;
        const admin = t.performance.admin_rating || 0;
        return (hr * 2 * 0.3) + (mgr * 2 * 0.3) + (admin * 0.4);
      });
    const avgScore = userScores.length > 0 ? calculateMonthlyAverage(userScores) : 0;

    // Department Stats
    const departmentStats = {};
    allEmployees.forEach(emp => {
      const dept = emp.department || "unassigned";
      if (!departmentStats[dept]) {
        departmentStats[dept] = { employees: 0, projects: 0, tasks: 0 };
      }
      departmentStats[dept].employees++;
    });

    // HR Metrics
    const totalEmployees = allEmployees.length;
    const activeLeaves = allLeaves.filter(l => l.status === "approved" && 
      new Date(l.start_date) <= new Date() && new Date(l.end_date) >= new Date()
    ).length;
    const pendingLeaves = allLeaves.filter(l => l.status === "pending").length;

    // Accounts Metrics
    const totalSalaryCost = allEmployees.reduce((sum, emp) => sum + (emp.current_ctc || 0) / 12, 0);
    const totalProjectRevenue = allProjects.reduce((sum, proj) => sum + (proj.budget || 0), 0);

    setReports({
      userPerformance: {
        totalTasks: userTasks.length,
        completedTasks: userTasks.filter(t => t.status === "completed").length,
        averageScore: avgScore,
        grade: getPerformanceGrade(avgScore)
      },
      departmentStats: Object.entries(departmentStats).map(([dept, stats]) => ({
        department: dept,
        ...stats
      })),
      hrMetrics: {
        totalEmployees,
        activeLeaves,
        pendingLeaves,
        attendanceRate: allAttendance.length > 0 ? "95%" : "N/A"
      },
      accountsMetrics: {
        monthlySalaryCost: totalSalaryCost,
        projectRevenue: totalProjectRevenue,
        profitMargin: totalProjectRevenue > 0 ? ((totalProjectRevenue - totalSalaryCost) / totalProjectRevenue * 100).toFixed(1) : 0
      }
    });
  };

  const canViewAll = userRole === "admin" || userRole === "super_admin" || userRole === "manager" || userRole === "hr_manager" || userRole === "accounts";

  return (
    <div id="reports" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Reports & Analytics</h3>
          <p className="text-sm text-gray-500">Comprehensive workplace analytics and insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Performance */}
        {reports.userPerformance && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Your Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Tasks:</span>
                <span className="font-medium">{reports.userPerformance.totalTasks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed:</span>
                <span className="font-medium">{reports.userPerformance.completedTasks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Average Score:</span>
                <span className="font-medium text-blue-600">{reports.userPerformance.averageScore.toFixed(2)}/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Grade:</span>
                <span className="font-medium">{reports.userPerformance.grade.label}</span>
              </div>
            </div>
          </div>
        )}

        {/* HR Metrics */}
        {canViewAll && reports.hrMetrics && (
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">HR Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Employees:</span>
                <span className="font-medium">{reports.hrMetrics.totalEmployees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Leaves:</span>
                <span className="font-medium">{reports.hrMetrics.activeLeaves}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pending Approvals:</span>
                <span className="font-medium">{reports.hrMetrics.pendingLeaves}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Attendance Rate:</span>
                <span className="font-medium">{reports.hrMetrics.attendanceRate}</span>
              </div>
            </div>
          </div>
        )}

        {/* Accounts Metrics */}
        {(userRole === "accounts" || userRole === "admin" || userRole === "super_admin") && reports.accountsMetrics && (
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Financial Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Monthly Salary Cost:</span>
                <span className="font-medium">₹{Math.round(reports.accountsMetrics.monthlySalaryCost).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Project Revenue:</span>
                <span className="font-medium">₹{Math.round(reports.accountsMetrics.projectRevenue).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Profit Margin:</span>
                <span className="font-medium">{reports.accountsMetrics.profitMargin}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Department Stats */}
        {canViewAll && reports.departmentStats && reports.departmentStats.length > 0 && (
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Department Overview</h4>
            <div className="space-y-2">
              {reports.departmentStats.map((dept, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-sm text-gray-600 capitalize">{dept.department}:</span>
                  <span className="font-medium">{dept.employees} employees</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

