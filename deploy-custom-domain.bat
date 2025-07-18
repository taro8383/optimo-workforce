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

REM Build the project with root base path for custom domain
echo 🔨 Building project for custom domain...
set VITE_BASE_PATH=/
call npm run build

REM Copy 404.html to dist folder
echo 📋 Copying 404.html to dist...
copy public\404.html dist\404.html

REM Copy custom domain manifest
echo 📋 Copying custom domain manifest...
copy public\manifest-custom-domain.json dist\manifest.json

REM Add dist folder to git
echo 📁 Adding dist folder to git...
git add dist\ -f

REM Commit the build
echo 💾 Committing build...
git commit -m "Deploy to custom domain - %date% %time%"

REM Push to gh-pages branch
echo 🚀 Pushing to gh-pages branch...
git subtree push --prefix dist origin gh-pages

echo ✅ Custom domain deployment complete!
echo 🌐 Your site should be available at: https://optimoworkforce.com/
pause
