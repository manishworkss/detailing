import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A0C10]/95 backdrop-blur-xl border-t border-[#C5A059]/30 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call */}
        <a
          href="tel:+919825014820"
          onClick={() => trackEvent('phone_click', 'Mobile Action Bar Call')}
          className="h-11 flex flex-col items-center justify-center bg-[#12151D] border border-white/10 hover:border-[#C5A059] rounded-[2px] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#DEC07E]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white mt-0.5">
            Call Studio
          </span>
        </a>

        {/* WhatsApp Consultation */}
        <a
          href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%20Vadodara%2C%20I%20would%20like%20a%20quote%20for%20my%20car."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', 'Mobile Action Bar WhatsApp')}
          className="h-11 flex flex-col items-center justify-center bg-[#102015] border border-[#25D366]/40 hover:border-[#25D366] rounded-[2px] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#25D366] mt-0.5">
            WhatsApp
          </span>
        </a>

        {/* Book Inspection CTA */}
        <button
          onClick={() => {
            trackEvent('cta_click', 'Mobile Action Bar Book Inspection');
            onOpenBooking();
          }}
          className="h-11 flex flex-col items-center justify-center bg-gradient-to-r from-[#D8B46C] via-[#C5A059] to-[#B38D46] rounded-[2px] cursor-pointer shadow-md"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span className="text-[10px] font-black uppercase tracking-wider text-black mt-0.5">
            Get Quote
          </span>
        </button>
      </div>
    </div>
  );
};
