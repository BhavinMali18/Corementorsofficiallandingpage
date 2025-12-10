"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import TaskManager from "../components/TaskManager";
import AttendanceTracker from "../components/AttendanceTracker";
import PerformancePoints from "../components/PerformancePoints";
import LeaveManager from "../components/LeaveManager";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function EmployeeDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.EMPLOYEE) {
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
    title: "Employee Dashboard",
    welcomeMessage: "View your assigned tasks, projects, and workplace information.",
    features: [
      { icon: "📋", title: "My Tasks", description: "View and manage your assigned tasks", count: "8 Active" },
      { icon: "📁", title: "Projects", description: "View projects you're working on", count: "3 Active" },
      { icon: "📅", title: "Schedule", description: "View your work schedule and calendar", count: "This Week" },
      { icon: "📊", title: "Performance", description: "View your performance metrics", count: "Current" },
      { icon: "💬", title: "Messages", description: "Communicate with team members", count: "5 New" },
      { icon: "📝", title: "Time Tracking", description: "Track your work hours and time", count: "This Week" }
    ],
    stats: [
      { label: "Active Tasks", value: "8" },
      { label: "Projects", value: "3" },
      { label: "Hours This Week", value: "32" },
      { label: "Completed", value: "15" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.EMPLOYEE} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager userId={user.email} userRole={WORKPLACE_ROLES.EMPLOYEE} assignedTo={user.email} />
          <AttendanceTracker userId={user.email} userRole={WORKPLACE_ROLES.EMPLOYEE} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformancePoints userId={user.email} userRole={WORKPLACE_ROLES.EMPLOYEE} />
          <LeaveManager userId={user.email} userRole={WORKPLACE_ROLES.EMPLOYEE} />
        </div>
      </div>
    </RoleDashboard>
  );
}

