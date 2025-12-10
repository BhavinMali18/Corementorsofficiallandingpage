"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on login/signup pages, start-project page, and all workplace dashboards
  const hideFooterPaths = [
    "/login",
    "/signup",
    "/workplace/login",
    "/workplace/dashboard",
    "/workplace/super-admin",
    "/workplace/admin",
    "/workplace/manager",
    "/workplace/hr-manager",
    "/workplace/gfx",
    "/workplace/vfx",
    "/workplace/developer",
    "/workplace/business-developer",
    "/workplace/accounts",
    "/workplace/employee",
    "/student-corner/login",
    "/student-corner/signup",
    "/student-corner/dashboard",
    "/start-project"
  ];
  
  const shouldHideFooter = hideFooterPaths.some(path => pathname?.startsWith(path)) || pathname?.startsWith("/workplace/");
  
  if (shouldHideFooter) {
    return null;
  }
  
  return <Footer />;
}

