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
import { initializeWorkplaceData } from "../utils/dataModels";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.ADMIN) {
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
    title: "Admin Dashboard",
    welcomeMessage: "Manage workplace operations, teams, and administrative tasks.",
    features: [
      { icon: "👥", title: "Team Management", description: "Manage team members and assignments", count: "All Teams" },
      { icon: "📊", title: "Reports & Analytics", description: "View department reports and analytics", count: "All Reports" },
      { icon: "✅", title: "Approvals", description: "Review and approve requests", count: "12 Pending" },
      { icon: "📋", title: "Projects Overview", description: "Monitor all active projects", count: "24 Active" },
      { icon: "💰", title: "Budget Management", description: "Track and manage budgets", count: "All Departments" },
      { icon: "⚙️", title: "Settings", description: "Configure workplace settings", count: "Full Access" }
    ],
    stats: [
      { label: "Active Projects", value: "24" },
      { label: "Team Members", value: "89" },
      { label: "Pending Approvals", value: "12" },
      { label: "Budget Used", value: "68%" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.ADMIN} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.ADMIN} />
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.ADMIN} />
        </div>
        <PayrollManager userId={user.email} userRole={WORKPLACE_ROLES.ADMIN} />
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.ADMIN} />
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.ADMIN} />
      </div>
    </RoleDashboard>
  );
}

