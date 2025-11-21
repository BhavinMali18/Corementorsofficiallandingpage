"use client";

import { useEffect, useId, useMemo } from "react";

export function DrawLineText({
  className = "",
  fontSize = 60,
  strokeWidth = 1.5,
  text = "CoreMentors",
  color = "hsl(var(--gold))"
}) {
  const id = useId().replace(/:/g, "-");
  const pathId = useMemo(() => `stroke-${id}`, [id]);

  useEffect(() => {
    // No JS animation needed; CSS keyframes handle the drawing.
  }, []);

  return (
    <svg
      className={className}
      width="100%"
      height={fontSize * 1.8}
      viewBox={`0 0 ${text.length * fontSize * 0.65} ${fontSize * 1.2}`}
      role="img"
      aria-label={text}
    >
      <defs>
        <style>
          {`
            @keyframes ${pathId}-draw {
              0% {
                stroke-dashoffset: 1200;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      </defs>
      <text
        x="0"
        y={fontSize}
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing="0.02em"
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        style={{
          strokeDasharray: 1200,
          strokeDashoffset: 1200,
          animation: `${pathId}-draw 8s ease forwards`
        }}
      >
        {text}
      </text>
    </svg>
  );
}


