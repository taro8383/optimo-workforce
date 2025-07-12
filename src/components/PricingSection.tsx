import React from 'react';
import { Check, Shield, Star, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: t('pricing:starter.title'),
      price: t('pricing:starter.price'),
      period: t('pricing:starter.period'),
      description: t('pricing:starter.description'),
      features: t('pricing:starter.features', { returnObjects: true }) as string[],
      icon: Zap,
      color: 'border-gray-200',
      buttonColor: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: t('pricing:professional.title'),
      price: t('pricing:professional.price'),
      period: t('pricing:professional.period'),
      description: t('pricing:professional.description'),
      features: t('pricing:professional.features', { returnObjects: true }) as string[],
      icon: Star,
      color: 'border-primary ring-4 ring-primary ring-opacity-20',
      buttonColor: 'bg-primary hover:bg-blue-600',
      popular: true
    },
    {
      name: t('pricing:enterprise.title'),
      price: t('pricing:enterprise.price'),
      period: t('pricing:enterprise.period'),
      description: t('pricing:enterprise.description'),
      features: t('pricing:enterprise.features', { returnObjects: true }) as string[],
      icon: Shield,
      color: 'border-gray-200',
      buttonColor: 'bg-secondary hover:bg-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            {t('pricing:title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing:subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.color} transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {t('pricing:professional.popular')}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Icon size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {Array.isArray(plan.features) ? (
                    plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check size={20} className="text-secondary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-center gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">No features available</span>
                    </li>
                  )}
                </ul>

                <button className={`w-full ${plan.buttonColor} text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105`}>
                  {plan.name === 'Enterprise' ? t('pricing:contactSales') : t('pricing:getStarted')}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-full">
            <Shield className="text-primary" size={24} />
            <span className="text-lg font-semibold text-primary">
              {t('finalCTA:features.guaranteedSavings')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
