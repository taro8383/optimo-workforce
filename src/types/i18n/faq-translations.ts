export interface FaqTranslations {
  header: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  categories: {
    implementation: string;
    billing: string;
    security: string;
    globalFeatures: string;
  };
  faq: {
    implementation: {
      q1: FaqItemWithCalculator;
      q2: FaqItemWithPosSystems;
      q3: FaqItemBasic;
      q4: FaqItemBasic;
    };
    billing: {
      q1: FaqItemBasic;
      q2: FaqItemBasic;
      q3: FaqItemBasic;
      q4: FaqItemBasic;
    };
    security: {
      q1: FaqItemWithBadges;
      q2: FaqItemBasic;
      q3: FaqItemBasic;
      q4: FaqItemBasic;
    };
    globalFeatures: {
      q1: FaqItemBasic;
      q2: FaqItemBasic;
      q3: FaqItemBasic;
      q4: FaqItemBasic;
    };
  };
  support: {
    title: string;
    subtitle: string;
    chatButton: string;
    scheduleButton: string;
    stats: {
      supportAvailable: string;
      languagesSupported: string;
      averageResponse: string;
    };
  };
}

export interface FaqItemBasic {
  question: string;
  answer: string;
}

export interface FaqItemWithCalculator extends FaqItemBasic {
  calculator: {
    title: string;
    results: string;
    costReduction: string;
    days: string;
  };
}

export interface FaqItemWithPosSystems extends FaqItemBasic {
  posSystems: string[];
  moreAdded: string;
}

export interface FaqItemWithBadges extends FaqItemBasic {
  badges: string[];
}
