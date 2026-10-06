import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';
import { MessageCircle, Search, X } from 'lucide-react';

interface FullMenuPreviewProps {
  config?: CafeConfig;
}

export const FullMenuPreview: React.FC<FullMenuPreviewProps> = ({ config = CAFE_DATA }) => {
  const categories = Object.keys(config.fullMenu);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'Coffee');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const activeItems = config.fullMenu[activeCategory] || [];

  // Extract unique tags for this category
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    tagsSet.add('All');
    activeItems.forEach((item) => {
      item.tags?.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, [activeItems]);

  // Filter items based on search and selected tag
  const filteredItems = useMemo(() => {
    return activeItems.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === 'All' || (item.tags && item.tags.includes(selectedTag));
      return matchesSearch && matchesTag;
    });
  }, [activeItems, searchQuery, selectedTag]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F3EFEA] border-t border-[#191614]/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold">
            The Daily Bill of Fare
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191614]">
            Full Menu Preview
          </h2>
          <p className="text-sm text-[#191614]/70">
            Served daily in {config.neighborhood} from 8:00 AM. Prepared to order with honest ingredients.
          </p>
        </motion.div>

        {/* Functional Segmented Category Tabs with smooth layoutId animation */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="inline-flex p-1.5 bg-[#FAF8F5] border border-[#191614]/10 gap-1 overflow-x-auto max-w-full">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedTag('All');
                  }}
                  className={`relative px-5 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-[#FAF8F5]' : 'text-[#191614]/70 hover:text-[#191614]'
                  }`}
                  aria-pressed={isActive}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#191614]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Tag Filter Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#191614]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeCategory.toLowerCase()}...`}
                className="w-full pl-9 pr-8 py-2 bg-[#FAF8F5] border border-[#191614]/15 text-xs text-[#191614] placeholder-[#191614]/40 focus:outline-none focus:border-[#B07D48] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#191614]/40 hover:text-[#191614] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sub-tag chips */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#191614] text-[#FAF8F5] font-semibold scale-[1.02]'
                      : 'bg-[#FAF8F5] text-[#191614]/70 hover:text-[#191614] border border-[#191614]/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items List with smooth AnimatePresence category transition */}
        <div className="bg-[#FAF8F5] p-6 sm:p-12 border border-[#191614]/10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${selectedTag}-${searchQuery}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="divide-y divide-[#191614]/10"
            >
              {filteredItems.length === 0 ? (
                <div className="py-16 text-center text-[#191614]/60 space-y-2">
                  <p className="font-serif text-xl text-[#191614]">No items found matching "{searchQuery}"</p>
                  <p className="text-xs">Try adjusting your search query or reset filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTag('All');
                    }}
                    className="mt-3 text-xs uppercase tracking-wider text-[#B07D48] font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    className={`py-6 sm:py-7 ${index === 0 ? 'pt-2' : ''} ${
                      index === filteredItems.length - 1 ? 'pb-2' : ''
                    } transition-colors duration-200 hover:bg-[#F3EFEA]/40 px-3 sm:px-4 -mx-3 sm:-mx-4`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-xl sm:text-2xl text-[#191614] font-medium tracking-tight">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-sm text-[#191614]/70 max-w-xl leading-relaxed">
                          {item.desc}
                        </p>
                        {/* Clean unboxed tags with typographic separators */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex items-center gap-2 pt-1 text-[11px] uppercase tracking-wider text-[#B07D48] font-medium">
                            {item.tags.map((tag, i) => (
                              <React.Fragment key={tag}>
                                <span>{tag}</span>
                                {i < item.tags!.length - 1 && (
                                  <span aria-hidden="true" className="text-[#191614]/30">·</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="text-left sm:text-right shrink-0 mt-2 sm:mt-0">
                        <span className="font-mono text-base sm:text-lg text-[#191614] tabular-nums font-medium">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Menu Footer / Dietary & Inquiry Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#191614]/65 pt-4">
          <p>
            Please inform your barista or server of any allergies. Oat & almond milk substitutes available upon request (+₹50).
          </p>
          <a
            href={config.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#191614] hover:text-[#B07D48] font-semibold transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Have a catering or group question? Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
