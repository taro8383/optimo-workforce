import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import enCommon from './locales/en/common.json';
import enRestaurants from './locales/en/restaurants.json';
import enHotels from './locales/en/hotels.json';
import enCafe from './locales/en/cafe.json';
import enHero from './locales/en/hero.json';
import enHeader from './locales/en/header.json';
import enPricing from './locales/en/pricing.json';
import enProblemSolution from './locales/en/problemSolution.json';
import enSocialProof from './locales/en/socialProof.json';
import enHowItWorks from './locales/en/howItWorks.json';
import enTippingSpotlight from './locales/en/tippingSpotlight.json';
import enGlobalIntelligence from './locales/en/globalIntelligence.json';
import enFinalCTA from './locales/en/finalCTA.json';
import enFooter from './locales/en/footer.json';
import enFutureFeaturesHero from './locales/en/future-features/hero.json';
import enFutureFeaturesRoadmap from './locales/en/future-features/roadmap.json';
import enFutureFeaturesDetails from './locales/en/future-features/featureDetails.json';
import enFutureFeaturesTitles from './locales/en/future-features/featureTitles.json';
import enFutureFeaturesTimeline from './locales/en/future-features/featureTimeline.json';
import enFutureFeaturesBeta from './locales/en/future-features/betaProgram.json';
import enFutureFeaturesRequest from './locales/en/future-features/featureRequest.json';
import enFutureFeaturesUI from './locales/en/future-features/ui.json';
import enFutureFeaturesImpact from './locales/en/future-features/industryImpact.json';
import enFutureFeaturesInventory from './locales/en/future-features/inventoryOptimization.json';
import enFutureFeaturesAnalytics from './locales/en/future-features/businessAnalytics.json';
import enFutureFeaturesFeedback from './locales/en/future-features/customerFeedback.json';
import enFutureFeaturesManagement from './locales/en/future-features/customerManagement.json';
import enFutureFeaturesAI from './locales/en/future-features/aiUpselling.json';
import enFutureFeaturesPricing from './locales/en/future-features/dynamicPricing.json';
import enFutureFeaturesTips from './locales/en/future-features/tipManagement.json';
import enSecurityPage from './locales/en/securityPage.json';
import enIntegrations from './locales/en/integrations.json';
import enFaq from './locales/en/components/faq.json';
import enROICalculator from './locales/en/components/roi-calculator.json';
import enNewsletter from './locales/en/components/newsletter.json';
import enAbout from './locales/en/components/about.json';

