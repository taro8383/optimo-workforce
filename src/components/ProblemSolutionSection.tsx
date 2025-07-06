import React, { useState } from 'react';
import { AlertTriangle, Target, TrendingDown, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      problem: "27% overstaffing",
      solution: "Real-time demand heatmaps",
      result: "↓ Labor costs",
      icon: Users,
      color: "text-red-500"
    },
    {
      problem: "9 hrs/week scheduling",
      solution: "1-click AI optimization",
      result: "↑ Manager time",
      icon: Clock,
      color: "text-orange-500"
    },
    {
      problem: "42% staff turnover",
      solution: "Tip volatility shields",
      result: "↓ Hiring costs",
      icon: DollarSign,
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            The $180,000/year Staffing Leak
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most restaurants lose thousands monthly to inefficient scheduling.<br />
            Here's how we fix it.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Problem</h3>
                  <p className="text-lg text-red-600 font-semibold mb-8">{card.problem}</p>
                  
                  <div className="border-t pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                      <img 
                        src={`/src/assets/${index === 0 ? 'heatmap' : index === 1 ? 'ai' : 'shield'}.png`} 
                        alt={card.solution}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Result</h3>
                    <p className="text-lg text-secondary font-semibold">{card.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Before vs After</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-semibold text-red-700 mb-4">Before: Chaos</h4>
                <div className="space-y-2">
                  <div className="bg-red-200 rounded p-2 text-red-800">Overstaffed shifts</div>
                  <div className="bg-red-200 rounded p-2 text-red-800">Manual scheduling</div>
                  <div className="bg-red-200 rounded p-2 text-red-800">High turnover</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-semibold text-green-700 mb-4">After: Order</h4>
                <div className="space-y-2">
                  <div className="bg-green-200 rounded p-2 text-green-800">Optimized staffing</div>
                  <div className="bg-green-200 rounded p-2 text-green-800">AI automation</div>
                  <div className="bg-green-200 rounded p-2 text-green-800">Happy staff</div>
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
