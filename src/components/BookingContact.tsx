import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldAlert, Sparkles, Phone, MessageSquare, MapPin, Calendar, Clock, Car } from 'lucide-react';
import { saveLead, trackEvent, validatePhone } from '../services/leadService';

interface BookingContactProps {
  preselectedService?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    service: preselectedService || 'ACS Paint Protection Film (PPF)',
    branch: 'Karelibagh (Head Office)',
    preferredDate: '',
    notes: '',
    honeypot: '' // Spam prevention
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const branches = [
    'Karelibagh (Head Office)',
    'Akota Branch',
    'Manjalpur Branch',
    'New Manjalpur (Vadsar) Branch'
  ];

  const services = [
    'ACS Paint Protection Film (PPF)',
    'Nano Ceramic & Silane Pro Coating',
    'Skin Restoration & Multi-Stage Paint Leveling',
    'Interior Rejuvenation & Leather Spa',
    'Multicolor Car Wrapping & Custom Styling',
    'Complete Maintenance Wash Spa',
    'Windshield & Glass Hydrophobic Coating',
    'Alloy Wheel & Engine Bay Coating'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid 10-digit Indian mobile number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'Vehicle make and model is required (e.g., Fortuner, BMW 3 Series, Thar).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silent reject for bot submission via hidden honeypot
    if (formData.honeypot) {
      console.warn('Bot detected and neutralized.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent('form_submit', 'Booking Form Akshar Car Spa', formData.service);

    try {
      // 1. Persist lead in local CRM storage
      saveLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        vehicleModel: formData.vehicleModel,
        service: formData.service,
        vadodaraArea: formData.branch,
        preferredDate: formData.preferredDate,
        notes: formData.notes
      });

      // 2. Format WhatsApp Dispatch
      const message = `Hello Akshar Car Spa,%0A%0A*New Studio Appointment Request:*%0A👤 *Name:* ${encodeURIComponent(formData.name)}%0A📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A🚘 *Vehicle:* ${encodeURIComponent(formData.vehicleModel)}%0A🛠️ *Service:* ${encodeURIComponent(formData.service)}%0A📍 *Preferred Branch:* ${encodeURIComponent(formData.branch)}%0A📅 *Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest Slot')}%0A💬 *Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Open WhatsApp to ensure immediate real-world response from studio managers
      window.open(`https://wa.me/918511510254?text=${message}`, '_blank');
    } catch (err) {
      console.error('Lead submission error:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Wait Booking Concierge</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Reserve Your <br />
              <span className="red-gradient-text">Studio Appointment</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              We operate exclusively on an appointment schedule across our 4 Vadodara studios. Your scheduled arrival ensures an open bay, dedicated certified technicians, and access to our private customer lounge.
            </p>

            <div className="p-4 bg-[#0E1015] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white font-medium">
                <Phone className="w-4 h-4 text-[#E31E25]" />
                <span>Immediate Assistance: <a href="tel:+917778857187" className="text-[#FF3B44] hover:underline font-mono">+91 77788 57187</a></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white font-medium">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Desk: <a href="https://wa.me/918511510254" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-mono">+91 85115 10254</a></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9E9EA7]">
                <Clock className="w-4 h-4 text-[#E31E25]" />
                <span>Studio Hours: 9:00 AM &ndash; 8:00 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-6 sm:p-10 rounded-none border border-[#E31E25]/30">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#E31E25]/10 border border-[#E31E25] rounded-full flex items-center justify-center mx-auto text-[#FF3B44]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Appointment Request Received
                  </h3>
                  <p className="text-sm text-[#9E9EA7] max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been routed to the studio manager at <strong className="text-white">{formData.branch}</strong>. We have opened WhatsApp to confirm your vehicle check-in time.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-luxury-secondary text-xs mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Rajesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Mobile Phone (10-Digit) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g., 98250 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Vehicle Make / Model */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Vehicle Make &amp; Model *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Toyota Fortuner / BMW X5 / Thar"
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      />
                      {errors.vehicleModel && <p className="text-[11px] text-red-400 mt-1">{errors.vehicleModel}</p>}
                    </div>

                    {/* Branch Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Preferred Studio Branch *
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      >
                        {branches.map((b) => (
                          <option key={b} value={b} className="bg-[#0A0C10] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Desired Service Treatment *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0A0C10] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                      />
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C4C4CD] mb-1">
                      Specific Notes or Paint Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., Heavy swirls on bonnet, highway stone chips, borewell water spots..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0A0C10] border border-white/10 text-white text-xs rounded-[2px] focus:outline-none focus:border-[#E31E25]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-primary w-full py-4 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Routing to Studio...' : 'Confirm Appointment via WhatsApp & Studio Desk'}</span>
                    </button>
                    <p className="text-[10px] text-[#737380] text-center mt-2">
                      🔒 No spam. Your phone number is strictly used for appointment scheduling by Akshar Car Spa staff.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
