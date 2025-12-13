"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CoreMentorsLogo } from "../../../components/CoreMentorsLogo";

export default function StudentCornerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const studentUser = localStorage.getItem("studentUser");
    if (studentUser) {
      try {
        const userData = JSON.parse(studentUser);
        if (userData.isStudent) {
          setUser(userData);
        } else {
          router.push("/student-corner/login");
        }
      } catch (e) {
        router.push("/student-corner/login");
      }
    } else {
      router.push("/student-corner/login");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("studentUser");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userAuthChange"));
    router.push("/student-corner/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
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
                <h1 className="text-xl font-bold text-gray-900">Student Corner</h1>
                <p className="text-xs text-gray-500">Internship Portal & Learning Hub</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.studentId || user.email}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                Student
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
        {/* Welcome Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h2>
              <p className="text-gray-600 mb-4">
                Continue your learning journey and track your internship progress.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Student ID:</span>
                  <span className="font-medium text-gray-900">{user.studentId || "N/A"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Status:</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-xs text-gray-500">Progress</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Projects", value: "3", color: "blue" },
            { label: "Assignments", value: "12", color: "purple" },
            { label: "Completed", value: "8", color: "green" },
            { label: "Mentor Sessions", value: "5", color: "pink" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { 
              title: "My Projects", 
              desc: "View and work on your assigned projects", 
              icon: "📁",
              count: "3 Active",
              color: "blue"
            },
            { 
              title: "Assignments", 
              desc: "Submit assignments and track deadlines", 
              icon: "📝",
              count: "4 Pending",
              color: "purple"
            },
            { 
              title: "Learning Resources", 
              desc: "Access tutorials, docs, and materials", 
              icon: "📚",
              count: "20+ Available",
              color: "green"
            },
            { 
              title: "Mentor Connect", 
              desc: "Chat with your assigned mentor", 
              icon: "👨‍🏫",
              count: "Available",
              color: "pink"
            },
            { 
              title: "Progress Tracker", 
              desc: "View your learning progress and achievements", 
              icon: "📊",
              count: "85% Complete",
              color: "indigo"
            },
            { 
              title: "Community", 
              desc: "Connect with other interns and students", 
              icon: "👥",
              count: "50+ Members",
              color: "orange"
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{feature.icon}</div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${feature.color}-100 text-${feature.color}-700`}>
                  {feature.count}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "Submitted", item: "Project Proposal", time: "2 hours ago", status: "success" },
              { action: "Received", item: "Feedback on Assignment #5", time: "1 day ago", status: "info" },
              { action: "Completed", item: "React Tutorial Module", time: "2 days ago", status: "success" },
              { action: "Scheduled", item: "Mentor Session", time: "3 days ago", status: "info" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === "success" ? "bg-green-500" : "bg-blue-500"
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}



