#!/bin/bash

echo "🐳 Deploying CoreMentors with Docker Compose..."

cd /var/www/corementors || { echo "❌ Directory not found"; exit 1; }

# Stop any existing PM2 processes
echo "🛑 Stopping PM2 processes..."
pm2 delete corementors 2>/dev/null || true

# Stop any existing Nginx
echo "🛑 Stopping system Nginx..."
systemctl stop nginx 2>/dev/null || true

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "📦 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "📦 Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID:-YOUR_GOOGLE_CLIENT_ID}
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in

# Database Configuration
DB_HOST=147.93.155.38
DB_PORT=5423
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=asdfghjkl
DB_SSL=false
EOF
    echo "⚠️  Please edit .env file with your actual values!"
fi

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Build and start containers
echo "🔨 Building Docker images..."
docker-compose build

echo "🚀 Starting containers..."
docker-compose up -d

# Wait for containers to start
sleep 5

# Check status
echo "📊 Container status:"
docker-compose ps

# Test the application
echo ""
echo "🧪 Testing application..."
sleep 3
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Application is responding! HTTP 200"
    echo ""
    echo "🎉 SUCCESS! Your site is live at http://corementors.in"
    echo ""
    echo "📋 Next steps:"
    echo "1. Set up SSL: docker-compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d corementors.in -d www.corementors.in"
    echo "2. After SSL, uncomment HTTPS server block in nginx/conf.d/corementors.in.conf"
    echo "3. Restart nginx: docker-compose restart nginx"
else
    echo "⚠️  Application returned HTTP $HTTP_CODE"
    echo "Check logs: docker-compose logs app"
fi

echo ""
echo "📝 Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop: docker-compose down"
echo "  Restart: docker-compose restart"
echo "  Update: git pull && docker-compose up -d --build"



