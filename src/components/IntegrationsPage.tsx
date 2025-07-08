import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Search,
  Filter,
  Star,
  Clock,
  Shield,
  Globe,
  Smartphone,
  CreditCard,
  BarChart3,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Download,
  ExternalLink,
  Play,
  Book,
  Headphones
} from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Integrations', count: 47 },
    { id: 'pos', name: 'POS Systems', count: 12 },
    { id: 'payment', name: 'Payment Processing', count: 8 },
    { id: 'scheduling', name: 'Scheduling Tools', count: 6 },
    { id: 'analytics', name: 'Analytics & BI', count: 7 },
    { id: 'communication', name: 'Communication', count: 5 },
    { id: 'accounting', name: 'Accounting & Finance', count: 9 }
  ];

  const integrations = [
    // POS Systems
    {
      id: 'toast',
      name: 'Toast POS',
      category: 'pos',
      description: 'Complete restaurant management platform with integrated payments and analytics',
      logo: '🍞',
      status: 'verified',
      setupTime: '5 minutes',
      popularity: 95,
      features: ['Real-time sales data', 'Menu synchronization', 'Staff management', 'Payment processing'],
      regions: ['US', 'Canada'],
      pricing: 'Free integration',
      documentation: 'https://docs.toast.com',
      isPopular: true
    },
    {
      id: 'square',
      name: 'Square POS',
      category: 'pos',
      description: 'All-in-one point of sale system for restaurants and retail businesses',
      logo: '⬜',
      status: 'verified',
      setupTime: '3 minutes',
      popularity: 92,
      features: ['Inventory tracking', 'Customer management', 'Online ordering', 'Analytics dashboard'],
      regions: ['US', 'Canada', 'UK', 'Australia'],
      pricing: 'Free integration'
    },
    {
      id: 'lightspeed',
      name: 'Lightspeed Restaurant',
      category: 'pos',
      description: 'Cloud-based POS system designed specifically for restaurants',
      logo: '⚡',
      status: 'verified',
      setupTime: '10 minutes',
      popularity: 88,
      features: ['Table management', 'Kitchen display', 'Inventory control', 'Reporting'],
      regions: ['Global'],
      pricing: 'Free integration'
    },
    {
      id: 'clover',
      name: 'Clover POS',
      category: 'pos',
      description: 'Flexible point of sale system with customizable hardware and software',
      logo: '🍀',
      status: 'verified',
      setupTime: '7 minutes',
      popularity: 85,
      features: ['Custom apps', 'Payment processing', 'Inventory management', 'Employee management'],
      regions: ['US', 'Canada'],
      pricing: 'Free integration'
    },
    {
      id: 'revel',
      name: 'Revel Systems',
      category: 'pos',
      description: 'iPad-based POS system for restaurants and retail establishments',
      logo: '📱',
      status: 'verified',
      setupTime: '15 minutes',
      popularity: 82,
      features: ['Multi-location support', 'Advanced reporting', 'CRM integration', 'Loyalty programs'],
      regions: ['US', 'International'],
      pricing: 'Free integration'
    },
    {
      id: 'micros',
      name: 'Oracle MICROS',
      category: 'pos',
      description: 'Enterprise-grade hospitality management system',
      logo: '🏢',
      status: 'verified',
      setupTime: '30 minutes',
      popularity: 78,
      features: ['Enterprise scalability', 'Advanced analytics', 'Multi-property management', 'Custom workflows'],
      regions: ['Global'],
      pricing: 'Custom pricing'
    },

    // Payment Processing
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'payment',
      description: 'Online payment processing platform for internet businesses',
      logo: '💳',
      status: 'verified',
      setupTime: '5 minutes',
      popularity: 96,
      features: ['Global payments', 'Subscription billing', 'Fraud protection', 'Real-time reporting'],
      regions: ['Global'],
      pricing: '2.9% + 30¢ per transaction',
      isPopular: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      category: 'payment',
      description: 'Digital payment platform for online and in-person transactions',
      logo: '💰',
      status: 'verified',
      setupTime: '8 minutes',
      popularity: 89,
      features: ['Buyer protection', 'Mobile payments', 'International transactions', 'Invoice management'],
      regions: ['Global'],
      pricing: '2.9% + fixed fee'
    },
    {
      id: 'wechatpay',
      name: 'WeChat Pay',
      category: 'payment',
      description: 'Mobile payment platform popular in China and Asia-Pacific',
      logo: '💬',
      status: 'verified',
      setupTime: '12 minutes',
      popularity: 94,
      features: ['QR code payments', 'Mini programs', 'Social integration', 'Cross-border payments'],
      regions: ['China', 'APAC'],
      pricing: 'Variable by region'
    },
    {
      id: 'alipay',
      name: 'Alipay',
      category: 'payment',
      description: 'Digital payment platform by Ant Group, widely used in China',
      logo: '🐜',
      status: 'verified',
      setupTime: '15 minutes',
      popularity: 91,
      features: ['Mobile payments', 'Digital wallet', 'Merchant services', 'International expansion'],
      regions: ['China', 'Global'],
      pricing: 'Competitive rates'
    },

    // Scheduling Tools
    {
      id: 'when2work',
      name: 'When2Work',
      category: 'scheduling',
      description: 'Online employee scheduling software for businesses',
      logo: '📅',
      status: 'verified',
      setupTime: '20 minutes',
      popularity: 76,
      features: ['Shift scheduling', 'Time tracking', 'Employee communication', 'Availability management'],
      regions: ['US', 'Canada'],
      pricing: '$2.50 per employee/month'
    },
    {
      id: 'deputy',
      name: 'Deputy',
      category: 'scheduling',
      description: 'Workforce management platform for scheduling and time tracking',
      logo: '👮',
      status: 'verified',
      setupTime: '25 minutes',
      popularity: 83,
      features: ['Auto-scheduling', 'Time & attendance', 'Task management', 'Performance tracking'],
      regions: ['Global'],
      pricing: '$4.50 per employee/month'
    },

    // Analytics & BI
    {
      id: 'tableau',
      name: 'Tableau',
      category: 'analytics',
      description: 'Business intelligence and analytics platform',
      logo: '📊',
      status: 'verified',
      setupTime: '45 minutes',
      popularity: 87,
      features: ['Data visualization', 'Advanced analytics', 'Dashboard creation', 'Real-time insights'],
      regions: ['Global'],
      pricing: '$70 per user/month'
    },
    {
      id: 'powerbi',
      name: 'Microsoft Power BI',
      category: 'analytics',
      description: 'Business analytics solution by Microsoft',
      logo: '📈',
      status: 'verified',
      setupTime: '30 minutes',
      popularity: 84,
      features: ['Interactive dashboards', 'Data modeling', 'AI insights', 'Cloud integration'],
      regions: ['Global'],
      pricing: '$10 per user/month'
    },

    // Communication
    {
      id: 'slack',
      name: 'Slack',
      category: 'communication',
      description: 'Business communication platform for teams',
      logo: '💬',
      status: 'verified',
      setupTime: '10 minutes',
      popularity: 91,
      features: ['Team messaging', 'File sharing', 'App integrations', 'Video calls'],
      regions: ['Global'],
      pricing: 'Free tier available'
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'communication',
      description: 'Collaboration platform combining chat, meetings, and files',
      logo: '👥',
      status: 'verified',
      setupTime: '15 minutes',
      popularity: 88,
      features: ['Video conferencing', 'File collaboration', 'App integration', 'Phone system'],
      regions: ['Global'],
      pricing: 'Included with Office 365'
    },

    // Accounting & Finance
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      category: 'accounting',
      description: 'Accounting software for small and medium businesses',
      logo: '💼',
      status: 'verified',
      setupTime: '20 minutes',
      popularity: 89,
      features: ['Expense tracking', 'Invoicing', 'Payroll management', 'Tax preparation'],
      regions: ['US', 'Canada', 'UK'],
      pricing: '$25 per month'
    },
    {
      id: 'xero',
      name: 'Xero',
      category: 'accounting',
      description: 'Cloud-based accounting software for small businesses',
      logo: '📋',
      status: 'verified',
      setupTime: '25 minutes',
      popularity: 85,
      features: ['Bank reconciliation', 'Invoicing', 'Expense claims', 'Financial reporting'],
      regions: ['Global'],
      pricing: '$13 per month'
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularIntegrations = integrations.filter(integration => integration.isPopular);

  const stats = [
    { number: '47+', label: 'Total Integrations', icon: Zap },
    { number: '5 min', label: 'Average Setup Time', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Integration Support', icon: Headphones }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <Zap size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              Seamless Integrations
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Connect OPTIMO Workforce with your existing tools and systems. One-click setup, real-time sync, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Play size={24} />
                View Integration Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Book size={24} />
                Integration Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Most Popular Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our most requested integrations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {popularIntegrations.map((integration) => (
              <div key={integration.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md">
                      {integration.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {integration.name}
                        <Star size={16} className="text-yellow-500 fill-current" />
                      </h3>
                      <p className="text-gray-600">{integration.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Setup Time</div>
                    <div className="text-lg font-bold text-secondary">{integration.setupTime}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {integration.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      Popularity: <span className="font-semibold text-gray-700">{integration.popularity}%</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Regions: <span className="font-semibold text-gray-700">{integration.regions.join(', ')}</span>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    Connect Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              All Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of integrations by category
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Integration Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration) => (
              <div key={integration.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                      {integration.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          integration.status === 'verified' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className="text-sm text-gray-500 capitalize">{integration.status}</span>
                      </div>
                    </div>
                  </div>
                  {integration.isPopular && (
                    <Star size={16} className="text-yellow-500 fill-current" />
                  )}
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{integration.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Setup Time:</span>
                    <span className="font-semibold text-gray-700">{integration.setupTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Popularity:</span>
                    <span className="font-semibold text-gray-700">{integration.popularity}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pricing:</span>
                    <span className="font-semibold text-gray-700">{integration.pricing}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedIntegration(integration)}
                    className="text-primary hover:text-blue-600 font-semibold text-sm flex items-center gap-1"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </button>
                  <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No integrations found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Integration Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                <Headphones size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Need Help with Integration?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Our integration specialists are here to help you connect your tools seamlessly. Get expert guidance and dedicated support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <MessageSquare size={24} />
                  Chat with Specialist
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                  <Download size={24} />
                  Integration Guide
                </button>
              </div>

              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5 min</div>
                  <div className="text-blue-200">Average Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-200">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-blue-200">Setup Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Don't See Your Tool?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We're constantly adding new integrations. Request a custom integration or suggest a new one for our roadmap.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Settings size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Need a specific integration for your business? Our team can build custom connections to your existing systems.
                  </p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Request Custom Integration
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <MessageSquare size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Suggest Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Have an idea for a new integration? Let us know what tools you'd like to see connected to OPTIMO.
                  </p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Suggest Integration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Detail Modal */}
      {selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {selectedIntegration.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedIntegration.name}</h3>
                  <p className="text-gray-600">{selectedIntegration.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedIntegration(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Setup Time</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.setupTime}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Popularity</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.popularity}%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Regions</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.regions.join(', ')}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Pricing</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.pricing}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedIntegration.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Connect Integration
              </button>
              <button className="px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationsPage;