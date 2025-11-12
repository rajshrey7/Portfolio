# Shreyansh Raj - Full-Stack Developer Portfolio

A stunning, modern portfolio website showcasing my journey as an aspiring Full-Stack Developer specializing in MERN stack and AI/ML integration. Built with cutting-edge technologies and featuring a unique cyber-inspired design with smooth animations.

## About Me

**Shreyansh Raj**  
📍 Bhubaneswar, Odisha, India  
🎓 B.Tech in CSE (AI & ML) - CV Raman Global University (8.41 CGPA)  
📧 rshreyansh790@gmail.com  
📱 +91-8709168972  
🔗 [GitHub](http://github.com/rajshrey7) | [LinkedIn](https://www.linkedin.com/in/shreyansh-raj-fe5aa026ca) | [Amazon Author](http://amazon.com/author/shreyansh-raj)

### Achievements
🏆 **Winner** - Hackniche Hackathon 2025 (AI-powered task management)  
🥈 **Top 10** - Inohax 2.0 Hackathon (250+ teams)  
🥉 **Top 30** - Smart India Hackathon 2024 (AI/ML problem statement)  
👨‍🏫 **Mentor** - Coding Ninjas 10X CGU (Full-Stack & DS/Algorithms)

## Features

- 🎨 **Stunning UI/UX** - Modern gradient-based design with glassmorphism
- 🌈 **Enhanced Animations** - Smooth transitions, hover effects, and micro-interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 💫 **AI-Powered Projects** - Showcasing Google Gemini AI and ML integrations
- 🛠️ **Comprehensive Skills** - 40+ technologies with interactive proficiency display
- 📧 **Smart Contact Form** - Real-time validation and email notifications
- 🎯 **GitHub Integration** - Dynamic project fetching from GitHub API
- ⚡ **Performance Optimized** - 60fps animations with hardware acceleration
- 🔍 **SEO Optimized** - Structured data and meta tags for better discoverability

## Tech Stack

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

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

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

2. **Set up environment variables**

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
   ```

   For MongoDB Atlas, use:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## Running the Application

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

## Project Structure

```
Portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## API Endpoints

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

## Adding Sample Data

You can add sample data using MongoDB Compass, MongoDB Atlas, or by creating a seed script. Here's an example project:

```json
{
  "title": "E-Commerce Platform",
  "description": "A full-stack e-commerce application with payment integration",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "imageUrl": "https://via.placeholder.com/400x300",
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/username/project",
  "featured": true,
  "category": "fullstack"
}
```

## Featured Projects

### 1. EduMitra - AI-Powered Learning Platform (Feb 2025 - Mar 2025)
- 🤖 Google Gemini AI for personalized course generation
- 📺 YouTube API integration for video content
- 🗄️ Neon DB with Drizzle ORM for database management
- 📈 90% user engagement through ML recommendations
- **Tech**: Next.js, React.js, Tailwind CSS, Google Gemini AI, Neon DB, Vercel
- **🌐 Live Demo**: [https://edu-mitra.vercel.app/](https://edu-mitra.vercel.app/)
- **📂 GitHub**: [rajshrey7/EduMitra](https://github.com/rajshrey7/EduMitra)

### 2. SilentWitness - Anonymous Incident Reporting (Oct 2024 - Dec 2024)
- 🔒 Secure anonymous reporting with real-time AI analysis
- 🤖 Machine learning models for incident categorization
- 👮 Admin panel with Vercel deployment
- 🛡️ Zero data breach database operations
- **Tech**: Next.js, TypeScript, Prisma ORM, Neon DB, AI/ML
- **🌐 Live Demo**: [https://silent-witness-pi.vercel.app/](https://silent-witness-pi.vercel.app/)
- **📂 GitHub**: [rajshrey7/SilentWitness](https://github.com/rajshrey7/SilentWitness)

### 3. TaskifyAI - Task Management Application (Jan 2025 - Feb 2025)
- 📋 Kanban board with drag-and-drop functionality
- 🔔 Real-time notifications and prioritization
- 🔐 Clerk authentication integration
- 🏆 **Hackathon Winner** - Hackniche Hackathon 2025
- **Tech**: Next.js, Tailwind CSS, Shaden UI, Clerk Auth

## Customization

1. **Update personal information:**
   - Edit `client/src/utils/constants.js` for contact info and stats
   - Edit `client/src/sections/AboutSection.js` for bio
   - Update social links in `client/src/components/Footer.js`

2. **Change color scheme:**
   - Modify CSS variables in `client/src/index.css`
   - Update gradient colors in `client/src/styles/enhanced-animations.css`

3. **Add your projects and skills:**
   - Projects are automatically fetched from GitHub (github.com/rajshrey7)
   - Skills data in `client/src/data/skills.js`
   - You can also add projects via API endpoints or MongoDB directly

## Deployment

### Frontend (Vercel/Netlify)
1. Build the React app: `cd client && npm run build`
2. Deploy the `build` folder

### Backend (Heroku/Railway/Render)
1. Set environment variables
2. Deploy the `server` folder
3. Update API URLs in frontend if needed

### Database
- Use MongoDB Atlas for cloud database
- Update `MONGO_URI` in production environment

## License

MIT License - feel free to use this project for your portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or issues, please open an issue on GitHub.

---

Built with ❤️ using the MERN stack

