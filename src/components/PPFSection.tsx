import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Check, ArrowRight, ShieldCheck, Flame, Sun, Droplets, Award } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface PPFSectionProps {
  onOpenBooking: () => void;
}

export const PPFSection: React.FC<PPFSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ppf" className="py-24 bg-[#08090B] relative overflow-hidden">
      {/* Dynamic Red Glow Backlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E31E25]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-white/10 shadow-2xl bg-[#0D0F15]">
              <img
                src="/paint-correction-split.jpg"
                alt="ACS Self Healing PPF Installation at Akshar Car Spa Vadodara"
                className="w-full h-full object-cover brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-[#E31E25] shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ACS Self-Healing TPU</span>
                </span>
              </div>

              {/* Bottom Feature Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Manufacturer Assurance</span>
                  <span className="text-sm font-bold text-white">Up to 10 Years Warranty</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Starting Coverage</span>
                  <span className="text-sm font-bold text-[#FF3B44]">From ₹20,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vadodara's Most Trusted Film Studio</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              ACS Self-Healing <br />
              <span className="red-gradient-text">Paint Protection Film</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              Gujarat’s climate presents severe threats to automotive paint: flying highway gravel on NH48, mineral-heavy borewell water etching, and scorching UV heat. <strong className="text-white">ACS PPF</strong> creates an invisible 8-mil optical shield that self-heals swirl marks under ambient sunlight while preserving original factory resale value.
            </p>

            {/* Core Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-[#0F1117] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Flame className="w-4 h-4 text-[#E31E25]" />
                  <span>Heat-Activated Self-Healing</span>
                </div>
                <p className="text-[11px] text-[#8E8E98] leading-normal">
                  Micro-scratches and wash towel swirls vanish automatically when exposed to engine heat or warm water.
                </p>
              </div>

              <div className="p-3.5 bg-[#0F1117] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Droplets className="w-4 h-4 text-[#E31E25]" />
                  <span>Hydrophobic Topcoat</span>
                </div>
                <p className="text-[11px] text-[#8E8E98] leading-normal">
                  Repels road grime, bug splatter, and corrosive borewell water spots with a high water contact angle.
                </p>
              </div>

              <div className="p-3.5 bg-[#0F1117] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Sun className="w-4 h-4 text-[#E31E25]" />
                  <span>Anti-Yellowing UV Filter</span>
                </div>
                <p className="text-[11px] text-[#8E8E98] leading-normal">
                  Optical aliphatic TPU resists discoloration and cracking, maintaining optical transparency year after year.
                </p>
              </div>

              <div className="p-3.5 bg-[#0F1117] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Award className="w-4 h-4 text-[#E31E25]" />
                  <span>Non-Invasive Installation</span>
                </div>
                <p className="text-[11px] text-[#8E8E98] leading-normal">
                  Removable at any time without damaging the original factory paint, fully protecting manufacturer warranty.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  trackEvent('cta_click', 'PPF Section Book');
                  onOpenBooking();
                }}
                className="btn-luxury-primary w-full sm:w-auto text-xs py-3.5 px-6 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free PPF Inspection &amp; Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/918511510254?text=Hello%20Akshar%20Car%20Spa,%20I%20am%20inquiring%20about%20PPF%20coating%20for%20my%20car."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', 'PPF WhatsApp')}
                className="btn-luxury-secondary w-full sm:w-auto text-xs py-3.5 px-6 text-center"
              >
                WhatsApp PPF Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
