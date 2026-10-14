import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle, Gauge, Award, Sun, Users } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workshop Photographic Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="relative border border-[#C5A059]/40 bg-[#101217] p-2 shadow-2xl">
              <img
                src="/studio-bay-vadodara.jpg"
                alt="D Glossy Den Automotive Studio Bay Vadodara"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#08090B]/95 backdrop-blur-md border border-[#C5A059]/30 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#DEC07E]">
                      Vadodara Detailing Bay Standards
                    </p>
                    <p className="text-[11px] text-[#9E9EA7]">
                      Equipped with hexagonal LED tunnel & Scangrip inspection systems
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-1 bg-[#1A1D24] text-[#C5A059] border border-[#C5A059]/40">
                    Cleanroom Bay
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#101217] border border-white/5">
                <span className="font-cinzel text-xl font-bold text-[#DEC07E] block">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8E919C]">Climate Bay Curing</span>
              </div>
              <div className="p-3 bg-[#101217] border border-white/5">
                <span className="font-cinzel text-xl font-bold text-[#DEC07E] block">200μ</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8E919C]">Certified TPU Film</span>
              </div>
              <div className="p-3 bg-[#101217] border border-white/5">
                <span className="font-cinzel text-xl font-bold text-[#DEC07E] block">9H</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8E919C]">Nano-Quartz Matrix</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Genuine Ethos & Studio Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
                Our Detailing Philosophy
              </p>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                Crafted for Discerning Car Owners in Vadodara
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#B5B5BE] leading-relaxed">
              At <strong className="text-white font-semibold">D Glossy Den</strong>, we reject assembly-line washing and abrasive rotary buffer trails. Real detailing is microscopic surface engineering: preserving factory clear coat depth, eliminating swirl marks without burning edges, and applying permanent ceramic matrices or self-healing films inside controlled environments.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 bg-[#101217] border border-white/5">
                <div className="p-2 bg-[#181B24] text-[#C5A059] shrink-0">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-0.5">
                    Paint Thickness Verification
                  </h3>
                  <p className="text-xs text-[#9E9EA7]">
                    We log clear coat microns across every panel with digital gauges before compounding. We preserve your car's factory paint integrity for years to come.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#101217] border border-white/5">
                <div className="p-2 bg-[#181B24] text-[#C5A059] shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-0.5">
                    Engineered for Gujarat Climate
                  </h3>
                  <p className="text-xs text-[#9E9EA7]">
                    Vadodara's intense UV heat and hard borewell water cause severe mineral etching. Our 9H coatings and TPU films are chemically formulated to repel hard water spots and thermal oxidation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#101217] border border-white/5">
                <div className="p-2 bg-[#181B24] text-[#C5A059] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-0.5">
                    Transparent, Honest Consultation
                  </h3>
                  <p className="text-xs text-[#9E9EA7]">
                    No fake warranties or exaggerated claims. You receive daily progress photos on WhatsApp, pre-service inspection reports, and genuine maintenance guidance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
