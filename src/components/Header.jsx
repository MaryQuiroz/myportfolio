import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { changeLanguage } from '../redux/languageSlice';
import { FaGlobe, FaChevronDown, FaSun, FaMoon } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Header = ({ content }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
  ];
 
  const handleLanguageChange = (langCode) => {
    dispatch(changeLanguage(langCode));
    setIsLanguageMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  const NavigationLinks = ({ mobile = false }) => (
    <>
      <Link 
        to="/"
        onClick={() => mobile && setIsMenuOpen(false)}
        className={`${mobile ? 'block w-full p-3' : 'px-3 py-2'} hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link`}
      >
        {content[language].home}
      </Link>
      <Link 
        to="/curriculum"
        onClick={() => mobile && setIsMenuOpen(false)}
        className={`${mobile ? 'block w-full p-3' : 'px-3 py-2'} hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link`}
      >
        {content[language].curriculum}
      </Link>
      <Link 
        to="/projects"
        onClick={() => mobile && setIsMenuOpen(false)}
        className={`${mobile ? 'block w-full p-3' : 'px-3 py-2'} hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link`}
      >
        {content[language].projects}
      </Link>
      <Link 
        to="/timeline"
        onClick={() => mobile && setIsMenuOpen(false)}
        className={`${mobile ? 'block w-full p-3' : 'px-3 py-2'} hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link`}
      >
        {content[language].timeline}
      </Link>
      <Link 
        to="/contact"
        onClick={() => mobile && setIsMenuOpen(false)}
        className={`${mobile ? 'block w-full p-3' : 'px-3 py-2'} hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link`}
      >
        {content[language].contact}
      </Link>
    </>
  );

  return (
    <header className="bg-secondary-cream dark:bg-secondary-brown shadow-md relative">
      <nav className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between h-16">
          {/* Navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationLinks />
          </div>

          <div className="flex items-center justify-end w-full md:w-auto">
            {/* Botón de menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary-cream-dark dark:hover:bg-primary-brown-dark transition-colors duration-200 nav-link"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Selector de idioma */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="btn btn-secondary transition-colors duration-200 flex items-center dark:hover:bg-primary-brown-dark"
                aria-label="Seleccionar idioma"
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen}
              >
                <FaGlobe className="mr-2" aria-hidden="true" />
                <span>{languages.find(lang => lang.code === language).name}</span>
                <FaChevronDown className="ml-2" aria-hidden="true" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 rounded-md shadow-xl z-20 bg-secondary-cream-dark dark:bg-primary-brown-dark">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block px-4 py-2 text-sm text-cream-700 hover:bg-secondary-cream-light dark:text-cream-200 dark:hover:bg-primary-brown-light w-full text-left"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Botón de tema */}
            <button 
              onClick={() => dispatch(toggleTheme())}
              className="ml-4 p-2 rounded-full bg-primary-brown dark:bg-primary-cream text-primary-cream dark:text-primary-brown transition-colors duration-200"
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil - Solo visible en pantallas pequeñas cuando está abierto */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-secondary-cream dark:bg-secondary-brown">
            <NavigationLinks mobile />
          </div>
        )}
      </nav> 
    </header>
  );
};

export default Header;