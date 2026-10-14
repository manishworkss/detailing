import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, ShieldAlert, ArrowRight } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface CeramicSectionProps {
  onOpenBooking: () => void;
}

const COATING_TIERS = [
  {
    name: 'D Glossy Den Ceramic 9H',
    type: 'Multi-Layer Quartz Matrix',
    durability: '3 to 5 Years Protection',
    hardness: '9H Certified Pencil Hardness',
    description: 'High-density siloxane polymer that cross-links with factory clear coats for deep gloss saturation and oxidation defense in Gujarat heat.',
    specs: ['9H Hardness', 'Chemical Shield pH 2-12', 'UV Solar Filter']
  },
  {
    name: 'Nano Graphene Matrix',
    type: 'Reduced Graphene Oxide',
    durability: '5 to 7 Years Protection',
    hardness: '10H Hybrid',
    description: 'Advanced graphene formulation offering superior thermal conductivity, reduced water spotting from Vadodara hard water, and ultra-slick feel.',
    specs: ['Enhanced Heat Dissipation', 'Anti-Water Spotting', 'Ultra-Hydrophobic']
  },
  {
    name: 'Satin & Matte Surface Seal',
    type: 'Low-Sheen Specialist Formula',
    durability: '3 Years Protection',
    hardness: '9H Elastic',
    description: 'Designed specifically for factory matte paints and satin wraps. Protects without adding unwanted gloss or artificial shine.',
    specs: ['Zero Added Gloss', 'Even Satin Texture', 'Stain Repellent']
  },
  {
    name: 'Hydrophobic Glass Rain Shield',
    type: 'Fluorinated Silane Coating',
    durability: '2 Years Protection',
    hardness: 'Optical Clarity',
    description: 'Bonds directly to windshield and exterior automotive glass for maximum wet-weather visibility during Vadodara monsoons.',
    specs: ['High Speed Water Shedding', 'Wiper Chattering Resistance', 'Easy Bug Release']
  }
];

export const CeramicSection: React.FC<CeramicSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ceramic" className="py-24 bg-[#08090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Molecular Surface Engineering
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Ceramic & Graphene Surface Coatings
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Permanent molecular bonding that shields high-value factory paint from chemical staining, harsh Gujarat sun, and road contamination in Vadodara.
          </p>
        </motion.div>

        {/* Feature Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <motion.div
              whileHover={{ rotateY: 2, rotateX: -1 }}
              style={{ perspective: 1000 }}
              className="border border-[#C5A059]/40 bg-[#12141A] p-2 transition-transform duration-300 shadow-2xl"
            >
              <img
                src="/ceramic-coating.jpg"
                alt="Hydrophobic water beading on 9H Ceramic Coated car at D Glossy Den Vadodara"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-cinzel text-2xl font-bold text-[#F5F5F7]">
              Laboratory Tested Hydrophobic Bond
            </h3>
            <p className="text-sm text-[#9E9EA7] leading-relaxed">
              Standard waxes wash off within weeks under the Gujarat sun. Our 9H ceramic coatings chemically fuse with vehicle clear coat, creating an ultra-dense glass shield that cannot be removed by shampoo or high-pressure washers.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#12141A] border border-white/5 text-[#C5A059] shrink-0 mt-0.5">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-white tracking-wider">
                    Extreme 110-Degree Contact Angle
                  </h4>
                  <p className="text-xs text-[#9E9EA7] mt-0.5">
                    Water and mud roll immediately off surfaces, carrying road dirt away.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#12141A] border border-white/5 text-[#C5A059] shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-white tracking-wider">
                    Chemical & Acid Rain Barrier
                  </h4>
                  <p className="text-xs text-[#9E9EA7] mt-0.5">
                    Resists tree sap, harsh detergent washes, bird lime, and airborne industrial chemicals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#12141A] border border-white/5 text-[#C5A059] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-white tracking-wider">
                    Mirror Wet-Look Depth
                  </h4>
                  <p className="text-xs text-[#9E9EA7] mt-0.5">
                    Infuses paintwork with rich optical depth and sharp, liquid-like reflections.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  trackEvent('cta_click', 'Ceramic Section Book Consultation');
                  onOpenBooking();
                }}
                className="btn-luxury-primary text-xs cursor-pointer"
              >
                Book Ceramic Consultation
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 4 Coating Formulations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COATING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(197, 160, 89, 0.55)' }}
              className="luxury-card p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A059] block mb-2">
                  {tier.type}
                </span>
                <h4 className="font-cinzel text-base font-bold text-white mb-2">
                  {tier.name}
                </h4>
                <p className="text-xs text-[#9E9EA7] leading-relaxed mb-4">
                  {tier.description}
                </p>

                <div className="py-2.5 px-3 bg-[#0C0E12] border border-white/5 mb-4 flex justify-between items-center text-xs">
                  <span className="text-[#DEC07E] font-medium">{tier.durability}</span>
                  <span className="text-[10px] text-[#64646D]">{tier.hardness}</span>
                </div>

                <div className="space-y-1.5 mb-6">
                  {tier.specs.map((s) => (
                    <p key={s} className="text-[11px] text-[#A0A0A9] flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#C5A059]" />
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                href={`https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(tier.name)}%20in%20Vadodara.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', `Ceramic Tier: ${tier.name}`)}
                className="btn-luxury-secondary w-full text-center text-xs py-2"
              >
                Inquire on WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
