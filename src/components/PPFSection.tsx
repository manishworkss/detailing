import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface PPFSectionProps {
  onOpenBooking: () => void;
}

export const PPFSection: React.FC<PPFSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ppf" className="py-24 bg-[#0A0C10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photographic Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <motion.div
              whileHover={{ rotateY: -2, rotateX: 1 }}
              style={{ perspective: 1000 }}
              className="relative border border-[#C5A059]/40 bg-[#12141A] p-2 transition-transform duration-300 shadow-2xl"
            >
              <img
                src="/ppf-installation.jpg"
                alt="Paint Protection Film (PPF) precision application at D Glossy Den Vadodara"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#08090B]/95 backdrop-blur-md border border-[#C5A059]/30 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#DEC07E]">
                      Laser-Plotted Pattern Templates
                    </p>
                    <p className="text-[11px] text-[#9E9EA7]">
                      Zero razor blades on factory clear coat in our Vadodara studio
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-1 bg-[#1E222A] text-[#C5A059] border border-[#C5A059]/40">
                    200 Micron TPU
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Technical Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
                Maximum Impact Armor
              </p>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                Self-Healing Paint Protection Film (PPF)
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              D Glossy Den installs optical thermoplastic polyurethane (TPU) films engineered for high durability against stone chips on National Highway 48 and Ahmedabad-Vadodara Expressway drives. Every piece is computer pre-cut to wrap deep around panel edges, keeping original paint untouched and stone-chip free.
            </p>

            {/* Coverage Packages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(197, 160, 89, 0.5)' }}
                className="p-5 bg-[#12141A] border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="font-cinzel text-sm font-bold text-white">Full Body Wrap</h3>
                </div>
                <p className="text-xs text-[#9E9EA7] mb-3">
                  Comprehensive panel coverage including roof, pillars, doors, and bumpers.
                </p>
                <span className="text-[11px] font-semibold text-[#DEC07E]">
                  Up to 10-Year Film Durability
                </span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(197, 160, 89, 0.5)' }}
                className="p-5 bg-[#12141A] border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="font-cinzel text-sm font-bold text-white">Front High-Impact Pack</h3>
                </div>
                <p className="text-xs text-[#9E9EA7] mb-3">
                  Front bumper, full hood, both fenders, wing mirrors, and door cups.
                </p>
                <span className="text-[11px] font-semibold text-[#DEC07E]">
                  5-Year Film Durability
                </span>
              </motion.div>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-3 pt-2">
              {[
                'Instant scratch healing through heat exposure (sunlight or engine heat)',
                'Optical grade clarity: Zero orange peel distortion or milky haze',
                'Hydrophobic fluoropolymer topcoat rejects road asphalt, bug acid, and dirt',
                'Available in Ultra Gloss Clear and Satin Stealth Matte finishes'
              ].map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-xs text-[#C5C5CD]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  trackEvent('cta_click', 'PPF Section Inquire');
                  onOpenBooking();
                }}
                className="btn-luxury-primary cursor-pointer text-xs"
              >
                Inquire For Your Vehicle
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </motion.button>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%20Vadodara%2C%20I%20would%20like%20a%20quote%20for%20PPF%20Installation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', 'PPF Section WhatsApp')}
                className="btn-luxury-secondary text-xs"
              >
                WhatsApp PPF Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
