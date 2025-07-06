import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Shield, Calculator } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Implementation');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const categories = ['Implementation', 'Billing', 'Security', 'Global Features'];

  const faqData = {
    Implementation: [
      {
        question: "How fast do I see savings?",
        answer: "87% of our customers see >15% reduction in labor costs within the first 30 days. Our AI starts optimizing immediately after connecting your POS system.",
        hasCalculator: true
      },
      {
        question: "Do you work with my POS?",
        answer: "We integrate seamlessly with all major POS systems including Toast, Clover, Lightspeed, and Clip. New integrations are added weekly based on customer demand.",
        hasBadges: true
      },
      {
        question: "How long does setup take?",
        answer: "Most restaurants are up and running in under 5 minutes. Our one-click integration connects to your existing POS system automatically."
      },
      {
        question: "Do I need to train my staff?",
        answer: "No training required! Our AI works behind the scenes. Staff simply follow the optimized schedules generated automatically."
      }
    ],
    Billing: [
      {
        question: "What's included in the free trial?",
        answer: "Full access to all features for 30 days. No credit card required. Cancel anytime with no obligations."
      },
      {
        question: "How does pricing scale?",
        answer: "Pricing is per location. Volume discounts available for 10+ locations. Enterprise plans include dedicated support and custom features."
      },
      {
        question: "What if I don't save 20%?",
        answer: "We guarantee 20% labor cost savings or your money back. Our success team works with you to ensure optimal results."
      },
      {
        question: "Can I change plans anytime?",
        answer: "Yes, upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing."
      }
    ],
    Security: [
      {
        question: "Is my data secure?",
        answer: "Yes, we're SOC 2 Type II certified and fully compliant with GDPR and CCPA regulations. Your data is encrypted in transit and at rest.",
        hasSecurityBadge: true
      },
      {
        question: "Where is my data stored?",
        answer: "Data is stored in secure, geographically distributed data centers with 99.9% uptime SLA and automatic backups."
      },
      {
        question: "Who has access to my data?",
        answer: "Only authorized personnel with legitimate business needs. All access is logged and monitored. We never sell or share your data."
      },
      {
        question: "How do you handle compliance?",
        answer: "We automatically ensure compliance with local labor laws, working time directives, and break requirements across all supported regions."
      }
    ],
    'Global Features': [
      {
        question: "Which regions do you support?",
        answer: "We support US, EU, LATAM, and APAC markets with region-specific optimizations for tipping, regulations, and payment preferences."
      },
      {
        question: "How does tip forecasting work?",
        answer: "Our AI analyzes historical tip data, party sizes, shift types, and local market conditions to predict optimal staffing for maximum tip yield."
      },
      {
        question: "What about local labor laws?",
        answer: "We automatically comply with local regulations including EU working time directives, break requirements, and overtime rules."
      },
      {
        question: "Do you support mobile payments?",
        answer: "Yes, especially in APAC markets where we optimize for mobile wallet preferences, resulting in 22% higher average tips."
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
            Optimization, Explained
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            Find answers to common questions about AI-powered workforce optimization
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Find answers..."
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
              {category}
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
                  {faq.hasCalculator && (
                    <div className="bg-gradient-to-r from-secondary to-green-400 rounded-lg p-6 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <Calculator size={24} />
                        <span className="font-semibold">Savings Calculator</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold">87%</div>
                          <div className="text-sm opacity-90">See Results</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">15%+</div>
                          <div className="text-sm opacity-90">Cost Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">30</div>
                          <div className="text-sm opacity-90">Days</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {faq.hasBadges && (
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Toast
                      </div>
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                        Clover
                      </div>
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                        Lightspeed
                      </div>
                      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                        Clip
                      </div>
                      <span className="text-gray-600 font-medium">+ More added weekly</span>
                    </div>
                  )}
                  
                  {faq.hasSecurityBadge && (
                    <div className="flex items-center gap-6">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                        <Shield size={20} />
                        SOC 2 Type II
                      </div>
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
                        GDPR Compliant
                      </div>
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
                        CCPA Compliant
                      </div>
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
              Still stuck? Our optimization specialists speak 12 languages
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Get personalized help from our team of workforce optimization experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                Chat Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                Schedule Call
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">12</div>
                <div className="text-blue-200">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">&lt;2min</div>
                <div className="text-blue-200">Average Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;