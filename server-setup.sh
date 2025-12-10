#!/bin/bash

# Initial server setup script
# Run this ONCE on your Contabo server to set up the environment

echo "🔧 Setting up Contabo server for CoreMentors deployment..."

# Update system
echo "📦 Updating system packages..."
apt-get update && apt-get upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verify Node.js
echo "✅ Node.js version:"
node --version
npm --version

# Install Git and PM2
echo "📦 Installing Git and PM2..."
apt-get install -y git
npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
apt-get install -y nginx

# Create project directory
echo "📁 Creating project directory..."
mkdir -p /var/www/corementors
cd /var/www/corementors

# Clone repository
echo "📥 Cloning repository..."
git clone https://github.com/BhavinMali18/Corementorsofficiallandingpage.git .

# Install dependencies
echo "📦 Installing project dependencies..."
npm install

# Create .env.local file
echo "📝 Creating environment file..."
cat > .env.local << 'EOF'
NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in
EOF

echo "⚠️  Please edit /var/www/corementors/.env.local with your actual values!"

# Build application
echo "🔨 Building application..."
npm run build

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start npm --name "corementors" -- start
pm2 save
pm2 startup

# Configure Nginx
echo "🌐 Configuring Nginx..."
cat > /etc/nginx/sites-available/corementors.in << 'EOF'
server {
    listen 80;
    server_name corementors.in www.corementors.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/corementors.in /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx
nginx -t

# Restart Nginx
systemctl restart nginx

# Install Certbot for SSL
echo "🔒 Installing Certbot for SSL..."
apt-get install -y certbot python3-certbot-nginx

echo ""
echo "✅ Server setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Edit /var/www/corementors/.env.production with your Google OAuth credentials"
echo "2. Make sure your domain (corementors.in) DNS points to this server IP: 147.93.155.38"
echo "3. Run: certbot --nginx -d corementors.in -d www.corementors.in"
echo "4. Set up GitHub Secrets (see README.md)"
echo "5. Push to main branch to trigger automatic deployment!"

