#!/bin/bash

echo "🔧 Fixing nginx.conf..."

# Check if there's a map directive in the wrong place
if grep -q "^map \$http_upgrade" /etc/nginx/nginx.conf; then
    echo "⚠️  Found map directive in wrong place, removing..."
    # Remove lines starting with "map" that are outside http block
    sed -i '/^map \$http_upgrade/d' /etc/nginx/nginx.conf
    sed -i '/^    default upgrade;/d' /etc/nginx/nginx.conf
    sed -i '/^    '\'''\'' close;/d' /etc/nginx/nginx.conf
    sed -i '/^}/d' /etc/nginx/nginx.conf | head -1
    echo "✅ Removed incorrect map directive"
fi

# Test configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ nginx.conf is now valid!"
    echo "You can now run fix-nginx-proxy.sh"
else
    echo "❌ Still has errors. Showing nginx.conf around line 12:"
    sed -n '8,15p' /etc/nginx/nginx.conf
fi



