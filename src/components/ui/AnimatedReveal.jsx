import React from "react";
import { motion } from "framer-motion";

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  staggerContainer: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  cardAnimation: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
};

export const AnimatedReveal = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  as: Component = motion.div,
  ...props
}) => {
  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <Component
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once, margin: "-50px" }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
        ...(selectedAnimation.whileInView?.transition || {}),
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedReveal;
