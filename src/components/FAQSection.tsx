import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQItem } from '../types';
import { trackEvent } from '../services/leadService';

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ceramic Coating',
    question: 'How does 9H Ceramic Coating protect against Vadodara’s climate and water conditions?',
    answer: 'Vadodara experiences intense UV sunlight in summer and notoriously hard borewell water that leaves stubborn calcium mineral deposits (water spots). Our multi-layer 9H nano-quartz ceramic coating creates a covalent molecular bond over the clear coat. It acts as an impenetrable sacrificial barrier that blocks UV rays from oxidizing the pigment and produces a 110° water contact angle, forcing mineral-heavy water to roll off rather than bake into the clear coat.'
  },
  {
    id: 'faq-2',
    category: 'PPF',
    question: 'What is the key difference between Paint Protection Film (PPF) and Ceramic Coating?',
    answer: 'PPF is an 8-mil (200-micron) physical thermoplastic polyurethane (TPU) armor designed to absorb physical impacts: high-speed stone chips on the expressway, flying gravel, and deep parking scratches. It also features heat-activated self-healing. Ceramic coating is a microscopic (2 to 3 micron) liquid chemical shield that delivers liquid gloss, hydrophobic beading, and chemical resistance, but cannot absorb heavy stone chips. Many clients choose PPF on high-impact zones (bonnet, bumper, fenders, mirrors) and ceramic coating over the rest.'
  },
  {
    id: 'faq-3',
    category: 'PPF',
    question: 'Do you use razor blades directly on my car during PPF installation?',
    answer: 'Absolutely not. At D Glossy Den, we utilize certified computer-designed pattern templates tailored to your vehicle’s exact make, model, and year. The film is pre-plotted with extended wrapping margins so edges can be tucked neatly behind body panels and emblems without any blades touching factory paintwork.'
  },
  {
    id: 'faq-4',
    category: 'Paint Correction',
    question: 'Are swirl marks permanently removed, or does polishing just temporarily mask them with fillers?',
    answer: 'We believe in true paint correction, not temporary glazes. We use precision compound and pad combinations with random orbital machines to level microscopic clear coat defects down to a uniform optical plane. Once corrected and wiped with solvent IPA, the paint reflections are permanent. Swirls will only return if the vehicle is later washed with dirty cloths or poor wash technique.'
  },
  {
    id: 'faq-5',
    category: 'Maintenance & Booking',
    question: 'How should I wash and maintain my car after detailing or coating?',
    answer: 'We provide every client with a written wash protocol guide upon delivery. Key rules: avoid roadside dry wiping with dusting wands (jhadu/cloths), always use two buckets with grit guards and a dedicated pH-neutral shampoo, and dry using plush twist-loop microfiber drying towels. We also offer scheduled maintenance washes at our studio.'
  },
  {
    id: 'faq-6',
    category: 'Maintenance & Booking',
    question: 'How long does a detailing job take, and do I need to book in advance?',
    answer: 'Paint correction and ceramic coating require 24 to 48 hours for proper multi-stage polishing and infrared heat curing. Full-body PPF installation takes 3 to 4 working days for meticulous edge wrapping and moisture dry-out. Because our climate bay accommodates a limited number of vehicles to guarantee perfection, advance reservations are strongly recommended.'
  },
  {
    id: 'faq-7',
    category: 'Maintenance & Booking',
    question: 'Do you only detail luxury imports, or do you work on Indian and daily commuter cars?',
    answer: 'We treat every car with identical craftsmanship. Whether you bring a Hyundai Creta, Mahindra XUV700, Tata Harrier, or a Mercedes-Benz, BMW, or Audi, each car receives micrometer paint logging, climate bay treatment, and dedicated master detailer attention.'
  }
];

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'Ceramic Coating', 'PPF', 'Paint Correction', 'Maintenance & Booking'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
    trackEvent('cta_click', `FAQ Toggle: ${id}`);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Technical Guidance</span>
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Everything you need to know about automotive surface preservation, film warranties, curing times, and daily car care in Vadodara.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#181B24] text-[#DEC07E] border-[#C5A059]'
                  : 'bg-[#101217] text-[#8E919C] border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="luxury-card border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-[#F5F5F7] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1 text-[#C5A059] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#9E9EA7] leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-[#101217] border border-[#C5A059]/30 text-center">
          <p className="font-cinzel text-base font-bold text-white mb-2">
            Have a Specific Question About Your Vehicle’s Paint Condition?
          </p>
          <p className="text-xs text-[#9E9EA7] max-w-xl mx-auto mb-4">
            Connect directly with our detailing technicians in Vadodara for guidance or bring your car to our studio for a complimentary paint inspection.
          </p>
          <a
            href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%2C%20I%20have%20a%20question%20regarding%20detailing%20my%20car"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary text-xs inline-flex items-center gap-2"
          >
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
