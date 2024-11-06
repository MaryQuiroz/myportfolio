import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiDjango, SiPandas } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'RESTful APIs', icon: <TbApi /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Django', icon: <SiDjango /> }, 
  { name: 'Pandas', icon: <SiPandas /> }, 
]

const SkillsList = ({ title }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-secondary-brown dark:text-secondary-cream text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="bg-secondary-cream dark:bg-secondary-brown px-4 py-2 rounded-full text-base flex items-center space-x-2 shadow-md"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
