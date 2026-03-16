"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 60%), linear-gradient(160deg,#1a1612 0%,#0d0b08 60%,#1c1a14 100%)" }}/>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }}/>

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
          className="text-[2rem] sm:text-[2.8rem] font-black text-white mb-4"
          style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
          Bereit, Ihr Projekt zu starten?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12 } } : {}}
          className="text-white/60 text-[0.95rem] mb-9 max-w-lg mx-auto">
          Kontaktieren Sie uns noch heute für ein kostenloses, unverbindliches Beratungsgespräch.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.22 } } : {}}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+4917612345678"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#C9A84C] text-gray-900 text-[0.82rem] font-semibold tracking-[1.5px] uppercase rounded hover:bg-[#e8c96a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.4)] cta-pulse">
            <span>📞</span> Jetzt anrufen
          </a>
          <a href="#contact"
            className="inline-flex items-center justify-center px-9 py-4 bg-transparent text-white text-[0.82rem] font-semibold tracking-[1.5px] uppercase rounded border border-white/25 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 hover:-translate-y-0.5">
            Angebot anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
