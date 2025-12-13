# Environment Variables for Coolify/Nixpacks Deployment

Add these environment variables in your Coolify dashboard under your application's **Environment Variables** section.

## Required Environment Variables

Copy and paste these into Coolify:

```env
# Google OAuth (Required for login/signup)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here

# Workplace Domain
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in

# Database Configuration
DB_HOST=147.93.155.38
DB_PORT=5423
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=asdfghjkl
DB_SSL=false

# Node Environment
NODE_ENV=production

# Port (Coolify/Nixpacks will handle this automatically)
PORT=3000
```

## Quick Copy-Paste for Coolify

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here
NEXT_PUBLIC_WORKPLACE_DOMAIN=corementors.in
DB_HOST=147.93.155.38
DB_PORT=5423
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=asdfghjkl
DB_SSL=false
NODE_ENV=production
PORT=3000
```

## Variable Descriptions

| Variable | Value | Required | Description |
|----------|-------|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Your Google OAuth Client ID | ✅ Yes | Required for Google Sign-In on login/signup pages |
| `NEXT_PUBLIC_WORKPLACE_DOMAIN` | `corementors.in` | ✅ Yes | Domain for workplace authentication |
| `DB_HOST` | `147.93.155.38` | ✅ Yes | PostgreSQL database host |
| `DB_PORT` | `5423` | ✅ Yes | PostgreSQL public port |
| `DB_NAME` | `postgres` | ✅ Yes | Database name |
| `DB_USER` | `postgres` | ✅ Yes | Database username |
| `DB_PASSWORD` | `asdfghjkl` | ✅ Yes | Database password |
| `DB_SSL` | `false` | ❌ No | Enable SSL for database (default: false) |
| `NODE_ENV` | `production` | ❌ No | Node environment (recommended) |
| `PORT` | `3000` | ❌ No | Application port (usually auto-detected) |

## How to Add in Coolify

1. Go to your Coolify dashboard
2. Select your application
3. Click on **Environment Variables** tab
4. Click **Add Environment Variable**
5. Add each variable one by one, or use the bulk import feature if available
6. Click **Save**
7. **Redeploy** your application for changes to take effect

## Testing After Setting Variables

After adding the environment variables and redeploying, test:

```bash
# Health check
curl http://qksw4wc884k0wkkk4wccswos.147.93.155.38.sslip.io/api/health

# Database connection test
curl http://qksw4wc884k0wkkk4wccswos.147.93.155.38.sslip.io/api/db/test

# Test page
# Visit: http://qksw4wc884k0wkkk4wccswos.147.93.155.38.sslip.io/test-db
```

## Troubleshooting

### API Routes Return 404
- Make sure `NODE_ENV=production` is set
- Redeploy after adding environment variables
- Check build logs in Coolify to ensure Next.js built successfully

### Database Connection Fails
- Verify database credentials are correct
- Ensure database port `5423` is accessible from Coolify server
- Check if database allows connections from Coolify server IP

### Google OAuth Not Working
- Verify `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is set correctly
- Make sure the Client ID is valid and not expired
- Check Google Cloud Console for OAuth consent screen configuration

## Notes

- **NEXT_PUBLIC_*** variables are exposed to the browser (client-side)
- **DB_*** variables are server-side only (not exposed to browser)
- After changing environment variables, **always redeploy** the application
- Coolify/Nixpacks will automatically detect Next.js and build accordingly

