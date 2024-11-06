import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Projects() {
  const language = useSelector((state) => state.language);
  const [filter, setFilter] = useState('all');

  const content = {
    es: {
      title: 'Mis Proyectos',
      filter: 'Filtrar por:',
      all: 'Todos',
      web: 'Web',
      mobile: 'Móvil',
      viewProject: 'Ver proyecto',
    },
    en: {
      title: 'My Projects',
      filter: 'Filter by:',
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      viewProject: 'View project',
    },
    de: {
      title: 'Meine Projekte',
      filter: 'Filtern nach:',
      all: 'Alle',
      web: 'Web',
      mobile: 'Mobil',
      viewProject: 'Projekt ansehen',
    },
  };

  const projects = [
    {
      id: 1,
      name: 'Aplicación de Gestión de Tareas',
      category: 'web',
      description: 'Aplicación web para gestionar tareas con autenticación de usuarios y operaciones CRUD.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      name: 'Plataforma de E-learning',
      category: 'web',
      description: 'Sistema de cursos online con seguimiento de progreso del estudiante.',
      technologies: ['Vue.js', 'Python', 'Flask', 'SQL', 'Django'],
      link: '#'
    },
    {
      id: 3,
      name: 'Aplicación de Recetas Saludables',
      category: 'mobile',
      description: 'App móvil para buscar y guardar recetas saludables, con cálculo de calorías.',
      technologies: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      id: 4,
      name: 'Dashboard de Análisis de Datos',
      category: 'web',
      description: 'Dashboard interactivo para visualizar y analizar datos de ventas.',
      technologies: ['D3.js', 'Node.js', 'Express', 'PostgreSQL'],
      link: '#'
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <h1 className="text-4xl font-bold mb-8 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
      
      <div className="mb-8">
        <label className="mr-4 text-primary-brown dark:text-primary-cream">{content[language].filter}</label>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="bg-secondary-cream dark:bg-secondary-brown text-primary-brown dark:text-primary-cream p-2 rounded"
        >
          <option value="all">{content[language].all}</option>
          <option value="web">{content[language].web}</option>
          <option value="mobile">{content[language].mobile}</option>
        </select>
      </div>
      
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
