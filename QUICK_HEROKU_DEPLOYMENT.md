# Quick Heroku Backend Deployment - हिंदी गाइड

## तुरंत Deploy करने के लिए (5 मिनट में)

### Step 1: Heroku CLI Install करें
1. https://devcenter.heroku.com/articles/heroku-cli पर जाएँ
2. Windows के लिए installer download करें
3. Install करें और restart करें

### Step 2: Terminal/PowerShell Open करें
```powershell
# Heroku में login करें
heroku login

# Project folder में जाएँ
cd "C:\Users\adepr\Downloads\Enemy"
```

### Step 3: PowerShell Script Run करें
```powershell
# Script को executable बनाएँ और run करें
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\deploy-backend-heroku.ps1
```

### Step 4: Script के Instructions Follow करें
Script आपसे पूछेगा:
1. **App Name**: कोई unique name (जैसे: radhaapi-backend-123)
2. **MongoDB URI**: आपका MongoDB Atlas connection string
3. **JWT Secret**: कोई complex password (जैसे: mySecretKey123!@#)
4. **YouTube API Key**: आपकी YouTube API key
5. **CORS Origin**: https://www.radhaapi.me

### Step 5: Deployment Complete!
Script के complete होने पर आपको मिलेगा:
- App URL: `https://your-app-name.herokuapp.com`
- Health Check URL: `https://your-app-name.herokuapp.com/api/health`

## Manual Deployment (अगर script काम न करे)

### Backend Deploy करें:
```bash
cd backend
git init
heroku create radhaapi-backend
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI="your_mongodb_uri"
heroku config:set JWT_SECRET="your_jwt_secret"
heroku config:set YOUTUBE_API_KEY="your_youtube_key"
heroku config:set CORS_ORIGIN="https://www.radhaapi.me"
git add .
git commit -m "Deploy backend"
git push heroku main
```

### Frontend के लिए Environment Variable Update करें:
```bash
# Frontend के .env.production में
REACT_APP_API_URL=https://your-heroku-app-name.herokuapp.com/api
```

## Test करें
1. Browser में जाएँ: `https://your-app-name.herokuapp.com/api/health`
2. Response मिलना चाहिए: `{"status": "ok", "message": "Service is healthy"}`

## अगर Problems आएं:
```bash
# Logs देखें
heroku logs --tail

# App restart करें  
heroku restart

# Config variables check करें
heroku config
```

## Frontend Deployment (Optional)
अगर आप frontend भी deploy करना चाहते हैं तो:
1. Netlify use करें (free है)
2. या Vercel use करें (भी free है)
3. या Heroku पर static site deploy करें

बस! आपका backend अब live है Heroku पर! 🎉
