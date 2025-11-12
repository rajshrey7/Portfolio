# Shreyansh Raj - Full-Stack Developer Portfolio

A stunning, modern portfolio website showcasing my journey as an aspiring Full-Stack Developer specializing in MERN stack and AI/ML integration. Built with cutting-edge technologies and featuring a unique cyber-inspired design with smooth animations.

---

## 👤 About Me

**Shreyansh Raj**  
📍 Bhubaneswar, Odisha, India  
🎓 B.Tech in CSE (AI & ML) - CV Raman Global University (8.41 CGPA)  
📧 [Your Email]  
📱 [Your Phone]  
🔗 [GitHub](http://github.com/yourusername) | [LinkedIn](https://www.linkedin.com/in/yourprofile) | [Portfolio](https://yourportfolio.com)

### 🏆 Achievements

- 🏆 **Winner** - Hackniche Hackathon 2025 (AI-powered task management)
- 🥈 **Top 10** - Inohax 2.0 Hackathon (250+ teams)
- 🥉 **Top 30** - Smart India Hackathon 2024 (AI/ML problem statement PSI713)
- 👨‍🏫 **Mentor** - Coding Ninjas 10X CGU (Full-Stack & DS/Algorithms)
- 📊 **8.41 CGPA** - CV Raman Global University
- 💼 **17+ GitHub Repositories** - Active open-source contributor

---

## ✨ Features

- 🎨 **Stunning UI/UX** - Modern gradient-based design with glassmorphism effects
- 🌈 **Enhanced Animations** - Smooth transitions, hover effects, and micro-interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 💫 **AI-Powered Projects** - Showcasing Google Gemini AI and ML integrations
- 🛠️ **Comprehensive Skills** - 40+ technologies with interactive proficiency display
- 📧 **Smart Contact Form** - Real-time validation and email notifications
- 🎯 **GitHub Integration** - Dynamic project fetching from GitHub API
- ⚡ **Performance Optimized** - 60fps animations with hardware acceleration
- 🔍 **SEO Optimized** - Structured data and meta tags for better discoverability
- 🎭 **Modern Design** - Purple, blue, and emerald gradient color scheme
- 💎 **Glassmorphism** - Beautiful frosted glass effects throughout
- 🌊 **Smooth Scrolling** - Interactive scroll indicators and progress bars

---

## 🚀 Tech Stack

### Frontend Technologies
- **React.js** - UI library with hooks and functional components
- **Next.js** - Server-side rendering and routing (for AI projects)
- **Framer Motion** - Advanced animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and glassmorphism effects
- **TypeScript** - Type-safe JavaScript

### Backend Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Prisma ORM** - Next-generation ORM for Node.js
- **Drizzle ORM** - TypeScript ORM
- **Nodemailer** - Email sending
- **Express Validator** - Input validation

### AI & Cloud
- **Google Gemini AI** - AI integration for intelligent features
- **Google Cloud Platform (GCP)** - Cloud infrastructure
- **Amazon Web Services (AWS)** - Cloud services
- **Vercel** - Deployment platform

### Databases
- **MongoDB** - Primary database
- **MySQL** - Relational database
- **PostgreSQL** - Advanced relational database
- **Neon DB** - Serverless Postgres

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   
   # Optional: Email configuration for contact form
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Note: Never commit actual credentials to version control
   # Use environment variables or a secrets management service
   ```

   For MongoDB Atlas, use:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
   
   **⚠️ Security Note:** Never commit actual credentials to version control. Use environment variables or a secrets management service.

4. **Seed the database** (Optional)
   ```bash
   cd server
   node seed.js
   ```

---

## 🏃 Running the Application

### Development Mode

Run both server and client concurrently:
```bash
npm run dev
```

Or run them separately:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Mode

1. **Build the React app:**
   ```bash
   cd client
   npm run build
   ```

2. **Start the server:**
   ```bash
   cd server
   npm start
   ```

---

## 📁 Project Structure

```
Portfolio/
├── client/                      # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── ScrollProgress.js
│   │   │   ├── ScrollIndicator.js
│   │   │   └── ...
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.js
│   │   │   ├── AboutSection.js
│   │   │   ├── ProjectsSection.js
│   │   │   └── ContactSection.js
│   │   ├── pages/             # Page components
│   │   │   └── IntroPage.js
│   │   ├── hooks/             # Custom React hooks
│   │   ├── utils/             # Utility functions
│   │   ├── services/          # API services
│   │   ├── styles/            # CSS files
│   │   ├── data/              # Data files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                     # Express backend
│   ├── models/                # MongoDB models
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Contact.js
│   ├── routes/                # API routes
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── contact.js
│   ├── seed.js                # Database seed script
│   ├── index.js               # Server entry point
│   └── package.json
└── package.json                # Root package.json
```

---

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id/read` - Mark message as read

---

## 🎯 Featured Projects

### 1. EduMitra - AI-Powered Learning Platform
**Duration:** Feb 2025 - Mar 2025  
**Status:** ✅ Live

- 🤖 Google Gemini AI for personalized course generation
- 📺 YouTube API integration for video content
- 🗄️ Neon DB with Drizzle ORM for database management
- 📈 90% user engagement through ML recommendations
- **Tech Stack:** Next.js, React.js, Tailwind CSS, Google Gemini AI, Neon DB, Drizzle ORM, Vercel
- **🌐 Live Demo:** [Project Demo](https://your-project-demo.vercel.app/)
- **📂 GitHub:** [YourUsername/ProjectName](https://github.com/yourusername/projectname)

### 2. SilentWitness - Anonymous Incident Reporting System
**Duration:** Oct 2024 - Dec 2024  
**Status:** ✅ Live

- 🔒 Secure anonymous reporting with real-time AI analysis
- 🤖 Machine learning models for incident categorization
- 👮 Admin panel with Vercel deployment
- 🛡️ Zero data breach database operations
- **Tech Stack:** Next.js, TypeScript, Prisma ORM, Neon DB, AI/ML
- **🌐 Live Demo:** [Project Demo](https://your-project-demo.vercel.app/)
- **📂 GitHub:** [YourUsername/ProjectName](https://github.com/yourusername/projectname)

### 3. TaskifyAI - Task Management Application
**Duration:** Jan 2025 - Feb 2025  
**Status:** 🏆 Hackathon Winner

- 📋 Kanban board with drag-and-drop functionality
- 🔔 Real-time notifications and prioritization
- 🔐 Clerk authentication integration
- 🏆 **Winner** - Hackniche Hackathon 2025
- **Tech Stack:** Next.js, Tailwind CSS, Shaden UI, Clerk Auth
- **📂 GitHub:** [YourUsername/ProjectName](https://github.com/yourusername/projectname)

---

## 🛠️ Skills & Technologies

### Programming Languages
- Java, C++, Python, JavaScript, TypeScript, SQL

### Frontend Technologies
- React.js, Next.js, HTML5, CSS3, Tailwind CSS, Shaden UI

### Backend Technologies
- Node.js, Express.js, Prisma ORM, Drizzle ORM

### Databases
- MongoDB, MySQL, PostgreSQL, Neon DB

### Cloud & AI
- Google Cloud Platform (GCP)
- Amazon Web Services (AWS)
- Google Gemini AI
- Artificial Intelligence (AI)
- Machine Learning (ML)

### Tools & Others
- Git, Docker, Vercel
- Data Structures & Algorithms
- Full-Stack Development
- Software Engineering
- Problem Solving

**Total:** 40+ technologies mastered

---

## 🎨 UI/UX Features

### Design Elements
- ✨ Modern gradient color scheme (purple, blue, emerald)
- 🌈 Enhanced animations and micro-interactions
- 💫 Glassmorphism effects throughout
- 🎯 Smooth hover transitions
- ⚡ Performance-optimized animations (60fps)
- 🔄 Background pulse effects
- 🌊 Interactive scroll indicators
- 📊 Scroll progress bar
- 🎭 Text reveal animations
- 💎 Card reveal effects
- 🎪 Staggered animations
- 🌟 Neon glow effects

### Animation Library
Custom animations include:
- Float, shimmer, glow pulse effects
- Fade, slide, bounce animations
- Hover lift and perspective effects
- Ripple and scale pulse animations
- Staggered children animations

---

## 🔧 Customization Guide

### 1. Update Personal Information

**Contact Info & Stats:**
- Edit `client/src/utils/constants.js`
  - Update `CONTACT_INFO` object (email, phone, location)
  - Update `STATS` array
  - Update `SOCIAL_LINKS` array (GitHub, LinkedIn, etc.)
  
**⚠️ Important:** Never commit sensitive information like API keys, passwords, or personal contact details to version control. Use environment variables instead.

**About Section:**
- Edit `client/src/sections/AboutSection.js`
  - Update biography text
  - Modify education details

**Hero Section:**
- Edit `client/src/sections/HeroSection.js`
  - Update tagline and subtitle

### 2. Change Color Scheme

**Primary Colors:**
- Edit `client/src/index.css`
  - Modify CSS variables in `:root`
  - Update gradient definitions

**Animation Colors:**
- Edit `client/src/styles/enhanced-animations.css`
  - Update gradient colors
  - Modify glow effects

### 3. Add Projects & Skills

**Projects:**
- Projects are automatically fetched from GitHub (update username in `client/src/services/github.js`)
- Add via API endpoints: `POST /api/projects`
- Or seed database: `cd server && node seed.js`
- Update `server/seed.js` for seed data

**Skills:**
- Skills data in `client/src/data/skills.js`
- Add via API: `POST /api/skills`
- Or update seed file: `server/seed.js`

### 4. Update SEO & Metadata

**Meta Tags:**
- Edit `client/public/index.html`
  - Update title, description, keywords
  - Modify Open Graph tags
  - Update structured data (JSON-LD)

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the React app:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy:**
   - **Vercel:** Connect GitHub repo, select `client` folder
   - **Netlify:** Drag and drop `client/build` folder
   - **GitHub Pages:** Use `gh-pages` package

### Backend Deployment (Render/Railway/Heroku)

1. **Set environment variables:**
   - `PORT` (auto-set by platform)
   - `MONGO_URI` (MongoDB Atlas connection string - keep this secret!)
   - `NODE_ENV=production`
   - Email credentials (if using contact form - keep these secret!)
   
   **⚠️ Security:** Use your platform's environment variable settings. Never hardcode secrets in your code.

2. **Deploy:**
   - **Render:** Connect GitHub, select `server` folder
   - **Railway:** Connect repo, set root to `server`
   - **Heroku:** Use Heroku CLI or GitHub integration

3. **Update API URLs:**
   - Update `REACT_APP_API_URL` in frontend `.env`
   - Or modify `client/src/services/api.js`

### Database Setup

- Use **MongoDB Atlas** for cloud database
- Create cluster and get connection string
- Update `MONGO_URI` in backend environment variables
- Run seed script if needed: `node server/seed.js`

### Environment Variables Setup

**Backend (.env in `server/` directory):**
```bash
cd server
cp .env.example .env
# Edit .env with your actual values
```

**Frontend (.env in `client/` directory):**
```bash
cd client
cp .env.example .env
# Edit .env with your actual values
```

**⚠️ Important:** 
- Never commit `.env` files to version control
- Use `.env.example` as a template
- Set environment variables in your deployment platform's dashboard

**Common Deployment Errors?** See [DEPLOYMENT_TROUBLESHOOTING.md](./DEPLOYMENT_TROUBLESHOOTING.md) for solutions.

---

## 📝 Recent Updates

### ✅ Completed Features

- [x] Resume integration with accurate personal information
- [x] Education details (B.Tech CSE AI/ML, 8.41 CGPA)
- [x] All 3 major projects added with live demo links
- [x] 40+ skills with proficiency levels
- [x] Hackathon achievements highlighted
- [x] SEO metadata optimized
- [x] Social links updated (GitHub, LinkedIn, Amazon)
- [x] Contact section with phone number
- [x] Stunning UI/UX with modern gradients
- [x] Enhanced animations and micro-interactions
- [x] Glassmorphism effects throughout
- [x] Responsive design for all devices
- [x] Performance optimizations

### 🎯 Live Demo Links Added

- ✅ EduMitra: [Live Demo](https://your-project-demo.vercel.app/)
- ✅ SilentWitness: [Live Demo](https://your-project-demo.vercel.app/)

---

## 📞 Support & Contact

If you have any questions or issues:

- 📧 Email: [Your Email]
- 🔗 GitHub: [Your Username](http://github.com/yourusername)
- 💼 LinkedIn: [Your Profile](https://www.linkedin.com/in/yourprofile)
- 🌐 Portfolio: [Your Portfolio URL](https://yourportfolio.com)

**Note:** Update contact information in `client/src/utils/constants.js`

---

## 📄 License

MIT License - feel free to use this project for your portfolio!

---

## 🙏 Acknowledgments

- Built with ❤️ using the MERN stack
- Inspired by modern portfolio designs
- Powered by Framer Motion for animations
- Deployed on Vercel

---

**Last Updated:** November 12, 2025  
**Status:** ✅ Complete and Ready for Deployment  
**Version:** 2.0.0
