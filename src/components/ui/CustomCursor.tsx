"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');

      if (isClickable) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        if (text) {
          setHoverText(text);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small dot (Exact mouse position) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isVisible && !isHovering ? 1 : 0,
          scale: isVisible && !isHovering ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Outer ring (Follows with spring physics) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering && hoverText ? 40 : isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering && hoverText ? 40 : isHovering ? 24 : 16),
          width: isHovering && hoverText ? 80 : isHovering ? 48 : 32,
          height: isHovering && hoverText ? 80 : isHovering ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 28, 
          mass: 0.8 
        }}
      >
        <motion.div
          className={`rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isHovering && hoverText 
              ? "bg-black/50 border-white backdrop-blur-md" 
              : isHovering 
                ? "bg-white/20 border-white scale-75" 
                : "border-white/40 bg-transparent"
          }`}
          style={{ width: "100%", height: "100%" }}
        >
          <AnimatePresence>
            {isHovering && hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-[9px] font-bold tracking-[0.2em] uppercase text-white"
              >
                {hoverText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
