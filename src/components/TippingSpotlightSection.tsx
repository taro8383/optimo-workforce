import React, { useState } from 'react';
import { DollarSign, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TippingSpotlightSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  console.log('Current language in component:', i18n.language);
  const [partySize, setPartySize] = useState(4);
  const [shiftType, setShiftType] = useState('Dinner');

  const calculateTipYield = () => {
    const baseRate = shiftType === 'Breakfast' ? 15 : shiftType === 'Lunch' ? 25 : 35;
    const sizeMultiplier = Math.min(partySize * 0.8, 8);
    return Math.round(baseRate + sizeMultiplier);
  };

  const tipYield = calculateTipYield();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            {t('tippingSpotlight.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tippingSpotlight.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">{t('tippingSpotlight.calculatorTitle')}</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">{t('tippingSpotlight.partySize')}: {partySize}</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={partySize}
                  onChange={(e) => setPartySize(parseInt(e.target.value))}
                  className="w-full h-2 bg-white bg-opacity-20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm opacity-75 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">{t('tippingSpotlight.shiftType')}</label>
                <select
                  value={shiftType}
                  onChange={(e) => setShiftType(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="Breakfast" className="text-gray-900">{t('tippingSpotlight.breakfast')}</option>
                  <option value="Lunch" className="text-gray-900">{t('tippingSpotlight.lunch')}</option>
                  <option value="Dinner" className="text-gray-900">{t('tippingSpotlight.dinner')}</option>
                </select>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    ${tipYield}/hr
                  </div>
                  <div className="text-lg opacity-90">{t('tippingSpotlight.predictedTipYield')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('tippingSpotlight.staffingOptimization')}</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {t('tippingSpotlight.before')}
      </div>
      <span className="text-red-700 font-medium">{t('tippingSpotlight.overstaffed')}</span>
    </div>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Users size={20} className="text-red-500" />
        <span className="text-gray-700">{t('tippingSpotlight.beforeServers', {count: 8})}</span>
      </div>
      <div className="flex items-center gap-3">
        <Clock size={20} className="text-red-500" />
        <span className="text-gray-700">{t('tippingSpotlight.beforeCooks', {count: 2})}</span>
      </div>
      <div className="text-red-600 font-semibold">
        {t('tippingSpotlight.beforeCost', {amount: 280})}
      </div>
    </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {t('tippingSpotlight.after')}
                    </div>
                    <span className="text-green-700 font-medium">{t('tippingSpotlight.optimized')}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-secondary" />
                      <span className="text-gray-700">{t('tippingSpotlight.afterServers', {count: 5})}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-secondary" />
                      <span className="text-gray-700">{t('tippingSpotlight.afterCooks', {count: 3})}</span>
                    </div>
                    <div className="text-secondary font-semibold">
                      {t('tippingSpotlight.afterCost', {amount: 200})}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-secondary" size={24} />
                <span className="text-xl font-bold text-gray-900">{t('tippingSpotlight.savingsImpact')}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary">$80</div>
                  <div className="text-sm text-gray-600">{t('tippingSpotlight.perHour')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">$640</div>
                  <div className="text-sm text-gray-600">{t('tippingSpotlight.perShift')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">$4,480</div>
                  <div className="text-sm text-gray-600">{t('tippingSpotlight.perWeek')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TippingSpotlightSection;
