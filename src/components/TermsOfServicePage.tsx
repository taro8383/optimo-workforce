import React, { useState } from 'react';
import { 
  FileText, 
  Scale, 
  Shield, 
  Globe, 
  Users, 
  CreditCard, 
  Clock, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  AlertTriangle, 
  Gavel, 
  Settings, 
  Trash2, 
  Edit, 
  Share2, 
  UserX, 
  Calendar, 
  Building2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Eye,
  Database,
  Zap,
  Ban,
  RefreshCw
} from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('terms');

  const lastUpdated = 'January 15, 2025';
  const effectiveDate = 'January 15, 2025';

  const tabs = [
    { id: 'terms', name: 'Terms of Service', icon: FileText },
    { id: 'acceptable-use', name: 'Acceptable Use', icon: Shield },
    { id: 'billing', name: 'Billing & Payment', icon: CreditCard },
    { id: 'contact', name: 'Legal Contact', icon: Mail }
  ];

  const termsSections = [
    {
      id: 'overview',
      title: 'Agreement Overview',
      icon: FileText,
      content: `These Terms of Service ("Terms") govern your use of OPTIMO Workforce's workforce optimization platform and related services ("Services") provided by OPTIMO Workforce, Inc. ("Company," "we," "our," or "us").

By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.

These Terms apply to all users of our Services, including but not limited to restaurant owners, managers, employees, and any other individuals who access our platform.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: Database,
      content: `**"Account"** means your OPTIMO Workforce user account that allows you to access and use our Services.

**"Content"** means any information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.

**"Customer Data"** means all data, information, and content submitted, posted, or otherwise transmitted by you or your users through the Services.

**"Documentation"** means the user guides, manuals, and other materials provided by us relating to the Services.

**"Intellectual Property Rights"** means all intellectual property rights worldwide, including copyrights, trademarks, patents, trade secrets, and moral rights.

**"Services"** means the OPTIMO Workforce platform, including all software, applications, data, reports, and related services.

**"Subscription"** means your subscription to access and use the Services during the subscription term.

**"User"** means any individual who accesses or uses the Services through your Account.`
    },
    {
      id: 'account-registration',
      title: 'Account Registration and Security',
      icon: Users,
      content: `**Account Creation:**
• You must provide accurate, current, and complete information
• You must be at least 18 years old to create an account
• One person or legal entity may maintain only one account
• You are responsible for maintaining account confidentiality

**Account Security:**
• You are responsible for all activities under your account
• You must notify us immediately of any unauthorized access
• You must use strong passwords and enable two-factor authentication
• We reserve the right to suspend accounts for security reasons

**Account Information:**
• You must keep your account information current and accurate
• You must promptly update any changes to your information
• We may verify your information at any time
• False information may result in account termination

**Account Termination:**
• You may terminate your account at any time
• We may terminate accounts for violations of these Terms
• Upon termination, your right to use the Services ceases immediately
• We will provide reasonable notice before termination when possible`
    },
    {
      id: 'service-description',
      title: 'Service Description and Availability',
      icon: Zap,
      content: `**Service Overview:**
• AI-powered workforce optimization and scheduling platform
• Demand forecasting and labor cost analytics
• Integration with POS systems and third-party applications
• Mobile and web-based access to scheduling tools

**Service Availability:**
• We strive for 99.9% uptime but do not guarantee uninterrupted service
• Scheduled maintenance will be announced in advance when possible
• Emergency maintenance may occur without prior notice
• Service availability may vary by geographic region

**Service Modifications:**
• We may modify, update, or discontinue Services at any time
• We will provide reasonable notice of material changes
• Continued use after changes constitutes acceptance
• Some modifications may require additional fees

**Beta Features:**
• We may offer beta or experimental features
• Beta features are provided "as is" without warranties
• Beta features may be discontinued at any time
• Feedback on beta features may be used to improve Services`
    },
    {
      id: 'subscription-billing',
      title: 'Subscription and Billing Terms',
      icon: CreditCard,
      content: `**Subscription Plans:**
• Various subscription tiers available with different features
• Subscription fees are based on number of users and locations
• Enterprise plans available with custom pricing
• All fees are exclusive of applicable taxes

**Billing and Payment:**
• Subscription fees are billed in advance on a monthly or annual basis
• Payment is due immediately upon invoice
• We accept major credit cards and ACH transfers
• Late payments may result in service suspension

**Price Changes:**
• We may change subscription prices with 30 days' notice
• Price changes apply to subsequent billing periods
• Existing subscriptions continue at current rates until renewal
• You may cancel before price changes take effect

**Refunds and Cancellations:**
• No refunds for partial months or unused portions
• You may cancel your subscription at any time
• Cancellation takes effect at the end of the current billing period
• Data export available for 30 days after cancellation`
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy and Security',
      icon: Lock,
      content: `**Data Collection and Use:**
• We collect and use data as described in our Privacy Policy
• Customer Data remains your property and under your control
• We use Customer Data only to provide and improve Services
• We do not sell or share Customer Data with third parties

**Data Security:**
• We implement industry-standard security measures
• All data is encrypted in transit and at rest
• Regular security audits and penetration testing
• SOC 2 Type II certification and compliance programs

**Data Location and Transfers:**
• Data is primarily stored in secure data centers in the United States
• We may transfer data internationally as necessary for service provision
• All transfers comply with applicable data protection laws
• Standard Contractual Clauses used for international transfers

**Data Retention and Deletion:**
• We retain Customer Data for the duration of your subscription
• Data is deleted within 30 days of account termination
• Backup data may be retained for up to 90 days
• You may request immediate data deletion upon account closure`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: `**Our Intellectual Property:**
• We retain all rights to the Services, including software and algorithms
• Our trademarks, logos, and brand elements are our property
• You may not copy, modify, or reverse engineer our Services
• Any feedback you provide may be used to improve our Services

**Your Content and Data:**
• You retain ownership of all Customer Data you submit
• You grant us a license to use Customer Data to provide Services
• You represent that you have rights to all submitted content
• You are responsible for ensuring content does not infringe third-party rights

**Third-Party Content:**
• Services may include third-party software and content
• Third-party content is subject to separate license terms
• We are not responsible for third-party content or services
• You must comply with all applicable third-party licenses

**Copyright Protection:**
• We respect intellectual property rights of others
• We respond to valid DMCA takedown notices
• Repeat infringers may have their accounts terminated
• Counter-notification procedures available for disputed claims`
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses and Conduct',
      icon: Ban,
      content: `**Prohibited Activities:**
• Using Services for any unlawful purpose or activity
• Attempting to gain unauthorized access to our systems
• Interfering with or disrupting the Services or servers
• Transmitting viruses, malware, or other harmful code

**Content Restrictions:**
• No illegal, harmful, threatening, or abusive content
• No content that violates intellectual property rights
• No spam, unsolicited communications, or commercial content
• No content that violates privacy or publicity rights

**System Abuse:**
• No automated data collection or scraping
• No attempts to reverse engineer or decompile software
• No excessive use that impacts system performance
• No creation of multiple accounts to circumvent limitations

**Compliance Requirements:**
• You must comply with all applicable laws and regulations
• You must respect employment and labor laws in your jurisdiction
• You must obtain necessary consents for employee data processing
• You must maintain appropriate data protection measures`
    },
    {
      id: 'warranties-disclaimers',
      title: 'Warranties and Disclaimers',
      icon: AlertTriangle,
      content: `**Limited Warranty:**
• We warrant that Services will perform substantially as described
• We warrant that we have the right to provide the Services
• Warranty period is limited to your current subscription term
• Exclusive remedy for warranty breach is service credit or refund

**Disclaimers:**
• Services are provided "as is" and "as available"
• We disclaim all other warranties, express or implied
• No warranty of merchantability or fitness for particular purpose
• No warranty that Services will be error-free or uninterrupted

**Third-Party Services:**
• We are not responsible for third-party integrations or services
• Third-party services are subject to their own terms and conditions
• We do not warrant the availability or performance of third-party services
• You use third-party services at your own risk

**Data Accuracy:**
• We do not warrant the accuracy of AI predictions or recommendations
• You are responsible for verifying all data and recommendations
• Business decisions based on our Services are your responsibility
• We recommend human oversight of all automated processes`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: Scale,
      content: `**Liability Limitations:**
• Our total liability is limited to amounts paid by you in the 12 months preceding the claim
• We are not liable for indirect, incidental, or consequential damages
• We are not liable for lost profits, data, or business opportunities
• These limitations apply regardless of the theory of liability

**Excluded Damages:**
• Loss of revenue, profits, or business opportunities
• Loss of data or information (except as covered by our data recovery procedures)
• Cost of substitute services or products
• Damage to reputation or business relationships

**Exceptions to Limitations:**
• Limitations do not apply to our indemnification obligations
• Limitations do not apply to breaches of confidentiality
• Limitations do not apply where prohibited by applicable law
• Gross negligence or willful misconduct are not limited

**Force Majeure:**
• We are not liable for delays or failures due to circumstances beyond our control
• Force majeure includes natural disasters, government actions, and network failures
• We will use reasonable efforts to minimize impact of force majeure events
• Service credits may be provided for extended outages`
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: Shield,
      content: `**Our Indemnification:**
• We will defend you against claims that our Services infringe third-party intellectual property rights
• We will pay damages awarded in final judgment or approved settlement
• Our obligations are subject to prompt notice and cooperation from you
• We may modify Services to avoid infringement instead of paying damages

**Your Indemnification:**
• You will defend us against claims arising from your use of Services
• You will defend us against claims related to your Customer Data
• You will defend us against claims from your violation of these Terms
• You will pay damages awarded in final judgment or approved settlement

**Indemnification Procedures:**
• Indemnified party must provide prompt written notice of claims
• Indemnifying party has right to control defense and settlement
• Indemnified party may participate with own counsel at own expense
• No settlement without consent of indemnified party

**Exclusions:**
• No indemnification for modifications you make to our Services
• No indemnification for use of Services in combination with other products
• No indemnification for continued use after we notify you of infringement
• No indemnification for use outside the scope of these Terms`
    },
    {
      id: 'termination',
      title: 'Termination and Suspension',
      icon: UserX,
      content: `**Termination by You:**
• You may terminate your subscription at any time with 30 days' notice
• Termination takes effect at the end of your current billing period
• You remain responsible for all charges incurred before termination
• You may export your data for 30 days after termination

**Termination by Us:**
• We may terminate for material breach of these Terms
• We may terminate for non-payment after 30 days' notice
• We may terminate immediately for illegal use or security threats
• We will provide reasonable notice when possible

**Effect of Termination:**
• Your right to use Services ceases immediately
• We will delete your Customer Data within 30 days
• Backup copies may be retained for up to 90 days
• Provisions that should survive termination will continue to apply

**Suspension:**
• We may suspend Services for non-payment or Terms violations
• We will provide notice and opportunity to cure when possible
• Suspension does not relieve you of payment obligations
• Services will be restored upon resolution of the issue`
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Dispute Resolution',
      icon: Gavel,
      content: `**Governing Law:**
• These Terms are governed by the laws of the State of California
• Federal law applies where applicable
• International users subject to local mandatory laws
• Conflicts of law principles do not apply

**Dispute Resolution:**
• Disputes will be resolved through binding arbitration
• Arbitration conducted under American Arbitration Association rules
• Arbitration location: San Francisco, California
• Class action waiver applies to all disputes

**Exceptions to Arbitration:**
• Claims for injunctive or equitable relief
• Claims related to intellectual property rights
• Small claims court actions under jurisdictional limits
• Emergency relief to prevent irreparable harm

**Legal Proceedings:**
• Any legal action must be brought within one year of the claim arising
• You consent to jurisdiction of courts in San Francisco, California
• Service of process may be made by email or certified mail
• Prevailing party entitled to reasonable attorneys' fees`
    }
  ];

  const acceptableUsePolicies = [
    {
      title: 'Lawful Use Only',
      description: 'Services must be used only for lawful business purposes in compliance with all applicable laws',
      icon: Scale,
      violations: [
        'Using Services for illegal activities',
        'Violating employment or labor laws',
        'Infringing intellectual property rights',
        'Violating privacy or data protection laws'
      ]
    },
    {
      title: 'System Integrity',
      description: 'Users must not interfere with or compromise the security or integrity of our systems',
      icon: Shield,
      violations: [
        'Attempting unauthorized access',
        'Introducing malware or viruses',
        'Overloading systems with excessive requests',
        'Reverse engineering or decompiling software'
      ]
    },
    {
      title: 'Data Protection',
      description: 'All personal and business data must be handled in accordance with applicable privacy laws',
      icon: Lock,
      violations: [
        'Processing data without proper consent',
        'Sharing employee data inappropriately',
        'Failing to implement security measures',
        'Violating data retention requirements'
      ]
    },
    {
      title: 'Professional Conduct',
      description: 'Users must maintain professional standards and respect the rights of others',
      icon: Users,
      violations: [
        'Harassment or discrimination',
        'Sharing inappropriate content',
        'Impersonating others',
        'Engaging in fraudulent activities'
      ]
    }
  ];

  const billingTerms = [
    {
      title: 'Subscription Fees',
      description: 'Transparent pricing based on your business size and needs',
      icon: CreditCard,
      details: [
        'Monthly or annual billing cycles available',
        'Fees based on number of employees and locations',
        'Enterprise pricing for large organizations',
        'All prices exclude applicable taxes'
      ]
    },
    {
      title: 'Payment Terms',
      description: 'Flexible payment options with secure processing',
      icon: Clock,
      details: [
        'Payment due immediately upon invoice',
        'Major credit cards and ACH transfers accepted',
        'Automatic renewal unless cancelled',
        'Late payment fees may apply after 30 days'
      ]
    },
    {
      title: 'Refund Policy',
      description: 'Clear refund terms and cancellation procedures',
      icon: RefreshCw,
      details: [
        'No refunds for partial billing periods',
        '30-day free trial for new customers',
        'Cancellation effective at end of billing period',
        'Data export available for 30 days after cancellation'
      ]
    },
    {
      title: 'Price Changes',
      description: 'Advance notice of any pricing modifications',
      icon: Edit,
      details: [
        '30 days advance notice of price changes',
        'Changes apply to subsequent billing periods',
        'Option to cancel before changes take effect',
        'Grandfathered pricing for existing annual subscriptions'
      ]
    }
  ];

  const legalContacts = [
    {
      title: 'Legal Department',
      email: 'legal@optimoworkforce.com',
      description: 'For legal notices, contract questions, and compliance matters',
      icon: Gavel
    },
    {
      title: 'Terms & Conditions',
      email: 'terms@optimoworkforce.com',
      description: 'Questions about these Terms of Service and user agreements',
      icon: FileText
    },
    {
      title: 'Billing & Accounts',
      email: 'billing@optimoworkforce.com',
      description: 'Billing disputes, payment issues, and account management',
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
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Legal terms and conditions governing your use of OPTIMO Workforce services. Please read carefully.
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

      {/* Key Points Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Key Terms at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important highlights from our Terms of Service
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fair Usage</h3>
              <p className="text-gray-600">Use our services lawfully and professionally for legitimate business purposes</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <CreditCard size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Billing</h3>
              <p className="text-gray-600">Clear pricing with 30-day notice for changes and flexible cancellation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600">Your data remains yours with enterprise-grade security and privacy protection</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Gavel size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fair Resolution</h3>
              <p className="text-gray-600">Binding arbitration for disputes with exceptions for urgent legal matters</p>
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
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Important Legal Agreement</h3>
                      <p className="text-blue-800">
                        These Terms of Service constitute a legally binding agreement between you and OPTIMO Workforce. 
                        By using our services, you agree to be bound by all terms and conditions outlined below.
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
                    Acceptable Use Policy
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Guidelines for appropriate and lawful use of OPTIMO Workforce services
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
                          <div className="text-sm font-semibold text-gray-700 mb-3">Prohibited Activities:</div>
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
                  <h3 className="text-2xl font-bold mb-4 text-center">Violation Consequences</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <AlertTriangle size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Warning</h4>
                      <p className="text-red-100">First violation may result in a formal warning and required corrective action</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <UserX size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Suspension</h4>
                      <p className="text-red-100">Repeated violations may result in temporary account suspension</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Ban size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Termination</h4>
                      <p className="text-red-100">Serious violations may result in immediate account termination</p>
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
                    Billing & Payment Terms
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transparent pricing and payment terms for OPTIMO Workforce subscriptions
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Pricing Tiers</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Starter</h4>
                      <div className="text-3xl font-bold text-primary mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
                      <p className="text-gray-600">Up to 25 employees</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center border-2 border-primary">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Professional</h4>
                      <div className="text-3xl font-bold text-primary mb-4">$299<span className="text-lg text-gray-600">/month</span></div>
                      <p className="text-gray-600">Up to 100 employees</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h4>
                      <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                      <p className="text-gray-600">Unlimited employees</p>
                    </div>
                  </div>
                </div>

                {/* Payment Security */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                    <Lock size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Secure Payment Processing</h3>
                  <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
                    All payments are processed securely through industry-leading payment processors with PCI DSS Level 1 compliance.
                  </p>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">PCI DSS</div>
                      <div className="text-blue-200 text-sm">Level 1 Certified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">256-bit</div>
                      <div className="text-blue-200 text-sm">SSL Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">Fraud</div>
                      <div className="text-blue-200 text-sm">Protection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">24/7</div>
                      <div className="text-blue-200 text-sm">Monitoring</div>
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
                    Legal Contact Information
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Contact our legal team for questions about these Terms of Service
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Legal Notice Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 size={20} className="text-primary" />
                        Registered Address
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
                        <FileText size={20} className="text-primary" />
                        Legal Service
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <div>For legal notices and service of process:</div>
                        <div>legal@optimoworkforce.com</div>
                        <div>Certified mail to registered address</div>
                        <div>Response within 5 business days</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dispute Resolution Process */}
                <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Dispute Resolution Process</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Mail size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">1. Contact Us</h4>
                      <p className="text-blue-100">Reach out to our legal team to discuss the issue and attempt resolution</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Users size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">2. Mediation</h4>
                      <p className="text-blue-100">If needed, we'll engage in good faith mediation to resolve disputes</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Gavel size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">3. Arbitration</h4>
                      <p className="text-blue-100">Final disputes resolved through binding arbitration in San Francisco, CA</p>
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
              Download Legal Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Access our complete legal documentation for your records
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Terms of Service</h3>
                  <p className="text-gray-600 mb-6">Complete terms and conditions document (PDF)</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Shield size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptable Use Policy</h3>
                  <p className="text-gray-600 mb-6">Guidelines for appropriate service usage</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <CreditCard size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Agreement</h3>
                  <p className="text-gray-600 mb-6">Master service agreement for enterprise customers</p>
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

export default TermsOfServicePage;