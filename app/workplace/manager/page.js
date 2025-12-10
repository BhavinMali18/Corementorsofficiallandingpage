"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import TaskManager from "../components/TaskManager";
import ProjectManager from "../components/ProjectManager";
import PerformancePoints from "../components/PerformancePoints";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function ManagerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.MANAGER) {
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
    title: "Manager Dashboard",
    welcomeMessage: "Manage your team, projects, and track performance metrics.",
    features: [
      { icon: "👥", title: "My Team", description: "View and manage team members", count: "8 Members" },
      { icon: "📁", title: "Projects", description: "Manage team projects and tasks", count: "12 Active" },
      { icon: "✅", title: "Approvals", description: "Review and approve team requests", count: "5 Pending" },
      { icon: "📊", title: "Team Reports", description: "View team performance reports", count: "Weekly" },
      { icon: "📅", title: "Schedules", description: "Manage team schedules and deadlines", count: "This Month" },
      { icon: "💬", title: "Team Communication", description: "Communicate with your team", count: "Active" }
    ],
    stats: [
      { label: "Team Members", value: "8" },
      { label: "Active Projects", value: "12" },
      { label: "Pending Approvals", value: "5" },
      { label: "Team Performance", value: "94%" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.MANAGER} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.MANAGER} />
        <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.MANAGER} />
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.MANAGER} />
      </div>
    </RoleDashboard>
  );
}