// Import Spanish translations
import esCommon from './locales/es/common.json';
import esRestaurants from './locales/es/restaurants.json';
import esHotels from './locales/es/hotels.json';
import esCafe from './locales/es/cafe.json';
import esHero from './locales/es/hero.json';
import esHeader from './locales/es/header.json';
import esPricing from './locales/es/pricing.json';
import esProblemSolution from './locales/es/problemSolution.json';
import esSocialProof from './locales/es/socialProof.json';
import esHowItWorks from './locales/es/howItWorks.json';
import esTippingSpotlight from './locales/es/tippingSpotlight.json';
import esGlobalIntelligence from './locales/es/globalIntelligence.json';
import esFinalCTA from './locales/es/finalCTA.json';
import esFooter from './locales/es/footer.json';
import esFutureFeaturesHero from './locales/es/future-features/hero.json';
import esFutureFeaturesRoadmap from './locales/es/future-features/roadmap.json';
import esFutureFeaturesDetails from './locales/es/future-features/featureDetails.json';
import esFutureFeaturesTitles from './locales/es/future-features/featureTitles.json';
import esFutureFeaturesTimeline from './locales/es/future-features/featureTimeline.json';
import esFutureFeaturesBeta from './locales/es/future-features/betaProgram.json';
import esFutureFeaturesRequest from './locales/es/future-features/featureRequest.json';
import esFutureFeaturesUI from './locales/es/future-features/ui.json';
import esFutureFeaturesImpact from './locales/es/future-features/industryImpact.json';
import esFutureFeaturesInventory from './locales/es/future-features/inventoryOptimization.json';
import esFutureFeaturesAnalytics from './locales/es/future-features/businessAnalytics.json';
import esFutureFeaturesFeedback from './locales/es/future-features/customerFeedback.json';
import esFutureFeaturesManagement from './locales/es/future-features/customerManagement.json';
import esFutureFeaturesAI from './locales/es/future-features/aiUpselling.json';
import esFutureFeaturesPricing from './locales/es/future-features/dynamicPricing.json';
import esFutureFeaturesTips from './locales/es/future-features/tipManagement.json';
import esSecurityPage from './locales/es/securityPage.json';
import esIntegrations from './locales/es/integrations.json';
import esFaq from './locales/es/components/faq.json';
import esROICalculator from './locales/es/components/roi-calculator.json';
import esNewsletter from './locales/es/components/newsletter.json';
import esAbout from './locales/es/components/about.json';

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  ns: ['common', 'hero', 'header', 'pricing', 'problemSolution', 'socialProof', 'howItWorks', 'tippingSpotlight', 'globalIntelligence', 'finalCTA', 'footer', 'futureFeatures', 'restaurants', 'hotels', 'cafe', 'securityPage', 'integrationsPage', 'components/faq', 'components/roi-calculator', 'components/newsletter', 'components/about'],
  defaultNS: 'common',
  resources: {
    en: {
      common: enCommon,
      hero: enHero,
      header: enHeader,
      pricing: enPricing,
      problemSolution: enProblemSolution,
      socialProof: enSocialProof,
      howItWorks: enHowItWorks,
      tippingSpotlight: enTippingSpotlight,
      globalIntelligence: enGlobalIntelligence,
      finalCTA: enFinalCTA,
      footer: enFooter,
      futureFeatures: {
        hero: enFutureFeaturesHero,
        roadmap: enFutureFeaturesRoadmap,
        featureDetails: enFutureFeaturesDetails,
        featureTitles: enFutureFeaturesTitles,
        featureTimeline: enFutureFeaturesTimeline,
        betaProgram: enFutureFeaturesBeta,
        featureRequest: enFutureFeaturesRequest,
        ui: enFutureFeaturesUI,
        industryImpact: enFutureFeaturesImpact,
        inventoryOptimization: enFutureFeaturesInventory,
        businessAnalytics: enFutureFeaturesAnalytics,
        customerFeedback: enFutureFeaturesFeedback,
        customerManagement: enFutureFeaturesManagement,
        aiUpselling: enFutureFeaturesAI,
        dynamicPricing: enFutureFeaturesPricing,
        tipManagement: enFutureFeaturesTips
      },
      restaurants: enRestaurants,
      hotels: enHotels,
      cafe: enCafe,
      securityPage: enSecurityPage,
      integrationsPage: enIntegrations,
      'components/faq': enFaq,
      'components/roi-calculator': enROICalculator,
      'components/newsletter': enNewsletter,
      'components/about': enAbout
    },
    es: {
      common: esCommon,
      hero: esHero,
      header: esHeader,
      pricing: esPricing,
      problemSolution: esProblemSolution,
      socialProof: esSocialProof,
      howItWorks: esHowItWorks,
      tippingSpotlight: esTippingSpotlight,
      globalIntelligence: esGlobalIntelligence,
      finalCTA: esFinalCTA,
      footer: esFooter,
      futureFeatures: {
        hero: esFutureFeaturesHero,
        roadmap: esFutureFeaturesRoadmap,
        featureDetails: esFutureFeaturesDetails,
        featureTitles: esFutureFeaturesTitles,
        featureTimeline: esFutureFeaturesTimeline,
        betaProgram: esFutureFeaturesBeta,
        featureRequest: esFutureFeaturesRequest,
        ui: esFutureFeaturesUI,
        industryImpact: esFutureFeaturesImpact,
        inventoryOptimization: esFutureFeaturesInventory,
        businessAnalytics: esFutureFeaturesAnalytics,
        customerFeedback: esFutureFeaturesFeedback,
        customerManagement: esFutureFeaturesManagement,
        aiUpselling: esFutureFeaturesAI,
        dynamicPricing: esFutureFeaturesPricing,
        tipManagement: esFutureFeaturesTips
      },
      restaurants: esRestaurants,
      hotels: esHotels,
      cafe: esCafe,
      securityPage: esSecurityPage,
      integrationsPage: esIntegrations,
      'components/faq': esFaq,
      'components/roi-calculator': esROICalculator,
      'components/newsletter': esNewsletter,
      'components/about': esAbout
    }
  },
    fallbackLng: 'en',
    interpolation: { 
      escapeValue: false 
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    react: {
      useSuspense: false
    }
  });

// Enable hot reload for translations in development
if (process.env.NODE_ENV === 'development') {
  const hot = (import.meta as any).hot;
  if (hot) {
    hot.accept([
      './locales/en/footer.json',
      './locales/es/footer.json',
      './locales/en/cafe.json',
      './locales/es/cafe.json',
      './locales/en/securityPage.json',
      './locales/es/securityPage.json',
      './locales/en/integrations.json',
      './locales/es/integrations.json',
      './locales/en/components/faq.json',
      './locales/es/components/faq.json',
      './locales/en/components/roi-calculator.json',
      './locales/es/components/roi-calculator.json',
      './locales/en/components/newsletter.json',
      './locales/es/components/newsletter.json',
      './locales/en/components/about.json',
      './locales/es/components/about.json'
    ], () => {
      i18n.reloadResources().then(() => i18n.changeLanguage(i18n.language));
    });
  }
}

export default i18n;
