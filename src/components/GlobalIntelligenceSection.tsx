import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GlobalIntelligenceSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeRegion, setActiveRegion] = useState('US');

  const regions = ['US', 'EU', 'LATAM', 'APAC'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            {t('globalIntelligence:title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('globalIntelligence:subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <Globe size={80} className="animate-pulse-slow text-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {regions.map((key) => (
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
                  {t(`globalIntelligence:regions.${activeRegion}.title`)}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {t(`globalIntelligence:regions.${activeRegion}.description`)}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">
                    {t(`globalIntelligence:regions.${activeRegion}.data`)}
                  </div>
                  <div className="text-sm text-gray-600">{t('globalIntelligence:performance')}</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-lg font-semibold text-gray-900">
                    {t(`globalIntelligence:regions.${activeRegion}.feature`)}
                  </div>
                  <div className="text-sm text-gray-600">{t('globalIntelligence:keyFeature')}</div>
                </div>
              </div>
            </div>

              <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-accent-apac to-yellow-400 rounded-lg p-6 text-white">
                <div className="text-lg font-semibold mb-2">{t('globalIntelligence:regions.APAC.city')}</div>
                <div className="text-sm opacity-90">{t('globalIntelligence:regions.APAC.description')}</div>
              </div>
              <div className="bg-gradient-to-r from-secondary to-green-400 rounded-lg p-6 text-white">
                <div className="text-lg font-semibold mb-2">{t('globalIntelligence:regions.EU.city')}</div>
                <div className="text-sm opacity-90">{t('globalIntelligence:regions.EU.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalIntelligenceSection;
