"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#111] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-5">
            <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48">
              <text
                x="0" y="32"
                className="loader-text-svg"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 28,
                  fill: "none",
                  stroke: "#C9A84C",
                  strokeWidth: 1,
                  strokeDasharray: 400,
                  strokeDashoffset: 400,
                  letterSpacing: 8,
                  animation: "draw-text 1.5s ease forwards",
                }}
              >
                BERISHA
              </text>
            </svg>
            <div className="w-48 h-[2px] bg-white/10 rounded overflow-hidden">
              <div
                className="loader-fill h-full bg-[#C9A84C] rounded"
                style={{ width: 0, animation: "load-fill 1.8s ease forwards" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
