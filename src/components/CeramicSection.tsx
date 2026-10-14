import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Sparkles, Check, ArrowRight, Sun, Layers, Disc } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface CeramicSectionProps {
  onOpenBooking: () => void;
}

export const CeramicSection: React.FC<CeramicSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ceramic" className="py-24 bg-[#07080A] border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E31E25]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Surface Nano Protection</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Nano Ceramic &amp; <br />
              <span className="red-gradient-text">Silane Pro Glass Matrix</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              After completing our Skin Restoration Service to revive factory clarity, Akshar Car Spa applies an ultra-dense, covalently bonded nano-quartz ceramic barrier. This formula cures into a permanent glass shield that locks in extreme liquid wet gloss and defends against industrial fallout.
            </p>

            {/* Targeted Surfaces Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <Layers className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">Exterior Paint</span>
                <span className="text-[10px] text-[#8E8E98]">Deep wet gloss</span>
              </div>

              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <ShieldCheck className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">PPF Top-Seal</span>
                <span className="text-[10px] text-[#8E8E98]">Enhanced slickness</span>
              </div>

              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <Droplets className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">Glass &amp; Windshield</span>
                <span className="text-[10px] text-[#8E8E98]">Rain repellent</span>
              </div>

              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <Disc className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">Alloy Wheels</span>
                <span className="text-[10px] text-[#8E8E98]">Anti-brake dust</span>
              </div>

              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <Sun className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">Plastic &amp; Trim</span>
                <span className="text-[10px] text-[#8E8E98]">Anti-fading restore</span>
              </div>

              <div className="p-3 bg-[#0F1117] border border-white/5 text-center">
                <Sparkles className="w-5 h-5 text-[#E31E25] mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">Interior Cabin</span>
                <span className="text-[10px] text-[#8E8E98]">Stain barrier</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  trackEvent('cta_click', 'Ceramic Section Book');
                  onOpenBooking();
                }}
                className="btn-luxury-primary w-full sm:w-auto text-xs py-3.5 px-6 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Ceramic Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-white/10 shadow-2xl bg-[#0D0F15]">
              <img
                src="/ceramic-coating.jpg"
                alt="Akshar Car Spa 9H Nano Ceramic Coating hydrophobic water beading"
                className="w-full h-full object-cover brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />

              {/* Hydrophobic Water Beading Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Contact Angle</span>
                  <span className="text-sm font-bold text-white">110° Spherical Water Beading</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Longevity</span>
                  <span className="text-sm font-bold text-[#FF3B44]">Up to 5 Years Matrix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
