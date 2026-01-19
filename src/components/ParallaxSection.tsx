import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  opacity?: boolean; // fade in/out based on scroll
}

export const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.1,
  opacity = false 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        opacity: opacity ? opacityValue : 1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const ParallaxBackground = ({ children, className = "" }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};