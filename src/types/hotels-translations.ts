interface HotelTranslationStats {
  manualShifts: string;
  laborCosts: string;
  schedulingTime: string;
}

interface HotelTranslationCTA {
  demo: string;
  howItWorks: string;
  title: string;
  subtitle: string;
  buttons: {
    demo: string;
    learnMore: string;
  };
  stats: {
    manualShifts: string;
    timeReduction: string;
    laborImpact: string;
    aiOptimization: string;
  };
}

interface HotelTranslationHero {
  title: string;
  subtitle: string;
  intelligenceTitle?: string;
  cta: HotelTranslationCTA;
  stats: HotelTranslationStats;
  industryStats?: {
    manualShifts: string;
    laborCosts: string;
    schedulingTime: string;
  };
}

interface HotelTranslationBenefit {
  title: string;
  description: string;
}

interface HotelTranslationTechBenefit {
  title: string;
  subtitle: string;
  items: {
    lowerCosts: string;
    boostSatisfaction: string;
    growRevenue: string;
    costDescription: string;
    satisfactionDescription: string;
    revenueDescription: string;
  };
}

interface HotelTranslationProblemStatement {
  title: string;
  subtitle: string;
  benefits: {
    reduceDowntime: HotelTranslationBenefit;
    improveProductivity: HotelTranslationBenefit;
    minimizeDisruptions: HotelTranslationBenefit;
  };
  techBenefits: HotelTranslationTechBenefit;
}

interface HotelTranslationSignal {
  title: string;
  description: string;
}

interface HotelTranslationAnalytics {
  title: string;
  subtitle: string;
  items: {
    realTime: string;
    sentiment: string;
    predictive: string;
    decisionMaking: string;
    analysis: string;
    insights: string;
  };
}

interface HotelTranslationDemandSignals {
  title: string;
  subtitle: string;
  signals: {
    weather: HotelTranslationSignal;
    events: HotelTranslationSignal;
    data: HotelTranslationSignal;
  };
  analytics: HotelTranslationAnalytics;
}

interface HotelTranslationOutput {
  title: string;
  description: string;
  features: string[];
}

interface HotelTranslationImpactExample {
  title: string;
  description: string;
}

interface HotelTranslationCoreOutputs {
  title: string;
  subtitle: string;
  outputs: {
    shiftPlans: HotelTranslationOutput;
    dashboards: HotelTranslationOutput;
  };
  impactExamples: {
    title: string;
    examples: {
      barcelo: HotelTranslationImpactExample;
      havas: HotelTranslationImpactExample;
    };
  };
}

interface HotelTranslationRegion {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface HotelTranslationRegionalAdaptations {
  title: string;
  subtitle: string;
  regions: {
    US: HotelTranslationRegion;
    EU: HotelTranslationRegion;
    LATAM: HotelTranslationRegion;
    APAC: HotelTranslationRegion;
  };
  regionNames: {
    US: string;
    EU: string;
    LATAM: string;
    APAC: string;
  };
}

interface HotelTranslationCTAStats {
  manualShifts: string;
  timeReduction: string;
  laborImpact: string;
  aiOptimization: string;
}

interface HotelTranslationCTAButtons {
  demo: string;
  learnMore: string;
}

interface HotelTranslationCTA {
  title: string;
  subtitle: string;
  buttons: HotelTranslationCTAButtons;
  stats: HotelTranslationCTAStats;
}

export interface HotelTranslations {
  hero: HotelTranslationHero;
  problemStatement: HotelTranslationProblemStatement;
  demandSignals: HotelTranslationDemandSignals;
  coreOutputs: HotelTranslationCoreOutputs;
  regionalAdaptations: HotelTranslationRegionalAdaptations;
  cta: HotelTranslationCTA;
}
