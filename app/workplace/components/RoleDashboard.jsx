"use client";
import { useRouter } from "next/navigation";
import { CoreMentorsLogo } from "../../../components/CoreMentorsLogo";
import { WORKPLACE_ROLES } from "../utils/roles";
import WorkplaceSidebar from "./WorkplaceSidebar";

export default function RoleDashboard({ user, role, roleConfig, children }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("workplaceUser");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userAuthChange"));
    router.push("/workplace/login");
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      [WORKPLACE_ROLES.SUPER_ADMIN]: "bg-red-600",
      [WORKPLACE_ROLES.ADMIN]: "bg-[#B43E8F]",
      [WORKPLACE_ROLES.MANAGER]: "bg-purple-500",
      [WORKPLACE_ROLES.HR_MANAGER]: "bg-blue-600",
      [WORKPLACE_ROLES.GFX]: "bg-pink-500",
      [WORKPLACE_ROLES.VFX]: "bg-indigo-500",
      [WORKPLACE_ROLES.DEVELOPER]: "bg-green-600",
      [WORKPLACE_ROLES.BUSINESS_DEVELOPER]: "bg-orange-500",
      [WORKPLACE_ROLES.ACCOUNTS]: "bg-yellow-600",
      [WORKPLACE_ROLES.EMPLOYEE]: "bg-gray-500"
    };
    return colors[role] || "bg-gray-500";
  };

  const getRoleLabel = (role) => {
    const labels = {
      [WORKPLACE_ROLES.SUPER_ADMIN]: "Super Admin",
      [WORKPLACE_ROLES.ADMIN]: "Administrator",
      [WORKPLACE_ROLES.MANAGER]: "Manager",
      [WORKPLACE_ROLES.HR_MANAGER]: "HR Manager",
      [WORKPLACE_ROLES.GFX]: "Graphics Designer",
      [WORKPLACE_ROLES.VFX]: "Visual Effects",
      [WORKPLACE_ROLES.DEVELOPER]: "Developer",
      [WORKPLACE_ROLES.BUSINESS_DEVELOPER]: "Business Developer",
      [WORKPLACE_ROLES.ACCOUNTS]: "Accounts",
      [WORKPLACE_ROLES.EMPLOYEE]: "Employee"
    };
    return labels[role] || "Employee";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <WorkplaceSidebar user={user} onLogout={handleLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="container-px mx-auto py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">{roleConfig.title}</h1>
                <p className="text-xs text-gray-500">{roleConfig.welcomeMessage}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-px mx-auto py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-gray-600">
            {roleConfig.welcomeMessage}
          </p>
        </div>

        {/* Role-Specific Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roleConfig.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              {feature.count && (
                <span className="text-xs text-gray-500">{feature.count}</span>
              )}
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        {roleConfig.stats && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {roleConfig.stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Children Content */}
        {children}
        </main>
      </div>
    </div>
  );
}

