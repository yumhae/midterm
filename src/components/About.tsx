import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I'm Clariz Joy Lolong, a student who enjoys reading stories on Wattpad and playing online games in my free time. I may not be very skilled with computers yet, but I have some basic knowledge of HTML and I'm always eager to learn more.
            </p>
            <p>
              I believe that with patience and dedication, I can continue to grow and improve my skills day by day. Every challenge is an opportunity to learn something new, and I'm excited about the journey ahead.
            </p>
            <div className={styles.skills}>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>Learning JavaScript</span>
              <span className={styles.skillTag}>Problem Solving</span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.hobbies}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Things I Love</h3>
            <ul>
              <li>Reading stories on Wattpad</li>
              <li>Playing online games</li>
              <li>Learning new technologies</li>
              <li>Exploring web development</li>
              <li>Connecting with friends online</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;