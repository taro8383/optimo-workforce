import React, { useState } from 'react';
import { Zap, BarChart3, Calendar, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'Connect POS',
      description: 'Seamlessly integrate with Toast, Clover, or Lightspeed',
      icon: Zap,
      color: 'bg-primary'
    },
    {
      number: 2,
      title: 'AI Forecasts Demand',
      description: 'Machine learning analyzes patterns and predicts busy periods',
      icon: BarChart3,
      color: 'bg-secondary'
    },
    {
      number: 3,
      title: 'Optimize Shifts',
      description: 'Automatically generate optimal schedules in seconds',
      icon: Calendar,
      color: 'bg-accent-latam'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your labor management
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer ${
                    hoveredStep === index ? 'transform scale-105 shadow-2xl' : ''
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${step.color} text-white mb-6 ${
                      hoveredStep === index ? 'animate-pulse' : ''
                    }`}>
                      <Icon size={40} />
                    </div>
                    
                    <div className="absolute -top-4 -left-4 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {hoveredStep === index && (
                      <div className="animate-fade-in">
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <div className="text-sm text-gray-500 mb-2">Example:</div>
                          {step.number === 1 && (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">T</div>
                              <ArrowRight size={16} className="text-gray-400" />
                              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">O</div>
                            </div>
                          )}
                          {step.number === 2 && (
                            <div className="h-16 bg-gradient-to-r from-primary to-secondary rounded opacity-80 flex items-center justify-center text-white font-semibold">
                              Data Streams →
                            </div>
                          )}
                          {step.number === 3 && (
                            <div className="grid grid-cols-7 gap-1">
                              {Array.from({length: 7}).map((_, i) => (
                                <div key={i} className={`h-8 rounded ${i < 5 ? 'bg-secondary' : 'bg-gray-200'}`}></div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight size={32} className="text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;