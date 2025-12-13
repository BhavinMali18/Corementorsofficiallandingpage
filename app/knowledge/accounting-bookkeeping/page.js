"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function AccountingBookkeepingPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "what-is", label: "What It Is" },
    { id: "why-critical", label: "Why It's Critical" },
    { id: "scenario", label: "Real-Life Scenario" },
    { id: "reports", label: "Essential Reports" },
    { id: "why-outsource", label: "Why Outsource" },
    { id: "process", label: "Our Process" },
    { id: "benefits", label: "Key Benefits" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] text-white">
        <div className="container-px mx-auto py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Accounting & Bookkeeping Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why Every Business Needs Proper Accounting & Bookkeeping in 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Running a business is not just about selling—it is about managing money the right way
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Get Your Books Organized
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sticky Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container-px mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeSection === section.id
                    ? "border-[#ec4899] text-[#ec4899]"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-px mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Running a business is <strong className="text-gray-900">not just about selling—it is about managing money the right way</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                And that foundation begins with systematic accounting and bookkeeping.
              </p>

              <div className="bg-red-50 rounded-xl p-6 mb-6 border border-red-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Many businesses start earning but still struggle because they don't know:
                </p>
                <div className="space-y-3">
                  {[
                    "Where profit is going",
                    "Which expense is unnecessary",
                    "Whether customers are paying on time",
                    "What their actual bank balance means",
                    "How much tax they need to pay"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#ec4899] font-bold">📌</span>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900">
                  This happens because most owners depend on memory instead of financial records.
                </p>
              </div>
            </div>
          </section>

          {/* What Exactly Is Accounting & Bookkeeping? */}
          <section id="what-is" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Exactly Is Accounting & Bookkeeping?</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">In simple language:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ec4899] font-bold">👉</span>
                    <span className="text-lg"><strong>Accounting</strong> means finalizing numbers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ec4899] font-bold">👉</span>
                    <span className="text-lg"><strong>Bookkeeping</strong> means maintaining daily entries</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-semibold text-gray-900 mb-4">It includes:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Sales",
                    "Purchases",
                    "Vendor payments",
                    "Customer receivables",
                    "Expenses",
                    "Taxes",
                    "Payroll"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#ec4899] font-bold">🧾</span>
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-bold text-gray-900">
                  When tracked properly, your business runs confidently.
                </p>
              </div>
            </div>
          </section>

          {/* Why Is Accounting Critical for Growth? */}
          <section id="why-critical" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Is Accounting Critical for Growth?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without accounting
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>You don't know exact profit</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Cannot plan business expansion</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>ITR filing becomes stressful</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>GST mismatch causes penalties</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Bank loan gets delayed</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Vendors dispute occurs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With structured accounts
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>You know actual business health</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>You understand real profitability</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Planning becomes strategic</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Tax filing becomes easy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Audits become effortless</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Real-Life Scenario */}
          <section id="scenario" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Real-Life Scenario</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-lg font-semibold text-gray-900 mb-2">A business generates:</p>
                    <p className="text-3xl font-bold text-[#ec4899] mb-4">₹18 lakh monthly revenue</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-lg font-semibold text-gray-900 mb-3">But after expenses:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">•</span>
                        <span>Rent, salary, purchase, tax, transportation</span>
                      </li>
                    </ul>
                    <p className="text-2xl font-bold text-gray-900 mt-4">Actual profit remains only <span className="text-[#ec4899]">₹2.1 lakh</span></p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                      <p className="font-semibold text-gray-900 mb-2">Without accounting:</p>
                      <p className="text-gray-700">Owner assumes profit is big.</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                      <p className="font-semibold text-gray-900 mb-2">With accounting:</p>
                      <p className="text-gray-700">Actual numbers are visible.</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <p className="text-lg font-bold text-gray-900">
                      Business decisions change immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Reports Every Business Must Maintain? */}
          <section id="reports" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Reports Every Business Must Maintain?</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Here are essential financial control documents:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Monthly Profit & Loss statement",
                  "Customer outstanding sheet",
                  "Vendor payable sheet",
                  "Bank reconciliation",
                  "Expense registers",
                  "Inventory & purchase cost tracking"
                ].map((report, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                    <svg className="w-5 h-5 text-[#ec4899] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 text-sm">{report}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <p className="text-lg font-bold text-gray-900">
                  If these reports are not updated → every decision becomes guesswork.
                </p>
              </div>
            </div>
          </section>

          {/* Why Outsource Accounting Instead of Doing Internally? */}
          <section id="why-outsource" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Outsource Accounting Instead of Doing Internally?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hiring an accountant means:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">💸</span>
                      <span>Salary 15k–30k</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">💸</span>
                      <span>Training time</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">💸</span>
                      <span>Errors in filing</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">💸</span>
                      <span>Extra CA fees for correction</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">With CoreMentors:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Data accuracy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Month-end reports</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Audit-ready files</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Compliance alignment</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Affordable service plans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How CoreMentors Manages Your Accounting */}
          <section id="process" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How CoreMentors Manages Your Accounting</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "Step 1 — Business understanding",
                    description: "Nature, billing cycle, financial structure",
                    details: [
                      "Business nature analysis",
                      "Billing cycle review",
                      "Financial structure mapping"
                    ]
                  },
                  {
                    step: "Step 2 — Document syncing",
                    description: "Invoices, payment proofs, bank records, sheets",
                    details: [
                      "Invoice collection",
                      "Payment proof verification",
                      "Bank statement sync",
                      "Record organization"
                    ]
                  },
                  {
                    step: "Step 3 — Accounting and reconciliation",
                    description: "Daily / Weekly / Monthly",
                    details: [
                      "Daily entry maintenance",
                      "Weekly reconciliation",
                      "Monthly closing",
                      "Balance verification"
                    ]
                  },
                  {
                    step: "Step 4 — Reporting",
                    description: "Profit sheet + outstanding summary",
                    details: [
                      "Profit & Loss statement",
                      "Outstanding reports",
                      "Financial summaries",
                      "Performance analysis"
                    ]
                  },
                  {
                    step: "Step 5 — Tax & audit ready documentation",
                    description: "",
                    details: [
                      "Tax-ready files",
                      "Audit documentation",
                      "Compliance reports",
                      "Year-end closing"
                    ]
                  }
                ].map((process, index) => (
                  <div key={index} className="relative">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                        {index < 4 && (
                          <div className="w-0.5 h-full bg-gradient-to-b from-[#ec4899] to-[#6200B3] mx-auto mt-2" style={{ height: 'calc(100% + 2rem)' }}></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{process.step}</h3>
                        {process.description && (
                          <p className="text-gray-700 mb-4">{process.description}</p>
                        )}
                        <div className="grid md:grid-cols-2 gap-2">
                          {process.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Value Delivered */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Value Delivered</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🌟", title: "Real financial clarity", desc: "Know exactly where you stand" },
                  { icon: "🌟", title: "Better business decisions", desc: "Data-driven choices" },
                  { icon: "🌟", title: "Helps in expansion & fund raising", desc: "Investor-ready records" },
                  { icon: "🌟", title: "Smooth GST/ITR process", desc: "No stress at tax time" },
                  { icon: "🌟", title: "Professional audited records", desc: "Compliance guaranteed" }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Conclusion</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 border-l-4 border-[#ec4899]">
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    Accounting is not paperwork — It is business control.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Every business that wants growth, clarity, and financial discipline must adopt proper accounting planning.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <p className="font-semibold text-gray-900 mb-2">If accounting is weak:</p>
                    <p className="text-gray-700">Business looks profitable today, but collapses tomorrow.</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <p className="font-semibold text-gray-900 mb-2">With proper accounting:</p>
                    <p className="text-gray-700">Business grows confidently with financial clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Your Books Organized?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Stop guessing. Start knowing. Get real financial clarity for your business today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Get Your Books Organized
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Free Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}



