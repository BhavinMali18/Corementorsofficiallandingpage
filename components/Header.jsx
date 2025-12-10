"use client";
import { useState, useEffect } from "react";
import { CoreMentorsLogo } from "./CoreMentorsLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for logged in user on mount and when storage changes
  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    // Listen for storage changes (e.g., login/logout from another tab)
    window.addEventListener("storage", checkUser);
    // Listen for custom events (same tab updates)
    const handleCustomEvent = () => checkUser();
    window.addEventListener("userAuthChange", handleCustomEvent);
    
    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("userAuthChange", handleCustomEvent);
    };
  }, []);

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("workplaceUser");
    localStorage.removeItem("studentUser");
    setUser(null);
    // Trigger custom event for other components
    window.dispatchEvent(new Event("userAuthChange"));
  };

  const getUserInitial = (email) => {
    if (!email) return "?";
    return email.charAt(0).toUpperCase();
  };

  const navLinks = [
    { label: "Explore", hasDropdown: true },
    { label: "Services", hasDropdown: true },
    { label: "Knowledge", hasDropdown: true, href: "/knowledge" },
    { label: "Workplace", hasDropdown: false, href: "/workplace/login" },
    { label: "Student Corner", hasDropdown: false, href: "/student-corner/login" },
    { label: "About", hasDropdown: true },
    { label: "Contact", hasDropdown: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200 transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container-px mx-auto">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <CoreMentorsLogo 
              width={36} 
              height={36} 
              strokeWidth={1.2}
              color="#B43E8F"
              duration={2}
              animated={true}
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">
              CoreMentors
            </span>
          </a>

          {/* Search Bar - Center */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="flex items-center w-full bg-gray-100 rounded-full border border-gray-200 hover:border-gray-300 focus-within:border-[#B43E8F] focus-within:bg-white transition-colors">
              <input
                type="text"
                placeholder="Search services, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none rounded-l-full"
              />
              <div className="flex items-center border-l border-gray-300 px-3">
                <select className="text-sm text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer">
                  <option>All</option>
                  <option>Services</option>
                  <option>Solutions</option>
                  <option>Team</option>
                </select>
                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="ml-2 mr-2 w-8 h-8 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[hsl(var(--gold))] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Start Project Button */}
            <a 
              href="/start-project"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Start Project</span>
            </a>

            {/* Chat Icon */}
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            {/* Bell Icon */}
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Avatar / Login Button */}
            {user ? (
              <div className="relative group">
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity relative cursor-pointer"
                  title={user.email}
                >
                  <span className="text-base">{getUserInitial(user.email)}</span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </button>
                {/* Dropdown menu on hover */}
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
                  <div className="py-1" role="menu">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      {user.isWorkplace && user.role && (
                        <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded ${
                          user.role === "admin" ? "bg-[#B43E8F] text-white" :
                          user.role === "manager" ? "bg-purple-500 text-white" :
                          "bg-blue-500 text-white"
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      )}
                      {user.isStudent && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded bg-blue-500 text-white">
                          Student
                        </span>
                      )}
                    </div>
                    {user.isWorkplace && (
                      <a
                        href="/workplace/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Workplace Dashboard
                      </a>
                    )}
                    {user.isStudent && (
                      <a
                        href="/student-corner/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Student Corner Dashboard
                      </a>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleLoginClick}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#B43E8F] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden sm:inline">Login</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-gray-200 px-4 py-3">
          <div className="flex items-center w-full bg-gray-100 rounded-full border border-gray-200">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none rounded-l-full"
            />
            <button className="mr-2 w-8 h-8 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[hsl(var(--gold))] hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
