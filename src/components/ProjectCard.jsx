import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, technologies, viewMoreText }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-secondary-cream dark:bg-secondary-brown p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{technologies}</p>
      <Link to="/projects" className="text-primary-brown dark:text-primary-cream hover:underline inline-flex items-center transition-all duration-200">
        {viewMoreText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
