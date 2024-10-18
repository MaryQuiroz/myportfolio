import React from 'react';
import { useSelector } from 'react-redux';

function Curriculum() {
  const language = useSelector((state) => state.language);

  const content = {
    es: {
      title: 'Mi Currículum',
      skills: 'Habilidades Técnicas',
      experience: 'Experiencia Laboral',
      education: 'Datos Académicos',
      projects: 'Proyectos Destacados',
      additionalSkills: 'Habilidades Adicionales',
      languages: 'Idiomas',
    },
    en: {
      title: 'My Curriculum',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      education: 'Education',
      projects: 'Featured Projects',
      additionalSkills: 'Additional Skills',
      languages: 'Languages',
    },
    de: {
      title: 'Mein Lebenslauf',
      skills: 'Technische Fähigkeiten',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      projects: 'Herausragende Projekte',
      additionalSkills: 'Zusätzliche Fähigkeiten',
      languages: 'Sprachen',
    },
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
            <h3 className="text-lg font-semibold">Enfoca't Barcelona - IA & Machine Learning con Python</h3>
            <p className="text-sm">En curso</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">La Salle BCN - Desarrollo Web Front-end</h3>
            <p className="text-sm">2024</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">ISDI Coders - Desarrollo Web Full Stack</h3>
            <p className="text-sm">2023 - 2024</p>
          </li>
          <li className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">CCC Centro de Estudios Profesionales - CFGS Dietética y Nutrición</h3>
            <p className="text-sm">2019 - 2021</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].projects}</h2>
        <div className="space-y-4">
          <div className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Aplicación de Gestión de Tareas</h3>
            <p className="text-sm mb-2">Tecnologías: React, Node.js, Express, MongoDB</p>
            <p>Logros: Implementación de autenticación de usuarios y operaciones CRUD</p>
          </div>
          <div className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Plataforma de E-learning</h3>
            <p className="text-sm mb-2">Tecnologías: Vue.js, Python, Flask, SQL, Django</p>
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

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].languages}</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-brown dark:text-primary-cream">
          <li>Castellano: Nativo</li>
          <li>Catalán: Nativo</li>
          <li>Inglés: Nivel medio</li>
        </ul>
      </section>
    </div>
  );
}

export default Curriculum;
