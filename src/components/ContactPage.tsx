import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  Globe, 
  Send,
  CheckCircle,
  Users,
  Building2,
  Coffee,
  Utensils,
  Linkedin,
  Twitter,
  Youtube,
  Headphones,
  Video,
  FileText
} from 'lucide-react';
import { ContactTranslations } from '../types/i18n/contact-translations';

interface ContactPageProps {
  translations?: ContactTranslations;
}

const ContactPage: React.FC<ContactPageProps> = ({ translations }) => {
  const { t } = useTranslation('components/contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    locations: '',
    phone: '',
    region: '',
    message: '',
    contactReason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper function to safely access translations
  const getTranslation = (path: string): string => {
    if (translations) {
      const keys = path.split('.');
      let current: any = translations;
      for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          return t(path);
        }
      }
      return typeof current === 'string' ? current : t(path);
    }
    return t(path);
  };

  const businessTypes = [
    { value: 'restaurant', label: getTranslation('contactForm.options.businessTypes.restaurant'), icon: Utensils },
    { value: 'hotel', label: getTranslation('contactForm.options.businessTypes.hotel'), icon: Building2 },
    { value: 'cafe', label: getTranslation('contactForm.options.businessTypes.cafe'), icon: Coffee },
    { value: 'other', label: getTranslation('contactForm.options.businessTypes.other'), icon: Users }
  ];

  const contactReasons = [
    getTranslation('contactForm.options.contactReasons.requestDemo'),
    getTranslation('contactForm.options.contactReasons.getPricing'),
    getTranslation('contactForm.options.contactReasons.technicalSupport'),
    getTranslation('contactForm.options.contactReasons.partnership'),
    getTranslation('contactForm.options.contactReasons.media'),
    getTranslation('contactForm.options.contactReasons.general')
  ];

  const regions = [
    getTranslation('contactForm.options.regions.unitedStates'),
    getTranslation('contactForm.options.regions.eu'),
    getTranslation('contactForm.options.regions.latam'),
    getTranslation('contactForm.options.regions.apac'),
    getTranslation('contactForm.options.regions.other')
  ];

  const offices = [
    {
      city: getTranslation('globalOffices.offices.barcelona.city'),
      country: getTranslation('globalOffices.offices.barcelona.country'),
      address: getTranslation('globalOffices.offices.barcelona.address'),
      phone: getTranslation('globalOffices.offices.barcelona.phone'),
      email: getTranslation('globalOffices.offices.barcelona.email'),
      timezone: getTranslation('globalOffices.offices.barcelona.timezone'),
      hours: getTranslation('globalOffices.offices.barcelona.hours'),
      flag: '🇪🇸'
    },
    {
      city: getTranslation('globalOffices.offices.newYork.city'),
      country: getTranslation('globalOffices.offices.newYork.country'),
      address: getTranslation('globalOffices.offices.newYork.address'),
      phone: getTranslation('globalOffices.offices.newYork.phone'),
      email: getTranslation('globalOffices.offices.newYork.email'),
      timezone: getTranslation('globalOffices.offices.newYork.timezone'),
      hours: getTranslation('globalOffices.offices.newYork.hours'),
      flag: '🇺🇸'
    },
    {
      city: getTranslation('globalOffices.offices.singapore.city'),
      country: getTranslation('globalOffices.offices.singapore.country'),
      address: getTranslation('globalOffices.offices.singapore.address'),
      phone: getTranslation('globalOffices.offices.singapore.phone'),
      email: getTranslation('globalOffices.offices.singapore.email'),
      timezone: getTranslation('globalOffices.offices.singapore.timezone'),
      hours: getTranslation('globalOffices.offices.singapore.hours'),
      flag: '🇸🇬'
    },
    {
      city: getTranslation('globalOffices.offices.saoPaulo.city'),
      country: getTranslation('globalOffices.offices.saoPaulo.country'),
      address: getTranslation('globalOffices.offices.saoPaulo.address'),
      phone: getTranslation('globalOffices.offices.saoPaulo.phone'),
      email: getTranslation('globalOffices.offices.saoPaulo.email'),
      timezone: getTranslation('globalOffices.offices.saoPaulo.timezone'),
      hours: getTranslation('globalOffices.offices.saoPaulo.hours'),
      flag: '🇧🇷'
    }
  ];

  const supportOptions = [
    {
      title: getTranslation('supportOptions.cards.liveChat.title'),
      description: getTranslation('supportOptions.cards.liveChat.description'),
      icon: MessageCircle,
      action: getTranslation('supportOptions.cards.liveChat.action'),
      availability: getTranslation('supportOptions.cards.liveChat.availability'),
      color: 'bg-primary'
    },
    {
      title: getTranslation('supportOptions.cards.videoCall.title'),
      description: getTranslation('supportOptions.cards.videoCall.description'),
      icon: Video,
      action: getTranslation('supportOptions.cards.videoCall.action'),
      availability: getTranslation('supportOptions.cards.videoCall.availability'),
      color: 'bg-secondary'
    },
    {
      title: getTranslation('supportOptions.cards.phoneSupport.title'),
      description: getTranslation('supportOptions.cards.phoneSupport.description'),
      icon: Phone,
      action: getTranslation('supportOptions.cards.phoneSupport.action'),
      availability: getTranslation('supportOptions.cards.phoneSupport.availability'),
      color: 'bg-accent-latam'
    },
    {
      title: getTranslation('supportOptions.cards.helpCenter.title'),
      description: getTranslation('supportOptions.cards.helpCenter.description'),
      icon: FileText,
      action: getTranslation('supportOptions.cards.helpCenter.action'),
      availability: getTranslation('supportOptions.cards.helpCenter.availability'),
      color: 'bg-accent-apac'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <MessageCircle size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {getTranslation('heroSection.title.mainHeading')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {getTranslation('heroSection.subtitle.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Calendar size={24} />
                {getTranslation('heroSection.buttons.scheduleDemo')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                {getTranslation('heroSection.buttons.startLiveChat')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              {getTranslation('supportOptions.title.mainHeading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getTranslation('supportOptions.subtitle.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${option.color} bg-opacity-10 mb-6`}>
                      <Icon size={40} className={option.color.replace('bg-', 'text-')} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">{getTranslation('supportOptions.cards.liveChat.availability')}</div>
                      <div className="text-sm font-semibold text-gray-700">{option.availability}</div>
                    </div>
                    <button className={`w-full ${option.color} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}>
                      {option.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Send className="text-primary" size={32} />
              {getTranslation('contactForm.title.mainHeading')}
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={getTranslation('contactForm.placeholders.fullName')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={getTranslation('contactForm.placeholders.email')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.companyName')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={getTranslation('contactForm.placeholders.company')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={getTranslation('contactForm.placeholders.phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {getTranslation('contactForm.labels.businessType')}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {businessTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({...formData, businessType: type.value})}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                            formData.businessType === type.value
                              ? 'border-primary bg-blue-50 text-primary'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon size={24} className="mx-auto mb-2" />
                          <div className="text-sm font-medium">{type.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.locations')}
                    </label>
                    <input
                      type="number"
                      id="locations"
                      name="locations"
                      value={formData.locations}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={getTranslation('contactForm.placeholders.locations')}
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('contactForm.labels.region')}
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{getTranslation('contactForm.placeholders.selectRegion')}</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                    {getTranslation('contactForm.labels.contactReason')}
                  </label>
                  <select
                    id="contactReason"
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">{getTranslation('contactForm.placeholders.selectReason')}</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {getTranslation('contactForm.labels.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder={getTranslation('contactForm.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  {getTranslation('contactForm.buttons.sendMessage')}
                </button>

                <div className="text-center text-sm text-gray-600">
                  {getTranslation('contactForm.notes.responseTime')}
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary bg-opacity-10 rounded-full mb-6">
                  <CheckCircle size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{getTranslation('contactForm.success.title')}</h3>
                <p className="text-lg text-gray-600 mb-8">
                  {getTranslation('contactForm.success.message')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {getTranslation('contactForm.success.button')}
                </button>
              </div>
            )}
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Globe className="text-primary" size={32} />
                {getTranslation('globalOffices.title.mainHeading')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {getTranslation('globalOffices.subtitle.description')}
              </p>
            </div>

            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                        <p className="text-gray-600">{office.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{office.timezone}</div>
                      <div className="text-sm font-semibold text-gray-700">{office.hours}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-700 whitespace-pre-line">{office.address}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone size={20} className="text-gray-400 flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={20} className="text-gray-400 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{getTranslation('socialMedia.title.mainHeading')}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube size={24} />
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                {getTranslation('socialMedia.description.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <Headphones size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{getTranslation('emergencySupport.title.mainHeading')}</h3>
            <p className="text-lg text-red-100 mb-8 max-w-3xl mx-auto">
              {getTranslation('emergencySupport.description.text')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Phone size={24} />
                {getTranslation('emergencySupport.buttons.emergencyHotline')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                {getTranslation('emergencySupport.buttons.priorityChat')}
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{getTranslation('emergencySupport.stats.emergencySupportValue')}</div>
                <div className="text-red-200 text-sm">{getTranslation('emergencySupport.stats.emergencySupport')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{getTranslation('emergencySupport.stats.responseTimeValue')}</div>
                <div className="text-red-200 text-sm">{getTranslation('emergencySupport.stats.responseTime')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{getTranslation('emergencySupport.stats.languagesValue')}</div>
                <div className="text-red-200 text-sm">{getTranslation('emergencySupport.stats.languages')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
