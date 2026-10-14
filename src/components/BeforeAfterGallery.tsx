import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ShieldAlert, Award, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  vehicle: string;
  service: string;
  beforeImg: string;
  afterImg: string;
  beforeBadge: string;
  afterBadge: string;
  defectDesc: string;
  resultDesc: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'paint-correction',
    title: 'Multi-Stage Concours Paint Leveling',
    subtitle: 'Swirl and hologram elimination under dual-spectrum inspection lights',
    vehicle: 'Luxury Black Saloon',
    service: 'Concours 2-Stage Paint Correction',
    beforeImg: '/paint-correction-split.jpg',
    afterImg: '/paint-correction-split.jpg',
    beforeBadge: 'BEFORE: Heavy Swirl Marks & Wash Scratches',
    afterBadge: 'AFTER: 95% Defect Removal & Mirror Finish',
    defectDesc: 'Severe circular micro-marring, wash towel holograms, and oxidized clear coat haze reducing optical depth.',
    resultDesc: 'Precision compound leveling and finishing polish restoring factory clarity and liquid mirror reflection.'
  },
  {
    id: 'ceramic-beading',
    title: '9H Ceramic Surface Protection & Hydrophobicity',
    subtitle: 'Permanent quartz matrix repelling water spots and road contamination',
    vehicle: 'Executive Sedan',
    service: '9H Multi-Layer Ceramic Coating',
    beforeImg: '/hero-supercar.jpg',
    afterImg: '/ceramic-coating.jpg',
    beforeBadge: 'UNPROTECTED: Vulnerable to Water Spotting',
    afterBadge: 'PROTECTED: 110° Hydrophobic Water Beading',
    defectDesc: 'Gujarat borewell water minerals baking into unsealed clear coat under hot afternoon sun.',
    resultDesc: 'Covalently bonded nano-quartz barrier producing tight spherical water beading and chemical defense.'
  },
  {
    id: 'leather-restoration',
    title: 'Cognac Leather Deep Extraction & Ceramic Matte Seal',
    subtitle: 'Hospital-grade steam sanitation without artificial greasy shine',
    vehicle: 'Grand Tourer Cabin',
    service: 'Interior Leather & Trim Preservation',
    beforeImg: '/interior-detailing.jpg',
    afterImg: '/interior-detailing.jpg',
    beforeBadge: 'SOIL & PERSPIRATION ACCUMULATION',
    afterBadge: 'FACTORY MATTE CERAMIC CONDITIONED',
    defectDesc: 'Perspiration oils, denim dye transfer, and dust embedded inside perforated leather pores.',
    resultDesc: '160°C dry thermal steam extraction and breathable ceramic conditioner preserving supple texture and UV block.'
  }
];

interface BeforeAfterGalleryProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem>(GALLERY_ITEMS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#07080A] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Studio Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C5A059]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Automotive Transformations</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Proof of Craftsmanship
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Drag the interactive slider below to inspect real paint correction, ceramic hydrophobicity, and interior rejuvenation completed at our Vadodara studio.
          </p>
        </div>

        {/* Gallery Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setSliderPosition(50);
                trackEvent('cta_click', `Gallery Tab: ${item.title}`);
              }}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all cursor-pointer border ${
                selectedItem.id === item.id
                  ? 'bg-[#181B24] text-[#DEC07E] border-[#C5A059] shadow-md shadow-[#C5A059]/10'
                  : 'bg-[#0E1015] text-[#8E919C] border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {item.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="luxury-card p-4 sm:p-8 rounded-none border border-[#C5A059]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Split View Image */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-video rounded-none overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl bg-[#0A0C10]"
              >
                {/* Layer 1: Base / After Image */}
                <img
                  src={selectedItem.afterImg}
                  alt={`${selectedItem.title} - After Result`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />

                {/* Layer 2: Clipped Before Image */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedItem.beforeImg}
                    alt={`${selectedItem.title} - Before State`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      filter: selectedItem.id === 'leather-restoration' ? 'contrast(0.85) brightness(0.8)' : undefined
                    }}
                  />
                  {/* Subtle red hue tint for defect emphasis on Before side */}
                  <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay" />
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#F5E5C9] shadow-[0_0_15px_rgba(245,229,201,1)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Control Grip */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0E1015] border-2 border-[#C5A059] flex items-center justify-center text-[#DEC07E] shadow-2xl">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md border border-red-500/40 text-[10px] uppercase font-bold text-red-400 tracking-wider">
                    Defects / Before
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#C5A059]/60 text-[10px] uppercase font-bold text-[#DEC07E] tracking-wider">
                    D Glossy Den Result
                  </span>
                </div>

                {/* Quick Preset Buttons */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/85 px-3 py-1.5 border border-white/10 rounded-full backdrop-blur-md">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(100);
                    }}
                    className="text-[10px] uppercase tracking-wider text-red-400 hover:text-white font-semibold cursor-pointer"
                  >
                    100% Before
                  </button>
                  <span className="text-white/30">•</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(50);
                    }}
                    className="text-[10px] uppercase tracking-wider text-[#DEC07E] hover:text-white font-semibold cursor-pointer"
                  >
                    50/50 Split
                  </button>
                  <span className="text-white/30">•</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(0);
                    }}
                    className="text-[10px] uppercase tracking-wider text-emerald-400 hover:text-white font-semibold cursor-pointer"
                  >
                    100% After
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Technical Transformation Breakdown */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059] block mb-1">
                  {selectedItem.service}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#8E919C] mt-1">
                  Target Vehicle: <strong className="text-[#DEC07E]">{selectedItem.vehicle}</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 bg-[#101217] border-l-2 border-red-500/80 border-white/5">
                  <div className="flex items-center gap-1.5 text-red-400 font-semibold mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Before Treatment Defect Log</span>
                  </div>
                  <p className="text-[#9E9EA7] leading-relaxed">
                    {selectedItem.defectDesc}
                  </p>
                </div>

                <div className="p-3.5 bg-[#101217] border-l-2 border-[#C5A059] border-white/5">
                  <div className="flex items-center gap-1.5 text-[#DEC07E] font-semibold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>D Glossy Den Outcome</span>
                  </div>
                  <p className="text-[#9E9EA7] leading-relaxed">
                    {selectedItem.resultDesc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    trackEvent('cta_click', `Book Treatment from Gallery: ${selectedItem.service}`);
                    if (onOpenBooking) onOpenBooking(selectedItem.service);
                  }}
                  className="btn-luxury-primary w-full text-xs cursor-pointer text-center"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  Request Treatment for My Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
