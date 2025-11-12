const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const sampleProjects = [
  {
    title: 'EduMitra: AI-Powered Personalized Learning Platform',
    description: 'Developed AI-driven personalized learning platform using Google Gemini AI for course generation, integrated YouTube APIs, managed relational database with Neon DB, and implemented secure authentication on Vercel. Achieved 90% user engagement through machine learning recommendations.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Google Gemini AI', 'Neon DB', 'Drizzle ORM', 'Vercel', 'AI', 'Machine Learning'],
    imageUrl: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=EduMitra',
    liveUrl: 'https://edu-mitra.vercel.app/',
    githubUrl: 'https://github.com/rajshrey7/EduMitra',
    featured: true,
    category: 'fullstack'
  },
  {
    title: 'SilentWitness: Anonymous Incident Reporting System',
    description: 'Built secure web application for anonymous incident reporting with real-time AI analysis using machine learning models. Implemented admin panel for incident review with Vercel for scalability. Applied software engineering principles with zero data breach database operations.',
    technologies: ['Next.js', 'TypeScript', 'Prisma ORM', 'Neon DB', 'AI', 'Artificial Intelligence', 'Machine Learning'],
    imageUrl: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=SilentWitness',
    liveUrl: 'https://silent-witness-pi.vercel.app/',
    githubUrl: 'https://github.com/rajshrey7/SilentWitness',
    featured: true,
    category: 'fullstack'
  },
  {
    title: 'TaskifyAI: Task Management Web Application',
    description: 'Created task management tool with Kanban board, drag-and-drop features, prioritization, real-time notifications. Integrated secure authentication using Clerk. Applied software engineering principles for scalable full-stack development. Winner of Hackniche Hackathon 2025.',
    technologies: ['Next.js', 'Tailwind CSS', 'Shaden UI', 'Clerk Auth', 'Full-Stack Development'],
    imageUrl: 'https://via.placeholder.com/400x300/10b981/ffffff?text=TaskifyAI',
    liveUrl: '',
    githubUrl: 'https://github.com/rajshrey7/TaskifyAI',
    featured: true,
    category: 'fullstack'
  }
];

const sampleSkills = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 90, icon: '⚛️' },
  { name: 'JavaScript', category: 'frontend', proficiency: 95, icon: '📜' },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 92, icon: '🎨' },
  { name: 'TypeScript', category: 'frontend', proficiency: 85, icon: '📘' },
  { name: 'Redux', category: 'frontend', proficiency: 80, icon: '🔄' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 88, icon: '🟢' },
  { name: 'Express.js', category: 'backend', proficiency: 90, icon: '🚀' },
  { name: 'RESTful APIs', category: 'backend', proficiency: 92, icon: '🔌' },
  { name: 'GraphQL', category: 'backend', proficiency: 75, icon: '📊' },
  
  // Database
  { name: 'MongoDB', category: 'database', proficiency: 85, icon: '🍃' },
  { name: 'PostgreSQL', category: 'database', proficiency: 80, icon: '🐘' },
  { name: 'MySQL', category: 'database', proficiency: 75, icon: '🗄️' },
  
  // Tools
  { name: 'Git', category: 'tools', proficiency: 90, icon: '📦' },
  { name: 'Docker', category: 'tools', proficiency: 75, icon: '🐳' },
  { name: 'AWS', category: 'tools', proficiency: 70, icon: '☁️' }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log('✅ Cleared existing data');

    // Insert sample projects
    const projects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${projects.length} projects`);

    // Insert sample skills
    const skills = await Skill.insertMany(sampleSkills);
    console.log(`✅ Inserted ${skills.length} skills`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();

