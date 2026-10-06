import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';

interface NavbarProps {
  config?: CafeConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config = CAFE_DATA }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Elegant hairline scroll reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Story', href: '#story' },
    { label: 'Signature', href: '#signature' },
    { label: 'Menu', href: '#menu' },
    { label: 'Atmosphere', href: '#atmosphere' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#B07D48] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#191614]/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <motion.a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label={`${config.name} Home`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#191614] group-hover:text-[#B07D48] transition-colors duration-300">
              {config.name}
            </span>
          </motion.a>

          {/* Zone 2: Clean text navigation links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#191614]/75">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[#191614]/80 hover:text-[#191614] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B07D48] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#visit"
              className="text-xs uppercase tracking-widest font-semibold text-[#191614]/70 hover:text-[#191614] transition-colors py-2 px-1"
            >
              {config.neighborhood}
            </a>
            <motion.a
              href="#menu"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#191614] hover:bg-[#322B26] shadow-sm hover:shadow transition-all duration-200"
            >
              Explore Menu
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2 text-[#191614] hover:text-[#B07D48] focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#FAF8F5] p-8 pt-24"
          >
            <div className="flex items-center justify-between absolute top-5 left-6 right-6">
              <span className="font-serif text-2xl text-[#191614]">
                {config.name}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#191614] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06 },
                },
              }}
              className="flex flex-col gap-5 my-auto"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#191614] hover:text-[#B07D48] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 pt-6 border-t border-[#191614]/10 text-sm"
            >
              <div className="flex items-start gap-3 text-[#191614]/80">
                <MapPin className="w-4 h-4 mt-0.5 text-[#B07D48] shrink-0" />
                <span>{config.address.line1}, {config.neighborhood}, {config.city}</span>
              </div>
              <div className="flex items-center gap-3 text-[#191614]/80">
                <Clock className="w-4 h-4 text-[#B07D48] shrink-0" />
                <span>{config.hours.days}: {config.hours.time}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={config.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#191614]"
                >
                  <span>Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={config.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#191614] border border-[#191614]"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
