# GitHub Pages Deployment Guide

## Problem Solved
The MIME type error in Firefox was caused by GitHub Pages returning HTML content (index.html) instead of JavaScript files when accessing asset URLs. This happened because the project was missing a proper 404.html file for client-side routing.

## Custom Domain Issue Fixed
The custom domain deployment issue was caused by hardcoded base path `/optimo-workforce/` in Vite configuration. This has been resolved by making the base path configurable via environment variables.

## Solution Implemented
1. **Created `public/404.html`** - Custom 404 page that handles client-side routing for GitHub Pages
2. **Updated `src/main.tsx`** - Added redirect handling for GitHub Pages
3. **Updated `index.html`** - Fixed all asset paths to use `/optimo-workforce/` base path
4. **Updated `public/manifest.json`** - Already had correct paths
5. **Created deployment scripts** - Multiple deployment options for different domains
6. **Made base path configurable** - Using VITE_BASE_PATH environment variable

## Files Added/Modified
- `public/404.html` - Custom 404 page for GitHub Pages
- `src/main.tsx` - Added redirect handling
- `index.html` - Fixed asset paths
- `vite.config.ts` - Made base path configurable via environment variable
- `.env` - Environment configuration file
- `deploy.sh` - Unix deployment script for GitHub Pages
- `deploy.bat` - Windows deployment script for GitHub Pages
- `deploy-custom-domain.sh` - Unix deployment script for custom domain
- `deploy-custom-domain.bat` - Windows deployment script for custom domain
- `DEPLOYMENT_GUIDE.md` - This guide

## How to Deploy

### For GitHub Pages (taro8383.github.io/optimo-workforce/)

#### Option 1: Using Windows (deploy.bat)
1. Open Command Prompt or PowerShell
2. Run: `deploy.bat`
3. The script will:
   - Build the project with `/optimo-workforce/` base path
   - Copy 404.html to dist
   - Deploy to gh-pages branch

#### Option 2: Using Unix/Linux/Mac (deploy.sh)
1. Make the script executable: `chmod +x deploy.sh`
2. Run: `./deploy.sh`
3. The script will:
   - Build the project with `/optimo-workforce/` base path
   - Copy 404.html to dist
   - Deploy to gh-pages branch

### For Custom Domain (optimoworkforce.com)

#### Option 1: Using Windows (deploy-custom-domain.bat)
1. Open Command Prompt or PowerShell
2. Run: `deploy-custom-domain.bat`
3. The script will:
   - Build the project with `/` base path
   - Copy 404.html to dist
   - Deploy to gh-pages branch

#### Option 2: Using Unix/Linux/Mac (deploy-custom-domain.sh)
1. Make the script executable: `chmod +x deploy-custom-domain.sh`
2. Run: `./deploy-custom-domain.sh`
3. The script will:
   - Build the project with `/` base path
   - Copy 404.html to dist
   - Deploy to gh-pages branch

### Manual Deployment Options

#### For GitHub Pages
```bash
VITE_BASE_PATH='/optimo-workforce/' npm run build
cp public/404.html dist/
# Deploy to gh-pages branch
```

#### For Custom Domain
```bash
VITE_BASE_PATH='/' npm run build
cp public/404.html dist/
# Deploy to gh-pages branch
```

## Technical Details

### Environment Configuration
- **`.env`** - Default configuration for GitHub Pages
- **`VITE_BASE_PATH`** - Environment variable controlling the base path
- **GitHub Pages**: Use `/optimo-workforce/`
- **Custom Domain**: Use `/`

### 404.html Logic
The 404.html file contains JavaScript that:
- Detects if the request is for an asset (JS, CSS, images)
- For assets: Returns 404 to let browser handle it
- For routes: Redirects to index.html with original path preserved
- Uses sessionStorage to maintain the original URL for client-side routing

### Asset Paths
Asset paths are now dynamically configured based on:
- Environment variable `VITE_BASE_PATH`
- Defaults to `/optimo-workforce/` if not specified
- Can be overridden for custom domain deployments

### Client-Side Routing
The main.tsx file now handles redirect paths from 404.html using sessionStorage to restore the original URL after redirect.

## Verification Steps

### After GitHub Pages Deployment
1. Visit: `https://taro8383.github.io/optimo-workforce/`
2. Test navigation to different routes
3. Verify no MIME type errors in Firefox console
4. Check that assets load correctly

### After Custom Domain Deployment
1. Visit: `https://optimoworkforce.com/`
2. Test navigation to different routes
3. Verify no 404 errors for assets
4. Check that assets load correctly from root path

## Troubleshooting

### Common Issues
1. **Assets not loading on custom domain**: Ensure you're using the custom domain deployment scripts
2. **404 errors on GitHub Pages**: Ensure you're using the GitHub Pages deployment scripts
3. **MIME type errors**: Clear browser cache and check that 404.html exists in gh-pages branch
4. **GitHub Pages not updated**: Verify GitHub Pages is configured to use gh-pages branch

### Quick Fixes
- **Clear browser cache** after deployment
- **Check browser dev tools** for any 404 errors on assets
- **Verify GitHub Pages settings** in repository settings
- **Check environment variable** is set correctly during build

### Environment Variable Usage
You can also manually set the base path:
```bash
# For GitHub Pages
export VITE_BASE_PATH='/optimo-workforce/' && npm run build

# For Custom Domain
export VITE_BASE_PATH='/' && npm run build
```
