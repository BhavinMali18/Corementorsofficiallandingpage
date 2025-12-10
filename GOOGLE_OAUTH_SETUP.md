# Google OAuth Setup Guide

To enable Google Sign-In on the login and signup pages, follow these steps:

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter a project name (e.g., "CoreMentors Auth")
4. Click "Create"

## 2. Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google+ API" or "Google Identity Services"
3. Click on it and click "Enable"

## 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" (unless you have a Google Workspace)
   - Fill in the required fields (App name, User support email, Developer contact)
   - Add scopes: `email`, `profile`, `openid`
   - Add test users if needed
4. For Application type, select "Web application"
5. Add Authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Add Authorized redirect URIs:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
7. Click "Create"
8. Copy the **Client ID** (it looks like: `123456789-abcdefg.apps.googleusercontent.com`)

## 4. Configure Environment Variable

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here
   ```
3. Replace `your_client_id_here` with the Client ID you copied in step 3

## 5. Restart Development Server

After adding the environment variable, restart your Next.js development server:
```bash
npm run dev
```

## Testing

1. Navigate to `/login` or `/signup`
2. You should see a Google Sign-In button
3. Click it to test the authentication flow
4. After successful login, you'll be redirected to the home page with your profile icon in the header

## Notes

- The Google Sign-In button will be disabled until you configure the Client ID
- For production, make sure to add your production domain to authorized origins
- The current implementation stores user data in `localStorage` (for demo purposes)
- In production, you should verify the JWT token on your backend server

