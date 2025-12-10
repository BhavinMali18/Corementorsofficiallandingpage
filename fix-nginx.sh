#!/bin/bash

# Fix Nginx configuration and stop Docker on port 80

echo "🔧 Fixing Nginx configuration..."

# Kill Docker process on port 80
echo "🛑 Stopping Docker process on port 80..."
kill -9 3431358 2>/dev/null || echo "Process already stopped"

# Wait a moment
sleep 2

# Create correct Nginx config
echo "📝 Creating Nginx configuration..."
cat > /etc/nginx/sites-available/corementors.in << 'EOF'
server {
    listen 80;
    server_name corementors.in www.corementors.in;

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

# Test Nginx
echo "🧪 Testing Nginx configuration..."
nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
systemctl restart nginx

# Check if port 80 is free
echo "✅ Checking port 80..."
lsof -i :80

echo ""
echo "✅ Done! Now run: certbot --nginx -d corementors.in -d www.corementors.in"

