export interface ROICalculatorTranslations {
  heroSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    buttons: {
      startCalculating: string;
      sampleReport: string;
    };
  };
  formSection: {
    title: {
      mainHeading: string;
    };
    labels: {
      businessType: string;
      region: string;
      locations: string;
      avgEmployees: string;
      avgHourlyWage: string;
      hoursPerWeek: string;
      schedulingHours: string;
      managerRate: string;
      turnoverRate: string;
      hiringCost: string;
    };
    businessTypes: {
      restaurant: string;
      hotel: string;
      cafe: string;
    };
    regions: {
      US: string;
      EU: string;
      LATAM: string;
      APAC: string;
    };
    regionSavings: string;
  };
  resultsSection: {
    title: {
      mainHeading: string;
    };
    metrics: {
      totalAnnualSavings: string;
      paybackPeriod: string;
      annualROI: string;
      fiveYearSavings: string;
    };
    breakdown: {
      title: string;
      laborOptimization: {
        title: string;
        description: string;
        currentCost: string;
        optimizedCost: string;
      };
      schedulingTime: {
        title: string;
        description: string;
        timeSaved: string;
        managerRate: string;
      };
      turnoverReduction: {
        title: string;
        description: string;
        currentRate: string;
        optimizedRate: string;
      };
    };
  };
  actionButtons: {
    sectionTitle: string;
    downloadReport: string;
    scheduleDemo: string;
    shareResults: string;
  };
  benchmarksSection: {
    title: string;
    categories: {
      turnover: {
        title: string;
        industry: string;
        withOptimo: string;
      };
      schedulingTime: {
        title: string;
        industry: string;
        withOptimo: string;
      };
      laborCost: {
        title: string;
        industry: string;
        withOptimo: string;
      };
    };
  };
  ctaSection: {
    title: string;
    subtitle: string;
    buttons: {
      startTrial: string;
      scheduleDemo: string;
    };
    features: {
      trialDays: string;
      setupTime: string;
      guaranteedSavings: string;
      support: string;
    };
    featureLabels: {
      trialDays: string;
      setupTime: string;
      guaranteedSavings: string;
      support: string;
    };
  };
  units: {
    months: string;
    hours: string;
    percent: string;
  };
}
