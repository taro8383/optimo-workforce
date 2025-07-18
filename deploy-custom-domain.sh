#!/bin/bash

# Custom domain deployment script for Optimo Workforce
# This script builds and deploys the project for custom domain (optimoworkforce.com)

echo "🚀 Starting custom domain deployment..."

# Ensure we're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Fix asset paths for custom domain
echo "🔧 Fixing asset paths for custom domain..."
VITE_BASE_PATH='/' node fix-asset-paths.cjs

# Build the project with root base path for custom domain
echo "🔨 Building project for custom domain..."
VITE_BASE_PATH='/' npm run build

# Copy 404.html to dist folder
echo "📋 Copying 404.html to dist..."
cp public/404.html dist/

# Copy custom domain manifest
echo "📋 Copying custom domain manifest..."
cp public/manifest-custom-domain.json dist/manifest.json

# Add dist folder to git
echo "📁 Adding dist folder to git..."
git add dist/ -f

# Commit the build
echo "💾 Committing build..."
git commit -m "Deploy to custom domain - $(date)"

# Force push to gh-pages branch (handles diverged branches)
echo "🚀 Force pushing to gh-pages branch..."
git push origin --delete gh-pages 2>/dev/null || true
git subtree push --prefix dist origin gh-pages --force

echo "✅ Custom domain deployment complete!"
echo "🌐 Your site should be available at: https://optimoworkforce.com/"
