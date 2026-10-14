import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Megaphone,
  Share2,
  Film,
  Target,
  CheckCircle,
  Copy,
  Layers,
  Sparkles
} from 'lucide-react';

interface GrowthStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_CALENDAR_DAYS = [
  {
    day: 'Day 1',
    pillar: 'Before & After',
    format: 'Reel (9:16)',
    hook: '“You think your black car is clean until we turn on the Scangrip lights…”',
    caption: 'Dealership washes leave severe spiderweb swirls and buffer trails on clear coats. Watch this 2024 Fortuner go through our 2-stage compound leveling and finishing jeweling at our Vadodara studio. No fillers, just permanent mirror reflections.',
    cta: 'DM “GLOSS” or click link in bio for a complimentary paint inspection in Vadodara.',
    bestTime: '6:30 PM'
  },
  {
    day: 'Day 3',
    pillar: 'Educational / Myth Busting',
    format: 'Carousel (4:5)',
    hook: '“Why borewell water in Vadodara destroys ceramic coatings if washed incorrectly.”',
    caption: 'Vadodara water is rich in calcium and minerals. When allowed to dry under 40°C afternoon sun, it burns etched mineral rings directly into your paint. Swipe left to learn the 3 wash rules every luxury car owner must follow.',
    cta: 'Save this post for your next Sunday wash routine. Book your ceramic checkup via bio link.',
    bestTime: '1:00 PM'
  },
  {
    day: 'Day 5',
    pillar: 'Process / ASMR',
    format: 'Reel (9:16)',
    hook: '“ASMR: Precision peeling and tucking 200-micron TPU film.”',
    caption: 'Satisfying squeegee glide and laser-template edge tucking on this BMW M3 front bumper. Zero razor blades ever touch factory paintwork in our cleanroom bay. Every corner is heat-sealed to prevent lifting.',
    cta: 'WhatsApp us for a customized PPF estimate for your vehicle.',
    bestTime: '7:45 PM'
  },
  {
    day: 'Day 8',
    pillar: 'Customer Delivery',
    format: 'Photo Carousel (4:5)',
    hook: '“Delivery Day: When the owner doesn’t recognize their own car reflections.”',
    caption: 'Handing over this Mercedes-Benz E-Class after our 9H Multi-Layer Ceramic Shield treatment. The wet-look candy depth is unbelievable in natural sunlight. Thank you for entrusting D Glossy Den!',
    cta: 'Tap link in bio to book your slot. Advance bookings open for next week.',
    bestTime: '11:30 AM'
  },
  {
    day: 'Day 12',
    pillar: 'Behind The Scenes',
    format: 'Reel (9:16)',
    hook: '“Why we measure paint thickness with digital gauges before touching your car.”',
    caption: 'Clear coat is thinner than a Post-it note. An inexperienced buffer can burn edges in seconds. At D Glossy Den Vadodara, every panel is digitally logged to ensure maximum gloss with zero clear coat compromise.',
    cta: 'Experience clinical detailing. Message us for vehicle intake.',
    bestTime: '7:00 PM'
  },
  {
    day: 'Day 15',
    pillar: 'Interior Detailing',
    format: 'Reel (9:16)',
    hook: '“Greasy interior dressings vs. Factory matte ceramic leather.”',
    caption: 'Shiny, slippery leather is NOT clean leather—it is trapped body oil and dirt. Watch our 160°C dry steam extraction pull out 3 years of grime without damaging delicate stitching.',
    cta: 'Treat your cabin to hospital-grade sanitization. Call our studio desk.',
    bestTime: '6:00 PM'
  },
  {
    day: 'Day 19',
    pillar: 'Water Beading / Science',
    format: 'Reel (9:16)',
    hook: '“110-degree water contact angle in action. Hydrophobic bliss.”',
    caption: 'Slow-motion water test on freshly cured 9H ceramic coating. Watch rain and grime bead up into tight spheres and roll off effortlessly. No more water spots during Gujarat monsoons.',
    cta: 'Protect your paint today. Link in bio for instant WhatsApp quote.',
    bestTime: '8:00 PM'
  },
  {
    day: 'Day 24',
    pillar: 'Common Mistakes',
    format: 'Carousel (4:5)',
    hook: '“Stop letting your society watchman dry-wipe your car with a dusty cloth!”',
    caption: 'Dry wiping a dusty car is the equivalent of rubbing 2000-grit sandpaper across your clear coat every single morning. Here are 3 alternative care solutions that save your paint.',
    cta: 'Share this with a fellow car lover in Vadodara.',
    bestTime: '12:30 PM'
  },
  {
    day: 'Day 28',
    pillar: 'Transformation Review',
    format: 'Reel (9:16)',
    hook: '“From oxidized dull red to dripping wet gloss. 2-Stage Concours Restoration.”',
    caption: '5 years of sun fading completely reversed through scientific paint jeweling. Preserved with 9H ceramic nanocoatings. Real detailing in Vadodara.',
    cta: 'Schedule your complimentary paint assessment at D Glossy Den.',
    bestTime: '7:30 PM'
  }
];

