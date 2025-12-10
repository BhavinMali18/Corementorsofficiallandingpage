"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import { CoreMentorsLogo } from "../../../components/CoreMentorsLogo";

export default function StudentCornerLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    studentId: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load Google Identity Services for student corner
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.google && window.google.accounts) {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        if (clientId && clientId !== "YOUR_GOOGLE_CLIENT_ID") {
          try {
            window.google.accounts.id.initialize({
              client_id: clientId,
              callback: handleGoogleStudentSignIn,
            });

            const buttonElement = document.getElementById("google-student-signin-button");
            if (buttonElement) {
              window.google.accounts.id.renderButton(buttonElement, {
                theme: "outline",
                size: "large",
                width: "100%",
                text: "signin_with",
                locale: "en"
              });
            }
          } catch (err) {
            console.error("Google Sign-In initialization error:", err);
          }
        } else {
          const buttonElement = document.getElementById("google-student-signin-button");
          if (buttonElement) {
            buttonElement.innerHTML = `
              <button 
                disabled
                class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 bg-gray-50 cursor-not-allowed"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google Sign-In (Configure Client ID)
              </button>
            `;
          }
        }
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleGoogleStudentSignIn = (response) => {
    setIsLoading(true);
    setError("");

    try {
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      const userData = {
        email: payload.email,
        name: payload.name || payload.given_name || payload.email.split("@")[0],
        picture: payload.picture,
        provider: "google",
        role: "student",
        isStudent: true,
        studentId: payload.email.split("@")[0] // Use email prefix as student ID
      };

      localStorage.setItem("studentUser", JSON.stringify(userData));
      localStorage.setItem("user", JSON.stringify(userData)); // Also set in main user for header
      
      window.dispatchEvent(new Event("userAuthChange"));
      window.location.href = "/student-corner/dashboard";
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
      setIsLoading(false);
    }
  };

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

    if (!formData.studentId) {
      setError("Please enter your Student ID");
      setIsLoading(false);
      return;
    }

    // Simulate API call (replace with actual API)
    setTimeout(() => {
      const userData = {
        email: formData.email,
        name: formData.email.split("@")[0],
        provider: "email",
        role: "student",
        isStudent: true,
        studentId: formData.studentId
      };

      localStorage.setItem("studentUser", JSON.stringify(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      
      window.dispatchEvent(new Event("userAuthChange"));
      window.location.href = "/student-corner/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-300 rounded-full mb-4">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium text-blue-600">STUDENT CORNER</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome, Students!</h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Google Sign In Button */}
        <div className="space-y-4">
          <div id="google-student-signin-button" className="w-full"></div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                value={formData.studentId}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="STU-2024-001"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="student@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in to Student Corner"}
              </Button>
            </div>
          </form>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs font-medium text-blue-900 mb-2">What you can access:</p>
          <div className="space-y-1 text-xs text-blue-700">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>View internship assignments and projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Submit work and track progress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Access learning resources and materials</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Connect with mentors and peers</span>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/student-corner/signup" className="font-medium text-blue-600 hover:text-blue-700">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

