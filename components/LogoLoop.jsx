"use client";
import { useEffect, useRef } from "react";
import "./LogoLoop.css";

export default function LogoLoop({
  logos = [],
  speed = 50,
  direction = "left",
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 20,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor,
  ariaLabel = "Logo loop",
  className = "",
}) {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    if (!trackRef.current || logos.length === 0) return;

    const track = trackRef.current;
    const isVertical = direction === "up" || direction === "down";
    const isReverse = direction === "right" || direction === "up";

    const animate = () => {
      if (!track) return;

      const dimension = isVertical ? track.offsetHeight : track.offsetWidth;
      const totalDimension = dimension / 2; // Since we duplicate the logos

      if (isVertical) {
        if (isReverse) {
          positionRef.current += speed * 0.01;
          if (positionRef.current >= 0) positionRef.current = -totalDimension;
        } else {
          positionRef.current -= speed * 0.01;
          if (positionRef.current <= -totalDimension) positionRef.current = 0;
        }
        track.style.transform = `translate3d(0, ${positionRef.current}px, 0)`;
      } else {
        if (isReverse) {
          positionRef.current += speed * 0.01;
          if (positionRef.current >= 0) positionRef.current = -totalDimension;
        } else {
          positionRef.current -= speed * 0.01;
          if (positionRef.current <= -totalDimension) positionRef.current = 0;
        }
        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos, speed, direction]);

  if (logos.length === 0) return null;

  const classes = [
    "logoloop",
    direction === "up" || direction === "down" ? "logoloop--vertical" : "",
    scaleOnHover ? "logoloop--scale-hover" : "",
    fadeOut ? "logoloop--fade" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
  };

  const renderLogo = (logo, index) => (
    <div key={index} className="logoloop__item">
      <div className="logoloop__node">{logo.node}</div>
    </div>
  );

  return (
    <div className={classes} style={style} aria-label={ariaLabel}>
      <div className="logoloop__track" ref={trackRef}>
        <div className="logoloop__list">
          {logos.map(renderLogo)}
        </div>
        <div className="logoloop__list">
          {logos.map((logo, index) => renderLogo(logo, `duplicate-${index}`))}
        </div>
      </div>
    </div>
  );
}

