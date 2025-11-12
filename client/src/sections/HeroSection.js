import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import FadeUp from '../components/FadeUp';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';
import NumberCounter from '../components/NumberCounter';
import MagneticButton from '../components/MagneticButton';
import Parallax from '../components/Parallax';
import Scene3D from '../components/ThreeJS/Scene3D';
import { useMousePosition } from '../hooks/useMousePosition';
import { useApi } from '../hooks/useApi';
import { scrollToSection } from '../utils/scrollUtils';
import { SECTIONS } from '../utils/constants';
import { getFeaturedProjects } from '../services/api';
import '../styles/sections/HeroSection.css';

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const { x, y, mouseX, mouseY } = useMousePosition();
  const { data, loading } = useApi(() => getFeaturedProjects().then(data => data.slice(0, 3)));
  const featuredProjects = data || [];

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const techStack = [
    { icon: '⚛️', name: 'React', class: 'card-react' },
    { icon: '🟢', name: 'Node.js', class: 'card-node' },
    { icon: '🍃', name: 'MongoDB', class: 'card-mongo' }
  ];

  const stats = [
    { number: 17, label: 'Repositories', suffix: '+' },
    { number: 11, label: 'Stars', suffix: '+' },
    { number: 100, label: 'Dedication', suffix: '%' }
  ];

  const springConfig = { damping: 25, stiffness: 700 };

  return (
    <div className="hero-section-new">
      <div className="animated-grid"></div>
      
      {/* Advanced 3D Hero Background */}
      <div className="hero-three-background">
        <Scene3D type="hero" cameraPosition={[0, 0, 10]} fov={75} />
      </div>
      
      <motion.div
        className="floating-orb orb-1"
        style={{ x, y }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="floating-orb orb-2"
        style={{ 
          x: useSpring(mouseX, { ...springConfig, stiffness: 500 }),
          y: useSpring(mouseY, { ...springConfig, stiffness: 500 })
        }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="hero-container-new">
        <motion.div
          className="hero-content-new"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants} 
            className="hero-badge-new"
            whileHover={{ scale: 1.05 }}
          >
            <span className="badge-glow"></span>
            <span className="badge-text">FULL-STACK DEVELOPER</span>
            <span className="badge-pulse"></span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-title-wrapper">
            <motion.h1 className="hero-title-new">
              <motion.span 
                className="title-line title-name"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              >
                <span className="name-first">SHREYANSH</span>
                <span className="name-separator"> </span>
                <span className="name-last gradient-text-new">
                  {showTypewriter ? (
                    <Typewriter text="RAJ" speed={150} />
                  ) : (
                    <span className="text-glitch-enhanced" data-text="RAJ">
                      <span className="glitch-layer glitch-1">RAJ</span>
                      <span className="glitch-layer glitch-2">RAJ</span>
                      <span className="glitch-layer glitch-3">RAJ</span>
                      <span className="glitch-main">RAJ</span>
                    </span>
                  )}
                </span>
                <span className="title-underline-glow"></span>
              </motion.span>
              <motion.span 
                className="title-line title-role"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="role-prefix">FULL-STACK</span>
                <span className="role-main">DEVELOPER</span>
              </motion.span>
            </motion.h1>
            <motion.div 
              className="title-decoration"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
            >
              <div className="decoration-line decoration-left"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line decoration-right"></div>
            </motion.div>
          </motion.div>
          
          <ScrollReveal delay={1.2} direction="up" className="hero-subtitle-new">
            <TextReveal 
              text="Aspiring Full-Stack Developer with focus on AI & ML • B.Tech CSE (AI & ML) Student • 17+ GitHub Repositories • Hackathon Winner"
              splitBy="words"
            />
          </ScrollReveal>
          
          <ScrollReveal delay={1.5} direction="up" className="hero-stats-new">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.2}
                direction="scale"
                className="stat-card-new"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="stat-number-new">
                    <NumberCounter 
                      value={stat.number} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="stat-label-new">{stat.label}</div>
                  <div className="stat-glow"></div>
                </motion.div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
          
          <ScrollReveal delay={2} direction="up" className="hero-buttons-new">
            <MagneticButton
              onClick={() => scrollToSection(SECTIONS.PROJECTS)} 
              className="btn-cyber btn-primary-new"
            >
              <span className="btn-text">EXPLORE WORK</span>
              <span className="btn-glow"></span>
              <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection(SECTIONS.CONTACT)} 
              className="btn-cyber btn-outline-new"
            >
              <span className="btn-text">LET'S CONNECT</span>
              <span className="btn-border"></span>
            </MagneticButton>
          </ScrollReveal>
        </motion.div>

        <Parallax speed={0.3}>
          <motion.div
            className="hero-visual-new"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
          <div className="tech-stack-3d">
            {/* Subtle 3D Tech Stack Visualization */}
            <div className="tech-stack-three-container">
              <Scene3D type="tech" cameraPosition={[0, 0, 6]} fov={60} />
            </div>
            {/* 2D cards as main content */}
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`tech-card-3d ${tech.class}`}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8, type: "spring" }}
                whileHover={{ rotateY: 15, rotateX: 5, z: 50, scale: 1.1 }}
              >
                <div className="card-face front">
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
                <div className="card-face back"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="code-terminal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">portfolio.js</div>
            </div>
            <div className="terminal-body">
              {[1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0].map((delay, i) => (
                <motion.div
                  key={i}
                  className={`code-line-new ${i > 0 && i < 5 ? 'indent' : ''} ${i > 1 && i < 5 ? 'indent-2' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay }}
                >
                  {i === 0 && (
                    <>
                      <span className="code-prompt">$</span>
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">developer</span> = {'{'}
                    </>
                  )}
                  {i === 1 && <><span className="code-property">stack</span>: [</>}
                  {i === 2 && <><span className="code-string">'MERN'</span>,</>}
                  {i === 3 && <><span className="code-string">'Full-Stack'</span>,</>}
                  {i === 4 && <><span className="code-string">'Innovation'</span></>}
                  {i === 5 && <>],</>}
                  {i === 6 && <><span className="code-property">passion</span>: <span className="code-string">'Code'</span></>}
                  {i === 7 && <>{'}'}</>}
                </motion.div>
              ))}
              <div className="code-cursor">_</div>
            </div>
          </motion.div>
          </motion.div>
        </Parallax>

        <motion.div
          className="scroll-indicator-new"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.6 }}
        >
          <motion.div
            className="scroll-line"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span>SCROLL</span>
        </motion.div>
      </div>

      {!loading && featuredProjects.length > 0 && (
        <FadeUp delay={0.3} className="featured-preview-new">
          <div className="section-header-new">
            <FadeUp delay={0.1}>
              <motion.h2
                className="section-title-new"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                FEATURED <span className="title-accent-new">PROJECTS</span>
              </motion.h2>
              <motion.div
                className="title-underline"
                initial={{ width: 0 }}
                whileInView={{ width: 200 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </FadeUp>
          </div>

          <div className="projects-grid-new">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card-new"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                whileHover={{ y: -15, scale: 1.02, rotateY: 5 }}
              >
                <motion.div 
                  className="project-image-wrapper-new"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.imageUrl ? (
                    <div className="project-image-new">
                      <img src={project.imageUrl} alt={project.title} />
                      <div className="image-overlay-new"></div>
                      <div className="sparkle-overlay"></div>
                    </div>
                  ) : (
                    <div className="project-image-placeholder-new">
                      <div className="placeholder-icon-new">🚀</div>
                    </div>
                  )}
                  <div className="project-badge-new">
                    {project.featured && <span className="featured-badge-new">FEATURED</span>}
                  </div>
                  <div className="project-glow"></div>
                </motion.div>
                
                <div className="project-content-new">
                  <div className="project-header-new">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div
                      className="project-category-new"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
                    >
                      {project.category}
                    </motion.div>
                  </div>
                  
                  <motion.p
                    className="project-description-new"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="project-tech-new">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tech-tag-new"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 + i * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <motion.span
                        className="tech-tag-new more"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        +{project.technologies.length - 4}
                      </motion.span>
                    )}
                  </div>
                  
                  <div className="project-links-new">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link-new"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        LIVE DEMO →
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link-new secondary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GITHUB →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.5} className="view-all-new">
            <motion.button 
              onClick={() => scrollToSection(SECTIONS.PROJECTS)} 
              className="btn-cyber btn-view-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">VIEW ALL PROJECTS</span>
              <span className="btn-glow"></span>
            </motion.button>
          </FadeUp>
        </FadeUp>
      )}
    </div>
  );
};

export default HeroSection;
