#!/bin/bash

echo "🧪 Testing Database Connection for CoreMentors"
echo "=============================================="
echo ""

# Test via localhost
echo "Test 1: Testing via localhost"
echo "------------------------------"
LOCAL_TEST=$(curl -s http://localhost/api/db/test)
echo "$LOCAL_TEST" | python3 -m json.tool 2>/dev/null || echo "$LOCAL_TEST"
echo ""

# Test via domain
echo "Test 2: Testing via corementors.in"
echo "----------------------------------"
DOMAIN_TEST=$(curl -s http://corementors.in/api/db/test)
echo "$DOMAIN_TEST" | python3 -m json.tool 2>/dev/null || echo "$DOMAIN_TEST"
echo ""

# Check results
LOCAL_SUCCESS=$(echo $LOCAL_TEST | grep -o '"success":true' || echo "")
DOMAIN_SUCCESS=$(echo $DOMAIN_TEST | grep -o '"success":true' || echo "")

echo "=========================================="
echo "📊 Test Results"
echo "=========================================="

if [ -n "$LOCAL_SUCCESS" ]; then
    echo "✅ Localhost: Database connection successful"
else
    echo "❌ Localhost: Database connection failed"
fi

if [ -n "$DOMAIN_SUCCESS" ]; then
    echo "✅ Domain: Database connection successful"
else
    echo "❌ Domain: Database connection failed"
fi

echo ""

