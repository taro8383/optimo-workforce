import React from 'react';
import { Star, TrendingDown, Users } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how restaurants worldwide are transforming their operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/src/assets/maria.jpg" 
                alt="Maria Rodriguez"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Maria Rodriguez</h3>
                <p className="text-gray-600">General Manager, Coastal Bistro</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "Optimo cut our labor costs by 23% in the first month. The AI actually understands our tipping patterns better than we did. Our staff is happier, and our margins are healthier."
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">23%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15hrs</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-latam">98%</div>
                <div className="text-sm text-gray-600">Staff Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/src/assets/kevin.jpg" 
                alt="Kevin Lim"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Kevin Lim</h3>
                <p className="text-gray-600">Operations Director, Singapore Food Group</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "The mobile wallet integration is game-changing for APAC. We're seeing 22% higher tips and perfect compliance with local regulations across all our locations."
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-apac">22%</div>
                <div className="text-sm text-gray-600">Higher Tips</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-600">Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Industry Benchmarks</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">Labor Cost Percentage</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">Industry: 32%</span>
                  <span className="text-secondary font-medium">Optimo: 24%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0%</span>
                <span className="text-secondary font-semibold">8% Improvement</span>
                <span>40%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">Staff Turnover Rate</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">Industry: 42%</span>
                  <span className="text-secondary font-medium">Optimo: 18%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '43%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0%</span>
                <span className="text-secondary font-semibold">24% Reduction</span>
                <span>50%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">Scheduling Time (hrs/week)</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">Industry: 9hrs</span>
                  <span className="text-secondary font-medium">Optimo: 2hrs</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '22%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0hrs</span>
                <span className="text-secondary font-semibold">7hrs Saved</span>
                <span>12hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
