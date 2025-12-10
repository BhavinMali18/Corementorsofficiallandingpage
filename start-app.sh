#!/bin/bash

# Start the Next.js application properly

echo "🔧 Starting CoreMentors application..."

cd /var/www/corementors

# Stop existing process
echo "🛑 Stopping existing process..."
pm2 delete corementors 2>/dev/null || true

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'EOF'
NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in
EOF
    echo "⚠️  Please edit .env.local with your actual Google OAuth Client ID!"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Start with PM2 using ecosystem config
echo "🚀 Starting application with PM2..."
if [ -f ecosystem.config.js ]; then
    pm2 start ecosystem.config.js
else
    PORT=3003 pm2 start npm --name "corementors" -- start
fi

# Save PM2 configuration
pm2 save

# Wait a moment for app to start
sleep 3

# Check if app is running
echo "✅ Checking application status..."
pm2 status

# Test if app responds
echo "🧪 Testing application on port 3003..."
if curl -s http://localhost:3003 > /dev/null; then
    echo "✅ Application is running on port 3003!"
else
    echo "❌ Application is not responding. Checking logs..."
    pm2 logs corementors --lines 20 --nostream
fi

echo ""
echo "✅ Setup complete!"
echo "📋 Check logs with: pm2 logs corementors"

