import React, { useState } from 'react';
import { AlertTriangle, Target, TrendingDown, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProblemSolutionSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      problem: t('problemSolution.problem.overstaffing'),
      solution: t('problemSolution.solution.aiPrediction'),
      result: t('problemSolution.result.laborCosts'),
      icon: Users,
      color: "text-red-500"
    },
    {
      problem: t('problemSolution.problem.manualScheduling'),
      solution: t('problemSolution.solution.automatedProcess'),
      result: t('problemSolution.result.managerTime'),
      icon: Clock,
      color: "text-orange-500"
    },
    {
      problem: t('problemSolution.problem.highTurnover'),
      solution: t('problemSolution.solution.improvedRetention'),
      result: t('problemSolution.result.hiringCosts'),
      icon: DollarSign,
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            {t('problemSolution.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('problemSolution.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeCard === index ? 'ring-4 ring-primary' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6`}>
                    <AlertTriangle className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemSolution.problem.title')}</h3>
                  <p className="text-lg text-red-600 font-semibold mb-8">{card.problem}</p>
                  
                  <div className="border-t pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                      <img 
                        src={`/src/assets/${index === 0 ? 'heatmap' : index === 1 ? 'ai' : 'shield'}.png`} 
                        alt={card.solution}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemSolution.solution.title')}</h3>
                    <p className="text-lg text-primary font-semibold mb-8">{card.solution}</p>
                  </div>

                  <div className="border-t pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                      {index === 1 ? (
                        <TrendingUp className="text-secondary" size={32} />
                      ) : (
                        <TrendingDown className="text-secondary" size={32} />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('problemSolution.result.title')}</h3>
                    <p className="text-lg text-secondary font-semibold">{card.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('problemSolution.beforeAfter.title')}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-semibold text-red-700 mb-4">{t('problemSolution.beforeAfter.before')}</h4>
                <div className="space-y-2">
                  <div className="bg-red-200 rounded p-2 text-red-800">{t('problemSolution.beforeAfter.beforeItems.overstaffed')}</div>
                  <div className="bg-red-200 rounded p-2 text-red-800">{t('problemSolution.beforeAfter.beforeItems.manual')}</div>
                  <div className="bg-red-200 rounded p-2 text-red-800">{t('problemSolution.beforeAfter.beforeItems.turnover')}</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-semibold text-green-700 mb-4">{t('problemSolution.beforeAfter.after')}</h4>
                <div className="space-y-2">
                  <div className="bg-green-200 rounded p-2 text-green-800">{t('problemSolution.beforeAfter.afterItems.optimized')}</div>
                  <div className="bg-green-200 rounded p-2 text-green-800">{t('problemSolution.beforeAfter.afterItems.automation')}</div>
                  <div className="bg-green-200 rounded p-2 text-green-800">{t('problemSolution.beforeAfter.afterItems.happy')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
