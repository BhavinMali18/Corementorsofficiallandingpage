"use client";
import { CoreMentorsLogo } from "./CoreMentorsLogo";
import { useRef, useEffect } from "react";

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays continuously and set playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down to 10% speed
      videoRef.current.play().catch(e => {
        console.log("Video autoplay prevented:", e);
      });
    }
  }, []);

  return (
    <footer className="relative bg-gray-50 py-32 md:py-40 lg:py-48 overflow-hidden" style={{ minHeight: '800px' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            opacity: 0.3,
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/0_Earth_Planet_3840x2160.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 container-px mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-20 md:p-24 lg:p-28 shadow-lg relative overflow-hidden">
          {/* CoreMentors Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-gray-200 select-none" style={{ 
              fontFamily: 'var(--font-accent)',
              letterSpacing: '0.05em',
              opacity: 0.6
            }}>
              CoreMentors
            </span>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
            {/* Left Column - Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <CoreMentorsLogo 
                  width={56} 
                  height={56} 
                  strokeWidth={1.2}
                  color="#B43E8F"
                  duration={2}
                  animated={false}
                />
                <span className="text-4xl font-bold text-gray-900">CoreMentors</span>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-md">
                CoreMentors empowers businesses to transform their digital presence with comprehensive IT solutions — making growth easy to achieve, understand, and scale.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-6">
                <a 
                  href="https://twitter.com/corementors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B43E8F] transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/corementors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B43E8F] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/corementors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B43E8F] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@corementors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B43E8F] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8">Products</h3>
              <ul className="space-y-5">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Integrations", href: "/integrations" },
                  { label: "CoreMentorsHQ", href: "/hq" }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-lg text-gray-600 hover:text-[#B43E8F] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8">Resources</h3>
              <ul className="space-y-5">
                {[
                  { label: "Documentation", href: "/docs" },
                  { label: "Tutorials", href: "/tutorials" },
                  { label: "Blog", href: "/knowledge" },
                  { label: "Support", href: "/support" }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-lg text-gray-600 hover:text-[#B43E8F] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8">Company</h3>
              <ul className="space-y-5">
                {[
                  { label: "About", href: "/about" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                  { label: "Partners", href: "/partners" }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-lg text-gray-600 hover:text-[#B43E8F] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row - Copyright and Legal */}
          <div className="border-t border-gray-200 pt-16 mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
              <p className="text-lg text-gray-600">
                © {new Date().getFullYear()} CoreMentors. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-lg text-gray-600">
                <a href="/privacy" className="hover:text-[#B43E8F] transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-400">•</span>
                <a href="/terms" className="hover:text-[#B43E8F] transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-400">•</span>
                <a href="/cookies" className="hover:text-[#B43E8F] transition-colors">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


