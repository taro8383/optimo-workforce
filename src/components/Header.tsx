import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsSolutionsOpen(false);
    setIsLanguageOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setIsLanguageOpen(false);
    // Here you would implement actual language switching logic
    console.log('Language changed to:', languageCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
              <picture>
                <source media="(max-width: 1023px)" srcSet="/src/assets/logom.png 1x, /src/assets/logo@2M.png 2x" />
                <source media="(min-width: 1024px)" srcSet="/src/assets/logo.png 1x, /src/assets/logo@2D.png 2x" />
                <img 
                  src="/src/assets/logo.png" 
                  alt="Optimo Workforce Logo"
                  className="h-10"
                />
              </picture>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Features
            </button>
            <div className="relative">
              <button
                onClick={toggleSolutions}
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Solutions
                <ChevronDown size={16} className={`transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-10">
                  <button 
                    onClick={() => handleNavigation('restaurants')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'restaurants' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Restaurants
                  </button>
                  <button 
                    onClick={() => handleNavigation('hotels')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'hotels' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Hotels
                  </button>
                  <button 
                    onClick={() => handleNavigation('cafes')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'cafes' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Cafés
                  </button>
                </div>
              )}
            </div>
            <a href="#simple-transparent-pricing" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <div className="relative">
              <button
                onClick={toggleResources}
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-10">
                  <button 
                    onClick={() => handleNavigation('faq')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'faq' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => handleNavigation('roi-calculator')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'roi-calculator' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    ROI Calculator
                  </button>
                  <button 
                    onClick={() => handleNavigation('newsletter')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      currentPage === 'newsletter' ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Newsletter
                  </button>
                </div>
              )}
            </div>
              <button 
                onClick={() => handleNavigation('about')}
                className={`font-medium transition-colors ${
                  currentPage === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                About Us
              </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`font-medium transition-colors ${
                currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons and Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white"
              >
                <Globe size={16} className="text-gray-600" />
                <span className="text-lg">{getCurrentLanguage().flag}</span>
                <span className="text-sm font-medium text-gray-700">{getCurrentLanguage().code.toUpperCase()}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-20">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Language</div>
                  </div>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                        currentLanguage === language.code ? 'bg-blue-50 text-primary' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                      {currentLanguage === language.code && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`block font-medium transition-colors ${
                  currentPage === 'home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Features
              </button>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Solutions</div>
                <div className="pl-4 space-y-2">
                  <button 
                    onClick={() => handleNavigation('restaurants')}
                    className={`block text-left transition-colors ${
                      currentPage === 'restaurants' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Restaurants
                  </button>
                  <button 
                    onClick={() => handleNavigation('hotels')}
                    className={`block text-left transition-colors ${
                      currentPage === 'hotels' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Hotels
                  </button>
                  <button 
                    onClick={() => handleNavigation('cafes')}
                    className={`block text-left transition-colors ${
                      currentPage === 'cafes' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Cafés
                  </button>
                </div>
              </div>
              <a href="#simple-transparent-pricing" className="block text-gray-700 hover:text-primary font-medium">
                Pricing
              </a>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Resources</div>
                <div className="pl-4 space-y-2">
                  <a href="#blog" className="block text-gray-600 hover:text-primary">
                    Blog
                  </a>
                  <a href="#documentation" className="block text-gray-600 hover:text-primary">
                    Documentation
                  </a>
                  <button 
                    onClick={() => handleNavigation('faq')}
                    className={`block text-left transition-colors ${
                      currentPage === 'faq' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => handleNavigation('roi-calculator')}
                    className={`block text-left transition-colors ${
                      currentPage === 'roi-calculator' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    ROI Calculator
                  </button>
                  <a href="#webinars" className="block text-gray-600 hover:text-primary">
                    Webinars
                  </a>
                  <button 
                    onClick={() => handleNavigation('newsletter')}
                    className={`block text-left transition-colors ${
                      currentPage === 'newsletter' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Newsletter
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleNavigation('about')}
                className={`block font-medium transition-colors ${
                  currentPage === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`block font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Contact
              </button>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t space-y-3">
                <div className="text-gray-700 font-medium">Language</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                        currentLanguage === language.code 
                          ? 'border-primary bg-blue-50 text-primary' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="text-sm">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t space-y-3">
                <button className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;