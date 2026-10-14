import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ShieldCheck, ArrowRight, Lock, Sparkles } from 'lucide-react';
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
    { label: 'Transformations', href: '#gallery' },
    { label: '3D Bay POV', href: '#car-pov' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'PPF Armor', href: '#ppf' },
    { label: 'Ceramic 9H', href: '#ceramic' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Studio', href: '#location' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080A]/95 backdrop-blur-xl border-b border-[#C5A059]/25 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-[#07080A]/90 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#0A0C10] border-b border-white/5 py-1.5 px-6 text-[11px] text-[#8E8E98]">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#DEC07E] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Automotive Detailing & Surface Preservation Studio: Vadodara, Gujarat
            </span>
            <span className="text-[#55555E]">•</span>
            <span>Cleanroom Climate Bay & High-CRI LED Tunnel</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            <span className="text-[#55555E]">•</span>
            <a
              href="tel:+919825014820"
              onClick={() => trackEvent('phone_click', 'Top Bar Phone')}
              className="text-[#F5F5F7] hover:text-[#C5A059] font-medium transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              +91 98250 14820
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 border border-[#C5A059]/60 flex items-center justify-center bg-[#101217] group-hover:border-[#DEC07E] transition-all duration-300 shadow-sm">
              <span className="font-cinzel text-xl font-bold text-[#DEC07E] group-hover:scale-105 transition-transform">
                D
              </span>
            </div>
            <div>
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-[#F5F5F7] block leading-none">
                D GLOSSY DEN
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#C5A059] block mt-1 font-semibold">
                Vadodara Detailing Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-[0.14em] font-medium text-[#B5B5BE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-[#DEC07E] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Growth Strategy Playbook Button */}
            {onOpenGrowthStrategy && (
              <button
                onClick={onOpenGrowthStrategy}
                title="Marketing Growth Playbook & 30-Day Calendar"
                className="h-9 px-3 inline-flex items-center justify-center gap-1.5 bg-[#12141A] hover:bg-[#1A1E29] text-[#DEC07E] border border-[#C5A059]/30 text-[10px] uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span className="hidden 2xl:inline">Growth</span> Playbook
              </button>
            )}

            {/* Admin Lead Portal Button */}
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                title="Staff Lead Management Portal"
                className="h-9 px-2.5 inline-flex items-center justify-center gap-1.5 bg-[#12141A] hover:bg-[#1A1E29] text-[#A0A0A9] hover:text-white border border-white/10 text-[10px] uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
              >
                <Lock className="w-3 h-3 text-[#C5A059]" />
                <span className="hidden 2xl:inline">Staff</span> CRM
              </button>
            )}

            {/* WhatsApp Quick Quote */}
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%20Vadodara%2C%20I%20would%20like%20a%20quote%20for%20my%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', 'Navbar WhatsApp')}
              className="h-10 px-3.5 inline-flex items-center justify-center gap-1.5 bg-[#101217] hover:bg-[#161922] text-[#F5F5F7] border border-[#C5A059]/35 hover:border-[#C5A059] text-[11px] uppercase tracking-wider font-semibold rounded-[2px] transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </motion.a>

            {/* Book Inspection CTA */}
            <motion.button
              whileHover={{ y: -1, boxShadow: '0 4px 20px rgba(197, 160, 89, 0.25)' }}
              whileTap={{ y: 0 }}
              onClick={() => {
                trackEvent('cta_click', 'Navbar Book Inspection');
                onOpenBooking();
              }}
              className="h-10 px-4 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#D8B46C] via-[#C5A059] to-[#B38D46] hover:from-[#E5C37E] hover:to-[#C5A059] text-[#08090B] border border-[#DEC07E] text-[11px] uppercase tracking-wider font-bold rounded-[2px] transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Book Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#DEC07E] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#0A0C10] border-b border-[#C5A059]/30 px-6 py-6 space-y-5"
          >
            <nav className="flex flex-col space-y-3.5 text-xs uppercase tracking-wider text-[#C5C5CD]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DEC07E] py-1 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-luxury-primary text-xs w-full py-3"
              >
                Request Inspection & Quote
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {onOpenGrowthStrategy && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenGrowthStrategy();
                    }}
                    className="p-2.5 bg-[#12141A] border border-[#C5A059]/40 text-[#DEC07E] text-[11px] font-semibold text-center"
                  >
                    Growth Playbook
                  </button>
                )}

                {onOpenAdmin && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAdmin();
                    }}
                    className="p-2.5 bg-[#12141A] border border-white/10 text-[#A0A0A9] text-[11px] font-semibold text-center"
                  >
                    Staff Leads
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
