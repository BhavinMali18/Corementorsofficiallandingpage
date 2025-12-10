"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import TaskManager from "../components/TaskManager";
import ProjectManager from "../components/ProjectManager";
import DocumentManager from "../components/DocumentManager";
import PerformancePoints from "../components/PerformancePoints";
import PayrollManager from "../components/PayrollManager";
import EmployeeProfile from "../components/EmployeeProfile";
import SecretsVault from "../components/SecretsVault";
import ReportsAnalytics from "../components/ReportsAnalytics";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.SUPER_ADMIN) {
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
    title: "Super Admin Dashboard",
    welcomeMessage: "You have full system access and control over all workplace functions.",
    features: [
      { icon: "🔐", title: "System Settings", description: "Configure system-wide settings and preferences", count: "Full Access" },
      { icon: "👥", title: "User Management", description: "Manage all users, roles, and permissions", count: "All Users" },
      { icon: "📊", title: "Analytics & Reports", description: "View comprehensive system analytics", count: "All Data" },
      { icon: "🔧", title: "System Maintenance", description: "Perform system maintenance and updates", count: "Full Control" },
      { icon: "📝", title: "Audit Logs", description: "View and manage all system audit logs", count: "Complete History" },
      { icon: "⚙️", title: "Advanced Configuration", description: "Access advanced system configurations", count: "Unlimited" }
    ],
    stats: [
      { label: "Total Users", value: "156" },
      { label: "Active Sessions", value: "42" },
      { label: "System Health", value: "99.9%" },
      { label: "Pending Tasks", value: "8" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.SUPER_ADMIN} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
        </div>
        <PayrollManager userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
        {selectedProject && (
          <SecretsVault projectId={selectedProject} userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
        )}
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
        {selectedEmployee && (
          <EmployeeProfile employeeId={selectedEmployee} canEdit={true} />
        )}
        <ReportsAnalytics userId={user.email} userRole={WORKPLACE_ROLES.SUPER_ADMIN} />
      </div>
    </RoleDashboard>
  );
}

