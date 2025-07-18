import React from 'react';
import { Play } from 'lucide-react';
import { withTranslation } from 'react-i18next';

const HeroSection: React.FC = ({ t }: any) => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {t('hero:title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              {t('hero:subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                {t('hero:getStarted')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                {t('hero:bookDemo')}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <span className="text-blue-200 font-medium">{t('hero:trustedBy')}</span>
              <div className="flex items-center gap-6">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Toast</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Lightspeed</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Clover</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <picture>
            <source media="(max-width: 1023px)" srcSet="/assets/HeroUm.webp 1x, /assets/HeroU@2xM.webp 2x" />
            <source media="(min-width: 1024px)" srcSet="/assets/HeroU.webp 1x, /assets/HeroU@2x.webp 2x" />
            <img
              src="/assets/HeroU.webp"
              alt="Optimo Workforce Dashboard"
              className="w-full h-full object-cover"
            />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(HeroSection);
