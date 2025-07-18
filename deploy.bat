@echo off
echo 🚀 Starting GitHub Pages deployment...

REM Ensure we're on the main branch
git checkout main

REM Pull latest changes
git pull origin main

REM Install dependencies if needed
echo 📦 Installing dependencies...
call npm install

REM Fix asset paths for GitHub Pages
echo 🔧 Fixing asset paths for GitHub Pages...
set VITE_BASE_PATH=/optimo-workforce/
node fix-asset-paths.cjs

REM Build the project with GitHub Pages base path
echo 🔨 Building project for GitHub Pages...
set VITE_BASE_PATH=/optimo-workforce/
call npm run build

REM Copy 404.html to dist folder
echo 📋 Copying 404.html to dist...
copy public\404.html dist\404.html

REM Copy GitHub Pages manifest
echo 📋 Copying GitHub Pages manifest...
copy public\manifest-github-pages.json dist\manifest.json

REM Add dist folder to git
echo 📁 Adding dist folder to git...
git add dist\ -f

REM Commit the build
echo 💾 Committing build...
git commit -m "Deploy to GitHub Pages - %date% %time%"

REM Push to gh-pages branch
echo 🚀 Pushing to gh-pages branch...
git subtree push --prefix dist origin gh-pages

echo ✅ GitHub Pages deployment complete!"
echo 🌐 Your site should be available at: https://taro8383.github.io/optimo-workforce/
pause
