export interface TermsOfServiceTranslations {
  hero: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    effectiveDate: string;
  };
  keyPoints: {
    title: string;
    subtitle: string;
    fairUsage: {
      title: string;
      description: string;
    };
    transparentBilling: {
      title: string;
      description: string;
    };
    dataProtection: {
      title: string;
      description: string;
    };
    fairResolution: {
      title: string;
      description: string;
    };
  };
  tabs: {
    terms: string;
    acceptableUse: string;
    billing: string;
    contact: string;
  };
  terms: {
    importantNotice: {
      title: string;
      description: string;
    };
    sections: {
      overview: {
        title: string;
        content: string;
      };
      definitions: {
        title: string;
        account: string;
        content: string;
        customerData: string;
        documentation: string;
        intellectualPropertyRights: string;
        services: string;
        subscription: string;
        user: string;
      };
      accountRegistration: {
        title: string;
        accountCreation: {
          title: string;
          points: string[];
        };
        accountSecurity: {
          title: string;
          points: string[];
        };
        accountInformation: {
          title: string;
          points: string[];
        };
        accountTermination: {
          title: string;
          points: string[];
        };
      };
      serviceDescription: {
        title: string;
        serviceOverview: {
          title: string;
          points: string[];
        };
        serviceAvailability: {
          title: string;
          points: string[];
        };
        serviceModifications: {
          title: string;
          points: string[];
        };
        betaFeatures: {
          title: string;
          points: string[];
        };
      };
      subscriptionBilling: {
        title: string;
        subscriptionPlans: {
          title: string;
          points: string[];
        };
        billingAndPayment: {
          title: string;
          points: string[];
        };
        priceChanges: {
          title: string;
          points: string[];
        };
        refundsAndCancellations: {
          title: string;
          points: string[];
        };
      };
      dataPrivacy: {
        title: string;
        dataCollectionAndUse: {
          title: string;
          points: string[];
        };
        dataSecurity: {
          title: string;
          points: string[];
        };
        dataLocationAndTransfers: {
          title: string;
          points: string[];
        };
        dataRetentionAndDeletion: {
          title: string;
          points: string[];
        };
      };
      intellectualProperty: {
        title: string;
        ourIntellectualProperty: {
          title: string;
          points: string[];
        };
        yourContentAndData: {
          title: string;
          points: string[];
        };
        thirdPartyContent: {
          title: string;
          points: string[];
        };
        copyrightProtection: {
          title: string;
          points: string[];
        };
      };
      prohibitedUses: {
        title: string;
        prohibitedActivities: {
          title: string;
          points: string[];
        };
        contentRestrictions: {
          title: string;
          points: string[];
        };
        systemAbuse: {
          title: string;
          points: string[];
        };
        complianceRequirements: {
          title: string;
          points: string[];
        };
      };
      warrantiesDisclaimers: {
        title: string;
        limitedWarranty: {
          title: string;
          points: string[];
        };
        disclaimers: {
          title: string;
          points: string[];
        };
        thirdPartyServices: {
          title: string;
          points: string[];
        };
        dataAccuracy: {
          title: string;
          points: string[];
        };
      };
      limitationLiability: {
        title: string;
        liabilityLimitations: {
          title: string;
          points: string[];
        };
        excludedDamages: {
          title: string;
          points: string[];
        };
        exceptionsToLimitations: {
          title: string;
          points: string[];
        };
        forceMajeure: {
          title: string;
          points: string[];
        };
      };
      indemnification: {
        title: string;
        ourIndemnification: {
          title: string;
          points: string[];
        };
        yourIndemnification: {
          title: string;
          points: string[];
        };
        indemnificationProcedures: {
          title: string;
          points: string[];
        };
        exclusions: {
          title: string;
          points: string[];
        };
      };
      termination: {
        title: string;
        terminationByYou: {
          title: string;
          points: string[];
        };
        terminationByUs: {
          title: string;
          points: string[];
        };
        effectOfTermination: {
          title: string;
          points: string[];
        };
        suspension: {
          title: string;
          points: string[];
        };
      };
      governingLaw: {
        title: string;
        governingLaw: {
          title: string;
          points: string[];
        };
        disputeResolution: {
          title: string;
          points: string[];
        };
        exceptionsToArbitration: {
          title: string;
          points: string[];
        };
        legalProceedings: {
          title: string;
          points: string[];
        };
      };
    };
  };
  acceptableUse: {
    title: string;
    subtitle: string;
    policies: {
      lawfulUse: {
        title: string;
        description: string;
        violations: string[];
      };
      systemIntegrity: {
        title: string;
        description: string;
        violations: string[];
      };
      dataProtection: {
        title: string;
        description: string;
        violations: string[];
      };
      professionalConduct: {
        title: string;
        description: string;
        violations: string[];
      };
    };
    consequences: {
      title: string;
      warning: {
        title: string;
        description: string;
      };
      suspension: {
        title: string;
        description: string;
      };
      termination: {
        title: string;
        description: string;
      };
    };
  };
  billing: {
    title: string;
    subtitle: string;
    terms: {
      subscriptionFees: {
        title: string;
        description: string;
        details: string[];
      };
      paymentTerms: {
        title: string;
        description: string;
        details: string[];
      };
      refundPolicy: {
        title: string;
        description: string;
        details: string[];
      };
      priceChanges: {
        title: string;
        description: string;
        details: string[];
      };
    };
    pricingTiers: {
      title: string;
      starter: {
        title: string;
        price: string;
        period: string;
        description: string;
      };
      professional: {
        title: string;
        price: string;
        period: string;
        description: string;
      };
      enterprise: {
        title: string;
        price: string;
        description: string;
      };
    };
    paymentSecurity: {
      title: string;
      description: string;
      pciDss: string;
      pciDssLevel: string;
      sslEncryption: string;
      sslEncryptionDesc: string;
      fraudProtection: string;
      fraudProtectionDesc: string;
      monitoring: string;
      monitoringDesc: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    contacts: {
      legalDepartment: {
        title: string;
        email: string;
        description: string;
      };
      termsConditions: {
        title: string;
        email: string;
        description: string;
      };
      billingAccounts: {
        title: string;
        email: string;
        description: string;
      };
    };
    legalNotice: {
      title: string;
      registeredAddress: {
        title: string;
        company: string;
        address: string;
        city: string;
        country: string;
      };
      legalService: {
        title: string;
        description: string;
        email: string;
        mail: string;
        response: string;
      };
    };
    disputeResolution: {
      title: string;
      contact: {
        title: string;
        description: string;
      };
      mediation: {
        title: string;
        description: string;
      };
      arbitration: {
        title: string;
        description: string;
      };
    };
  };
  download: {
    title: string;
    subtitle: string;
    termsOfService: {
      title: string;
      description: string;
      button: string;
    };
    acceptableUse: {
      title: string;
      description: string;
      button: string;
    };
    serviceAgreement: {
      title: string;
      description: string;
      button: string;
    };
  };
}
