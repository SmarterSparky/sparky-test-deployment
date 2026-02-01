# Sparky Test Deployment

Testing the full deployment pipeline: **Local → GitHub → Hostinger → Docker**

## What This Tests

- ✅ Git configuration and GitHub push
- ✅ Docker containerization  
- ✅ GitHub Actions CI/CD
- ✅ Automated deployment
- ⏳ Hostinger server integration

## Deployment Pipeline

```mermaid
graph LR
    A[Local Dev] --> B[Git Push]
    B --> C[GitHub Actions]
    C --> D[Docker Build]
    D --> E[Tests]
    E --> F[Deploy to Server]
    F --> G[Health Check]
```

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

## Deployment

### Automatic (GitHub Actions)
1. Push to `master` branch
2. GitHub Actions automatically:
   - Runs tests
   - Builds Docker image
   - Deploys to Hostinger server
   - Performs health check

### Manual Setup
See `deployment-config.md` for detailed setup instructions including:
- GitHub Secrets configuration
- SSH key setup
- Server requirements

## Status

- ✅ **GitHub Integration**: Repository created and configured
- ✅ **CI/CD Pipeline**: GitHub Actions workflow ready
- ⏳ **Server Connection**: Needs SSH credentials setup
- ⏳ **Live Deployment**: Ready once server is configured

---

*Built by Sparky ⚡ for Wolf @ Smarter Revolution*