import React from 'react';
import { motion } from 'motion/react';
import { CAFE_DATA, CafeConfig, specialtyCoffeeImg, brunchToastImg, dessertCakeImg } from '../data/cafe';
import { SafeImage } from './SafeImage';

interface ExperienceProps {
  config?: CafeConfig;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ config = CAFE_DATA }) => {
  const experiences = [
    {
      number: "01",
      title: config.brandPillars[0]?.title || "Specialty Coffee",
      tag: "Direct Trade Arabica",
      description: config.brandPillars[0]?.description || CAFE_DATA.brandPillars[0].description,
      notes: config.brandPillars[0]?.notes || CAFE_DATA.brandPillars[0].notes,
      image: specialtyCoffeeImg,
      imageAlt: "Ceramic cup of artisanal specialty latte with intricate latte art on travertine stone",
      fallbackCategory: "coffee" as const,
      imageSide: "right",
      caption: "Single origin Arabica · Chikmagalur & Araku"
    },
    {
      number: "02",
      title: config.brandPillars[1]?.title || "All-Day Brunch",
      tag: "Slow-Fermented Sourdough",
      description: config.brandPillars[1]?.description || CAFE_DATA.brandPillars[1].description,
      notes: config.brandPillars[1]?.notes || CAFE_DATA.brandPillars[1].notes,
      image: brunchToastImg,
      imageAlt: "Artisanal truffle mushroom toast on thick crusty sourdough with parmesan and microgreens",
      fallbackCategory: "food" as const,
      imageSide: "left",
      caption: "36-hr sourdough · Pasture-raised eggs · Fresh herbs"
    },
    {
      number: "03",
      title: config.brandPillars[2]?.title || "House Desserts",
      tag: "Small-Batch Patisserie",
      description: config.brandPillars[2]?.description || CAFE_DATA.brandPillars[2].description,
      notes: config.brandPillars[2]?.notes || CAFE_DATA.brandPillars[2].notes,
      image: dessertCakeImg,
      imageAlt: "Caramelized slice of burnt basque cheesecake with molten creamy center and sea salt flakes",
      fallbackCategory: "dessert" as const,
      imageSide: "right",
      caption: "Baked fresh daily · Low-sugar balanced bakes"
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#191614]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with smooth whileInView animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold mb-3">
            The Craft
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191614] leading-tight [text-wrap:balance]">
            Every element prepared with time, provenance, and <span className="italic font-normal">deliberate attention.</span>
          </h2>
        </motion.div>

        {/* Asymmetrical Editorial Rows */}
        <div className="space-y-24 sm:space-y-36">
          {experiences.map((item, idx) => {
            const isImageLeft = item.imageSide === 'left';
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  idx !== experiences.length - 1 ? 'pb-24 sm:pb-36 border-b border-[#191614]/10' : ''
                }`}
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isImageLeft ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl sm:text-4xl text-[#B07D48]/80 font-normal">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#191614]/60 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191614] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#191614]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[#191614]/10">
                    <p className="text-xs uppercase tracking-wider text-[#191614]/70 font-medium">
                      {item.notes}
                    </p>
                  </div>
                </div>

                {/* Imagery Column with gentle hover zoom */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative group overflow-hidden shadow-lg shadow-[#191614]/5 bg-[#FAF8F5]"
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.imageAlt}
                      fallbackCategory={item.fallbackCategory}
                      fallbackTitle={item.title}
                      aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191614]/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-6 right-6 text-white pointer-events-none">
                      <p className="text-xs tracking-wider uppercase text-white/90 font-medium">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
