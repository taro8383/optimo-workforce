import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Calendar, 
  BarChart3, 
  DollarSign, 
  Cloud, 
  Smartphone, 
  Shield, 
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare
} from 'lucide-react';

const HotelsPage: React.FC = () => {
  const { t } = useTranslation('hotels');
  const [activeRegion, setActiveRegion] = useState('US');

  const demandSignals = [
    {
      icon: Cloud,
      title: t('demandSignals.signals.weather.title'),
      description: t('demandSignals.signals.weather.description'),
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: t('demandSignals.signals.events.title'),
      description: t('demandSignals.signals.events.description'),
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      title: t('demandSignals.signals.data.title'),
      description: t('demandSignals.signals.data.description'),
      color: 'text-green-500'
    }
  ];

  const coreOutputs = [
    {
      title: t('coreOutputs.outputs.shiftPlans.title'),
      description: t('coreOutputs.outputs.shiftPlans.description'),
      features: [
        t('coreOutputs.outputs.shiftPlans.features.0'),
        t('coreOutputs.outputs.shiftPlans.features.1'),
        t('coreOutputs.outputs.shiftPlans.features.2'),
        t('coreOutputs.outputs.shiftPlans.features.3')
      ],
      color: 'bg-primary',
      progress: 85
    },
    {
      title: t('coreOutputs.outputs.dashboards.title'),
      description: t('coreOutputs.outputs.dashboards.description'),
      features: [
        t('coreOutputs.outputs.dashboards.features.0'),
        t('coreOutputs.outputs.dashboards.features.1'),
        t('coreOutputs.outputs.dashboards.features.2'),
        t('coreOutputs.outputs.dashboards.features.3')
      ],
      color: 'bg-secondary',
      progress: 92
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

  const industryStats = [
    {
      stat: '73%',
      description: t('hero.stats.manualShifts'),
      color: 'text-red-500'
    },
    {
      stat: '23%',
      description: t('hero.stats.laborCosts'),
      color: 'text-orange-500'
    },
    {
      stat: '85%',
      description: t('hero.stats.schedulingTime'),
      color: 'text-green-500'
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
                  {t('hero.cta.demo')}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  {t('hero.cta.howItWorks')}
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Building2 size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('hero.aiPoweredIntelligence')}</h3>
                </div>
                
                <div className="space-y-4">
                  {industryStats.map((stat, index) => (
                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.stat}</div>
                      <div className="text-sm opacity-90 text-right flex-1 ml-4">{stat.description}</div>
                    </div>
                  ))}
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
              {t('problemStatement.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('problemStatement.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Clock size={40} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemStatement.benefits.reduceDowntime.title')}</h3>
              <p className="text-gray-600">{t('problemStatement.benefits.reduceDowntime.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <TrendingUp size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemStatement.benefits.improveProductivity.title')}</h3>
              <p className="text-gray-600">{t('problemStatement.benefits.improveProductivity.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <Shield size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemStatement.benefits.minimizeDisruptions.title')}</h3>
              <p className="text-gray-600">{t('problemStatement.benefits.minimizeDisruptions.description')}</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('problemStatement.techBenefits.title')}</h3>
              <p className="text-lg text-gray-600">{t('problemStatement.techBenefits.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{t('problemStatement.techBenefits.items.lowerCosts')}</div>
                <div className="text-gray-600">{t('problemStatement.techBenefits.items.costDescription')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{t('problemStatement.techBenefits.items.boostSatisfaction')}</div>
                <div className="text-gray-600">{t('problemStatement.techBenefits.items.satisfactionDescription')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-latam mb-2">{t('problemStatement.techBenefits.items.growRevenue')}</div>
                <div className="text-gray-600">{t('problemStatement.techBenefits.items.revenueDescription')}</div>
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

          <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('demandSignals.analytics.title')}</h3>
              <p className="text-lg text-blue-100 mb-6">
                {t('demandSignals.analytics.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('demandSignals.analytics.items.realTime')}</div>
                  <div className="text-sm opacity-90">{t('demandSignals.analytics.items.realTimeDesc')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('demandSignals.analytics.items.sentiment')}</div>
                  <div className="text-sm opacity-90">{t('demandSignals.analytics.items.sentimentDesc')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">{t('demandSignals.analytics.items.predictive')}</div>
                  <div className="text-sm opacity-90">{t('demandSignals.analytics.items.predictiveDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Outputs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('coreOutputs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('coreOutputs.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreOutputs.map((output, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{output.title}</h3>
                    <div className="text-2xl font-bold text-primary">{output.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full ${output.color}`} 
                      style={{width: `${output.progress}%`}}
                    ></div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                </div>
                
                <div className="space-y-3">
                  {output.features.map((feature, featureIndex) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('coreOutputs.examples.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-blue-500" size={24} />
                  <span className="font-semibold text-blue-700">{t('coreOutputs.examples.barcelo.title')}</span>
                </div>
                <p className="text-gray-700">
                  {t('coreOutputs.examples.barcelo.description')}
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-green-500" size={24} />
                  <span className="font-semibold text-green-700">{t('coreOutputs.examples.havas.title')}</span>
                </div>
                <p className="text-gray-700">
                  {t('coreOutputs.examples.havas.description')}
                </p>
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
              <Building2 size={24} />
              {t('cta.buttons.demo')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              {t('cta.buttons.learnMore')}
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">69%</div>
              <div className="text-blue-200">{t('cta.stats.manual')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-blue-200">{t('cta.stats.timeReduction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">23%</div>
              <div className="text-blue-200">{t('cta.stats.laborCost')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">{t('cta.stats.aiOptimization')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;
