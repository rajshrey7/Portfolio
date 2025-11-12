import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';
import { sendContactMessage } from '../services/api';
import '../styles/sections/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await sendContactMessage(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.errors?.[0]?.msg || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: '📱',
      label: 'Phone',
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone}`
    },
    {
      icon: '📍',
      label: 'Location',
      value: CONTACT_INFO.location,
      link: null
    },
    {
      icon: '🔗',
      label: 'GitHub',
      value: 'github.com/rajshrey7',
      link: CONTACT_INFO.github
    }
  ];

  return (
    <div className="contact-section-page">
      <FadeUp className="section contact-hero">
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ScrollReveal delay={0.1} direction="up">
              <div className="about-badge">
                <span>Let's Talk</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Get In <span className="title-accent" style={{ color: 'var(--text-primary)' }}>
                  <TextReveal 
                    text="Touch"
                    splitBy="characters"
                    delay={0.3}
                  />
                </span>
              </motion.h1>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up">
              <motion.p
                className="contact-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TextReveal 
                  text="Have a project in mind or want to collaborate? I'd love to hear from you and discuss how we can bring your ideas to life."
                  splitBy="words"
                  delay={0.5}
                />
              </motion.p>
            </ScrollReveal>
          </motion.div>
        </div>
      </FadeUp>

      <div className="section contact-section">
        <div className="contact-container">
          <motion.div
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="contact-info-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="contact-info-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </motion.p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1 + 0.3}
                  direction="left"
                >
                  <motion.div
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="contact-icon"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="contact-item-content">
                      <h4>{info.label}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-link">{info.value}</a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {SOCIAL_LINKS.map((social, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.1 + 0.6}
                    direction="scale"
                  >
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link glass-card"
                      whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </motion.a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="form-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send a Message</h2>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </motion.div>

            <AnimatePresence>
              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ type: "spring" }}
                >
                  <span className="status-icon">
                    {status.type === 'success' ? '✓' : '✕'}
                  </span>
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="form-row">
              {['name', 'email'].map((field, index) => (
                <motion.div
                  key={field}
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <label htmlFor={field}>
                    <span className="label-text">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                    <span className="label-required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder={field === 'email' ? 'john@example.com' : 'John Doe'}
                      className={focusedField === field ? 'focused' : ''}
                    />
                    <div className="input-border"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="subject">
                <span className="label-text">Subject</span>
                <span className="label-required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Project Inquiry"
                  className={focusedField === 'subject' ? 'focused' : ''}
                />
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message">
                <span className="label-text">Message</span>
                <span className="label-required">*</span>
              </label>
              <div className="input-wrapper">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className={focusedField === 'message' ? 'focused' : ''}
                ></textarea>
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={loading}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {loading ? (
                <>
                  <motion.span
                    className="spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
