import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';

interface CTAProps {
  config?: CafeConfig;
}

export const CTASection: React.FC<CTAProps> = ({ config = CAFE_DATA }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#191614] text-[#FAF8F5] overflow-hidden">
      {/* Delicate background illumination with breathing animation */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B07D48] rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#B07D48] font-semibold">
          {config.neighborhood} · {config.city}
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF8F5] leading-[1.05] tracking-tight [text-wrap:balance]">
          Your next favourite table is <span className="italic font-normal text-[#FAF8F5]">waiting.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#FAF8F5]/75 max-w-xl mx-auto leading-relaxed font-normal">
          No reservations required for everyday visits. Simply walk into {config.shortName}, choose your brew, and take all the time you need.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-semibold uppercase tracking-wider text-[#191614] bg-[#FAF8F5] hover:bg-[#E8E2D9] shadow-lg transition-all duration-200"
          >
            <span>Find {config.shortName}</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={config.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] border border-[#FAF8F5]/30 hover:border-[#FAF8F5] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#B07D48]" />
            <span>Say Hello on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF8F5]/60" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
