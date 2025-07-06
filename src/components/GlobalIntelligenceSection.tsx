import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const GlobalIntelligenceSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('US');

  const regions = {
    US: {
      title: 'Tip-Yield Forecasting',
      description: 'Predict tip volatility and optimize staffing for maximum revenue',
      color: 'bg-blue-500',
      data: '$42/hr average tip yield',
      feature: 'Advanced tipping analytics'
    },
    EU: {
      title: 'Break Compliance Shield',
      description: 'Automatic compliance with working time directives',
      color: 'bg-green-500',
      data: '100% compliance rate',
      feature: 'Regulatory automation'
    },
    LATAM: {
      title: 'OXXO Cash Sync',
      description: 'Real-time cash flow integration with local payment systems',
      color: 'bg-orange-500',
      data: 'Real-time sync',
      feature: 'Local payment integration'
    },
    APAC: {
      title: 'Mobile Wallet Analytics',
      description: 'Optimize for mobile payment preferences and behaviors',
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <Globe size={80} className="animate-pulse-slow text-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(regions).map(([key]) => (
                    <button
                      key={key}
                      onClick={() => setActiveRegion(key)}
                      className={`p-6 rounded-lg transition-all duration-300 ${
                        activeRegion === key 
                          ? 'bg-primary bg-opacity-10 border-2 border-primary transform scale-105' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <img src={`/src/assets/${key.toLowerCase()}.png`} alt={key} className="mx-auto w-16 h-16 object-contain mb-2" />
                      <div className="text-sm font-semibold">{key}</div>
                    </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={`/src/assets/${
                    activeRegion === 'US' ? 'tip' : 
                    activeRegion === 'EU' ? 'break' : 
                    activeRegion === 'LATAM' ? 'oxxo' : 'mobile'
                  }.png`} 
                  alt={activeRegion}
                  className="w-12 h-12 object-contain"
                />
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
