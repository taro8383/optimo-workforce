#!/bin/bash

# Correct custom domain deployment script for Optimo Workforce
# This script uses npm run deploy with proper base path configuration

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

# Update package.json for custom domain
echo "🏠 Updating package.json for custom domain..."
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.homepage = 'https://optimoworkforce.com';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Build the project with root base path for custom domain
echo "🔨 Building project for custom domain..."
VITE_BASE_PATH='/' npm run build

# Deploy to gh-pages branch
echo "🚀 Deploying to gh-pages branch..."
npm run deploy

# Reset package.json to original
echo "🔄 Resetting package.json..."
git checkout package.json

echo "✅ Custom domain deployment complete!"
echo "🌐 Your site should be available at: https://optimoworkforce.com/"
echo "⏱️  It may take a few minutes for GitHub Pages to update"
