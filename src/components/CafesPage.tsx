import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cafeTranslations from '../locales/en/cafe.json';
import { 
  Coffee, 
  Calendar, 
  DollarSign, 
  Globe, 
  Cloud, 
  Smartphone, 
  Shield, 
  TrendingUp,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare,
  Sun,
  Umbrella
} from 'lucide-react';

// Validation function from i18n-best-practices.md
const validateTranslations = (translations: any, namespace: string) => {
  const missingKeys: string[] = [];
  const checkObject = (obj: any, path: string = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const fullPath = path ? `${path}.${key}` : key;
      if (typeof value === 'object') {
        checkObject(value, fullPath);
      } else if (!translations[fullPath]) {
        missingKeys.push(fullPath);
      }
    });
  };
  checkObject(translations);
  
  if (missingKeys.length > 0) {
    console.warn(`Missing translations in ${namespace}:`, missingKeys);
  }
};

const CafesPage: React.FC = () => {
  const { t } = useTranslation('cafe');
  const [activeRegion, setActiveRegion] = useState('US');

  // Validate translations on component mount
  useEffect(() => {
    validateTranslations(cafeTranslations, 'cafe');
  }, []);

  const demandSignals = React.useMemo(() => [
    {
      icon: Cloud,
      title: t('features.demandSignals.items.0.title') || t('features.demandSignals.0.title'),
      description: t('features.demandSignals.items.0.description') || t('features.demandSignals.0.description'),
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: t('features.demandSignals.items.1.title') || t('features.demandSignals.1.title'),
      description: t('features.demandSignals.items.1.description') || t('features.demandSignals.1.description'),
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      title: t('features.demandSignals.items.2.title') || t('features.demandSignals.2.title'),
      description: t('features.demandSignals.items.2.description') || t('features.demandSignals.2.description'),
      color: 'text-green-500'
    }
  ], [t]);

  const coreOutcomes = (t('coreOutcomes.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    features: string[];
    color: string;
    progress: number;
  }>).map((outcome, index) => ({
    ...outcome,
    // Add color and progress from original implementation
    color: index === 0 ? "bg-primary" : "bg-secondary",
    progress: index === 0 ? 88 : 94
  }));

  const regionalAdaptations = (t('regionalAdaptations.regions', { returnObjects: true }) as Record<string, {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    color: string;
  }>);
  
  const regionIcons = {
    US: DollarSign,
    EU: Shield,
    LATAM: TrendingUp,
    APAC: Smartphone
  };

  const industryStats = [
    {
      stat: '69%',
      descriptionKey: 'manualShifts',
      color: 'text-red-500',
      icon: Clock
    },
    {
      stat: '40%',
      descriptionKey: 'laborCosts',
      color: 'text-orange-500',
      icon: DollarSign
    },
    {
      stat: '85%',
      descriptionKey: 'fasterScheduling',
      color: 'text-green-500',
      icon: Zap
    }
  ];

  const weatherScenarios = [
    {
      weather: t('weatherImpact.examples.rainyDay'),
      icon: Umbrella,
      impact: t('weatherImpact.examples.hotDrinks'),
      color: 'bg-blue-100 text-blue-700'
    },
    {
      weather: t('weatherImpact.examples.sunnyAfternoon'),
      icon: Sun,
      impact: t('weatherImpact.examples.outdoorSeating'),
      color: 'bg-yellow-100 text-yellow-700'
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
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  {t('hero.ctaText')}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  {t('hero.secondaryCta')}
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Coffee size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('hero.intelligenceTitle')}</h3>
                </div>
                
                <div className="space-y-4">
                  {industryStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon size={24} className={stat.color} />
                          <div className={`text-2xl font-bold ${stat.color}`}>{stat.stat}</div>
                        </div>
                        <div className="text-sm opacity-90 text-right flex-1 ml-4">
                          {t(`hero.stats.${stat.descriptionKey}`)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('problemSolution.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('problemSolution.problemText')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Clock size={40} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.downtimeDesc')}</h3>
              <p className="text-gray-600">{t('features.downtimeDetails')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <TrendingUp size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.productivityDesc')}</h3>
              <p className="text-gray-600">{t('features.productivityDetails')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <Shield size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.disruptionsDesc')}</h3>
              <p className="text-gray-600">{t('features.disruptionsDetails')}</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('features.performanceTitle')}</h3>
              <p className="text-lg text-gray-600">{t('features.performanceDetails')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {t('performanceMetrics.lowerCosts')}
                </div>
                <div className="text-gray-600">
                  {t('performanceMetrics.lowerCostsDesc')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {t('performanceMetrics.happierStaff')}
                </div>
                <div className="text-gray-600">
                  {t('performanceMetrics.happierStaffDesc')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-latam mb-2">
                  {t('performanceMetrics.delightedCustomers')}
                </div>
                <div className="text-gray-600">
                  {t('performanceMetrics.delightedCustomersDesc')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('features.demandSignals.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.demandSignals.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {demandSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon size={32} className={signal.color} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{signal.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{signal.description}</p>
                </div>
              );
            })}
          </div>

          {/* Weather Impact Examples */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8">
            <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('weatherImpact.title')}</h3>
            <p className="text-lg text-gray-600">{t('weatherImpact.description')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {weatherScenarios.map((scenario, index) => {
                const Icon = scenario.icon;
                return (
                  <div key={index} className={`${scenario.color} rounded-lg p-6 text-center`}>
                    <Icon size={48} className="mx-auto mb-4" />
                    <div className="text-xl font-bold mb-2">{scenario.weather}</div>
                    <div className="text-lg font-semibold">{scenario.impact}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t('advancedAnalytics.title')}</h3>
            <p className="text-lg text-blue-100 mb-6">
              {t('advancedAnalytics.description')}
            </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('advancedAnalytics.feature1.title')}</div>
                  <div className="text-sm opacity-90">{t('advancedAnalytics.feature1.description')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('advancedAnalytics.feature2.title')}</div>
                  <div className="text-sm opacity-90">{t('advancedAnalytics.feature2.description')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('advancedAnalytics.feature3.title')}</div>
                  <div className="text-sm opacity-90">{t('advancedAnalytics.feature3.description')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Outcomes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('coreOutcomes.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('coreOutcomes.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{outcome.title}</h3>
                    <div className="text-2xl font-bold text-primary">{outcome.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full ${outcome.color}`} 
                      style={{width: `${outcome.progress}%`}}
                    ></div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{outcome.description}</p>
                </div>
                
                <div className="space-y-3">
                  {outcome.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('employeeSatisfaction.title')}</h3>
              <p className="text-lg text-gray-600">{t('employeeSatisfaction.description')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{t('employeeSatisfaction.stats.flexible')}</div>
                <div className="text-gray-600">{t('employeeSatisfaction.stats.schedulingOptions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{t('employeeSatisfaction.stats.easy')}</div>
                <div className="text-gray-600">{t('employeeSatisfaction.stats.shiftSwapping')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-latam mb-2">{t('employeeSatisfaction.stats.higher')}</div>
                <div className="text-gray-600">{t('employeeSatisfaction.stats.retentionRates')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Adaptations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('regionalAdaptations.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('regionalAdaptations.subtitle')}
            </p>
          </div>

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(regionalAdaptations).map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeRegion === region
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Active Region Content */}
          <div className="max-w-4xl mx-auto">
            {Object.entries(regionalAdaptations).map(([region, adaptation]) => {
              const Icon = regionIcons[region as keyof typeof regionIcons];
              return (
                activeRegion === region && (
                  <div key={region} className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 ${adaptation.color} rounded-full flex items-center justify-center text-white`}>
                            <Icon size={32} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{adaptation.title}</h3>
                            <p className="text-lg text-gray-600">{adaptation.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">{adaptation.description}</p>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {t('regionalAdaptations.keyFeatures')}
                        </h4>
                        <div className="space-y-3">
                          {adaptation.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Summary Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary bg-opacity-10 mb-6">
                  <DollarSign size={40} className="text-secondary" />
                </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {t('benefits.items.costSavings.title', 'Cost Savings')}
                              </h3>
                              <p className="text-gray-600">
                                {t('benefits.items.costSavings.description', 'Reduce labor costs by up to 30% through optimized scheduling')}
                              </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary bg-opacity-10 mb-6">
                  <Star size={40} className="text-primary" />
                </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {t('benefits.items.enhancedExperience.title', 'Enhanced Guest Experience')}
                              </h3>
                              <p className="text-gray-600">
                                {t('benefits.items.enhancedExperience.description', 'Consistent staffing ensures better service quality')}
                              </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                  <Globe size={40} className="text-accent-latam" />
                </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {t('benefits.items.globalCompliance.title', 'Global Compliance')}
                              </h3>
                              <p className="text-gray-600">
                                {t('benefits.items.globalCompliance.description', 'Automatically adhere to regional labor laws')}
                              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
              {t('finalCTA.title')}
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
              {t('finalCTA.subtitle')}
            </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Coffee size={24} />
              {t('hero.ctaText')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              {t('hero.secondaryCta')}
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">69%</div>
              <div className="text-blue-200">{t('hero.stats.manualShifts')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-200">{t('hero.stats.laborCosts')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-blue-200">{t('hero.stats.fasterScheduling')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">{t('hero.stats.aiOptimization')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CafesPage;
