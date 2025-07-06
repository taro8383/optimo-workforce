import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12 text-center lg:text-left">
          {/* Logo and Newsletter */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <picture>
                <source media="(max-width: 1023px)" srcSet="/src/assets/dark-logom.png 1x, /src/assets/dark-logo@2M.png 2x" />
                <source media="(min-width: 1024px)" srcSet="/src/assets/dark-logo.png 1x, /src/assets/dark-logo@2D.png 2x" />
                <img 
                  src="/src/assets/dark-logo.png" 
                  alt="Optimo Workforce Logo"
                  className="h-10"
                />
              </picture>
            </button>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Get optimization tips</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <a href="#simple-transparent-pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#future-features" className="text-gray-300 hover:text-white transition-colors">
                  Future Features
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('restaurants')}
                  className={`text-left transition-colors ${
                    currentPage === 'restaurants' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Restaurants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('hotels')}
                  className={`text-left transition-colors ${
                    currentPage === 'hotels' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Hotels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('cafes')}
                  className={`text-left transition-colors ${
                    currentPage === 'cafes' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Cafés
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('faq')}
                  className={`text-left transition-colors ${
                    currentPage === 'faq' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('roi-calculator')}
                  className={`text-left transition-colors ${
                    currentPage === 'roi-calculator' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  ROI Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('newsletter')}
                  className={`text-left transition-colors ${
                    currentPage === 'newsletter' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className={`text-left transition-colors ${
                    currentPage === 'about' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Optimo Workforce. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
