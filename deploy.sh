#!/bin/bash

# Deployment script for Contabo server
# This script will be run on the server

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/corementors || exit

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Build application
echo "🔨 Building application..."
npm run build

# Restart PM2
echo "🔄 Restarting application..."
pm2 restart corementors || pm2 start npm --name "corementors" -- start

# Save PM2 configuration
pm2 save

echo "✅ Deployment completed successfully!"

