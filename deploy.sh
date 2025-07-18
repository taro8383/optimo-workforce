#!/bin/bash

# GitHub Pages deployment script for Optimo Workforce
# This script builds and deploys the project to GitHub Pages

echo "🚀 Starting GitHub Pages deployment..."

# Ensure we're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Fix asset paths for GitHub Pages
echo "🔧 Fixing asset paths for GitHub Pages..."
VITE_BASE_PATH='/optimo-workforce/' node fix-asset-paths.cjs

# Build the project with GitHub Pages base path
echo "🔨 Building project for GitHub Pages..."
VITE_BASE_PATH='/optimo-workforce/' npm run build

# Copy 404.html to dist folder
echo "📋 Copying 404.html to dist..."
cp public/404.html dist/

# Copy GitHub Pages manifest
echo "📋 Copying GitHub Pages manifest..."
cp public/manifest-github-pages.json dist/manifest.json

# Add dist folder to git
echo "📁 Adding dist folder to git..."
git add dist/ -f

# Commit the build
echo "💾 Committing build..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git subtree push --prefix dist origin gh-pages

echo "✅ GitHub Pages deployment complete!"
echo "🌐 Your site should be available at: https://taro8383.github.io/optimo-workforce/"
