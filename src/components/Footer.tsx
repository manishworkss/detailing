import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Lock } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdmin
}) => {
  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 pb-12 text-[#8E8E98] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 px-2.5 py-1 bg-white rounded-[2px] border border-[#E31E25]/50 flex items-center justify-center shadow-md">
                <img
                  src="/acs-logo-full.webp"
                  alt="Akshar Car Spa"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-xs text-[#9E9EA7] leading-relaxed">
              Akshar Car Spa (ACS) is Vadodara’s premier automotive surface preservation and detailing network. Delivering certified self-healing Paint Protection Film (PPF), 9H nano ceramic shields, concours skin restoration, and bespoke wrapping across 4 studios.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:+917778857187"
                className="hover:text-white transition-colors flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#E31E25]" />
                +91 77788 57187
              </a>
              <span className="text-[#353740]">•</span>
              <a
                href="mailto:aksharcarspa04@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#E31E25]" />
                aksharcarspa04@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Treatments
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#FF3B44] transition-colors">Our Services</a></li>
              <li><a href="#ppf" className="hover:text-[#FF3B44] transition-colors">ACS PPF Armor</a></li>
              <li><a href="#ceramic" className="hover:text-[#FF3B44] transition-colors">Nano Ceramic 9H</a></li>
              <li><a href="#gallery" className="hover:text-[#FF3B44] transition-colors">Transformations</a></li>
              <li><a href="#packages" className="hover:text-[#FF3B44] transition-colors">Pricing Packages</a></li>
              <li><a href="#faq" className="hover:text-[#FF3B44] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* 4 Vadodara Studios */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              4 Studios in Vadodara, Gujarat
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
              <div className="p-2.5 bg-[#0A0C10] border border-white/5 space-y-1">
                <span className="font-bold text-white block">📍 Karelibagh (Head Office)</span>
                <p className="text-[#8E8E98] leading-tight">
                  A-8, VIP Rd, opp. The Bright School, Amit Nagar, Karelibagh, Vadodara 390018
                </p>
                <span className="text-[#FF3B44] font-mono block">Ph: +91 77788 57187</span>
              </div>

              <div className="p-2.5 bg-[#0A0C10] border border-white/5 space-y-1">
                <span className="font-bold text-white block">📍 Akota Branch</span>
                <p className="text-[#8E8E98] leading-tight">
                  A-18, Shrenik Park Society, opp. Jain Mandir, Akota, Vadodara 390020
                </p>
                <span className="text-[#FF3B44] font-mono block">Ph: +91 85115 10254</span>
              </div>

              <div className="p-2.5 bg-[#0A0C10] border border-white/5 space-y-1">
                <span className="font-bold text-white block">📍 Manjalpur Branch</span>
                <p className="text-[#8E8E98] leading-tight">
                  Shop 2, Samanvay Saptaarshi, Opp. Amarnath Puram, Manjalpur 390011
                </p>
                <span className="text-[#FF3B44] font-mono block">Ph: +91 85115 10254</span>
              </div>

              <div className="p-2.5 bg-[#0A0C10] border border-white/5 space-y-1">
                <span className="font-bold text-white block">📍 New Manjalpur (Vadsar)</span>
                <p className="text-[#8E8E98] leading-tight">
                  16, Subh Enclave, Opp. Royal Green, Vadsar – Vishwamitri Rd 390010
                </p>
                <span className="text-[#FF3B44] font-mono block">Ph: +91 85115 10254</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#737380]">
          <div>
            &copy; {new Date().getFullYear()} Akshar Car Spa (ACS). All rights reserved. Registered trademark in India.
          </div>

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
              Terms &amp; Warranty
            </button>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-[#E31E25]" />
                <span>Staff Portal</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
