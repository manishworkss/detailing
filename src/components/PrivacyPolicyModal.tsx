import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#101217] border border-[#C5A059]/40 overflow-y-auto p-6 sm:p-10 text-[#C5C5CD] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Privacy Policy & Customer Data Protection
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9EA7] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#A0A0A9]">
          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              1. Information We Collect
            </h3>
            <p>
              D Glossy Den ("Studio", "we", "us") operates an automotive detailing facility in Vadodara, Gujarat. We collect customer contact details (name, telephone number, email address) and vehicle information (make, model, manufacturing year, paint condition reports, and pre-service inspection photographs) solely to evaluate, execute, and guarantee our automotive treatments.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              2. Vehicle Photography & Portfolio Rights
            </h3>
            <p>
              During intake and throughout the detailing process, our technicians document paint defects, film installation, and finished transformations. Studio photographs may be published on our official media channels with vehicle license plates blurred or obscured, unless explicitly instructed otherwise in writing prior to vehicle intake.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              3. Protection & Non-Disclosure of Customer Data
            </h3>
            <p>
              We never sell, rent, or trade your personal contact details to external marketing agencies or third-party aggregators. Your phone number is utilized strictly for service updates, appointment reminders, and post-service warranty or maintenance communications from D Glossy Den.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              4. Contact & Inquiries
            </h3>
            <p>
              For questions concerning your data or to request record removal, contact our studio desk at <a href="mailto:contact@dglossyden.in" className="text-[#DEC07E] underline">contact@dglossyden.in</a> or visit our studio in Vadodara, Gujarat.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-luxury-primary text-xs cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
