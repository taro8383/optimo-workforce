export interface ContactTranslations {
  heroSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    buttons: {
      scheduleDemo: string;
      startLiveChat: string;
    };
  };
  supportOptions: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    cards: {
      liveChat: {
        title: string;
        description: string;
        action: string;
        availability: string;
      };
      videoCall: {
        title: string;
        description: string;
        action: string;
        availability: string;
      };
      phoneSupport: {
        title: string;
        description: string;
        action: string;
        availability: string;
      };
      helpCenter: {
        title: string;
        description: string;
        action: string;
        availability: string;
      };
    };
  };
  contactForm: {
    title: {
      mainHeading: string;
    };
    labels: {
      fullName: string;
      emailAddress: string;
      companyName: string;
      phoneNumber: string;
      businessType: string;
      locations: string;
      region: string;
      contactReason: string;
      message: string;
    };
    options: {
      businessTypes: {
        restaurant: string;
        hotel: string;
        cafe: string;
        other: string;
      };
      regions: {
        unitedStates: string;
        eu: string;
        latam: string;
        apac: string;
        other: string;
      };
      contactReasons: {
        requestDemo: string;
        getPricing: string;
        technicalSupport: string;
        partnership: string;
        media: string;
        general: string;
      };
    };
    placeholders: {
      fullName: string;
      email: string;
      company: string;
      phone: string;
      locations: string;
      selectRegion: string;
      selectReason: string;
      message: string;
    };
    buttons: {
      sendMessage: string;
    };
    notes: {
      responseTime: string;
    };
    success: {
      title: string;
      message: string;
      button: string;
    };
  };
  globalOffices: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    offices: {
      barcelona: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
        timezone: string;
        hours: string;
      };
      newYork: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
        timezone: string;
        hours: string;
      };
      singapore: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
        timezone: string;
        hours: string;
      };
      saoPaulo: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
        timezone: string;
        hours: string;
      };
    };
  };
  socialMedia: {
    title: {
      mainHeading: string;
    };
    description: {
      text: string;
    };
  };
  emergencySupport: {
    title: {
      mainHeading: string;
    };
    description: {
      text: string;
    };
    buttons: {
      emergencyHotline: string;
      priorityChat: string;
    };
    stats: {
      responseTime: string;
      responseTimeValue: string;
      languages: string;
      languagesValue: string;
      emergencySupport: string;
      emergencySupportValue: string;
    };
  };
}
