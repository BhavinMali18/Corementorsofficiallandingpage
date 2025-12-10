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

export default function VFXDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.VFX) {
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
    title: "Visual Effects Dashboard",
    welcomeMessage: "Manage VFX projects, renders, and visual effects work.",
    features: [
      { icon: "🎬", title: "VFX Projects", description: "Manage visual effects projects", count: "4 Active" },
      { icon: "🎞️", title: "Render Queue", description: "Monitor render progress and queue", count: "8 Rendering" },
      { icon: "📹", title: "Video Assets", description: "Access video and media assets", count: "200+ Files" },
      { icon: "⚡", title: "Render Farm", description: "Manage render farm resources", count: "12 Nodes" },
      { icon: "📤", title: "Deliverables", description: "Submit completed VFX work", count: "2 Pending" },
      { icon: "💬", title: "Client Reviews", description: "View client feedback and revisions", count: "3 New" }
    ],
    stats: [
      { label: "Active Projects", value: "4" },
      { label: "Rendering", value: "8" },
      { label: "Completed", value: "18" },
      { label: "This Month", value: "6" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.VFX} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.VFX} assignedTo={user.email} />
          <AttendanceTracker userId={user.email} userRole={WORKPLACE_ROLES.VFX} />
        </div>
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.VFX} />
        <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.VFX} />
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.VFX} />
      </div>
    </RoleDashboard>
  );
}

