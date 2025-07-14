import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  CheckCircle, 
  AlertTriangle, 
  Key, 
  Database, 
  Cloud, 
  Users, 
  FileText, 
  Monitor, 
  Download, 
  ExternalLink, 
  Play, 
  Book, 
  Award, 
  Fingerprint, 
  Wifi, 
  HardDrive, 
  UserCheck, 
  Clock, 
  Mail
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  const { t } = useTranslation('securityPage');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCertification, setSelectedCertification] = useState<any>(null);

  const securityStats = [
    { number: '99.9%', label: t('stats.uptime'), icon: Monitor },
    { number: '256-bit', label: t('stats.encryption'), icon: Lock },
    { number: '24/7', label: t('stats.monitoring'), icon: Eye },
    { number: 'SOC 2', label: t('stats.certified'), icon: Award }
  ];

  const certifications = [
    {
      id: 'soc2',
      name: t('certifications.soc2.name'),
      description: t('certifications.soc2.description'),
      logo: '🏆',
      status: t('certificationStatus.certified'),
      validUntil: 'December 2025',
      auditor: 'Deloitte & Touche LLP',
      scope: ['security', 'availability', 'confidentiality'],
      reportAvailable: true,
      details: t('certificationDetails.soc2', { returnObjects: true })
    },
    {
      id: 'gdpr',
      name: t('certifications.gdpr.name'),
      description: t('certifications.gdpr.description'),
      logo: '🇪🇺',
      status: t('certificationStatus.compliant'),
      validUntil: 'Ongoing',
      auditor: 'Internal & External Legal Review',
      scope: ['dataProtection', 'privacyRights'],
      reportAvailable: false,
      details: t('certificationDetails.gdpr', { returnObjects: true })
    },
    {
      id: 'ccpa',
      name: t('certifications.ccpa.name'),
      description: t('certifications.ccpa.description'),
      logo: '🇺🇸',
      status: t('certificationStatus.compliant'),
      validUntil: 'Ongoing',
      auditor: 'Legal Compliance Team',
      scope: ['consumerPrivacyRights'],
      reportAvailable: false,
      details: t('certificationDetails.ccpa', { returnObjects: true })
    },
    {
      id: 'iso27001',
      name: t('certifications.iso27001.name'),
      description: t('certifications.iso27001.description'),
      logo: '🌐',
      status: t('certificationStatus.inProgress'),
      validUntil: 'Q2 2025 (Expected)',
      auditor: 'BSI Group',
      scope: ['informationSecurityManagement'],
      reportAvailable: false,
      details: t('certificationDetails.iso27001', { returnObjects: true })
    },
    {
      id: 'pci',
      name: t('certifications.pci.name'),
      description: t('certifications.pci.description'),
      logo: '💳',
      status: t('certificationStatus.certified'),
      validUntil: 'March 2025',
      auditor: 'Trustwave',
      scope: ['paymentDataSecurity'],
      reportAvailable: true,
      details: t('certificationDetails.pci', { returnObjects: true })
    },
    {
      id: 'hipaa',
      name: t('certifications.hipaa.name'),
      description: t('certifications.hipaa.description'),
      logo: '🏥',
      status: t('certificationStatus.ready'),
      validUntil: 'Ongoing',
      auditor: 'Healthcare Compliance Specialists',
      scope: ['healthcareDataProtection'],
      reportAvailable: false,
      details: t('certificationDetails.hipaa', { returnObjects: true })
    }
  ];

  const securityFeatures = [
    {
      category: 'Data Protection',
      icon: Database,
      features: [
        {
          title: t('features.dataProtection.endToEndEncryption.title'),
          description: t('features.dataProtection.endToEndEncryption.description'),
          icon: Lock
        },
        {
          title: t('features.dataProtection.dataAnonymization.title'),
          description: t('features.dataProtection.dataAnonymization.description'),
          icon: Eye
        },
        {
          title: t('features.dataProtection.secureBackups.title'),
          description: t('features.dataProtection.secureBackups.description'),
          icon: HardDrive
        },
        {
          title: t('features.dataProtection.dataRetention.title'),
          description: t('features.dataProtection.dataRetention.description'),
          icon: Clock
        }
      ]
    },
    {
      category: 'Access Control',
      icon: UserCheck,
      features: [
        {
          title: t('features.accessControl.mfa.title'),
          description: t('features.accessControl.mfa.description'),
          icon: Fingerprint
        },
        {
          title: t('features.accessControl.roleBasedAccess.title'),
          description: t('features.accessControl.roleBasedAccess.description'),
          icon: Users
        },
        {
          title: t('features.accessControl.sso.title'),
          description: t('features.accessControl.sso.description'),
          icon: Key
        },
        {
          title: t('features.accessControl.sessionManagement.title'),
          description: t('features.accessControl.sessionManagement.description'),
          icon: Clock
        }
      ]
    },
    {
      category: 'Infrastructure Security',
      icon: Server,
      features: [
        {
          title: t('features.infrastructureSecurity.cloudSecurity.title'),
          description: t('features.infrastructureSecurity.cloudSecurity.description'),
          icon: Cloud
        },
        {
          title: t('features.infrastructureSecurity.networkSecurity.title'),
          description: t('features.infrastructureSecurity.networkSecurity.description'),
          icon: Wifi
        },
        {
          title: t('features.infrastructureSecurity.vulnerabilityManagement.title'),
          description: t('features.infrastructureSecurity.vulnerabilityManagement.description'),
          icon: Shield
        },
        {
          title: t('features.infrastructureSecurity.incidentResponse.title'),
          description: t('features.infrastructureSecurity.incidentResponse.description'),
          icon: AlertTriangle
        }
      ]
    },
    {
      category: 'Compliance & Auditing',
      icon: FileText,
      features: [
        {
          title: t('features.compliance.auditLogs.title'),
          description: t('features.compliance.auditLogs.description'),
          icon: Monitor
        },
        {
          title: t('features.compliance.complianceReporting.title'),
          description: t('features.compliance.complianceReporting.description'),
          icon: FileText
        },
        {
          title: t('features.compliance.thirdPartyAudits.title'),
          description: t('features.compliance.thirdPartyAudits.description'),
          icon: Award
        },
        {
          title: t('features.compliance.privacyControls.title'),
          description: t('features.compliance.privacyControls.description'),
          icon: Eye
        }
      ]
    }
  ];

  const securityTabs = [
    { id: 'overview', name: t('tabs.overview'), icon: Shield },
    { id: 'certifications', name: t('tabs.certifications'), icon: Award },
    { id: 'features', name: t('tabs.features'), icon: Lock },
    { id: 'policies', name: t('tabs.policies'), icon: FileText }
  ];

  const policies = [
    {
      title: t('policies.privacy.title'),
      description: t('policies.privacy.description'),
      lastUpdated: 'December 2024',
      downloadUrl: '#'
    },
    {
      title: t('policies.dpa.title'),
      description: t('policies.dpa.description'),
      lastUpdated: 'November 2024',
      downloadUrl: '#'
    },
    {
      title: t('policies.security.title'),
      description: t('policies.security.description'),
      lastUpdated: 'January 2025',
      downloadUrl: '#'
    },
    {
      title: t('policies.incidentResponse.title'),
      description: t('policies.incidentResponse.description'),
      lastUpdated: 'October 2024',
      downloadUrl: '#'
    },
    {
      title: t('policies.businessContinuity.title'),
      description: t('policies.businessContinuity.description'),
      lastUpdated: 'September 2024',
      downloadUrl: '#'
    },
    {
      title: t('policies.vendorSecurity.title'),
      description: t('policies.vendorSecurity.description'),
      lastUpdated: 'August 2024',
      downloadUrl: '#'
    }
  ];

  const securityContacts = [
    {
      title: t('contacts.securityTeam.title'),
      email: 'security@optimoworkforce.com',
      description: t('contacts.securityTeam.description'),
      icon: Shield
    },
    {
      title: t('contacts.privacyOfficer.title'),
      email: 'privacy@optimoworkforce.com',
      description: t('contacts.privacyOfficer.description'),
      icon: Eye
    },
    {
      title: t('contacts.complianceTeam.title'),
      email: 'compliance@optimoworkforce.com',
      description: t('contacts.complianceTeam.description'),
      icon: FileText
    }
  ];

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
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Download size={24} />
                {t('hero.downloadBtn')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Book size={24} />
                {t('hero.reportsBtn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => {
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

      {/* Security Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {securityTabs.map((tab) => {
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
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('overview.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('overview.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                      <Database size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('overview.dataProtection')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('overview.dataProtectionDesc')}
                    </p>
                    <ul className="space-y-2">
                      {(Array.isArray(t('overview.dataProtectionList', { returnObjects: true })) 
                        ? t('overview.dataProtectionList', { returnObjects: true }) as string[]
                        : []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-secondary" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                      <UserCheck size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('overview.accessControl')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('overview.accessControlDesc')}
                    </p>
                    <ul className="space-y-2">
                      {(Array.isArray(t('overview.accessControlList', { returnObjects: true })) 
                        ? t('overview.accessControlList', { returnObjects: true }) as string[]
                        : []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-secondary" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                      <Monitor size={32} className="text-accent-latam" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('overview.continuousMonitoring')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('overview.continuousMonitoringDesc')}
                    </p>
                    <ul className="space-y-2">
                      {(Array.isArray(t('overview.continuousMonitoringList', { returnObjects: true })) 
                        ? t('overview.continuousMonitoringList', { returnObjects: true }) as string[]
                        : []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-secondary" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('certifications.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('certifications.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md">
                            {cert.logo}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                            <p className="text-gray-600">{cert.description}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                          cert.status === 'Compliant' ? 'bg-blue-100 text-blue-700' :
                          cert.status === 'Ready' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {cert.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{t('certifications.validUntil')}</div>
                          <div className="font-semibold text-gray-900">{cert.validUntil}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{t('certifications.auditor')}</div>
                          <div className="font-semibold text-gray-900">{cert.auditor}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                          <div className="text-sm text-gray-500 mb-2">{t('certifications.scope')}</div>
                          <div className="font-semibold text-gray-900">
                            {cert.scope.map(s => t(`scopeValues.${s}`)).join(', ')}
                          </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => setSelectedCertification(cert)}
                          className="text-primary hover:text-blue-600 font-semibold text-sm flex items-center gap-1"
                        >
                          {t('certifications.viewDetails')}
                          <ExternalLink size={14} />
                        </button>
                        {cert.reportAvailable && (
                          <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                            <Download size={16} />
                            {t('certifications.downloadReport')}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('features.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('features.subtitle')}
                  </p>
                </div>

                <div className="space-y-16">
                  {securityFeatures.map((category, categoryIndex) => {
                    const CategoryIcon = category.icon;
                    return (
                      <div key={categoryIndex}>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                            <CategoryIcon size={24} className="text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          {category.features.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={featureIndex} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FeatureIcon size={20} className="text-gray-600" />
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Policies Tab */}
            {activeTab === 'policies' && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    {t('policies.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('policies.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {policies.map((policy, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h3>
                          <p className="text-gray-600 mb-4">{policy.description}</p>
                          <div className="text-sm text-gray-500">
                          {t('policies.lastUpdated')}: {policy.lastUpdated}
                          </div>
                        </div>
                        <FileText size={24} className="text-gray-400" />
                      </div>
                      <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                        <Download size={16} />
                        {t('policies.download')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Security Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('contacts.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contacts.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityContacts.map((contact, index) => {
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
        </div>
      </section>

      {/* Security CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <Shield size={40} />
            </div>
              <h3 className="text-3xl font-bold mb-4">
                {t('cta.title')}
              </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Play size={24} />
                {t('hero.demoBtn')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Download size={24} />
                {t('hero.whitepaperBtn')}
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
      <div className="text-3xl font-bold mb-2">{t('certifications.soc2.name')}</div>
                <div className="text-blue-200">{t('stats.certified')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">{t('stats.uptime')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">{t('stats.monitoring')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">256-bit</div>
                <div className="text-blue-200">{t('stats.encryption')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Detail Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {selectedCertification.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCertification.name}</h3>
                  <p className="text-gray-600">{selectedCertification.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCertification(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">{t('certifications.detailsTitle')}</div>
                <div className="text-lg font-bold text-gray-900">{selectedCertification.status}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Valid Until</div>
                <div className="text-lg font-bold text-gray-900">{selectedCertification.validUntil}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Auditor</div>
                <div className="text-lg font-bold text-gray-900">{selectedCertification.auditor}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Scope</div>
                <div className="text-lg font-bold text-gray-900">{selectedCertification.scope}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('certifications.detailsTitle')}</h4>
              <div className="space-y-3">
                {selectedCertification.details.map((detail: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedCertification.reportAvailable && (
                <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Download size={16} />
                {t('certifications.downloadReport')}
                </button>
              )}
              <button className="px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors">
                {t('modal.contactTeam')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityPage;
