import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsSolutionsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-ibm-plex-sans font-bold text-gray-900">
              Optimo Workforce
            </span>
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
                  <a href="#catering" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Catering
                  </a>
                </div>
              )}
            </div>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors font-medium">
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
                  <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Blog
                  </a>
                  <a href="#documentation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Documentation
                  </a>
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
                  <a href="#webinars" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Webinars
                  </a>
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
              About
            </button>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-700 hover:text-primary font-medium transition-colors">
              Log In
            </button>
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
                  <a href="#catering" className="block text-gray-600 hover:text-primary">
                    Catering
                  </a>
                </div>
              </div>
              <a href="#pricing" className="block text-gray-700 hover:text-primary font-medium">
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
                About
              </button>
              <a href="#contact" className="block text-gray-700 hover:text-primary font-medium">
                Contact
              </a>
              <div className="pt-4 border-t space-y-3">
                <button className="block w-full text-left text-gray-700 hover:text-primary font-medium">
                  Log In
                </button>
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