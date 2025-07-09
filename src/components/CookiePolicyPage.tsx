import React, { useState } from 'react';
import { 
  Settings, 
  Eye, 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  Clock, 
  Download, 
  Mail, 
  CheckCircle, 
  AlertTriangle, 
  Cookie, 
  Database, 
  Zap, 
  Monitor, 
  Smartphone, 
  Building2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Target,
  TrendingUp,
  X,
  RefreshCw,
  Trash2
} from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [activeTab, setActiveTab] = useState('policy');
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    performance: true,
    functional: true,
    marketing: false
  });

  const lastUpdated = 'January 15, 2025';
  const effectiveDate = 'January 15, 2025';

  const tabs = [
    { id: 'policy', name: 'Cookie Policy', icon: Cookie },
    { id: 'preferences', name: 'Cookie Preferences', icon: Settings },
    { id: 'types', name: 'Cookie Types', icon: Database },
    { id: 'contact', name: 'Contact Us', icon: Mail }
  ];

  const cookieSections = [
    {
      id: 'overview',
      title: 'What Are Cookies?',
      icon: Cookie,
      content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain functionality.

OPTIMO Workforce uses cookies and similar technologies to enhance your experience, provide personalized content, analyze site traffic, and understand where our visitors are coming from. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.

We are committed to being transparent about our use of cookies and giving you control over your privacy preferences.`
    },
    {
      id: 'types-we-use',
      title: 'Types of Cookies We Use',
      icon: Database,
      content: `**Essential Cookies (Always Active):**
• Authentication and security cookies
• Session management cookies
• Load balancing cookies
• CSRF protection tokens

**Performance Cookies:**
• Google Analytics for website usage statistics
• Page load time measurement
• Error tracking and monitoring
• User journey analysis

**Functional Cookies:**
• Language preference settings
• Theme and display preferences
• Form data persistence
• Feature toggle states

**Marketing Cookies:**
• Advertising campaign tracking
• Social media integration pixels
• Conversion tracking
• Remarketing and retargeting

**Third-Party Cookies:**
• Google Analytics and Google Tag Manager
• Social media platform cookies (LinkedIn, Twitter)
• Customer support chat widgets
• Payment processor cookies (Stripe)`
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      icon: Target,
      content: `**Website Functionality:**
• Remember your login status and preferences
• Maintain your session while navigating the site
• Store your language and regional settings
• Remember items in forms as you fill them out

**Analytics and Performance:**
• Understand how visitors interact with our website
• Identify popular content and features
• Monitor website performance and loading times
• Track conversion rates and user engagement

**Personalization:**
• Customize content based on your preferences
• Remember your dashboard layout and settings
• Provide relevant product recommendations
• Tailor the user experience to your needs

**Marketing and Advertising:**
• Measure the effectiveness of our marketing campaigns
• Show relevant advertisements on other websites
• Track conversions from marketing channels
• Analyze the customer journey across touchpoints

**Security:**
• Protect against cross-site request forgery (CSRF) attacks
• Detect and prevent fraudulent activity
• Maintain secure user sessions
• Monitor for suspicious behavior patterns`
    },
    {
      id: 'third-party',
      title: 'Third-Party Cookies',
      icon: Globe,
      content: `**Google Services:**
• Google Analytics: Website traffic analysis and user behavior tracking
• Google Tag Manager: Managing marketing and analytics tags
• Google Ads: Conversion tracking and remarketing
• reCAPTCHA: Bot detection and spam prevention

**Social Media Platforms:**
• LinkedIn: Social login and sharing functionality
• Twitter: Tweet embedding and social sharing
• Facebook: Social plugins and advertising pixels
• YouTube: Video embedding and analytics

**Customer Support:**
• Intercom: Live chat functionality and user support
• Zendesk: Help desk and ticket management
• Hotjar: User session recordings and heatmaps

**Payment Processing:**
• Stripe: Secure payment processing and fraud detection
• PayPal: Alternative payment method processing
• Apple Pay/Google Pay: Mobile payment integration

**Content Delivery:**
• Cloudflare: Content delivery network and security
• AWS CloudFront: Static asset delivery
• Font providers: Web font loading and display

We regularly review our third-party integrations to ensure they meet our privacy and security standards. All third-party cookies are subject to their respective privacy policies.`
    },
    {
      id: 'cookie-duration',
      title: 'Cookie Duration and Storage',
      icon: Clock,
      content: `**Session Cookies:**
• Deleted when you close your browser
• Used for temporary data like shopping cart contents
• Essential for maintaining your login session
• Typically last for the duration of your visit

**Persistent Cookies:**
• Remain on your device for a specified period
• Used for remembering preferences and settings
• Can last from days to years depending on purpose
• Automatically deleted when they expire

**Cookie Storage Periods:**
• Essential cookies: Session or up to 1 year
• Performance cookies: Up to 2 years
• Functional cookies: Up to 1 year
• Marketing cookies: Up to 1 year
• Third-party cookies: Varies by provider

**Data Storage Locations:**
• Cookies are stored locally on your device
• No personal data is transmitted in cookie names
• Cookie values are encrypted when containing sensitive data
• Regular cleanup removes expired cookies automatically

**Cookie Size and Limits:**
• Individual cookies are limited to 4KB in size
• Browsers limit the total number of cookies per domain
• We minimize cookie size to improve performance
• Unnecessary cookies are regularly purged`
    },
    {
      id: 'managing-cookies',
      title: 'Managing Your Cookie Preferences',
      icon: Settings,
      content: `**Browser Settings:**
• All major browsers allow you to control cookies
• You can block all cookies or only third-party cookies
• Delete existing cookies from your browser settings
• Set up automatic cookie deletion on browser close

**Our Cookie Preference Center:**
• Access through the cookie banner on first visit
• Modify preferences anytime through our settings page
• Granular control over different cookie categories
• Save preferences for future visits

**Opt-Out Options:**
• Google Analytics: Use Google's opt-out browser add-on
• Marketing cookies: Disable through our preference center
• Third-party tracking: Use browser privacy settings
• Do Not Track: We respect browser DNT signals

**Mobile Device Settings:**
• iOS: Settings > Safari > Privacy & Security
• Android: Chrome > Settings > Site Settings > Cookies
• Mobile apps: Check app-specific privacy settings
• Cross-device tracking: Manage through platform settings

**Impact of Disabling Cookies:**
• Some website features may not work properly
• You may need to re-enter information repeatedly
• Personalized content and recommendations may be limited
• Analytics help us improve the service for all users`
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis for Cookie Use',
      icon: Shield,
      content: `**GDPR Compliance (EU Users):**
• Consent: Required for non-essential cookies
• Legitimate interest: Used for essential functionality
• Contract performance: Necessary for service delivery
• Legal obligation: Required for compliance purposes

**CCPA Compliance (California Users):**
• Right to know what cookies collect personal information
• Right to delete personal information collected via cookies
• Right to opt-out of sale of personal information
• Non-discrimination for exercising privacy rights

**Other Jurisdictions:**
• We comply with local privacy laws where applicable
• Regular legal reviews ensure ongoing compliance
• Privacy impact assessments for new cookie implementations
• Transparent disclosure of all cookie practices

**Consent Management:**
• Clear and specific consent for each cookie category
• Easy withdrawal of consent at any time
• Granular control over different types of cookies
• Regular consent renewal for long-term users

**Data Subject Rights:**
• Access: Request information about cookies used
• Rectification: Correct inaccurate cookie-related data
• Erasure: Delete cookies and associated data
• Portability: Export cookie preference settings`
    },
    {
      id: 'updates-changes',
      title: 'Updates to This Cookie Policy',
      icon: RefreshCw,
      content: `**Policy Updates:**
• We may update this Cookie Policy from time to time
• Material changes will be communicated via email or website notice
• Continued use of our website constitutes acceptance of changes
• Previous versions are archived and available upon request

**Notification Process:**
• Email notification to registered users for significant changes
• Prominent website banner for 30 days after updates
• Updated effective date clearly displayed
• Summary of changes provided in plain language

**Version Control:**
• All policy versions are dated and archived
• Change log maintained for transparency
• Legal review required for all policy updates
• User impact assessment for material changes

**Your Options:**
• Review changes and decide whether to continue using our services
• Update your cookie preferences if needed
• Contact us with questions about policy changes
• Withdraw consent if you disagree with updates`
    }
  ];

  const cookieTypes = [
    {
      category: 'Essential Cookies',
      description: 'Necessary for the website to function properly and cannot be disabled',
      examples: [
        { name: 'session_id', purpose: 'Maintains user session', duration: 'Session', canDisable: false },
        { name: 'csrf_token', purpose: 'Security protection', duration: '1 hour', canDisable: false },
        { name: 'auth_token', purpose: 'User authentication', duration: '30 days', canDisable: false },
        { name: 'load_balancer', purpose: 'Server routing', duration: 'Session', canDisable: false }
      ],
      color: 'bg-red-500',
      enabled: true,
      required: true
    },
    {
      category: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: [
        { name: '_ga', purpose: 'Google Analytics tracking', duration: '2 years', canDisable: true },
        { name: '_gid', purpose: 'Google Analytics session', duration: '24 hours', canDisable: true },
        { name: 'performance_metrics', purpose: 'Page load monitoring', duration: '1 year', canDisable: true },
        { name: 'error_tracking', purpose: 'Error reporting', duration: '30 days', canDisable: true }
      ],
      color: 'bg-blue-500',
      enabled: cookiePreferences.performance,
      required: false
    },
    {
      category: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: [
        { name: 'language_pref', purpose: 'Language selection', duration: '1 year', canDisable: true },
        { name: 'theme_setting', purpose: 'UI theme preference', duration: '1 year', canDisable: true },
        { name: 'dashboard_layout', purpose: 'Layout preferences', duration: '6 months', canDisable: true },
        { name: 'notification_prefs', purpose: 'Notification settings', duration: '1 year', canDisable: true }
      ],
      color: 'bg-green-500',
      enabled: cookiePreferences.functional,
      required: false
    },
    {
      category: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      examples: [
        { name: 'marketing_id', purpose: 'Campaign tracking', duration: '1 year', canDisable: true },
        { name: 'conversion_pixel', purpose: 'Conversion tracking', duration: '90 days', canDisable: true },
        { name: 'remarketing_tag', purpose: 'Remarketing campaigns', duration: '180 days', canDisable: true },
        { name: 'social_pixel', purpose: 'Social media tracking', duration: '1 year', canDisable: true }
      ],
      color: 'bg-purple-500',
      enabled: cookiePreferences.marketing,
      required: false
    }
  ];

  const contactInfo = [
    {
      title: 'Privacy Team',
      email: 'privacy@optimoworkforce.com',
      description: 'For cookie policy questions and privacy concerns',
      icon: Shield
    },
    {
      title: 'Data Protection Officer',
      email: 'dpo@optimoworkforce.com',
      description: 'For GDPR-related cookie inquiries',
      icon: Eye
    },
    {
      title: 'Technical Support',
      email: 'support@optimoworkforce.com',
      description: 'For help with cookie settings and technical issues',
      icon: Settings
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleCookiePreferenceChange = (category: string, enabled: boolean) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage and apply settings
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    
    // Here you would typically trigger the actual cookie management
    console.log('Cookie preferences saved:', cookiePreferences);
    
    // Show success message
    alert('Cookie preferences saved successfully!');
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
              Cookie Policy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Learn how OPTIMO Workforce uses cookies to enhance your experience and protect your privacy. Manage your cookie preferences with full transparency and control.
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
              Cookie Usage Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick overview of how we use cookies on our platform
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Shield size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Only</h3>
              <p className="text-gray-600">Required cookies for basic website functionality and security</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <BarChart3 size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Tracking</h3>
              <p className="text-gray-600">Analytics cookies to improve website performance and user experience</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Settings size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalization</h3>
              <p className="text-gray-600">Functional cookies to remember your preferences and settings</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Target size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing (Optional)</h3>
              <p className="text-gray-600">Advertising cookies for relevant content and campaign tracking</p>
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
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Cookie Consent Notice</h3>
                      <p className="text-blue-800">
                        By using our website, you consent to our use of cookies as described in this policy. 
                        You can manage your cookie preferences at any time through our preference center.
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
                    Manage Cookie Preferences
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Control which cookies we use to personalize your experience
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
                              Required
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Save Your Preferences</h3>
                      <p className="text-gray-600">Your choices will be remembered for future visits</p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={resetPreferences}
                        className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors flex items-center gap-2"
                      >
                        <RefreshCw size={16} />
                        Reset to Defaults
                      </button>
                      <button
                        onClick={savePreferences}
                        className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                      >
                        <CheckCircle size={16} />
                        Save Preferences
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
                    Detailed Cookie Information
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Complete breakdown of all cookies used on our platform
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
                            Always Active
                          </span>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                        <p className="text-lg text-gray-700 mb-6">{category.description}</p>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Can Disable</th>
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
                  <h3 className="text-2xl font-bold mb-6 text-center">Browser Cookie Management</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Monitor size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Desktop Browsers</h4>
                      <p className="text-blue-100">Chrome, Firefox, Safari, Edge - Access through Settings > Privacy</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Smartphone size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Mobile Browsers</h4>
                      <p className="text-blue-100">iOS Safari, Chrome Mobile - Check browser settings menu</p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                        <Settings size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Privacy Tools</h4>
                      <p className="text-blue-100">Ad blockers, privacy extensions, and Do Not Track settings</p>
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
                    Cookie Policy Contact Information
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get in touch with our team for cookie-related questions and concerns
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Can I use your website without cookies?</h4>
                      <p className="text-gray-700 mb-6">
                        Essential cookies are required for basic functionality, but you can disable optional cookies 
                        through our preference center or browser settings.
                      </p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-4">How often do you update this policy?</h4>
                      <p className="text-gray-700">
                        We review and update our Cookie Policy annually or when we make significant changes 
                        to our cookie practices. You'll be notified of any material changes.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Do you share cookie data with third parties?</h4>
                      <p className="text-gray-700 mb-6">
                        We only share cookie data with trusted service providers who help us operate our website. 
                        We never sell cookie data to third parties.
                      </p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-4">How do I delete existing cookies?</h4>
                      <p className="text-gray-700">
                        You can delete cookies through your browser settings. Each browser has different steps, 
                        but you'll typically find this option in Privacy or Security settings.
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
              Download Cookie Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Access our complete cookie documentation for your records
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <Cookie size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Policy</h3>
                  <p className="text-gray-600 mb-6">Complete cookie policy document (PDF)</p>
                  <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 mb-6">
                    <Database size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Inventory</h3>
                  <p className="text-gray-600 mb-6">Detailed list of all cookies used (CSV)</p>
                  <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download CSV
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-latam bg-opacity-10 mb-6">
                    <Settings size={32} className="text-accent-latam" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Guide</h3>
                  <p className="text-gray-600 mb-6">Step-by-step cookie management guide</p>
                  <button className="bg-accent-latam hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full">
                    <Download size={16} />
                    Download Guide
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