import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08090B]/95 backdrop-blur-xl border-t border-[#E31E25]/30 p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {/* Direct Call */}
        <a
          href="tel:+917778857187"
          onClick={() => trackEvent('phone_click', 'Mobile Action Bar')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#161822] border border-white/10 hover:border-[#E31E25] text-white text-[11px] font-semibold uppercase tracking-wider rounded-[2px] transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#E31E25]" />
          <span>Call</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href="https://wa.me/918511510254?text=Hello%20Akshar%20Car%20Spa,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', 'Mobile Action Bar')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#0E1512] border border-[#25D366]/40 text-[#25D366] text-[11px] font-semibold uppercase tracking-wider rounded-[2px] transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={() => {
            trackEvent('cta_click', 'Mobile Action Bar Book');
            onOpenBooking();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#E31E25] text-white text-[11px] font-bold uppercase tracking-wider rounded-[2px] shadow-lg shadow-[#E31E25]/30 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
