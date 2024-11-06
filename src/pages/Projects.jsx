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
      description: 'Cat App es una aplicación diseñada para ayudar a los dueños de gatos a gestionar y cuidar a sus amigos felinos. La aplicación incluye características esenciales como perfiles de gatos y listas de tareas. Aplicación Web para gestionar tareas con autenticación de usuarios y operaciones CRUD.',
      technologies: ['Node.js', 'Express','vite', 'React', 'MongoDB', 'TailwindCss'],
      link: 'https://github.com/MaryQuiroz/CatApp.git'
    },
    {
      id: 2,
      name: 'TaskFlow',
      category: 'web',
      description: 'TaskFlow es una aplicación web completa para la gestión de proyectos, clientes y facturación. Permite a los usuarios administrar sus proyectos, dar seguimiento a clientes y generar facturas de manera eficiente.',
      technologies: ['Node.js', 'Express','vite', 'React', 'MongoDB', 'TailwindCss'],
      link: 'https://github.com/MaryQuiroz/TaskFlow'
    },
    {
      id: 3,
      name: 'Plataforma de E-learning',
      category: 'web',
      description: 'Sistema de cursos online con seguimiento de progreso del estudiante.',
      technologies: ['Python', 'Django', 'Machine Learning', 'MySQL', 'TailwindCss'],
      link: '#'
    }
    
    
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
            <p className="mb-4 text-primary-brown dark:text-primary-cream">{project.description}</p>
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
