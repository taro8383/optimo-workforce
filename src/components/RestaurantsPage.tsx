import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Brain, 
  Calendar, 
  BarChart3, 
  Users, 
  DollarSign, 
  Cloud, 
  Smartphone, 
  Shield, 
  TrendingUp,
  Clock,
  MapPin,
  Zap,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const RestaurantsPage: React.FC = () => {
  const { t } = useTranslation('restaurants');
  const [activeRegion, setActiveRegion] = useState('US');

  const demandSignals = [
    {
      icon: MapPin,
      title: t('demandSignals.signals.GooglePopularTimes.title'),
      description: t('demandSignals.signals.GooglePopularTimes.description'),
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: t('demandSignals.signals.EventbriteIntegration.title'),
      description: t('demandSignals.signals.EventbriteIntegration.description'),
      color: 'text-purple-500'
    },
    {
      icon: Cloud,
      title: t('demandSignals.signals.WeatherAPIs.title'),
      description: t('demandSignals.signals.WeatherAPIs.description'),
      color: 'text-cyan-500'
    }
  ];

  const coreFeatures = [
    {
      icon: Target,
      title: t('coreFeatures.features.AccurateStaffingForecasts.title'),
      description: t('coreFeatures.features.AccurateStaffingForecasts.description')
    },
    {
      icon: Clock,
      title: t('coreFeatures.features.MomentbyMomentDemand.title'),
      description: t('coreFeatures.features.MomentbyMomentDemand.description')
    },
    {
      icon: Zap,
      title: t('coreFeatures.features.OneClickAutomation.title'),
      description: t('coreFeatures.features.OneClickAutomation.description')
    },
    {
      icon: BarChart3,
      title: t('coreFeatures.features.UserFriendlyDashboards.title'),
      description: t('coreFeatures.features.UserFriendlyDashboards.description')
    },
    {
      icon: DollarSign,
      title: t('coreFeatures.features.CostContainment.title'),
      description: t('coreFeatures.features.CostContainment.description')
    },
    {
      icon: Users,
      title: t('coreFeatures.features.SmartDataIntegration.title'),
      description: t('coreFeatures.features.SmartDataIntegration.description')
    }
  ];

  const regionalAdaptations = {
    US: {
      title: t('regionalAdaptations.regions.US.title'),
      subtitle: t('regionalAdaptations.regions.US.subtitle'),
      description: t('regionalAdaptations.regions.US.description'),
      features: [
        t('regionalAdaptations.regions.US.features.0'),
        t('regionalAdaptations.regions.US.features.1'),
        t('regionalAdaptations.regions.US.features.2'),
        t('regionalAdaptations.regions.US.features.3')
      ],
      color: 'bg-blue-500',
      icon: DollarSign
    },
    EU: {
      title: t('regionalAdaptations.regions.EU.title'),
      subtitle: t('regionalAdaptations.regions.EU.subtitle'),
      description: t('regionalAdaptations.regions.EU.description'),
      features: [
        t('regionalAdaptations.regions.EU.features.0'),
        t('regionalAdaptations.regions.EU.features.1'),
        t('regionalAdaptations.regions.EU.features.2'),
        t('regionalAdaptations.regions.EU.features.3')
      ],
      color: 'bg-green-500',
      icon: Shield
    },
    LATAM: {
      title: t('regionalAdaptations.regions.LATAM.title'),
      subtitle: t('regionalAdaptations.regions.LATAM.subtitle'),
      description: t('regionalAdaptations.regions.LATAM.description'),
      features: [
        t('regionalAdaptations.regions.LATAM.features.0'),
        t('regionalAdaptations.regions.LATAM.features.1'),
        t('regionalAdaptations.regions.LATAM.features.2'),
        t('regionalAdaptations.regions.LATAM.features.3')
      ],
      color: 'bg-orange-500',
      icon: TrendingUp
    },
    APAC: {
      title: t('regionalAdaptations.regions.APAC.title'),
      subtitle: t('regionalAdaptations.regions.APAC.subtitle'),
      description: t('regionalAdaptations.regions.APAC.description'),
      features: [
        t('regionalAdaptations.regions.APAC.features.0'),
        t('regionalAdaptations.regions.APAC.features.1'),
        t('regionalAdaptations.regions.APAC.features.2'),
        t('regionalAdaptations.regions.APAC.features.3')
      ],
      color: 'bg-yellow-500',
      icon: Smartphone
    }
  };

  const outputs = [
    {
      title: t('outputs.items.OptimizedShiftPlans.title'),
      description: t('outputs.items.OptimizedShiftPlans.description'),
      metrics: [
        t('outputs.items.OptimizedShiftPlans.metrics.0'),
        t('outputs.items.OptimizedShiftPlans.metrics.1'),
        t('outputs.items.OptimizedShiftPlans.metrics.2')
      ],
      color: 'bg-primary'
    },
    {
      title: t('outputs.items.LaborCostDashboards.title'),
      description: t('outputs.items.LaborCostDashboards.description'),
      metrics: [
        t('outputs.items.LaborCostDashboards.metrics.0'),
        t('outputs.items.LaborCostDashboards.metrics.1'),
        t('outputs.items.LaborCostDashboards.metrics.2')
      ],
      color: 'bg-secondary'
    },
    {
      title: t('outputs.items.RevenueAnalytics.title'),
      description: t('outputs.items.RevenueAnalytics.description'),
      metrics: [
        t('outputs.items.RevenueAnalytics.metrics.0'),
        t('outputs.items.RevenueAnalytics.metrics.1'),
        t('outputs.items.RevenueAnalytics.metrics.2')
      ],
      color: 'bg-accent-latam'
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
                  {t('hero.buttons.trial')}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  {t('hero.buttons.demo')}
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Brain size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('hero.aiPoweredIntelligence')}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">23%</div>
                    <div className="text-sm opacity-90">{t('hero.metrics.costSavings')}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-apac mb-1">24/7</div>
                    <div className="text-sm opacity-90">{t('hero.metrics.demandMonitoring')}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-latam mb-1">1-Click</div>
                    <div className="text-sm opacity-90">{t('hero.metrics.scheduleGeneration')}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Global</div>
                    <div className="text-sm opacity-90">{t('hero.metrics.regionalAdaptation')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('coreFeatures.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('coreFeatures.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary bg-opacity-10 mb-6">
                      <Icon size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demand Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('demandSignals.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('demandSignals.subtitle')}
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
        </div>
      </section>

      {/* Outputs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('outputs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('outputs.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {outputs.map((output, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className={`w-full h-4 ${output.color} rounded-full mb-6`}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{output.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                <div className="space-y-3">
                  {output.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-secondary" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              const Icon = adaptation.icon;
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Brain size={24} />
              {t('cta.buttons.trial')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              {t('cta.buttons.demo')}
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">{t('cta.metrics.restaurants')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">23%</div>
              <div className="text-blue-200">{t('cta.metrics.costReduction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-200">{t('cta.metrics.regions')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">{t('cta.metrics.monitoring')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;
