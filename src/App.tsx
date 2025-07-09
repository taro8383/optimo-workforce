import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import GlobalIntelligenceSection from './components/GlobalIntelligenceSection';
import HowItWorksSection from './components/HowItWorksSection';
import TippingSpotlightSection from './components/TippingSpotlightSection';
import SocialProofSection from './components/SocialProofSection';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FaqPage from './components/FaqPage';
import AboutPage from './components/AboutPage';
import NewsletterPage from './components/NewsletterPage';
import RestaurantsPage from './components/RestaurantsPage';
import HotelsPage from './components/HotelsPage';
import CafesPage from './components/CafesPage';
import ROICalculatorPage from './components/ROICalculatorPage';
import ContactPage from './components/ContactPage';
import FutureFeaturesPage from './components/FutureFeaturesPage';
import IntegrationsPage from './components/IntegrationsPage';
import SecurityPage from './components/SecurityPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'faq':
        return <FaqPage />;
      case 'about':
        return <AboutPage />;
      case 'newsletter':
        return <NewsletterPage />;
      case 'restaurants':
        return <RestaurantsPage />;
      case 'hotels':
        return <HotelsPage />;
      case 'cafes':
        return <CafesPage />;
      case 'roi-calculator':
        return <ROICalculatorPage />;
      case 'contact':
        return <ContactPage />;
      case 'future-features':
        return <FutureFeaturesPage />;
      case 'integrations':
        return <IntegrationsPage />;
      case 'security':
        return <SecurityPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      case 'cookie-policy':
        return <CookiePolicyPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <ProblemSolutionSection />
            <GlobalIntelligenceSection />
            <HowItWorksSection />
            <TippingSpotlightSection />
            <SocialProofSection />
            <PricingSection />
            <FinalCTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;