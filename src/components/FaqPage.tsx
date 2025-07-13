import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, ChevronUp, MessageCircle, Shield, Calculator } from 'lucide-react';
import { FaqTranslations } from '../types/i18n/faq-translations';

interface FaqPageProps {
  translations?: FaqTranslations;
}

interface FaqItem {
  question: string;
  answer: string;
  hasCalculator?: boolean;
  hasBadges?: boolean;
  hasSecurityBadge?: boolean;
  calculator?: {
    title: string;
    results: string;
    costReduction: string;
    days: string;
  };
  posSystems?: string[];
  moreAdded?: string;
  badges?: string[];
}

const FaqPage: React.FC<FaqPageProps> = ({ translations }) => {
  const { t } = useTranslation('components/faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('implementation');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Use provided translations or fall back to t() function
  const tData = translations || {
    header: {
      title: t('header.title'),
      subtitle: t('header.subtitle'),
      searchPlaceholder: t('header.searchPlaceholder')
    },
    categories: {
      implementation: t('categories.implementation'),
      billing: t('categories.billing'),
      security: t('categories.security'),
      globalFeatures: t('categories.globalFeatures')
    },
    support: {
      title: t('support.title'),
      subtitle: t('support.subtitle'),
      chatButton: t('support.chatButton'),
      scheduleButton: t('support.scheduleButton'),
      stats: {
        supportAvailable: t('support.stats.supportAvailable'),
        languagesSupported: t('support.stats.languagesSupported'),
        averageResponse: t('support.stats.averageResponse')
      }
    }
  };

  const categories = ['implementation', 'billing', 'security', 'globalFeatures'];

  // Build FAQ data from translations
  const faqData: Record<string, FaqItem[]> = {
    implementation: [
      {
        question: t('faq.implementation.q1.question'),
        answer: t('faq.implementation.q1.answer'),
        hasCalculator: true,
        calculator: {
          title: t('faq.implementation.q1.calculator.title'),
          results: t('faq.implementation.q1.calculator.results'),
          costReduction: t('faq.implementation.q1.calculator.costReduction'),
          days: t('faq.implementation.q1.calculator.days')
        }
      },
      {
        question: t('faq.implementation.q2.question'),
        answer: t('faq.implementation.q2.answer'),
        hasBadges: true,
        posSystems: t('faq.implementation.q2.posSystems', { returnObjects: true }) as string[],
        moreAdded: t('faq.implementation.q2.moreAdded')
      },
      {
        question: t('faq.implementation.q3.question'),
        answer: t('faq.implementation.q3.answer')
      },
      {
        question: t('faq.implementation.q4.question'),
        answer: t('faq.implementation.q4.answer')
      }
    ],
    billing: [
      {
        question: t('faq.billing.q1.question'),
        answer: t('faq.billing.q1.answer')
      },
      {
        question: t('faq.billing.q2.question'),
        answer: t('faq.billing.q2.answer')
      },
      {
        question: t('faq.billing.q3.question'),
        answer: t('faq.billing.q3.answer')
      },
      {
        question: t('faq.billing.q4.question'),
        answer: t('faq.billing.q4.answer')
      }
    ],
    security: [
      {
        question: t('faq.security.q1.question'),
        answer: t('faq.security.q1.answer'),
        hasSecurityBadge: true,
        badges: t('faq.security.q1.badges', { returnObjects: true }) as string[]
      },
      {
        question: t('faq.security.q2.question'),
        answer: t('faq.security.q2.answer')
      },
      {
        question: t('faq.security.q3.question'),
        answer: t('faq.security.q3.answer')
      },
      {
        question: t('faq.security.q4.question'),
        answer: t('faq.security.q4.answer')
      }
    ],
    globalFeatures: [
      {
        question: t('faq.globalFeatures.q1.question'),
        answer: t('faq.globalFeatures.q1.answer')
      },
      {
        question: t('faq.globalFeatures.q2.question'),
        answer: t('faq.globalFeatures.q2.answer')
      },
      {
        question: t('faq.globalFeatures.q3.question'),
        answer: t('faq.globalFeatures.q3.answer')
      },
      {
        question: t('faq.globalFeatures.q4.question'),
        answer: t('faq.globalFeatures.q4.answer')
      }
    ]
  };

  const filteredFaqs = faqData[activeCategory as keyof typeof faqData].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold mb-6">
            {tData.header.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            {tData.header.subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={tData.header.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenAccordion(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tData.categories[category as keyof typeof tData.categories]}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openAccordion === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openAccordion === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  
                  {/* Special Content Based on FAQ */}
                  {faq.hasCalculator && faq.calculator && (
                    <div className="bg-gradient-to-r from-secondary to-green-400 rounded-lg p-6 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <Calculator size={24} />
                        <span className="font-semibold">
                          {faq.calculator.title}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold">87%</div>
                          <div className="text-sm opacity-90">
                            {faq.calculator.results}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">15%+</div>
                          <div className="text-sm opacity-90">
                            {faq.calculator.costReduction}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">30</div>
                          <div className="text-sm opacity-90">
                            {faq.calculator.days}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {faq.hasBadges && faq.posSystems && (
                    <div className="flex flex-wrap items-center gap-4">
                      {faq.posSystems.map((system: string, idx: number) => (
                        <div key={idx} className={`px-4 py-2 rounded-lg font-semibold ${
                          system === 'Toast' ? 'bg-orange-500' :
                          system === 'Clover' ? 'bg-blue-600' :
                          system === 'Lightspeed' ? 'bg-green-600' :
                          'bg-purple-600'
                        } text-white`}>
                          {system}
                        </div>
                      ))}
                      <span className="text-gray-600 font-medium">
                        {faq.moreAdded}
                      </span>
                    </div>
                  )}
                  
                  {faq.hasSecurityBadge && faq.badges && (
                    <div className="flex items-center gap-6">
                      {faq.badges.map((badge: string, idx: number) => (
                        <div key={idx} className={`px-4 py-2 rounded-lg font-semibold ${
                          badge === 'SOC 2 Type II' ? 'bg-blue-600' : 'bg-gray-800'
                        } text-white flex items-center gap-2`}>
                          {badge === 'SOC 2 Type II' && <Shield size={20} />}
                          {badge}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle size={48} className="animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {tData.support.title}
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              {tData.support.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                {tData.support.chatButton}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                {tData.support.scheduleButton}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">{tData.support.stats.supportAvailable}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">12</div>
                <div className="text-blue-200">{tData.support.stats.languagesSupported}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">&lt;2min</div>
                <div className="text-blue-200">{tData.support.stats.averageResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
