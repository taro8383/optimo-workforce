import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Globe, 
  Send,
  CheckCircle,
  Users,
  Building2,
  Coffee,
  Utensils,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Headphones,
  Video,
  FileText
} from 'lucide-react';

const ContactPage: React.FC = () => {
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

  const businessTypes = [
    { value: 'restaurant', label: 'Restaurant', icon: Utensils },
    { value: 'hotel', label: 'Hotel', icon: Building2 },
    { value: 'cafe', label: 'Café', icon: Coffee },
    { value: 'other', label: 'Other', icon: Users }
  ];

  const contactReasons = [
    'Request Demo',
    'Get Pricing Information',
    'Technical Support',
    'Partnership Inquiry',
    'Media/Press Inquiry',
    'General Question'
  ];

  const regions = [
    'United States',
    'European Union',
    'Latin America',
    'Asia-Pacific',
    'Other'
  ];

  const offices = [
    {
      city: 'Barcelona',
      country: 'Spain',
      address: 'Carrer de Mallorca, 401\n08013 Barcelona, Spain',
      phone: '+34 93 123 4567',
      email: 'europe@optimoworkforce.com',
      timezone: 'CET (UTC+1)',
      hours: '9:00 AM - 6:00 PM',
      flag: '🇪🇸'
    },
    {
      city: 'New York',
      country: 'United States',
      address: '350 Fifth Avenue\nNew York, NY 10118',
      phone: '+1 (555) 123-4567',
      email: 'americas@optimoworkforce.com',
      timezone: 'EST (UTC-5)',
      hours: '9:00 AM - 6:00 PM',
      flag: '🇺🇸'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Raffles Place\nSingapore 048616',
      phone: '+65 6123 4567',
      email: 'apac@optimoworkforce.com',
      timezone: 'SGT (UTC+8)',
      hours: '9:00 AM - 6:00 PM',
      flag: '🇸🇬'
    },
    {
      city: 'São Paulo',
      country: 'Brazil',
      address: 'Av. Paulista, 1578\nSão Paulo, SP 01310-200',
      phone: '+55 11 1234-5678',
      email: 'latam@optimoworkforce.com',
      timezone: 'BRT (UTC-3)',
      hours: '9:00 AM - 6:00 PM',
      flag: '🇧🇷'
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      availability: '24/7',
      color: 'bg-primary'
    },
    {
      title: 'Video Call',
      description: 'Schedule a personalized demo or consultation',
      icon: Video,
      action: 'Book Call',
      availability: 'Business Hours',
      color: 'bg-secondary'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      availability: 'Mon-Fri 9AM-6PM',
      color: 'bg-accent-latam'
    },
    {
      title: 'Help Center',
      description: 'Browse our comprehensive documentation',
      icon: FileText,
      action: 'Browse Docs',
      availability: 'Always Available',
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
              Let's Optimize Together
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Ready to transform your workforce management? Our global team of optimization experts is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Calendar size={24} />
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                Start Live Chat
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
              Get Help Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support option that works best for you
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
                      <div className="text-sm text-gray-500 mb-2">Availability</div>
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
              Send Us a Message
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Business Type *
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
                      Number of Locations
                    </label>
                    <input
                      type="number"
                      id="locations"
                      name="locations"
                      value={formData.locations}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      Region *
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your region</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help? *
                  </label>
                  <select
                    id="contactReason"
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a reason</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your workforce optimization needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  Send Message
                </button>

                <div className="text-center text-sm text-gray-600">
                  We'll respond within 24 hours during business days
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary bg-opacity-10 rounded-full mb-6">
                  <CheckCircle size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Globe className="text-primary" size={32} />
                Global Offices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to support you across all major regions with local expertise and global intelligence.
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
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
                Stay updated with the latest workforce optimization insights and product updates.
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
            <h3 className="text-2xl font-bold mb-4">Need Urgent Support?</h3>
            <p className="text-lg text-red-100 mb-8 max-w-3xl mx-auto">
              For critical system issues affecting your operations, our emergency support team is available 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Phone size={24} />
                Emergency Hotline
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                Priority Chat
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-red-200 text-sm">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2"><5min</div>
                <div className="text-red-200 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">12</div>
                <div className="text-red-200 text-sm">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;