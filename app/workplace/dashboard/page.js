"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDashboardRoute } from "../utils/roles";

export default function WorkplaceDashboard() {
  const router = useRouter();

  useEffect(() => {
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role) {
          // Redirect to role-specific dashboard
          const dashboardRoute = getDashboardRoute(userData.role);
          router.push(dashboardRoute);
        } else {
          router.push("/workplace/login");
        }
      } catch (e) {
        router.push("/workplace/login");
      }
    } else {
      router.push("/workplace/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}

