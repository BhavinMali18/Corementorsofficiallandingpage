"use client";
import { useState } from "react";
import Button from "../../../components/Button";

export default function LegalRegistrationsCertificationsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "why-matters", label: "Why It Matters" },
    { id: "types", label: "Types of Documents" },
    { id: "risks", label: "Common Risks" },
    { id: "why-avoid", label: "Why Businesses Avoid" },
    { id: "how-we-help", label: "How We Help" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">Legal Registrations & Certifications Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why Every Business Needs Proper Legal Registrations & Certifications Before Starting Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Legal documents are not formality—they are legal identity, compliance shield, and protection against disputes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg">
                Get Legal Documentation
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most businesses start operations, marketing, hiring employees, and selling products—but <strong className="text-gray-900">forget the foundation that actually makes a business valid: Legal Documentation & Licensing</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether someone is running a shop, manufacturing unit, online business, consultancy, or startup—legal registrations are mandatory.
              </p>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-xl font-bold text-gray-900">
                  Legal documents are not formality—they are legal identity, compliance shield, and protection against disputes.
                </p>
              </div>
            </div>
          </section>

          {/* Why Legal Registration Matters? */}
          <section id="why-matters" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Legal Registration Matters?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Without legal documents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>Heavy fines during inspection</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>Bank account issues</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>Unregistered business category</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>Product restrictions</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>License rejection</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>No eligibility for tenders/loans</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">🚫</span>
                      <span>Legal disputes with vendors/customers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    With legal documentation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Business identity is legally recognized</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>You can sell anywhere in India</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Higher customer trust</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Professional brand reputation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Smooth funding and loan approvals</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>HR compliance becomes simple</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Government support becomes accessible</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-lg font-bold text-gray-900">
                  Legal certificates define your legal presence.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Legal Documents Businesses Must Have */}
          <section id="types" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Types of Legal Documents Businesses Must Have</h2>
              </div>

              <div className="space-y-8">
                {/* Business Identity Licenses */}
                <div className="bg-gradient-to-br from-[#ec4899]/5 to-[#6200B3]/5 rounded-xl p-6 border border-[#ec4899]/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-[#ec4899] font-bold">📌</span>
                    <span>1. Business Identity Licenses</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {[
                      "Udyam/MSME",
                      "Shop & Establishment",
                      "Professional Tax",
                      "IEC (if importing/exporting)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="text-gray-900 font-semibold">
                      Without these, business is technically "unregistered".
                    </p>
                  </div>
                </div>

                {/* Industry-Specific Certifications */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-[#ec4899] font-bold">📌</span>
                    <span>2. Industry-Specific Certifications</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📌 Manufacturing & Industrial Units Require:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[
                          "Pollution NOC",
                          "Factory License",
                          "ISO certification",
                          "BIS/ISI marking"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-700">
                            <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📌 Food Businesses Require:</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">FSSAI Registration or Food License</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📌 Pharma & Medical Require:</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Drug License (Retail/Wholesale/Manufacturing)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-900 font-semibold text-sm">
                      These licenses protect public interest & product compliance.
                    </p>
                  </div>
                </div>

                {/* Brand Protection Documents */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-[#ec4899] font-bold">📌</span>
                    <span>3. Brand Protection Documents</span>
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    {[
                      "Trademark",
                      "Copyright",
                      "Design registration"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200 mb-4">
                    <p className="text-gray-900 font-semibold mb-2">A brand without trademark is always at risk:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>❌ Competitors can copy</li>
                      <li>❌ Website may get seized</li>
                      <li>❌ Product packaging becomes cloneable</li>
                      <li>❌ Customer confusion increases</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-gray-900 font-semibold">
                      With trademark, brand becomes ownership certified.
                    </p>
                  </div>
                </div>

                {/* Legal Agreements & Drafts */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-[#ec4899] font-bold">📌</span>
                    <span>4. Legal Agreements & Drafts</span>
                  </h3>
                  <p className="text-gray-700 mb-4">Every professional business must maintain:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {[
                      "Partnership & LLP Agreements",
                      "Vendor Contracts",
                      "NDA Agreements",
                      "HR Appointment Letters",
                      "Supplier & Distributor Agreements"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-900 font-semibold mb-2">These documents:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>🌟 prevent disputes</li>
                      <li>🌟 define roles</li>
                      <li>🌟 protect liability</li>
                      <li>🌟 safeguard intellectual rights</li>
                    </ul>
                    <p className="text-gray-900 font-semibold mt-2">
                      Without agreements → business relationships break.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real Common Business Risks */}
          <section id="risks" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Real Common Business Risks</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    case: "Tenant opens shop without Shop Act",
                    result: "Penalty during inspection"
                  },
                  {
                    case: "Manufacturer sells without BIS markings",
                    result: "Product confiscation & legal notice"
                  },
                  {
                    case: "Startup runs without trademark",
                    result: "Brand seized by someone else"
                  },
                  {
                    case: "Restaurant runs without FSSAI",
                    result: "Immediate shutdown risk"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-900 mb-1">{item.case}</p>
                      <p className="text-gray-700">→ {item.result}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-bold text-gray-900">
                  Licenses avoid destruction of reputation.
                </p>
              </div>
            </div>
          </section>

          {/* Why Businesses Avoid Legal Documentation */}
          <section id="why-avoid" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Businesses Avoid Legal Documentation</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">Common misconceptions:</p>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  '"We don\'t need until complaints come"',
                  '"Government won\'t check us"',
                  '"It costs too much"',
                  '"We will do later"'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                    <span className="text-2xl">🚫</span>
                    <span className="text-lg font-semibold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  But when business starts earning—legal enforcement becomes frequent.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  Compliance should be proactive, not reactive.
                </p>
              </div>
            </div>
          </section>

          {/* How CoreMentors Helps in Legal Documentation */}
          <section id="how-we-help" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How CoreMentors Helps in Legal Documentation</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">Our legal experts assist with:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Document preparation",
                    "Filing & submission",
                    "Government portal registration",
                    "Renewal & certification updates",
                    "Advisory based on industry"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-2xl">⭐</span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ec4899]/10 to-[#6200B3]/10 rounded-xl p-6 mb-6 border-l-4 border-[#ec4899]">
                <p className="text-lg font-semibold text-gray-900 mb-4">We handle:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "FSSAI",
                    "ISO",
                    "MSME/Udyam",
                    "IEC",
                    "Trademark",
                    "Pollution license",
                    "Factory license",
                    "Trademark objection reply"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold mt-4">And much more.</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">You get:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Verified certificates",
                    "Documentation folder",
                    "Smart compliance reminders"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#ec4899] font-bold">📌</span>
                      <span className="font-medium text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Legal Documentation Boosts Business Value */}
          <section id="benefits" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#6200B3] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Legal Documentation Boosts Business Value</h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">Legal certificates:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🌟", title: "Add brand credibility", desc: "Builds trust instantly" },
                  { icon: "🌟", title: "Increase valuation", desc: "Higher business worth" },
                  { icon: "🌟", title: "Help launch new branches", desc: "Easy expansion" },
                  { icon: "🌟", title: "Enable e-commerce selling", desc: "Online marketplace access" },
                  { icon: "🌟", title: "Build customer trust quickly", desc: "Professional image" },
                  { icon: "🌟", title: "Make investor onboarding smoother", desc: "Funding ready" }
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

              <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-bold text-gray-900">
                  Customers prefer lawful companies.
                </p>
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
                  <p className="text-xl font-bold text-gray-900">
                    If business identity is legal, operations become scalable.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Legal documentation is like insurance. You may not value it today, but when a legal challenge comes, only legal compliance saves you.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Companies who get legal registration early:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Grow confidently",
                      "Avoid penalties",
                      "Build professional brand positioning",
                      "Expand into multiple markets"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Your Legal Documentation?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your business legally recognized. Build trust and credibility from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" className="bg-white text-[#ec4899] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  Get Legal Documentation
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

