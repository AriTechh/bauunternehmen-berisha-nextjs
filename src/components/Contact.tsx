"use client";
import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";

const info = [
  { icon: "📍", label: "Adresse", value: "abcStraße, 58638 Iserlohn", href: null },
  { icon: "📞", label: "Telefon", value: "+49 176 123 456 78", href: "tel:+4917612345678" },
  { icon: "✉️", label: "E-Mail", value: "info@berisha-bau.de", href: "mailto:info@berisha-bau.de" },
  { icon: "🕐", label: "Öffnungszeiten", value: "Mo–Fr: 07:00 – 18:00\nSa: 08:00 – 14:00", href: null },
];

const tr = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } as never;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#f7f5f0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Kontakt</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-[#1a1a1a] mt-3 mb-3"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Sprechen wir über <span className="text-[#C9A84C]">Ihr Projekt.</span>
          </h2>
          <p className="text-[#6b6b6b]">Wir antworten innerhalb von 24 Stunden.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={tr} className="flex flex-col gap-5">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</div>
                <div>
                  <strong className="text-[#1a1a1a] text-[0.85rem] font-semibold block mb-0.5">{item.label}</strong>
                  {item.href ? (
                    <a href={item.href} className="text-[#6b6b6b] text-[0.85rem] hover:text-[#C9A84C] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-[#6b6b6b] text-[0.85rem] whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay: 0.1 }}>
            {sent ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-[#1a1a1a] text-[1.1rem] font-bold mb-2">Vielen Dank!</h3>
                <p className="text-[#6b6b6b] text-[0.9rem]">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1a1a] text-[0.78rem] font-semibold tracking-[0.5px]">Name *</label>
                    <input type="text" required placeholder="Ihr vollständiger Name"
                      className="bg-[#f7f5f0] border border-transparent rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a1a] outline-none focus:border-[#C9A84C] transition-colors"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1a1a] text-[0.78rem] font-semibold tracking-[0.5px]">E-Mail *</label>
                    <input type="email" required placeholder="ihre@email.de"
                      className="bg-[#f7f5f0] border border-transparent rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a1a] outline-none focus:border-[#C9A84C] transition-colors"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1a1a] text-[0.78rem] font-semibold tracking-[0.5px]">Telefon</label>
                    <input type="tel" placeholder="+49 ..."
                      className="bg-[#f7f5f0] border border-transparent rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a1a] outline-none focus:border-[#C9A84C] transition-colors"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1a1a] text-[0.78rem] font-semibold tracking-[0.5px]">Leistung</label>
                    <select className="bg-[#f7f5f0] border border-transparent rounded-xl px-4 py-3 text-[0.9rem] text-[#6b6b6b] outline-none focus:border-[#C9A84C] transition-colors">
                      <option value="">Leistung auswählen...</option>
                      <option>Hochbau / Neubau</option>
                      <option>Tiefbau</option>
                      <option>Innenausbau</option>
                      <option>Renovierung & Sanierung</option>
                      <option>Schlüsselfertiges Bauen</option>
                      <option>Außenanlagen</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a1a1a] text-[0.78rem] font-semibold tracking-[0.5px]">Nachricht *</label>
                  <textarea required rows={5} placeholder="Beschreiben Sie Ihr Vorhaben kurz..."
                    className="bg-[#f7f5f0] border border-transparent rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a1a] outline-none focus:border-[#C9A84C] transition-colors resize-none"/>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-[#C9A84C] text-gray-900 text-[0.82rem] font-semibold tracking-[1.5px] uppercase rounded-xl hover:bg-[#e8c96a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.35)] disabled:opacity-60">
                  {loading ? "Wird gesendet..." : "Anfrage absenden"}
                </button>
                <p className="text-[#6b6b6b] text-[0.73rem] text-center">* Pflichtfelder · Ihre Daten werden nicht an Dritte weitergegeben.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
