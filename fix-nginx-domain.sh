#!/bin/bash

echo "🔧 Fixing Nginx configuration for corementors.in..."

# Backup existing config
if [ -f /etc/nginx/sites-available/corementors.in ]; then
    cp /etc/nginx/sites-available/corementors.in /etc/nginx/sites-available/corementors.in.backup
    echo "✅ Backed up existing config"
fi

# Create/Update Nginx config
echo "📝 Creating Nginx configuration..."
cat > /etc/nginx/sites-available/corementors.in << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name corementors.in www.corementors.in;

    # Allow large file uploads
    client_max_body_size 50M;

    # This block is crucial for Certbot's http-01 challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        try_files $uri =404;
    }

    # Proxy all other requests to Next.js app
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
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
EOF

# Enable the site
echo "🔗 Enabling site..."
ln -sf /etc/nginx/sites-available/corementors.in /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Reload Nginx
    echo "🔄 Reloading Nginx..."
    systemctl reload nginx
    
    echo ""
    echo "✅ Nginx configuration updated!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Verify DNS: Make sure corementors.in points to 147.93.155.38"
    echo "   Run: dig corementors.in +short"
    echo ""
    echo "2. Test HTTP: curl -I http://corementors.in"
    echo ""
    echo "3. Set up SSL: certbot --nginx -d corementors.in -d www.corementors.in"
    echo ""
    echo "4. Check firewall: ufw status (ports 80 and 443 should be open)"
else
    echo "❌ Nginx configuration test failed! Check the errors above."
    exit 1
fi



