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

  const handleLogout = () => {
    localStorage.removeItem("workplaceUser");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userAuthChange"));
    router.push("/workplace/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <CoreMentorsLogo 
            width={60} 
            height={60} 
            strokeWidth={1.5}
            color="#B43E8F"
            duration={2}
            animated={true}
          />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-[#B43E8F] text-white";
      case "manager":
        return "bg-purple-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case "admin":
        return "Administrator";
      case "manager":
        return "Manager";
      default:
        return "Employee";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-px mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CoreMentorsLogo 
                width={40} 
                height={40} 
                strokeWidth={1.2}
                color="#B43E8F"
                duration={2}
                animated={false}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Workplace Dashboard</h1>
                <p className="text-xs text-gray-500">CoreMentors Internal Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                {getRoleLabel(user.role)}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-px mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Welcome Card */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {user.name}!
            </h2>
            <p className="text-gray-600">
              You're logged in as <strong>{getRoleLabel(user.role)}</strong>. 
              {user.role === "admin" && " You have full system access."}
              {user.role === "manager" && " You can manage teams and view reports."}
              {user.role === "employee" && " You can view your assigned projects and tasks."}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500">Active Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-xs text-gray-500">Pending Tasks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Projects", desc: "View and manage projects", icon: "📁", available: true },
            { title: "Tasks", desc: "Track your tasks and assignments", icon: "✅", available: true },
            { title: "Team", desc: "View team members and contacts", icon: "👥", available: user.role !== "employee" },
            { title: "Reports", desc: "View analytics and reports", icon: "📊", available: user.role !== "employee" },
            { title: "Settings", desc: "Configure workplace settings", icon: "⚙️", available: user.role === "admin" },
            { title: "Admin Panel", desc: "System administration", icon: "🔐", available: user.role === "admin" },
          ].map((feature) => (
            <div
              key={feature.title}
              className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all ${
                feature.available
                  ? "hover:shadow-md cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{feature.desc}</p>
              {!feature.available && (
                <span className="text-xs text-gray-400">Requires {user.role === "employee" ? "Manager" : "Admin"} access</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

