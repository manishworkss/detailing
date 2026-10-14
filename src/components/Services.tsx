import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Droplets, Gauge, ArrowRight, Check, Disc, Wind, Palette, Award, Car } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  warranty: string;
  highlight: string;
  features: string[];
  image: string;
  priceEstimate: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'acs-ppf',
    name: 'ACS Paint Protection Film (PPF)',
    category: 'Ultimate Surface Armor',
    description: 'Optical-grade self-healing TPU film engineered to absorb stone chips, road debris, and swirl marks without yellowing or peeling under Gujarat sun.',
    warranty: 'Up to 10 Years Warranty',
    highlight: 'Self-Healing TPU Film',
    features: [
      'Instant heat-activated swirl & scratch healing',
      'Ultra-hydrophobic topcoat repelling road grime & tar',
      'Precision edge-wrapped computer templating',
      'Non-invasive installation preserving OEM paint & resale value'
    ],
    image: '/paint-correction-split.jpg',
    priceEstimate: 'From ₹20,000 partial / Custom quotes for full body'
  },
  {
    id: 'ceramic-coating',
    name: 'Nano Ceramic & Silane Pro Coating',
    category: 'Permanent Molecular Glass Matrix',
    description: 'Advanced 9H nano-quartz ceramic and Silane formulations covalently bonding to paint, glass, wheels, and trim for extreme liquid mirror gloss and chemical defense.',
    warranty: 'Up to 5 Years Protection',
    highlight: '110° Water Beading Contact Angle',
    features: [
      'Multi-layer exterior paint & clear coat quartz matrix',
      'Dedicated glass, alloy wheels & engine bay nano seals',
      'Protects against acidic bird droppings & borewell water etching',
      'Showroom depth with intense hydrophobic self-cleaning'
    ],
    image: '/ceramic-coating.jpg',
    priceEstimate: 'Tiered by vehicle segment'
  },
  {
    id: 'skin-restoration',
    name: 'Skin Restoration & Multi-Stage Paint Leveling',
    category: 'Concours Defect Correction',
    description: 'Carefully buffing the vehicle’s surface to eliminate the faded, worn-out paint layer, micro-marring, and buffer holograms, revealing deep fresh gloss underneath.',
    warranty: 'Micro-Checked by Quality Inspector',
    highlight: 'Removes 95%+ of Clear Coat Swirls',
    features: [
      'Rotary & dual-action compound defect leveling',
      'Headlight clarity restoration & chrome brightening',
      'Alloy wheel de-ironization & brake dust extraction',
      'Black textured plastic part restoration'
    ],
    image: '/hero-supercar.jpg',
    priceEstimate: 'Includes full multi-stage inspection'
  },
  {
    id: 'interior-spa',
    name: 'Interior Rejuvenation & Leather Restoration',
    category: 'Cabin Hygiene & Preservation',
    description: 'Hospital-grade dry thermal steam sanitation and breathable ceramic conditioning. Deep soil extraction without sticky or artificial greasy gloss.',
    warranty: 'Antibacterial & UV Barrier',
    highlight: '160°C Dry Thermal Steam Extraction',
    features: [
      'Deep stain extraction from perforated fabric & carpets',
      'Nourishing leather restoration with factory matte seal',
      'Full AC vent duct steam sterilization and odor eradication',
      'UV-blocking coating on dashboard and console plastics'
    ],
    image: '/interior-detailing.jpg',
    priceEstimate: 'Full cabin rejuvenation package'
  },
  {
    id: 'car-wrapping',
    name: 'Multicolor Car Wrapping & Custom Styling',
    category: 'Aesthetic Transformations',
    description: 'Change your car’s look without permanent repainting. Removable high-grade hybrid wrapping films that simultaneously protect your original factory finish.',
    warranty: 'Up to 5 Years Film Life',
    highlight: 'Removable OEM Paint Protection',
    features: [
      'Selected accent wraps: Roof, mirrors, bonnets, or full body',
      'Matte, gloss, satin, and metallic chrome color finishes',
      '100% reversible with zero adhesive residue upon removal',
      'High-precision blade-less installation technology'
    ],
    image: '/paint-correction-split.jpg',
    priceEstimate: 'Custom design consultation'
  },
  {
    id: 'maintenance-wash',
    name: 'Complete Maintenance & Car Spa',
    category: 'Periodic Studio Care',
    description: 'Appointment-based car wash spa ensuring zero wait time. Relax in our comfortable customer lounge while trained techs execute precision foam and chassis wash.',
    warranty: 'Zero Queue • Appointment Based',
    highlight: 'Dedicated Customer Waiting Lounge',
    features: [
      'pH-neutral snow foam hand wash & microfiber drying',
      'Underbody high-pressure chassis flushing',
      'Comprehensive post-wash inspection by dedicated quality checker',
      'Interior vacuuming & glass streak-free cleaning'
    ],
    image: '/studio-bay-vadodara.jpg',
    priceEstimate: 'Appointment booking available daily'
  }
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#08090B] relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E31E25]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#FF3B44] font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vadodara's Complete Detailing Arsenal</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Our Core Treatments
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            From certified self-healing ACS PPF to nano ceramic glass shields, every service at Akshar Car Spa is personalized, precise, and backed by quality-checked delivery.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="luxury-card flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#E31E25]/10 border border-white/8 hover:border-[#E31E25]/50"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div className="relative h-52 overflow-hidden bg-[#0A0C10]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent" />

                  {/* Highlight Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-white bg-black/80 border border-[#E31E25]/60 backdrop-blur-md">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Warranty Tag */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#FFFFFF] bg-[#E31E25]/90 backdrop-blur-md flex items-center gap-1">
                      <Award className="w-3 h-3 text-white" />
                      {service.warranty}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF3B44] font-semibold">
                    {service.category}
                  </p>
                  <h3 className="font-cinzel text-xl font-bold text-white mt-1 group-hover:text-[#FF3B44] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#9E9EA7] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#C4C4CD]">
                        <Check className="w-3.5 h-3.5 text-[#E31E25] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#737380] block">Estimate</span>
                  <span className="text-xs font-mono font-semibold text-[#DEC07E]">{service.priceEstimate}</span>
                </div>

                <button
                  onClick={() => {
                    trackEvent('service_select', service.name);
                    onSelectService(service.name);
                  }}
                  className="btn-luxury-secondary text-xs py-2 px-3.5 cursor-pointer group-hover:border-[#E31E25] group-hover:bg-[#E31E25] group-hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
