@echo off
echo 🚀 Starting custom domain deployment...

REM Ensure we're on the main branch
git checkout main

REM Pull latest changes
git pull origin main

REM Install dependencies if needed
echo 📦 Installing dependencies...
call npm install

REM Fix asset paths for custom domain
echo 🔧 Fixing asset paths for custom domain...
set VITE_BASE_PATH=/
node fix-asset-paths.cjs

REM Update package.json for custom domain
echo 🏠 Updating package.json for custom domain...
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.homepage = 'https://optimoworkforce.com';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

REM Build the project with root base path for custom domain
echo 🔨 Building project for custom domain...
set VITE_BASE_PATH=/
call npm run build

REM Deploy to gh-pages branch
echo 🚀 Deploying to gh-pages branch...
call npm run deploy

REM Reset package.json to original
echo 🔄 Resetting package.json...
git checkout package.json

echo ✅ Custom domain deployment complete!
echo 🌐 Your site should be available at: https://optimoworkforce.com/
echo ⏱️  It may take a few minutes for GitHub Pages to update
pause
