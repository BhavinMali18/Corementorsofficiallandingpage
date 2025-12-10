"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoleDashboard from "../components/RoleDashboard";
import { WORKPLACE_ROLES } from "../utils/roles";
import PayrollManager from "../components/PayrollManager";
import ProjectManager from "../components/ProjectManager";
import ReportsAnalytics from "../components/ReportsAnalytics";
import { initializeWorkplaceData } from "../utils/dataModels";

export default function AccountsDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeWorkplaceData();
    const workplaceUser = localStorage.getItem("workplaceUser");
    if (workplaceUser) {
      try {
        const userData = JSON.parse(workplaceUser);
        if (userData.isWorkplace && userData.role === WORKPLACE_ROLES.ACCOUNTS) {
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
    title: "Accounts Dashboard",
    welcomeMessage: "Manage financial records, invoices, payments, and accounting operations.",
    features: [
      { icon: "💰", title: "Invoices", description: "Create and manage invoices", count: "12 Pending" },
      { icon: "💳", title: "Payments", description: "Track payments and transactions", count: "8 Received" },
      { icon: "📊", title: "Financial Reports", description: "Generate financial reports and statements", count: "Monthly" },
      { icon: "📋", title: "Expenses", description: "Track and manage expenses", count: "45 This Month" },
      { icon: "🏦", title: "Bank Reconciliation", description: "Reconcile bank accounts", count: "3 Pending" },
      { icon: "📈", title: "Budget Tracking", description: "Monitor budgets and forecasts", count: "All Departments" }
    ],
    stats: [
      { label: "Pending Invoices", value: "12" },
      { label: "This Month Revenue", value: "$250K" },
      { label: "Outstanding", value: "$45K" },
      { label: "Expenses", value: "$180K" }
    ]
  };

  return (
    <RoleDashboard user={user} role={WORKPLACE_ROLES.ACCOUNTS} roleConfig={roleConfig}>
      <div className="space-y-6 mt-8">
        <PayrollManager userId={user.email} userRole={WORKPLACE_ROLES.ACCOUNTS} />
        <ProjectManager userId={user.email} userRole={WORKPLACE_ROLES.ACCOUNTS} />
        <ReportsAnalytics userId={user.email} userRole={WORKPLACE_ROLES.ACCOUNTS} />
      </div>
    </RoleDashboard>
  );
}

