import React from 'react';
import { MapPin, Calendar, Users, Globe, Brain, Shield, Linkedin, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Founded in Barcelona',
      description: 'Started by hospitality veterans tired of wasted potential',
      icon: MapPin,
      color: 'bg-primary'
    },
    {
      year: '2025',
      title: '500+ locations optimized',
      description: 'Rapid growth across US, EU, LATAM, and APAC markets',
      icon: Calendar,
      color: 'bg-secondary'
    },
    {
      year: '2026',
      title: 'Global partner network',
      description: 'Strategic partnerships with major POS providers worldwide',
      icon: Globe,
      color: 'bg-accent-latam'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Founder & CEO',
      description: '10+ years in EU/Asia hospitality tech',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      description: 'Former Google AI, restaurant tech specialist',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Thompson',
      role: 'VP of Operations',
      description: '15 years managing multi-location restaurants',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Global Markets',
      description: 'APAC expansion and mobile payment expert',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      description: 'PhD in Machine Learning, tip prediction algorithms',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Elena Vasquez',
      role: 'Customer Success Director',
      description: 'Hospitality veteran, speaks 5 languages',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Think Global, Act Local',
      description: 'We understand that every market is unique. Our AI adapts to local tipping cultures, labor laws, and customer behaviors while leveraging global intelligence.',
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'Data-Driven Empathy',
      description: 'Technology should serve people, not replace them. We use AI to make work more predictable and fair for restaurant staff while maximizing business outcomes.',
      color: 'text-secondary'
    },
    {
      icon: Shield,
      title: 'Ethical Optimization',
      description: 'We believe in transparent algorithms and fair labor practices. Our optimization never comes at the expense of worker rights or wellbeing.',
      color: 'text-accent-latam'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
                We Fix Labor Chaos
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Founded by hospitality veterans tired of wasted potential
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Join Our Mission
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  See Open Positions
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Diverse Team</h3>
                <div className="grid grid-cols-3 gap-4">
                  {teamMembers.slice(0, 6).map((member, index) => (
                    <div key={index} className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Users size={16} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-blue-100">Working with POS devices across 4 continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small team in Barcelona to a global workforce optimization platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white`}>
                            <Icon size={24} />
                          </div>
                          <div className="text-3xl font-bold text-gray-900">{event.year}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-lg text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-8 h-8 bg-white border-4 border-primary rounded-full mx-auto lg:mx-0"></div>
                    
                    <div className="w-full lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hospitality experts, AI researchers, and optimization specialists working together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6`}>
                    <Icon size={40} className={value.color} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-ibm-plex-sans font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            Help us transform the hospitality industry with ethical AI and global intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Partner With Us
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Global Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;