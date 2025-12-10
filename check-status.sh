#!/bin/bash

echo "🔍 Checking CoreMentors application status..."
echo ""

# Check if PM2 is running
echo "1️⃣ PM2 Status:"
pm2 status corementors
echo ""

# Check if app is listening on port 3003
echo "2️⃣ Port 3003 Status:"
if lsof -i :3003 > /dev/null 2>&1; then
    echo "✅ Port 3003 is in use:"
    lsof -i :3003
else
    echo "❌ Port 3003 is NOT in use - app is not running!"
fi
echo ""

# Check Nginx status
echo "3️⃣ Nginx Status:"
systemctl status nginx --no-pager -l | head -20
echo ""

# Test localhost:3003
echo "4️⃣ Testing localhost:3003:"
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:3003 || echo "❌ Cannot connect to localhost:3003"
echo ""

# Check Nginx error logs
echo "5️⃣ Recent Nginx Error Logs:"
tail -10 /var/log/nginx/error.log
echo ""

# Check PM2 logs
echo "6️⃣ Recent PM2 Logs (last 10 lines):"
pm2 logs corementors --lines 10 --nostream
echo ""

# Check if .next directory exists
echo "7️⃣ Build Directory:"
if [ -d ".next" ]; then
    echo "✅ .next directory exists"
    ls -la .next | head -5
else
    echo "❌ .next directory NOT found - build may have failed!"
fi
echo ""

# Check Nginx config
echo "8️⃣ Nginx Configuration:"
cat /etc/nginx/sites-enabled/corementors.in 2>/dev/null || echo "❌ Nginx config not found!"
echo ""

echo "✅ Status check complete!"

