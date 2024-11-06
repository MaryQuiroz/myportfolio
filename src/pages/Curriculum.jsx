import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Curriculum() {
  const language = useSelector((state) => state.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    es: {
      title: 'Mi Currículum',
      skills: 'Habilidades Técnicas',
      experience: 'Experiencia Laboral',
      education: 'Datos Académicos',
      projects: 'Proyectos Destacados',
      additionalSkills: 'Habilidades Adicionales',
      languages: 'Idiomas',
      downloadCV: 'Descargar CV ▼',
      downloadFCV: 'CV Frontend',
      downloadBCV: 'CV Backend'
    },
    en: {
      title: 'My Curriculum',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      education: 'Education',
      projects: 'Featured Projects',
      additionalSkills: 'Additional Skills',
      languages: 'Languages',
      downloadCV: 'Download CV ▼',
      downloadFCV: 'Frontend CV',
      downloadBCV: 'Backend CV'
    },
    de: {
      title: 'Mein Lebenslauf',
      skills: 'Technische Fähigkeiten',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      projects: 'Herausragende Projekte',
      additionalSkills: 'Zusätzliche Fähigkeiten',
      languages: 'Sprachen',
      downloadCV: 'Lebenslauf ▼',
      downloadFCV: 'Frontend-Lebenslauf',
      downloadBCV: 'Backend-Lebenslauf'
    },
  };

  const handleDownloadCV = (cvType) => {
    const cvUrls = {
      frontend: './CV-MaryQuiroz-Frontend.pdf',
      backend: './CV-MaryQuiroz-Backend.pdf'
    };

    const link = document.createElement('a');
    link.href = cvUrls[cvType];
    link.download = `MaryQuiroz-${cvType}-CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDropdownOpen(false);
  };

  return (
    <div className="curriculum max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].skills}</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-brown dark:text-primary-cream">
          <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React, Vue.js</li>
          <li>Backend: Node.js, Express, Python, Flask, Django</li>
          <li>Bases de datos: MongoDB, SQL</li>
          <li>Otras: Git, RESTful APIs, Tailwind CSS, Figma, IA, Machine Learning</li>
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].experience}</h2>
        <div className="bg-secondary-cream dark:bg-secondary-brown p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Proyectos Freelance</h3>
          <p className="text-sm mb-2">Mayo 2023 - Actualidad</p>
          <ul className="list-disc list-inside">
            <li>Desarrollo de aplicaciones web completas con React y Node.js/Express, integrando MongoDB.</li>
            <li>Diseño y prototipado de interfaces en Figma.</li>
            <li>Implementación de estilos responsivos con Tailwind CSS.</li>
            <li>Creación e integración de APIs RESTful, consumidas mediante Fetch.</li>
            <li>Pruebas unitarias y de integración para asegurar calidad.</li>
            <li>Gestión de proyectos desde el concepto hasta el despliegue.</li>
            <li>Optimización y mantenimiento continuo de aplicaciones.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].education}</h2>
        <ul className="space-y-4">
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">IA & Machine Learning con Python</h3>
            <p className="text-sm font-semibold">Enfoca't Barcelona</p>
            <p className="text-sm">En curso</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Desarrollo Web Front-end</h3>
            <p className="text-sm font-semibold">La Salle BCN </p>
            <p className="text-sm">2024</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Desarrollo Web Full Stack</h3>
            <p className="text-sm font-semibold">ISDI Coders</p>
            <p className="text-sm">2023 - 2024</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">CFGS Dietética y Nutrición </h3>
            <p className="text-sm font-semibold">CCC Centro de Estudios Profesionales</p>
            <p className="text-sm">2019 - 2021</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].projects}</h2>
        <div className="space-y-4">
          <div className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Aplicación de Gestión de Tareas</h3>
            <p className="text-sm mb-2">Tecnologías: Node.js, Express, Vite, React, MongoDB, TailwindCss</p>
            <p>Logros: Implementación de autenticación de usuarios y operaciones CRUD</p>
          </div>
          <div className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Plataforma de E-learning</h3>
            <p className="text-sm mb-2">Tecnologías: Python, Django, Machine Learning, MySQL, TailwindCss</p>
            <p>Características: Sistema de cursos online, seguimiento de progreso</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].additionalSkills}</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-brown dark:text-primary-cream">
          <li>Liderazgo de equipos y colaboración en entornos ágiles</li>
          <li>Resolución creativa de problemas y aprendizaje rápido</li>
          <li>Gestión eficiente de proyectos y cumplimiento de plazos</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].languages}</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-brown dark:text-primary-cream">
          <li>Castellano: Nativo</li>
          <li>Catalán: Nativo</li>
          <li>Inglés: Nivel medio</li>
        </ul>
      </section>

      
      <div className="flex items-center justify-center mb-12">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-secondary inline-flex items-center"
          >
            {content[language].downloadCV}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-primary-cream dark:bg-primary-brown">
              <div className="rounded-md ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => handleDownloadCV('frontend')}
                    className="block w-full text-left px-4 py-2 text-primary-brown dark:text-primary-cream hover:bg-secondary-cream dark:hover:bg-secondary-brown"
                  >
                    {content[language].downloadFCV}
                  </button>
                  <button
                    onClick={() => handleDownloadCV('backend')}
                    className="block w-full text-left px-4 py-2 text-primary-brown dark:text-primary-cream hover:bg-secondary-cream dark:hover:bg-secondary-brown"
                  >
                    {content[language].downloadBCV}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
