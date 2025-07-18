#!/bin/bash

# Final deployment script that works for both GitHub Pages and Custom Domain
# This uses relative paths and proper GitHub Pages configuration

echo "🚀 Starting deployment..."

# Ensure we're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Determine deployment type
if [[ "$1" == "custom" ]]; then
    echo "🎯 Deploying for custom domain: optimoworkforce.com"
    npm pkg set homepage="https://optimoworkforce.com"
    BASE_PATH="./"
else
    echo "🎯 Deploying for GitHub Pages: taro8383.github.io/optimo-workforce"
    npm pkg set homepage="https://taro8383.github.io/optimo-workforce"
    BASE_PATH="./"
fi

# Build with relative paths
echo "🔨 Building project..."
npm run build

# Deploy to gh-pages
echo "🚀 Deploying to gh-pages branch..."
npm run deploy

# Reset package.json
git checkout package.json

echo "✅ Deployment complete!"
if [[ "$1" == "custom" ]]; then
    echo "🌐 Custom domain: https://optimoworkforce.com/"
else
    echo "🌐 GitHub Pages: https://taro8383.github.io/optimo-workforce/"
fi
