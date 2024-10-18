import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { changeLanguage } from '../redux/languageSlice';
import { FaGlobe, FaChevronDown, FaSun, FaMoon } from 'react-icons/fa';

 const Header = ({ content }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
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

  return (
    <header className="bg-secondary-cream dark:bg-secondary-brown shadow-md">
      <nav className="container mx-auto py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-4 mb-4 md:mb-0">
            <li><Link to="/" className="nav-link" aria-label="Ir a la página de inicio">{content[language].home}</Link></li>
            <li><Link to="/curriculum" className="nav-link" aria-label="Ver currículum">{content[language].curriculum}</Link></li>
            <li><Link to="/projects" className="nav-link" aria-label="Ver proyectos">{content[language].projects}</Link></li>
            <li><Link to="/timeline" className="nav-link" aria-label="Ver trayectoria">{content[language].timeline}</Link></li>
            <li><Link to="/contact" className="nav-link" aria-label="Ir a la página de contacto">{content[language].contact}</Link></li>
          </ul>
          <div className="flex space-x-6 items-center">
            <button 
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-primary-brown dark:bg-primary-cream text-primary-cream dark:text-primary-brown transition-colors duration-200"
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="btn btn-secondary transition-colors duration-200 flex items-center"
                aria-label="Seleccionar idioma"
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen}
              >
                <FaGlobe className="mr-2" aria-hidden="true" />
                <span>{languages.find(lang => lang.code === language).name}</span>
                <FaChevronDown className="ml-2" aria-hidden="true" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-cream-800 rounded-md shadow-xl z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block px-4 py-2 text-sm text-cream-700 dark:text-cream-200 hover:bg-cream-100 dark:hover:bg-cream-700 w-full text-left"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header