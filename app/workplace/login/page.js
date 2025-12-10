"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import { CoreMentorsLogo } from "../../../components/CoreMentorsLogo";
import { detectRoleFromEmail, getDashboardRoute, validateWorkplaceEmail } from "../utils/roles";

export default function WorkplaceLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "employee" // employee, manager, admin
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      setIsLoading(false);
      return;
    }

    // Validate email pattern: name.role@corementors.in
    if (!validateWorkplaceEmail(formData.email)) {
      setError("Invalid email format. Workplace emails must follow the pattern: name.role@corementors.in (e.g., john.gfx@corementors.in)");
      setIsLoading(false);
      return;
    }

    // Simulate API call (replace with actual API)
    setTimeout(() => {
      // Determine role based on email
      const role = detectRoleFromEmail(formData.email);

      // Extract name from email pattern: name.role@corementors.in
      const emailMatch = formData.email.match(/^([a-z0-9._-]+)\./i);
      const extractedName = emailMatch ? emailMatch[1].charAt(0).toUpperCase() + emailMatch[1].slice(1) : formData.email.split("@")[0];
      
      const userData = {
        email: formData.email,
        name: extractedName,
        provider: "email",
        role: role,
        isWorkplace: true
      };

      localStorage.setItem("workplaceUser", JSON.stringify(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      
      window.dispatchEvent(new Event("userAuthChange"));
      
      // Redirect to role-specific dashboard
      const dashboardRoute = getDashboardRoute(role);
      window.location.href = dashboardRoute;
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#1a1f3a] to-[#050816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CoreMentorsLogo 
              width={60} 
              height={60} 
              strokeWidth={1.5}
              color="#B43E8F"
              duration={2}
              animated={true}
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B43E8F]/20 border border-[#B43E8F]/40 rounded-full mb-4">
            <svg className="w-4 h-4 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-xs font-medium text-[#B43E8F]">WORKPLACE ACCESS</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Workplace Login</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access employee, manager, or admin dashboard
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Email Login Form */}
        <div className="space-y-4">
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="name.role@corementors.in"
              />
              <p className="mt-1 text-xs text-gray-400">Format: name.role@corementors.in (e.g., john.gfx@corementors.in)</p>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#B43E8F] focus:ring-[#B43E8F] border-gray-600 bg-gray-900/50 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#B43E8F] hover:text-[#6200B3]">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-full h-11 bg-[#B43E8F] hover:bg-[#6200B3]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in to Workplace"}
              </Button>
            </div>
          </form>
        </div>

        {/* Role Info */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-4">
          <p className="text-xs font-medium text-gray-400 mb-2">Email Format & Roles:</p>
          <div className="space-y-1 text-xs text-gray-500 mb-3">
            <p className="text-gray-400">Format: <code className="text-[#B43E8F]">name.role@corementors.in</code></p>
          </div>
          <div className="space-y-1 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span><strong>gfx, vfx, developer, businessdeveloper, accounts:</strong> Role-specific dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span><strong>manager, hrmanager:</strong> Management dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B43E8F] rounded-full"></span>
              <span><strong>admin, superadmin:</strong> Administrative access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span><strong>Other roles:</strong> Employee dashboard</span>
            </div>
          </div>
        </div>

        {/* Back to Public Site */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Not an employee?{" "}
            <a href="/login" className="font-medium text-[#B43E8F] hover:text-[#6200B3]">
              Public Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

