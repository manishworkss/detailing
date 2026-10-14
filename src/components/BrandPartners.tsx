import React from 'react';

interface BrandItem {
  name: string;
  category: string;
  badge: string;
  logo: React.ReactNode;
}

export const BRANDS: BrandItem[] = [
  {
    name: 'Mercedes-Benz',
    category: 'Stuttgart, Germany',
    badge: 'AMG & Maybach Certified',
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.2" />
        {/* Three-pointed star with faceted 3D metallic shading */}
        <polygon points="24,5 26.5,23 24,24" fill="currentColor" fillOpacity="0.95" />
        <polygon points="24,5 21.5,23 24,24" fill="currentColor" fillOpacity="0.45" />
        <polygon points="40,33 24,24 26.5,25.5" fill="currentColor" fillOpacity="0.95" />
        <polygon points="40,33 24,24 23.5,22.5" fill="currentColor" fillOpacity="0.45" />
        <polygon points="8,33 24,24 21.5,25.5" fill="currentColor" fillOpacity="0.45" />
        <polygon points="8,33 24,24 24.5,22.5" fill="currentColor" fillOpacity="0.95" />
      </svg>
    )
  },
  {
    name: 'BMW',
    category: 'Munich, Germany',
    badge: 'M-Power & Alpina Specialist',
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="14.5" stroke="currentColor" strokeWidth="1.2" />
        {/* Bavarian Blue & White Quadrants */}
        <path d="M24 9.5 A14.5 14.5 0 0 1 38.5 24 L24 24 Z" fill="#0066B1" />
        <path d="M24 24 L38.5 24 A14.5 14.5 0 0 1 24 38.5 Z" fill="#FFFFFF" fillOpacity="0.85" />
        <path d="M24 24 L24 38.5 A14.5 14.5 0 0 1 9.5 24 Z" fill="#0066B1" />
        <path d="M9.5 24 A14.5 14.5 0 0 1 24 9.5 L24 24 Z" fill="#FFFFFF" fillOpacity="0.85" />
        {/* Roundel Lettering */}
        <text x="14" y="7.5" fontSize="4.2" fontWeight="bold" fill="currentColor" letterSpacing="0.8">B</text>
        <text x="21.5" y="6" fontSize="4.2" fontWeight="bold" fill="currentColor" letterSpacing="0.8">M</text>
        <text x="30" y="7.5" fontSize="4.2" fontWeight="bold" fill="currentColor" letterSpacing="0.8">W</text>
      </svg>
    )
  },
  {
    name: 'Audi',
    category: 'Ingolstadt, Germany',
    badge: 'RS & Quattro Finishing',
    logo: (
      <svg viewBox="0 0 56 32" className="w-10 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 4 Iconic Interlocking Rings */}
        <circle cx="13" cy="16" r="9.5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="23" cy="16" r="9.5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="33" cy="16" r="9.5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="43" cy="16" r="9.5" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    )
  },
  {
    name: 'Porsche',
    category: 'Stuttgart, Germany',
    badge: '911, Taycan & Macan Detail',
    logo: (
      <svg viewBox="0 0 44 48" className="w-7 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Porsche Shield Outline */}
        <path
          d="M8 8 C8 8 22 5 22 5 C22 5 36 8 36 8 C36 8 36 26 36 30 C36 39 22 45 22 45 C22 45 8 39 8 30 C8 26 8 8 8 8 Z"
          stroke="#C5A059"
          strokeWidth="2"
          fill="#0B0D12"
        />
        {/* Header Bar */}
        <path d="M11 13 L33 13" stroke="#C5A059" strokeWidth="1.2" />
        <text x="12.5" y="11.5" fontSize="3.6" fontWeight="bold" fill="#F5F5F7" letterSpacing="0.6">PORSCHE</text>
        {/* Antler Stripes / Stuttgart Crest */}
        <path d="M12 18 L20 18 M12 21 L20 21 M24 18 L32 18 M24 21 L32 21" stroke="#CE2B37" strokeWidth="1.8" />
        {/* Inner Gold Shield & Horse */}
        <path d="M18 24 C18 24 22 23 22 23 C22 23 26 24 26 24 C26 29 22 33 22 33 C22 33 18 29 18 24 Z" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.3" />
        <path d="M21 30 C21 27 23 26 23 25 C22 25 21 26 21 27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Range Rover',
    category: 'Solihull, England',
    badge: 'Autobiography & Defender',
    logo: (
      <svg viewBox="0 0 54 30" className="w-10 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="27" cy="15" rx="25" ry="13" stroke="#005A36" strokeWidth="2.2" fill="#072317" />
        <ellipse cx="27" cy="15" rx="23" ry="11" stroke="#C5A059" strokeWidth="1" />
        <text x="13" y="13.5" fontSize="4.2" fontWeight="bold" fill="#F5F5F7" letterSpacing="0.8">LAND</text>
        <text x="10" y="20.5" fontSize="4.2" fontWeight="bold" fill="#DEC07E" letterSpacing="0.8">ROVER</text>
      </svg>
    )
  },
  {
    name: 'Rolls-Royce',
    category: 'Goodwood, England',
    badge: 'Phantom & Ghost Concours',
    logo: (
      <svg viewBox="0 0 40 48" className="w-7 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#0C0E14" />
        <text x="8.5" y="11" fontSize="4.2" fontWeight="bold" fill="currentColor" letterSpacing="1.2">ROLLS</text>
        <line x1="7" y1="13.5" x2="33" y2="13.5" stroke="currentColor" strokeWidth="0.8" />
        {/* Double R Monogram */}
        <text x="10" y="32" fontSize="17" fontFamily="serif" fontWeight="bold" fill="currentColor">R</text>
        <text x="17" y="35" fontSize="17" fontFamily="serif" fontWeight="bold" fill="#C5A059">R</text>
        <line x1="7" y1="38" x2="33" y2="38" stroke="currentColor" strokeWidth="0.8" />
        <text x="8.5" y="42.5" fontSize="4.2" fontWeight="bold" fill="currentColor" letterSpacing="1.2">ROYCE</text>
      </svg>
    )
  },
  {
    name: 'Ferrari',
    category: 'Maranello, Italy',
    badge: 'Cavallino Rampante Care',
    logo: (
      <svg viewBox="0 0 38 48" className="w-6 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 L33 5 C33 5 33 30 33 34 C33 41 19 46 19 46 C19 46 5 41 5 34 Z" stroke="#FFDD00" strokeWidth="1.8" fill="#0F1015" />
        {/* Italian Tricolore Band */}
        <rect x="6" y="6" width="9" height="3" fill="#009246" />
        <rect x="15" y="6" width="8" height="3" fill="#FFFFFF" />
        <rect x="23" y="6" width="9" height="3" fill="#CE2B37" />
        {/* Yellow Shield Body */}
        <path d="M6 10 L32 10 L32 33 C32 39 19 44 19 44 C19 44 6 39 6 33 Z" fill="#FFDD00" fillOpacity="0.15" />
        {/* Prancing Horse Silhouette */}
        <path
          d="M19 14 C19 14 22 17 22 19 C23 20 22 22 21 23 C21 24 23 25 24 27 C22 27 21 26 20 26 C20 28 20 31 18 33 C18 33 17 31 18 29 C17 30 16 31 15 31 C15 30 16 28 17 26 C15 26 14 25 14 24 C16 24 18 25 18 23 C18 21 16 19 19 14 Z"
          fill="currentColor"
        />
        <text x="10.5" y="41" fontSize="5" fontWeight="bold" fontStyle="italic" fill="#DEC07E">S F</text>
      </svg>
    )
  },
  {
    name: 'Lamborghini',
    category: 'Sant’Agata, Italy',
    badge: 'Huracán, Urus & Revuelto',
    logo: (
      <svg viewBox="0 0 38 48" className="w-6 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4 L34 11 L32 37 L19 44 L6 37 L4 11 Z" stroke="#C5A059" strokeWidth="2" fill="#0E1015" />
        <text x="6" y="11" fontSize="2.8" fontWeight="bold" fill="#C5A059" letterSpacing="0.4">LAMBORGHINI</text>
        {/* Golden Bull Silhouette */}
        <path
          d="M11 28 C13 24 15 23 17 22 C20 21 23 23 25 26 C24 26 22 25 20 25 C18 25 15 27 14 31 C13 31 12 30 11 28 Z"
          fill="#DEC07E"
        />
        <path d="M25 22 C26 20 28 19 29 18 C27 20 25 21 23 22" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Bentley',
    category: 'Crewe, England',
    badge: 'Continental GT & Bentayga',
    logo: (
      <svg viewBox="0 0 56 32" className="w-10 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outstretched Wings */}
        <path d="M23 16 C17 12 9 13 3 15 C9 17 16 18 23 17 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
        <path d="M23 14 C16 10 10 10 5 12 C11 14 17 15 23 15 Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M33 16 C39 12 47 13 53 15 C47 17 40 18 33 17 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
        <path d="M33 14 C40 10 46 10 51 12 C45 14 39 15 33 15 Z" stroke="currentColor" strokeWidth="1.2" />
        {/* Center Black Lacquer Oval with 'B' */}
        <ellipse cx="28" cy="16" rx="6.5" ry="7.5" stroke="#C5A059" strokeWidth="1.8" fill="#0C0E14" />
        <text x="24.5" y="20.5" fontSize="11" fontFamily="serif" fontWeight="bold" fill="currentColor">B</text>
      </svg>
    )
  },
  {
    name: 'Jaguar',
    category: 'Coventry, England',
    badge: 'F-Pace & XF Paint Leveling',
    logo: (
      <svg viewBox="0 0 54 28" className="w-10 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Leaping Jaguar Silhouette */}
        <path
          d="M4 18 C8 15 12 13 16 13 C20 13 22 15 25 14 C29 13 32 9 37 8 C41 7 45 7 49 9 C51 10 51 12 49 13 C46 14 42 12 39 12 C35 12 33 15 30 17 C27 19 24 20 21 20 C17 20 13 21 9 23 C7 24 5 23 4 18 Z"
          fill="currentColor"
        />
        <path d="M38 13 C41 15 44 18 46 20 M44 11 C47 12 50 13 52 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Toyota',
    category: 'Toyota City, Japan',
    badge: 'Fortuner, Camry & LC300',
    logo: (
      <svg viewBox="0 0 50 36" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Ellipse */}
        <ellipse cx="25" cy="18" rx="22" ry="15" stroke="currentColor" strokeWidth="2.2" />
        {/* Inner Vertical Steering Oval */}
        <ellipse cx="25" cy="17" rx="6.5" ry="11.5" stroke="currentColor" strokeWidth="2.2" />
        {/* Inner Horizontal Crossbar Oval */}
        <ellipse cx="25" cy="12" rx="15" ry="5.8" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    )
  },
  {
    name: 'Mahindra',
    category: 'Mumbai, India',
    badge: 'XUV700, Thar & Scorpio-N',
    logo: (
      <svg viewBox="0 0 50 34" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern Twin Peaks Emblem */}
        <path
          d="M8 25 C12 25 18 9 25 9 C32 9 38 25 42 25 C38 25 32 15 25 15 C18 15 12 25 8 25 Z"
          stroke="#C5A059"
          strokeWidth="2.4"
          fill="currentColor"
          fillOpacity="0.15"
          strokeLinejoin="round"
        />
        <text x="7" y="32" fontSize="4.8" fontWeight="bold" fill="currentColor" letterSpacing="0.8">MAHINDRA</text>
      </svg>
    )
  },
  {
    name: 'Tata Motors',
    category: 'Mumbai, India',
    badge: 'Harrier, Safari & Nexon EV',
    logo: (
      <svg viewBox="0 0 48 34" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="17" rx="20" ry="13" stroke="currentColor" strokeWidth="2.2" />
        {/* Chrome Dynamic T-Arch */}
        <path
          d="M14 11 C20 11 24 13 24 25 M34 11 C28 11 24 13 24 25"
          stroke="#C5A059"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <text x="14" y="31" fontSize="4.5" fontWeight="bold" fill="currentColor" letterSpacing="1">TATA</text>
      </svg>
    )
  },
  {
    name: 'Hyundai',
    category: 'Seoul, South Korea',
    badge: 'Ioniq 5, Tucson & Creta',
    logo: (
      <svg viewBox="0 0 50 34" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Slanted Chrome Oval */}
        <ellipse cx="25" cy="17" rx="22" ry="14" stroke="currentColor" strokeWidth="2.2" transform="rotate(-6 25 17)" />
        {/* Iconic Slanted 'H' */}
        <path
          d="M16 25 L21 9 M34 9 L29 25 M18 17 C22 15 28 19 32 17"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    name: 'Kia',
    category: 'Seoul, South Korea',
    badge: 'EV6, Carnival & Seltos',
    logo: (
      <svg viewBox="0 0 50 28" className="w-10 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connected Modern Wordmark Emblem */}
        <path
          d="M 6 22 L 6 6 L 18 22 L 18 6 L 31 22 L 38 6 L 46 22"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export const BrandPartners: React.FC = () => {
  // Duplicate array for mathematically seamless continuous infinite rotation loop (translateX -50%)
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#07080A] border-y border-white/5 py-8 overflow-hidden relative select-none">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#141722]/30 via-transparent to-transparent pointer-events-none" />

      {/* Header Caption Matching User Image 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <div className="inline-flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#DEC07E] font-semibold">
            Vehicle Marques Serviced With Precision in Vadodara
          </h3>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
        </div>
      </div>

      {/* Infinite Horizontal Rotating Marquee with Vignette Edge Masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      >
        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="group relative flex items-center gap-3.5 px-5 py-3 bg-[#0D0F15] hover:bg-[#141722] border border-white/8 hover:border-[#C5A059]/60 rounded-[2px] transition-all duration-300 shadow-lg shrink-0 cursor-default"
            >
              {/* Brand Vector Logo Icon with Metallic Chrome / Gold Tone & Subtle Micro-Tilt */}
              <div className="text-[#A5A5B2] group-hover:text-[#DEC07E] transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3 shrink-0">
                {brand.logo}
              </div>

              {/* Brand Typography & Origin */}
              <div className="text-left">
                <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#F5F5F7] group-hover:text-white block whitespace-nowrap leading-tight transition-colors">
                  {brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#737380] group-hover:text-[#C5A059] block transition-colors">
                  {brand.category}
                </span>
              </div>

              {/* Corner Gold Pip Accent */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-transparent group-hover:bg-[#C5A059] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
