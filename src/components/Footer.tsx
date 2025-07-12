import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const { t } = useTranslation();
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
              <h4 className="text-lg font-semibold mb-4">{t('footer:newsletterTitle')}</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer:newsletter.placeholder')}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  {t('footer:newsletter.subscribe')}
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
            <h4 className="text-lg font-semibold mb-6">{t('footer:product.title')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('footer:features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('integrations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'integrations' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:integrations')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('future-features');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'future-features' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:futureFeatures')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('security');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'security' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:security')}
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">{t('footer:solutions.title')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('restaurants');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'restaurants' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:restaurants')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('hotels');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'hotels' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:hotels')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('cafes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'cafes' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:cafes')}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">{t('footer:resources.title')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'faq' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:faq')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('roi-calculator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'roi-calculator' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:roiCalculator')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('newsletter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'newsletter' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:newsletterTitle')}
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-6">{t('footer:company.title')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className={`text-left transition-colors ${
                    currentPage === 'about' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNavigation('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left transition-colors ${
                    currentPage === 'contact' ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t('footer:contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Optimo Workforce. {t('footer:rights')}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                <button 
                  onClick={() => handleNavigation('privacy-policy')}
                  className={`transition-colors ${
                    currentPage === 'privacy-policy' ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t('footer:privacy')}
                </button>
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                <button 
                  onClick={() => handleNavigation('terms-of-service')}
                  className={`transition-colors ${
                    currentPage === 'terms-of-service' ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t('footer:terms')}
                </button>
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                <button 
                  onClick={() => handleNavigation('cookie-policy')}
                  className={`transition-colors ${
                    currentPage === 'cookie-policy' ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t('footer:cookies')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
