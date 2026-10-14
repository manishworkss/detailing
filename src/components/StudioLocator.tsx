import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../services/leadService';

export const StudioLocator: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#07080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
                Studio Location
              </p>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                Visit D Glossy Den in Vadodara
              </h2>
              <p className="mt-4 text-sm text-[#9E9EA7] leading-relaxed">
                Equipped with cleanroom climate bays, certified hydraulic scissor lifts, and high-CRI inspection tunnels. Advance appointments required for vehicle intake inspections.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Studio Address
                  </h3>
                  <p className="text-sm font-semibold text-white">
                    D Glossy Den Detailing Studio
                  </p>
                  <p className="text-sm text-[#9E9EA7]">
                    Near Gotri & Alkapuri Corridor, Vadodara, Gujarat 390007
                  </p>
                  <p className="text-xs text-[#DEC07E] mt-1">
                    Serving: Alkapuri • Gotri • Vasna-Bhayli • Sevasi • Akota • Manjalpur
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vadodara+Gujarat+Car+Detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('cta_click', 'Get Driving Directions')}
                    className="mt-2.5 text-xs text-[#DEC07E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open In Google Maps
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Operating Schedule
                  </h3>
                  <p className="text-sm text-[#9E9EA7]">
                    Monday - Saturday: 09:00 AM - 08:00 PM
                  </p>
                  <p className="text-xs text-[#C5A059] mt-0.5">
                    Sunday: 10:00 AM - 06:00 PM (By Prior Appointment)
                  </p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Studio Desk
                  </h3>
                  <p className="text-sm text-white font-medium">
                    <a
                      href="tel:+919825014820"
                      onClick={() => trackEvent('phone_click', 'Studio Desk Call')}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      +91 98250 14820
                    </a>
                  </p>
                  <p className="text-xs text-[#9E9EA7] mt-0.5">
                    WhatsApp Desk:{' '}
                    <a
                      href="https://wa.me/919825014820"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('whatsapp_click', 'Studio Desk WhatsApp')}
                      className="hover:text-[#25D366] text-[#25D366]"
                    >
                      +91 98250 14820
                    </a>
                  </p>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Inquiries & Corporate Booking
                  </h3>
                  <p className="text-sm text-white font-medium">
                    <a
                      href="mailto:contact@dglossyden.in"
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      contact@dglossyden.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Column (Vadodara) */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto border border-[#C5A059]/30 bg-[#12141A] p-2 relative shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118146.46328221085!2d73.1119565578768!3d22.307158814580393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710325492000!5m2!1sen!2sin"
              title="D Glossy Den Detailing Studio Location Map Vadodara"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
