#!/bin/bash

# Fix Certbot ACME challenge 404 errors

echo "🔧 Fixing Certbot configuration..."

# Make sure app is running
echo "🚀 Checking if application is running..."
cd /var/www/corementors
pm2 status

# If not running, start it
if ! pm2 list | grep -q "corementors.*online"; then
    echo "📦 Starting application..."
    pm2 start ecosystem.config.js || pm2 start npm --name "corementors" -- start
    pm2 save
fi

# Update Nginx config to allow Certbot challenges
echo "📝 Updating Nginx config for Certbot..."
cat > /etc/nginx/sites-available/corementors.in << 'EOF'
server {
    listen 80;
    server_name corementors.in www.corementors.in;

    # Allow Certbot ACME challenges
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        try_files $uri =404;
    }

    location / {
        proxy_pass http://localhost:3003;
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

# Create directory for ACME challenges
mkdir -p /var/www/html/.well-known/acme-challenge
chmod -R 755 /var/www/html

# Test and restart Nginx
echo "🧪 Testing Nginx..."
nginx -t

echo "🔄 Restarting Nginx..."
systemctl restart nginx

# Check if app is accessible
echo "✅ Checking application status..."
curl -I http://localhost:3003 || echo "⚠️  App not responding on port 3003"

echo ""
echo "✅ Configuration updated!"
echo "📋 Next steps:"
echo "1. Verify DNS: Make sure corementors.in points to 147.93.155.38"
echo "2. Test: curl http://corementors.in (should work)"
echo "3. Run: certbot --nginx -d corementors.in -d www.corementors.in"

