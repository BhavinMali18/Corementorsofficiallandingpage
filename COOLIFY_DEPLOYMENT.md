# Coolify Deployment Guide

This guide explains how to deploy CoreMentors to Coolify.

## Prerequisites

1. Coolify instance running
2. PostgreSQL database (already configured)
3. Domain `corementors.in` pointing to your Coolify server

## Database Configuration

Your PostgreSQL database is already set up:
- **Host:** `147.93.155.38`
- **Port:** `5423` (public port)
- **Database:** `postgres`
- **Username:** `postgres`
- **Password:** `asdfghjkl`

## Deployment Steps

### Option 1: Deploy via Coolify UI (Recommended)

1. **Create New Resource**
   - Go to your Coolify dashboard
   - Click "New Resource" → "Docker Compose"
   - Select your server

2. **Connect Repository**
   - Repository: `https://github.com/BhavinMali18/Corementorsofficiallandingpage.git`
   - Branch: `main`
   - Build Pack: `Docker Compose`

3. **Configure Environment Variables**
   Add these in Coolify's environment variables section:
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
   NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in
   DB_HOST=147.93.155.38
   DB_PORT=5423
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=asdfghjkl
   DB_SSL=false
   ```

4. **Configure Domain**
   - Domain: `corementors.in`
   - Enable SSL: Yes (Coolify will handle Let's Encrypt automatically)

5. **Deploy**
   - Click "Deploy"
   - Coolify will automatically:
     - Clone the repository
     - Build the Docker image
     - Start the container
     - Set up reverse proxy (Traefik)
     - Configure SSL certificate

### Option 2: Manual Docker Compose

If you prefer to deploy manually:

```bash
# Clone repository
git clone https://github.com/BhavinMali18/Corementorsofficiallandingpage.git
cd Corementorsofficiallandingpage

# Create .env file
cat > .env << EOF
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in
DB_HOST=147.93.155.38
DB_PORT=5423
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=asdfghjkl
DB_SSL=false
EOF

# Build and start
docker-compose up -d --build
```

## Testing

After deployment, test the database connection:

```bash
# Test health endpoint
curl https://corementors.in/api/health

# Test database connection
curl https://corementors.in/api/db/test

# Visit test page
https://corementors.in/test-db
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth Client ID | Required |
| `NEXT_PUBLIC_WORKPLACE_DOMAIN` | Workplace domain | `corementors.in` |
| `DB_HOST` | PostgreSQL host | `147.93.155.38` |
| `DB_PORT` | PostgreSQL port | `5423` |
| `DB_NAME` | Database name | `postgres` |
| `DB_USER` | Database user | `postgres` |
| `DB_PASSWORD` | Database password | `asdfghjkl` |
| `DB_SSL` | Enable SSL | `false` |

## Features

- ✅ Automatic SSL with Let's Encrypt (via Coolify)
- ✅ Reverse proxy (Traefik via Coolify)
- ✅ Health checks
- ✅ Database connection pooling
- ✅ Production-ready Next.js build

## Troubleshooting

### Container won't start
- Check logs: `docker-compose logs app`
- Verify environment variables are set correctly
- Ensure database is accessible from the container

### Database connection fails
- Verify database credentials
- Check if database port `5423` is accessible
- Test connection: `curl https://corementors.in/api/db/test`

### SSL not working
- Ensure domain DNS points to Coolify server
- Check Coolify's SSL certificate status
- Verify Traefik configuration in Coolify

## Useful Commands

```bash
# View logs
docker-compose logs -f app

# Restart container
docker-compose restart app

# Rebuild and restart
docker-compose up -d --build

# Stop container
docker-compose down
```

## Support

For issues or questions, check:
- Application logs in Coolify dashboard
- Database connection test: `/api/db/test`
- Health check: `/api/health`

