import React, { useState } from 'react';
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
  Phone, 
  MapPin, 
  CheckCircle, 
  AlertTriangle, 
  Database, 
  Settings, 
  Trash2, 
  Edit, 
  Share2, 
  UserX, 
  Calendar, 
  Building2,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('policy');

  const lastUpdated = 'January 15, 2025';
  const effectiveDate = 'January 15, 2025';

  const tabs = [
    { id: 'policy', name: 'Privacy Policy', icon: Shield },
    { id: 'rights', name: 'Your Rights', icon: Users },
    { id: 'cookies', name: 'Cookie Policy', icon: Settings },
    { id: 'contact', name: 'Contact Us', icon: Mail }
  ];

  const privacySections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Eye,
      content: `OPTIMO Workforce ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our workforce optimization platform and related services.

This policy applies to all users of our services, including restaurant owners, managers, employees, and any other individuals whose data we process in connection with our services.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect several types of information to provide and improve our services:

**Personal Information:**
• Name, email address, phone number
• Job title, department, and role information
• Employee ID and scheduling preferences
• Profile photos and contact details

**Business Information:**
• Company name, address, and business type
• POS system data and sales information
• Scheduling and shift data
• Labor cost and performance metrics

**Technical Information:**
• IP address, browser type, and device information
• Usage data and interaction patterns
• Cookies and similar tracking technologies
• Log files and system performance data

**Location Information:**
• Business location and address
• Time zone and regional settings
• GPS data (only when explicitly permitted)`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Settings,
      content: `We use your information for the following purposes:

**Service Provision:**
• Provide workforce optimization and scheduling services
• Generate AI-powered demand forecasts and recommendations
• Process payments and manage billing
• Provide customer support and technical assistance

**Service Improvement:**
• Analyze usage patterns to improve our platform
• Develop new features and functionality
• Conduct research and analytics
• Personalize your experience

**Communication:**
• Send service-related notifications and updates
• Provide customer support responses
• Share important policy or service changes
• Send marketing communications (with consent)

**Legal and Security:**
• Comply with legal obligations and regulations
• Protect against fraud and security threats
• Enforce our terms of service
• Respond to legal requests and court orders`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Share2,
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

**Service Providers:**
• Cloud hosting providers (AWS, Google Cloud)
• Payment processors (Stripe, PayPal)
• Analytics providers (with anonymized data)
• Customer support tools

**Business Transfers:**
• In connection with mergers, acquisitions, or asset sales
• During due diligence processes
• With successor entities

**Legal Requirements:**
• To comply with applicable laws and regulations
• In response to valid legal requests
• To protect our rights and property
• To ensure user safety and security

