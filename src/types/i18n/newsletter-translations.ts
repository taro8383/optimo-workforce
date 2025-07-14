export interface NewsletterTranslations {
  hero: {
    title: string;
    subtitle: string;
    subscribeNow: string;
    viewSampleIssue: string;
    monthlyInsights: string;
    laborOptimizationReport: string;
    regionalComplianceUpdates: string;
    aiFeaturePreviews: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    exclusiveWhitepapers: {
      title: string;
      description: string;
    };
    regionalLaborLawUpdates: {
      title: string;
      description: string;
    };
    earlyFeatureAccess: {
      title: string;
      description: string;
    };
  };
  signup: {
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      emailAddress: string;
      emailPlaceholder: string;
      region: string;
      regionPlaceholder: string;
      industry: string;
      industryPlaceholder: string;
    };
    submitButton: string;
    privacy: {
      gdprCompliant: string;
      oneClickUnsubscribe: string;
    };
    success: {
      title: string;
      message: string;
      subscribeAnotherEmail: string;
    };
  };
  contentPreview: {
    title: string;
    subtitle: string;
    issues: {
      december2024: {
        date: string;
        title: string;
        description: string;
        pages: string;
        downloads: string;
      };
      november2024: {
        date: string;
        title: string;
        description: string;
        pages: string;
        downloads: string;
      };
    };
    downloadExcerpt: string;
    cta: string;
  };
  finalCTA: {
    title: string;
    subtitle: string;
    subscribeNow: string;
    viewAllPastIssues: string;
    stats: {
      subscribers: string;
      monthlyIssues: string;
      languages: string;
      forever: string;
    };
  };
  regions: string[];
  industries: string[];
}
