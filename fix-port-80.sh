#!/bin/bash

echo "🔧 Fixing port 80 conflict..."

# 1. Find what's using port 80
echo "🔍 Finding process using port 80..."
PORT_80_PID=$(lsof -t -i :80 | head -n 1)

if [ -z "$PORT_80_PID" ]; then
    echo "✅ Port 80 is free!"
else
    echo "⚠️  Found process $PORT_80_PID using port 80"
    
    # Check what process it is
    PROCESS_NAME=$(ps -p $PORT_80_PID -o comm= 2>/dev/null)
    echo "   Process name: $PROCESS_NAME"
    
    # Stop the process
    echo "🛑 Stopping process $PORT_80_PID..."
    kill -9 $PORT_80_PID 2>/dev/null
    sleep 2
    
    # Verify it's stopped
    if lsof -i :80 > /dev/null 2>&1; then
        echo "❌ Process still running. Trying harder..."
        pkill -9 -f "$PROCESS_NAME" 2>/dev/null
        sleep 2
    fi
    
    # Final check
    if lsof -i :80 > /dev/null 2>&1; then
        echo "❌ Could not free port 80. Manual intervention needed."
        echo "Run: lsof -i :80"
        exit 1
    else
        echo "✅ Port 80 is now free!"
    fi
fi

# 2. Stop Nginx if it's running (even if it failed to bind)
echo "🛑 Stopping Nginx..."
systemctl stop nginx 2>/dev/null || true
sleep 1

# 3. Check for any remaining Nginx processes
echo "🧹 Cleaning up any remaining Nginx processes..."
pkill -9 nginx 2>/dev/null || true
sleep 1

# 4. Verify port 80 is free
echo "✅ Verifying port 80 is free..."
if lsof -i :80 > /dev/null 2>&1; then
    echo "❌ Port 80 is still in use:"
    lsof -i :80
    exit 1
fi

# 5. Start Nginx
echo "🚀 Starting Nginx..."
systemctl start nginx

# 6. Check Nginx status
sleep 2
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running!"
    
    # Test configuration
    echo "🧪 Testing Nginx configuration..."
    nginx -t
    
    # Check if it's listening on port 80
    if lsof -i :80 | grep -q nginx; then
        echo "✅ Nginx is listening on port 80!"
        
        # Test the domain
        echo "🌐 Testing domain..."
        sleep 1
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://corementors.in 2>/dev/null || echo "000")
        echo "HTTP Status Code: $HTTP_CODE"
        
        if [ "$HTTP_CODE" = "200" ]; then
            echo "✅ Domain is working! HTTP 200"
        elif [ "$HTTP_CODE" = "404" ]; then
            echo "⚠️  Domain accessible but returning 404 (app issue, not Nginx)"
        elif [ "$HTTP_CODE" = "000" ]; then
            echo "⚠️  Could not connect (might be DNS or firewall)"
        else
            echo "⚠️  Domain returned HTTP $HTTP_CODE"
        fi
    else
        echo "❌ Nginx is not listening on port 80"
        systemctl status nginx --no-pager -l | head -20
    fi
else
    echo "❌ Nginx failed to start!"
    systemctl status nginx --no-pager -l | head -20
    echo ""
    echo "Check logs: tail -20 /var/log/nginx/error.log"
    exit 1
fi

echo ""
echo "✅ Port 80 fix completed!"

