import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { trackEvent } from '../services/leadService';

const PRODUCTS = [
  {
    category: 'Artisan Perfume',
    name: 'Glossy Den Noir Cologne',
    volume: '50ml Glass Atomizer',
    description: 'Bespoke automotive interior fragrance blending Tuscan leather, smoked oud, and crisp bergamot notes. Oil-based formula that will not stain upholstery.',
    features: ['Long-lasting 60-day longevity', 'Zero synthetic propellant', 'Luxury magnetic cap']
  },
  {
    category: 'Artisan Perfume',
    name: 'Amber Royale Cabin Diffuser',
    volume: 'Hanging Wood Diffuser',
    description: 'Natural beechwood diffusing cap with rich amber and vanilla bean notes for continuous cabin fragrance without harsh artificial chemicals.',
    features: ['Natural beechwood release', 'Refillable glass reservoir', 'Discreet rear-view mount']
  },
  {
    category: 'Maintenance Care',
    name: 'Graphene Slick Detailer',
    volume: '500ml Spray Bottle',
    description: 'Graphene-infused spray sealant for maintenance between washes. Removes light dust and boosts hydrophobicity on ceramic coatings in Vadodara.',
    features: ['Safe on all PPF and coatings', 'Streak-free optical finish', 'Anti-static dust rejection']
  },
  {
    category: 'Maintenance Care',
    name: 'Hyper-Foam pH Neutral Wash',
    volume: '1000ml Concentrated',
    description: 'High-lubricity foam shampoo engineered for two-bucket wash technique. Gently suspends road grime without stripping existing wax or ceramic layers.',
    features: ['100% pH 7.0 neutral formulation', 'High-density foam blanket', 'Biodegradable cleaning surfactants']
  },
  {
    category: 'Maintenance Care',
    name: 'Satin Tyre & Trim Hydrator',
    volume: '500ml Dressing Gel',
    description: 'Water-based silica formulation that restores natural deep black finish to tyres and exterior plastic trim without sling or greasy residue.',
    features: ['Zero silicone sling on fenders', 'Factory matte-satin sheen', 'UV ozone cracking protection']
  },
  {
    category: 'Maintenance Care',
    name: 'Matte Cockpit Cleaner',
    volume: '500ml Interior Spray',
    description: 'Delicate cleaner for navigation displays, steering wheels, and textured dashboards. Leaves original factory non-reflective matte appearance.',
    features: ['Safe on anti-glare touchscreens', 'Anti-static dust barrier', 'Light cedar scent']
  }
];

export const ProductsCollection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Studio Care Collection
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight">
            Artisan Car Perfumes & Maintenance Care
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Formulated specifically for maintained luxury vehicles. Available at our Vadodara studio desk or dispatched across Gujarat.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.name}
              className="luxury-card p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A059] px-2.5 py-1 bg-[#161820] border border-white/5">
                    {prod.category}
                  </span>
                  <span className="text-xs text-[#DEC07E] font-medium">
                    {prod.volume}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-[#9E9EA7] leading-relaxed mb-5">
                  {prod.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/5">
                  {prod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#C5C5CD]">
                      <Sparkles className="w-3 h-3 text-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a
                href={`https://wa.me/919825014820?text=Hello%20D%20Glossy%20Den%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(prod.name)}%20(${encodeURIComponent(prod.volume)}).`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', `Order Product: ${prod.name}`)}
                className="btn-luxury-secondary w-full text-center text-xs py-2.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                Order via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
