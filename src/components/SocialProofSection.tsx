import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SocialProofSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
            {t('socialProof:title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('socialProof:subtitle')}
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
                <h3 className="text-xl font-bold text-gray-900">{t('socialProof:testimonial1.author')}</h3>
                <p className="text-gray-600">{t('socialProof:testimonial1.position')}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "{t('socialProof:testimonial1.text')}"
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">23%</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.costReduction')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15hrs</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.timeSaved')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-latam">98%</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.staffSatisfaction')}</div>
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
                <h3 className="text-xl font-bold text-gray-900">{t('socialProof:testimonial2.author')}</h3>
                <p className="text-gray-600">{t('socialProof:testimonial2.position')}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "{t('socialProof:testimonial2.text')}"
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-apac">22%</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.higherTips')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.compliance')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-gray-600">{t('socialProof:metrics.locations')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('socialProof:benchmarks.title')}</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">{t('socialProof:benchmarks.laborCost')}</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">{t('socialProof:benchmarks.industry')}: 32%</span>
                  <span className="text-secondary font-medium">Optimo: 24%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0%</span>
                  <span className="text-secondary font-semibold">8% {t('socialProof:benchmarks.improvement')}</span>
                <span>40%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">{t('socialProof:benchmarks.turnoverRate')}</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">{t('socialProof:benchmarks.industry')}: 42%</span>
                  <span className="text-secondary font-medium">Optimo: 18%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '43%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0%</span>
                  <span className="text-secondary font-semibold">24% {t('socialProof:benchmarks.reduction')}</span>
                <span>50%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">{t('socialProof:benchmarks.schedulingTime')}</span>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-medium">{t('socialProof:benchmarks.industry')}: 9hrs</span>
                  <span className="text-secondary font-medium">Optimo: 2hrs</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 to-secondary h-4 rounded-full" style={{width: '22%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0hrs</span>
                  <span className="text-secondary font-semibold">7hrs {t('socialProof:benchmarks.saved')}</span>
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
