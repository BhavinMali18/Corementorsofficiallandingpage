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
import SecretsVault from "../components/SecretsVault";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function DeveloperDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.DEVELOPER) {
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

  const [selectedProject, setSelectedProject] = useState(null);

  const roleConfig = {
    title: "Developer Dashboard",
    welcomeMessage: "Manage your development projects, code repositories, and technical tasks.",
    features: [
      { icon: "💻", title: "My Projects", description: "View and work on development projects", count: "8 Active" },
      { icon: "📝", title: "Tasks & Issues", description: "Manage development tasks and bug fixes", count: "15 Open" },
      { icon: "🔀", title: "Code Repositories", description: "Access Git repositories and codebases", count: "12 Repos" },
      { icon: "🚀", title: "Deployments", description: "Monitor deployments and releases", count: "3 Pending" },
      { icon: "📊", title: "Code Reviews", description: "Review and approve code changes", count: "5 Pending" },
      { icon: "🐛", title: "Bug Tracking", description: "Track and resolve bugs", count: "8 Active" }
    ],
    stats: [
      { label: "Active Projects", value: "8" },
      { label: "Open Tasks", value: "15" },
      { label: "Commits Today", value: "12" },
      { label: "Code Reviews", value: "5" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.DEVELOPER} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} assignedTo={user.email} />
          <AttendanceTracker userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} />
        </div>
        <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} />
        <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} />
        {selectedProject && (
          <SecretsVault projectId={selectedProject} userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} />
        )}
        <DocumentManager userId={user.email} userRole={WORKPLACE_ROLES.DEVELOPER} />
      </div>
    </RoleDashboard>
  );
}

