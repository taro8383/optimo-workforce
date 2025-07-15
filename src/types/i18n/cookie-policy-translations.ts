export interface CookiePolicyTranslations {
  hero: {
    title: string;
    description: string;
    lastUpdated: string;
    effectiveDate: string;
  };
  summary: {
    title: string;
    subtitle: string;
    essential: {
      title: string;
      description: string;
    };
    performance: {
      title: string;
      description: string;
    };
    functional: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
  };
  tabs: {
    policy: string;
    preferences: string;
    types: string;
    contact: string;
  };
  consentNotice: {
    title: string;
    description: string;
  };
  sections: {
    overview: {
      title: string;
      content: string;
    };
    typesWeUse: {
      title: string;
      content: string;
    };
    howWeUse: {
      title: string;
      content: string;
    };
    thirdParty: {
      title: string;
      content: string;
    };
    cookieDuration: {
      title: string;
      content: string;
    };
    managingCookies: {
      title: string;
      content: string;
    };
    legalBasis: {
      title: string;
      content: string;
    };
    updatesChanges: {
      title: string;
      content: string;
    };
  };
  preferences: {
    title: string;
    subtitle: string;
    saveTitle: string;
    saveDescription: string;
    resetButton: string;
    saveButton: string;
    required: string;
    alwaysActive: string;
  };
  cookieTypes: {
    title: string;
    subtitle: string;
    browserManagement: {
      title: string;
      desktop: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      privacy: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    privacyTeam: {
      title: string;
      email: string;
      description: string;
    };
    dpo: {
      title: string;
      email: string;
      description: string;
    };
    support: {
      title: string;
      email: string;
      description: string;
    };
    faq: {
      title: string;
      question1: string;
      answer1: string;
      question2: string;
      answer2: string;
      question3: string;
      answer3: string;
      question4: string;
      answer4: string;
    };
  };
  downloads: {
    title: string;
    subtitle: string;
    policy: {
      title: string;
      description: string;
      button: string;
    };
    inventory: {
      title: string;
      description: string;
      button: string;
    };
    guide: {
      title: string;
      description: string;
      button: string;
    };
  };
  cookieCategories: {
    essential: {
      title: string;
      description: string;
      examples: Array<{
        name: string;
        purpose: string;
        duration: string;
      }>;
    };
    performance: {
      title: string;
      description: string;
      examples: Array<{
        name: string;
        purpose: string;
        duration: string;
      }>;
    };
    functional: {
      title: string;
      description: string;
      examples: Array<{
        name: string;
        purpose: string;
        duration: string;
      }>;
    };
    marketing: {
      title: string;
      description: string;
      examples: Array<{
        name: string;
        purpose: string;
        duration: string;
      }>;
    };
  };
}
