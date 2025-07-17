import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, FileText, Globe, Users, Download, Check, Shield, Zap } from 'lucide-react';

const NewsletterPage: React.FC = () => {
  const { t } = useTranslation('components/newsletter');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    industry: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Newsletter signup:', formData);
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: FileText,
      title: t('benefits.exclusiveWhitepapers.title'),
      description: t('benefits.exclusiveWhitepapers.description'),
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: t('benefits.regionalLaborLawUpdates.title'),
      description: t('benefits.regionalLaborLawUpdates.description'),
      color: 'text-secondary'
    },
    {
      icon: Zap,
      title: t('benefits.earlyFeatureAccess.title'),
      description: t('benefits.earlyFeatureAccess.description'),
      color: 'text-accent-latam'
    }
  ];

  const regions = t('regions', { returnObjects: true }) as string[];
  const industries = t('industries', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  {t('hero.subscribeNow')}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  {t('hero.viewSampleIssue')}
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse-slow">
                    <Mail size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('hero.monthlyInsights')}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <FileText size={24} className="text-secondary" />
                      <span className="font-semibold">{t('hero.laborOptimizationReport')}</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <Globe size={24} className="text-accent-latam" />
                      <span className="font-semibold">{t('hero.regionalComplianceUpdates')}</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <Zap size={24} className="text-accent-apac" />
                      <span className="font-semibold">{t('hero.aiFeaturePreviews')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                      <Icon size={40} className={benefit.color} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('signup.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('signup.subtitle')}
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('signup.form.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t('signup.form.fullNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('signup.form.emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t('signup.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('signup.form.region')}
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('signup.form.regionPlaceholder')}</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('signup.form.industry')}
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('signup.form.industryPlaceholder')}</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                  >
                    <Mail size={24} />
                    {t('signup.submitButton')}
                  </button>
                  
                  <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-secondary" />
                      <span>{t('signup.privacy.gdprCompliant')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-secondary" />
                      <span>{t('signup.privacy.oneClickUnsubscribe')}</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-secondary to-green-400 rounded-2xl p-8 text-white text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                <Check size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('signup.success.title')}</h3>
              <p className="text-lg mb-6">
                {t('signup.success.message')}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('signup.success.subscribeAnotherEmail')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {t('contentPreview.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contentPreview.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t('contentPreview.issues.december2024.date')}</div>
                  <h3 className="text-xl font-bold text-gray-900">{t('contentPreview.issues.december2024.title')}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('contentPreview.issues.december2024.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{t('contentPreview.issues.december2024.pages')}</span>
                  <span>•</span>
                  <span>{t('contentPreview.issues.december2024.downloads')}</span>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Download size={20} />
                  {t('contentPreview.downloadExcerpt')}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-green-400 rounded-lg flex items-center justify-center">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{t('contentPreview.issues.november2024.date')}</div>
                  <h3 className="text-xl font-bold text-gray-900">{t('contentPreview.issues.november2024.title')}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('contentPreview.issues.november2024.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{t('contentPreview.issues.november2024.pages')}</span>
                  <span>•</span>
                  <span>{t('contentPreview.issues.november2024.downloads')}</span>
                </div>
                <button className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Download size={20} />
                  {t('contentPreview.downloadExcerpt')}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-full">
              <Users className="text-primary" size={24} />
              <span className="text-lg font-semibold text-primary">
                {t('contentPreview.cta')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            {t('finalCTA.title')}
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            {t('finalCTA.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Mail size={24} />
              {t('finalCTA.subscribeNow')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              {t('finalCTA.viewAllPastIssues')}
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">{t('finalCTA.stats.subscribers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24</div>
              <div className="text-blue-200">{t('finalCTA.stats.monthlyIssues')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-200">{t('finalCTA.stats.languages')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{t('finalCTA.stats.forever')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;
