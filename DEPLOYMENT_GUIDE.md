# GitHub Pages Deployment Guide

## Problem Solved
The MIME type error in Firefox was caused by GitHub Pages returning HTML content (index.html) instead of JavaScript files when accessing asset URLs. This happened because the project was missing a proper 404.html file for client-side routing.

## Solution Implemented
1. **Created `public/404.html`** - Custom 404 page that handles client-side routing for GitHub Pages
2. **Updated `src/main.tsx`** - Added redirect handling for GitHub Pages
3. **Updated `index.html`** - Fixed all asset paths to use `/optimo-workforce/` base path
4. **Updated `public/manifest.json`** - Already had correct paths
5. **Created deployment scripts** - `deploy.sh` (Unix) and `deploy.bat` (Windows)

## Files Added/Modified
- `public/404.html` - Custom 404 page for GitHub Pages
- `src/main.tsx` - Added redirect handling
- `index.html` - Fixed asset paths
- `deploy.sh` - Unix deployment script
- `deploy.bat` - Windows deployment script
- `DEPLOYMENT_GUIDE.md` - This guide

## How to Deploy

### Option 1: Using Windows (deploy.bat)
1. Open Command Prompt or PowerShell
2. Run: `deploy.bat`
3. The script will:
   - Build the project
   - Copy 404.html to dist
   - Deploy to gh-pages branch

### Option 2: Using Unix/Linux/Mac (deploy.sh)
1. Make the script executable: `chmod +x deploy.sh`
2. Run: `./deploy.sh`
3. The script will:
   - Build the project
   - Copy 404.html to dist
   - Deploy to gh-pages branch

### Option 3: Manual Deployment
1. Build the project: `npm run build`
2. Copy 404.html: `copy public\404.html dist\404.html` (Windows) or `cp public/404.html dist/` (Unix)
3. Deploy to gh-pages branch using GitHub Actions or manual git commands

## Technical Details

### 404.html Logic
The 404.html file contains JavaScript that:
- Detects if the request is for an asset (JS, CSS, images)
- For assets: Returns 404 to let browser handle it
- For routes: Redirects to index.html with original path preserved
- Uses sessionStorage to maintain the original URL for client-side routing

### Asset Paths
All asset paths now use `/optimo-workforce/` base path to match:
- GitHub Pages repository structure
- Vite configuration in vite.config.ts

### Client-Side Routing
The main.tsx file now handles redirect paths from 404.html using sessionStorage to restore the original URL after redirect.

## Verification Steps
After deployment:
1. Visit: `https://taro8383.github.io/optimo-workforce/`
2. Test navigation to different routes
3. Verify no MIME type errors in Firefox console
4. Check that assets load correctly

## Troubleshooting
If you still see MIME type errors:
1. Clear browser cache
2. Check that 404.html exists in the gh-pages branch
3. Verify GitHub Pages is configured to use gh-pages branch
4. Check browser dev tools for any 404 errors on assets
