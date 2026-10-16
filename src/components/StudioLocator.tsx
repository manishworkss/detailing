import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface StudioBranch {
  id: string;
  name: string;
  badge: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
  embedQuery: string;
  hours: string;
  features: string[];
}

const BRANCHES: StudioBranch[] = [
  {
    id: 'karelibagh',
    name: 'Karelibagh (Head Office)',
    badge: 'Flagship Studio',
    address: 'Aashish Park Society, A-8, VIP Rd, opposite The Bright School, Amit Nagar, Jay Santhoshi Nagar, Karelibagh, Vadodara, Gujarat 390018',
    phone: '7778857187',
    email: 'aksharcarspa04@gmail.com',
    mapLink: 'https://maps.app.goo.gl/1LebAeTbuKiXCMzs5',
    embedQuery: 'Akshar+Car+Spa+Karelibagh+Vadodara',
    hours: 'Mon - Sun: 9:00 AM - 8:00 PM',
    features: ['Cleanroom PPF Bay', 'Customer Waiting Lounge', 'Multi-Stage Paint Correction Bay', 'Head Office Quality Control']
  },
  {
    id: 'akota',
    name: 'Akota Branch',
    badge: 'Central Vadodara',
    address: 'A-18, Shrenik Park Society, opp. Jain Mandir, Akota, Vadodara, Gujarat 390020',
    phone: '8511510254',
    email: 'aksharcarspa04@gmail.com',
    mapLink: 'https://goo.gl/maps/TYtxghgAZuKrZ5V36',
    embedQuery: 'Akshar+Car+Spa+Akota+Vadodara',
    hours: 'Mon - Sun: 9:00 AM - 8:00 PM',
    features: ['Ceramic Coating Bay', 'Touchless Wash Spa', 'Fast-Track Appointments', 'Customer Lounge']
  },
  {
    id: 'manjalpur',
    name: 'Manjalpur Branch',
    badge: 'South Vadodara',
    address: 'Shop No: 2, Samanvay Saptaarshi, Old More Mega Store Campus, Opp. Amarnath Puram Society, Manjalpur, Vadodara, Gujarat 390011',
    phone: '8511510254',
    email: 'aksharcarspa04@gmail.com',
    mapLink: 'https://goo.gl/maps/Z7rQLhvrysPUhE3a9',
    embedQuery: 'Akshar+Car+Spa+Manjalpur+Vadodara',
    hours: 'Mon - Sun: 9:00 AM - 8:00 PM',
    features: ['PPF & Vinyl Wrapping', 'Underbody Chassis Flush', 'Interior Steam Sanitization', 'Customer Lounge']
  },
  {
    id: 'new-manjalpur',
    name: 'New Manjalpur (Vadsar)',
    badge: 'Vadsar Corridor',
    address: '16, Subh Enclave, Opp. Royal Green Bungalows, Vadsar – Vishwamitri Rd, Vadodara, Gujarat 390010',
    phone: '8511510254',
    email: 'aksharcarspa04@gmail.com',
    mapLink: 'https://goo.gl/maps/PmFkbsyYviQXqSmcA',
    embedQuery: 'Akshar+Car+Spa+New+Manjalpur+Vadodara',
    hours: 'Mon - Sun: 9:00 AM - 8:00 PM',
    features: ['Automated Foam Spa', 'High-Pressure De-Ironization', 'Surface Inspection Tunnel', 'Express Detailing']
  }
];

export const StudioLocator: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<StudioBranch>(BRANCHES[0]);

  return (
    <section id="location" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>4 Studio Locations Across Vadodara</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Visit Akshar Car Spa
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Select your nearest studio branch below to get direct Google Maps GPS directions, phone lines, and appointment access.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {BRANCHES.map((branch) => (
            <button
              key={branch.id}
              onClick={() => {
                setActiveBranch(branch);
                trackEvent('cta_click', `Branch Select: ${branch.name}`);
              }}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all cursor-pointer border ${
                activeBranch.id === branch.id
                  ? 'bg-[#E31E25] text-white border-[#FF3B44] shadow-lg shadow-[#E31E25]/20'
                  : 'bg-[#0E1015] text-[#8E919C] border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              📍 {branch.name.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Selected Branch Detail Card & Map */}
        <div className="luxury-card p-6 sm:p-8 rounded-none border border-[#E31E25]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#E31E25] inline-block mb-2">
                  {activeBranch.badge}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  {activeBranch.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-[#C4C4CD]">
                <MapPin className="w-5 h-5 text-[#E31E25] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{activeBranch.address}</p>
              </div>

              {/* Contact info */}
              <div className="space-y-3 pt-3 border-t border-white/10 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E31E25]" />
                  <a
                    href={`tel:+91${activeBranch.phone}`}
                    className="text-white hover:text-[#FF3B44] transition-colors font-medium font-mono"
                  >
                    +91 {activeBranch.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#E31E25]" />
                  <a
                    href={`mailto:${activeBranch.email}`}
                    className="text-[#C4C4CD] hover:text-white transition-colors"
                  >
                    {activeBranch.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E31E25]" />
                  <span className="text-[#8E8E98]">{activeBranch.hours}</span>
                </div>
              </div>

              {/* Features */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8E8E98] block mb-2">
                  Studio Facilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBranch.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#C4C4CD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E25]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct GPS Button */}
              <div className="pt-4">
                <a
                  href={activeBranch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_click', `Directions: ${activeBranch.name}`)}
                  className="btn-luxury-primary w-full text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Live Google Maps GPS Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-6 h-80 lg:h-full min-h-[340px] bg-[#0E1015] border border-white/10 overflow-hidden relative">
              <iframe
                title={`Google Map for ${activeBranch.name}`}
                src={`https://maps.google.com/maps?q=${activeBranch.embedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter contrast-[1.1] brightness-[0.85] invert-[0.9] hue-rotate-[180deg]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
