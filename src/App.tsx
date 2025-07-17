import { useState, lazy, Suspense } from 'react';
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

// Lazy load all page components for code splitting
const FaqPage = lazy(() => import('./components/FaqPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const NewsletterPage = lazy(() => import('./components/NewsletterPage'));
const RestaurantsPage = lazy(() => import('./components/RestaurantsPage'));
const HotelsPage = lazy(() => import('./components/HotelsPage'));
const CafesPage = lazy(() => import('./components/CafesPage'));
const ROICalculatorPage = lazy(() => import('./components/ROICalculatorPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const FutureFeaturesPage = lazy(() => import('./components/FutureFeaturesPage'));
const IntegrationsPage = lazy(() => import('./components/IntegrationsPage'));
const SecurityPage = lazy(() => import('./components/SecurityPage'));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./components/CookiePolicyPage'));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

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
      <Suspense fallback={<LoadingSpinner />}>
        {renderPage()}
      </Suspense>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
