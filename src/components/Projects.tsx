import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Flappy Fish Game',
      description: 'A fun web-based game inspired by Flappy Bird, made with HTML, CSS, and JavaScript. Navigate your fish through obstacles and see how far you can go!',
      image: '/images/flappy-fish.png',
      link: 'https://yumhae.github.io/flappy-fish/'
    },
    {
      id: 2,
      title: 'Period Tracker App',
      description: 'A simple web app that helps track menstrual cycles with a built-in calendar feature. Stay organized and plan ahead with ease.',
      image: '/images/periodtracker.png',
      link: 'https://yumhae.github.io/period-tracker/'
    }
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;