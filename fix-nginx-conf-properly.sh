#!/bin/bash

echo "🔧 Properly fixing nginx.conf..."

# Backup nginx.conf
cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup.$(date +%s)

# Check current state
echo "📋 Current nginx.conf structure (lines 1-20):"
sed -n '1,20p' /etc/nginx/nginx.conf

# Remove map directive if it's outside http block
if grep -q "^map \$http_upgrade" /etc/nginx/nginx.conf; then
    echo ""
    echo "⚠️  Found map directive outside http block, removing..."
    
    # Find the line numbers of the map block
    MAP_START=$(grep -n "^map \$http_upgrade" /etc/nginx/nginx.conf | cut -d: -f1)
    
    if [ -n "$MAP_START" ]; then
        # Find where the map block ends (next closing brace at same indentation)
        # For simplicity, remove 4 lines (map, default, '', })
        sed -i "${MAP_START},$((MAP_START+3))d" /etc/nginx/nginx.conf
        echo "✅ Removed map directive from lines $MAP_START-$((MAP_START+3))"
    fi
fi

# Test configuration
echo ""
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ nginx.conf is now valid!"
    echo ""
    echo "You can now run: ./fix-nginx-proxy.sh"
else
    echo "❌ Still has errors."
    echo ""
    echo "Showing problematic area:"
    sed -n '8,15p' /etc/nginx/nginx.conf
    echo ""
    echo "Restoring backup..."
    BACKUP_FILE=$(ls -t /etc/nginx/nginx.conf.backup.* 2>/dev/null | head -1)
    if [ -n "$BACKUP_FILE" ] && [ -f "$BACKUP_FILE" ]; then
        cp "$BACKUP_FILE" /etc/nginx/nginx.conf
        echo "✅ Backup restored"
    fi
    exit 1
fi

