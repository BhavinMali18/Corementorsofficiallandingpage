#!/bin/bash

echo "🔄 Force updating CoreMentors application..."

# Navigate to project directory
cd /var/www/corementors || { echo "❌ Error: /var/www/corementors not found."; exit 1; }

# Remove conflicting untracked files
echo "🧹 Removing conflicting files..."
rm -f fix-certbot.sh fix-nginx.sh start-app.sh update-and-build.sh

# Force pull latest changes (discard local changes)
echo "📥 Pulling latest changes from GitHub..."
git fetch origin
git reset --hard origin/main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Restart PM2
    echo "🔄 Restarting application..."
    pm2 delete corementors > /dev/null 2>&1 || true
    pm2 start ecosystem.config.js
    pm2 save
    
    echo "✅ Application restarted!"
    echo "📊 PM2 Status:"
    pm2 status corementors
    
    echo ""
    echo "🧪 Testing application..."
    sleep 3
    curl -s http://localhost:3003 > /dev/null
    if [ $? -eq 0 ]; then
        echo "✅ Application is responding on http://localhost:3003"
    else
        echo "❌ Application is not responding. Check logs: pm2 logs corementors"
    fi
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi



