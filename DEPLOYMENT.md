# Production Deployment Guide

This guide will help you deploy your portfolio to production.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Vercel/Netlify account (for frontend)
- Railway/Render account (for backend) or your own server

## Frontend Deployment (Vercel/Netlify)

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Build the project:**
   ```bash
   cd client
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard:**
   - `REACT_APP_API_URL`: Your backend API URL

### Option 2: Netlify

1. **Build command:** `cd client && npm run build`
2. **Publish directory:** `client/build`
3. **Environment variables:** Add `REACT_APP_API_URL`

## Backend Deployment

### Option 1: Railway

1. Connect your GitHub repository
2. Create new project
3. Add MongoDB service
4. Set environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: 5000
   - `NODE_ENV`: production
   - Email credentials (if using contact form)

### Option 2: Render

1. Create new Web Service
2. Connect your repository
3. Build command: `cd server && npm install && npm start`
4. Start command: `cd server && npm start`
5. Add environment variables

## Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Backend (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
# Frontend
cd client
npm run build

# Backend
cd server
npm start
```

## Performance Optimization

1. **Enable Gzip compression** on your server
2. **Use CDN** for static assets
3. **Optimize images** before uploading
4. **Enable caching** headers
5. **Use lazy loading** for images

## SEO Checklist

- ✅ Meta tags added
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured data (JSON-LD)
- ✅ robots.txt
- ✅ sitemap.xml (generate dynamically)
- ✅ Favicon
- ✅ Manifest.json

## Security Checklist

- ✅ Environment variables secured
- ✅ CORS configured properly
- ✅ Input validation on backend
- ✅ Rate limiting (recommended)
- ✅ HTTPS enabled
- ✅ Secure headers

## Monitoring

- Set up error tracking (Sentry recommended)
- Monitor API response times
- Track user analytics
- Monitor MongoDB performance

## Domain Setup

1. Purchase domain
2. Configure DNS:
   - A record for backend
   - CNAME for frontend
3. Update environment variables with new URLs
4. Update meta tags in `index.html`

## Post-Deployment

1. Test all functionality
2. Check mobile responsiveness
3. Verify SEO tags
4. Test contact form
5. Check loading states
6. Verify error handling

