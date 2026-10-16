import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'PPF' | 'Ceramic & Detailing' | 'Car Wrapping' | 'Booking & Warranty';
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'PPF',
    question: 'What is Paint Protection Film (PPF) and why is it important for my car?',
    answer: 'PPF is an optical-grade transparent thermoplastic polyurethane (TPU) film that shields your car’s paint from stone chips, gravel rash, road tar, bug splatter, and harsh UV rays. Akshar Car Spa uses premium self-healing films with instant thermal memory to keep your car looking factory-new.'
  },
  {
    id: 'faq-2',
    category: 'PPF',
    question: 'How long does PPF last?',
    answer: 'Our premium ACS PPF films can last up to 10 years, depending on the film package and periodic maintenance checkups at our studio bays.'
  },
  {
    id: 'faq-3',
    category: 'PPF',
    question: 'Will PPF affect the original paint or warranty of my car?',
    answer: 'No, it protects the original factory paint and is completely non-invasive. When removed professionally, your paint remains 100% intact with zero adhesive residue, helping preserve optimal resale value.'
  },
  {
    id: 'faq-4',
    category: 'PPF',
    question: 'What’s the difference between PPF and ceramic coating?',
    answer: 'Ceramic coating provides deep optical gloss, chemical resistance, and extreme water beading, but cannot stop high-speed flying stones. PPF is a physical 8-mil polyurethane armor that provides actual scratch and impact defense. We also offer combo packages combining both!'
  },
  {
    id: 'faq-5',
    category: 'PPF',
    question: 'What is the cost of PPF installation in Vadodara?',
    answer: 'Prices start from ₹20,000 for partial high-impact coverage (front bumper, bonnet, mirrors) and scale up to full body wraps depending on vehicle dimensions. Contact us for a free customized studio estimate.'
  },
  {
    id: 'faq-6',
    category: 'Car Wrapping',
    question: 'What is Multicolor Car Wrapping and how is it different from repainting?',
    answer: 'Wrapping allows you to change your car’s color, texture, and aesthetic without permanent paint modification. It is 100% removable and simultaneously protects the underlying factory clear coat.'
  },
  {
    id: 'faq-7',
    category: 'Car Wrapping',
    question: 'How long does a car wrap last?',
    answer: 'High-quality wrap films last up to 5 years with proper care. We utilize premium hybrid vinyl films with UV resistance formulated for Gujarat’s climate.'
  },
  {
    id: 'faq-8',
    category: 'Car Wrapping',
    question: 'Can I wrap only selected parts of my car?',
    answer: 'Yes! We execute custom accent wraps including dual-tone gloss black roofs, mirror caps, bonnets, spoiler accents, or full body transformations.'
  },
  {
    id: 'faq-9',
    category: 'Car Wrapping',
    question: 'Will wrapping damage my original paint?',
    answer: 'No, it is safe and shields your OEM clear coat from environmental fallout. When removed professionally at our studio, the factory paint underneath looks brand new.'
  },
  {
    id: 'faq-10',
    category: 'Booking & Warranty',
    question: 'Why choose Akshar Car Spa over others in Vadodara?',
    answer: 'We feature 4 studio locations across Vadodara, certified technicians, dust-free climate cleanrooms, a strict zero-queue appointment schedule with customer waiting lounge, and over 26,780 satisfied clients with 4.9+ Google ratings.'
  },
  {
    id: 'faq-11',
    category: 'Booking & Warranty',
    question: 'How do I book a service or get a consultation?',
    answer: 'You can call us directly at +91 77788 57187, message our WhatsApp desk at +91 85115 10254, visit our nearest studio in Karelibagh, Akota, or Manjalpur, or book through our online portal.'
  },
  {
    id: 'faq-12',
    category: 'Booking & Warranty',
    question: 'Do you offer warranty or after-service support?',
    answer: 'Yes! We provide up to 10 years warranty on premium PPF installations and up to 5 years on ceramic coatings, accompanied by periodic checkups and dedicated after-service support.'
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'PPF', 'Car Wrapping', 'Booking & Warranty'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    trackEvent('cta_click', `FAQ Toggle: ${id}`);
  };

  return (
    <section id="faq" className="py-24 bg-[#08090B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Everything you need to know about PPF protection, ceramic coatings, wrapping, and studio appointments at Akshar Car Spa.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#E31E25] text-white border-[#FF3B44] shadow-md'
                  : 'bg-[#0E1015] text-[#8E919C] border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="luxury-card border border-white/10 hover:border-[#E31E25]/40 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E31E25] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#FF3B44]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-[#B0B3BE] leading-relaxed border-t border-white/5 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
