import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Projects', id: 'projects' },
      { name: 'Contact', id: 'contact' }
    ],
    social: [
      { name: 'GitHub', url: 'https://github.com/rajshrey7', icon: '🔗' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/shreyansh-raj', icon: '💼' },
      { name: 'Twitter', url: 'https://twitter.com/rajshrey7', icon: '🐦' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">
              <span className="logo-gradient">Shreyansh Raj</span>
            </h3>
            <p className="footer-description">
              Shreyansh Raj - Full-Stack MERN Developer crafting exceptional digital experiences
              with modern technologies and creative solutions. Check out my 17+ repositories on GitHub!
            </p>
            <div className="footer-social">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="social-icon">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quick.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:shreyanshraj.dev@gmail.com" className="contact-link">
                  shreyanshraj.dev@gmail.com
                </a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">India</span>
              </p>
              <p className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/rajshrey7" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/rajshrey7
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Shreyansh Raj. Built with{' '}
              <span className="tech-highlight">MERN Stack</span>
            </p>
            <p className="footer-note">
              Crafted with <span className="heart">❤️</span> and attention to detail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
