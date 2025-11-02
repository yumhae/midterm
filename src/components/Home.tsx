import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeContent}>
          <motion.div 
            className={styles.profileImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/profilepicture.jpg" alt="Clariz Joy Lolong" />
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Clariz Joy Lolong
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Aspiring Developer & Lifelong Learner
          </motion.p>

          <motion.div 
            className={styles.introText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
              Ever since I was young, I have dreamed of becoming a civil engineer. However, fate led me to a different course one I never imagined taking. At first, I didn't like it, and I struggled because it wasn't something I truly wanted. But despite that, I chose to keep trying.
            </p>
            <p>
              They say, "Learn to love what you do, even if it's not what you dreamed of," because sometimes comfort and purpose come when you least expect them. I believe that if something is not meant for you, then it's not for you but if it is, no matter what happens, it will always find its way to you.
            </p>
          </motion.div>

          <motion.div 
            className={styles.buttonGroup}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/projects" className={styles.btn}>View My Work</Link>
            <Link to="/contact" className={`${styles.btn} ${styles.btnOutline}`}>Get In Touch</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;