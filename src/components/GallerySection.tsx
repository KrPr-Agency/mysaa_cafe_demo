import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_DATA, CafeConfig, GalleryItem } from '../data/cafe';
import { SafeImage } from './SafeImage';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  config?: CafeConfig;
}

export const GallerySection: React.FC<GalleryProps> = ({ config = CAFE_DATA }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = config.gallery;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="atmosphere" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#191614]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold mb-3">
            Spatial Presence
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191614] leading-[1.1] [text-wrap:balance]">
            Come for the coffee. <span className="italic font-normal">Stay for the atmosphere.</span>
          </h2>
          <p className="text-base text-[#191614]/70 mt-4 max-w-xl">
            Sunlit mornings, quiet afternoon readings, and the warm aroma of freshly ground Arabica off Perry Cross Road.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${item.colSpan} relative group cursor-pointer overflow-hidden bg-[#E8E2D9]`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative overflow-hidden w-full h-full">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fallbackCategory="interior"
                    fallbackTitle={item.title}
                    aspectRatioClass={
                      item.aspect === 'wide'
                        ? 'aspect-[16/9]'
                        : item.aspect === 'portrait'
                        ? 'aspect-[3/4]'
                        : item.aspect === 'landscape'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                    }
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient scrim on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191614]/75 via-[#191614]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
                  
                  {/* Content hover overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#B07D48] font-medium">
                          {item.title}
                        </p>
                        <p className="font-serif text-lg text-white mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {currentImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#120F0D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </motion.button>

            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[75vh] w-auto overflow-hidden shadow-2xl">
                <SafeImage
                  src={currentImage.image}
                  alt={currentImage.title}
                  fallbackCategory="interior"
                  fallbackTitle={currentImage.title}
                  aspectRatioClass="aspect-auto max-h-[75vh]"
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <div className="text-center mt-4 space-y-1">
                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#B07D48]">
                  <span>{selectedIndex + 1} of {galleryItems.length}</span>
                  <span>·</span>
                  <span>{currentImage.title}</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-white">
                  {currentImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
