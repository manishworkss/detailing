import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandPartners } from './components/BrandPartners';
import { CarPOV3DExperience } from './components/CarPOV3DExperience';
import { Services } from './components/Services';
import { PackagesSection } from './components/PackagesSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { PPFSection } from './components/PPFSection';
import { CeramicSection } from './components/CeramicSection';
import { ProductsCollection } from './components/ProductsCollection';
import { ProcessCraftsmanship } from './components/ProcessCraftsmanship';
import { AboutStudio } from './components/AboutStudio';
import { GoogleReviews } from './components/GoogleReviews';
import { FAQSection } from './components/FAQSection';
import { StudioLocator } from './components/StudioLocator';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { MobileActionBar } from './components/MobileActionBar';
import { AdminDashboard } from './components/AdminDashboard';
import { GrowthStrategyModal } from './components/GrowthStrategyModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsConditionsModal } from './components/TermsConditionsModal';

export function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isGrowthOpen, setIsGrowthOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F5F5F7] flex flex-col selection:bg-[#C5A059] selection:text-black pb-16 lg:pb-0">
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenGrowthStrategy={() => setIsGrowthOpen(true)}
      />

      <main className="flex-1">
        <Hero onOpenBooking={() => scrollToBooking()} />
        <BeforeAfterGallery onOpenBooking={(service) => scrollToBooking(service)} />
        <BrandPartners />
        <div id="car-pov">
          <CarPOV3DExperience />
        </div>
        <Services onSelectService={(service) => scrollToBooking(service)} />
        <PackagesSection onOpenBooking={(service) => scrollToBooking(service)} />
        <PPFSection onOpenBooking={() => scrollToBooking('Paint Protection Film (PPF)')} />
        <CeramicSection onOpenBooking={() => scrollToBooking('9H Ceramic Coating')} />
        <ProductsCollection />
        <ProcessCraftsmanship />
        <AboutStudio />
        <GoogleReviews />
        <FAQSection />
        <StudioLocator />
        <BookingContact preselectedService={selectedService} />
      </main>

      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Sticky Mobile High-Conversion Bar */}
      <MobileActionBar onOpenBooking={() => scrollToBooking()} />

      {/* Floating Concierge Chatbot */}
      <ChatbotWidget onOpenBooking={() => scrollToBooking()} />

      {/* Staff Lead Management Admin Portal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Social Media & Paid Growth Strategy Playbook */}
      <GrowthStrategyModal
        isOpen={isGrowthOpen}
        onClose={() => setIsGrowthOpen(false)}
      />

      {/* Legal Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}

export default App;
