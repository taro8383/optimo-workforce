@echo off
echo 🚀 Starting GitHub Pages deployment...

REM Ensure we're on the main branch
git checkout main

REM Pull latest changes
git pull origin main

REM Install dependencies if needed
echo 📦 Installing dependencies...
call npm install

REM Build the project
echo 🔨 Building project...
call npm run build

REM Copy 404.html to dist folder
echo 📋 Copying 404.html to dist...
copy public\404.html dist\404.html

REM Add dist folder to git
echo 📁 Adding dist folder to git...
git add dist\ -f

REM Commit the build
echo 💾 Committing build...
git commit -m "Deploy to GitHub Pages - %date% %time%"

REM Push to gh-pages branch
echo 🚀 Pushing to gh-pages branch...
git subtree push --prefix dist origin gh-pages

echo ✅ Deployment complete!
echo 🌐 Your site should be available at: https://taro8383.github.io/optimo-workforce/
pause
