# Sparky Test Deployment

Testing the full deployment pipeline: **Local → GitHub → Hostinger → Docker**

## What This Tests

- ✅ Git configuration and GitHub push
- ✅ Docker containerization
- ⏳ Hostinger deployment
- ⏳ Docker manager integration

## Quick Start

```bash
# Local development
npm install
npm start

# Docker build & run
docker build -t sparky-test .
docker run -p 3000:3000 sparky-test
```

## Endpoints

- `/` - Main test page
- `/api/health` - Health check endpoint

---

*Built by Sparky ⚡ for Wolf @ Smarter Revolution*