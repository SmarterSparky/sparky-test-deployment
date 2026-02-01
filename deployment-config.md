# Deployment Configuration

## GitHub Secrets Setup

To enable automatic deployment, add these secrets to your GitHub repository:

### Required Secrets

1. **HOSTINGER_HOST** - Your server's IP address or domain
2. **HOSTINGER_USER** - SSH username (usually `root` or your account name)
3. **HOSTINGER_SSH_KEY** - Your private SSH key for server access
4. **HOSTINGER_PORT** - SSH port (default: 22)

### How to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the exact names above

## SSH Key Setup

### Generate SSH Key (if needed)
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions@sparky"
```

### Add Public Key to Server
```bash
# Copy public key to server
ssh-copy-id -i ~/.ssh/id_rsa.pub user@your-server.com

# Or manually add to ~/.ssh/authorized_keys
```

### Add Private Key to GitHub Secrets
- Copy the **private key** content to `HOSTINGER_SSH_KEY` secret
- Make sure to include the full key including headers:
  ```
  -----BEGIN OPENSSH PRIVATE KEY-----
  [key content]
  -----END OPENSSH PRIVATE KEY-----
  ```

## Server Requirements

### Docker Installation
```bash
# Install Docker on Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
```

### Port Configuration
- Ensure port 3000 is open on your server
- Configure firewall/security groups if needed

## Deployment Process

1. **Push to master branch** → Triggers deployment
2. **Tests run** → Builds and tests Docker image
3. **Deploy stage** → Copies image to server and starts container
4. **Health check** → Verifies deployment success

## Monitoring

- Container logs: `docker logs sparky-test-app`
- Health check: `curl http://your-server:3000/api/health`
- Container status: `docker ps | grep sparky-test-app`

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   - Check SSH key format
   - Verify server IP/port
   - Test manual SSH connection

2. **Docker Build Failed**
   - Check Dockerfile syntax
   - Verify Node.js version compatibility

3. **Health Check Failed**
   - Check application logs
   - Verify port 3000 is available
   - Check firewall settings

### Manual Deployment
```bash
# If GitHub Actions fails, deploy manually:
git clone https://github.com/SmarterSparky/sparky-test-deployment.git
cd sparky-test-deployment
docker build -t sparky-test-deployment .
docker run -d --name sparky-test-app -p 3000:3000 sparky-test-deployment
```