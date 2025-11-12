import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import Typewriter from '../components/Typewriter';
import TextReveal from '../components/TextReveal';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer from '../components/StaggerContainer';
import Scene3D from '../components/ThreeJS/Scene3D';
import { useApi } from '../hooks/useApi';
import { SKILL_CATEGORIES, STATS, EXPERIENCE } from '../utils/constants';
import { getSkills } from '../services/api';
import '../styles/sections/AboutSection.css';

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTypewriter, setShowTypewriter] = useState(false);
  const { data, loading } = useApi(getSkills);
  const skills = data || [];

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    all: skills,
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    database: skills.filter(s => s.category === 'database'),
    tools: skills.filter(s => s.category === 'tools')
  };

  const displaySkills = activeCategory === 'all' 
    ? skills 
    : skillCategories[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about-section">
      {/* Advanced 3D Particle Background */}
      <div className="about-three-background">
        <Scene3D type="particles" cameraPosition={[0, 0, 12]} fov={75} />
      </div>
      
      <FadeUp className="about-hero section">
        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-intro"
          >
            <motion.div
              className="about-badge"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <span>About Me</span>
            </motion.div>
            <h1 className="about-title">
              <ScrollReveal delay={0.1} direction="up">
                <TextReveal 
                  text="Building Digital Solutions That Inspire"
                  splitBy="words"
                  delay={0.2}
                />
              </ScrollReveal>
            </h1>
            <motion.div
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <ScrollReveal delay={0.7} direction="up">
                <p>
                  <TextReveal 
                    text="I'm Shreyansh Raj, an aspiring Full-Stack Developer pursuing B.Tech in CSE (AI & ML) from CV Raman Global University, Bhubaneswar, Odisha with 8.41 CGPA. Skilled in React.js, Next.js, Node.js, Python, JavaScript, TypeScript and SQL. Experienced in AI integration with Google Gemini AI and cloud technologies (GCP, AWS)."
                    splitBy="words"
                    delay={0.8}
                  />
                </p>
              </ScrollReveal>
              <ScrollReveal delay={1.0} direction="up">
                <p>
                  <TextReveal 
                    text="Strong problem-solver with hackathon wins including Winner at Hackniche Hackathon 2025 for AI-powered task management tool using machine learning. Ranked among 250+ teams at Top 10 Inohax 2.0 Hackathon and advanced to internal hubs for AI/ML problem statement at Top 30 Smart India Hackathon 2024. I actively contribute to open-source, maintain 17+ repositories, and mentor Coding Ninjas 10X CGU as a full-stack web development and data structures instructor."
                    splitBy="words"
                    delay={1.1}
                  />
                </p>
              </ScrollReveal>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {STATS.map((stat, index) => (
              <ScrollReveal
                key={index}
                delay={0.4 + index * 0.15}
                direction="scale"
              >
                <motion.div
                  className="stat-card glass-card"
                  initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="stat-icon"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="stat-value"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="stat-label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </FadeUp>

      <div className="skills-section section">
        <FadeUp className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & <span className="title-accent">Technologies</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A comprehensive toolkit for modern web development
          </motion.p>
        </FadeUp>

        <FadeUp delay={0.2} className="skills-filter">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </FadeUp>

            {loading ? (
              <LoadingSpinner size="large" text="Loading skills..." />
            ) : (
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {displaySkills.map((skill, index) => (
              <motion.div
                key={skill._id}
                className="skill-card glass-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="skill-header"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                >
                  <motion.div
                    className="skill-icon"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill.icon || '⚡'}
                  </motion.div>
                  <div className="skill-info">
                    <motion.h3 
                      className="skill-name"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      {skill.name}
                    </motion.h3>
                    <motion.span 
                      className="skill-category"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.15 }}
                    >
                      {skill.category}
                    </motion.span>
                  </div>
                </motion.div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      style={{
                        background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`
                      }}
                    />
                  </div>
                  <motion.span
                    className="skill-percentage"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {skill.proficiency}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="experience-section section">
        <FadeUp className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional <span className="title-accent">Journey</span>
          </motion.h2>
        </FadeUp>

        <div className="timeline-container">
          {EXPERIENCE.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.2}
              direction="left"
            >
              <motion.div
                className="timeline-item glass-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                whileHover={{ 
                  x: 20, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="timeline-marker">
                  <motion.div
                    className="marker-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      delay: index * 0.2 + 0.3, 
                      type: "spring",
                      duration: 2, 
                      repeat: Infinity 
                    }}
                  >
                    <div className="marker-dot-inner"></div>
                  </motion.div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <motion.div
                    className="timeline-date"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {item.date}
                  </motion.div>
                  <motion.h3
                    className="timeline-title"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="timeline-company"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    {item.company}
                  </motion.p>
                  <motion.p
                    className="timeline-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    className="timeline-tags"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    {item.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.9 + tagIndex * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
