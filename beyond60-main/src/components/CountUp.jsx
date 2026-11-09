"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// Helper function to format the number
const formatValue = (val, precision, sep) => {
  return val
    .toFixed(precision)
    .replace(/\B(?=(\d{3})+(?!\d))/g, sep);
};

const easingFunctions = {
  linear: [0, 0, 1, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
};

const animationStyles = {
  default: { type: "tween" },
  bounce: { type: "spring", bounce: 0.25 },
  spring: { type: "spring", stiffness: 100, damping: 10 },
  gentle: { type: "spring", stiffness: 60, damping: 15 },
  energetic: { type: "spring", stiffness: 300, damping: 20 },
};

export function CountUp({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  easing = "easeOut",
  separator = ",",
  interactive = false,
  triggerOnView = true,
  animationStyle = "default",
  customColor = "#ffffff",
  onAnimationComplete,
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    formatValue(latest, decimals, separator)
  );

  // Framer Motion's robust built-in hook
  // amount: 0.5 means 50% of the element must be visible before triggering
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    let controls = null;

    const startAnimation = () => {
      controls = animate(count.get(), value, {
        ...animationStyles[animationStyle],
        ease: easingFunctions[easing],
        duration: animationStyle === "default" ? duration : undefined,
        onUpdate: (latest) => count.set(latest),
        onComplete: () => {
          setHasAnimated(true);
          if (onAnimationComplete) onAnimationComplete();
        },
      });
    };

    // Only run if we don't care about view, OR if we are in view
    if (!triggerOnView && !hasAnimated) {
      startAnimation();
    } else if (isInView && !hasAnimated) {
      startAnimation();
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [value, duration, easing, animationStyle, triggerOnView, hasAnimated, onAnimationComplete, count, isInView]);

  const getHoverAnimation = () => {
    if (!interactive) return {};
    return {
      whileHover: {
        scale: 1.05,
        filter: "brightness(1.1)",
        transition: { duration: 0.2 },
      },
      whileTap: {
        scale: 0.95,
        filter: "brightness(0.95)",
        transition: { duration: 0.1 },
      },
    };
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '4.5rem',
        color: customColor,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <motion.div
        {...getHoverAnimation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        {prefix && <span style={{ marginRight: '0.25rem' }}>{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        {suffix && <span style={{ marginLeft: '0.25rem' }}>{suffix}</span>}
      </motion.div>
    </div>
  );
}

export default CountUp;