const PAID_CAMPAIGNS = [
  {
    id: 'campaign-meta-1',
    platform: 'Meta Ads (Instagram & Facebook Feed/Reels)',
    name: 'Vadodara Luxury Car Owners — PPF & Ceramic Direct Lead Engine',
    objective: 'Leads (Instant Forms + WhatsApp Click-to-Chat)',
    targetAudience: 'Men & Women aged 26-58, Vadodara (+15km radius: Alkapuri, Gotri, Vasna-Bhayli, Akota, Sevasi). Interests: Luxury Vehicles, BMW, Mercedes-Benz, Audi, Porsche, Toyota Fortuner, Mahindra XUV700, Automotive Detailing.',
    creativeConcept: 'High-contrast split video of paint swirl marks disappearing under Scangrip inspection light, followed by water beading off black hood.',
    adCopy: '“Tired of daily wash swirl marks ruining your car’s original paint? D Glossy Den brings cleanroom detailing, certified self-healing PPF, and 9H Ceramic Coatings to Vadodara. Click below for a free paint depth report and tailored estimate.”',
    cta: 'Book Inspection / Get Quote on WhatsApp',
    testingBudget: '₹600 - ₹1,000 / day initial test budget for 7 days.'
  },
  {
    id: 'campaign-google-1',
    platform: 'Google Search & Local Call Ads',
    name: 'High-Intent Vadodara Local Search Capture',
    objective: 'High-Intent Inbound Phone Calls & Quote Submissions',
    targetAudience: 'Users in Vadodara searching: “car detailing vadodara”, “ceramic coating vadodara”, “PPF cost vadodara”, “car polishing near me”.',
    creativeConcept: 'Ad Title: D Glossy Den | Vadodara’s Premier Car Detailing & PPF Studio\nAd Description: Certified Self-Healing PPF & 9H Ceramic Coatings. Climate Bay Application, Computer-Cut Templates & 100% Swirl Removal. Book Your Free Inspection Today!',
    cta: 'Call +91 98250 14820 / Request Estimate',
    testingBudget: '₹800 - ₹1,200 / day focusing on exact and phrase match keywords.'
  }
];

