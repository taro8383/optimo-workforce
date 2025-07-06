import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  BarChart3, 
  Users, 
  DollarSign, 
  Globe, 
  Cloud, 
  Smartphone, 
  Shield, 
  TrendingUp,
  Clock,
  MapPin,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare,
  Settings
} from 'lucide-react';

const HotelsPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('US');

  const demandSignals = [
    {
      icon: Cloud,
      title: 'Weather APIs',
      description: 'Explicitly incorporate weather conditions into AI-powered demand forecasting for crucial operational decisions',
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: 'Event & Local Activity Integration',
      description: 'Factor in local activities and event calendars to detect demand patterns and enable proactive staffing',
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Beyond Simple Data',
      description: 'Interpret unstructured text like public reviews to cluster sentiment and generate human-readable summaries',
      color: 'text-green-500'
    }
  ];

  const coreOutputs = [
    {
      title: 'Optimized Shift Plans',
      description: 'Draft shifts compliant with labor laws considering employee availability, dramatically reducing manual effort',
      features: [
        'Labor law compliance automation',
        'Employee availability integration',
        'Strategic workforce deployment',
        'Peak period optimization'
      ],
      color: 'bg-primary',
      progress: 85
    },
    {
      title: 'Labor Cost/Revenue Dashboards',
      description: 'Reduce labor costs and provide unified analytics with clear summaries of anomalies for data-backed decisions',
      features: [
        'Cost reduction analytics',
        'Anomaly detection',
        'Performance gap identification',
        'Cross-platform measurement'
      ],
      color: 'bg-secondary',
      progress: 92
    }
  ];

  const regionalAdaptations = {
    US: {
      title: 'Strategic Staffing for Peak Tipping',
      subtitle: 'Optimize staffing based on skills and demand',
      description: 'AI scheduler optimizes staffing based on skills and demand, ensuring optimal deployment of high-skill servers during anticipated peak demand periods. Strategic workforce management influences tip potential and overall revenue opportunities.',
      features: [
        'Skill-based staff deployment',
        'Peak demand period optimization',
        'Strategic workforce management',
        'Revenue opportunity maximization'
      ],
      color: 'bg-blue-500',
      icon: DollarSign
    },
    EU: {
      title: 'Automated Compliance',
      subtitle: 'Working Time Directives compliance',
      description: 'AI schedulers draft shifts compliant with complex labor laws across various countries. Maintain compliance, avoid costly fines, and ensure accurate record-keeping of workdays, rest periods, and overtime.',
      features: [
        'Complex labor law compliance',
        'Multi-country regulation adherence',
        'Automated fine prevention',
        'GDPR compliance integration'
      ],
      color: 'bg-green-500',
      icon: Shield
    },
    LATAM: {
      title: 'Cash-Flow Optimization',
      subtitle: 'High-cash transaction venues',
      description: 'Specialized optimization for venues with high cash transactions, focusing on cash flow management and operational efficiency in cash-heavy hospitality environments.',
      features: [
        'Cash transaction optimization',
        'Flow management systems',
        'Operational efficiency focus',
        'Cash-heavy environment adaptation'
      ],
      color: 'bg-orange-500',
      icon: TrendingUp
    },
    APAC: {
      title: 'Mobile Wallet Integration',
      subtitle: 'Facilitating mobile payment systems',
      description: 'Heavy emphasis on mobile integration with personalized experiences and promotions. Mobile payment apps contribute to booking conversion rates, with next-generation mobile apps enhancing loyalty programs.',
      features: [
        'Mobile payment integration',
        'Personalized meal choices',
        'Digital footprint expansion',
        'Loyalty program enhancement'
      ],
      color: 'bg-yellow-500',
      icon: Smartphone
    }
  };

  const industryStats = [
    {
      stat: '69%',
      description: 'Hotels still manage shifts manually',
      color: 'text-red-500'
    },
    {
      stat: '40%',
      description: 'Labor costs of hotel operations',
      color: 'text-orange-500'
    },
    {
      stat: '85%',
      description: 'Reduction in scheduling time',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
                Revolutionize Your Hotel Operations
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                AI-Powered Staff Scheduling designed to efficiently manage staff and resources in an industry where 69% of hotels still manage shifts manually
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Request Demo Today
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Building2 size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Hotel Intelligence</h3>
                </div>
                
                <div className="space-y-4">
                  {industryStats.map((stat, index) => (
                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.stat}</div>
                      <div className="text-sm opacity-90 text-right flex-1 ml-4">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Transforming Hotel Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI-driven approach alleviates operational challenges by significantly reducing employee downtime, improving productivity, and minimizing service disruptions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Clock size={40} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reduce Downtime</h3>
              <p className="text-gray-600">Significantly reduce employee downtime through intelligent scheduling and resource allocation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <TrendingUp size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improve Productivity</h3>
              <p className="text-gray-600">Boost overall productivity by deploying the right resources to the right places at the right times</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <Shield size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Minimize Disruptions</h3>
              <p className="text-gray-600">Adapt to unexpected changes while eliminating human bias and error in scheduling decisions</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Technology Benefits</h3>
              <p className="text-lg text-gray-600">Lower costs, boost satisfaction, and grow revenue without requiring a complete system overhaul</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">Lower Costs</div>
                <div className="text-gray-600">Reduce operational expenses through optimized scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Boost Satisfaction</div>
                <div className="text-gray-600">Improve both staff and guest satisfaction rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-latam mb-2">Grow Revenue</div>
                <div className="text-gray-600">Increase revenue through better resource utilization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Powering Precision with Advanced Demand Signals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The efficacy of our AI scheduler is rooted in its intelligent use of demand signals, integrating external factors to create accurate demand models
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {demandSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon size={32} className={signal.color} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{signal.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{signal.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Advanced Data Analytics</h3>
              <p className="text-lg text-blue-100 mb-6">
                Our AI leverages advanced data analytics to turn raw data into actionable knowledge, aiding in real-time decisions
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">Real-Time</div>
                  <div className="text-sm opacity-90">Decision Making</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">Sentiment</div>
                  <div className="text-sm opacity-90">Analysis</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-xl font-bold mb-2">Predictive</div>
                  <div className="text-sm opacity-90">Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Outputs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Driving Efficiency and Profitability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tangible outputs that translate directly into improved operational and financial performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreOutputs.map((output, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{output.title}</h3>
                    <div className="text-2xl font-bold text-primary">{output.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full ${output.color}`} 
                      style={{width: `${output.progress}%`}}
                    ></div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                </div>
                
                <div className="space-y-3">
                  {output.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Impact Examples</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-blue-500" size={24} />
                  <span className="font-semibold text-blue-700">Barceló Group Success</span>
                </div>
                <p className="text-gray-700">
                  AI-powered online pricing applications maximize production and profitability across all hotel sales channels by optimizing tariffs based on predictive demand models
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-green-500" size={24} />
                  <span className="font-semibold text-green-700">Havas Analytics</span>
                </div>
                <p className="text-gray-700">
                  AI-powered modeling tools for cross-platform audience planning and measuring communication plan outcomes via global dashboards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Adaptations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Tailored for Global Hospitality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regional adaptations designed to meet diverse market needs across global hospitality
            </p>
          </div>

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(regionalAdaptations).map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeRegion === region
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Active Region Content */}
          <div className="max-w-4xl mx-auto">
            {Object.entries(regionalAdaptations).map(([region, adaptation]) => {
              const Icon = adaptation.icon;
              return (
                activeRegion === region && (
                  <div key={region} className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 ${adaptation.color} rounded-full flex items-center justify-center text-white`}>
                            <Icon size={32} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{adaptation.title}</h3>
                            <p className="text-lg text-gray-600">{adaptation.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">{adaptation.description}</p>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                        <div className="space-y-3">
                          {adaptation.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            Ready to Transform Your Hotel's Scheduling?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            Discover how our AI scheduler can optimize your operations and elevate your profitability
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Building2 size={24} />
              Request Demo Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">69%</div>
              <div className="text-blue-200">Hotels Still Manual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-200">Labor Cost Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">AI Optimization</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;