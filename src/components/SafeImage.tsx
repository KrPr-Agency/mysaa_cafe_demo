import React, { useState } from 'react';
import { Coffee, Utensils, Sparkles, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: 'coffee' | 'food' | 'dessert' | 'interior' | 'general';
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackCategory = 'general',
  fallbackTitle,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFallbackIcon = () => {
    switch (fallbackCategory) {
      case 'coffee':
        return <Coffee className="w-8 h-8 text-[#B07D48]/70 stroke-[1.5]" />;
      case 'food':
        return <Utensils className="w-8 h-8 text-[#B07D48]/70 stroke-[1.5]" />;
      case 'dessert':
        return <Sparkles className="w-8 h-8 text-[#B07D48]/70 stroke-[1.5]" />;
      case 'interior':
      default:
        return <ImageIcon className="w-8 h-8 text-[#B07D48]/70 stroke-[1.5]" />;
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatioClass} flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#2D2621] via-[#1E1916] to-[#120F0D] text-[#EDE8E1] p-6 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle architectural grain lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EDE8E1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full border border-[#B07D48]/30 bg-[#B07D48]/10 flex items-center justify-center backdrop-blur-sm">
            {getFallbackIcon()}
          </div>
          <div className="space-y-1 max-w-[220px]">
            <p className="text-xs uppercase tracking-widest text-[#B07D48] font-medium">
              Mysa Atmosphere
            </p>
            <p className="font-serif text-base text-[#FAF8F5] leading-snug line-clamp-2">
              {fallbackTitle || alt}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#2D2621]/10 ${className}`}>
      {/* Skeleton / Shimmer background while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8E2D9] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
