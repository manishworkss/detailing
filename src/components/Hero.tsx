import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, MessageSquare, Phone, ChevronRight, Award, MapPin, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07080A]">
      {/* Dynamic Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-supercar.jpg"
          alt="Akshar Car Spa luxury automotive detailing studio bay in Vadodara"
          className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.12]"
        />
        {/* Multilayered radial and linear dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/85 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080A]/40 to-[#07080A]" />
        {/* Subtle Brand Red Glow Accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E31E25]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Studio Credential Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[2px] bg-[#12141D] border border-[#E31E25]/40 mb-6 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E25] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FFFFFF]">
              Akshar Car Spa &bull; Vadodara's Premier Detailing Network
            </span>
          </motion.div>

          {/* Primary High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F7] tracking-tight leading-[1.08]"
          >
            Showroom Perfection. <br />
            <span className="red-gradient-text">Engineered Protection.</span>
          </motion.h1>

          {/* Value Proposition Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#B0B3BE] font-normal leading-relaxed max-w-2xl"
          >
            Vadodara’s trusted automotive studio network across <strong className="text-white">Karelibagh, Akota &amp; Manjalpur</strong>. Certified self-healing <strong className="text-white">Paint Protection Film (PPF)</strong>, multi-surface <strong className="text-white">9H Nano Ceramic Coatings</strong>, and precision skin restoration backed by up to <strong className="text-[#FF3B44]">10-year warranty</strong>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => {
                trackEvent('cta_click', 'Hero Book Appointment');
                onOpenBooking();
              }}
              className="btn-luxury-primary cursor-pointer shadow-xl text-xs sm:text-sm py-4 px-7 group"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Studio Appointment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/918511510254?text=Hello%20Akshar%20Car%20Spa,%20I%20would%20like%20to%20get%20a%20consultation%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', 'Hero WhatsApp')}
              className="btn-luxury-secondary text-xs sm:text-sm py-4 px-6 flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Instant Quote</span>
            </a>

            <a
              href="tel:+917778857187"
              onClick={() => trackEvent('phone_click', 'Hero Call')}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-4 px-4 text-[#A5A5B2] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E31E25]" />
              <span className="font-medium">+91 77788 57187</span>
            </a>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            <div className="flex flex-col">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">26,780+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#8E8E98] mt-0.5">Cars Serviced</span>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FF3B44] tracking-tight">4 Studios</span>
              <span className="text-[11px] uppercase tracking-wider text-[#8E8E98] mt-0.5">Across Vadodara</span>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">10 Years</span>
              <span className="text-[11px] uppercase tracking-wider text-[#8E8E98] mt-0.5">PPF Film Warranty</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">4.9★</span>
                <span className="text-xs text-[#E31E25] font-semibold">Google</span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#8E8E98] mt-0.5">500+ Verified Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07080A] to-transparent pointer-events-none" />
    </section>
  );
};
