import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkillsList from '../components/SkillsList';
import ProjectCard from '../components/ProjectCard';

function Home() {
  const language = useSelector((state) => state.language);

  const content = {
    es: {
      title: 'Mary Quiroz',
      subtitle: 'Desarrolladora Web Full Stack',
      intro: 'Desarrolladora Web Full Stack proactiva y autodidacta con experiencia en tecnologías front-end y back-end. Especializada en crear soluciones web eficientes e innovadoras. Comprometida con el aprendizaje continuo y la excelencia en el desarrollo de software.',
      skills: 'Habilidades Clave',
      projects: 'Proyectos',
      contact: 'Contacto',
      viewMore: 'Ver más',
      workTogether: '¿Interesado en trabajar juntos?',
      taskManager: 'Aplicación de Gestión de Tareas',
      taskManagerTech: 'React, Node.js, Express, MongoDB',
      eLearning: 'Plataforma de E-learning',
      eLearningTech: 'Vue.js, Python, Flask, SQL, Django',
    },
    en: {
      title: 'Mary Quiroz',
      subtitle: 'Full Stack Web Developer',
      intro: 'Proactive and self-taught Full Stack Web Developer with experience in front-end and back-end technologies. Specialized in creating efficient and innovative web solutions. Committed to continuous learning and excellence in software development.',
      skills: 'Key Skills',
      projects: 'Projects',
      contact: 'Contact',
      viewMore: 'View more',
      workTogether: 'Interested in working together?',
      taskManager: 'Task Management Application',
      taskManagerTech: 'React, Node.js, Express, MongoDB',
      eLearning: 'E-learning Platform',
      eLearningTech: 'Vue.js, Python, Flask, SQL, Django',
    },
    de: {
      title: 'Mary Quiroz',
      subtitle: 'Full-Stack-Webentwicklerin',
      intro: 'Proaktive und autodidaktische Full-Stack-Webentwicklerin mit Erfahrung in Front-End- und Back-End-Technologien. Spezialisiert auf die Erstellung effizienter und innovativer Weblösungen. Engagiert für kontinuierliches Lernen und Exzellenz in der Softwareentwicklung.',
      skills: 'Kernkompetenzen',
      projects: 'Projekte',
      contact: 'Kontakt',
      viewMore: 'Mehr sehen',
      workTogether: 'Interesse an einer Zusammenarbeit?',
      taskManager: 'Aufgabenverwaltungsanwendung',
      taskManagerTech: 'React, Node.js, Express, MongoDB',
      eLearning: 'E-Learning-Plattform',
      eLearningTech: 'Vue.js, Python, Flask, SQL, Django',
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
        <h2 className="text-3xl mb-6 text-secondary-brown dark:text-secondary-cream">{content[language].subtitle}</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-brown dark:text-primary-cream">{content[language].intro}</p>
      </motion.section>

      <SkillsList title={content[language].skills} />

      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-secondary-brown dark:text-secondary-cream text-center">{content[language].projects}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title={content[language].taskManager}
            technologies={content[language].taskManagerTech}
            viewMoreText={content[language].viewMore}
          />
          <ProjectCard 
            title={content[language].eLearning}
            technologies={content[language].eLearningTech}
            viewMoreText={content[language].viewMore}
          />
        </div>
      </motion.section>

      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">{content[language].contact}</h2>
        <p className="mb-6 text-lg text-primary-brown dark:text-primary-cream">{content[language].workTogether}</p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/contact" className="btn btn-primary text-lg px-8 py-3 transition-all duration-200">
            {content[language].contact}
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
