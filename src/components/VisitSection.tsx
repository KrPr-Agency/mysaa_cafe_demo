import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';
import { MapPin, Clock, Phone, Instagram, ArrowUpRight, Copy, Check, Navigation } from 'lucide-react';

interface VisitProps {
  config?: CafeConfig;
}

export const VisitSection: React.FC<VisitProps> = ({ config = CAFE_DATA }) => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${config.address.line1}, ${config.address.line2}, ${config.address.city} ${config.address.postalCode}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#191614]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#B07D48] font-semibold mb-3">
            Find Your Way
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191614] leading-tight">
            Visiting {config.shortName}
          </h2>
          <p className="text-base text-[#191614]/70 mt-3">
            A quiet sanctuary just steps from Carter Road promenade in {config.neighborhood}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Details & Practical Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Address Block */}
            <div className="space-y-3 pb-8 border-b border-[#191614]/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B07D48] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </div>
              <p className="font-serif text-2xl text-[#191614]">
                {config.name}
              </p>
              <div className="text-sm text-[#191614]/75 space-y-1 leading-relaxed">
                <p>{config.address.line1}</p>
                <p>{config.address.line2}</p>
                <p className="text-[#191614]/50">{config.address.landmark}</p>
                <p>{config.address.city} – {config.address.postalCode}</p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#191614]/70 hover:text-[#191614] transition-colors py-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Hours Block */}
            <div className="space-y-3 pb-8 border-b border-[#191614]/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B07D48] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Hours</span>
              </div>
              <div className="flex items-baseline justify-between text-base">
                <span className="font-serif text-xl text-[#191614]">{config.hours.days}</span>
                <span className="font-mono text-sm text-[#191614] font-medium">{config.hours.time}</span>
              </div>
              <p className="text-xs text-[#191614]/60">
                {config.hours.kitchenNote}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#B07D48] font-semibold">
                Direct Contact
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${config.contact.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#191614] hover:bg-[#322B26] shadow-sm hover:shadow transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {config.contact.phoneDisplay}</span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href={config.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#191614] border border-[#191614] hover:bg-[#F3EFEA] transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </motion.a>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#191614]/70">
                <a
                  href={config.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B07D48] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram: {config.contact.instagramHandle}</span>
                </a>
                <a
                  href={config.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B07D48] transition-colors font-medium"
                >
                  WhatsApp Concierge →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stylized Architectural Map Treatment with whileInView */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 sm:p-10 bg-[#F3EFEA] border border-[#191614]/10 shadow-sm overflow-hidden">
              {/* Architectural stylized map backdrop */}
              <div className="relative aspect-[16/11] w-full bg-[#FAF8F5] border border-[#191614]/10 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                {/* SVG Cartographic Linework */}
                <svg
                  className="absolute inset-0 w-full h-full text-[#191614]/10 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Arabian Sea Coastline curve */}
                  <path
                    d="M 0,0 C 80,100 120,250 140,500 L 0,500 Z"
                    fill="#EFEAE2"
                    stroke="#191614"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                  {/* Carter Road Promenade */}
                  <path
                    d="M 140,0 C 150,120 180,260 210,500"
                    fill="none"
                    stroke="#191614"
                    strokeWidth="3"
                    strokeOpacity="0.15"
                  />
                  {/* Perry Cross Road */}
                  <path
                    d="M 180,180 L 480,240"
                    fill="none"
                    stroke="#B07D48"
                    strokeWidth="3.5"
                    strokeOpacity="0.4"
                  />
                  {/* Pali Hill Cross connector */}
                  <path
                    d="M 380,50 L 320,450"
                    fill="none"
                    stroke="#191614"
                    strokeWidth="1.5"
                    strokeOpacity="0.15"
                  />
                  <path
                    d="M 280,320 L 520,360"
                    fill="none"
                    stroke="#191614"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                  />
                </svg>

                {/* Map Labels */}
                <div className="relative z-10 flex justify-between items-start text-[11px] uppercase tracking-wider text-[#191614]/60">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#191614]/80">Arabian Sea Waterfront</span>
                    <p className="text-[10px] text-[#191614]/40">Carter Road Promenade</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-[#191614]/80">Pali Hill Enclave</span>
                  </div>
                </div>

                {/* Central Cafe Pin Beacon with pulse */}
                <div className="relative z-10 my-auto self-center flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-[#B07D48]/25 animate-ping" />
                    <span className="relative w-8 h-8 rounded-full bg-[#191614] text-[#FAF8F5] flex items-center justify-center shadow-lg border-2 border-[#FAF8F5]">
                      <MapPin className="w-4 h-4 text-[#B07D48]" />
                    </span>
                  </div>
                  <div className="mt-2 text-center bg-[#191614] text-[#FAF8F5] px-3.5 py-1.5 shadow-md">
                    <p className="font-serif text-sm tracking-wide">{config.name}</p>
                    <p className="text-[9px] uppercase tracking-widest text-[#B07D48]">
                      {config.neighborhood}
                    </p>
                  </div>
                </div>

                {/* Map Footer Landmark markers */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#191614]/60 pt-4 border-t border-[#191614]/10">
                  <span>Jogger's Park (3 min walk)</span>
                  <span>D'Monte Park (2 min walk)</span>
                </div>
              </div>

              {/* Map Footer Action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#191614]/70">
                  Street parking available along Perry Cross Rd · Valet service on weekends from 6 PM.
                </p>
                <a
                  href={config.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#191614] hover:text-[#B07D48] transition-colors shrink-0"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Practical Hospitality Amenities Bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAF8F5] border border-[#191614]/10 text-xs text-[#191614]/75">
              <div>
                <p className="font-semibold text-[#191614] mb-1">🐾 Pet Friendly</p>
                <p className="text-[11px] text-[#191614]/65">Outdoor verandah tables welcome pets</p>
              </div>
              <div>
                <p className="font-semibold text-[#191614] mb-1">⚡ Work & Read</p>
                <p className="text-[11px] text-[#191614]/65">High-speed fiber & morning power points</p>
              </div>
              <div>
                <p className="font-semibold text-[#191614] mb-1">🚗 Valet Service</p>
                <p className="text-[11px] text-[#191614]/65">Friday – Sunday evenings from 6 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#191614] mb-1">🍞 Hot Bakes</p>
                <p className="text-[11px] text-[#191614]/65">Fresh batch from oven at 8:30 AM & 3:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
