import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, Globe, Brain, Shield, Linkedin, Twitter } from 'lucide-react';
import { AboutTranslations } from '../types/i18n/about-translations';

interface AboutPageProps {
  translations?: AboutTranslations;
}

const AboutPage: React.FC<AboutPageProps> = ({ translations }) => {
  const { t } = useTranslation('components/about');
  
  // Use provided translations or fall back to t() function
  const tData = translations || {
    heroSection: {
      title: { mainHeading: t('heroSection.title.mainHeading') },
      subtitle: { description: t('heroSection.subtitle.description') },
      buttons: {
        joinMission: t('heroSection.buttons.joinMission'),
        openPositions: t('heroSection.buttons.openPositions')
      },
      teamPreview: {
        title: t('heroSection.teamPreview.title'),
        description: t('heroSection.teamPreview.description')
      }
    },
    timelineSection: {
      title: { mainHeading: t('timelineSection.title.mainHeading') },
      subtitle: { description: t('timelineSection.subtitle.description') },
      events: {
        '2024': {
          title: t('timelineSection.events.2024.title'),
          description: t('timelineSection.events.2024.description')
        },
        '2025': {
          title: t('timelineSection.events.2025.title'),
          description: t('timelineSection.events.2025.description')
        },
        '2026': {
          title: t('timelineSection.events.2026.title'),
          description: t('timelineSection.events.2026.description')
        }
      }
    },
    teamSection: {
      title: { mainHeading: t('teamSection.title.mainHeading') },
      subtitle: { description: t('teamSection.subtitle.description') },
      members: {
        alex: {
          name: t('teamSection.members.alex.name'),
          role: t('teamSection.members.alex.role'),
          description: t('teamSection.members.alex.description')
        },
        sarah: {
          name: t('teamSection.members.sarah.name'),
          role: t('teamSection.members.sarah.role'),
          description: t('teamSection.members.sarah.description')
        },
        marcus: {
          name: t('teamSection.members.marcus.name'),
          role: t('teamSection.members.marcus.role'),
          description: t('teamSection.members.marcus.description')
        },
        jenny: {
          name: t('teamSection.members.jenny.name'),
          role: t('teamSection.members.jenny.role'),
          description: t('teamSection.members.jenny.description')
        },
        david: {
          name: t('teamSection.members.david.name'),
          role: t('teamSection.members.david.role'),
          description: t('teamSection.members.david.description')
        },
        elena: {
          name: t('teamSection.members.elena.name'),
          role: t('teamSection.members.elena.role'),
          description: t('teamSection.members.elena.description')
        }
      }
    },
    valuesSection: {
      title: { mainHeading: t('valuesSection.title.mainHeading') },
      subtitle: { description: t('valuesSection.subtitle.description') },
      values: {
        global: {
          title: t('valuesSection.values.global.title'),
          description: t('valuesSection.values.global.description')
        },
        data: {
          title: t('valuesSection.values.data.title'),
          description: t('valuesSection.values.data.description')
        },
        ethical: {
          title: t('valuesSection.values.ethical.title'),
          description: t('valuesSection.values.ethical.description')
        }
      }
    },
    ctaSection: {
      title: { mainHeading: t('ctaSection.title.mainHeading') },
      subtitle: { description: t('ctaSection.subtitle.description') },
      buttons: {
        viewPositions: t('ctaSection.buttons.viewPositions'),
        partnerWithUs: t('ctaSection.buttons.partnerWithUs')
      },
      stats: {
        countries: t('ctaSection.stats.countries'),
        locations: t('ctaSection.stats.locations'),
        teamMembers: t('ctaSection.stats.teamMembers'),
        globalSupport: t('ctaSection.stats.globalSupport')
      }
    }
  };

  const timelineEvents = [
    {
      year: '2024',
      title: tData.timelineSection.events['2024'].title,
      description: tData.timelineSection.events['2024'].description,
      icon: MapPin,
      color: 'bg-primary'
    },
    {
      year: '2025',
      title: tData.timelineSection.events['2025'].title,
      description: tData.timelineSection.events['2025'].description,
      icon: Calendar,
      color: 'bg-secondary'
    },
    {
      year: '2026',
      title: tData.timelineSection.events['2026'].title,
      description: tData.timelineSection.events['2026'].description,
      icon: Globe,
      color: 'bg-accent-latam'
    }
  ];

  const teamMembers = [
    {
      name: tData.teamSection.members.alex.name,
      role: tData.teamSection.members.alex.role,
      description: tData.teamSection.members.alex.description,
      image: '/optimo-workforce/assets/Alex Rodriguez.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: tData.teamSection.members.sarah.name,
      role: tData.teamSection.members.sarah.role,
      description: tData.teamSection.members.sarah.description,
      image: '/optimo-workforce/assets/Sarah Peters.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: tData.teamSection.members.marcus.name,
      role: tData.teamSection.members.marcus.role,
      description: tData.teamSection.members.marcus.description,
      image: '/optimo-workforce/assets/Marcus Thompson.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: tData.teamSection.members.jenny.name,
      role: tData.teamSection.members.jenny.role,
      description: tData.teamSection.members.jenny.description,
      image: '/optimo-workforce/assets/Jenny Jones.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: tData.teamSection.members.david.name,
      role: tData.teamSection.members.david.role,
      description: tData.teamSection.members.david.description,
      image: '/optimo-workforce/assets/David Kimbrough.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: tData.teamSection.members.elena.name,
      role: tData.teamSection.members.elena.role,
      description: tData.teamSection.members.elena.description,
      image: '/optimo-workforce/assets/Elena Vasquez.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: tData.valuesSection.values.global.title,
      description: tData.valuesSection.values.global.description,
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: tData.valuesSection.values.data.title,
      description: tData.valuesSection.values.data.description,
      color: 'text-secondary'
    },
    {
      icon: Shield,
      title: tData.valuesSection.values.ethical.title,
      description: tData.valuesSection.values.ethical.description,
      color: 'text-accent-latam'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
                {tData.heroSection.title.mainHeading}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                {tData.heroSection.subtitle.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  {tData.heroSection.buttons.joinMission}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  {tData.heroSection.buttons.openPositions}
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{tData.heroSection.teamPreview.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {teamMembers.slice(0, 6).map((member, index) => (
                    <div key={index} className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-blue-100">{tData.heroSection.teamPreview.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {tData.timelineSection.title.mainHeading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tData.timelineSection.subtitle.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white`}>
                            <Icon size={24} />
                          </div>
                          <div className="text-3xl font-bold text-gray-900">{event.year}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-lg text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-8 h-8 bg-white border-4 border-primary rounded-full mx-auto lg:mx-0"></div>
                    
                    <div className="w-full lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {tData.teamSection.title.mainHeading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tData.teamSection.subtitle.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {tData.valuesSection.title.mainHeading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tData.valuesSection.subtitle.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6`}>
                    <Icon size={40} className={value.color} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            {tData.ctaSection.title.mainHeading}
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            {tData.ctaSection.subtitle.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              {tData.ctaSection.buttons.viewPositions}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              {tData.ctaSection.buttons.partnerWithUs}
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-200">{tData.ctaSection.stats.countries}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">{tData.ctaSection.stats.locations}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">{tData.ctaSection.stats.teamMembers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">{tData.ctaSection.stats.globalSupport}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
