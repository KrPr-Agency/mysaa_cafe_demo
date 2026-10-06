import React from 'react';
import { motion } from 'motion/react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';
import { SafeImage } from './SafeImage';

interface SignatureMenuProps {
  config?: CafeConfig;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ config = CAFE_DATA }) => {
  const categories = ['Coffee', 'Brunch', 'Desserts'] as const;

  return (
    <section id="signature" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#191614]/10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold mb-3">
              Curated Offerings
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191614] leading-tight">
              The Signature Selection
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#191614]/65 max-w-sm">
            Handcrafted staples that define the {config.shortName} kitchen and coffee bar in {config.neighborhood}.
          </p>
        </motion.div>

        {/* Editorial Showcase Grouped by Category */}
        <div className="space-y-20">
          {categories.map((cat) => {
            const items = config.featuredItems.filter((i) => i.category === cat);
            return (
              <div key={cat} className="space-y-8">
                {/* Category Header with Clean Line */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#191614]">
                    {cat}
                  </span>
                  <div className="flex-1 h-[1px] bg-[#191614]/10" />
                </motion.div>

                {/* Items in Editorial Dual-Column / Asymmetric Pair */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                  {items.map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                      className="group flex flex-col justify-between p-6 sm:p-8 bg-[#F3EFEA]/60 border border-[#191614]/5 hover:border-[#191614]/15 hover:shadow-xl hover:shadow-[#191614]/5 transition-all duration-300"
                    >
                      <div className="space-y-5">
                        {/* Image preview with smooth hover */}
                        <div className="overflow-hidden aspect-[16/10] bg-[#FAF8F5]">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            fallbackCategory={
                              item.category === 'Coffee'
                                ? 'coffee'
                                : item.category === 'Brunch'
                                ? 'food'
                                : 'dessert'
                            }
                            fallbackTitle={item.name}
                            aspectRatioClass="aspect-[16/10]"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>

                        {/* Title & Price Header */}
                        <div className="flex items-baseline justify-between gap-4 pt-2">
                          <h3 className="font-serif text-2xl sm:text-3xl text-[#191614] tracking-tight group-hover:text-[#B07D48] transition-colors duration-200">
                            {item.name}
                          </h3>
                          <span className="font-mono text-base text-[#191614] font-medium shrink-0">
                            {item.price}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#191614]/75 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                      {/* Editorial notes */}
                      <div className="pt-6 mt-6 border-t border-[#191614]/10 flex items-center justify-between text-xs text-[#191614]/60">
                        <span>{item.notes}</span>
                        <span className="text-[#B07D48] font-medium uppercase tracking-wider text-[11px]">
                          {item.badge}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
