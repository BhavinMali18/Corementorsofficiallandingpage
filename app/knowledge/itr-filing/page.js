"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function ITRFilingPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-necessary", label: "Why It's Necessary" },
    { id: "what-happens", label: "What Happens If Not Filed" },
    { id: "not-just-form", label: "Not Just a Form" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "process", label: "How to File" },
    { id: "why-file", label: "Why File Even If Low Profit" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium">ITR Filing Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why Filing the Right ITR Matters for Every Business and Individual
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              A business may earn well, sell well, or even expand—but until its tax records are clear, the growth is always uncertain
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                File Your ITR Now
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A business may earn well, sell well, or even expand—but <strong className="text-gray-900">until its tax records are clear, the growth is always uncertain</strong>.
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Income Tax Return (ITR) is not just a document—
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ec4899] font-bold">👉</span>
                    <span className="text-lg">It is an official proof of income</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ec4899] font-bold">👉</span>
                    <span className="text-lg">It validates your financial standing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ec4899] font-bold">👉</span>
                    <span className="text-lg">It strengthens your business credibility</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900">
                  Most people think ITR is "year-end responsibility" <br />
                  But in reality, a correct ITR simplifies 12 months of financial planning.
                </p>
              </div>
            </div>
          </section>

          {/* Why ITR Filing Is Necessary */}
          <section id="why-necessary" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why ITR Filing Is Necessary</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Some people file ITR "just for formality"
                </p>
                <p className="text-lg font-bold text-gray-900">
                  But here is why it really matters:
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📌 Legal Proof of Your Income</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your ITR is accepted as valid income proof for:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Education loans",
                    "Home loans",
                    "Car finance",
                    "Startup registration",
                    "Government tenders",
                    "Visa approvals",
                    "Franchise or dealership allotment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#ec4899] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <p className="text-gray-900 font-semibold">
                    And this proof cannot be replaced with bank statements alone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Happens If ITR Is Not Filed or Filed Incorrectly? */}
          <section id="what-happens" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Happens If ITR Is Not Filed or Filed Incorrectly?</h2>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "Late fees (₹1000 to ₹5000)",
                  "Higher TDS deduction",
                  "Account scrutiny possible",
                  "Income mismatch issues",
                  "Rejection in credit approvals"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                    <span className="text-2xl">🚫</span>
                    <span className="text-lg font-semibold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Many businesses realize these issues too late—at the moment of:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Bank loan",
                    "Government documentation",
                    "CA clarification",
                    "Business valuation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#ec4899] font-bold">📌</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why ITR Is Not "Just a Form" */}
          <section id="not-just-form" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why ITR Is Not "Just a Form"</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  A properly prepared ITR includes:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Income from business",
                    "Expense declarations",
                    "Depreciation values",
                    "Taxes already paid",
                    "Profit & Loss calculation",
                    "Investment proof",
                    "Loss carry-forward"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#ec4899] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-bold text-gray-900">
                  This forms your financial identity.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes People Make During ITR Filing */}
          <section id="common-mistakes" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Common Mistakes People Make During ITR Filing</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    mistake: "Filing wrong ITR type",
                    detail: "(ITR-1 instead of ITR-3/5/6)"
                  },
                  {
                    mistake: "Not claiming depreciation",
                    detail: "(Loss of legal tax benefits)"
                  },
                  {
                    mistake: "Showing incorrect turnover"
                  },
                  {
                    mistake: "Not matching income in AIS & TIS"
                  },
                  {
                    mistake: "Leaving out secondary income:",
                    detail: "→ Commission income, → Rental income, → Interest income"
                  },
                  {
                    mistake: "Filing without proper books"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-900 mb-1">{item.mistake}</p>
                      {item.detail && <p className="text-gray-700">{item.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-bold text-gray-900">
                  Each of these mistakes reduces tax benefits and triggers notices.
                </p>
              </div>
            </div>
          </section>

          {/* So, How Should ITR Actually Be Filed Professionally? */}
          <section id="process" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">So, How Should ITR Actually Be Filed Professionally?</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "Step 1: Financial summary preparation",
                    items: ["Sales & receipts", "Expense sheet", "Bank reconciliation", "Ledger drafts"]
                  },
                  {
                    step: "Step 2: Document verification",
                    items: ["Form 16/16A", "TDS certificates", "AIS/TIS reconciliation"]
                  },
                  {
                    step: "Step 3: Profit calculation",
                    items: ["Real profit after tax, not assumption"]
                  },
                  {
                    step: "Step 4: Final ITR filing",
                    items: ["Through correct ITR category"]
                  },
                  {
                    step: "Step 5: Filing acknowledgement & updates",
                    items: ["This makes taxation and next year evaluation smooth"]
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
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{process.step}</h3>
                        <div className="space-y-2">
                          {process.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-700">
                              <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
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

          {/* Why Businesses Should File ITR Even If Profit Is Low */}
          <section id="why-file" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Businesses Should File ITR Even If Profit Is Low</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "To carry forward losses",
                  "To use depreciation benefits",
                  "To avail government schemes",
                  "To claim refunds",
                  "To prove income authenticity"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl border border-[#ec4899]/20">
                    <span className="text-2xl">🎯</span>
                    <span className="font-semibold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-lg font-bold text-gray-900">
                  ITR filed today helps tomorrow.
                </p>
              </div>
            </div>
          </section>

          {/* What CoreMentors Does Differently for ITR Filing */}
          <section className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What CoreMentors Does Differently for ITR Filing</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Scans AIS + 26AS properly",
                  "Matches entries with books",
                  "Identifies allowed deductions",
                  "Guides on how to reduce next year tax burden",
                  "Prepares financial summary",
                  "Maintains compliance proof"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <span className="text-2xl">⭐</span>
                    <span className="font-semibold text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-bold text-gray-900">
                  Your next year becomes simpler on day-one.
                </p>
              </div>
            </div>
          </section>

          {/* Key Benefits When CoreMentors Handles Your ITR */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Benefits When CoreMentors Handles Your ITR</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🌟", title: "Zero panic at year-end", desc: "Everything prepared in advance" },
                  { icon: "🌟", title: "Clear compliance history", desc: "Clean record for future" },
                  { icon: "🌟", title: "Easy access to loans", desc: "ITR as income proof" },
                  { icon: "🌟", title: "Low taxation with planning", desc: "Optimized tax strategy" },
                  { icon: "🌟", title: "Legal accuracy & financial confidence", desc: "Peace of mind" }
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
                    Income Tax Return is not annual burden—
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    ➡ It is your financial qualification.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Companies, individuals, and professionals who maintain ITR history experience:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Higher financial acceptance",
                    "Strong business image",
                    "Easy compliances",
                    "Better tax planning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-4 bg-green-50 rounded-xl border border-green-200">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-lg font-bold text-gray-900">
                    The earlier you start → the stronger your foundation becomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to File Your ITR Professionally?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get zero panic at year-end. File your ITR with accuracy and confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  File Your ITR Now
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



