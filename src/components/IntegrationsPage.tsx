import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Search,
  Star,
  Clock,
  Shield,
  Settings,
  Download,
  ExternalLink,
  Play,
  Book,
  Headphones,
  MessageSquare
} from 'lucide-react';

const IntegrationsPage: React.FC = () => {
const { t } = useTranslation('integrationsPage');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);

  const categories = [
    { id: 'all', name: t('integrationsPage.categories.all'), count: 47 },
    { id: 'pos', name: t('integrationsPage.categories.pos'), count: 12 },
    { id: 'payment', name: t('integrationsPage.categories.payment'), count: 8 },
    { id: 'scheduling', name: t('integrationsPage.categories.scheduling'), count: 6 },
    { id: 'analytics', name: t('integrationsPage.categories.analytics'), count: 7 },
    { id: 'communication', name: t('integrationsPage.categories.communication'), count: 5 },
    { id: 'accounting', name: t('integrationsPage.categories.accounting'), count: 9 }
  ];

  const integrations = [
    // POS Systems
    {
      id: 'toast',
      name: t('integrationsPage.integrations.toast.name'),
      category: 'pos',
      description: t('integrationsPage.integrations.toast.description'),
      logo: '🍞',
      status: t('common.status.verified'),
      setupTime: t('integrationsPage.integrations.toast.setupTime'),
      popularity: 95,
      features: t('integrationsPage.integrations.toast.features', { returnObjects: true }),
      regions: t('integrationsPage.integrations.toast.regions', { returnObjects: true }),
      pricing: t('integrationsPage.integrations.toast.pricing'),
      documentation: 'https://docs.toast.com',
      isPopular: true
    },
    {
      id: 'square',
      name: 'Square POS',
      category: 'pos',
      description: t('integrationsPage.integrations.square.description'),
      logo: '⬜',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.square.setupTime'),
      popularity: 92,
      features: t('integrationsPage.integrations.square.features', { returnObjects: true }),
      regions: ['US', 'Canada', 'UK', 'Australia'],
      pricing: t('integrationsPage.integrations.square.pricing')
    },
    {
      id: 'lightspeed',
      name: 'Lightspeed Restaurant',
      category: 'pos',
      description: t('integrationsPage.integrations.lightspeed.description'),
      logo: '⚡',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.lightspeed.setupTime'),
      popularity: 88,
      features: t('integrationsPage.integrations.lightspeed.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.lightspeed.pricing')
    },
    {
      id: 'clover',
      name: 'Clover POS',
      category: 'pos',
      description: t('integrationsPage.integrations.clover.description'),
      logo: '🍀',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.clover.setupTime'),
      popularity: 85,
      features: t('integrationsPage.integrations.clover.features', { returnObjects: true }),
      regions: ['US', 'Canada'],
      pricing: t('integrationsPage.integrations.clover.pricing')
    },
    {
      id: 'revel',
      name: 'Revel Systems',
      category: 'pos',
      description: t('integrationsPage.integrations.revel.description'),
      logo: '📱',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.revel.setupTime'),
      popularity: 82,
      features: t('integrationsPage.integrations.revel.features', { returnObjects: true }),
      regions: ['US', 'International'],
      pricing: t('integrationsPage.integrations.revel.pricing')
    },
    {
      id: 'micros',
      name: 'Oracle MICROS',
      category: 'pos',
      description: t('integrationsPage.integrations.micros.description'),
      logo: '🏢',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.micros.setupTime'),
      popularity: 78,
      features: t('integrationsPage.integrations.micros.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.micros.pricing')
    },

    // Payment Processing
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'payment',
      description: t('integrationsPage.integrations.stripe.description'),
      logo: '💳',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.stripe.setupTime'),
      popularity: 96,
      features: t('integrationsPage.integrations.stripe.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.stripe.pricing'),
      isPopular: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      category: 'payment',
      description: t('integrationsPage.integrations.paypal.description'),
      logo: '💰',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.paypal.setupTime'),
      popularity: 89,
      features: t('integrationsPage.integrations.paypal.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.paypal.pricing')
    },
    {
      id: 'wechatpay',
      name: 'WeChat Pay',
      category: 'payment',
      description: t('integrationsPage.integrations.wechatpay.description'),
      logo: '💬',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.wechatpay.setupTime'),
      popularity: 94,
      features: t('integrationsPage.integrations.wechatpay.features', { returnObjects: true }),
      regions: ['China', 'APAC'],
      pricing: t('integrationsPage.integrations.wechatpay.pricing')
    },
    {
      id: 'alipay',
      name: 'Alipay',
      category: 'payment',
      description: t('integrationsPage.integrations.alipay.description'),
      logo: '🐜',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.alipay.setupTime'),
      popularity: 91,
      features: t('integrationsPage.integrations.alipay.features', { returnObjects: true }),
      regions: ['China', 'Global'],
      pricing: t('integrationsPage.integrations.alipay.pricing')
    },

    // Scheduling Tools
    {
      id: 'when2work',
      name: 'When2Work',
      category: 'scheduling',
      description: t('integrationsPage.integrations.when2work.description'),
      logo: '�',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.when2work.setupTime'),
      popularity: 76,
      features: t('integrationsPage.integrations.when2work.features', { returnObjects: true }),
      regions: ['US', 'Canada'],
      pricing: t('integrationsPage.integrations.when2work.pricing')
    },
    {
      id: 'deputy',
      name: 'Deputy',
      category: 'scheduling',
      description: t('integrationsPage.integrations.deputy.description'),
      logo: '👮',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.deputy.setupTime'),
      popularity: 83,
      features: t('integrationsPage.integrations.deputy.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.deputy.pricing')
    },

    // Analytics & BI
    {
      id: 'tableau',
      name: 'Tableau',
      category: 'analytics',
      description: t('integrationsPage.integrations.tableau.description'),
      logo: '📊',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.tableau.setupTime'),
      popularity: 87,
      features: t('integrationsPage.integrations.tableau.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.tableau.pricing')
    },
    {
      id: 'powerbi',
      name: 'Microsoft Power BI',
      category: 'analytics',
      description: t('integrationsPage.integrations.powerbi.description'),
      logo: '📈',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.powerbi.setupTime'),
      popularity: 84,
      features: t('integrationsPage.integrations.powerbi.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.powerbi.pricing')
    },

    // Communication
    {
      id: 'slack',
      name: 'Slack',
      category: 'communication',
      description: t('integrationsPage.integrations.slack.description'),
      logo: '💬',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.slack.setupTime'),
      popularity: 91,
      features: t('integrationsPage.integrations.slack.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.slack.pricing')
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'communication',
      description: t('integrationsPage.integrations.teams.description'),
      logo: '👥',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.teams.setupTime'),
      popularity: 88,
      features: t('integrationsPage.integrations.teams.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.teams.pricing')
    },

    // Accounting & Finance
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      category: 'accounting',
      description: t('integrationsPage.integrations.quickbooks.description'),
      logo: '💼',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.quickbooks.setupTime'),
      popularity: 89,
      features: t('integrationsPage.integrations.quickbooks.features', { returnObjects: true }),
      regions: ['US', 'Canada', 'UK'],
      pricing: t('integrationsPage.integrations.quickbooks.pricing')
    },
    {
      id: 'xero',
      name: 'Xero',
      category: 'accounting',
      description: t('integrationsPage.integrations.xero.description'),
      logo: '📋',
      status: 'verified',
      setupTime: t('integrationsPage.integrations.xero.setupTime'),
      popularity: 85,
      features: t('integrationsPage.integrations.xero.features', { returnObjects: true }),
      regions: ['Global'],
      pricing: t('integrationsPage.integrations.xero.pricing')
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
    { number: '47+', label: t('integrationsPage.stats.totalIntegrations'), icon: Zap },
    { number: '5 min', label: t('integrationsPage.stats.avgSetupTime'), icon: Clock },
    { number: '99.9%', label: t('integrationsPage.stats.uptimeGuarantee'), icon: Shield },
    { number: '24/7', label: t('integrationsPage.stats.integrationSupport'), icon: Headphones }
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
              {t('integrationsPage.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {t('integrationsPage.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Play size={24} />
                {t('integrationsPage.hero.demoButton')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Book size={24} />
                {t('integrationsPage.hero.guideButton')}
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
              {t('integrationsPage.popular.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrationsPage.popular.subtitle')}
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
                  {(() => {
                    const features = Array.isArray(integration.features) 
                      ? integration.features 
                      : typeof integration.features === 'string' 
                        ? [integration.features] 
                        : [];
                    return features.slice(0, 4).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ));
                  })()}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      Popularity: <span className="font-semibold text-gray-700">{integration.popularity}%</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Regions: <span className="font-semibold text-gray-700">{(Array.isArray(integration.regions) ? integration.regions : []).join(', ')}</span>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    {t('integrationsPage.popular.connectButton')}
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
              {t('integrationsPage.all.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrationsPage.all.subtitle')}
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
                    placeholder={t('integrationsPage.all.searchPlaceholder')}
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
                    {t('integrationsPage.all.viewDetailsButton')}
                    <ExternalLink size={14} />
                  </button>
                  <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                    {t('integrationsPage.all.connectButton')}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('integrationsPage.all.noResultsTitle')}</h3>
              <p className="text-gray-600">{t('integrationsPage.all.noResultsMessage')}</p>
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
              <h3 className="text-3xl font-bold mb-4">{t('integrationsPage.support.title')}</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                {t('integrationsPage.support.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <MessageSquare size={24} />
                  {t('integrationsPage.support.chatButton')}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                  <Download size={24} />
                  {t('integrationsPage.support.guideButton')}
                </button>
              </div>

              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5 min</div>
                  <div className="text-blue-200">{t('integrationsPage.support.averageSetup')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">{t('integrationsPage.support.supportAvailable')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-200">{t('integrationsPage.support.uptimeSLA')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{t('integrationsPage.stats.free')}</div>
                  <div className="text-blue-200">{t('integrationsPage.support.setupAssistance')}</div>
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
              {t('integrationsPage.custom.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t('integrationsPage.custom.subtitle')}
            </p>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Settings size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('integrationsPage.custom.customTitle')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('integrationsPage.custom.customDescription')}
                  </p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('integrationsPage.custom.customButton')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <MessageSquare size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('integrationsPage.custom.suggestTitle')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('integrationsPage.custom.suggestDescription')}
                  </p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('integrationsPage.custom.suggestButton')}
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
                <div className="text-sm text-gray-500 mb-1">{t('integrationsPage.integrationDetails.setupTime')}</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.setupTime}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{t('integrationsPage.integrationDetails.popularity')}</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.popularity}%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{t('integrationsPage.integrationDetails.regions')}</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.regions.join(', ')}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{t('integrationsPage.integrationDetails.pricing')}</div>
                <div className="text-lg font-bold text-gray-900">{selectedIntegration.pricing}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('integrationsPage.integrationDetails.features')}</h4>
              <div className="grid grid-cols-2 gap-3">
                {(() => {
                  const features = Array.isArray(selectedIntegration.features) 
                    ? selectedIntegration.features 
                    : typeof selectedIntegration.features === 'string' 
                      ? [selectedIntegration.features] 
                      : [];
                  return features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                {t('integrationsPage.integrationDetails.connectButton')}
              </button>
              <button className="px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors">
                {t('integrationsPage.integrationDetails.viewDocs')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationsPage;
