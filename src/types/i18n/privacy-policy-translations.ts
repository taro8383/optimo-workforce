export interface PrivacyPolicyTranslations {
  hero: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    effectiveDate: string;
    dateValue: string;
  };
  summary: {
    title: string;
    subtitle: string;
    cards: {
      noSelling: {
        title: string;
        description: string;
      };
      encryption: {
        title: string;
        description: string;
      };
      rights: {
        title: string;
        description: string;
      };
      compliance: {
        title: string;
        description: string;
      };
    };
  };
  tabs: {
    policy: string;
    rights: string;
    cookies: string;
    contact: string;
  };
  policy: {
    notice: {
      title: string;
      text: string;
    };
    sections: {
      overview: {
        title: string;
        content: string;
      };
      informationCollection: {
        title: string;
        content: string;
      };
      informationUse: {
        title: string;
        content: string;
      };
      informationSharing: {
        title: string;
        content: string;
      };
      dataSecurity: {
        title: string;
        content: string;
      };
      dataRetention: {
        title: string;
        content: string;
      };
      internationalTransfers: {
        title: string;
        content: string;
      };
      childrenPrivacy: {
        title: string;
        content: string;
      };
      policyChanges: {
        title: string;
        content: string;
      };
    };
  };
  rights: {
    title: string;
    subtitle: string;
    helpTitle: string;
    helpText: string;
    contactButton: string;
    exerciseButton: string;
    availableActions: string;
    rightsList: Array<{
      title: string;
      description: string;
      actions: string[];
    }>;
  };
  cookies: {
    title: string;
    subtitle: string;
    whatAreCookies: {
      title: string;
      text: string;
    };
    categories: Array<{
      name: string;
      description: string;
      examples: string[];
      required: boolean;
      retention: string;
    }>;
    management: {
      title: string;
      browserSettings: {
        title: string;
        description: string;
      };
      privacyControls: {
        title: string;
        description: string;
      };
      cookieReport: {
        title: string;
        description: string;
      };
    };
    manageSettings: string;
    optional: string;
    required: string;
    retentionPeriod: string;
  };
  contact: {
    title: string;
    subtitle: string;
    contacts: Array<{
      title: string;
      email: string;
      description: string;
    }>;
    companyInfo: {
      title: string;
      headquarters: {
        title: string;
        name: string;
        address: string;
        city: string;
        country: string;
      };
      euRepresentative: {
        title: string;
        name: string;
        address: string;
        city: string;
        country: string;
      };
    };
    responseCommitments: {
      title: string;
      initialResponse: {
        time: string;
        label: string;
      };
      fullResolution: {
        time: string;
        label: string;
      };
      breachNotification: {
        time: string;
        label: string;
      };
    };
  };
  downloads: {
    title: string;
    subtitle: string;
    documents: Array<{
      title: string;
      description: string;
      button: string;
    }>;
  };
  common: {
    download: string;
    contact: string;
    exercise: string;
    examples: string;
    actions: string;
  };
}
