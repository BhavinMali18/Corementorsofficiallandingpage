"use client";

import { useEffect, useId, useState, useRef } from "react";

export function CoreMentorsLogo({
  className = "",
  width = 40,
  height = 40,
  strokeWidth = 2,
  color = "#B43E8F",
  duration = 2.5,
  autoPlay = true,
  animated = true
}) {
  const id = useId().replace(/:/g, "-");
  const [isVisible, setIsVisible] = useState(!animated);
  const [pathLengths, setPathLengths] = useState([]);
  const svgRef = useRef(null);
  const pathRefs = useRef([]);

  useEffect(() => {
    if (autoPlay && animated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, animated]);

  // Refined path definitions - properly connected paths without gaps or overlaps
  const logoPaths = [
    // Outer circle - drawn first as boundary (full circle)
    { 
      d: "M 225 22 A 203 203 0 1 1 225 428 A 203 203 0 1 1 225 22", 
      delay: 0,
      strokeWidth: strokeWidth * 1.5,
      isCircle: true
    },
    // Bottom-left to top-right diagonal (main shape)
    { 
      d: "M 108.621 212.164 L 351.746 333.796", 
      delay: 0.3,
      strokeWidth: strokeWidth * 4.5
    },
    // Top-right to bottom-left diagonal
    { 
      d: "M 234.352 95.039 L 353.867 336.148", 
      delay: 0.5,
      strokeWidth: strokeWidth * 4.5
    },
    // Top horizontal line
    { 
      d: "M 229.848 102.332 L 350.066 102.066", 
      delay: 0.7,
      strokeWidth: strokeWidth * 4.5
    },
    // Diagonal cross (top-left to bottom-right)
    { 
      d: "M 103.68 334.738 L 353.023 101.73", 
      delay: 0.9,
      strokeWidth: strokeWidth * 4.5
    },
    // Bottom horizontal line
    { 
      d: "M 107.242 343.375 L 228.367 343.375", 
      delay: 1.1,
      strokeWidth: strokeWidth * 4.5
    },
    // Left diagonal (top-left to bottom-right)
    { 
      d: "M 111.746 95.004 L 232.875 336.047", 
      delay: 1.3,
      strokeWidth: strokeWidth * 4.5
    },
    // Bottom-right to top-left diagonal
    { 
      d: "M 347.242 222.316 L 104.988 101.797", 
      delay: 1.5,
      strokeWidth: strokeWidth * 4.5
    },
  ];

  // Calculate path lengths after mount
  useEffect(() => {
    if (svgRef.current && logoPaths.length > 0) {
      const lengths = logoPaths.map((path) => {
        try {
          const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathElement.setAttribute("d", path.d);
          const length = pathElement.getTotalLength();
          return length > 0 ? length : 1000;
        } catch {
          return 1000;
        }
      });
      setPathLengths(lengths);
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 450 450"
      role="img"
      aria-label="CoreMentors Logo"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>
          {logoPaths.map((_, index) => {
            const pathLength = pathLengths[index] || 1000;
            return `
              @keyframes ${id}-draw-${index} {
                0% {
                  stroke-dashoffset: ${pathLength};
                  opacity: 0;
                }
                15% {
                  opacity: 1;
                }
                100% {
                  stroke-dashoffset: 0;
                  opacity: 1;
                }
              }
            `;
          }).join('')}
        </style>
      </defs>
      {logoPaths.map((path, index) => {
        const pathLength = pathLengths[index] || 1000;
        const currentStrokeWidth = path.strokeWidth || strokeWidth;
        
        return (
          <path
            key={index}
            ref={(el) => {
              if (el) pathRefs.current[index] = el;
            }}
            d={path.d}
            fill="none"
            stroke={color}
            strokeWidth={currentStrokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            style={animated ? {
              strokeDasharray: `${pathLength} ${pathLength}`,
              strokeDashoffset: isVisible ? 0 : pathLength,
              opacity: isVisible ? 1 : 0,
              animation: isVisible && pathLengths.length > 0
                ? `${id}-draw-${index} ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${path.delay}s forwards`
                : 'none',
            } : {
              strokeDasharray: 'none',
              opacity: 1,
            }}
          />
        );
      })}
    </svg>
  );
}

