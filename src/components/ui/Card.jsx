import React from "react";

export const Card = ({
  children,
  className = "",
  hoverEffect = false,
  glowColor = "from-[#7E2EEF]/20 to-[#3648EF]/20",
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={`relative rounded-2xl border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl p-8 overflow-hidden group ${className}`}
      {...props}
    >
      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Optional Hover Glow */}
      {hoverEffect && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />
      )}
    </Component>
  );
};

export default Card;
