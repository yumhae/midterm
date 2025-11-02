import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/clarizjoy.lolong',
      icon: 'facebook'
    },
    {
      id: 2,
      name: 'Instagram',
      url: 'https://www.instagram.com/clarixx_joy/',
      icon: 'instagram'
    },
    {
      id: 3,
      name: 'Email',
      url: 'mailto:clarizjoylolong@gmail.com',
      icon: 'email'
    }
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'd love to hear from you! Feel free to reach out through any of my social media platforms or send me an email.
          </motion.p>

          <motion.div
            className={styles.socialLinks}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={`${styles.socialIcon} ${styles[link.icon]}`} />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;