import React, { useState } from 'react';
import { CAFE_DATA, CafeConfig } from './data/cafe';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { StorySection } from './components/StorySection';
import { SignatureMenu } from './components/SignatureMenu';
import { FullMenuPreview } from './components/FullMenuPreview';
import { GallerySection } from './components/GallerySection';
import { VisitSection } from './components/VisitSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AdarshOneStudioBar } from './components/AdarshOneStudioBar';

export default function App() {
  const [config, setConfig] = useState<CafeConfig>(CAFE_DATA);

  const handleUpdateConfig = (newProps: Partial<CafeConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...newProps,
    }));
  };

  const handleResetConfig = () => {
    setConfig(CAFE_DATA);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#191614] flex flex-col font-sans selection:bg-[#B07D48]/25 selection:text-[#191614]">
      {/* 1. Navigation */}
      <Navbar config={config} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero config={config} />

        {/* 3. Signature Experience */}
        <ExperienceSection config={config} />

        {/* 4. Brand Story */}
        <StorySection config={config} />

        {/* 5. Signature Menu */}
        <SignatureMenu config={config} />

        {/* 6. Full Menu Preview */}
        <FullMenuPreview config={config} />

        {/* 7. Atmosphere / Gallery */}
        <GallerySection config={config} />

        {/* 8. Visit / Location */}
        <VisitSection config={config} />

        {/* 9. Final CTA */}
        <CTASection config={config} />
      </main>

      {/* 10. Footer */}
      <Footer config={config} />

      {/* Adarsh One Flagship Sales Customizer & System Demo */}
      <AdarshOneStudioBar
        currentConfig={config}
        onUpdateConfig={handleUpdateConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
