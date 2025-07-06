import React, { useState } from 'react';
import { Globe, Shield, Smartphone, CreditCard, TrendingUp } from 'lucide-react';

const GlobalIntelligenceSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('US');

  const regions = {
    US: {
      title: 'Tip-Yield Forecasting',
      description: 'Predict tip volatility and optimize staffing for maximum revenue',
      icon: TrendingUp,
      color: 'bg-blue-500',
      data: '$42/hr average tip yield',
      feature: 'Advanced tipping analytics'
    },
    EU: {
      title: 'Break Compliance Shield',
      description: 'Automatic compliance with working time directives',
      icon: Shield,
      color: 'bg-green-500',
      data: '100% compliance rate',
      feature: 'Regulatory automation'
    },
    LATAM: {
      title: 'OXXO Cash Sync',
      description: 'Real-time cash flow integration with local payment systems',
      icon: CreditCard,
      color: 'bg-orange-500',
      data: 'Real-time sync',
      feature: 'Local payment integration'
    },
    APAC: {
      title: 'Mobile Wallet Analytics',
      description: 'Optimize for mobile payment preferences and behaviors',
      icon: Smartphone,
      color: 'bg-yellow-500',
      data: '22% higher tips',
      feature: 'Mobile-first optimization'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            One Engine, Local Brilliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global AI intelligence adapted to local markets, regulations, and customer behaviors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center mb-8">
                <Globe size={80} className="animate-pulse-slow" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(regions).map(([key, region]) => {
                  const Icon = region.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveRegion(key)}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        activeRegion === key 
                          ? 'bg-white text-primary transform scale-105' 
                          : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                      }`}
                    >
                      <Icon size={24} className="mx-auto mb-2" />
                      <div className="text-sm font-semibold">{key}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(regions[activeRegion as keyof typeof regions].icon, {
                  size: 32,
                  className: `${regions[activeRegion as keyof typeof regions].color.replace('bg-', 'text-')}`
                })}
                <h3 className="text-2xl font-bold text-gray-900">
                  {regions[activeRegion as keyof typeof regions].title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {regions[activeRegion as keyof typeof regions].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">
                    {regions[activeRegion as keyof typeof regions].data}
                  </div>
                  <div className="text-sm text-gray-600">Performance</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-semibold text-gray-900">
                    {regions[activeRegion as keyof typeof regions].feature}
                  </div>
                  <div className="text-sm text-gray-600">Key Feature</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-accent-apac to-yellow-400 rounded-lg p-6 text-white">
                <div className="text-lg font-semibold mb-2">Singapore</div>
                <div className="text-sm opacity-90">Hawker centers: 22% higher tips via mobile wallets</div>
              </div>
              <div className="bg-gradient-to-r from-secondary to-green-400 rounded-lg p-6 text-white">
                <div className="text-lg font-semibold mb-2">Berlin</div>
                <div className="text-sm opacity-90">Restaurants: 100% working time directive compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalIntelligenceSection;