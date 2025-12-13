# Deployment Guide for CoreMentors

## 🚀 CI/CD Setup with GitHub Actions

This project uses GitHub Actions for automatic deployment to your Contabo server.

## 📋 Prerequisites

1. Contabo server with IP: `147.93.155.38`
2. Domain `corementors.in` pointing to your server IP
3. GitHub repository access

## 🔧 Initial Server Setup (Run Once)

### Option 1: Using Contabo Web Console (Terminal)

1. Log in to your Contabo control panel
2. Open the VPS console/terminal
3. Run the setup script:

```bash
curl -o server-setup.sh https://raw.githubusercontent.com/BhavinMali18/Corementorsofficiallandingpage/main/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh
```

### Option 2: Manual Setup

If you have SSH access from another machine, connect and run:

```bash
ssh root@147.93.155.38
# Enter password: CMSERVER2025
```

Then run the setup commands from `server-setup.sh`

## 🔐 GitHub Secrets Configuration

You need to add these secrets to your GitHub repository:

1. Go to: `https://github.com/BhavinMali18/Corementorsofficiallandingpage/settings/secrets/actions`
2. Click "New repository secret"
3. Add these secrets:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `SERVER_HOST` | `147.93.155.38` | Your Contabo server IP |
| `SERVER_USER` | `root` | SSH username |
| `SERVER_PASSWORD` | `CMSERVER2025` | SSH password |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Your Google OAuth Client ID | For authentication |
| `NEXT_PUBLIC_WORKPLACE_DOMAIN` | `corementors.in` | Workplace domain |

## 🔄 How CI/CD Works

1. **Push to main branch** → GitHub Actions automatically triggers
2. **Build** → Application is built with production environment variables
3. **Deploy** → Files are copied to server via SCP
4. **Restart** → PM2 restarts the application automatically

## 📝 Manual Deployment (If Needed)

If you need to manually deploy:

```bash
# On your server
cd /var/www/corementors
./deploy.sh
```

## 🔍 Monitoring

Check application status:
```bash
pm2 status
pm2 logs corementors
```

Check Nginx:
```bash
systemctl status nginx
nginx -t
```

## 🔒 SSL Certificate

After DNS is configured, get SSL certificate:

```bash
certbot --nginx -d corementors.in -d www.corementors.in
```

## 🛠️ Troubleshooting

### Application not starting
```bash
pm2 logs corementors
pm2 restart corementors
```

### Nginx errors
```bash
nginx -t
systemctl restart nginx
tail -f /var/log/nginx/error.log
```

### Build failures
Check GitHub Actions logs: `https://github.com/BhavinMali18/Corementorsofficiallandingpage/actions`

## 📞 Support

If deployment fails, check:
1. GitHub Actions logs
2. Server logs: `pm2 logs corementors`
3. Nginx logs: `/var/log/nginx/error.log`



