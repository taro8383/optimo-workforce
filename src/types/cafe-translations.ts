export interface CafeTranslations {
  "hero.title": string;
  "hero.subtitle": string;
  "hero.ctaText": string;
  "problemSolution.title": string;
  "problemSolution.problemText": string;
  "problemSolution.solutionText": string;
  "howItWorks.title": string;
  "howItWorks.step1.title": string;
  "howItWorks.step1.description": string;
  "howItWorks.step2.title": string;
  "howItWorks.step2.description": string;
  "howItWorks.step3.title": string;
  "howItWorks.step3.description": string;
  "tippingSpotlight.title": string;
  "tippingSpotlight.feature1.title": string;
  "tippingSpotlight.feature1.description": string;
  "tippingSpotlight.feature2.title": string;
  "tippingSpotlight.feature2.description": string;
  "globalIntelligence.title": string;
  "globalIntelligence.metric1.value": string;
  "globalIntelligence.metric1.label": string;
  "globalIntelligence.metric2.value": string;
  "globalIntelligence.metric2.label": string;
  "socialProof.testimonial1.text": string;
  "socialProof.testimonial1.author": string;
  "socialProof.testimonial2.text": string;
  "socialProof.testimonial2.author": string;
  "pricing.title": string;
  "pricing.plan1.name": string;
  "pricing.plan1.price": string;
  "pricing.plan1.features": string[];
  "pricing.plan2.name": string;
  "pricing.plan2.price": string;
  "pricing.plan2.features": string[];
  "finalCTA.title": string;
  "finalCTA.subtitle": string;
  "finalCTA.ctaText": string;
  features: {
    downtimeDesc: string;
    downtimeDetails: string;
    productivityDesc: string;
    productivityDetails: string;
    disruptionsDesc: string;
    disruptionsDetails: string;
    performanceTitle: string;
    performanceDetails: string;
    demandSignals: Array<{ title: string; description: string }>;
    coreOutcomes: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
  performanceMetrics: {
    lowerCosts: string;
    lowerCostsDesc: string;
    happierStaff: string;
    happierStaffDesc: string;
    delightedCustomers: string;
    delightedCustomersDesc: string;
  };
  weatherImpact: {
    title: string;
    description: string;
    rainyday: string;
    hotdrinks: string;
    sunnyafternoon: string;
    outdoorseating: string;
  };
  advancedAnalytics: {
    title: string;
    description: string;
    realTime: string;
    decisionSupport: string;
    sentiment: string;
    clustering: string;
    customer: string;
    satisfaction: string;
  };
  regionalAdaptations: {
    US: { description: string; features: string[] };
    EU: { description: string; features: string[] };
    LATAM: { description: string; features: string[] };
    APAC: { description: string; features: string[] };
  };
  benefits: {
    costSavings: string;
    costSavingsDesc: string;
    enhancedExperience: string;
    enhancedExperienceDesc: string;
    globalCompliance: string;
    globalComplianceDesc: string;
  };
  cta: {
    requestDemo: string;
    learnMore: string;
  };
}
