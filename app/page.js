"use client";
import Button from "../components/Button";
import { DrawLineText } from "../components/gsap/draw-line-text";
import LogoLoop from "../components/LogoLoop";

export default function HomePage() {
  const techLogos = [
    { node: <span className="text-2xl font-bold text-[#B43E8F]">React</span>, title: "React" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Next.js</span>, title: "Next.js" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">TypeScript</span>, title: "TypeScript" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">AWS</span>, title: "AWS" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Azure</span>, title: "Azure" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Docker</span>, title: "Docker" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Kubernetes</span>, title: "Kubernetes" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Python</span>, title: "Python" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">Node.js</span>, title: "Node.js" },
    { node: <span className="text-2xl font-bold text-[#B43E8F]">MongoDB</span>, title: "MongoDB" }
  ];

  return (
    <>
      <section className="container-px mx-auto pt-10 sm:pt-16 pb-12 sm:pb-16 min-h-[70vh] flex items-center">
        <div className="mx-auto w-full max-w-4xl text-center">
          <span className="inline-block rounded-full border border-[#B43E8F]/40 px-3 py-1 text-xs font-medium text-[#B43E8F]">
            Enterprise-grade IT Services
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Build, scale and secure your digital business with
          </h1>
          <div className="mt-2 max-w-full">
            <DrawLineText className="mx-auto" fontSize={96} strokeWidth={2} text="CoreMentors" color="#B43E8F" />
          </div>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            From strategy to delivery: product engineering, cloud & DevOps, data & AI,
            cybersecurity, and managed support—tailored to your goals.
          </p>
          <p className="mt-3 text-xs text-gray-500">No sales fluff. Outcomes, on-time, on-budget.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">Technologies We Work With</h2>
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="w-full py-16">
        {/* Top Banner */}
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-[#6200B3] via-[#B43E8F] to-[#3B0086] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
            }}></div>
          </div>
          <div className="container-px mx-auto relative z-10 h-full min-h-[500px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 w-full items-center">
              {/* Left Side - Text Content */}
              <div className="text-white space-y-6">
                <div className="space-y-2">
                  <h2 className="text-6xl sm:text-7xl font-bold tracking-tight w-fit">DEVELOPMENT</h2>
                  <h2 className="text-6xl sm:text-7xl font-bold tracking-tight w-fit">DEPLOYMENT</h2>
                  <h2 className="text-6xl sm:text-7xl font-bold tracking-tight w-fit">OPTIMIZATION</h2>
                </div>
                
                {/* Profile Avatars */}
                <div className="flex items-center gap-3 mt-8">
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <button className="px-6 py-3 bg-white text-[#6200B3] rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - VR Girl Image */}
              <div className="relative lg:flex hidden items-center justify-center">
                <div className="relative w-full max-w-2xl h-[600px] flex items-end justify-center bg-transparent">
                  <img 
                    src="/Images/propswithtransparentbg/transparentgirlwithvr2.svg"
                    alt="Woman with VR headset"
                    className="w-full h-full object-contain object-bottom scale-110"
                    style={{ 
                      backgroundColor: 'transparent',
                      mixBlendMode: 'normal'
                    }}
                  />
                  {/* Annotations */}
                  <div className="absolute top-16 left-4 bg-white/95 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4056F4] rounded-full"></div>
                    Cloud Services
                  </div>
                  <div className="absolute bottom-24 right-8 bg-white/95 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4056F4] rounded-full"></div>
                    AI Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Panels Grid */}
        <div className="container-px mx-auto mt-8 grid gap-6 lg:grid-cols-3">
          {/* Left Panel - Dark Gray */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Performance, Measured.</h3>
              <p className="text-gray-300 mb-8">Determine how our solutions deliver, scale, and optimize your business.</p>
              
              <div className="flex items-center gap-6 border-t border-gray-700 pt-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">System Uptime</p>
                  <p className="text-5xl font-bold">99.9%</p>
                </div>
                <div className="w-px h-16 bg-gray-700"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">Cost Reduction</p>
                  <p className="text-5xl font-bold">3.5x</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Panel - Light Gray */}
          <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="relative z-10 mt-16">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-gray-700 text-center font-medium">Breaking down development, deployment, and optimization.</p>
            </div>
          </div>

          {/* Right Panel - Lime Green Gradient */}
          <div className="bg-gradient-to-br from-[#EA7AF4] via-[#B43E8F] to-[#6200B3] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold mb-6">IT performance across development, operations, security.</p>
              
              <div className="flex gap-3 mt-8">
                <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
              <svg className="w-full h-full text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* UI Showcase Section - Grid Layout */}
      <section className="flex justify-center px-4 py-8 w-full bg-white" style={{ minHeight: '100vh' }}>
        <div 
          className="grid"
          style={{
            width: 'min(1440px, 100vw - 64px)',
            gridTemplateColumns: 'repeat(19, minmax(0, 1fr))',
            gridAutoRows: '140px',
            gap: '16px'
          }}
        >
          {/* div1 - grid-area: 1 / 1 / 3 / 6 - 2 rows × 5 cols ≈ 367 × 296 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block" 
            style={{ 
              gridArea: '1 / 1 / 3 / 6',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-gray-500 mb-1">MY STACKS</p>
            <h2 className="text-[18px] font-semibold text-gray-900 mb-1">Tech Arsenal</h2>
            <p className="text-[13px] text-gray-600 mb-5">360° engineering toolkit for modern businesses.</p>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Next.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                <button 
                  key={tech} 
                  className="min-w-[140px] h-11 px-4 rounded-full text-[14px] font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* div2 - grid-area: 3 / 1 / 5 / 6 - 2 rows × 5 cols ≈ 367 × 296 px */}
          <div 
            className="rounded-[20px] p-6 flex flex-col justify-center hidden md:block" 
            style={{ 
              gridArea: '3 / 1 / 5 / 6',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <p className="text-[13px] text-gray-600">Delivered Projects</p>
            </div>
            <p className="text-[44px] font-bold text-gray-900 mb-2 leading-none">56+</p>
            <p className="text-[13px] text-gray-600">Custom software & SaaS solutions shipped.</p>
          </div>

          {/* div3 - grid-area: 5 / 1 / 7 / 6 - 2 rows × 5 cols ≈ 367 × 296 px */}
          <div 
            className="rounded-[20px] p-6 flex flex-col justify-center hidden md:block" 
            style={{ 
              gridArea: '5 / 1 / 7 / 6',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <p className="text-[13px] text-gray-600 mb-2">Happy Clients</p>
            <p className="text-[44px] font-bold text-gray-900 mb-2 leading-none">23+</p>
            <p className="text-[13px] text-gray-600">Brands that scaled with CoreMentors 360° systems.</p>
          </div>

          {/* div4 - grid-area: 1 / 6 / 2 / 8 - 1 row × 2 cols ≈ 137 × 140 px */}
          <div 
            className="rounded-[18px] p-4 flex flex-col justify-center hidden md:block" 
            style={{ 
              gridArea: '1 / 6 / 2 / 8',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">YEAR EXPERTISE</p>
            </div>
            <p className="text-[28px] font-bold text-gray-900 mb-1 leading-none">06+</p>
            <p className="text-[11px] text-gray-600">Product & IT Strategy</p>
          </div>

          {/* div5 - grid-area: 1 / 8 / 2 / 10 - 1 row × 2 cols ≈ 137 × 140 px */}
          <div 
            className="rounded-[18px] p-4 flex flex-col justify-center hidden md:block" 
            style={{ 
              gridArea: '1 / 8 / 2 / 10',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <p className="text-[28px] font-bold text-gray-900 mb-1 leading-none">23+</p>
            <p className="text-[12px] font-medium text-gray-600 mb-0.5">Active Businesses</p>
            <p className="text-[11px] text-gray-600">On retainer & support plans.</p>
          </div>

          {/* div6 - grid-area: 1 / 10 / 2 / 12 - 1 row × 2 cols ≈ 137 × 140 px */}
          <div 
            className="rounded-[18px] p-4 flex flex-col justify-center hidden md:block" 
            style={{ 
              gridArea: '1 / 10 / 2 / 12',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <p className="text-[28px] font-bold text-gray-900 mb-1 leading-none">56+</p>
            <p className="text-[12px] font-medium text-gray-600 mb-0.5">Projects</p>
            <p className="text-[11px] text-gray-600">From MVP to enterprise rollouts.</p>
          </div>

          {/* div7 - grid-area: 2 / 6 / 5 / 12 - 3 rows × 6 cols ≈ 444 × 452 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block" 
            style={{ 
              gridArea: '2 / 6 / 5 / 12',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-3.5 h-3.5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-gray-500">TESTIMONIALS</p>
            </div>
            <h2 className="text-[18px] font-semibold text-gray-900 mb-5">Rave Reviews Showcase</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4" style={{ minHeight: '180px' }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EA7AF4] to-[#B43E8F] flex items-center justify-center text-white font-bold flex-shrink-0">
                    EC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[15px] font-semibold text-gray-900">Emily Chen</h4>
                      <span className="text-[11px] text-gray-500">09, Feb 2024</span>
                    </div>
                    <p className="text-[12px] text-gray-600 mb-2">Sydney, Australia.</p>
                    <p className="text-[13px] text-gray-700 leading-relaxed">CoreMentors exceeded my expectations with their attention to detail and creativity. I'm thrilled with the solution they built for my business.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4" style={{ minHeight: '180px' }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6200B3] to-[#4056F4] flex items-center justify-center text-white font-bold flex-shrink-0">
                    CR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[15px] font-semibold text-gray-900">Carlos Rodriguez</h4>
                      <span className="text-[11px] text-gray-500">19, Nov 2023</span>
                    </div>
                    <p className="text-[12px] text-gray-600 mb-2">Madrid, Spain.</p>
                    <p className="text-[13px] text-gray-700 leading-relaxed">CoreMentors is a true professional. They understood my vision and executed it flawlessly, resulting in outstanding results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* div8 - grid-area: 5 / 6 / 7 / 12 - 2 rows × 6 cols ≈ 444 × 296 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block overflow-hidden flex flex-col" 
            style={{ 
              gridArea: '5 / 6 / 7 / 12',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              height: '100%'
            }}
          >
            <h2 className="text-[18px] font-semibold text-gray-900 mb-1">Work Process</h2>
            <p className="text-[13px] text-gray-600 mb-4">From Idea to Scale</p>
            <div className="space-y-2 flex-1 overflow-y-auto">
              {[
                { label: "Goals & Objectives", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Deep Research", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "Blueprint & Wireframe", icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" },
                { label: "Build & Automate", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { label: "Launch & Scale", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5" style={{ height: '40px' }}>
                  <div className="w-8 h-8 rounded-lg bg-[#ec4899]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-[13px] text-gray-900 font-medium">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* div9 - grid-area: 1 / 12 / 4 / 17 - 3 rows × 5 cols ≈ 367 × 452 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block overflow-hidden" 
            style={{ 
              gridArea: '1 / 12 / 4 / 17',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="text-center mb-5">
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[12px] font-medium text-gray-600">Available To Work</span>
              </div>
              <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#ec4899] to-[#6200B3] mx-auto mb-4 flex items-center justify-center text-white text-[32px] font-bold">
                CM
              </div>
              <h1 className="text-[28px] font-bold text-gray-900 mb-1">CoreMentors</h1>
              <p className="text-[14px] text-gray-600">Enterprise IT & 360° Solutions</p>
            </div>
            <button className="w-full bg-[#ec4899] hover:bg-[#ec4899]/90 text-white rounded-full py-3 font-bold text-[15px] mb-5 flex items-center justify-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Company Profile
            </button>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex items-center gap-2 text-[13px] text-gray-900">
                <span>🌍</span>
                <span>Global</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-900">
                <span>🌐</span>
                <span>IT Services</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-900">
                <span>🕒</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-900">
                <span>💬</span>
                <span>English / Hindi / Gujarati</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full py-2.5 font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors">
                Contact
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full py-2.5 font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* div10 - grid-area: 4 / 12 / 7 / 15 - 3 rows × 3 cols ≈ 214 × 452 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block overflow-hidden" 
            style={{ 
              gridArea: '4 / 12 / 7 / 15',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 className="text-[16px] font-semibold text-gray-900 mb-1">Projects</h2>
            <p className="text-[13px] text-gray-600 mb-5">Works Gallery</p>
            <div className="space-y-3 mb-5">
              <div className="bg-gray-100 rounded-lg h-[100px]"></div>
              <div className="bg-gray-100 rounded-lg h-[100px]"></div>
              <div className="bg-gray-100 rounded-lg h-[100px]"></div>
            </div>
            <button className="w-full bg-[#ec4899] hover:bg-[#ec4899]/90 text-white rounded-full py-2.5 font-semibold text-[14px] transition-colors">
              View Works
            </button>
          </div>

          {/* div11 - grid-area: 1 / 17 / 4 / 20 - 3 rows × 3 cols ≈ 214 × 452 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block overflow-hidden" 
            style={{ 
              gridArea: '1 / 17 / 4 / 20',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 className="text-[16px] font-semibold text-gray-900 mb-1">My Clients</h2>
            <p className="text-[13px] text-gray-600 mb-5">Satisfied Partners</p>
            <div className="grid grid-cols-3 gap-2.5">
              {['AWS', 'Azure', 'GCP', 'Docker', 'K8s', 'React', 'Next.js', 'Node', 'Python'].map((client) => (
                <div key={client} className="bg-gray-50 rounded-full h-9 flex items-center justify-center border border-gray-200">
                  <span className="text-[12px] text-gray-900 font-medium px-2">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* div12 - grid-area: 4 / 15 / 7 / 20 - 3 rows × 5 cols ≈ 367 × 452 px */}
          <div 
            className="rounded-[20px] p-6 hidden md:block" 
            style={{ 
              gridArea: '4 / 15 / 7 / 20',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <h2 className="text-[18px] font-semibold text-gray-900 mb-1">Services</h2>
            <p className="text-[13px] text-gray-600 mb-5">CoreMentors 360° Solutions Suite</p>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {['Web & Mobile Development', 'SaaS Product Engineering', 'Cloud & DevOps', 'AI & Automation', 'Digital Strategy', 'Managed IT Services'].map((service) => (
                <button key={service} className="bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-lg p-2.5 text-[13px] font-medium transition-colors text-left border border-gray-200">
                  {service}
                </button>
              ))}
            </div>
            <button className="w-full bg-[#ec4899] hover:bg-[#ec4899]/90 text-white rounded-full py-3 font-bold text-[15px] transition-colors">
              View All Services
            </button>
          </div>
        </div>

        {/* Mobile Layout - Stack cards vertically */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
          {/* Mobile: My Stacks */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">My Stacks</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Tech Arsenal</p>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Next.js', 'TypeScript', 'AWS'].map((tech) => (
                <button key={tech} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-sm font-medium text-gray-900 transition-colors">
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">56+</p>
              <p className="text-xs text-gray-600">Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">23+</p>
              <p className="text-xs text-gray-600">Clients</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">06+</p>
              <p className="text-xs text-gray-600">Years</p>
            </div>
          </div>

          {/* Mobile: Testimonials */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Testimonials</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Rave Reviews Showcase</p>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EA7AF4] to-[#B43E8F] flex items-center justify-center text-white font-bold">
                    EC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">Emily Chen</h4>
                      <span className="text-xs text-gray-600">09, Feb 2024</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Sydney, Australia.</p>
                    <p className="text-sm text-gray-700">CoreMentors exceeded my expectations with their attention to detail and creativity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Profile Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B43E8F] to-[#6200B3] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CM
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available To Work</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">CoreMentors</h3>
              <p className="text-gray-600">Enterprise IT Solutions</p>
            </div>
            <button className="w-full bg-[#B43E8F] hover:bg-[#B43E8F]/90 text-white rounded-lg py-3 font-semibold mb-4 flex items-center justify-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat
              </button>
            </div>
          </div>

          {/* Mobile: Work Process */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#B43E8F]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Work Process</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Workflow Highlights</p>
            <div className="space-y-3">
              {[
                { label: "Goals & Objectives", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Research", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "Wireframe", icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" },
                { label: "Prototyping", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { label: "Finalize Design", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B43E8F]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-900 font-medium">{step.label}</span>
              </div>
            ))}
            </div>
          </div>

          {/* Mobile: Projects */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Works Gallery</p>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 rounded-lg h-24"></div>
              <div className="bg-gray-100 rounded-lg h-24"></div>
            </div>
            <button className="w-full bg-[#B43E8F] hover:bg-[#B43E8F]/90 text-white rounded-lg py-3 font-semibold transition-colors">
              View Works
            </button>
          </div>

          {/* Mobile: Services */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Solutions Suite</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {['Web Development', 'Cloud & DevOps', 'AI Enablement', 'Cybersecurity', 'Managed Services'].map((service) => (
                <button key={service} className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg p-3 text-sm font-medium transition-colors text-left flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B43E8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  {service}
                </button>
              ))}
            </div>
            <button className="w-full bg-[#B43E8F] hover:bg-[#B43E8F]/90 text-white rounded-lg py-3 font-semibold transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>



    </>
  );
}


