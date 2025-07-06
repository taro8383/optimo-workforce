import React, { useState } from 'react';
import { 
  Brain, 
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
  ArrowRight
} from 'lucide-react';

const RestaurantsPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('US');

  const demandSignals = [
    {
      icon: MapPin,
      title: 'Google Popular Times',
      description: 'AI-powered demand forecasting analyzes real-time inputs including local events and trends',
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: 'Eventbrite Integration',
      description: 'AI systems account for local events and calendars as external factors influencing customer behavior',
      color: 'text-purple-500'
    },
    {
      icon: Cloud,
      title: 'Weather APIs',
      description: 'Forecast sales based on weather data alongside historical sales and other factors',
      color: 'text-cyan-500'
    }
  ];

  const coreFeatures = [
    {
      icon: Target,
      title: 'Accurate Staffing Forecasts',
      description: 'Reduce unnecessary labor costs and prevent service gaps with precise staffing predictions'
    },
    {
      icon: Clock,
      title: 'Moment-by-Moment Demand',
      description: 'Predict future demand hour-by-hour, enabling precise anticipation of guest traffic'
    },
    {
      icon: Zap,
      title: 'One-Click Automation',
      description: 'Automate employee schedules and tasks with capabilities and preferences considered'
    },
    {
      icon: BarChart3,
      title: 'User-Friendly Dashboards',
      description: 'AI-optimized schedules and metrics dashboards beyond traditional spreadsheets'
    },
    {
      icon: DollarSign,
      title: 'Cost Containment',
      description: 'Contained labor costs, improved satisfaction, and increased productivity'
    },
    {
      icon: Users,
      title: 'Smart Data Integration',
      description: 'Automatically collect availabilities, preferences, and requests for intelligent scheduling'
    }
  ];

  const regionalAdaptations = {
    US: {
      title: 'Tip-Yield Forecasting',
      subtitle: 'Staff high-skill servers during peak tipping',
      description: 'AI-driven forecasting anticipates demand and supports tip-yield optimization by predicting busy periods. Skill-based deployment strategically schedules experienced servers during peak tipping periods.',
      features: [
        'AI-driven demand forecasting for peak periods',
        'Skill-based deployment during high-tip times',
        'Strategic scheduling for maximum tip yield',
        'Customer confidence through expert staffing'
      ],
      color: 'bg-blue-500',
      icon: DollarSign
    },
    EU: {
      title: 'Auto-Compliance',
      subtitle: 'Working time directives compliance',
      description: 'AI scheduler maintains compliance with labor laws and avoids fines through accurate record-keeping. Drafts shifts compliant with EU Working Time Directives and AI Act regulations.',
      features: [
        'Automatic compliance with labor laws',
        'EU Working Time Directive adherence',
        'Accurate record-keeping and reporting',
        'Reduced overtime penalties and fines'
      ],
      color: 'bg-green-500',
      icon: Shield
    },
    LATAM: {
      title: 'Cash-Flow Optimization',
      subtitle: 'High-cash transaction venues',
      description: 'Real-time business analytics for smarter decision-making, uncovering trends and performance gaps. Seamless payment management helps organize finances and accelerate payments.',
      features: [
        'Real-time business analytics',
        'Cash transaction optimization',
        'Performance gap identification',
        'Faster payment processing'
      ],
      color: 'bg-orange-500',
      icon: TrendingUp
    },
    APAC: {
      title: 'Mobile Wallet Integration',
      subtitle: 'Seamless mobile payment systems',
      description: 'Integration with popular mobile wallets like WeChat Pay. Enhanced booking conversion rates and revenue growth through optimized mobile payment experiences.',
      features: [
        'WeChat and mobile wallet integration',
        '8% increase in booking conversions',
        'Nearly doubled revenue potential',
        'Optimized mobile payment flows'
      ],
      color: 'bg-yellow-500',
      icon: Smartphone
    }
  };

  const outputs = [
    {
      title: 'Optimized Shift Plans',
      description: 'Deploy the right number of workers at the right times, reducing downtime and service disruptions',
      metrics: ['Right-sized teams', 'Reduced downtime', 'Service continuity'],
      color: 'bg-primary'
    },
    {
      title: 'Labor Cost Dashboards',
      description: 'Business analytics for smarter decisions, managing costs that account for up to 40% of expenses',
      metrics: ['Cost visibility', 'Trend analysis', 'Performance gaps'],
      color: 'bg-secondary'
    },
    {
      title: 'Revenue Analytics',
      description: 'Data from POS systems and customer feedback to forecast business outcomes',
      metrics: ['Revenue forecasting', 'Customer insights', 'Future planning'],
      color: 'bg-accent-latam'
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
                Global Labor Intelligence Platform
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                AI-powered scheduler designed to bring efficiency and strategic advantage to restaurants in a dynamic industry
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  See Demo
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Brain size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Intelligence</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">40%</div>
                    <div className="text-sm opacity-90">Labor Cost Savings</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-apac mb-1">24/7</div>
                    <div className="text-sm opacity-90">Demand Monitoring</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-latam mb-1">1-Click</div>
                    <div className="text-sm opacity-90">Schedule Generation</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Global</div>
                    <div className="text-sm opacity-90">Regional Adaptation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              AI-Powered System Built To
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that leverage demand signals and provide strategic outputs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary bg-opacity-10 mb-6">
                      <Icon size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demand Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Demand Signals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI scheduler enhances accuracy by incorporating various demand signals
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
        </div>
      </section>

      {/* Outputs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Output: Optimized Plans + Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate optimized shift plans and comprehensive dashboards for data-driven decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {outputs.map((output, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className={`w-full h-4 ${output.color} rounded-full mb-6`}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{output.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                <div className="space-y-3">
                  {output.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-secondary" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Adaptations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Regional Adaptations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions to meet the unique demands of different global regions
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
            Ready to Transform Your Restaurant Operations?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            Join thousands of restaurants leveraging AI-powered scheduling for strategic advantage
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Brain size={24} />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              Schedule Demo
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Restaurants Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-200">Labor Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-200">Global Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;