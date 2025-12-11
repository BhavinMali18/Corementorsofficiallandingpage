#!/bin/bash

echo "🔧 Fixing app 404 issue..."

cd /var/www/corementors || { echo "❌ Directory not found"; exit 1; }

# 1. Check if app is running
echo "1️⃣ Checking PM2 status..."
pm2 status corementors

# 2. Test localhost:3003
echo ""
echo "2️⃣ Testing localhost:3003..."
LOCAL_RESPONSE=$(curl -s http://localhost:3003 | head -5)
LOCAL_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3003)

if [ "$LOCAL_CODE" = "200" ]; then
    echo "✅ App is responding with HTTP 200 on localhost:3003"
    echo "Response preview:"
    echo "$LOCAL_RESPONSE"
elif [ "$LOCAL_CODE" = "404" ]; then
    echo "❌ App is returning 404 on localhost:3003"
    echo "This means the Next.js app itself has an issue."
else
    echo "❌ App returned HTTP $LOCAL_CODE"
fi

# 3. Check if .next directory exists
echo ""
echo "3️⃣ Checking build directory..."
if [ -d ".next" ]; then
    echo "✅ .next directory exists"
    echo "Checking for server files..."
    if [ -f ".next/server.js" ] || [ -d ".next/server" ]; then
        echo "✅ Server files found"
    else
        echo "⚠️  Server files might be missing"
    fi
else
    echo "❌ .next directory NOT found! Rebuilding..."
    npm run build
fi

# 4. Check PM2 logs for errors
echo ""
echo "4️⃣ Checking PM2 logs for errors..."
pm2 logs corementors --lines 30 --nostream | tail -20

# 5. Restart the app
echo ""
echo "5️⃣ Restarting application..."
pm2 restart corementors
sleep 5

# 6. Test again
echo ""
echo "6️⃣ Testing after restart..."
sleep 2
NEW_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3003)
if [ "$NEW_CODE" = "200" ]; then
    echo "✅ App is now responding with HTTP 200"
    
    # Test domain
    echo ""
    echo "7️⃣ Testing domain..."
    DOMAIN_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://corementors.in)
    if [ "$DOMAIN_CODE" = "200" ]; then
        echo "✅ Domain is working! HTTP 200"
        echo ""
        echo "🎉 SUCCESS! Your site is live at http://corementors.in"
    elif [ "$DOMAIN_CODE" = "404" ]; then
        echo "⚠️  Domain still returning 404"
        echo "Testing Nginx proxy..."
        curl -I http://corementors.in | head -5
    else
        echo "⚠️  Domain returned HTTP $DOMAIN_CODE"
    fi
else
    echo "❌ App still returning HTTP $NEW_CODE"
    echo ""
    echo "Checking logs again..."
    pm2 logs corementors --lines 10 --nostream
fi

# 7. Check Nginx proxy
echo ""
echo "8️⃣ Checking Nginx proxy configuration..."
if grep -q "proxy_pass.*3003" /etc/nginx/sites-enabled/corementors.in; then
    echo "✅ Nginx is configured to proxy to port 3003"
    PROXY_TARGET=$(grep "proxy_pass" /etc/nginx/sites-enabled/corementors.in | head -1)
    echo "   $PROXY_TARGET"
else
    echo "❌ Nginx proxy configuration missing!"
fi

echo ""
echo "✅ Diagnostic complete!"

