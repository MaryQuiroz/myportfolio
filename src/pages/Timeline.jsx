import React from 'react';
import { useSelector } from 'react-redux';

function Timeline() {
  const language = useSelector((state) => state.language);

  const content = {
    es: {
      title: 'Mi Trayectoria',
      milestones: 'Hitos Importantes',
      achievements: 'Logros y Reconocimientos',
    },
    en: {
      title: 'My Career Path',
      milestones: 'Important Milestones',
      achievements: 'Achievements and Recognitions',
    },
    de: {
      title: 'Mein Werdegang',
      milestones: 'Wichtige Meilensteine',
      achievements: 'Erfolge und Anerkennungen',
    },
  };

  const milestones = [
    { year: 'Actual', event: 'Enfoca\'t Barcelona - IA & Machine Learning con Python (En curso)' },
    { year: '2024', event: 'La Salle BCN - Desarrollo Web Front-end' },
    { year: '2023-2024', event: 'ISDI Coders - Desarrollo Web Full Stack' },
    { year: '2023', event: 'Inicio de proyectos freelance como Desarrolladora Web Full Stack' },
    { year: '2019-2021', event: 'CCC Centro de Estudios Profesionales - CFGS Dietética y Nutrición' },
  ];

  const achievements = [
    'Desarrollo de aplicaciones web completas con React y Node.js/Express',
    'Implementación de proyectos utilizando Vue.js y Python',
    'Diseño y prototipado de interfaces en Figma',
    'Creación e integración de APIs RESTful',
    'Gestión eficiente de proyectos desde el concepto hasta el despliegue',
  ];

  return (
    <div className="timeline max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-brown dark:text-secondary-cream">{content[language].milestones}</h2>
        <div className="relative border-l-2 border-primary-brown dark:border-primary-cream pl-8 ml-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-10 mt-1 w-4 h-4 rounded-full bg-primary-brown dark:bg-primary-cream"></div>
              <div className="bg-secondary-cream dark:bg-secondary-brown p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary-brown dark:text-primary-cream">{milestone.year}</h3>
                <p className="text-secondary-brown dark:text-secondary-cream">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-secondary-brown dark:text-secondary-cream">{content[language].achievements}</h2>
        <ul className="list-disc list-inside space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-primary-brown dark:text-primary-cream">{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Timeline;
