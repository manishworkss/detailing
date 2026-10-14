import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, ShieldCheck, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { DetailingPackage } from '../types';
import { trackEvent } from '../services/leadService';

const PACKAGES: DetailingPackage[] = [
  {
    id: 'paint-correction-concours',
    name: 'Concours Paint Restoration',
    tagline: 'Micron-level swirl and hologram removal',
    duration: '1 - 2 Days',
    startingPrice: '₹14,999*',
    priceNote: 'Starting estimate based on paint condition',
    idealFor: 'Cars with severe swirl marks, wash towel scratches, or oxidation',
    features: [
      'Digital micrometer clear coat thickness mapping',
      'Multi-stage rotary and random orbital compound leveling',
      'Up to 90% - 95% swirl and scratch reduction',
      'High-CRI dual-spectrum LED inspection',
      'Jeweling finishing polish for maximum optical depth',
      'Application of high-grade synthetic polymer sealant'
    ]
  },
  {
    id: 'ceramic-shield-9h',
    name: '9H Multi-Layer Ceramic Shield',
    tagline: 'Permanent hydrophobic glass-like gloss & UV barrier',
    badge: 'MOST POPULAR IN GUJARAT',
    duration: '2 Days (Incl. IR Curing)',
    startingPrice: '₹24,999*',
    priceNote: 'Estimate varies by vehicle segment & warranty tier',
    idealFor: 'Daily drivers & luxury vehicles needing high gloss and easy wash maintenance',
    popular: true,
    features: [
      'Full exterior chemical decontamination + synthetic clay prep',
      '2-stage paint correction to eliminate wash marks',
      'Multi-layer 9H nano-quartz ceramic coating on all painted panels',
      'Hydrophobic glass rain-repellent coating (windshield & windows)',
      'High-temperature ceramic seal on alloy wheel faces',
      'Infrared (IR) short-wave heat curing in cleanroom bay',
      'Complimentary 1st maintenance inspection & wash'
    ]
  },
  {
    id: 'platinum-ppf-armor',
    name: 'Platinum Self-Healing PPF Armor',
    tagline: 'Maximum physical stone-chip and road debris protection',
    badge: 'MAXIMUM RESALE PRESERVATION',
    duration: '3 - 4 Days',
    startingPrice: '₹48,000*',
    priceNote: 'Packages available from Front High-Impact to Full Body',
    idealFor: 'New vehicles, highway commuters, and luxury sports cars',
    features: [
      'Optical-grade 200-micron thermoplastic polyurethane (TPU)',
      'Instant heat-activated self-healing topcoat (sunlight/hot water)',
      'Computer-aided pre-cut patterns with deep wrapped edges',
      'Zero razor blades on factory paintwork protocol',
      'Non-yellowing, high-clarity aliphatic adhesive',
      'Protects against stone chips, scratches, gravel, and bird acid',
      'Available in Ultra Gloss or Satin Matte Stealth finishes'
    ]
  },
  {
    id: 'interior-sanctuary',
    name: 'Interior Leather & Cabin Rejuvenation',
    tagline: 'Hospital-grade steam sanitation and matte protection',
    duration: '5 - 7 Hours',
    startingPrice: '₹6,499*',
    priceNote: 'Sedan / SUV classification',
    idealFor: 'Pre-monsoon/post-monsoon deep sanitization and luxury cabin upkeep',
    features: [
      'Dry thermal steam extraction at 160°C across vents & crevices',
      'Gentle pH-neutral foaming leather cleanser',
      'Matte ceramic leather conditioning (zero synthetic greasy shine)',
      'Deep carpet and fabric shampoo with wet extraction',
      'Anti-bacterial disinfection and allergen elimination',
      'Anti-static cockpit and dashboard UV barrier dressing'
    ]
  }
];

interface PackagesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  const [vehicleSegment, setVehicleSegment] = useState<'Sedan / Hatch' | 'Mid SUV' | 'Luxury / Full SUV'>('Mid SUV');

  return (
    <section id="packages" className="py-24 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Protection Programs</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Detailing & Protection Packages
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Structured treatments designed for Vadodara's climate, road conditions, and dust exposure. All packages include chemical decontamination and cleanroom bay application.
          </p>

          {/* Vehicle Segment Selector */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#12141A] border border-white/10 rounded-sm">
            {(['Sedan / Hatch', 'Mid SUV', 'Luxury / Full SUV'] as const).map((seg) => (
              <button
                key={seg}
                onClick={() => {
                  setVehicleSegment(seg);
                  trackEvent('cta_click', `Segment Select: ${seg}`);
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  vehicleSegment === seg
                    ? 'bg-[#C5A059] text-black shadow-sm'
                    : 'text-[#9E9EA7] hover:text-white'
                }`}
              >
                {seg}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`luxury-card p-6 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'border-[#C5A059] ring-1 ring-[#C5A059]/40 bg-[#12151E]'
                  : 'border-white/10'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#C5A059] to-[#DFBF7A] text-black text-[9px] uppercase tracking-widest font-black rounded-[2px] shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="pt-2">
                  <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#DEC07E] font-medium min-h-[32px]">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="my-5 p-3 bg-[#0B0D11] border border-white/5 rounded-sm">
                  <div className="flex items-baseline justify-between">
                    <span className="font-cinzel text-2xl font-bold text-white">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-[11px] text-[#A0A0A9] flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#C5A059]" />
                      {pkg.duration}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#7A7A85] mt-1 italic">
                    {pkg.priceNote} for {vehicleSegment}
                  </p>
                </div>

                <p className="text-xs text-[#8E919C] mb-4 pb-3 border-b border-white/5">
                  <strong className="text-white">Best for:</strong> {pkg.idealFor}
                </p>

                <ul className="space-y-2.5 text-xs text-[#C5C5CD] mb-6">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    trackEvent('cta_click', `Select Package: ${pkg.name}`, vehicleSegment);
                    onOpenBooking(pkg.name);
                  }}
                  className={`w-full py-3 text-xs uppercase tracking-wider font-bold rounded-[2px] cursor-pointer flex items-center justify-center gap-1.5 transition-all ${
                    pkg.popular
                      ? 'btn-luxury-primary'
                      : 'bg-[#161820] hover:bg-[#1E222C] text-white border border-[#C5A059]/30 hover:border-[#C5A059]'
                  }`}
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Transparent Pricing Policy Alert */}
        <div className="mt-12 p-4 bg-[#101217] border border-[#C5A059]/20 flex items-start sm:items-center gap-3 text-xs text-[#A0A0A9]">
          <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0" />
          <p>
            <strong className="text-white">Honest Pricing Policy:</strong> Detailing is not a standardized assembly-line wash. Clear coat hardness, prior paint touch-ups, and scratch depth vary on every vehicle. We provide an exact written quote following our complimentary 15-minute paint micrometer inspection at our Vadodara studio.
          </p>
        </div>
      </div>
    </section>
  );
};
