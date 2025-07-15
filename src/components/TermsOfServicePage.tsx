import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  Scale, 
  Shield, 
  Users, 
  CreditCard, 
  Clock, 
  Download, 
  Mail, 
  CheckCircle, 
  AlertTriangle, 
  Gavel, 
  UserX, 
  Building2,
  ChevronDown,
  ChevronUp,
  Lock,
  Database,
  Zap,
  Ban,
  RefreshCw
} from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const { t } = useTranslation('components/terms-of-service');
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('terms');

  const tabs = [
    { id: 'terms', name: t('tabs.terms'), icon: FileText },
    { id: 'acceptable-use', name: t('tabs.acceptableUse'), icon: Shield },
    { id: 'billing', name: t('tabs.billing'), icon: CreditCard },
    { id: 'contact', name: t('tabs.contact'), icon: Mail }
  ];

  const termsSections = [
    {
      id: 'overview',
      title: t('sections.overview.title'),
      icon: FileText,
      content: t('sections.overview.content')
    },
    {
      id: 'definitions',
      title: t('sections.definitions.title'),
      icon: Database,
      content: `${t('sections.definitions.account')}: ${t('sections.definitions.accountDefinition')}\n\n${t('sections.definitions.content')}: ${t('sections.definitions.contentDefinition')}\n\n${t('sections.definitions.customerData')}: ${t('sections.definitions.customerDataDefinition')}`
    },
    {
      id: 'account-registration',
      title: t('sections.accountRegistration.title'),
      icon: Users,
      content: `**${t('sections.accountRegistration.accountCreation')}:**\n• ${t('sections.accountRegistration.accountCreationContent')}\n\n**${t('sections.accountRegistration.accountSecurity')}:**\n• ${t('sections.accountRegistration.accountSecurityContent')}`
    },
    {
      id: 'service-description',
      title: t('sections.serviceDescription.title'),
      icon: Zap,
      content: `**${t('sections.serviceDescription.serviceOverview')}:**\n• ${t('sections.serviceDescription.serviceOverviewContent')}\n\n**${t('sections.serviceDescription.serviceAvailability')}:**\n• ${t('sections.serviceDescription.serviceAvailabilityContent')}`
    },
    {
      id: 'subscription-billing',
      title: t('sections.subscriptionBilling.title'),
      icon: CreditCard,
      content: `**${t('sections.subscriptionBilling.subscriptionPlans')}:**\n• ${t('sections.subscriptionBilling.subscriptionPlansContent')}\n\n**${t('sections.subscriptionBilling.billingPayment')}:**\n• ${t('sections.subscriptionBilling.billingPaymentContent')}`
    },
    {
      id: 'data-privacy',
      title: t('sections.dataPrivacy.title'),
      icon: Lock,
      content: `**${t('sections.dataPrivacy.dataCollection')}:**\n• ${t('sections.dataPrivacy.dataCollectionContent')}\n\n**${t('sections.dataPrivacy.dataSecurity')}:**\n• ${t('sections.dataPrivacy.dataSecurityContent')}`
    },
    {
      id: 'intellectual-property',
      title: t('sections.intellectualProperty.title'),
      icon: Shield,
      content: `**${t('sections.intellectualProperty.ourIP')}:**\n• ${t('sections.intellectualProperty.ourIPContent')}\n\n**${t('sections.intellectualProperty.yourContent')}:**\n• ${t('sections.intellectualProperty.yourContentContent')}`
    },
    {
      id: 'prohibited-uses',
      title: t('sections.prohibitedUses.title'),
      icon: Ban,
      content: `**${t('sections.prohibitedUses.prohibitedActivities')}:**\n• ${t('sections.prohibitedUses.prohibitedActivitiesContent')}\n\n**${t('sections.prohibitedUses.contentRestrictions')}:**\n• ${t('sections.prohibitedUses.contentRestrictionsContent')}`
    },
    {
      id: 'warranties-disclaimers',
      title: t('sections.warranties.title'),
      icon: AlertTriangle,
      content: `**${t('sections.warranties.limitedWarranty')}:**\n• ${t('sections.warranties.limitedWarrantyContent')}\n\n**${t('sections.warranties.disclaimers')}:**\n• ${t('sections.warranties.disclaimersContent')}`
    },
    {
      id: 'limitation-liability',
      title: t('sections.limitation.title'),
      icon: Scale,
      content: `**${t('sections.limitation.liabilityLimitations')}:**\n• ${t('sections.limitation.liabilityLimitationsContent')}\n\n**${t('sections.limitation.excludedDamages')}:**\n• ${t('sections.limitation.excludedDamagesContent')}`
    },
    {
      id: 'indemnification',
      title: t('sections.indemnification.title'),
      icon: Shield,
      content: `**${t('sections.indemnification.ourIndemnification')}:**\n• ${t('sections.indemnification.ourIndemnificationContent')}\n\n**${t('sections.indemnification.yourIndemnification')}:**\n• ${t('sections.indemnification.yourIndemnificationContent')}`
    },
    {
      id: 'termination',
      title: t('sections.termination.title'),
      icon: UserX,
      content: `**${t('sections.termination.terminationByYou')}:**\n• ${t('sections.termination.terminationByYouContent')}\n\n**${t('sections.termination.terminationByUs')}:**\n• ${t('sections.termination.terminationByUsContent')}`
    },
    {
      id: 'governing-law',
      title: t('sections.governingLaw.title'),
      icon: Gavel,
      content: `**${t('sections.governingLaw.governingLaw')}:**\n• ${t('sections.governingLaw.governingLawContent')}\n\n**${t('sections.governingLaw.disputeResolution')}:**\n• ${t('sections.governingLaw.disputeResolutionContent')}`
    }
  ];

  const acceptableUsePolicies = [
    {
      title: t('acceptableUse.lawfulUse.title'),
      description: t('acceptableUse.lawfulUse.description'),
      icon: Scale,
      violations: t('acceptableUse.lawfulUse.violations', { returnObjects: true }) as string[]
    },
    {
      title: t('acceptableUse.systemIntegrity.title'),
      description: t('acceptableUse.systemIntegrity.description'),
      icon: Shield,
      violations: t('acceptableUse.systemIntegrity.violations', { returnObjects: true }) as string[]
    },
    {
      title: t('acceptableUse.dataProtection.title'),
      description: t('acceptableUse.dataProtection.description'),
      icon: Lock,
      violations: t('acceptableUse.dataProtection.violations', { returnObjects: true }) as string[]
    },
    {
      title: t('acceptableUse.professionalConduct.title'),
      description: t('acceptableUse.professionalConduct.description'),
      icon: Users,
      violations: t('acceptableUse.professionalConduct.violations', { returnObjects: true }) as string[]
    }
  ];

  const billingTerms = [
    {
      title: t('billing.subscriptionFees.title'),
      description: t('billing.subscriptionFees.description'),
      icon: CreditCard,
      details: t('billing.subscriptionFees.details', { returnObjects: true }) as string[]
    },
    {
      title: t('billing.paymentTerms.title'),
      description: t('billing.paymentTerms.description'),
      icon: Clock,
      details: t('billing.paymentTerms.details', { returnObjects: true }) as string[]
    },
    {
      title: t('billing.refundPolicy.title'),
      description: t('billing.refundPolicy.description'),
      icon: RefreshCw,
      details: t('billing.refundPolicy.details', { returnObjects: true }) as string[]
    },
    {
      title: t('billing.priceChanges.title'),
      description: t('billing.priceChanges.description'),
      icon: RefreshCw,
      details: t('billing.priceChanges.details', { returnObjects: true }) as string[]
    }
  ];

  const legalContacts = [
    {
      title: t('contact.legalDepartment.title'),
      email: t('contact.legalDepartment.email'),
      description: t('contact.legalDepartment.description'),
      icon: Gavel
    },
    {
      title: t('contact.termsConditions.title'),
      email: t('contact.termsConditions.email'),
      description: t('contact.termsConditions.description'),
      icon: FileText
    },
    {
      title: t('contact.billingAccounts.title'),
      email: t('contact.billingAccounts.email'),
      description: t('contact.billingAccounts.description'),
      icon: CreditCard
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
              <FileText size={48} className="text-white" />
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
                <div className="text-lg font-semibold">{t('dates.lastUpdated')}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">{t('hero.effectiveDate')}</div>
                <div className="text-lg font-semibold">{t('dates.effectiveDate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('summary.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('summary.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.fairUsage.title')}</h3>
              <p className="text-gray-600">{t('summary.fairUsage.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <CreditCard size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.transparentBilling.title')}</h3>
              <p className="text-gray-600">{t('summary.transparentBilling.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.dataProtection.title')}</h3>
              <p className="text-gray-600">{t('summary.dataProtection.description')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Gavel size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('summary.fairResolution.title')}</h3>
              <p className="text-gray-600">{t('summary.fairResolution.description')}</p>
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
            {/* Terms of Service Tab */}
            {activeTab === 'terms' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                  <div className="flex items-start gap-4">
                    <AlertTriangle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{t('sections.overview.warningTitle')}</h3>
                      <p className="text-blue-800">
                        {t('sections.overview.warningContent')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {termsSections.map((section) => {
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

            {/* Acceptable Use Tab */}
            {activeTab === 'acceptable-use' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('acceptableUse.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('acceptableUse.description')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {acceptableUsePolicies.map((policy, index) => {
                    const Icon = policy.icon;
                    return (
                      <div key={index} className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h3>
                            <p className="text-gray-600">{policy.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700 mb-3">{t('acceptableUse.prohibitedActivities')}</div>
                          {policy.violations.map((violation, violationIndex) => (
                            <div key={violationIndex} className="flex items-center gap-2">
                              <Ban size={16} className="text-red-500 flex-shrink-0" />
                              <span className="text-gray-700">{violation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 text-center">{t('acceptableUse.consequences.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <AlertTriangle size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('acceptableUse.consequences.warning')}</h4>
                      <p className="text-red-100">{t('acceptableUse.consequences.warningDescription')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <UserX size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('acceptableUse.consequences.suspension')}</h4>
                      <p className="text-red-100">{t('acceptableUse.consequences.suspensionDescription')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Ban size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('acceptableUse.consequences.termination')}</h4>
                      <p className="text-red-100">{t('acceptableUse.consequences.terminationDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing & Payment Tab */}
            {activeTab === 'billing' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('billing.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('billing.description')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {billingTerms.map((term, index) => {
                    const Icon = term.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{term.title}</h3>
                            <p className="text-gray-600">{term.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {term.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pricing Tiers */}
                <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('billing.pricing.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('billing.pricingTiers.starter')}</h4>
                      <div className="text-3xl font-bold text-primary mb-4">$99<span className="text-lg text-gray-600">{t('billing.pricingTiers.perMonth')}</span></div>
                      <p className="text-gray-600">{t('billing.pricingTiers.upTo25Employees')}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center border-2 border-primary">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('billing.pricingTiers.professional')}</h4>
                      <div className="text-3xl font-bold text-primary mb-4">$299<span className="text-lg text-gray-600">{t('billing.pricingTiers.perMonth')}</span></div>
                      <p className="text-gray-600">{t('billing.pricingTiers.upTo100Employees')}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t('billing.pricingTiers.enterprise')}</h4>
                      <div className="text-3xl font-bold text-primary mb-4">{t('billing.pricingTiers.custom')}</div>
                      <p className="text-gray-600">{t('billing.pricingTiers.unlimitedEmployees')}</p>
                    </div>
                  </div>
                </div>

                {/* Payment Security */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                    <Lock size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('billing.security.title')}</h3>
                  <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
                    {t('billing.security.description')}
                  </p>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">{t('billing.security.pciDss')}</div>
                      <div className="text-blue-200 text-sm">{t('billing.security.level1Certified')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">256-bit</div>
                      <div className="text-blue-200 text-sm">{t('billing.security.sslEncryption')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">{t('billing.security.fraud')}</div>
                      <div className="text-blue-200 text-sm">{t('billing.security.fraudProtection')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">{t('billing.security.monitoring')}</div>
                      <div className="text-blue-200 text-sm">{t('billing.security.monitoring')}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Legal Contact Tab */}
            {activeTab === 'contact' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('contact.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('contact.description')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {legalContacts.map((contact, index) => {
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

                {/* Legal Notice Information */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('contact.legalNotice.registeredAddress')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 size={20} className="text-primary" />
                        {t('contact.legalNotice.registeredAddress')}
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>{t('contact.legalNotice.companyName')}</div>
                        <div>{t('contact.legalNotice.address')}</div>
                        <div>{t('contact.legalNotice.cityState')}</div>
                        <div>{t('contact.legalNotice.country')}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-primary" />
                        {t('contact.legalNotice.legalService')}
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>{t('contact.legalNotice.legalServiceDescription')}</div>
                        <div>legal@optimoworkforce.com</div>
                        <div>{t('contact.legalNotice.certifiedMail')}</div>
                        <div>{t('contact.legalNotice.responseTime')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dispute Resolution Process */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t('contact.disputeResolution.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Mail size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('contact.disputeResolution.step1')}</h4>
                      <p className="text-blue-100">{t('contact.disputeResolution.step1Description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Users size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('contact.disputeResolution.step2')}</h4>
                      <p className="text-blue-100">{t('contact.disputeResolution.step2Description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Gavel size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{t('contact.disputeResolution.step3')}</h4>
                      <p className="text-blue-100">{t('contact.disputeResolution.step3Description')}</p>
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
              {t('download.description')}
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.terms.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.terms.description')}</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.downloadPDF')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Shield size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.acceptableUse.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.acceptableUse.description')}</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.downloadPDF')}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <CreditCard size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('download.serviceAgreement.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('download.serviceAgreement.description')}</p>
                  <button className="bg-accent-latam hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    {t('download.downloadPDF')}
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

export default TermsOfServicePage;
