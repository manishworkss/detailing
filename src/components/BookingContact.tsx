import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, Shield, AlertCircle, Loader2, Calendar } from 'lucide-react';
import { saveLead, trackEvent } from '../services/leadService';
import { Lead } from '../types';

interface BookingContactProps {
  preselectedService?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    service: 'Paint Protection Film (PPF)',
    preferredDate: '',
    vadodaraArea: 'Gotri / Alkapuri',
    notes: '',
    consent: true,
    honeypot: '' // Spam protection honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam Honeypot check
    if (formData.honeypot) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please check the consent box to allow us to contact you regarding your vehicle estimate.');
      return;
    }

    setIsSubmitting(true);
    trackEvent('form_start', 'Booking Form Submit Click', formData.service);

    const result = await saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      vehicleModel: formData.vehicleModel,
      service: formData.service,
      preferredDate: formData.preferredDate,
      vadodaraArea: formData.vadodaraArea,
      notes: formData.notes
    });

    setIsSubmitting(false);

    if (result.success && result.lead) {
      setSubmittedLead(result.lead);
    } else {
      setErrorMessage(result.error || 'Submission failed. Please call or WhatsApp our studio directly.');
    }
  };

  const generateWhatsAppUrl = () => {
    const leadId = submittedLead?.id || 'Direct';
    const text = `Hello D Glossy Den Vadodara!%0A%0A*Reference Lead:* ${leadId}%0A*Name:* ${encodeURIComponent(formData.name || 'Vehicle Owner')}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Vehicle:* ${encodeURIComponent(formData.vehicleModel)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Vadodara Area:* ${encodeURIComponent(formData.vadodaraArea)}%0A*Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest available')}%0A*Notes:* ${encodeURIComponent(formData.notes || 'Please provide consultation')}`;
    return `https://wa.me/919825014820?text=${text}`;
  };

  return (
    <section id="booking" className="py-24 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Complimentary Paint Intake & Quote
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Schedule Vehicle Assessment
          </h2>
          <p className="mt-4 text-sm text-[#9E9EA7] max-w-xl mx-auto">
            Provide your vehicle specifications below for a bespoke protection program. We respect your privacy and will never share your contact details.
          </p>
        </div>

        <div className="luxury-card p-6 sm:p-12 border border-[#C5A059]/30">
          {submittedLead ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 bg-[#13271A] border-2 border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto rounded-full">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Assessment Request Confirmed
              </h3>
              <p className="text-xs text-[#DEC07E] font-mono">
                Booking Reference: {submittedLead.id}
              </p>
              <p className="text-sm text-[#A0A0A9] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{submittedLead.name}</strong>. Our studio manager in Vadodara has received your inquiry for your <strong className="text-white">{submittedLead.vehicleModel}</strong>. We will review our bay schedule and contact you shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', 'Post-Submission WhatsApp Expedite')}
                  className="btn-luxury-primary text-xs w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 mr-1 text-black" />
                  Expedite on WhatsApp Now
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedLead(null);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      vehicleModel: '',
                      service: 'Paint Protection Film (PPF)',
                      preferredDate: '',
                      vadodaraArea: 'Gotri / Alkapuri',
                      notes: '',
                      consent: true,
                      honeypot: ''
                    });
                  }}
                  className="text-xs text-[#9E9EA7] hover:text-white underline cursor-pointer"
                >
                  Submit Another Vehicle
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Honeypot Field */}
              <input
                type="text"
                name="company_fax"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Message Alert */}
              {errorMessage && (
                <div className="p-4 bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Full Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hardik Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    WhatsApp / Mobile Number <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98250 14820"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              {/* Vehicle Model & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Vehicle Year, Make & Model <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024 Toyota Fortuner / BMW 330Li"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Desired Treatment Program <span className="text-[#C5A059]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                  >
                    <option value="Paint Protection Film (PPF)">Self-Healing Paint Protection Film (PPF)</option>
                    <option value="9H Multi-Layer Ceramic Coating">9H Multi-Layer Ceramic Coating</option>
                    <option value="Nano Graphene Coating">Nano Graphene Surface Matrix</option>
                    <option value="Concours Paint Correction">Concours Multi-Stage Paint Correction</option>
                    <option value="Full Comprehensive Studio Package">Full Studio Package (PPF + Ceramic + Interior)</option>
                    <option value="Interior Leather & Cabin Preservation">Interior Leather & Cabin Preservation</option>
                  </select>
                </div>
              </div>

              {/* Vadodara Neighborhood Area & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Vadodara Location / Area
                  </label>
                  <select
                    value={formData.vadodaraArea}
                    onChange={(e) => setFormData({ ...formData, vadodaraArea: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                  >
                    <option value="Gotri / Alkapuri">Gotri / Alkapuri</option>
                    <option value="Vasna-Bhayli Road">Vasna-Bhayli Road</option>
                    <option value="Sevasi / Khanpur">Sevasi / Khanpur</option>
                    <option value="Akota / Old Padra Road">Akota / Old Padra Road</option>
                    <option value="Manjalpur / Makarpura">Manjalpur / Makarpura</option>
                    <option value="Fatehgunj / Sama">Fatehgunj / Sama</option>
                    <option value="Karelibaug / Harni">Karelibaug / Harni</option>
                    <option value="Waghodia Road / Kalali">Waghodia Road / Kalali</option>
                    <option value="Other Area in Gujarat">Other Area in Gujarat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Preferred Inspection Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                  Vehicle Paint Condition or Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention delivery date, known swirl marks, existing coating, or highway protection priorities."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#08090B] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#C5A059] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="consentCheckbox" className="text-xs text-[#8E919C] cursor-pointer">
                  I agree to receive a tailored estimate and pre-service inspection schedule via WhatsApp or phone from D Glossy Den Vadodara.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury-primary w-full sm:w-auto text-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Verifying Bay Slot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Assessment Request</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-[#7A7A85]">
                  <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Complimentary Paint Depth Inspection Included</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
