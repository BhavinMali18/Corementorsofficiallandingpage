"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import TaskManager from "../components/TaskManager";
import ProjectManager from "../components/ProjectManager";
import AttendanceTracker from "../components/AttendanceTracker";
import PerformancePoints from "../components/PerformancePoints";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function BusinessDeveloperDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.BUSINESS_DEVELOPER) {
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
    title: "Business Developer Dashboard",
    welcomeMessage: "Manage leads, clients, sales pipeline, and business development activities.",
    features: [
      { icon: "📈", title: "Sales Pipeline", description: "Track leads and sales opportunities", count: "24 Leads" },
      { icon: "👥", title: "Clients", description: "Manage client relationships and accounts", count: "45 Active" },
      { icon: "📞", title: "Follow-ups", description: "Schedule and track client follow-ups", count: "8 Today" },
      { icon: "📊", title: "Sales Reports", description: "View sales performance and metrics", count: "Monthly" },
      { icon: "💼", title: "Proposals", description: "Create and manage client proposals", count: "5 Draft" },
      { icon: "🤝", title: "Meetings", description: "Schedule and manage client meetings", count: "3 This Week" }
    ],
    stats: [
      { label: "Active Leads", value: "24" },
      { label: "Clients", value: "45" },
      { label: "This Month Sales", value: "$125K" },
      { label: "Conversion Rate", value: "32%" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.BUSINESS_DEVELOPER} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.BUSINESS_DEVELOPER} />
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.BUSINESS_DEVELOPER} assignedTo={user.email} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceTracker userId={user.email} userRole={WORKPLACE_ROLES.BUSINESS_DEVELOPER} />
          <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.BUSINESS_DEVELOPER} />
        </div>
      </div>
    </RoleDashboard>
  );
}

