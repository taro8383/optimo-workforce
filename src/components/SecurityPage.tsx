import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Key, 
  Database, 
  Cloud, 
  Users, 
  FileText, 
  Zap, 
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
  MapPin, 
  Building2, 
  Phone, 
  Mail
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCertification, setSelectedCertification] = useState<any>(null);

  const securityStats = [
    { number: '99.9%', label: 'Uptime SLA', icon: Monitor },
    { number: '256-bit', label: 'AES Encryption', icon: Lock },
    { number: '24/7', label: 'Security Monitoring', icon: Eye },
    { number: 'SOC 2', label: 'Type II Certified', icon: Award }
  ];

  const certifications = [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      description: 'System and Organization Controls for security, availability, and confidentiality',
      logo: '🏆',
      status: 'Certified',
      validUntil: 'December 2025',
      auditor: 'Deloitte & Touche LLP',
      scope: 'Security, Availability, Confidentiality',
      reportAvailable: true,
      details: [
        'Annual third-party security audit',
        'Comprehensive controls testing',
        'Security policies and procedures review',
        'Incident response validation'
      ]
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliant',
      description: 'General Data Protection Regulation compliance for EU data protection',
      logo: '🇪🇺',
      status: 'Compliant',
      validUntil: 'Ongoing',
      auditor: 'Internal & External Legal Review',
      scope: 'Data Protection, Privacy Rights',
      reportAvailable: false,
      details: [
        'Data minimization principles',
        'Right to be forgotten implementation',
        'Consent management systems',
        'Data breach notification procedures'
      ]
    },
    {
      id: 'ccpa',
      name: 'CCPA Compliant',
      description: 'California Consumer Privacy Act compliance for US data protection',
      logo: '🇺🇸',
      status: 'Compliant',
      validUntil: 'Ongoing',
      auditor: 'Legal Compliance Team',
      scope: 'Consumer Privacy Rights',
      reportAvailable: false,
      details: [
        'Consumer rights implementation',
        'Data transparency measures',
        'Opt-out mechanisms',
        'Third-party data sharing controls'
      ]
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      logo: '🌐',
      status: 'In Progress',
      validUntil: 'Q2 2025 (Expected)',
      auditor: 'BSI Group',
      scope: 'Information Security Management',
      reportAvailable: false,
      details: [
        'Information security policies',
        'Risk assessment procedures',
        'Security incident management',
        'Continuous improvement processes'
      ]
    },
    {
      id: 'pci',
      name: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard for payment processing',
      logo: '💳',
      status: 'Certified',
      validUntil: 'March 2025',
      auditor: 'Trustwave',
      scope: 'Payment Data Security',
      reportAvailable: true,
      details: [
        'Secure payment processing',
        'Cardholder data protection',
        'Network security controls',
        'Regular security testing'
      ]
    },
    {
      id: 'hipaa',
      name: 'HIPAA Ready',
      description: 'Health Insurance Portability and Accountability Act readiness',
      logo: '🏥',
      status: 'Ready',
      validUntil: 'Ongoing',
      auditor: 'Healthcare Compliance Specialists',
      scope: 'Healthcare Data Protection',
      reportAvailable: false,
      details: [
        'Business Associate Agreements',
        'PHI protection measures',
        'Access controls and audit logs',
        'Breach notification procedures'
      ]
    }
  ];

  const securityFeatures = [
    {
      category: 'Data Protection',
      icon: Database,
      features: [
        {
          title: 'End-to-End Encryption',
          description: 'All data encrypted in transit and at rest using AES-256 encryption',
          icon: Lock
        },
        {
          title: 'Data Anonymization',
          description: 'Personal data anonymized for analytics and reporting purposes',
          icon: Eye
        },
        {
          title: 'Secure Backups',
          description: 'Automated encrypted backups with geographic redundancy',
          icon: HardDrive
        },
        {
          title: 'Data Retention Policies',
          description: 'Configurable data retention with automatic secure deletion',
          icon: Clock
        }
      ]
    },
    {
      category: 'Access Control',
      icon: UserCheck,
      features: [
        {
          title: 'Multi-Factor Authentication',
          description: 'Required MFA for all administrative and user accounts',
          icon: Fingerprint
        },
        {
          title: 'Role-Based Access',
          description: 'Granular permissions based on user roles and responsibilities',
          icon: Users
        },
        {
          title: 'Single Sign-On (SSO)',
          description: 'Integration with enterprise identity providers',
          icon: Key
        },
        {
          title: 'Session Management',
          description: 'Automatic session timeouts and secure session handling',
          icon: Clock
        }
      ]
    },
    {
      category: 'Infrastructure Security',
      icon: Server,
      features: [
        {
          title: 'Cloud Security',
          description: 'Hosted on AWS with enterprise-grade security controls',
          icon: Cloud
        },
        {
          title: 'Network Security',
          description: 'WAF, DDoS protection, and network segmentation',
          icon: Wifi
        },
        {
          title: 'Vulnerability Management',
          description: 'Regular security scans and penetration testing',
          icon: Shield
        },
        {
          title: 'Incident Response',
          description: '24/7 security monitoring and incident response team',
          icon: AlertTriangle
        }
      ]
    },
    {
      category: 'Compliance & Auditing',
      icon: FileText,
      features: [
        {
          title: 'Audit Logs',
          description: 'Comprehensive logging of all system activities and changes',
          icon: Monitor
        },
        {
          title: 'Compliance Reporting',
          description: 'Automated compliance reports for various regulations',
          icon: FileText
        },
        {
          title: 'Third-Party Audits',
          description: 'Regular independent security assessments and certifications',
          icon: Award
        },
        {
          title: 'Privacy Controls',
          description: 'Built-in privacy controls for GDPR, CCPA, and other regulations',
          icon: Eye
        }
      ]
    }
  ];

  const securityTabs = [
    { id: 'overview', name: 'Security Overview', icon: Shield },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'features', name: 'Security Features', icon: Lock },
    { id: 'policies', name: 'Policies & Procedures', icon: FileText }
  ];

  const policies = [
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      lastUpdated: 'December 2024',
      downloadUrl: '#'
    },
    {
      title: 'Data Processing Agreement',
      description: 'GDPR-compliant data processing terms for EU customers',
      lastUpdated: 'November 2024',
      downloadUrl: '#'
    },
    {
      title: 'Security Policy',
      description: 'Comprehensive security policies and procedures',
      lastUpdated: 'January 2025',
      downloadUrl: '#'
    },
    {
      title: 'Incident Response Plan',
      description: 'Our procedures for handling security incidents',
      lastUpdated: 'October 2024',
      downloadUrl: '#'
    },
    {
      title: 'Business Continuity Plan',
      description: 'Ensuring service availability during disruptions',
      lastUpdated: 'September 2024',
      downloadUrl: '#'
    },
    {
      title: 'Vendor Security Assessment',
      description: 'Security requirements for third-party vendors',
      lastUpdated: 'August 2024',
      downloadUrl: '#'
    }
  ];

  const securityContacts = [
    {
      title: 'Security Team',
      email: 'security@optimoworkforce.com',
      description: 'Report security vulnerabilities or concerns',
      icon: Shield
    },
    {
      title: 'Privacy Officer',
      email: 'privacy@optimoworkforce.com',
      description: 'Data protection and privacy inquiries',
      icon: Eye
    },
    {
      title: 'Compliance Team',
      email: 'compliance@optimoworkforce.com',
      description: 'Regulatory compliance questions',
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
              Enterprise-Grade Security
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Your data is protected by industry-leading security measures, compliance certifications, and continuous monitoring. Trust OPTIMO with your most sensitive workforce data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Download size={24} />
                Security Overview
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Book size={24} />
                Compliance Reports
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
                    Security at Every Layer
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From data encryption to access controls, we implement comprehensive security measures to protect your business
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                      <Database size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
                    <p className="text-gray-600 mb-6">
                      End-to-end encryption, secure backups, and data anonymization protect your sensitive information at all times.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">AES-256 encryption</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Encrypted backups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Data anonymization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                      <UserCheck size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Access Control</h3>
                    <p className="text-gray-600 mb-6">
                      Multi-factor authentication, role-based permissions, and SSO integration ensure only authorized access.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Multi-factor authentication</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Role-based access control</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">SSO integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                      <Monitor size={32} className="text-accent-latam" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Monitoring</h3>
                    <p className="text-gray-600 mb-6">
                      24/7 security monitoring, threat detection, and incident response keep your data safe around the clock.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">24/7 monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Threat detection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">Incident response</span>
                      </li>
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
                    Industry Certifications
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We maintain the highest security and compliance standards through rigorous third-party audits and certifications
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
                          <div className="text-sm text-gray-500 mb-1">Valid Until</div>
                          <div className="font-semibold text-gray-900">{cert.validUntil}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Auditor</div>
                          <div className="font-semibold text-gray-900">{cert.auditor}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">Scope</div>
                        <div className="font-semibold text-gray-900">{cert.scope}</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => setSelectedCertification(cert)}
                          className="text-primary hover:text-blue-600 font-semibold text-sm flex items-center gap-1"
                        >
                          View Details
                          <ExternalLink size={14} />
                        </button>
                        {cert.reportAvailable && (
                          <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                            <Download size={16} />
                            Download Report
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
                    Comprehensive Security Features
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Every aspect of our platform is designed with security in mind, from infrastructure to application level
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
                    Security Policies & Procedures
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transparent documentation of our security practices, policies, and procedures
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
                            Last updated: {policy.lastUpdated}
                          </div>
                        </div>
                        <FileText size={24} className="text-gray-400" />
                      </div>
                      <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                        <Download size={16} />
                        Download
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
              Security & Compliance Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our security practices? Contact our specialized teams
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
              Ready to Experience Enterprise Security?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              See how OPTIMO Workforce protects your data with industry-leading security measures. Start your secure trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Play size={24} />
                Security Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Download size={24} />
                Security Whitepaper
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">SOC 2</div>
                <div className="text-blue-200">Type II Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">256-bit</div>
                <div className="text-blue-200">AES Encryption</div>
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
                <div className="text-sm text-gray-500 mb-1">Status</div>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Certification Details</h4>
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
                  Download Report
                </button>
              )}
              <button className="px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors">
                Contact Compliance Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityPage;