import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle2, Clock, MapPin, Users, Award, Coffee, Eye } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vadodara’s Leading Car Care Network</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Elevating Automotive Detailing <br />
              <span className="red-gradient-text">Across 4 Vadodara Studios</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              Founded with an uncompromising passion for pristine vehicles, <strong className="text-white">Akshar Car Spa (ACS)</strong> has grown to become Vadodara's premier automotive surface preservation studio. With locations across <strong className="text-white">Karelibagh, Akota, and Manjalpur</strong>, we combine dust-free climate bays with master craftsmanship to deliver results that go far beyond surface shine.
            </p>

            {/* Core Operational Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#0D0F15] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Clock className="w-4 h-4 text-[#E31E25]" />
                  <span>Zero-Queue Appointments</span>
                </div>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  We operate on a strict appointment-based system. Arrive at your scheduled time and our technicians begin work immediately—no waiting in queues.
                </p>
              </div>

              <div className="p-4 bg-[#0D0F15] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Coffee className="w-4 h-4 text-[#E31E25]" />
                  <span>Customer Waiting Lounge</span>
                </div>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  Relax in our air-conditioned lounge with complimentary Wi-Fi and refreshments while watching your vehicle receive meticulous care.
                </p>
              </div>

              <div className="p-4 bg-[#0D0F15] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Eye className="w-4 h-4 text-[#E31E25]" />
                  <span>Independent Quality Audit</span>
                </div>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  Every wash, coating, and PPF installation is thoroughly audited by a dedicated quality inspector before the vehicle is handed over.
                </p>
              </div>

              <div className="p-4 bg-[#0D0F15] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Award className="w-4 h-4 text-[#E31E25]" />
                  <span>Up to 10-Year Warranty</span>
                </div>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  Genuine manufacturer warranty cards and digital service records issued for all premium PPF and ceramic installations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-white/10 shadow-2xl bg-[#0F1117]">
              <img
                src="/studio-bay-vadodara.jpg"
                alt="Akshar Car Spa detailing bay and customer lounge in Vadodara"
                className="w-full h-full object-cover brightness-85 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />

              {/* Bottom Metrics Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-5 bg-black/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Studio Network</span>
                    <span className="text-lg font-bold text-white">4 Vadodara Locations</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Client Satisfaction</span>
                    <span className="text-lg font-bold text-[#FF3B44]">4.9★ (500+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
