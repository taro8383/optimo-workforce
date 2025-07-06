import React, { useState } from 'react';
import { Mail, FileText, Globe, Users, Download, Check, Shield, Zap } from 'lucide-react';

const NewsletterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    industry: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Newsletter signup:', formData);
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: FileText,
      title: 'Exclusive Whitepapers',
      description: 'In-depth analysis of labor optimization strategies and industry benchmarks',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Regional Labor Law Updates',
      description: 'Stay compliant with changing regulations across US, EU, LATAM, and APAC',
      color: 'text-secondary'
    },
    {
      icon: Zap,
      title: 'Early Feature Access',
      description: 'Be the first to test new AI optimization features before public release',
      color: 'text-accent-latam'
    }
  ];

  const regions = [
    'United States',
    'European Union',
    'Latin America',
    'Asia-Pacific',
    'Other'
  ];

  const industries = [
    'Quick Service Restaurant',
    'Fine Dining',
    'Casual Dining',
    'Hotel & Hospitality',
    'Café & Coffee Shop',
    'Catering',
    'Other'
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
                Stay Ahead of Labor Trends
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Get exclusive optimization tactics monthly—from AI insights to regulatory updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Sample Issue
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Mail size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Monthly Insights</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <FileText size={24} className="text-secondary" />
                      <span className="font-semibold">Labor Optimization Report</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <Globe size={24} className="text-accent-latam" />
                      <span className="font-semibold">Regional Compliance Updates</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <Zap size={24} className="text-accent-apac" />
                      <span className="font-semibold">AI Feature Previews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive content designed for hospitality leaders and optimization experts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                      <Icon size={40} className={benefit.color} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Join 10,000+ Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Get personalized insights for your region and industry
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      Region *
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your region</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                  >
                    <Mail size={24} />
                    Optimize My Knowledge
                  </button>
                  
                  <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-secondary" />
                      <span>GDPR-compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-secondary" />
                      <span>1-click unsubscribe</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-secondary to-green-400 rounded-2xl p-8 text-white text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                <Check size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Welcome to the Community!</h3>
              <p className="text-lg mb-6">
                You'll receive your first optimization insights within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe Another Email
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Recent Highlights
            </h2>
            <p className="text-xl text-gray-600">
              See what our subscribers are reading
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">December 2024 Issue</div>
                  <h3 className="text-xl font-bold text-gray-900">California $20/hr Wage Impact Report</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive analysis of how California's new minimum wage affects restaurant scheduling, 
                with AI-powered strategies to maintain profitability while ensuring compliance.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>12 pages</span>
                  <span>•</span>
                  <span>3,247 downloads</span>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download Excerpt
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-green-400 rounded-lg flex items-center justify-center">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">November 2024 Issue</div>
                  <h3 className="text-xl font-bold text-gray-900">APAC Mobile Payment Trends</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                How Singapore and Hong Kong restaurants are leveraging mobile wallet preferences 
                to increase tip yields by 22% through optimized staffing strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>8 pages</span>
                  <span>•</span>
                  <span>2,891 downloads</span>
                </div>
                <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download Excerpt
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-full">
              <Users className="text-primary" size={24} />
              <span className="text-lg font-semibold text-primary">
                Join 10,000+ subscribers getting exclusive insights monthly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            Ready to Optimize Your Knowledge?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            Get the insights that industry leaders use to stay ahead of labor trends
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Mail size={24} />
              Subscribe Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View All Past Issues
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24</div>
              <div className="text-blue-200">Monthly Issues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-200">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-blue-200">Forever</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;