"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function DigitalStrategyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-need", label: "Why It's Important" },
    { id: "audience", label: "Who Needs This" },
    { id: "problems", label: "Problems We Solve" },
    { id: "includes", label: "What We Include" },
    { id: "output", label: "What You Receive" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-medium">Digital Strategy Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Strategy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Build a complete digital roadmap that connects all channels and turns audiences into paying customers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Create Your Strategy
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                View Case Studies
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
          {/* About The Service */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About The Service</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Digital Strategy means creating a <strong className="text-gray-900">proper plan that helps your business grow online efficiently</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At CoreMentors, we don't just run ads or make websites—we build a complete digital roadmap that connects:
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Website",
                    "Social Media",
                    "Sales Funnels",
                    "Advertising",
                    "Automation",
                    "Branding",
                    "Customer Retention System"
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

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-lg font-bold text-gray-900 mb-2">Our goal is simple:</p>
                <p className="text-lg text-gray-700">
                  👉 Turn audiences into paying customers <br />
                  👉 And paying customers into repeat buyers
                </p>
              </div>
            </div>
          </section>

          {/* Why Digital Strategy Is Important */}
          <section id="why-need" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Digital Strategy Is Important</h2>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900">
                  Because most businesses fail online due to random decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without a Digital Strategy
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Posting content without direction</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Money wasted on wrong ads</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No tracking of conversions</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Confusion about next steps</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No customer retention</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No predictable revenue</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With a proper Digital Strategy
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Every activity becomes result-based</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>You know where leads are coming from</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Measured marketing spend</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Maximum reach with minimum cost</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>High customer retention</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Faster business scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Who Needs Digital Strategy */}
          <section id="audience" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Who Needs Digital Strategy</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  "Businesses that are growing",
                  "Entrepreneurs launching new brands",
                  "Companies selling services monthly",
                  "Retail & manufacturing businesses",
                  "Personal brands",
                  "Real estate, healthcare, education sectors",
                  "E-commerce & subscription-based apps"
                ].map((client, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                    <div className="text-2xl">⭐</div>
                    <p className="font-semibold text-gray-900 text-sm">{client}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">Especially useful for:</p>
                <p className="text-xl font-bold text-[#ec4899]">🏆 Startups and companies planning expansion</p>
              </div>
            </div>
          </section>

          {/* What Problems We Solve */}
          <section id="problems" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Problems We Solve</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    problem: "No clarity on digital execution",
                    solution: "We create step-by-step plan"
                  },
                  {
                    problem: "Team doesn't know what to do",
                    solution: "We define clear roles & flow"
                  },
                  {
                    problem: "Leads are coming but not converting",
                    solution: "We set well-planned funnels"
                  },
                  {
                    problem: "Posting but not getting results",
                    solution: "We align content to conversions"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-900 mb-2">
                        ❌ {item.problem}
                      </p>
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <p className="text-lg font-bold text-green-600">
                          ✓ {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What Our Digital Strategy Includes */}
          <section id="includes" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Our Digital Strategy Includes</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Business Research",
                    items: [
                      "Category understanding",
                      "Competitor study",
                      "Target market research"
                    ]
                  },
                  {
                    title: "Positioning Strategy",
                    items: [
                      "What message should brand communicate?",
                      "What makes you different?"
                    ]
                  },
                  {
                    title: "Visibility Strategy",
                    items: [
                      "Where to appear?",
                      "Examples: IG, FB, Google, YouTube, LinkedIn"
                    ]
                  },
                  {
                    title: "Conversion Strategy",
                    items: [
                      "Landing pages",
                      "Offers",
                      "Forms",
                      "CTAs"
                    ]
                  },
                  {
                    title: "Retention & Repeat Strategy",
                    items: [
                      "CRM integration",
                      "Loyalty program",
                      "Follow-up automation",
                      "Post-purchase campaigns"
                    ]
                  }
                ].map((strategy, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl border border-[#ec4899]/20">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {strategy.title}
                    </h3>
                    <ul className="space-y-2">
                      {strategy.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#ec4899] font-bold">📌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Output You Receive */}
          <section id="output" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Output You Receive</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🎯", text: "Full Digital Growth Plan" },
                  { icon: "📌", text: "90-Day Execution Strategy" },
                  { icon: "📝", text: "Content Strategy Sheet" },
                  { icon: "📌", text: "Campaign Roadmap" },
                  { icon: "🖥", text: "Customer Journey Map" },
                  { icon: "📊", text: "Lead Conversion Framework" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl p-5 border border-[#ec4899]/20 hover:border-[#ec4899] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{item.icon}</div>
                      <p className="font-semibold text-gray-900 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optional Add-ons:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Performance Monitoring",
                    "Sales Team Training",
                    "Funnel Setup",
                    "CRM + Automation Setup"
                  ].map((addon, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">✨ {addon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Benefits</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🔥", title: "Maximum ROI on marketing", desc: "Every dollar works harder" },
                  { icon: "📈", title: "Predictable business growth", desc: "Clear path to success" },
                  { icon: "🎯", title: "Strong positioning in the market", desc: "Stand out from competitors" },
                  { icon: "💬", title: "Smart communication & branding", desc: "Consistent messaging" },
                  { icon: "✨", title: "Complete clarity on direction", desc: "No more confusion" }
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

          {/* Why Choose CoreMentors */}
          <section className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Choose CoreMentors</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "✔", title: "Strategic + technical approach", desc: "Best of both worlds" },
                  { icon: "✔", title: "Experience in multiple industries", desc: "Proven expertise" },
                  { icon: "✔", title: "Business-oriented planning", desc: "Focused on results" },
                  { icon: "✔", title: "Not just suggestions—execution support", desc: "We implement too" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="text-2xl text-[#ec4899] font-bold">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Digital Strategy?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create your brand's growth blueprint. Build your 90-day predictable online success plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Create Your Strategy
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 space-y-2">
                <p className="text-lg font-semibold">Let's create your brand's growth blueprint</p>
                <p className="opacity-80">Build your 90-day predictable online success plan</p>
                <p className="opacity-80">Move your business from random to strategic growth</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

