import React from 'react';
import { ArrowDownRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CAFE_DATA, CafeConfig, heroCafeImg } from '../data/cafe';
import { SafeImage } from './SafeImage';

interface HeroProps {
  config?: CafeConfig;
}

export const Hero: React.FC<HeroProps> = ({ config = CAFE_DATA }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Canvas & Hero Visual */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left Column: Typography & Intent with staggered Motion entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          className="lg:col-span-7 flex flex-col justify-end z-10 space-y-8"
        >
          {/* Metadata Discipline: Clean unboxed text with typographic separators */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#191614]/70 font-medium"
          >
            <span>Specialty Coffee</span>
            <span aria-hidden="true" className="text-[#B07D48]">·</span>
            <span>All-Day Brunch</span>
            <span aria-hidden="true" className="text-[#B07D48]">·</span>
            <span>House Desserts</span>
          </motion.div>

          {/* Editorial Display Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-[-0.02em] text-[#191614] max-w-2xl [text-wrap:balance]"
          >
            {config.tagline === CAFE_DATA.tagline ? (
              <>
                Coffee, food & <span className="italic font-normal text-[#191614]">moments worth staying for.</span>
              </>
            ) : (
              config.tagline
            )}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-base sm:text-lg text-[#191614]/75 max-w-xl leading-relaxed font-normal"
          >
            {config.subTagline}
          </motion.p>

          {/* Actions & Status Bar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <motion.a
              href="#menu"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#191614] hover:bg-[#322B26] transition-all duration-200 group shadow-md"
            >
              <span>Explore Menu</span>
              <ArrowDownRight className="w-4 h-4 text-[#B07D48] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#visit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#191614] border border-[#191614]/25 hover:border-[#191614] transition-colors duration-200 bg-transparent"
            >
              <span>Find Us</span>
            </motion.a>
          </motion.div>

          {/* Quiet Trust Bar */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
            }}
            className="pt-6 border-t border-[#191614]/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#191614]/70"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
              <span className="font-medium text-[#191614]">Open Daily: 8:00 AM – 11:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B07D48]" />
              <span>{config.address.line1}, {config.neighborhood}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Showcase with smooth mask reveal & subtle floating accent */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative group overflow-hidden shadow-2xl shadow-[#191614]/10 bg-[#FAF8F5]"
          >
            <SafeImage
              src={heroCafeImg}
              alt={`${config.name} interior with morning natural light and teak counters`}
              fallbackCategory="interior"
              fallbackTitle={`${config.name} — ${config.neighborhood}`}
              aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle photographic vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#191614]/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Image caption / editorial marker */}
            <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5] pointer-events-none">
              <p className="text-[11px] uppercase tracking-widest text-[#FAF8F5]/80 font-medium">
                {config.neighborhood} Sanctuary
              </p>
              <p className="font-serif text-xl sm:text-2xl text-white mt-1">
                Warm terrazzo, limewash & natural light
              </p>
            </div>
          </motion.div>

          {/* Asymmetric architectural accent block with gentle float */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 bg-[#EFE9DF] -z-10 border border-[#191614]/5 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
