import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './App.css';
import './styles/variables.css';
import './styles/navbar.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const projects = [
    {
      id: 1,
      title: 'Flappy Fish Game',
      description: 'A fun web-based game inspired by Flappy Bird, made with HTML, CSS, and JavaScript. Navigate your fish through obstacles and see how far you can go!',
      image: '/image/flappy fish.png',
      link: 'https://yumhae.github.io/flappy-fish/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game']
    },
    {
      id: 2,
      title: 'Period Tracker App',
      description: 'A simple web app that helps track menstrual cycles with a built-in calendar feature. Stay organized and plan ahead with ease.',
      image: '/image/periodtracker.png',
      link: 'https://yumhae.github.io/period-tracker/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Calendar']
    }
  ];

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

  // contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use mailto to open user's email client as a simple fallback
    const subject = encodeURIComponent(`Contact from ${contactName}`);
    const body = encodeURIComponent(`Name: ${contactName}%0AEmail: ${contactEmail}%0A%0A${contactMessage}`);
    window.location.href = `mailto:clarizjoylolong@gmail.com?subject=${subject}&body=${body}`;
  };

  // close menu with Escape key when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  // click-outside-to-close: if the user clicks anywhere outside the nav container while
  // the mobile menu is open, close it. This is more robust than relying only on overlay.
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocMouse = (e: MouseEvent) => {
      if (!isMenuOpen) return;
      const navEl = navContainerRef.current;
      if (!navEl) return;
      // DEBUG: log the clicked element when menu is open to help identify blocking elements
      // Remove or disable this in production if noisy.
      // eslint-disable-next-line no-console
      console.debug('[nav] click target:', e.target);
      // If the click target is inside the nav container, do nothing
      if (navEl.contains(e.target as Node)) return;
      // Otherwise close the menu
      setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', onDocMouse);
    return () => document.removeEventListener('mousedown', onDocMouse);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Always close the menu after attempting to navigate so it doesn't remain open
    setIsMenuOpen(false);
    // No overlay DOM is rendered anymore; closing handled by state and click-outside handler.
  };

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container" ref={navContainerRef}>
            <div className="nav-logo">
              <span>Clariz Joy</span>
              <div className="nav-logo-dot"></div>
            </div>
            
            <div 
              className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <a onClick={() => scrollToSection('home')} className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('about')} className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('projects')} className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('contact')} className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
  {/* overlay removed: menu now closes via click-outside handler and Escape; keeping UI unchanged visually */}
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="home-section">
          <motion.div 
            className="profile-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
            }}
          >
            <img src="/image/profilepicture.jpg" alt="Clariz Joy Lolong" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
          >
            Clariz Joy Lolong
          </motion.h1>

          <motion.p 
            className="subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4 
            }}
          >
            Aspiring Developer & Lifelong Learner
          </motion.p>
          <motion.div 
            className="intro-text"
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
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
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
              <div className="skills">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Learning JavaScript</span>
                <span className="skill-tag">Problem Solving</span>
              </div>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="avatar">
                <img src="/image/profilepicture.jpg" alt="Clariz avatar" />
              </div>
              <h4>Quick Info</h4>
              <p>Student · Aspiring Developer · Curious Learner</p>

              <div className="hobbies">
                <h3>Things I Love</h3>
                <ul>
                  <li>Reading stories on Wattpad</li>
                  <li>Playing online games</li>
                  <li>Learning new technologies</li>
                  <li>Exploring web development</li>
                  <li>Connecting with friends online</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2 
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-badges">
                    {project.tags && project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link project-cta">
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            className="contact-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'd love to hear from you! Feel free to reach out through any of my social media platforms or send me an email.
          </motion.p>

          <div className="contact-inner">
            <div className="contact-left">
              <motion.div
                className="social-links"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                      <motion.span 
                        className={`social-icon icon-${link.icon}`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {link.icon === 'facebook' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.15 0-1.5.71-1.5 1.44v1.73h2.56l-.41 2.9h-2.15v7.03C18.34 21.2 22 17.06 22 12.07z" />
                          </svg>
                        )}
                        {link.icon === 'instagram' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {link.icon === 'email' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </motion.span>
                    <span className="social-text">{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="contact-right">
              <motion.form
                className="contact-form contact-form--contact-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                onSubmit={handleContactSubmit}
              >
                <input
                  className="contact-input"
                  placeholder="Your name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
                <input
                  className="contact-input"
                  placeholder="Your email"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
                <textarea
                  className="contact-textarea"
                  placeholder="Message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  rows={4}
                  required
                />
                <button className="contact-button" type="submit">Send message</button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
