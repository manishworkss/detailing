import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Calendar,
  Camera,
  Sparkles,
  CheckCircle2,
  Car
} from 'lucide-react';
import { trackEvent } from '../services/leadService';

interface ChatbotWidgetProps {
  onOpenBooking?: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('Luxury SUV / Sedan');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = message.trim() || `Inquiry for ${selectedVehicle} detailing package`;
    const encoded = encodeURIComponent(
      `Hello D Glossy Den Vadodara! I am reaching out via your website concierge.\n\nVehicle: ${selectedVehicle}\nMessage: ${query}`
    );
    trackEvent('whatsapp_click', 'Chatbot Custom Message Submit', selectedVehicle);
    window.open(`https://wa.me/919825014820?text=${encoded}`, '_blank');
    setMessage('');
  };

  const handleQuickAction = (actionText: string) => {
    const encoded = encodeURIComponent(
      `Hello D Glossy Den Vadodara!\nVehicle Category: ${selectedVehicle}\nRequest: ${actionText}`
    );
    trackEvent('whatsapp_click', `Chatbot Quick Action: ${actionText}`, selectedVehicle);
    window.open(`https://wa.me/919825014820?text=${encoded}`, '_blank');
  };

  return (
    <aside aria-label="Studio Concierge Chatbot" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {/* Expandable Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-96 max-w-[390px] bg-[#0E1015] border border-[#C5A059]/40 shadow-2xl backdrop-blur-2xl overflow-hidden rounded-lg flex flex-col"
            style={{ maxHeight: '82vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#141720] via-[#161A24] to-[#141720] p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DEC07E] to-[#8F7239] flex items-center justify-center p-0.5 shadow-md">
                    <div className="w-full h-full rounded-full bg-[#0E1015] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#DEC07E]" />
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-[#0E1015]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-semibold text-white tracking-wide">Studio Concierge</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DEC07E]" />
                  </div>
                  <p className="text-[11px] text-[#A0A0A9] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online • Vadodara Studio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9E9EA7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Concierge Chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3.5 overflow-y-auto max-h-[50vh] text-xs">
              {/* Concierge Welcome Bubble */}
              <div className="bg-[#161922] border border-white/5 p-3.5 rounded-lg rounded-tl-none shadow-sm space-y-2">
                <p className="text-[#E2E2E8] leading-relaxed">
                  Welcome to <strong className="text-[#DEC07E]">D Glossy Den Vadodara</strong>. Our certified detailing technicians are ready to evaluate, protect, or quote your vehicle.
                </p>
                <p className="text-[#9E9EA7] text-[11px]">
                  Select your vehicle segment for instant pricing & bay availability:
                </p>
              </div>

              {/* Segment Selector Chips */}
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  'Sedan / Hatchback',
                  'Compact / Mid SUV',
                  'Full-Size SUV',
                  'Luxury / Supercar'
                ].map((vehicle) => (
                  <button
                    key={vehicle}
                    type="button"
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={`px-2.5 py-1.5 rounded text-[11px] font-medium transition-all text-left flex items-center gap-1.5 cursor-pointer border ${
                      selectedVehicle === vehicle
                        ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#DEC07E]'
                        : 'bg-[#12141A] border-white/5 text-[#9E9EA7] hover:border-white/20'
                    }`}
                  >
                    <Car className="w-3 h-3 shrink-0" />
                    <span className="truncate">{vehicle}</span>
                  </button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleQuickAction('Instant WhatsApp Price Estimate')}
                  className="w-full py-2.5 px-3 bg-[#132A1D] hover:bg-[#183625] border border-[#25D366]/40 text-[#25D366] hover:text-white rounded flex items-center justify-between text-xs font-semibold transition-all cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    Instant Quote via WhatsApp
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-[#25D366]/20 px-1.5 py-0.5 rounded text-[#25D366]">
                    Fastest
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickAction('Send Car Photos for Inspection')}
                  className="w-full py-2.5 px-3 bg-[#161822] hover:bg-[#1F2230] border border-white/10 text-[#DEC07E] rounded flex items-center gap-2 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-[#C5A059]" />
                  <span>Send Photos for Swirl / Paint Inspection</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919825014820"
                    onClick={() => trackEvent('phone_click', 'Chatbot Call Button')}
                    className="py-2 px-2.5 bg-[#12141A] hover:bg-[#1A1D24] border border-white/10 text-[#F5F5F7] rounded flex items-center justify-center gap-1.5 text-xs font-medium transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Call Studio</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      if (onOpenBooking) onOpenBooking();
                      else {
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="py-2 px-2.5 bg-[#12141A] hover:bg-[#1A1D24] border border-white/10 text-[#F5F5F7] rounded flex items-center justify-center gap-1.5 text-xs font-medium transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Book Bay Slot</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#12141A] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your vehicle model or query..."
                className="flex-1 bg-[#090A0D] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-[#64646D] focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded bg-[#C5A059] hover:bg-[#DEC07E] text-black flex items-center justify-center transition-all cursor-pointer shadow-md shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Trigger Icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center"
      >
        {/* Subtle Tooltip on Desktop when closed */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center mr-3 py-1.5 px-3 rounded-full bg-[#101217]/95 border border-[#C5A059]/40 shadow-xl backdrop-blur-md pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse mr-2" />
            <span className="text-[11px] font-semibold text-[#F5F5F7] whitespace-nowrap">
              Need Instant Quote? Chat with Concierge
            </span>
          </motion.div>
        )}

        <button
          onClick={() => {
            const next = !isOpen;
            setIsOpen(next);
            if (next) trackEvent('cta_click', 'Open Chatbot Concierge');
          }}
          className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-[#C5A059] text-black ring-4 ring-[#C5A059]/20'
              : 'bg-[#12151D] text-[#F5F5F7] border border-[#C5A059]/50 hover:border-[#C5A059] hover:shadow-[0_0_25px_rgba(197,160,89,0.35)]'
          }`}
          aria-label={isOpen ? 'Close Concierge Chat' : 'Open Concierge Chatbot'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <>
              {/* Pulse Ring */}
              <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
              
              <div className="relative flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#25D366]" />
                <Sparkles className="w-3 h-3 text-[#DEC07E] absolute -top-1.5 -right-1.5" />
              </div>

              {/* Online Green Indicator Dot */}
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#12151D]" />
            </>
          )}
        </button>
      </motion.div>
    </aside>
  );
};
