import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  MessageSquare, 
  DollarSign, 
  Package, 
  TrendingUp, 
  Star, 
  Target, 
  Building2, 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Rocket, 
  Heart, 
  Award, 
  Mail, 
  FileText, 
  Coffee, 
  Utensils
} from 'lucide-react';

// Map feature titles to their translation keys
const featureKeyMap: Record<string, string> = {
  'Inventory Optimization': 'InventoryOptimization',
  'Business Analytics': 'BusinessAnalytics',
  'Customer Feedback': 'CustomerFeedback',
  'Customer Management': 'CustomerManagement',
  'AI Upselling': 'AIUpselling',
  'Dynamic Pricing': 'DynamicPricing',
  'Tip Management': 'TipManagement'
};

const FutureFeaturesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);

  const getTranslatedArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result as string[] : [];
  };

  const features = [
    {
      title: t('futureFeatures:featureTitles.InventoryOptimization'),
      status: 'comingSoon',
      statusColor: 'bg-yellow-500',
      icon: Package,
      description: t('futureFeatures:inventoryOptimization.description') as string,
      benefits: getTranslatedArray('futureFeatures:inventoryOptimization.benefits'),
      timeline: t('futureFeatures:inventoryOptimization.timeline') as string,
      impact: t('futureFeatures:inventoryOptimization.impact') as string,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: t('futureFeatures:featureTitles.BusinessAnalytics'),
      status: 'inDevelopment',
      statusColor: 'bg-blue-500',
      icon: BarChart3,
      description: t('futureFeatures:businessAnalytics.description') as string,
      benefits: getTranslatedArray('futureFeatures:businessAnalytics.benefits'),
      timeline: t('futureFeatures:businessAnalytics.timeline') as string,
      impact: t('futureFeatures:businessAnalytics.impact') as string,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: t('futureFeatures:featureTitles.CustomerFeedback'),
      status: 'betaTesting',
      statusColor: 'bg-green-500',
      icon: MessageSquare,
      description: t('futureFeatures:customerFeedback.description') as string,
      benefits: getTranslatedArray('futureFeatures:customerFeedback.benefits'),
      timeline: t('futureFeatures:customerFeedback.timeline') as string,
      impact: t('futureFeatures:customerFeedback.impact') as string,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: t('futureFeatures:featureTitles.CustomerManagement'),
      status: 'planning',
      statusColor: 'bg-purple-500',
      icon: Heart,
      description: t('futureFeatures:customerManagement.description') as string,
      benefits: getTranslatedArray('futureFeatures:customerManagement.benefits'),
      timeline: t('futureFeatures:customerManagement.timeline') as string,
      impact: t('futureFeatures:customerManagement.impact') as string,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t('futureFeatures:featureTitles.AIUpselling'),
      status: 'research',
      statusColor: 'bg-indigo-500',
      icon: TrendingUp,
      description: t('futureFeatures:aiUpselling.description') as string,
      benefits: getTranslatedArray('futureFeatures:aiUpselling.benefits'),
      timeline: t('futureFeatures:aiUpselling.timeline') as string,
      impact: t('futureFeatures:aiUpselling.impact') as string,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: t('futureFeatures:featureTitles.DynamicPricing'),
      status: 'research',
      statusColor: 'bg-red-500',
      icon: DollarSign,
      description: t('futureFeatures:dynamicPricing.description') as string,
      benefits: getTranslatedArray('futureFeatures:dynamicPricing.benefits'),
      timeline: t('futureFeatures:dynamicPricing.timeline') as string,
      impact: t('futureFeatures:dynamicPricing.impact') as string,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: t('futureFeatures:featureTitles.TipManagement'),
      status: 'concept',
      statusColor: 'bg-teal-500',
      icon: Award,
      description: t('futureFeatures:tipManagement.description') as string,
      benefits: getTranslatedArray('futureFeatures:tipManagement.benefits'),
      timeline: t('futureFeatures:tipManagement.timeline') as string,
      impact: t('futureFeatures:tipManagement.impact') as string,
      color: 'from-teal-500 to-green-600'
    }
  ];

  const roadmapStats = [
    { number: '7', label: t('futureFeatures:roadmap.stats.features'), icon: Rocket },
    { number: '2025', label: t('futureFeatures:roadmap.stats.launchYear'), icon: Calendar },
    { number: '12', label: t('futureFeatures:roadmap.stats.timeline'), icon: Clock },
    { number: '40%', label: t('futureFeatures:roadmap.stats.efficiency'), icon: TrendingUp }
  ];

  const betaProgram = {
    benefits: Array.isArray(t('futureFeatures:betaProgram.benefits', { returnObjects: true })) 
      ? t('futureFeatures:betaProgram.benefits', { returnObjects: true }) as string[]
      : [],
    requirements: Array.isArray(t('futureFeatures:betaProgram.requirements', { returnObjects: true })) 
      ? t('futureFeatures:betaProgram.requirements', { returnObjects: true }) as string[]
      : []
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <Rocket size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {t('futureFeatures:hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {t('futureFeatures:hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
  <Lightbulb size={24} />
              {t('futureFeatures:betaProgram.apply')}
</button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Mail size={24} />
              {t('common:requestFeature')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('futureFeatures:roadmap.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('futureFeatures:roadmap.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {roadmapStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Timeline Visualization */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('futureFeatures:featureTimeline.title')}</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
              
              <div className="space-y-12">
                {features.slice(0, 4).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                        <div className="bg-gray-50 rounded-2xl p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white`}>
                              <Icon size={24} />
                            </div>
                            <div>
                              <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${feature.statusColor} mb-2`}>
                              {t(`futureFeatures:featureTimeline.statuses.${feature.status.toLowerCase().replace(' ', '')}`)}
                              </div>
                              <div className="text-lg font-bold text-gray-900">{feature.timeline}</div>
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                          <p className="text-gray-600 mb-4">{feature.description}</p>
                          <div className="text-sm font-semibold text-secondary">{feature.impact}</div>
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
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('futureFeatures:featureDetails.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('futureFeatures:featureDetails.subtitle')}
            </p>
          </div>

          {/* Feature Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
{features.map((feature, index) => {
  const translationKey = featureKeyMap[feature.title] || feature.title.replace(/\s+/g, '');
  
  return (
    <button
      key={index}
      onClick={() => setActiveFeature(index)}
      className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
        activeFeature === index
          ? 'bg-primary text-white shadow-lg transform scale-105'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
                              {t(`futureFeatures:featureTitles.${translationKey}`)}
    </button>
  );
})}
          </div>

          {/* Active Feature Details */}
          <div className="max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                activeFeature === index && (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white`}>
                            <Icon size={32} />
                          </div>
                          <div>
                            <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold ${feature.statusColor} mb-2`}>
                              {t(`futureFeatures:featureTimeline.statuses.${feature.status.toLowerCase().replace(' ', '')}`)}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {t(`futureFeatures:featureTitles.${featureKeyMap[feature.title] || feature.title.replace(/\s+/g, '')}`)}
                            </h3>
                          </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{feature.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">{t('futureFeatures:featureDetails.timeline')}</div>
                            <div className="text-lg font-bold text-gray-900">{feature.timeline}</div>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">{t('futureFeatures:featureDetails.expectedImpact')}</div>
                            <div className="text-lg font-bold text-secondary">{feature.impact}</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('futureFeatures:featureDetails.keyBenefits')}:</h4>
                        <div className="space-y-3">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 leading-relaxed">{benefit}</span>
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

      {/* Beta Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('futureFeatures:betaProgram.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('futureFeatures:betaProgram.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center">
                  <Star size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('futureFeatures:betaProgram.benefitsTitle')}</h3>
              </div>
              
              <div className="space-y-4">
                {betaProgram.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('futureFeatures:betaProgram.requirementsTitle')}</h3>
              </div>
              
              <div className="space-y-4">
                {betaProgram.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
              <Rocket size={24} />
              {t('futureFeatures:betaProgram.apply')}
            </button>
            <p className="text-gray-600 mt-4">
              {t('futureFeatures:betaProgram.availability')}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Request Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t('futureFeatures:featureRequest.title')}</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                {t('futureFeatures:featureRequest.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
<button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
  <Mail size={24} />
  {t('futureFeatures:ui.contactProductTeam')}
</button>
<button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
  <FileText size={24} />
  {t('futureFeatures:ui.submitFeatureRequest')}
  <ArrowRight size={20} />
</button>
              </div>

<div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
  <div className="text-center">
    <div className="text-3xl font-bold mb-2">500+</div>
    <div className="text-blue-200">{t('futureFeatures:ui.featureRequests')}</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold mb-2">85%</div>
    <div className="text-blue-200">{t('futureFeatures:ui.implementationRate')}</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold mb-2">50+</div>
    <div className="text-blue-200">{t('futureFeatures:ui.betaTesters')}</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold mb-2">24/7</div>
    <div className="text-blue-200">{t('futureFeatures:ui.development')}</div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                {t('futureFeatures:industryImpact.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('futureFeatures:industryImpact.subtitle')}
              </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <Utensils size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('futureFeatures:industryImpact.restaurants.title')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.restaurants.metrics.foodWaste')}</span>
                  <span className="font-bold text-green-600">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.restaurants.metrics.revenueIncrease')}</span>
                  <span className="font-bold text-green-600">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.restaurants.metrics.customerSatisfaction')}</span>
                  <span className="font-bold text-green-600">77%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <Building2 size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('futureFeatures:industryImpact.hotels.title')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.hotels.metrics.operationalEfficiency')}</span>
                  <span className="font-bold text-blue-600">72%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.hotels.metrics.guestExperience')}</span>
                  <span className="font-bold text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.hotels.metrics.staffRetention')}</span>
                  <span className="font-bold text-blue-600">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
                <Coffee size={40} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('futureFeatures:industryImpact.cafes.title')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.cafes.metrics.inventoryAccuracy')}</span>
                  <span className="font-bold text-yellow-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.cafes.metrics.profitMargins')}</span>
                  <span className="font-bold text-yellow-600">22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('futureFeatures:industryImpact.cafes.metrics.orderAccuracy')}</span>
                  <span className="font-bold text-yellow-600">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureFeaturesPage;
