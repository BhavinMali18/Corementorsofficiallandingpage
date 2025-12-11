#!/bin/bash

echo "🔧 Fixing Nginx proxy configuration for Next.js..."

# Backup existing config
cp /etc/nginx/sites-available/corementors.in /etc/nginx/sites-available/corementors.in.backup.$(date +%s)

# Create optimized Nginx config for Next.js
echo "📝 Creating optimized Nginx configuration..."
cat > /etc/nginx/sites-available/corementors.in << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name corementors.in www.corementors.in;

    # Allow large file uploads
    client_max_body_size 50M;

    # ACME challenge - MUST be before the main location block
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        try_files $uri =404;
        access_log off;
    }

    # Proxy all other requests to Next.js app
    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        
        # Essential headers for Next.js
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # WebSocket support
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffer settings
        proxy_buffering off;
        proxy_request_buffering off;
    }

    # Handle Next.js static files
    location /_next/static {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Handle Next.js images
    location /Images {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
EOF

# Don't modify nginx.conf - we're using a simple Connection header instead
echo "✅ Using simple Connection header (no nginx.conf modification needed)"

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Reload Nginx
    echo "🔄 Reloading Nginx..."
    systemctl reload nginx
    
    sleep 2
    
    # Test the domain
    echo "🌐 Testing domain..."
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: corementors.in" http://127.0.0.1)
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ Domain is working! HTTP 200"
        echo ""
        echo "🎉 SUCCESS! Your site should now be live at http://corementors.in"
        echo ""
        echo "🔒 Next step: Set up SSL:"
        echo "   certbot --nginx -d corementors.in -d www.corementors.in"
    else
        echo "⚠️  Domain returned HTTP $HTTP_CODE"
        echo ""
        echo "Testing with full domain..."
        curl -I http://corementors.in 2>&1 | head -10
    fi
else
    echo "❌ Nginx configuration test failed!"
    echo "Restoring backup..."
    BACKUP_FILE=$(ls -t /etc/nginx/sites-available/corementors.in.backup.* 2>/dev/null | head -1)
    if [ -n "$BACKUP_FILE" ] && [ -f "$BACKUP_FILE" ]; then
        cp "$BACKUP_FILE" /etc/nginx/sites-available/corementors.in
        echo "✅ Backup restored"
    else
        echo "⚠️  No backup found, please check nginx.conf manually"
    fi
    exit 1
fi

echo ""
echo "✅ Proxy configuration updated!"

