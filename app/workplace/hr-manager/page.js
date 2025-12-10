"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import EmployeeProfile from "../components/EmployeeProfile";
import LeaveManager from "../components/LeaveManager";
import TaskManager from "../components/TaskManager";
import PerformancePoints from "../components/PerformancePoints";
import ReportsAnalytics from "../components/ReportsAnalytics";
import DocumentManager from "../components/DocumentManager";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function HRManagerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.HR_MANAGER) {
          setUser(userData);
        } else {
          router.push("/workplace/login");
        }
      } catch (e) {
        router.push("/workplace/login");
      }
    } else {
      router.push("/workplace/login");
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const roleConfig = {
    title: "HR Manager Dashboard",
    welcomeMessage: "Manage human resources, employee records, and HR operations.",
    features: [
      { icon: "👤", title: "Employee Records", description: "Manage employee information and records", count: "156 Employees" },
      { icon: "📋", title: "Recruitment", description: "Manage job postings and candidates", count: "8 Openings" },
      { icon: "📅", title: "Leave Management", description: "Approve and track employee leaves", count: "12 Pending" },
      { icon: "💰", title: "Payroll", description: "Manage payroll and salary processing", count: "Monthly" },
      { icon: "📊", title: "HR Analytics", description: "View HR metrics and reports", count: "All Data" },
      { icon: "📝", title: "Performance Reviews", description: "Conduct and manage performance reviews", count: "Quarterly" }
    ],
    stats: [
      { label: "Total Employees", value: "156" },
      { label: "Open Positions", value: "8" },
      { label: "Pending Leaves", value: "12" },
      { label: "Active Recruitments", value: "5" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.HR_MANAGER} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeaveManager userId={user.email} userRole={WORKPLACE_ROLES.HR_MANAGER} />
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.HR_MANAGER} />
        </div>
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.HR_MANAGER} />
        {selectedEmployee && (
          <EmployeeProfile employeeId={selectedEmployee} canEdit={true} />
        )}
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.HR_MANAGER} />
        <ReportsAnalytics userId={user.email} userRole={WORKPLACE_ROLES.HR_MANAGER} />
      </div>
    </RoleDashboard>
  );
}

