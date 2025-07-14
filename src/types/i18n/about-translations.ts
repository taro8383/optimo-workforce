export interface AboutTranslations {
  heroSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    buttons: {
      joinMission: string;
      openPositions: string;
    };
    teamPreview: {
      title: string;
      description: string;
    };
  };
  timelineSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    events: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  teamSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    members: {
      [key: string]: {
        name: string;
        role: string;
        description: string;
      };
    };
  };
  valuesSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    values: {
      global: {
        title: string;
        description: string;
      };
      data: {
        title: string;
        description: string;
      };
      ethical: {
        title: string;
        description: string;
      };
    };
  };
  ctaSection: {
    title: {
      mainHeading: string;
    };
    subtitle: {
      description: string;
    };
    buttons: {
      viewPositions: string;
      partnerWithUs: string;
    };
    stats: {
      countries: string;
      locations: string;
      teamMembers: string;
      globalSupport: string;
    };
  };
}
