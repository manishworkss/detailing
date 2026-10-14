import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsConditionsModal: React.FC<TermsConditionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#101217] border border-[#C5A059]/40 overflow-y-auto p-6 sm:p-10 text-[#C5C5CD] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Terms & Service Conditions
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
              1. Vehicle Intake & Condition Logging
            </h3>
            <p>
              Prior to initiating any service, our master technicians perform a digital paint inspection and photographic inventory. Existing stone chips, bodywork dents, repainted panels, clear coat failure, and interior tears are logged with the owner. We reserve the right to advise adjustments or decline treatment on structurally compromised paintwork.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              2. Paint Protection Film (PPF) Curing Protocol
            </h3>
            <p>
              Newly installed Paint Protection Film requires up to 14 days to fully cure and evacuate moisture blisters depending on ambient temperatures. Clients must refrain from pressure washing or aggressive wiping for a minimum of 7 calendar days post delivery.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              3. Ceramic Coating Maintenance & Warranty Support
            </h3>
            <p>
              Our 9H Ceramic and Nano-Graphene Coating warranties cover chemical stain defense, premature oxidation, and loss of hydrophobic gloss under standard driving conditions. Maintenance must follow pH-neutral washing standards. An annual decontamination inspection at our Vadodara studio is recommended to maintain optimal hydrophobic performance.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              4. Payment & Delivery Walkaround
            </h3>
            <p>
              Full payment is due upon successful completion of the service and after the joint vehicle delivery walkaround under our studio inspection lighting tunnel.
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
