import React from 'react';
import { Play, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              Stop Guessing Shifts. Start Optimizing Labor Costs.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              AI-powered scheduling cuts hospitality labor waste by 20%+—adapting to tipping, regulations, and demand
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start 30-Day Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                See How It Works →
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <span className="text-blue-200 font-medium">Trusted by:</span>
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
              <div className="bg-gradient-to-r from-accent-apac to-accent-latam rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-white" size={24} />
                  <span className="text-white font-semibold">APAC Analytics</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-2xl font-bold">22%</div>
                    <div className="text-sm opacity-90">Higher Tips</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Mobile</div>
                    <div className="text-sm opacity-90">Wallet Focus</div>
                  </div>
                </div>
              </div>
              <div className="animate-pulse-slow">
                <div className="h-32 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;