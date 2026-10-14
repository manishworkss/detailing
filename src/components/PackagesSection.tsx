import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Sparkles, Clock, ArrowRight, Info, Award } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  warranty: string;
  duration: string;
  priceHatchSedan: string;
  priceSuv: string;
  priceLuxury: string;
  features: string[];
}

const PACKAGES: PackageTier[] = [
  {
    id: 'skin-restoration',
    name: 'Skin Restoration & Gloss Package',
    subtitle: 'Revitalizing oxidized paint, removing wash holograms, and restoring showroom shine',
    warranty: 'Quality Checked',
    duration: '1 Full Day',
    priceHatchSedan: '₹6,500',
    priceSuv: '₹8,500',
    priceLuxury: '₹12,000',
    features: [
      'Multi-stage compound buffing & swirl mark leveling',
      'Headlight clarity de-yellowing & lens seal',
      'Chrome trim & emblem polish',
      'Wheel deep cleaning & brake dust removal',
      'Exterior plastic & rubber trim rejuvenation',
      'High-grade carnauba sealant finish'
    ]
  },
  {
    id: 'silane-ceramic',
    name: 'Nano Ceramic & Silane Pro Shield',
    subtitle: 'Permanent hydrophobic molecular quartz matrix for long-lasting paint defense',
    badge: 'High Value',
    popular: true,
    warranty: '3 to 5 Years Warranty',
    duration: '2 Days',
    priceHatchSedan: '₹16,000',
    priceSuv: '₹22,000',
    priceLuxury: '₹32,000',
    features: [
      'Full 2-stage skin restoration & paint correction',
      'Multi-layer 9H nano ceramic clear coat seal',
      'Hydrophobic windshield & side glass treatment',
      'High-heat alloy wheels ceramic coating',
      'Interior dashboard & door card UV protection',
      'Annual maintenance & gloss checkup program'
    ]
  },
  {
    id: 'acs-ppf-armor',
    name: 'ACS Self-Healing PPF Armor',
    subtitle: 'Optical-grade TPU film absorbing high-speed stone chips and scratches with zero yellowing',
    badge: 'Ultimate Armor',
    warranty: 'Up to 10 Years Warranty',
    duration: '3 to 4 Days',
    priceHatchSedan: '₹20,000 (Partial) / ₹75k+',
    priceSuv: '₹25,000 (Partial) / ₹95k+',
    priceLuxury: 'Custom Concierge Quote',
    features: [
      'Self-healing optical TPU film with heat memory',
      'Edge-wrapped seamless installation technology',
      'Stone chip, gravel, and door ding absorption',
      'Borewell water stain & UV yellowing resistance',
      'Free 30-day post-installation edge inspection',
      'Digital warranty certificate issued upon delivery'
    ]
  },
  {
    id: 'executive-combo',
    name: 'Executive Full Studio Combo',
    subtitle: 'Bespoke vehicle wrapping or full PPF combined with complete ceramic and interior spa',
    badge: 'Concours Grade',
    warranty: '10 Years Complete Care',
    duration: '4 to 5 Days',
    priceHatchSedan: '₹45,000+',
    priceSuv: '₹65,000+',
    priceLuxury: 'Bespoke Quote',
    features: [
      'Custom vinyl wrap or comprehensive PPF armor',
      'Ceramic quartz matrix over film & glass surfaces',
      '160°C dry thermal steam interior sanitation',
      'Full leather extraction and ceramic matte seal',
      'Engine bay detail & protective dressing',
      'Priority appointments across all 4 Vadodara studios'
    ]
  }
];

interface PackagesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  const [selectedSegment, setSelectedSegment] = useState<'hatch' | 'suv' | 'luxury'>('suv');

  return (
    <section id="packages" className="py-24 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#FF3B44] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Studio Packages • Akshar Car Spa</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Transparent Detailing Tiers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Every treatment is executed inside our cleanroom bays using Scangrip diagnostic inspection lights and premium imported materials.
          </p>
        </div>

        {/* Vehicle Segment Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#0E1015] border border-white/10 rounded-[3px]">
            <button
              onClick={() => setSelectedSegment('hatch')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                selectedSegment === 'hatch'
                  ? 'bg-[#E31E25] text-white shadow-md'
                  : 'text-[#8E919C] hover:text-white'
              }`}
            >
              Hatchback / Compact Sedan
            </button>
            <button
              onClick={() => setSelectedSegment('suv')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                selectedSegment === 'suv'
                  ? 'bg-[#E31E25] text-white shadow-md'
                  : 'text-[#8E919C] hover:text-white'
              }`}
            >
              Mid & Full-Size SUV
            </button>
            <button
              onClick={() => setSelectedSegment('luxury')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                selectedSegment === 'luxury'
                  ? 'bg-[#E31E25] text-white shadow-md'
                  : 'text-[#8E919C] hover:text-white'
              }`}
            >
              Luxury Saloon / 4x4
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            const currentPrice =
              selectedSegment === 'hatch'
                ? pkg.priceHatchSedan
                : selectedSegment === 'suv'
                ? pkg.priceSuv
                : pkg.priceLuxury;

            return (
              <div
                key={pkg.id}
                className={`luxury-card flex flex-col justify-between p-6 rounded-none relative transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#E31E25] shadow-2xl shadow-[#E31E25]/10 bg-[#12141D]'
                    : 'border-white/10 hover:border-[#E31E25]/40'
                }`}
              >
                {/* Popular / Tier Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[#E31E25] shadow-md border border-[#FF3B44]">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Warranty */}
                  <div className="mt-2 text-center pb-4 border-b border-white/10">
                    <h3 className="font-cinzel text-lg font-bold text-white min-h-[48px] flex items-center justify-center">
                      {pkg.name}
                    </h3>
                    <p className="text-[11px] text-[#8E919C] mt-1 leading-snug">
                      {pkg.subtitle}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#FF3B44] font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{pkg.warranty}</span>
                    </div>

                    {/* Price Display */}
                    <div className="mt-3">
                      <span className="font-cinzel text-2xl font-extrabold text-white">
                        {currentPrice}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#686873] block mt-0.5 font-mono">
                        Estimated ({pkg.duration})
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#C4C4CD]">
                        <Check className="w-3.5 h-3.5 text-[#E31E25] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      trackEvent('cta_click', `Package Book: ${pkg.name}`);
                      onOpenBooking(pkg.name);
                    }}
                    className={`w-full py-3 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'btn-luxury-primary shadow-lg'
                        : 'btn-luxury-secondary hover:border-[#E31E25] hover:text-white'
                    }`}
                  >
                    <span>Select Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Disclaimer Notice */}
        <div className="mt-12 p-4 bg-[#0A0C11] border border-white/10 max-w-3xl mx-auto flex items-start gap-3 text-xs text-[#8E919C]">
          <Info className="w-4 h-4 text-[#E31E25] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Inspection Transparency:</strong> Final pricing depends on existing paint clear coat thickness, surface marring severity, and vehicle dimensions. Every vehicle undergoes a digital gauge inspection upon arrival at our Karelibagh, Akota, or Manjalpur studios before work begins.
          </p>
        </div>
      </div>
    </section>
  );
};
