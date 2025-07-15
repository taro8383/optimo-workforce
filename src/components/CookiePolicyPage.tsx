import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Settings, 
  Eye, 
  Shield, 
  Globe, 
  BarChart3, 
  Clock, 
  Download, 
  Mail, 
  CheckCircle, 
  Cookie, 
  Database, 
  Monitor, 
  Smartphone,
  ChevronDown,
  ChevronUp,
  Target,
  X,
  RefreshCw
} from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const { t } = useTranslation('components/cookie-policy');
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('policy');
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    performance: true,
    functional: true,
    marketing: false
  });

  const lastUpdated = t('heroSection.meta.dateValue');
  const effectiveDate = t('heroSection.meta.dateValue');

  const tabs = [
    { id: 'policy', name: t('navigation.tabs.policy'), icon: Cookie },
    { id: 'preferences', name: t('navigation.tabs.preferences'), icon: Settings },
    { id: 'types', name: t('navigation.tabs.types'), icon: Database },
    { id: 'contact', name: t('navigation.tabs.contact'), icon: Mail }
  ];

  const cookieSections = [
    {
      id: 'overview',
      title: t('sections.overview.title'),
      icon: Cookie,
      content: t('sections.overview.content')
    },
    {
      id: 'types-we-use',
      title: t('sections.types.title'),
      icon: Database,
      content: t('sections.types.content')
    },
    {
      id: 'how-we-use',
      title: t('sections.usage.title'),
      icon: Target,
      content: t('sections.usage.content')
    },
    {
      id: 'third-party',
      title: t('sections.thirdParty.title'),
      icon: Globe,
      content: t('sections.thirdParty.content')
    },
    {
      id: 'cookie-duration',
      title: t('sections.duration.title'),
      icon: Clock,
      content: t('sections.duration.content')
    },
    {
      id: 'managing-cookies',
      title: t('sections.managing.title'),
      icon: Settings,
      content: t('sections.managing.content')
    },
    {
      id: 'legal-basis',
      title: t('sections.legal.title'),
      icon: Shield,
      content: t('sections.legal.content')
    },
    {
      id: 'updates-changes',
      title: t('sections.updates.title'),
      icon: RefreshCw,
      content: t('sections.updates.content')
    }
  ];

  const cookieTypes = [
    {
      category: t('cookieTypes.essential.title'),
      description: t('cookieTypes.essential.description'),
      examples: [
        { name: 'session_id', purpose: t('cookieTypes.essential.examples.sessionId'), duration: t('cookieTypes.essential.examples.session'), canDisable: false },
        { name: 'csrf_token', purpose: t('cookieTypes.essential.examples.csrfToken'), duration: t('cookieTypes.essential.examples.oneHour'), canDisable: false },
        { name: 'auth_token', purpose: t('cookieTypes.essential.examples.authToken'), duration: t('cookieTypes.essential.examples.thirtyDays'), canDisable: false },
        { name: 'load_balancer', purpose: t('cookieTypes.essential.examples.loadBalancer'), duration: t('cookieTypes.essential.examples.session'), canDisable: false }
      ],
      color: 'bg-red-500',
      enabled: true,
      required: true
    },
    {
      category: t('cookieTypes.performance.title'),
      description: t('cookieTypes.performance.description'),
      examples: [
        { name: '_ga', purpose: t('cookieTypes.performance.examples.ga'), duration: t('cookieTypes.performance.examples.twoYears'), canDisable: true },
        { name: '_gid', purpose: t('cookieTypes.performance.examples.gid'), duration: t('cookieTypes.performance.examples.twentyFourHours'), canDisable: true },
        { name: 'performance_metrics', purpose: t('cookieTypes.performance.examples.performanceMetrics'), duration: t('cookieTypes.performance.examples.oneYear'), canDisable: true },
        { name: 'error_tracking', purpose: t('cookieTypes.performance.examples.errorTracking'), duration: t('cookieTypes.performance.examples.thirtyDays'), canDisable: true }
      ],
      color: 'bg-blue-500',
      enabled: cookiePreferences.performance,
      required: false
    },
    {
      category: t('cookieTypes.functional.title'),
      description: t('cookieTypes.functional.description'),
      examples: [
        { name: 'language_pref', purpose: t('cookieTypes.functional.examples.languagePref'), duration: t('cookieTypes.functional.examples.oneYear'), canDisable: true },
        { name: 'theme_setting', purpose: t('cookieTypes.functional.examples.themeSetting'), duration: t('cookieTypes.functional.examples.oneYear'), canDisable: true },
        { name: 'dashboard_layout', purpose: t('cookieTypes.functional.examples.dashboardLayout'), duration: t('cookieTypes.functional.examples.sixMonths'), canDisable: true },
        { name: 'notification_prefs', purpose: t('cookieTypes.functional.examples.notificationPrefs'), duration: t('cookieTypes.functional.examples.oneYear'), canDisable: true }
      ],
      color: 'bg-green-500',
      enabled: cookiePreferences.functional,
      required: false
    },
    {
      category: t('cookieTypes.marketing.title'),
      description: t('cookieTypes.marketing.description'),
      examples: [
        { name: 'marketing_id', purpose: t('cookieTypes.marketing.examples.marketingId'), duration: t('cookieTypes.marketing.examples.oneYear'), canDisable: true },
        { name: 'conversion_pixel', purpose: t('cookieTypes.marketing.examples.conversionPixel'), duration: t('cookieTypes.marketing.examples.ninetyDays'), canDisable: true },
        { name: 'remarketing_tag', purpose: t('cookieTypes.marketing.examples.remarketingTag'), duration: t('cookieTypes.marketing.examples.oneHundredEightyDays'), canDisable: true },
        { name: 'social_pixel', purpose: t('cookieTypes.marketing.examples.socialPixel'), duration: t('cookieTypes.marketing.examples.oneYear'), canDisable: true }
      ],
      color: 'bg-purple-500',
      enabled: cookiePreferences.marketing,
      required: false
    }
  ];

  const contactInfo = [
    {
      title: t('contact.privacyTeam.title'),
      email: 'privacy@optimoworkforce.com',
      description: t('contact.privacyTeam.description'),
      icon: Shield
    },
    {
      title: t('contact.dpo.title'),
      email: 'dpo@optimoworkforce.com',
      description: t('contact.dpo.description'),
      icon: Eye
    },
    {
      title: t('contact.support.title'),
      email: 'support@optimoworkforce.com',
      description: t('contact.support.description'),
      icon: Settings
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleCookiePreferenceChange = (category: string, enabled: boolean) => {
    if (category === 'essential') return;
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert(t('preferences.saveSuccess'));
  };

  const resetPreferences = () => {
    setCookiePreferences({
      essential: true,
      performance: true,
      functional: true,
      marketing: false
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <Cookie size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {t('heroSection.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {t('heroSection.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">{t('heroSection.meta.lastUpdated')}</div>
                <div className="text-lg font-semibold">{lastUpdated}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">{t('heroSection.meta.effectiveDate')}</div>
                <div className="text-lg font-semibold">{effectiveDate}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('summary.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('summary.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Shield size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.essential.title')}</h3>
              <p className="text-gray-600">{t('summary.essential.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <BarChart3 size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.performance.title')}</h3>
              <p className="text-gray-600">{t('summary.performance.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Settings size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.functional.title')}</h3>
              <p className="text-gray-600">{t('summary.functional.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Target size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.marketing.title')}</h3>
              <p className="text-gray-600">{t('summary.marketing.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {/* Cookie Policy Tab */}
            {activeTab === 'policy' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                  <div className="flex items-start gap-4">
                    <Cookie size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{t('policy.consent.title')}</h3>
                      <p className="text-blue-800">
                        {t('policy.consent.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {cookieSections.map((section) => {
                    const Icon = section.icon;
                    const isExpanded = expandedSection === section.id;
                    
                    return (
                      <div key={section.id} className="bg-gray-50 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                              <Icon size={24} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                          </div>
                          {isExpanded ? (
                            <ChevronUp size={24} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={24} className="text-gray-400" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-8 pb-8">
                            <div className="bg-white rounded-lg p-6">
                              <div className="prose prose-lg max-w-none">
                                {section.content.split('\n\n').map((paragraph, index) => (
                                  <div key={index} className="mb-4">
                                    {paragraph.startsWith('**') ? (
                                      <div className="font-semibold text-gray-900 mb-2">
                                        {paragraph.replace(/\*\*/g, '')}
                                      </div>
                                    ) : paragraph.startsWith('•') ? (
                                      <ul className="list-disc list-inside space-y-1 ml-4">
                                        {paragraph.split('\n').map((item, itemIndex) => (
                                          <li key={itemIndex} className="text-gray-700">
                                            {item.replace('• ', '')}
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Cookie Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('preferences.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('preferences.subtitle')}
                  </p>
                </div>

                <div className="space-y-8">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{type.category}</h3>
                            <p className="text-gray-600">{type.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {type.required && (
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                              {t('cookieTypes.required')}
                            </span>
                          )}
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={type.enabled}
                              onChange={(e) => handleCookiePreferenceChange(
                                type.category.toLowerCase().split(' ')[0], 
                                e.target.checked
                              )}
                              disabled={type.required}
                              className="sr-only peer"
                            />
                            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${type.enabled ? 'peer-checked:bg-blue-600' : ''} ${type.required ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                          </label>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-white rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{example.name}</h4>
                              <span className="text-sm text-gray-500">{example.duration}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{example.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t('preferences.save.title')}</h3>
                      <p className="text-gray-600">{t('preferences.save.description')}</p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={resetPreferences}
                        className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors flex items-center gap-2"
                      >
                        <RefreshCw size={16} />
                        {t('preferences.reset')}
                      </button>
                      <button
                        onClick={savePreferences}
                        className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                      >
                        <CheckCircle size={16} />
                        {t('preferences.save.button')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cookie Types Tab */}
            {activeTab === 'types' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('types.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('types.subtitle')}
                  </p>
                </div>

                <div className="space-y-12">
                  {cookieTypes.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                        {category.required && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            {t('cookieTypes.alwaysActive')}
                          </span>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                        <p className="text-lg text-gray-700 mb-6">{category.description}</p>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('types.table.cookieName')}</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('types.table.purpose')}</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('types.table.duration')}</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('types.table.canDisable')}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {category.examples.map((cookie, cookieIndex) => (
                                <tr key={cookieIndex} className="hover:bg-gray-50">
                                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{cookie.name}</td>
                                  <td className="px-6 py-4 text-sm text-gray-700">{cookie.purpose}</td>
                                  <td className="px-6 py-4 text-sm text-gray-700">{cookie.duration}</td>
                                  <td className="px-6 py-4 text-sm">
                                    {cookie.canDisable ? (
                                      <CheckCircle size={16} className="text-green-500" />
                                    ) : (
                                      <X size={16} className="text-red-500" />
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Browser Instructions */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t('types.browser.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Monitor size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('types.browser.desktop.title')}</h4>
                      <p className="text-blue-100">{t('types.browser.desktop.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Smartphone size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('types.browser.mobile.title')}</h4>
                      <p className="text-blue-100">{t('types.browser.mobile.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Settings size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('types.browser.tools.title')}</h4>
                      <p className="text-blue-100">{t('types.browser.tools.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('contact.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('contact.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                          <Icon size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                        <p className="text-gray-600 mb-6">{contact.description}</p>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                        >
                          <Mail size={16} />
                          {contact.email}
                        </a>
                      </div>
                    );
                  })}
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('faq.title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{t('faq.withoutCookies.question')}</h4>
                      <p className="text-gray-700 mb-6">
                        {t('faq.withoutCookies.answer')}
                      </p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{t('faq.updateFrequency.question')}</h4>
                      <p className="text-gray-700">
                        {t('faq.updateFrequency.answer')}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{t('faq.dataSharing.question')}</h4>
                      <p className="text-gray-700 mb-6">
                        {t('faq.dataSharing.answer')}
                      </p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{t('faq.deleteCookies.question')}</h4>
                      <p className="text-gray-700">
                        {t('faq.deleteCookies.answer')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('download.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t('download.subtitle')}
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Cookie size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.policy.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.policy.description')}</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.policy.button')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Database size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.inventory.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.inventory.description')}</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.inventory.button')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <Settings size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.guide.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.guide.description')}</p>
                  <button className="bg-accent-latam hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.guide.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
