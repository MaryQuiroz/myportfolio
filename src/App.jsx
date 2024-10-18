import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';

// Importaciones dinámicas usando React.lazy
const Home = lazy(() => import('./pages/Home'));
const Curriculum = lazy(() => import('./pages/Curriculum'));
const Projects = lazy(() => import('./pages/Projects'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  const content = {
    es: {
      home: 'Inicio',
      curriculum: 'Currículum',
      projects: 'Proyectos',
      timeline: 'Trayectoria',
      contact: 'Contacto',
      changeTheme: 'Cambiar tema',
      siteMap: 'Mapa del sitio',
      copyright: '© 2023 Mary Quiroz. Todos los derechos reservados.',
      loading: 'Cargando...',
      followMe: 'Sígueme en:',
    },
    en: {
      home: 'Home',
      curriculum: 'Curriculum',
      projects: 'Projects',
      timeline: 'Timeline',
      contact: 'Contact',
      changeTheme: 'Change theme',
      siteMap: 'Site Map',
      copyright: '© 2023 Mary Quiroz. All rights reserved.',
      loading: 'Loading...',
      followMe: 'Follow me on:',
    },
    de: {
      home: 'Startseite',
      curriculum: 'Lebenslauf',
      projects: 'Projekte',
      timeline: 'Werdegang',
      contact: 'Kontakt',
      changeTheme: 'Thema ändern',
      siteMap: 'Sitemap',
      copyright: '© 2023 Mary Quiroz. Alle Rechte vorbehalten.',
      loading: 'Wird geladen...',
      followMe: 'Folge mir auf:',
    },
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'light' ? 'bg-primary-cream text-primary-brown' : 'dark bg-primary-brown text-primary-cream'}`}>
        <Header content={content} />
        <main className="container mx-auto mt-8 px-6 flex-grow">
          <Suspense fallback={<div className="text-center text-xl font-semibold">{content[language].loading}</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer content={content} />
      </div>
    </Router>
  );
}

export default App;
