#!/bin/bash

echo "🚀 Deploying CoreMentors to corementors.in and testing database connection..."
echo ""

cd /var/www/corementors || { echo "❌ Directory not found"; exit 1; }

# Pull latest code
echo "📥 Pulling latest code from GitHub..."
git pull origin main

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

# Create/update .env file with database config
echo "📝 Setting up environment variables..."
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

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Stop PM2 if running
pm2 delete corementors 2>/dev/null || true

# Stop system Nginx
systemctl stop nginx 2>/dev/null || true

# Build and start containers
echo "🔨 Building Docker images..."
docker-compose build --no-cache

echo "🚀 Starting containers..."
docker-compose up -d

# Wait for containers to start
echo "⏳ Waiting for application to start..."
sleep 10

# Check container status
echo ""
echo "📊 Container status:"
docker-compose ps

# Test application health
echo ""
echo "🧪 Testing application health..."
sleep 5

# Test 1: Check if app is responding
echo ""
echo "Test 1: Application Response"
echo "----------------------------"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Application is responding! HTTP $HTTP_CODE"
else
    echo "❌ Application returned HTTP $HTTP_CODE"
    echo "📋 Checking logs..."
    docker-compose logs app --tail 20
fi

# Test 2: Database connection via API
echo ""
echo "Test 2: Database Connection via API"
echo "-----------------------------------"
DB_TEST=$(curl -s http://localhost/api/db/test)
DB_SUCCESS=$(echo $DB_TEST | grep -o '"success":true' || echo "")

if [ -n "$DB_SUCCESS" ]; then
    echo "✅ Database connection successful!"
    echo ""
    echo "Database Test Result:"
    echo "$DB_TEST" | python3 -m json.tool 2>/dev/null || echo "$DB_TEST"
else
    echo "❌ Database connection failed!"
    echo ""
    echo "Error details:"
    echo "$DB_TEST" | python3 -m json.tool 2>/dev/null || echo "$DB_TEST"
fi

# Test 3: Test via domain (if DNS is configured)
echo ""
echo "Test 3: Testing via corementors.in"
echo "----------------------------------"
DOMAIN_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://corementors.in 2>/dev/null || echo "000")
if [ "$DOMAIN_CODE" = "200" ]; then
    echo "✅ Domain is accessible! HTTP $DOMAIN_CODE"
    
    # Test database via domain
    echo ""
    echo "Testing database via domain..."
    DOMAIN_DB_TEST=$(curl -s http://corementors.in/api/db/test)
    DOMAIN_DB_SUCCESS=$(echo $DOMAIN_DB_TEST | grep -o '"success":true' || echo "")
    
    if [ -n "$DOMAIN_DB_SUCCESS" ]; then
        echo "✅ Database connection via domain successful!"
    else
        echo "⚠️  Database connection via domain failed (may need DNS propagation)"
    fi
else
    echo "⚠️  Domain returned HTTP $DOMAIN_CODE (DNS may not be configured yet)"
fi

# Summary
echo ""
echo "=========================================="
echo "📋 Deployment Summary"
echo "=========================================="
echo "Application: http://localhost"
echo "Domain: http://corementors.in"
echo "Database Test: http://corementors.in/api/db/test"
echo "Test Page: http://corementors.in/test-db"
echo ""
echo "📝 Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Restart: docker-compose restart"
echo "  Stop: docker-compose down"
echo "  Test DB: curl http://corementors.in/api/db/test"
echo ""

