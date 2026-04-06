import React from "react";
import { motion } from "framer-motion";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  href,
  target,
  icon: Icon,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all overflow-hidden group";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] shadow-xl hover:shadow-[#7E2EEF]/30",
    secondary:
      "text-white bg-gray-800 border border-gray-700 hover:bg-gray-700",
    outline:
      "text-gray-300 border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl hover:text-white hover:border-white/20",
    success:
      "text-white bg-green-600 hover:bg-green-700",
    text: "text-gray-400 hover:text-white font-medium px-4",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {/* Glow effect for primary variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </Component>
  );
};

export default Button;
