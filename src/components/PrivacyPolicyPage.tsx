import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Eye, 
  Lock, 
  Globe, 
  Users, 
  FileText, 
  Clock, 
  Download, 
  Mail, 
  CheckCircle, 
  AlertTriangle, 
  Database, 
  Settings, 
  Trash2, 
  Edit, 
  Share2, 
  UserX, 
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation('components/privacy-policy');
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('policy');

  const lastUpdated = t('hero.date');
  const effectiveDate = t('hero.date');

  const tabs = [
    { id: 'policy', name: t('tabs.policy'), icon: Shield },
    { id: 'rights', name: t('tabs.rights'), icon: Users },
    { id: 'cookies', name: t('tabs.cookies'), icon: Settings },
    { id: 'contact', name: t('tabs.contact'), icon: Mail }
  ];

  const privacySections = [
    {
      id: 'overview',
      title: t('policy.sections.overview.title'),
      icon: Eye,
      content: t('policy.sections.overview.content')
    },
    {
      id: 'information-collection',
      title: t('policy.sections.collection.title'),
      icon: Database,
      content: t('policy.sections.collection.content')
    },
    {
      id: 'information-use',
      title: t('policy.sections.use.title'),
      icon: Settings,
      content: t('policy.sections.use.content')
    },
    {
      id: 'information-sharing',
      title: t('policy.sections.sharing.title'),
      icon: Share2,
      content: t('policy.sections.sharing.content')
    },
    {
      id: 'data-security',
      title: t('policy.sections.security.title'),
      icon: Lock,
      content: t('policy.sections.security.content')
    },
    {
      id: 'data-retention',
      title: t('policy.sections.retention.title'),
      icon: Clock,
      content: t('policy.sections.retention.content')
    },
    {
      id: 'international-transfers',
      title: t('policy.sections.transfers.title'),
      icon: Globe,
      content: t('policy.sections.transfers.content')
    },
    {
      id: 'children-privacy',
      title: t('policy.sections.children.title'),
      icon: Users,
      content: t('policy.sections.children.content')
    },
    {
      id: 'policy-changes',
      title: t('policy.sections.changes.title'),
      icon: Edit,
      content: t('policy.sections.changes.content')
    }
  ];

  const userRights = [
    {
      title: t('rights.items.access.title'),
      description: t('rights.items.access.description'),
      icon: Eye,
      actions: t('rights.items.access.actions', { returnObjects: true })
    },
    {
      title: t('rights.items.rectification.title'),
      description: t('rights.items.rectification.description'),
      icon: Edit,
      actions: t('rights.items.rectification.actions', { returnObjects: true })
    },
    {
      title: t('rights.items.erasure.title'),
      description: t('rights.items.erasure.description'),
      icon: Trash2,
      actions: t('rights.items.erasure.actions', { returnObjects: true })
    },
    {
      title: t('rights.items.restriction.title'),
      description: t('rights.items.restriction.description'),
      icon: UserX,
      actions: t('rights.items.restriction.actions', { returnObjects: true })
    },
    {
      title: t('rights.items.portability.title'),
      description: t('rights.items.portability.description'),
      icon: Download,
      actions: t('rights.items.portability.actions', { returnObjects: true })
    },
    {
      title: t('rights.items.objection.title'),
      description: t('rights.items.objection.description'),
      icon: Shield,
      actions: t('rights.items.objection.actions', { returnObjects: true })
    }
  ];

  const cookieTypes = [
    {
      category: t('cookies.categories.essential.title'),
      description: t('cookies.categories.essential.description'),
      examples: t('cookies.categories.essential.examples', { returnObjects: true }),
      canDisable: false,
      retention: t('cookies.categories.essential.retention')
    },
    {
      category: t('cookies.categories.performance.title'),
      description: t('cookies.categories.performance.description'),
      examples: t('cookies.categories.performance.examples', { returnObjects: true }),
      canDisable: true,
      retention: t('cookies.categories.performance.retention')
    },
    {
      category: t('cookies.categories.functional.title'),
      description: t('cookies.categories.functional.description'),
      examples: t('cookies.categories.functional.examples', { returnObjects: true }),
      canDisable: true,
      retention: t('cookies.categories.functional.retention')
    },
    {
      category: t('cookies.categories.marketing.title'),
      description: t('cookies.categories.marketing.description'),
      examples: t('cookies.categories.marketing.examples', { returnObjects: true }),
      canDisable: true,
      retention: t('cookies.categories.marketing.retention')
    }
  ];

  const contactInfo = [
    {
      title: t('contact.roles.dpo.title'),
      email: t('contact.roles.dpo.email'),
      description: t('contact.roles.dpo.description'),
      icon: Shield
    },
    {
      title: t('contact.roles.legal.title'),
      email: t('contact.roles.legal.email'),
      description: t('contact.roles.legal.description'),
      icon: FileText
    },
    {
      title: t('contact.roles.support.title'),
      email: t('contact.roles.support.email'),
      description: t('contact.roles.support.description'),
      icon: Users
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <Shield size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">{t('hero.lastUpdated')}</div>
                <div className="text-lg font-semibold">{lastUpdated}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">{t('hero.effectiveDate')}</div>
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.cards.noSelling.title')}</h3>
              <p className="text-gray-600">{t('summary.cards.noSelling.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Lock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.cards.encryption.title')}</h3>
              <p className="text-gray-600">{t('summary.cards.encryption.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.cards.rights.title')}</h3>
              <p className="text-gray-600">{t('summary.cards.rights.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Globe size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.cards.compliance.title')}</h3>
              <p className="text-gray-600">{t('summary.cards.compliance.description')}</p>
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
            {/* Privacy Policy Tab */}
            {activeTab === 'policy' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                  <div className="flex items-start gap-4">
                    <AlertTriangle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{t('policy.notice.title')}</h3>
                      <p className="text-blue-800">
                        {t('policy.notice.text', { date: lastUpdated })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {privacySections.map((section) => {
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

            {/* Your Rights Tab */}
            {activeTab === 'rights' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('rights.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('rights.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {userRights.map((right, index) => {
                    const Icon = right.icon;
                    return (
                      <div key={index} className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{right.title}</h3>
                            <p className="text-gray-600">{right.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700 mb-3">Available Actions:</div>
                          {(right.actions as string[]).map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                              <span className="text-gray-700">{action}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="mt-6 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          {t('common.exerciseRight')}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">{t('rights.helpTitle')}</h3>
                  <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                    {t('rights.helpText')}
                  </p>
                  <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('rights.contactButton')}
                  </button>
                </div>
              </div>
            )}

            {/* Cookie Policy Tab */}
            {activeTab === 'cookies' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('cookies.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('cookies.subtitle')}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{t('cookies.whatAreCookies.title')}</h3>
                  <p className="text-blue-800 leading-relaxed">
                    {t('cookies.whatAreCookies.text')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">{type.category}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          type.canDisable 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {type.canDisable ? t('cookies.categories.performance.optional') : t('cookies.categories.essential.required')}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-700 mb-3">Examples:</div>
                        <div className="space-y-2">
                          {(type.examples as string[]).map((example, exampleIndex) => (
                            <div key={exampleIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-gray-700">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Retention Period</div>
                          <div className="font-semibold text-gray-900">{type.retention}</div>
                        </div>
                        {type.canDisable && (
                          <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                            {t('common.manageSettings')}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('cookies.management.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-4">
                        <Settings size={32} className="text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('cookies.management.browserSettings.title')}</h4>
                      <p className="text-gray-600">{t('cookies.management.browserSettings.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-4">
                        <Shield size={32} className="text-secondary" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('cookies.management.privacyControls.title')}</h4>
                      <p className="text-gray-600">{t('cookies.management.privacyControls.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-4">
                        <Download size={32} className="text-accent-latam" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('cookies.management.cookieReport.title')}</h4>
                      <p className="text-gray-600">{t('cookies.management.cookieReport.description')}</p>
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

                {/* Company Information */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('contact.company.title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 size={20} className="text-primary" />
                        {t('contact.company.headquarters')}
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>{t('contact.company.companyName')}</div>
                        <div>{t('contact.company.address.line1')}</div>
                        <div>{t('contact.company.address.line2')}</div>
                        <div>{t('contact.company.address.country')}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe size={20} className="text-primary" />
                        {t('contact.company.euRepresentative')}
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>{t('contact.company.euCompany')}</div>
                        <div>{t('contact.company.euAddress.line1')}</div>
                        <div>{t('contact.company.euAddress.line2')}</div>
                        <div>{t('contact.company.euAddress.country')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Times */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t('contact.response.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">{t('contact.response.times.initial')}</div>
                      <div className="text-blue-200">{t('contact.response.initial')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">{t('contact.response.times.full')}</div>
                      <div className="text-blue-200">{t('contact.response.full')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">{t('contact.response.times.breach')}</div>
                      <div className="text-blue-200">{t('contact.response.breach')}</div>
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
              {t('downloads.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t('downloads.subtitle')}
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('downloads.privacyPolicy.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('downloads.privacyPolicy.description')}</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('downloads.download')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Settings size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('downloads.cookiePolicy.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('downloads.cookiePolicy.description')}</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('downloads.download')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <Shield size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('downloads.dpa.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('downloads.dpa.description')}</p>
                  <button className="bg-accent-latam hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('downloads.download')}
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

export default PrivacyPolicyPage;
