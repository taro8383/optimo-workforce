import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalCTASection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold mb-6">
          {t('finalCTA.title')}
        </h2>
        <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
          {t('finalCTA.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => navigate('/roi-calculator')}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <Calculator size={24} />
            {t('finalCTA.getAudit')}
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3"
          >
            <MessageCircle size={24} />
            {t('finalCTA.talkToExpert')}
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30 Days</div>
            <div className="text-blue-200">{t('finalCTA.features.freeTrial')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5 {t('finalCTA.features.minutes')}</div>
            <div className="text-blue-200">{t('finalCTA.features.setupTime')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">20%+</div>
            <div className="text-blue-200">{t('finalCTA.features.guaranteedSavings')}</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 text-lg">
            {t('finalCTA.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
