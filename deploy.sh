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

# Build the project
echo "🔨 Building project..."
npm run build

# Copy 404.html to dist folder
echo "📋 Copying 404.html to dist..."
cp public/404.html dist/

# Add dist folder to git
echo "📁 Adding dist folder to git..."
git add dist/ -f

# Commit the build
echo "💾 Committing build..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git subtree push --prefix dist origin gh-pages

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://taro8383.github.io/optimo-workforce/"