**With Your Consent:**
• When you explicitly authorize sharing
• For specific business purposes you approve
• With integration partners you select`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement comprehensive security measures to protect your information:

**Technical Safeguards:**
• AES-256 encryption for data at rest and in transit
• Multi-factor authentication for all accounts
• Regular security audits and penetration testing
• Secure API endpoints with rate limiting

**Administrative Safeguards:**
• Employee background checks and training
• Role-based access controls
• Regular security awareness training
• Incident response procedures

**Physical Safeguards:**
• Secure data centers with 24/7 monitoring
• Biometric access controls
• Environmental monitoring systems
• Redundant backup systems

**Compliance:**
• SOC 2 Type II certification
• GDPR and CCPA compliance
• PCI DSS Level 1 certification
• Regular third-party security assessments`
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Clock,
      content: `We retain your information for as long as necessary to provide our services and comply with legal obligations:

**Account Data:**
• Active accounts: Retained while account is active
• Inactive accounts: Deleted after 3 years of inactivity
• Deleted accounts: Permanently removed within 30 days

**Business Data:**
• Scheduling data: Retained for 7 years for compliance
• Financial data: Retained per applicable tax laws
• Analytics data: Anonymized and retained indefinitely

**Legal Requirements:**
• Employment records: Retained per local labor laws
• Tax records: Retained per applicable regulations
• Audit logs: Retained for 7 years

**User Requests:**
• Data deletion requests honored within 30 days
• Data portability requests fulfilled within 30 days
• Account closure requests processed within 7 days`
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      content: `As a global service, we may transfer your information across borders:

**Transfer Mechanisms:**
• Standard Contractual Clauses (SCCs)
• Adequacy decisions by relevant authorities
• Explicit consent where required
• Necessary for contract performance

**Data Locations:**
• Primary servers: United States (AWS)
• Backup servers: European Union (AWS)
• Processing centers: United States, Ireland
• Support centers: United States, Philippines

**Safeguards:**
• All transfers use appropriate safeguards
• Regular review of transfer mechanisms
• Compliance with local data protection laws
• Notification of any changes to transfer practices`
    },
    {
      id: 'children-privacy',
      title: "Children's Privacy",
      icon: Users,
      content: `Our services are not intended for children under 16 years of age:

**Age Restrictions:**
• Minimum age: 16 years old
• Parental consent required for users under 18
• Age verification during account creation
• Immediate deletion of underage accounts

**Special Protections:**
• Enhanced privacy protections for minors
• Limited data collection for users under 18
• Parental access rights where applicable
• Regular review of age verification processes

**Compliance:**
• COPPA compliance in the United States
• GDPR Article 8 compliance in the EU
• Local age of consent laws respected
• Regular training on children's privacy rights`
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Policy',
      icon: Edit,
      content: `We may update this Privacy Policy from time to time:

**Notification Process:**
• Email notification to all users
• Prominent notice on our website
• In-app notifications for significant changes
• 30-day notice period for material changes

**Version Control:**
• All versions archived and accessible
• Clear indication of changes made
• Effective date clearly stated
• Previous versions available upon request

**Your Options:**
• Continue using services (acceptance)
• Contact us with questions or concerns
• Exercise your rights under applicable laws
• Terminate your account if you disagree`
    }
  ];

  const userRights = [
    {
      title: 'Right to Access',
      description: 'Request a copy of the personal information we hold about you',
      icon: Eye,
      actions: ['Request data export', 'View account information', 'Download data report']
    },
    {
      title: 'Right to Rectification',
      description: 'Correct inaccurate or incomplete personal information',
      icon: Edit,
      actions: ['Update profile information', 'Correct business details', 'Modify preferences']
    },
    {
      title: 'Right to Erasure',
      description: 'Request deletion of your personal information (right to be forgotten)',
      icon: Trash2,
      actions: ['Delete account', 'Remove specific data', 'Anonymize records']
    },
    {
      title: 'Right to Restrict Processing',
      description: 'Limit how we process your personal information',
      icon: UserX,
      actions: ['Pause data processing', 'Limit usage scope', 'Temporary restrictions']
    },
    {
      title: 'Right to Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Download,
      actions: ['Export data', 'Transfer to another service', 'Download in JSON/CSV']
    },
    {
      title: 'Right to Object',
      description: 'Object to processing based on legitimate interests or direct marketing',
      icon: Shield,
      actions: ['Opt-out of marketing', 'Object to profiling', 'Withdraw consent']
    }
  ];

  const cookieTypes = [
    {
      category: 'Essential Cookies',
      description: 'Necessary for the website to function properly',
      examples: ['Authentication tokens', 'Session management', 'Security features'],
      canDisable: false,
      retention: 'Session or 1 year'
    },
    {
      category: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Google Analytics', 'Page load times', 'Error tracking'],
      canDisable: true,
      retention: '2 years'
    },
    {
      category: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: ['Language preferences', 'Theme settings', 'Feature toggles'],
      canDisable: true,
      retention: '1 year'
    },
    {
      category: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media pixels'],
      canDisable: true,
      retention: '1 year'
    }
  ];

  const contactInfo = [
    {
      title: 'Data Protection Officer',
      email: 'privacy@optimoworkforce.com',
      description: 'For all privacy-related inquiries and data protection matters',
      icon: Shield
    },
    {
      title: 'Legal Department',
      email: 'legal@optimoworkforce.com',
      description: 'For legal requests and compliance matters',
      icon: FileText
    },
    {
      title: 'Customer Support',
      email: 'support@optimoworkforce.com',
      description: 'For general questions about your account and services',
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
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">Last Updated</div>
                <div className="text-lg font-semibold">{lastUpdated}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-sm text-blue-200">Effective Date</div>
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
              Privacy at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key points about how we handle your data
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Data Selling</h3>
              <p className="text-gray-600">We never sell, trade, or rent your personal information to third parties</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Lock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Encryption</h3>
              <p className="text-gray-600">All data is protected with AES-256 encryption and industry-leading security</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <p className="text-gray-600">Full control over your data with rights to access, correct, and delete</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Globe size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Compliance</h3>
              <p className="text-gray-600">GDPR, CCPA, and other international privacy law compliance</p>
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
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Important Notice</h3>
                      <p className="text-blue-800">
                        This Privacy Policy was last updated on {lastUpdated}. We recommend reviewing this policy periodically 
                        as we may update it to reflect changes in our practices or applicable laws.
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
                    Your Privacy Rights
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    You have comprehensive rights over your personal data. Here's how to exercise them.
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
                          {right.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                              <span className="text-gray-700">{action}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="mt-6 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          Exercise This Right
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help Exercising Your Rights?</h3>
                  <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                    Our Data Protection Officer is here to help you understand and exercise your privacy rights. 
                    We respond to all requests within 30 days.
                  </p>
                  <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Contact Data Protection Officer
                  </button>
                </div>
              </div>
            )}

            {/* Cookie Policy Tab */}
            {activeTab === 'cookies' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
                    Cookie Policy
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Learn about the cookies we use and how to manage your preferences
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">What Are Cookies?</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and enabling certain functionality.
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
                          {type.canDisable ? 'Optional' : 'Required'}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-700 mb-3">Examples:</div>
                        <div className="space-y-2">
                          {type.examples.map((example, exampleIndex) => (
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
                            Manage Settings
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cookie Management</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-4">
                        <Settings size={32} className="text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Browser Settings</h4>
                      <p className="text-gray-600">Configure cookie preferences in your browser settings</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-4">
                        <Shield size={32} className="text-secondary" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Privacy Controls</h4>
                      <p className="text-gray-600">Use our privacy dashboard to manage your preferences</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-4">
                        <Download size={32} className="text-accent-latam" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Cookie Report</h4>
                      <p className="text-gray-600">Download a detailed report of all cookies we use</p>
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
                    Privacy Contact Information
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get in touch with our privacy and legal teams for any questions or concerns
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 size={20} className="text-primary" />
                        Headquarters
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>OPTIMO Workforce, Inc.</div>
                        <div>123 Innovation Drive</div>
                        <div>San Francisco, CA 94105</div>
                        <div>United States</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe size={20} className="text-primary" />
                        EU Representative
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>OPTIMO Workforce Europe B.V.</div>
                        <div>Carrer de Mallorca, 401</div>
                        <div>08013 Barcelona, Spain</div>
                        <div>European Union</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Times */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Response Commitments</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24 hours</div>
                      <div className="text-blue-200">Initial Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">30 days</div>
                      <div className="text-blue-200">Full Resolution</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">72 hours</div>
                      <div className="text-blue-200">Breach Notification</div>
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
              Download Our Privacy Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Access our complete privacy documentation for your records
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Policy</h3>
                  <p className="text-gray-600 mb-6">Complete privacy policy document (PDF)</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Settings size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Policy</h3>
                  <p className="text-gray-600 mb-6">Detailed cookie usage and management guide</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <Shield size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Data Processing Agreement</h3>
                  <p className="text-gray-600 mb-6">GDPR-compliant DPA for business customers</p>
                  <button className="bg-accent-latam hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
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