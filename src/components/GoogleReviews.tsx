import React from 'react';
import { Star, CheckCircle, ExternalLink, ShieldCheck, HeartHandshake, Camera } from 'lucide-react';
import { trackEvent } from '../services/leadService';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Verification Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
              Trust & Transparency
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
              Our Customer Delivery Standard
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA7] max-w-xl">
              At D Glossy Den, we believe reputation is earned through microscopic craftsmanship. We never hand over a vehicle until the owner inspects it with us under our Scangrip lighting tunnel.
            </p>
          </div>

          {/* Rating / Review Action Card */}
          <div className="p-4 bg-[#12141A] border border-[#C5A059]/30 flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-white">
                100% Verified Delivery Walkaround
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <a
              href="https://maps.google.com/?q=D+Glossy+Den+Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', 'Google Maps Reviews Button')}
              className="text-xs text-[#DEC07E] hover:underline flex items-center gap-1 font-medium"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3 Pillars of Client Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="luxury-card p-8 flex flex-col justify-between border-t-2 border-t-[#C5A059]">
            <div>
              <div className="w-10 h-10 bg-[#161922] border border-[#C5A059]/40 flex items-center justify-center text-[#DEC07E] mb-5">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Daily WhatsApp Visual Progress
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                You receive high-resolution photos and video clips during clay decontamination, compounding stages, and cleanroom film wrapping so you know exactly how your vehicle is handled.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#DEC07E]">
                Zero Guesswork • Full Transparency
              </span>
            </div>
          </div>

          <div className="luxury-card p-8 flex flex-col justify-between border-t-2 border-t-[#C5A059]">
            <div>
              <div className="w-10 h-10 bg-[#161922] border border-[#C5A059]/40 flex items-center justify-center text-[#DEC07E] mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                High-CRI Delivery Handover
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                Before your car leaves our Vadodara studio, we invite you into our inspection bay. We provide an LED inspection torch so you can personally verify swirl removal across every panel.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#DEC07E]">
                Complimentary Paint Thickness Report
              </span>
            </div>
          </div>

          <div className="luxury-card p-8 flex flex-col justify-between border-t-2 border-t-[#C5A059]">
            <div>
              <div className="w-10 h-10 bg-[#161922] border border-[#C5A059]/40 flex items-center justify-center text-[#DEC07E] mb-5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Post-Cure 1st Wash Checkup
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                Within 14 days of ceramic coating or PPF installation, we invite you back for a complimentary inspection wash to examine hydrophobic sheeting and verify edge settling.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#DEC07E]">
                Written Maintenance Protocol Provided
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
