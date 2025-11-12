import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import CardReveal from '../components/CardReveal';
import SparkleEffect from '../components/SparkleEffect';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';
import StaggerContainer from '../components/StaggerContainer';
import Scene3D from '../components/ThreeJS/Scene3D';
import { PROJECT_CATEGORIES } from '../utils/constants';
import { getProjects } from '../services/api';
import { getGitHubProjects } from '../services/github';
import '../styles/sections/ProjectsSection.css';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch projects from both API and GitHub
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        // Fetch from database API
        const apiProjects = await getProjects();
        // Fetch from GitHub
        const githubProjects = await getGitHubProjects('rajshrey7');
        
        // Combine and deduplicate (prefer API projects if duplicate)
        const allProjects = [...apiProjects];
        githubProjects.forEach(githubProject => {
          const exists = allProjects.find(p => p.githubUrl === githubProject.githubUrl);
          if (!exists) {
            allProjects.push(githubProject);
          }
        });
        
        setProjects(allProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to GitHub only
        try {
          const githubProjects = await getGitHubProjects('rajshrey7');
          setProjects(githubProjects);
        } catch (githubError) {
          console.error('Error fetching GitHub projects:', githubError);
          setProjects([]);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="projects-section-page">
      {/* Advanced 3D Wireframe Background */}
      <div className="projects-three-background">
        <Scene3D type="wireframe" cameraPosition={[0, 0, 15]} fov={75} />
      </div>
      
      <FadeUp className="section projects-hero">
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ScrollReveal delay={0.2} direction="up">
              <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                My <span className="title-accent" style={{ color: 'var(--text-primary)' }}>
                  <TextReveal 
                    text="Projects"
                    splitBy="characters"
                    delay={0.3}
                  />
                </span>
              </motion.h1>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up">
              <motion.p
                className="projects-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TextReveal 
                  text="A curated collection of innovative solutions and creative implementations showcasing expertise across modern web technologies"
                  splitBy="words"
                  delay={0.5}
                />
              </motion.p>
            </ScrollReveal>
          </motion.div>
        </div>
      </FadeUp>

      <div className="section projects-section">
        <FadeUp delay={0.1} className="filter-container">
          <div className="filter-label">Filter by category:</div>
          <div className="filter-buttons">
            {PROJECT_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: PROJECT_CATEGORIES.indexOf(category) * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                {filter === category && (
                  <motion.span
                    className="filter-indicator"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="project-count"
            key={filter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </motion.div>
        </FadeUp>

        {loading ? (
          <LoadingSpinner size="large" text="Loading projects..." />
        ) : (
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={filter}
              >
                {filteredProjects.map((project, index) => (
                  <CardReveal key={project._id} delay={index * 0.1}>
                    <motion.div
                      className="project-card glass-card"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        rotateY: 3,
                        transition: { duration: 0.3 }
                      }}
                      onHoverStart={() => setHoveredProject(project._id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <div className="project-image-wrapper">
                        {project.imageUrl ? (
                          <div className="project-image">
                            <img src={project.imageUrl} alt={project.title} />
                            <div className="image-overlay"></div>
                            {hoveredProject === project._id && (
                              <SparkleEffect intensity="medium" />
                            )}
                          </div>
                        ) : (
                          <div className="project-image-placeholder">
                            <div className="placeholder-icon">🚀</div>
                            <div className="placeholder-text">{project.title}</div>
                          </div>
                        )}
                        {project.featured && (
                          <motion.div
                            className="project-badge"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                          >
                            <span className="featured-badge">Featured</span>
                          </motion.div>
                        )}
                        <motion.div
                          className="project-category-overlay"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span>{project.category}</span>
                        </motion.div>
                      </div>
                      
                      <div className="project-content">
                        <motion.div
                          className="project-header"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        >
                          <h3>
                            <TextReveal 
                              text={project.title}
                              splitBy="words"
                              delay={index * 0.1 + 0.25}
                            />
                          </h3>
                        </motion.div>
                        
                        <motion.p
                          className="project-description"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <TextReveal 
                            text={project.description}
                            splitBy="words"
                            delay={index * 0.1 + 0.35}
                          />
                        </motion.p>
                        
                        <div className="project-tech">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="tech-tag"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.4 + i * 0.03, type: "spring" }}
                              whileHover={{ scale: 1.1, y: -3, rotate: 2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        
                        <div className="project-links">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-small"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.6 }}
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Live Demo</span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-small"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.7 }}
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>GitHub</span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {hoveredProject === project._id && (
                        <motion.div
                          className="project-hover-effect"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </CardReveal>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="no-projects"
              >
                <div className="empty-state">
                  <motion.div
                    className="empty-icon"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    🔍
                  </motion.div>
                  <h3>No projects found</h3>
                  <p>Try selecting a different category</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
