import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Projects() {
  const language = useSelector((state) => state.language);
  const [filter, setFilter] = useState('all');

  const content = {
    es: {
      title: 'Mis Proyectos',
      viewProject: 'Ver proyecto',
    },
    en: {
      title: 'My Projects',
      viewProject: 'View project',
    },
    de: {
      title: 'Meine Projekte',
      viewProject: 'Projekt ansehen',
    },
  };

  const projects = [
    {
      id: 1,
      name: 'Cat App',
      category: 'web',
      description: {
        es: 'Cat App es una aplicación diseñada para ayudar a los dueños de gatos a gestionar y cuidar a sus amigos felinos. La aplicación incluye características esenciales como perfiles de gatos y listas de tareas. Aplicación Web para gestionar tareas con autenticación de usuarios y operaciones CRUD.',
        en: 'Cat App is an application designed to help cat owners manage and care for their feline friends. The application includes essential features such as cat profiles and task lists. Web application for task management with user authentication and CRUD operations.',
        de: 'Cat App ist eine Anwendung, die Katzenbesitzern hilft, ihre felinen Freunde zu verwalten und zu pflegen. Die Anwendung enthält wichtige Funktionen wie Katzenprofile und Aufgabenlisten. Webanwendung zur Aufgabenverwaltung mit Benutzerauthentifizierung und CRUD-Operationen.'
      },
      technologies: ['Node.js', 'Express','vite', 'React', 'MongoDB', 'TailwindCss'],
      link: 'https://github.com/MaryQuiroz/CatApp.git'
    },
    {
      id: 2,
      name: 'TaskFlow',
      category: 'web',
      description: {
        es: 'TaskFlow es una aplicación web completa para la gestión de proyectos, clientes y facturación. Permite a los usuarios administrar sus proyectos, dar seguimiento a clientes y generar facturas de manera eficiente.',
        en: 'TaskFlow is a comprehensive web application for project management, client tracking, and billing. It allows users to manage their projects, track clients, and generate invoices efficiently.',
        de: 'TaskFlow ist eine umfassende Webanwendung für Projektmanagement, Kundenverwaltung und Rechnungsstellung. Sie ermöglicht Benutzern die effiziente Verwaltung ihrer Projekte, die Verfolgung von Kunden und die Generierung von Rechnungen.'
      },
      technologies: ['Node.js', 'Express','vite', 'React', 'MongoDB', 'TailwindCss'],
      link: 'https://github.com/MaryQuiroz/TaskFlow'
    },
    {
      id: 3,
      name: 'CineMar',
      category: 'web',
      description: {
        es: 'CineMar es una aplicación web moderna para la gestión y visualización de cartelera de cine. Desarrollada con tecnologías de última generación, ofrece una experiencia de usuario fluida y responsive para la consulta de películas, horarios y compra de entradas.',
        en: 'CineMar is a modern web application for managing and viewing movie listings. Developed with cutting-edge technologies, it offers a smooth and responsive user experience for browsing movies, schedules, and purchasing tickets.',
        de: 'CineMar ist eine moderne Webanwendung zur Verwaltung und Anzeige von Kinoprogrammen. Entwickelt mit modernsten Technologien, bietet sie ein flüssiges und responsives Benutzererlebnis zum Durchsuchen von Filmen, Zeitplänen und zum Kauf von Tickets.'
      },
      technologies: ['React', 'Vite', 'RESTful Apis', 'TailwindCss'],
      link: 'https://github.com/MaryQuiroz/CineMar'
    },
    {
      id: 4,
      name: 'Plataforma de E-learning',
      category: 'web',
      description: {
        es: 'Sistema de cursos online con seguimiento de progreso del estudiante.',
        en: 'Online course system with student progress tracking.',
        de: 'Online-Kurssystem mit Verfolgung des Lernfortschritts der Studenten.'
      },
      technologies: ['Python', 'Django', 'Machine Learning', 'MySQL', 'TailwindCss'],
      link: '#'
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <h1 className="text-4xl font-bold mb-8 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-secondary-cream dark:bg-secondary-brown p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-primary-brown dark:text-primary-cream">{project.name}</h3>
            <p className="text-sm mb-4 text-secondary-brown dark:text-secondary-cream">{content[language][project.category]}</p>
            <p className="mb-4 text-primary-brown dark:text-primary-cream">{project.description[language]}</p>
            <div className="mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="inline-block bg-primary-cream dark:bg-primary-brown text-primary-brown dark:text-primary-cream px-2 py-1 rounded mr-2 mb-2 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {content[language].viewProject}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
