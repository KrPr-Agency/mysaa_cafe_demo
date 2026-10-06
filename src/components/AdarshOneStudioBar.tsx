import React, { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp, Check, Layers, MessageSquare, Sparkles } from 'lucide-react';
import { CafeConfig } from '../data/cafe';

interface AdarshOneStudioBarProps {
  currentConfig: CafeConfig;
  onUpdateConfig: (newConfig: Partial<CafeConfig>) => void;
  onReset: () => void;
}

export const AdarshOneStudioBar: React.FC<AdarshOneStudioBarProps> = ({
  currentConfig,
  onUpdateConfig,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customName, setCustomName] = useState(currentConfig.name);
  const [customArea, setCustomArea] = useState(currentConfig.neighborhood);
  const [selectedAccent, setSelectedAccent] = useState('#B07D48');

  const presets = [
    {
      id: 'mysa',
      name: 'Mysa Coffee House',
      area: 'Bandra West',
      tagline: 'Coffee, food & moments worth staying for.',
      accent: '#B07D48',
    },
    {
      id: 'kala_ghoda',
      name: 'Roast & Stone',
      area: 'Kala Ghoda, Fort',
      tagline: 'Heritage architecture meets third-wave precision.',
      accent: '#9A6B43',
    },
    {
      id: 'juhu_veranda',
      name: 'Veranda & Bean',
      area: 'Juhu Tara Road',
      tagline: 'Slow morning brews by the palm-lined coast.',
      accent: '#7D6A56',
    },
  ];

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    onUpdateConfig({
      name: customName.trim(),
      shortName: customName.trim().split(' ')[0],
      neighborhood: customArea.trim() || 'Mumbai',
    });
  };

  const handleSelectPreset = (preset: typeof presets[0]) => {
    setCustomName(preset.name);
    setCustomArea(preset.area);
    setSelectedAccent(preset.accent);
    onUpdateConfig({
      name: preset.name,
      shortName: preset.name.split(' ')[0],
      neighborhood: preset.area,
      tagline: preset.tagline,
    });
  };

  return (
    <aside aria-label="Adarsh One Studio Controls" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Studio Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#191614] text-[#FAF8F5] p-5 shadow-2xl border border-[#FAF8F5]/20 animate-in slide-in-from-bottom-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex items-start justify-between pb-3 border-b border-[#FAF8F5]/10">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#B07D48] font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>Adarsh One · Café System </span>
              </div>
              <p className="font-serif text-lg text-white mt-0.5">
                Client Brand Simulator
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#FAF8F5]/60 hover:text-white cursor-pointer"
              aria-label="Close customizer"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#FAF8F5]/70 mt-3 leading-relaxed">
            Demonstrating our reusable architecture: switch café presets or customize your brand below to see instant adaptation across all sections.
          </p>

          {/* Quick Presets */}
          <div className="mt-4 space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/50 font-semibold block">
              Mumbai Neighbourhood Presets
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {presets.map((p) => {
                const isSelected = currentConfig.name === p.name;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#B07D48]/20 border border-[#B07D48] text-white'
                        : 'bg-[#25201C] hover:bg-[#2D2722] text-[#FAF8F5]/80 border border-transparent'
                    }`}
                  >
                    <div>
                      <span className="font-medium text-white block">{p.name}</span>
                      <span className="text-[10px] text-[#FAF8F5]/60">{p.area}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#B07D48]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Custom Form */}
          <form onSubmit={handleApplyCustom} className="mt-4 space-y-2.5 pt-3 border-t border-[#FAF8F5]/10">
            <label className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/50 font-semibold block">
              Test Your Own Café Identity
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="e.g. Subko Studio / Brik Oven"
              className="w-full px-3 py-2 bg-[#25201C] border border-[#FAF8F5]/20 text-xs text-white placeholder-[#FAF8F5]/40 focus:outline-none focus:border-[#B07D48]"
            />
            <input
              type="text"
              value={customArea}
              onChange={(e) => setCustomArea(e.target.value)}
              placeholder="e.g. Bandra / Colaba / Juhu"
              className="w-full px-3 py-2 bg-[#25201C] border border-[#FAF8F5]/20 text-xs text-white placeholder-[#FAF8F5]/40 focus:outline-none focus:border-[#B07D48]"
            />
            <div className="flex gap-2 pt-1">
              <button
                type="submit"
                className="flex-1 py-2 px-3 bg-[#FAF8F5] hover:bg-[#E8E2D9] text-[#191614] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Apply Live
              </button>
              <button
                type="button"
                onClick={onReset}
                className="py-2 px-3 bg-transparent border border-[#FAF8F5]/30 hover:border-[#FAF8F5] text-xs text-[#FAF8F5] transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Agency Deliverables Card */}
          <div className="mt-4 p-3 bg-[#B07D48]/10 border border-[#B07D48]/30 text-xs text-[#FAF8F5]/80 space-y-2">
            <div className="flex items-center justify-between text-[#B07D48] font-bold text-[11px] uppercase tracking-wider">
              <span>Adarsh One Launch Special</span>
              <span className="font-mono text-sm">₹25,000</span>
            </div>
            <ul className="text-[11px] text-[#FAF8F5]/70 space-y-1 list-disc list-inside">
              <li>Editorial mobile-first presence (₹75k+ standard)</li>
              <li>Direct WhatsApp ordering & table inquiry triggers</li>
              <li>Google Maps, Local SEO & Schema.org integration</li>
              <li>Delivered & launched in 72 hours</li>
            </ul>
            <a
              href="https://wa.me/917498733087?text=Hi%20Adarsh%20One,%20I%20saw%20the%20Mysa%20Coffee%20House%20demo%20and%20want%20to%20build%20a%20flagship%20website%20for%20my%20café!"
              target="_blank"
              rel="noreferrer"
              className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FAF8F5] hover:bg-[#E8E2D9] text-[#191614] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Adarsh One Studio</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#191614] text-[#FAF8F5] border border-[#FAF8F5]/30 shadow-2xl hover:bg-[#2A2420] transition-colors cursor-pointer group"
        aria-label="Toggle Adarsh One brand simulator"
      >
        <Sliders className="w-3.5 h-3.5 text-[#B07D48] group-hover:rotate-45 transition-transform" />
        <span className="text-xs uppercase tracking-wider font-semibold">
          {isOpen ? 'Close Simulator' : 'Adarsh One Demo'}
        </span>
        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 text-[#FAF8F5]/60" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-[#FAF8F5]/60" />
        )}
      </button>
    </aside>
  );
};
