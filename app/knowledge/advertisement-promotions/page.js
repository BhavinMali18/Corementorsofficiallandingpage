"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function AdvertisementPromotionsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-need", label: "Why You Need It" },
    { id: "audience", label: "Who Needs This" },
    { id: "problems", label: "Problems We Solve" },
    { id: "process", label: "Our Process" },
    { id: "deliverables", label: "What You Receive" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <span className="text-sm font-medium">Advertisement & Promotions Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advertisement & Promotions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Reach the right customers at the right moment with campaigns that convert, not just create views
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Campaign
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About The Service</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Advertising is <strong className="text-gray-900">not just about spending money—it's about reaching the right customers at the right moment with the right message</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CoreMentors runs powerful promotional campaigns designed to generate leads, sales, walk-ins, and enquiries for your business.
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-semibold text-gray-900 text-center">
                  We don't just create ads, <br />
                  👉 We create campaigns that convert.
                </p>
              </div>
            </div>
          </section>

          {/* Why Businesses Need Advertising & Promotions */}
          <section id="why-need" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Businesses Need Advertising & Promotions</h2>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900">
                  Because customers have options. Your business must stand out, communicate value, and stay visible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without Advertising
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Slow customer acquisition</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Low brand awareness</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Low incoming enquiries</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Competitors easily dominate the market</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With Professional Advertising
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Continuous flow of enquiries</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>More visibility and brand recognition</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Shorter sales cycle</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Higher conversions</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Faster scaling</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Predictable growth</span>
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

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">This service is ideal for:</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    category: "Product-based businesses",
                    examples: "Clothing, mattresses, electronics, FMCG"
                  },
                  {
                    category: "Service businesses",
                    examples: "Institutes, salons, gyms, clinics"
                  },
                  {
                    category: "Real estate, interiors, builders",
                    examples: ""
                  },
                  {
                    category: "Startups wanting fast growth",
                    examples: ""
                  },
                  {
                    category: "Seasonal campaign businesses",
                    examples: "Diwali, Navratri, Christmas, Year-End Sales"
                  },
                  {
                    category: "Restaurants, cafes, delivery apps",
                    examples: ""
                  }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⭐</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.category}</h3>
                        {item.examples && <p className="text-gray-600 text-sm">→ {item.examples}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 border border-[#ec4899]/20">
                <p className="text-lg font-semibold text-gray-900 mb-3">⭐ Anyone who wants:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {["leads", "orders", "traffic", "store visits"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">📌 {item}</span>
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
                    problem: "Ads without strategy",
                    solution: "Result-based execution"
                  },
                  {
                    problem: "High cost per lead",
                    solution: "Optimized results"
                  },
                  {
                    problem: "Generic messaging",
                    solution: "Branded creative communication"
                  },
                  {
                    problem: "Only reach, no conversion",
                    solution: "Lead nurturing system"
                  },
                  {
                    problem: "No tracking",
                    solution: "Proper analytics reports"
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

          {/* Our Advertising & Promotion Flow */}
          <section id="process" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Advertising & Promotion Flow</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "STEP 1 → Research & Strategy",
                    description: "Audience segmentation & behavior, Competitor analysis, Platform wise planning",
                    details: [
                      "Audience research",
                      "Competitor analysis",
                      "Platform selection",
                      "Strategy development"
                    ]
                  },
                  {
                    step: "STEP 2 → Creative & Content Planning",
                    description: "We create: Campaign banners, Product/service graphics, Copywriting based on emotions + triggers",
                    details: [
                      "Campaign banners",
                      "Product/service graphics",
                      "Emotional copywriting",
                      "Trigger-based messaging"
                    ]
                  },
                  {
                    step: "STEP 3 → Campaign Setup",
                    description: "Includes: Facebook & Instagram Ads, Google Ads, YouTube Ads, Display network campaigns",
                    details: [
                      "Facebook & Instagram Ads",
                      "Google Ads",
                      "YouTube Ads",
                      "Display network campaigns"
                    ]
                  },
                  {
                    step: "STEP 4 → Monitoring & Optimization",
                    description: "We track: Cost per lead, Lead count, CTR, Reach & engagement, ROI",
                    details: [
                      "Cost per lead tracking",
                      "Lead count monitoring",
                      "CTR analysis",
                      "Reach & engagement",
                      "ROI measurement"
                    ]
                  },
                  {
                    step: "STEP 5 → Reporting",
                    description: "Monthly report includes: Lead data, Spend summary, Cost analysis, Observations & improvements",
                    details: [
                      "Lead data report",
                      "Spend summary",
                      "Cost analysis",
                      "Improvement recommendations"
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
                        <p className="text-gray-700 mb-4">{process.description}</p>
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

          {/* Deliverables You Receive */}
          <section id="deliverables" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deliverables You Receive</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "✔", text: "Ad creatives (banners, reels, ad scripts)" },
                  { icon: "✔", text: "Landing page/WhatsApp funnel" },
                  { icon: "✔", text: "Lead form setup" },
                  { icon: "✔", text: "Campaign optimization" },
                  { icon: "✔", text: "Retargeting system" },
                  { icon: "✔", text: "Reports & insights" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl p-5 border border-[#ec4899]/20 hover:border-[#ec4899] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-[#ec4899] font-bold">{item.icon}</div>
                      <p className="font-semibold text-gray-900 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons available:</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Customer follow-up automation",
                    "Lead management tool",
                    "CRM integration"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Benefits</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🔥", title: "Faster brand visibility", desc: "Get noticed quickly" },
                  { icon: "📈", title: "Higher conversions", desc: "More leads turn to sales" },
                  { icon: "📊", title: "Measurable results", desc: "Track every metric" },
                  { icon: "📍", title: "Geo-targeted performance", desc: "Reach local customers" },
                  { icon: "🎉", title: "Seasonal offer boost", desc: "Maximize special events" },
                  { icon: "⚡", title: "Can scale anytime", desc: "Grow your campaigns" }
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
                  { icon: "✔", title: "Research-based ad planning", desc: "Data-driven strategies" },
                  { icon: "✔", title: "High-quality creatives", desc: "Professional designs" },
                  { icon: "✔", title: "Real-time optimization", desc: "Continuous improvement" },
                  { icon: "✔", title: "ROI-focused execution", desc: "Results that matter" },
                  { icon: "✔", title: "Multi-platform expertise", desc: "All channels covered" }
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
                Ready to Reach Your Customers?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Your customers are online—reach them today. Start ads that bring enquiries, not just views.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Start Your Campaign
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 space-y-2">
                <p className="text-lg font-semibold">Your customers are online — reach them today</p>
                <p className="opacity-80">Start ads that bring enquiries, not just views</p>
                <p className="opacity-80">Promote your brand like a market leader</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

