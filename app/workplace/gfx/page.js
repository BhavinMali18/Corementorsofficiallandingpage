"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import TaskManager from "../components/TaskManager";
import ProjectManager from "../components/ProjectManager";
import DocumentManager from "../components/DocumentManager";
import AttendanceTracker from "../components/AttendanceTracker";
import PerformancePoints from "../components/PerformancePoints";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function GFXDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.GFX) {
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
    title: "Graphics Designer Dashboard",
    welcomeMessage: "Manage your design projects, assets, and creative work.",
    features: [
      { icon: "🎨", title: "Design Projects", description: "View and work on design assignments", count: "6 Active" },
      { icon: "🖼️", title: "Asset Library", description: "Access design assets and resources", count: "500+ Assets" },
      { icon: "📤", title: "Submissions", description: "Submit completed designs for review", count: "3 Pending" },
      { icon: "💬", title: "Client Feedback", description: "View and respond to client feedback", count: "5 New" },
      { icon: "📅", title: "Deadlines", description: "Track project deadlines and milestones", count: "This Week" },
      { icon: "🔄", title: "Revisions", description: "Manage design revisions and updates", count: "2 Active" }
    ],
    stats: [
      { label: "Active Projects", value: "6" },
      { label: "Completed", value: "24" },
      { label: "Pending Reviews", value: "3" },
      { label: "This Month", value: "12" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.GFX} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.GFX} assignedTo={user.email} />
          <AttendanceTracker userId={user.email} userRole={WORKPLACE_ROLES.GFX} />
        </div>
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.GFX} />
        <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.GFX} />
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.GFX} />
      </div>
    </RoleDashboard>
  );
}

