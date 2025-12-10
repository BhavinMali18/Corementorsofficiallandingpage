"use client";

import { useState, useEffect } from "react";
import { CoreMentorsLogo } from "./CoreMentorsLogo";
import { DrawLineText } from "./gsap/draw-line-text";

export default function IntroScreen({ onComplete, duration = 6000 }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Hide body scroll during intro
    document.body.style.overflow = "hidden";

    // Start fade out animation slightly before duration ends
    const fadeTimer = setTimeout(() => {
      setIsAnimating(true);
    }, duration - 800); // Start fade 800ms before completion

    // Complete intro after duration
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-600 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isAnimating ? "none" : "auto" }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Animated Logo - Much Larger */}
        <CoreMentorsLogo
          width={280}
          height={280}
          strokeWidth={4}
          color="#B43E8F"
          duration={5}
          animated={true}
          className="mx-auto"
        />
        
        {/* Animated Text - Much Larger */}
        <div className="mt-6">
          <DrawLineText
            className="mx-auto"
            fontSize={120}
            strokeWidth={4}
            text="CoreMentors"
            color="#B43E8F"
          />
        </div>
      </div>
    </div>
  );
}

