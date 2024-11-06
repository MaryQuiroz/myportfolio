import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ content }) => {
  const language = useSelector((state) => state.language);

  return (
    <footer className="bg-secondary-cream dark:bg-secondary-brown shadow-inner mt-12 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{content[language].siteMap}</h2>
          <nav aria-label="Mapa del sitio">
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link hover:underline transition-all duration-200">{content[language].home}</Link></li>
              <li><Link to="/curriculum" className="footer-link hover:underline transition-all duration-200">{content[language].curriculum}</Link></li>
              <li><Link to="/projects" className="footer-link hover:underline transition-all duration-200">{content[language].projects}</Link></li>
              <li><Link to="/timeline" className="footer-link hover:underline transition-all duration-200">{content[language].timeline}</Link></li>
              <li><Link to="/contact" className="footer-link hover:underline transition-all duration-200">{content[language].contact}</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{content[language].followMe}</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/MaryQuiroz" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/maryquiroz" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform duration-200">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mary Quiroz</h2>
          <p className="mb-4">Desarrolladora Web Full Stack apasionada por crear soluciones innovadoras y eficientes.</p>
          <Link to="/contact" className="btn btn-primary inline-block transition-all duration-200 hover:scale-105">
            {content[language].contact}
          </Link>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
        <p className="text-center text-sm">{content[language].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
