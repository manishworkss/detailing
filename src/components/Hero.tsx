import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, ArrowUpRight, MessageSquare, Gauge, Check } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#07080A] overflow-hidden">
      {/* Background Studio Visual with Precision Gradient Vignette */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-supercar.jpg"
          alt="Luxury Supercar inside D Glossy Den Studio Vadodara"
          fetchPriority="high"
          className="w-full h-full object-cover object-center brightness-60"
        />
        {/* Dark luxury vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/50" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authoritative Copy */}
          <div className="lg:col-span-7">
            {/* Studio Accreditation Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#12141A]/90 border border-[#C5A059]/40 mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DEC07E]">
                Automotive Detailing Studio: Vadodara, Gujarat
              </span>
            </motion.div>

            {/* Headline: Precise, Authoritative, Zero Vague Fluff */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-[1.15]"
            >
              D Glossy Den <span className="gold-gradient-text block text-2xl sm:text-4xl lg:text-5xl font-semibold mt-2">Certified PPF & 9H Ceramic Studio</span>
            </motion.h1>

            {/* Subtitle: High-Technical Detailing Value */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#B5B5BE] font-normal leading-relaxed max-w-2xl"
            >
              Engineered paint restoration, self-healing optical TPU film, and 9H nanocoatings for luxury automobiles in Vadodara. Applied inside our dust-controlled cleanroom bay with computer-cut templates.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(197, 160, 89, 0.3)' }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  trackEvent('cta_click', 'Hero Request Vehicle Estimate');
                  onOpenBooking();
                }}
                className="btn-luxury-primary cursor-pointer text-center w-full sm:w-auto"
              >
                Request Free Quote
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%20Vadodara%2C%20I%20would%20like%20a%20quote%20for%20my%20vehicle"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', 'Hero WhatsApp Quick Quote')}
                className="btn-luxury-secondary text-center w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp Consultation
              </motion.a>
            </motion.div>

            {/* Interactive Jump Links */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="#gallery"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12141A]/90 border border-[#C5A059]/30 text-[11px] font-semibold text-[#DEC07E] hover:border-[#C5A059] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>See Real Before & After Results ↓</span>
              </a>

              <a
                href="#car-pov"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12141A]/90 border border-white/10 text-[11px] font-semibold text-[#B5B5BE] hover:text-white hover:border-[#C5A059] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>3D Bay Cockpit POV & Beading Simulator ↓</span>
              </a>
            </div>

            {/* Technical Verification Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
            >
              <div className="p-2.5 sm:p-3 bg-[#101217]/80 border border-white/5 rounded">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C5A059] mb-1">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold truncate">200 Micron</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#9E9EA7] leading-tight">Self-Healing TPU</p>
              </div>
              <div className="p-2.5 sm:p-3 bg-[#101217]/80 border border-white/5 rounded">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C5A059] mb-1">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold truncate">9H Hardness</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#9E9EA7] leading-tight">Quartz Matrix</p>
              </div>
              <div className="p-2.5 sm:p-3 bg-[#101217]/80 border border-white/5 rounded">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C5A059] mb-1">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold truncate">Cleanroom</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#9E9EA7] leading-tight">Vadodara Bay</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Studio Specification Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="luxury-card p-7 border border-[#C5A059]/40 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-bold text-white">
                    Studio Intake Standards
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C5A059]">VADODARA / GJ06</span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Ultrasonic Paint Depth Profiling
                    </h3>
                    <p className="text-xs text-[#9E9EA7] mt-0.5">
                      Clear coat mapped across 24 panel checkpoints before polishing begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Laser Plotted Pattern Cutting
                    </h3>
                    <p className="text-xs text-[#9E9EA7] mt-0.5">
                      Pre-cut software designs with deep wrapped edges. Zero razor blades on original paint.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Short-Wave IR Heat Curing
                    </h3>
                    <p className="text-xs text-[#9E9EA7] mt-0.5">
                      Infrared baking ensures molecular quartz hardness before handover.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A7A85] block">Location</span>
                  <span className="text-xs font-bold text-white">Vadodara, Gujarat</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A7A85] block">Inspection Slot</span>
                  <span className="text-xs font-bold text-[#DEC07E]">Complimentary</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
