# Database Connection Setup

This guide explains how to connect and test the PostgreSQL database.

## Database Configuration

From your Contabo database panel, the connection details are:

- **Host:** `147.93.155.38` (external) or `bws44gw4k08osgwsooosc000` (internal)
- **Port:** `5423` (public) or `5432` (internal)
- **Database:** `postgres`
- **Username:** `postgres`
- **Password:** `asdfghjkl`
- **Connection String:** `postgres://postgres:asdfghjkl@147.93.155.38:5423/postgres`

## Environment Variables

Add these to your `.env` or `.env.local` file:

```env
DB_HOST=147.93.155.38
DB_PORT=5423
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=asdfghjkl
DB_SSL=false
```

## Testing the Connection

### Option 1: Web Interface

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/test-db`
3. The page will automatically test the connection and display:
   - Connection status
   - Database version
   - Current server time
   - Connection pool statistics

### Option 2: Command Line

Run the test script:

```bash
npm run test:db
```

### Option 3: API Endpoint

Test via API:

```bash
curl http://localhost:3000/api/db/test
```

## Using the Database in Your Code

Import the database utilities:

```javascript
import { query, testConnection } from '@/lib/db';

// Execute a query
const result = await query('SELECT * FROM users WHERE id = $1', [userId]);

if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

## Docker Deployment

When deploying with Docker Compose, the database environment variables are automatically passed to the container. Make sure your `.env` file contains the database credentials.

## Troubleshooting

### Connection Refused

- Check if the database is running and accessible
- Verify the port (5423 for public, 5432 for internal)
- Ensure firewall allows connections on the database port

### Authentication Failed

- Verify username and password
- Check if the user has proper permissions

### SSL Errors

- If using SSL, set `DB_SSL=true` in environment variables
- For self-signed certificates, SSL is configured to not reject unauthorized certificates

