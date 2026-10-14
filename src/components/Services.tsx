import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Layers, Disc, Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    icon: Shield,
    title: 'Self-Healing Paint Protection Film',
    badge: 'Flagship Protection',
    description: 'High-clarity optical aliphatic TPU film engineered to withstand high-speed stone chips, gravel abrasion, road salt, and harsh UV exposure with instant heat-activated self-healing.',
    specs: [
      { label: 'Film Thickness', value: '8.0 Mil (200 Micron)' },
      { label: 'Warranty Tier', value: '5 to 10 Years' },
      { label: 'Curing Bay', value: 'Climate Regulated' }
    ],
    features: [
      'Self-healing topcoat activated by sunlight or warm water',
      'Non-yellowing optical adhesive with stain resistance',
      'Computer pre-cut template fitment with wrapped edges',
      'Hydrophobic and anti-contamination surface'
    ],
    whatsappMsg: 'Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20a%20quote%20for%20Paint%20Protection%20Film%20(PPF)%20in%20Vadodara.'
  },
  {
    icon: Sparkles,
    title: '9H Multi-Layer Ceramic & Graphene Coating',
    badge: 'Paint Preservation',
    description: 'Covalently bonded nano-ceramic quartz matrix that forms a permanent sacrificial shield over clear coats. Provides extreme water contact angle beading and chemical resistance.',
    specs: [
      { label: 'Hardness Level', value: '9H Pencil Grade' },
      { label: 'Durability', value: '3 to 7 Years Protection' },
      { label: 'Chemical Shield', value: 'pH 2 to pH 12' }
    ],
    features: [
      '110-degree hydrophobic water droplet contact angle',
      'Deep optical gloss with candy-like mirror reflection',
      'UV barrier against industrial fallout and bug splatter etching',
      'Simplified maintenance wash with anti-static finish'
    ],
    whatsappMsg: 'Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20a%20quote%20for%20Ceramic%20or%20Graphene%20Coating%20in%20Vadodara.'
  },
  {
    icon: Disc,
    title: 'Concours Multi-Stage Paint Correction',
    badge: 'Surface Restoration',
    description: 'Micron-level paint leveling using rotary and random orbital polishers with compound matrixes. Removes up to 95% of wash swirls, holograms, buffer trails, and random isolated scratches.',
    specs: [
      { label: 'Inspection Tool', value: 'Digital Defelsko Gauge' },
      { label: 'Correction Rate', value: '85% to 95% Swirl Removal' },
      { label: 'Lighting Check', value: 'High-CRI Dual Spectrum' }
    ],
    features: [
      'Safe clear coat preservation with continuous thickness logging',
      'Two to three polishing stages tailored to paint hardness',
      'Elimination of oxidation and etched water spots',
      'Flawless mirror foundation prior to PPF or ceramic coating'
    ],
    whatsappMsg: 'Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20a%20quote%20for%20Multi-Stage%20Paint%20Correction%20in%20Vadodara.'
  },
  {
    icon: Layers,
    title: 'Interior Leather & Cabin Preservation',
    badge: 'Bespoke Care',
    description: 'Hospital-grade steam extraction, gentle pH-neutral cleaning, and matte ceramic conditioning for Napa, Merino, and Semi-Aniline leathers, Alcantara, and carbon cockpit trim.',
    specs: [
      { label: 'Cabin Sanitization', value: 'Thermal Steam 160°C' },
      { label: 'Leather Finish', value: 'Factory Matte (No Gloss)' },
      { label: 'Protection Period', value: '12 Months Barrier' }
    ],
    features: [
      'Denier-level extraction of deep grime and perspiration stains',
      'UV blocking conditioners to prevent leather cracking',
      'Hydrophobic textile coating for carpets and floor mats',
      'Elimination of lingering odor without heavy synthetic masking'
    ],
    whatsappMsg: 'Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20a%20quote%20for%20Interior%20Detailing%20in%20Vadodara.'
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#08090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Core Detailing Programs
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Engineered Automotive Surface Protection
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Every treatment is executed inside our Vadodara studio bay under dual-spectrum high-CRI inspection lights using calibrated instrumentation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(197, 160, 89, 0.5)' }}
                className="luxury-card p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#1A1D24] border border-[#C5A059]/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DEC07E] px-3 py-1 bg-[#161820] border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F5F7] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#9E9EA7] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-4 bg-[#0C0E12] border border-white/5 mb-6 text-center">
                    {service.specs.map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[10px] uppercase text-[#64646D] tracking-wider mb-1">
                          {spec.label}
                        </p>
                        <p className="text-xs font-semibold text-[#DEC07E]">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#C5C5CD]">
                        <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    onClick={() => {
                      trackEvent('service_select', service.title);
                      onSelectService(service.title);
                    }}
                    className="btn-luxury-primary flex-1 text-center cursor-pointer text-xs"
                  >
                    Select This Program
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </motion.button>
                  <motion.a
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    href={`https://wa.me/919825014820?text=${service.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', `Service WhatsApp: ${service.title}`)}
                    className="btn-luxury-secondary text-xs text-center"
                  >
                    Quick Quote
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
