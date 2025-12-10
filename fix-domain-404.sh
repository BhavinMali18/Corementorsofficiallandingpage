#!/bin/bash

echo "🔧 Fixing domain 404 and ACME challenge issues..."

# 1. Create ACME challenge directory
echo "📁 Creating ACME challenge directory..."
mkdir -p /var/www/html/.well-known/acme-challenge
chmod -R 755 /var/www/html/.well-known
chown -R www-data:www-data /var/www/html/.well-known

# 2. Test if app is actually responding on localhost:3003
echo "🧪 Testing localhost:3003..."
curl -s http://localhost:3003 | head -20
if [ $? -ne 0 ]; then
    echo "❌ App is not responding on localhost:3003!"
    echo "Checking PM2 status..."
    pm2 status corementors
    exit 1
fi

# 3. Check if .next directory exists
echo "📂 Checking build directory..."
if [ ! -d "/var/www/corementors/.next" ]; then
    echo "❌ .next directory not found! Rebuilding..."
    cd /var/www/corementors
    npm run build
fi

# 4. Verify PM2 is running
echo "🔄 Checking PM2..."
pm2 restart corementors
sleep 3

# 5. Test localhost again
echo "🧪 Testing localhost:3003 after restart..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3003)
if [ "$HTTP_CODE" != "200" ]; then
    echo "❌ App returned HTTP $HTTP_CODE instead of 200"
    echo "Checking PM2 logs..."
    pm2 logs corementors --lines 20 --nostream
    exit 1
else
    echo "✅ App is responding with HTTP 200"
fi

# 6. Update Nginx config to ensure proper proxy
echo "📝 Updating Nginx configuration..."
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

# 7. Test Nginx config
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Reload Nginx
    echo "🔄 Reloading Nginx..."
    systemctl reload nginx
    
    # Wait a moment
    sleep 2
    
    # Test the domain
    echo "🌐 Testing domain..."
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://corementors.in)
    echo "HTTP Status Code: $HTTP_CODE"
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ Domain is working! HTTP 200"
        echo ""
        echo "🔒 Now you can set up SSL:"
        echo "   certbot --nginx -d corementors.in -d www.corementors.in"
    elif [ "$HTTP_CODE" = "404" ]; then
        echo "⚠️  Domain is accessible but returning 404"
        echo "This might be a Next.js routing issue."
        echo "Check: curl http://localhost:3003"
        echo "If localhost works but domain doesn't, check Nginx logs:"
        echo "   tail -f /var/log/nginx/error.log"
    else
        echo "❌ Domain returned HTTP $HTTP_CODE"
        echo "Check Nginx logs: tail -20 /var/log/nginx/error.log"
    fi
else
    echo "❌ Nginx configuration test failed!"
    exit 1
fi

echo ""
echo "✅ Fix script completed!"

