#!/bin/bash

echo "🔄 Updating and rebuilding CoreMentors application..."

# Navigate to project directory
cd /var/www/corementors || { echo "❌ Error: /var/www/corementors not found."; exit 1; }

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies (in case new ones were added)
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



