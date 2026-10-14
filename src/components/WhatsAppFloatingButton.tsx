import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackEvent } from '../services/leadService';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <a
        href="https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%20Vadodara%2C%20I%20would%20like%20an%20instant%20quote%20for%20my%20vehicle"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', 'Floating WhatsApp Quote Button')}
        className="flex items-center gap-2.5 bg-[#12141A] hover:bg-[#1A1D24] text-white px-4 py-3 border border-[#25D366]/40 shadow-2xl transition-all duration-300 group rounded-[2px]"
        aria-label="Direct WhatsApp Consultation"
      >
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#25D366]" />
        <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F7]">
          WhatsApp Quote
        </span>
      </a>
    </aside>
  );
};
