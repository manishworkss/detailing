import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ShieldCheck, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAdmin?: () => void;
  onOpenGrowthStrategy?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAdmin,
  onOpenGrowthStrategy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'ACS PPF', href: '#ppf' },
    { label: 'Ceramic 9H', href: '#ceramic' },
    { label: 'Transformations', href: '#gallery' },
    { label: 'Packages', href: '#packages' },
    { label: '4 Studios', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090B]/95 backdrop-blur-xl border-b border-[#E31E25]/30 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#0D0F15] border-b border-white/5 py-1.5 px-6 text-[11px] text-[#8E8E98]">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E31E25]" />
              Akshar Car Spa &mdash; Vadodara's Certified Detailing Network
            </span>
            <span className="text-[#454752]">•</span>
            <span className="flex items-center gap-1 text-[#A1A1AA]">
              <MapPin className="w-3 h-3 text-[#E31E25]" />
              4 Locations: Karelibagh (HO) • Akota • Manjalpur • New Manjalpur
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+917778857187"
              onClick={() => trackEvent('phone_click', 'Navbar Top Desk')}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-[#E31E25]" />
              +91 77788 57187
            </a>
            <span className="text-[#454752]">•</span>
            <span className="text-[#8E8E98]">Mon &ndash; Sun: 9:00 AM &ndash; 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Mark */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* ACS Shield Monogram */}
            <div className="w-11 h-11 rounded-[3px] bg-gradient-to-br from-[#1C1F2B] to-[#0A0C10] border border-[#E31E25]/50 flex items-center justify-center shadow-lg group-hover:border-[#E31E25] transition-all duration-300">
              <span className="font-cinzel text-sm font-extrabold tracking-widest text-[#FFFFFF] group-hover:text-[#FF3B44] transition-colors">
                ACS
              </span>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-[#F5F5F7] group-hover:text-white transition-colors flex items-center gap-1.5">
                AKSHAR <span className="text-[#E31E25]">CAR SPA</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8E8E98] font-medium -mt-0.5">
                Automotive Protection & Detailing • Vadodara
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.12em] font-medium text-[#C4C4CD] hover:text-[#FF3B44] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E31E25] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918511510254?text=Hello%20Akshar%20Car%20Spa,%20I%20am%20interested%20in%20an%20appointment%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', 'Navbar WhatsApp')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#0E1512] hover:bg-[#121E19] border border-[#25D366]/30 hover:border-[#25D366] rounded-[2px] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                trackEvent('cta_click', 'Navbar Book Appointment');
                onOpenBooking();
              }}
              className="btn-luxury-primary cursor-pointer text-xs py-2.5 px-4 shadow-lg"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => {
                trackEvent('cta_click', 'Navbar Mobile Book CTA');
                onOpenBooking();
              }}
              className="sm:hidden btn-luxury-primary text-[11px] py-1.5 px-3"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C4C4CD] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E31E25]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#0A0C11] border-b border-[#E31E25]/30 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-white/10 text-xs text-[#8E8E98]">
                <p className="font-semibold text-white mb-1">AKSHAR CAR SPA &bull; VADODARA</p>
                <p>4 Locations: Karelibagh HO • Akota • Manjalpur • New Manjalpur</p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider font-medium text-[#C4C4CD] hover:text-[#FF3B44] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+917778857187"
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#151822] border border-white/10 rounded-[2px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E31E25]" />
                  <span>Call Studio: +91 77788 57187</span>
                </a>

                <a
                  href="https://wa.me/918511510254?text=Hello%20Akshar%20Car%20Spa,%20I%20am%20interested%20in%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-wider font-semibold text-[#25D366] bg-[#0E1512] border border-[#25D366]/40 rounded-[2px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-luxury-primary w-full py-3 text-xs"
                >
                  <span>Book Studio Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
