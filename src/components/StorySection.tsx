import React from 'react';
import { motion } from 'motion/react';
import { CAFE_DATA, CafeConfig, atmosphereSeatingImg } from '../data/cafe';
import { SafeImage } from './SafeImage';

interface StoryProps {
  config?: CafeConfig;
}

export const StorySection: React.FC<StoryProps> = ({ config = CAFE_DATA }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#1C1815] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Left with whileInView smooth slide-up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative group shadow-2xl"
            >
              <SafeImage
                src={atmosphereSeatingImg}
                alt={`${config.name} reading nook and quiet corner with teak seating and warm light`}
                fallbackCategory="interior"
                fallbackTitle={`A Quiet Corner in ${config.neighborhood}`}
                aspectRatioClass="aspect-[3/4]"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="text-xs uppercase tracking-widest text-[#B07D48] font-semibold">
                  {config.address.line1}
                </span>
                <p className="font-serif text-xl text-[#FAF8F5] mt-1">
                  Space to slow down in a rushing city.
                </p>
              </div>
            </motion.div>

            {/* Subtle editorial offset quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 pl-4 border-l border-[#B07D48]/40"
            >
              <p className="font-serif italic text-sm text-[#FAF8F5]/80">
                “{config.shortName}: Rooted in coziness, unhurried presence, and genuine warmth.”
              </p>
            </motion.div>
          </motion.div>

          {/* Editorial Content Column: Right with staggered children */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold">
                {config.story.kicker}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] tracking-tight [text-wrap:balance]">
                {config.story.headline}
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed font-normal">
              {config.story.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Unboxed Quantitative Precision Stats */}
            <div className="pt-8 border-t border-[#FAF8F5]/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {config.story.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="space-y-1"
                >
                  <p className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#FAF8F5]/60 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
