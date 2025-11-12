# Deployment Troubleshooting Guide

Common errors and solutions for deploying the MERN Portfolio application.

---

## 🔴 Common .env Related Errors

### Error 1: "Cannot find module 'dotenv'"
**Symptoms:**
```
Error: Cannot find module 'dotenv'
```

**Solution:**
```bash
cd server
npm install dotenv
```

**Prevention:** Make sure `dotenv` is in `package.json` dependencies.

---

### Error 2: "MongoDB connection error" or "MongooseError"
**Symptoms:**
```
❌ MongoDB connection error: MongooseError: ...
```

**Causes & Solutions:**

1. **Missing MONGO_URI in environment variables**
   - **Solution:** Add `MONGO_URI` to your `.env` file or deployment platform's environment variables
   - **Check:** Ensure `.env` file exists in `server/` directory

2. **Incorrect MongoDB connection string**
   - **Local MongoDB:** `mongodb://localhost:27017/portfolio`
   - **MongoDB Atlas:** `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`
   - **Check:** Verify username, password, and cluster name are correct

3. **MongoDB Atlas IP Whitelist**
   - **Solution:** Add `0.0.0.0/0` to MongoDB Atlas IP Whitelist (for all IPs) or your deployment platform's IP

4. **MongoDB Atlas Network Access**
   - **Solution:** Ensure your IP is whitelisted in MongoDB Atlas → Network Access

---

### Error 3: "REACT_APP_API_URL is not defined"
**Symptoms:**
- Frontend can't connect to backend
- API calls fail with CORS errors
- Network errors in browser console

**Solutions:**

1. **Create `.env` file in `client/` directory:**
   ```env
   REACT_APP_API_URL=https://your-backend-url.com/api
   ```

2. **For Vercel/Netlify deployment:**
   - Go to Project Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.com/api`
   - **Important:** Must start with `REACT_APP_` prefix

3. **Rebuild after adding environment variables:**
   ```bash
   cd client
   npm run build
   ```

---

### Error 4: "Port 5000 is already in use"
**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**

1. **Change PORT in `.env`:**
   ```env
   PORT=5001
   ```

2. **Kill process using port 5000:**
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:5000 | xargs kill -9
   ```

3. **Use environment variable (recommended for deployment):**
   - Most platforms (Heroku, Render, Railway) set PORT automatically
   - Use: `const PORT = process.env.PORT || 5000;`

---

### Error 5: "Email sending failed" or "Nodemailer error"
**Symptoms:**
```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

**Solutions:**

1. **Gmail App Password (Recommended):**
   - Don't use your regular Gmail password
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Use the 16-character app password in `.env`

2. **Enable "Less Secure App Access" (Not Recommended):**
   - Only if App Password doesn't work
   - Go to: https://myaccount.google.com/lesssecureapps

3. **Check Email Configuration:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

---

## 🚀 Platform-Specific Deployment Issues

### Vercel (Frontend)

**Error: "Build failed"**
- **Check:** Ensure `REACT_APP_API_URL` is set in Environment Variables
- **Check:** Build command should be `npm run build` (default)
- **Check:** Output directory should be `build` (default)

**Error: "API calls failing"**
- **Solution:** Set `REACT_APP_API_URL` in Vercel Environment Variables
- **Solution:** Rebuild after adding environment variables

---

### Render/Railway/Heroku (Backend)

**Error: "Application failed to start"**
- **Check:** Ensure `MONGO_URI` is set in Environment Variables
- **Check:** Ensure `PORT` is not hardcoded (use `process.env.PORT`)
- **Check:** Build command should be: `npm install` then `npm start`

**Error: "MongoDB connection timeout"**
- **Solution:** Add deployment platform IP to MongoDB Atlas whitelist
- **Solution:** Use `0.0.0.0/0` for all IPs (less secure but works)

**Error: "Module not found"**
- **Solution:** Ensure `package.json` has all dependencies
- **Solution:** Run `npm install` locally to verify

---

## ✅ Pre-Deployment Checklist

### Backend (.env file in `server/`)
- [ ] `MONGO_URI` is set (MongoDB Atlas connection string)
- [ ] `PORT` is set (or uses `process.env.PORT`)
- [ ] `NODE_ENV=production` for production
- [ ] Email credentials (if using contact form)
- [ ] `.env` is in `.gitignore` (never commit!)

### Frontend (.env file in `client/`)
- [ ] `REACT_APP_API_URL` points to deployed backend
- [ ] `REACT_APP_GITHUB_USERNAME` is set (if using GitHub API)
- [ ] `.env` is in `.gitignore` (never commit!)

### Platform Environment Variables
- [ ] All `.env` variables are added to platform settings
- [ ] Variables are set for correct environment (Production/Development)
- [ ] No typos in variable names
- [ ] Values don't have extra spaces or quotes

---

## 🔧 Quick Fixes

### 1. Create Missing .env Files

**Server:**
```bash
cd server
cp .env.example .env
# Edit .env with your actual values
```

**Client:**
```bash
cd client
cp .env.example .env
# Edit .env with your actual values
```

### 2. Verify Environment Variables

**Backend:**
```javascript
// Add this temporarily to server/index.js to debug
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Set' : 'Missing');
console.log('PORT:', process.env.PORT);
```

**Frontend:**
```javascript
// Add this temporarily to check
console.log('API URL:', process.env.REACT_APP_API_URL);
```

### 3. Test Locally Before Deploying

```bash
# Terminal 1 - Backend
cd server
npm install
npm run dev

# Terminal 2 - Frontend
cd client
npm install
npm start
```

---

## 📝 Common Mistakes

1. **❌ Committing .env files**
   - ✅ Always check `.gitignore` includes `.env`

2. **❌ Hardcoding URLs**
   - ✅ Always use environment variables

3. **❌ Wrong variable names**
   - ✅ React variables must start with `REACT_APP_`
   - ✅ Check spelling: `MONGO_URI` not `MONGO_URL`

4. **❌ Not rebuilding after env changes**
   - ✅ Always rebuild: `npm run build`

5. **❌ Using localhost URLs in production**
   - ✅ Use deployed backend URL in production `.env`

---

## 🆘 Still Having Issues?

1. **Check deployment logs:**
   - Vercel: Project → Deployments → View Logs
   - Render: Dashboard → Your Service → Logs
   - Railway: Deployments → View Logs

2. **Verify environment variables:**
   - Check platform dashboard → Environment Variables
   - Ensure they're set for correct environment

3. **Test API endpoints:**
   ```bash
   curl https://your-backend-url.com/api/health
   ```

4. **Check MongoDB Atlas:**
   - Verify cluster is running
   - Check IP whitelist
   - Verify database user credentials

---

## 📚 Additional Resources

- [MongoDB Atlas Setup Guide](https://www.mongodb.com/docs/atlas/getting-started/)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Render Environment Variables](https://render.com/docs/environment-variables)
- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

---

**Last Updated:** November 12, 2025