export const GrowthStrategyModal: React.FC<GrowthStrategyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'ads'>('calendar');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0E1015] border border-[#C5A059]/40 overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="bg-[#141720] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#1A1D27] border border-[#C5A059]/50 flex items-center justify-center text-[#DEC07E]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-cinzel text-base sm:text-lg font-bold text-white leading-none">
                D Glossy Den — Social Media & Paid Growth Engine
              </h2>
              <p className="text-[10px] text-[#A0A0A9] mt-1">
                Vadodara Customer Acquisition & Local Marketing Playbook
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9EA7] hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#101217] border-b border-white/5 px-6 py-2.5 flex items-center gap-4">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'calendar'
                ? 'bg-[#C5A059] text-black font-bold'
                : 'text-[#A0A0A9] hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>30-Day Content Calendar</span>
          </button>

          <button
            onClick={() => setActiveTab('ads')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'ads'
                ? 'bg-[#C5A059] text-black font-bold'
                : 'text-[#A0A0A9] hover:text-white'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Meta & Google Ad Blueprints</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'calendar' ? (
            <div className="space-y-6">
              <div className="p-4 bg-[#12141A] border border-white/5 flex items-start justify-between">
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-white">
                    Editorial Strategy & Posting Cadence
                  </h3>
                  <p className="text-xs text-[#9E9EA7] mt-1">
                    Optimal Frequency: 4 Reels + 2 Carousels per week. Focus on raw Scangrip lighting proof, Vadodara localized car culture, and eliminating dealership wash myths.
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-[#1A1D27] text-[#C5A059] border border-[#C5A059]/30 whitespace-nowrap">
                  Instagram & FB
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SOCIAL_CALENDAR_DAYS.map((item, idx) => (
                  <div key={idx} className="luxury-card p-4 flex flex-col justify-between border border-white/10">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#C5A059]/20 text-[#DEC07E] border border-[#C5A059]/30">
                          {item.day} • {item.format}
                        </span>
                        <span className="text-[10px] text-[#7A7A85]">{item.bestTime}</span>
                      </div>

                      <h4 className="font-cinzel text-xs font-bold text-white mb-2 leading-snug">
                        {item.hook}
                      </h4>

                      <p className="text-xs text-[#9E9EA7] leading-relaxed mb-3">
                        {item.caption}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <span className="text-[#C5A059] font-medium truncate max-w-[190px]">
                        CTA: {item.cta}
                      </span>
                      <button
                        onClick={() => handleCopy(`${item.hook}\n\n${item.caption}\n\n${item.cta}`, idx)}
                        className="p-1 hover:text-[#DEC07E] text-[#8E919C] cursor-pointer"
                        title="Copy caption"
                      >
                        {copiedIndex === idx ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-[#12141A] border border-white/5">
                <h3 className="font-cinzel text-sm font-bold text-white">
                  Paid Traffic & Qualified Lead Generation Architecture
                </h3>
                <p className="text-xs text-[#9E9EA7] mt-1">
                  Target high-net-worth vehicle owners across Vadodara without burning ad spend on broad untargeted audiences.
                </p>
              </div>

              <div className="space-y-6">
                {PAID_CAMPAIGNS.map((camp) => (
                  <div key={camp.id} className="luxury-card p-6 border border-[#C5A059]/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#DEC07E]">
                        {camp.platform}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-[#181B24] border border-white/10 text-white">
                        {camp.objective}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-lg font-bold text-white">
                      {camp.name}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-[#08090B] border border-white/5 space-y-1">
                        <strong className="text-[#DEC07E] block text-[11px] uppercase tracking-wider">Targeting:</strong>
                        <p className="text-[#9E9EA7] leading-relaxed">{camp.targetAudience}</p>
                      </div>

                      <div className="p-3 bg-[#08090B] border border-white/5 space-y-1">
                        <strong className="text-[#DEC07E] block text-[11px] uppercase tracking-wider">Ad Creative:</strong>
                        <p className="text-[#9E9EA7] leading-relaxed">{camp.creativeConcept}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-[#12141A] border-l-2 border-[#C5A059] text-xs">
                      <strong className="text-white block mb-1">Ad Copy / Headline:</strong>
                      <p className="text-[#B5B5BE] italic whitespace-pre-line">{camp.adCopy}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-xs text-[#8E919C]">
                      <span>Recommended Test Budget: <strong className="text-white">{camp.testingBudget}</strong></span>
                      <span className="text-[#25D366] font-semibold">CTA: {camp.cta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
