import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

export const SparklesCore = (props) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    className,
    ...other
  } = props;

  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkle = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
    });

    const initialSparkles = Array.from({ length: particleDensity }, generateSparkle);
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((sparkle) => ({
          ...sparkle,
          x: (sparkle.x + sparkle.speedX) % 100,
          y: (sparkle.y + sparkle.speedY) % 100,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, [minSize, maxSize, speed, particleDensity]);

  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      {...other}
    >
      <rect width="100%" height="100%" fill={background} />
      {sparkles.map((sparkle) => (
        <circle
          key={sparkle.id}
          r={sparkle.size}
          fill={particleColor}
          cx={`${sparkle.x}%`}
          cy={`${sparkle.y}%`}
        />
      ))}
    </svg>
  );
};
