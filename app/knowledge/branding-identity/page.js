"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function BrandingIdentityPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-need", label: "Why It's Important" },
    { id: "audience", label: "Target Audience" },
    { id: "problems", label: "Problems We Solve" },
    { id: "includes", label: "What We Include" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="text-sm font-medium">Branding & Identity Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Branding & Identity
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Create the personality of your business that customers see, remember, and relate to
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Build Your Brand Identity
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                View Portfolio
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About The Service</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Branding & Identity is <strong className="text-gray-900">not just design—it is the personality of your business</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It defines how your customers see you, remember you, and relate to you.
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  CoreMentors creates a complete corporate identity that clearly communicates:
                </p>
                <div className="space-y-3">
                  {[
                    "Who you are",
                    "What you represent",
                    "What makes you different"
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
                <p className="text-lg font-bold text-gray-900">
                  A strong brand identity builds authority, trust, and loyalty.
                </p>
              </div>
            </div>
          </section>

          {/* Why Branding & Identity Is Important */}
          <section id="why-need" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Branding & Identity Is Important</h2>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Because in today's competitive market, customers compare before choosing any service.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without strong branding
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>You look like just another business</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Customers forget you easily</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>You cannot charge premium pricing</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Marketing performance remains weak</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With strong branding
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>You look premium and trustworthy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Customers recall you instantly</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Your business becomes memorable</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Advertising gives higher results</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Premium pricing becomes possible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section id="audience" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Target Audience</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">This service is ideal for:</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Startups & New Businesses",
                  "Businesses planning rebranding",
                  "Manufacturers & Retailers",
                  "Service providers",
                  "Personal brands",
                  "Growing companies"
                ].map((client, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-[#ec4899] transition-colors">
                    <div className="text-2xl">⭐</div>
                    <p className="font-semibold text-gray-900 text-sm">{client}</p>
                  </div>
                ))}
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
                    problem: "Customer confusion about your business",
                    solution: "Clear identity communication"
                  },
                  {
                    problem: "Elements look mismatched everywhere",
                    solution: "Unified brand guidelines"
                  },
                  {
                    problem: "Difficult to maintain professional presence",
                    solution: "Consistent brand formats"
                  },
                  {
                    problem: "Weak customer recall",
                    solution: "Psychology-based branding"
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

          {/* What We Include in Brand Identity */}
          <section id="includes" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What We Include in Brand Identity</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">You receive:</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "🎨", text: "Logo variations" },
                  { icon: "✍️", text: "Typography & fonts" },
                  { icon: "🌈", text: "Brand color palette" },
                  { icon: "🔷", text: "Icon & symbol assets" },
                  { icon: "🎭", text: "Corporate theme style" },
                  { icon: "💼", text: "Business card design" },
                  { icon: "📄", text: "Letterhead design" },
                  { icon: "✉️", text: "Envelope & stationery" },
                  { icon: "📱", text: "Social media theme set" },
                  { icon: "📖", text: "Brand usage guide" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl p-5 border border-[#ec4899]/20 hover:border-[#ec4899] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{item.icon}</div>
                      <p className="font-semibold text-gray-900 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Branding Process */}
          <section id="process" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Branding Process</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "STEP 1: Brand Research",
                    description: "Industry category, Competitors, Audience persona, Brand tone",
                    details: [
                      "Industry analysis",
                      "Competitor research",
                      "Target audience persona",
                      "Brand tone definition"
                    ]
                  },
                  {
                    step: "STEP 2: Identity Creation",
                    description: "We develop: Logo, Icons, Visual mark, Typography mix",
                    details: [
                      "Logo design",
                      "Icon creation",
                      "Visual mark development",
                      "Typography selection"
                    ]
                  },
                  {
                    step: "STEP 3: Theme Building",
                    description: "Brand style, Color mood, Layout system",
                    details: [
                      "Brand style guide",
                      "Color palette creation",
                      "Layout system design",
                      "Visual consistency"
                    ]
                  },
                  {
                    step: "STEP 4: Corporate Assets",
                    description: "Designing of: Visiting cards, Stationery, Social templates, Packaging base",
                    details: [
                      "Business card design",
                      "Stationery design",
                      "Social media templates",
                      "Packaging design base"
                    ]
                  },
                  {
                    step: "STEP 5: Branding Kit Delivery",
                    description: "You receive: Editable files, Brand usage guide, Final package",
                    details: [
                      "Editable source files",
                      "Brand usage guidelines",
                      "Complete brand package",
                      "Implementation support"
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

          {/* Why CoreMentors Branding Works */}
          <section className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why CoreMentors Branding Works</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🔥", title: "Strategic thinking, not random designing", desc: "Every element is purpose-driven" },
                  { icon: "🎯", title: "Market-oriented visual identity", desc: "Designed for your target audience" },
                  { icon: "💼", title: "Professional presentation & structure", desc: "Enterprise-grade quality" },
                  { icon: "📈", title: "Long-term scalable branding", desc: "Grows with your business" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Business Benefits */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Business Benefits</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🤝", title: "Higher trust & credibility", desc: "Build authority in your market" },
                  { icon: "🧠", title: "More memorable identity", desc: "Customers remember you instantly" },
                  { icon: "💎", title: "Premium market positioning", desc: "Stand out from competitors" },
                  { icon: "🌐", title: "Strong digital & offline presence", desc: "Consistent brand everywhere" },
                  { icon: "🚀", title: "Smooth expansion into multiple locations", desc: "Scalable brand system" }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit.title}
                      </h3>
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
                Ready to Build Your Brand Identity?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Create an identity that customers never forget. Upgrade your brand to look premium and powerful.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Build Your Brand Identity
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  View Portfolio
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 space-y-2">
                <p className="text-lg font-semibold">Build your identity that customers never forget</p>
                <p className="opacity-80">Upgrade your brand to look premium</p>
                <p className="opacity-80">Make your business visually powerful</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}



