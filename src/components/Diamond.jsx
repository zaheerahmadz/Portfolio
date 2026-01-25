import React from "react";

const Diamond = ({ className }) => {
  return (
    <>
      <style>{`
        @keyframes blinkScale {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
        .blink-scale {
          animation: blinkScale 1.5s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>

      <svg
        className={`${className} blink-scale`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="diamondGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7E2EEF" />
            <stop offset="100%" stopColor="#3648EF" />
          </linearGradient>
          <filter
            id="blurFilter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="2"
              floodColor="#7E2EEF"
              floodOpacity="0.5"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="2"
              floodColor="#3648EF"
              floodOpacity="0.5"
            />
          </filter>
        </defs>
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
          ry="2"
          fill="url(#diamondGradient)"
          transform="rotate(45 12 12)"
          filter="url(#blurFilter)"
        />
      </svg>
    </>
  );
};

export default Diamond;
