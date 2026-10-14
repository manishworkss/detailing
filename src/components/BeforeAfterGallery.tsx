import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';
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
    id: 'paint-leveling',
    title: 'Multi-Stage Paint Correction & Leveling',
    subtitle: 'Eliminating 95%+ of swirl marks, buffer holograms, and severe oxidation',
    vehicle: 'Luxury Black Saloon',
    service: 'Skin Restoration & Multi-Stage Paint Leveling',
    beforeImg: '/paint-correction-split.jpg',
    afterImg: '/paint-correction-split.jpg',
    beforeBadge: 'BEFORE: Swirl Marks & Oxidation',
    afterBadge: 'AFTER: 95% Defect Removal & Mirror Finish',
    defectDesc: 'Severe circular micro-marring, wash towel holograms, and oxidized clear coat haze reducing optical depth.',
    resultDesc: 'Precision compound leveling and finishing polish restoring factory clarity and liquid mirror reflection.'
  },
  {
    id: 'ceramic-beading',
    title: 'ACS PPF & 9H Ceramic Surface Protection',
    subtitle: 'Self-healing TPU film and permanent quartz matrix repelling environmental fallout',
    vehicle: 'Executive Sedan',
    service: 'ACS PPF & 9H Ceramic Armor',
    beforeImg: '/hero-supercar.jpg',
    afterImg: '/ceramic-coating.jpg',
    beforeBadge: 'UNPROTECTED: Vulnerable to Chips & Stains',
    afterBadge: 'PROTECTED: Self-Healing & 110° Hydrophobic Beading',
    defectDesc: 'Gujarat borewell water minerals baking into unsealed clear coat under hot afternoon sun and highway stone chips.',
    resultDesc: 'Covalently bonded nano-quartz barrier and self-healing TPU layer providing stone-chip defense and chemical shield.'
  },
  {
    id: 'leather-restoration',
    title: 'Interior Deep Extraction & Leather Spa',
    subtitle: 'Dry steam sanitation and matte protective conditioning without greasy residue',
    vehicle: 'Grand Tourer Cabin',
    service: 'Interior Rejuvenation & Leather Preservation',
    beforeImg: '/interior-detailing.jpg',
    afterImg: '/interior-detailing.jpg',
    beforeBadge: 'SOIL & PERSPIRATION ACCUMULATION',
    afterBadge: 'FACTORY MATTE SANITIZED & CONDITIONED',
    defectDesc: 'Perspiration oils, denim dye transfer, and dust embedded inside perforated leather pores and trim crevices.',
    resultDesc: 'High-temperature dry thermal steam extraction and breathable ceramic conditioner preserving supple texture and UV block.'
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E31E25]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#FF3B44] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proof of Craftsmanship • Akshar Car Spa</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Real Transformations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Drag the interactive slider below to inspect actual paint correction, ACS self-healing PPF, and interior rejuvenation completed at our Vadodara studio bays.
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
                  ? 'bg-[#181B24] text-[#FFFFFF] border-[#E31E25] shadow-md shadow-[#E31E25]/15'
                  : 'bg-[#0E1015] text-[#8E919C] border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {item.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="luxury-card p-4 sm:p-8 rounded-none border border-[#E31E25]/30">
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
                    alt={`${selectedItem.title} - Before Condition`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                      height: '100%'
                    }}
                  />
                  {/* Subtle defect emphasis overlay on before side */}
                  <div className="absolute inset-0 bg-red-950/15 pointer-events-none" />
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFFFFF] via-[#E31E25] to-[#FFFFFF] pointer-events-none shadow-[0_0_15px_#E31E25]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Handle Pip */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0E1015] border-2 border-[#E31E25] flex items-center justify-center shadow-2xl pointer-events-auto cursor-ew-resize">
                    <SlidersHorizontal className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-black/80 border border-red-500/50 backdrop-blur-md">
                    DEFECTS / BEFORE
                  </span>
                </div>
                <div className="absolute top-4 right-4 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF] bg-black/80 border border-[#E31E25]/80 backdrop-blur-md">
                    AKSHAR CAR SPA RESULT
                  </span>
                </div>

                {/* Quick Split Ratio Presets Bar */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-3 text-[10px] uppercase font-mono tracking-wider pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(100);
                    }}
                    className={`hover:text-white transition-colors cursor-pointer ${sliderPosition === 100 ? 'text-red-400 font-bold' : 'text-[#8E919C]'}`}
                  >
                    100% BEFORE
                  </button>
                  <span className="text-white/20">&bull;</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(50);
                    }}
                    className={`hover:text-white transition-colors cursor-pointer ${sliderPosition === 50 ? 'text-[#FF3B44] font-bold' : 'text-[#8E919C]'}`}
                  >
                    50/50 SPLIT
                  </button>
                  <span className="text-white/20">&bull;</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSliderPosition(0);
                    }}
                    className={`hover:text-white transition-colors cursor-pointer ${sliderPosition === 0 ? 'text-emerald-400 font-bold' : 'text-[#8E919C]'}`}
                  >
                    100% AFTER
                  </button>
                </div>
              </div>

              {/* Caption Under Slider */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#8E919C] px-1 font-mono">
                <span>&larr; LEFT SIDE (Defects)</span>
                <span className="text-[#A5A5B2] flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#E31E25]" /> Drag Slider or Click Presets
                </span>
                <span>RIGHT SIDE (Perfected) &rarr;</span>
              </div>
            </div>

            {/* Right: Technical Transformation Breakdown */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#FF3B44] font-semibold">
                  {selectedItem.service}
                </p>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#8E919C] mt-1 font-mono">
                  Target Vehicle: <span className="text-white font-semibold">{selectedItem.vehicle}</span>
                </p>
              </div>

              {/* Defect Log */}
              <div className="p-4 bg-[#0A0C11] border-l-2 border-red-500/70 border-y border-r border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Before Treatment Defect Log</span>
                </div>
                <p className="text-xs text-[#9E9EA7] leading-relaxed">
                  {selectedItem.defectDesc}
                </p>
              </div>

              {/* Outcome Log */}
              <div className="p-4 bg-[#0A0C11] border-l-2 border-[#E31E25] border-y border-r border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E25]" />
                  <span>Akshar Car Spa Outcome</span>
                </div>
                <p className="text-xs text-[#9E9EA7] leading-relaxed">
                  {selectedItem.resultDesc}
                </p>
              </div>

              {/* Booking CTA */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    trackEvent('cta_click', `Gallery CTA: ${selectedItem.service}`);
                    if (onOpenBooking) {
                      onOpenBooking(selectedItem.service);
                    }
                  }}
                  className="w-full btn-luxury-primary text-xs py-3.5 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Request Treatment For My Car</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
