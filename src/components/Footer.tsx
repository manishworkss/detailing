import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Lock } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenAdmin }) => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-[#9E9EA7] text-xs">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C5A059] flex items-center justify-center bg-[#101217]">
                <span className="font-cinzel text-base font-bold text-[#C5A059]">D</span>
              </div>
              <div>
                <span className="font-cinzel text-base font-bold tracking-wider text-white block leading-none">
                  D GLOSSY DEN
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#C5A059] block mt-1 font-semibold">
                  Vadodara Detailing Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8A8A93] leading-relaxed max-w-sm">
              Vadodara’s dedicated automotive studio for high-end paint restoration, certified self-healing paint protection films, and molecular ceramic coatings. Applied in a dust-controlled climate bay.
            </p>

            <div className="pt-2 text-[11px] text-[#C5A059] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Vadodara Studio Bay Standards: 200μ TPU • 9H Quartz</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-[#C5A059] transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Transformations</a></li>
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Paint Protection Film</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">Ceramic Coating</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Studio Ethos</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">FAQ</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">Studio Location</a></li>
            </ul>
          </div>

          {/* Treatment Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Specialized Programs
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Full Body Stealth PPF Wrap</a></li>
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Front High-Impact TPU Armor</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">9H Multi-Layer Ceramic Coating</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">Nano Graphene Surface Matrix</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Concours 2-Stage Paint Correction</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Interior Leather Steam Sanitation</a></li>
            </ul>
          </div>

          {/* Contact Details & Neighborhood Service Area */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Studio Desk
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <p>Near Gotri & Alkapuri Corridor, Vadodara, Gujarat 390007</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="tel:+919825014820"
                  onClick={() => trackEvent('phone_click', 'Footer Phone')}
                  className="hover:text-white transition-colors"
                >
                  +91 98250 14820
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:contact@dglossyden.in" className="hover:text-white transition-colors">
                  contact@dglossyden.in
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] block mb-1">
                Vadodara Service Areas:
              </span>
              <p className="text-[11px] text-[#7A7A85] leading-relaxed">
                Alkapuri • Gotri • Vasna-Bhayli • Sevasi • Akota • Manjalpur • Karelibaug • Sama • Fatehgunj • Waghodia Road • Kalali
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64646D]">
          <p>© {new Date().getFullYear()} D Glossy Den. All rights reserved. Registered Automotive Studio in Vadodara, Gujarat.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="hover:text-[#DEC07E] text-[#8E919C] flex items-center gap-1 cursor-pointer"
              >
                <Lock className="w-3 h-3 text-[#C5A059]" />
                <span>Staff Portal</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
