// Section IDs
export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact'
};

// Animation variants
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
};

// Project categories
export const PROJECT_CATEGORIES = ['all', 'web', 'mobile', 'fullstack', 'other'];

// Skill categories
export const SKILL_CATEGORIES = ['all', 'frontend', 'backend', 'database', 'tools'];

// Contact info
export const CONTACT_INFO = {
  email: 'rshreyansh790@gmail.com',
  phone: '+91-8709168972',
  github: 'http://github.com/rajshrey7',
  linkedin: 'https://www.linkedin.com/in/shreyansh-raj-fe5aa026ca',
  amazon: 'http://amazon.com/author/shreyansh-raj',
  location: 'Bhubaneswar, Odisha, India',
  availability: 'Open to Opportunities'
};

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'http://github.com/rajshrey7', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shreyansh-raj-fe5aa026ca', icon: '💼' },
  { name: 'Amazon Author', url: 'http://amazon.com/author/shreyansh-raj', icon: '📚' }
];

// Stats data
export const STATS = [
  { icon: '💼', value: '17+', label: 'Repositories' },
  { icon: '🏆', value: '3+', label: 'Hackathons Won' },
  { icon: '⚡', value: '8.41', label: 'CGPA' }
];

// Experience timeline data - Projects from Resume
export const EXPERIENCE = [
  {
    date: 'Feb 2025 - Mar 2025',
    title: 'EduMitra: AI-Powered Personalized Learning Platform',
    company: 'Personal Project',
    description: 'Developed AI-driven personalized learning platform using Google Gemini AI for course generation, integrated YouTube APIs, managed relational database with Neon DB, and implemented secure authentication on Vercel. Achieved 90% user engagement through machine learning recommendations.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Google Gemini AI', 'Neon DB', 'Drizzle ORM', 'Vercel', 'AI', 'Machine Learning'],
    liveUrl: 'https://edu-mitra.vercel.app/',
    githubUrl: 'https://github.com/rajshrey7/EduMitra'
  },
  {
    date: 'Oct 2024 - Dec 2024',
    title: 'SilentWitness: Anonymous Incident Reporting System',
    company: 'Personal Project',
    description: 'Built secure web application for anonymous incident reporting with real-time AI analysis using machine learning models. Implemented admin panel for incident review with Vercel for scalability. Applied software engineering principles with zero data breach database operations.',
    tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'Neon DB', 'AI', 'Artificial Intelligence', 'Machine Learning'],
    liveUrl: 'https://silent-witness-pi.vercel.app/',
    githubUrl: 'https://github.com/rajshrey7/SilentWitness'
  },
  {
    date: 'Jan 2025 - Feb 2025',
    title: 'TaskifyAI: Task Management Web Application',
    company: 'Personal Project',
    description: 'Created task management tool with Kanban board, drag-and-drop features, prioritization, real-time notifications. Integrated secure authentication using Clerk. Applied software engineering principles for scalable full-stack development.',
    tags: ['Next.js', 'Tailwind CSS', 'Shaden UI', 'Clerk Auth', 'Full-Stack Development'],
    liveUrl: '',
    githubUrl: 'https://github.com/rajshrey7/TaskifyAI'
  }
];

