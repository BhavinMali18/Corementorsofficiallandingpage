"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function SocialMediaManagementPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-need", label: "Why You Need It" },
    { id: "audience", label: "Who Needs This" },
    { id: "problems", label: "Problems We Solve" },
    { id: "process", label: "Our Process" },
    { id: "deliverables", label: "What You Get" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-sm font-medium">Social Media Management Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Social Media Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Your marketplace, customer support center, and branding stage—all in one place
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Start Growing Your Brand
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About The Service</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Social Media today is your business's <strong className="text-gray-900">marketplace, customer support center, and branding stage</strong>—everything at one place.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Through professional Social Media Management, CoreMentors helps you maintain your brand's presence with result-oriented content, engagement, and growth strategies.
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-gray-800 font-medium mb-4">
                  You get:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Daily content",
                    "Brand visibility",
                    "Active customer engagement",
                    "Consistent brand impression"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-[#ec4899] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <p className="text-lg font-semibold text-gray-900">
                  Your audience stays connected, informed, and ready to do business with you.
                </p>
              </div>
            </div>
          </section>

          {/* Why Businesses Need Social Media Management */}
          <section id="why-need" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Businesses Need Social Media Management</h2>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 mb-8">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  ⚡ Critical Insight: Your customers are spending <span className="text-orange-600">3–5 hours daily</span> on social platforms
                </p>
                <p className="text-gray-700">
                  Be where your customers are. Every single day.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without Management
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Inconsistent posting</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No brand recognition</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No trust building</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Low engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Competitors lead the market</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With Proper Management
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Regular brand visibility</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Better engagement & enquiries</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Professional identity</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Faster trust building</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>More inbound leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Who Needs This Service */}
          <section id="audience" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Who Needs This Service</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Businesses who want:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Brand awareness",
                    "Lead generation",
                    "Customer loyalty",
                    "Promotion of offers, products, or services"
                  ].map((goal, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ideal clients include:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Retail businesses",
                    "Manufacturers",
                    "Doctors & clinics",
                    "Gyms & salons",
                    "Consultants & trainers",
                    "Real estate & interior businesses",
                    "Startups & personal brands"
                  ].map((client, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                      <div className="text-2xl">⭐</div>
                      <p className="font-semibold text-gray-900">{client}</p>
                    </div>
                  ))}
                </div>
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
                    problem: "Customer forgets you",
                    solution: "We maintain brand activity",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  {
                    problem: "No attractive identity",
                    solution: "We design premium content",
                    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  },
                  {
                    problem: "Low audience engagement",
                    solution: "We add strategies, campaigns & hooks",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  },
                  {
                    problem: "Social pages not converting",
                    solution: "We add CTAs, funnels, highlights",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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

          {/* Our Social Media Management Process */}
          <section id="process" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Social Media Management Process</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1: Strategy Planning",
                    description: "Audience study, Competitor analysis, Positioning strategy, Content direction set",
                    details: [
                      "Deep audience research & persona development",
                      "Competitor landscape analysis",
                      "Brand positioning strategy",
                      "Content theme & direction planning",
                      "Platform-specific strategy"
                    ]
                  },
                  {
                    phase: "Phase 2: Content Production",
                    description: "We create: Posts, Carousels, Reels, Infographics, Story highlights, Product showcases",
                    details: [
                      "Custom-designed posts",
                      "Engaging carousel content",
                      "Trending reels & videos",
                      "Informative infographics",
                      "Story highlights & collections",
                      "Product showcase content"
                    ]
                  },
                  {
                    phase: "Phase 3: Posting & Scheduling",
                    description: "With: Consistent timings, Platform-wise sizing, Content calendar planning",
                    details: [
                      "Optimal posting schedule",
                      "Platform-specific sizing",
                      "Monthly content calendar",
                      "Automated scheduling",
                      "Cross-platform coordination"
                    ]
                  },
                  {
                    phase: "Phase 4: Growth & Engagement",
                    description: "We manage: Comments & replies, DMs replies, Lead handling (basic), Weekly audience engagement",
                    details: [
                      "Real-time comment management",
                      "Direct message responses",
                      "Lead qualification & handling",
                      "Community engagement",
                      "Influencer outreach"
                    ]
                  },
                  {
                    phase: "Phase 5: Performance Insights",
                    description: "Monthly report: Reach, Followers, Engagement, Lead result",
                    details: [
                      "Reach & impressions analysis",
                      "Follower growth tracking",
                      "Engagement rate metrics",
                      "Lead generation results",
                      "ROI & conversion tracking"
                    ]
                  }
                ].map((phase, index) => (
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
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                        <p className="text-gray-700 mb-4">{phase.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.details.map((detail, idx) => (
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

          {/* Deliverables You Get */}
          <section id="deliverables" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deliverables You Get</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "8–20 Posts per month (depending package)",
                  "4–12 reels",
                  "Monthly content roadmap",
                  "Branding template kit",
                  "Copywriting & captions",
                  "Hashtag research",
                  "Scheduling & publishing",
                  "Engagement tracking report"
                ].map((deliverable, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl p-5 border border-[#ec4899]/20 hover:border-[#ec4899] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">{deliverable}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Benefits</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🔥", title: "Your brand is always active", desc: "Consistent presence keeps you top-of-mind" },
                  { icon: "📈", title: "More visibility, more enquiries", desc: "Increased reach leads to more business opportunities" },
                  { icon: "🎨", title: "Designed content, not random photos", desc: "Professional, on-brand visuals that convert" },
                  { icon: "🎯", title: "On-brand color consistency", desc: "Cohesive visual identity across all platforms" },
                  { icon: "⭐", title: "Professional reputation", desc: "Build trust and credibility with your audience" }
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

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Brand Digitally?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Connect with customers where they already spend time. Consistency = Conversion
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Start Your Social Media Journey
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold mb-2">Grow your brand digitally</p>
                <p className="opacity-80">Let's make your brand unforgettable on social media</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}



