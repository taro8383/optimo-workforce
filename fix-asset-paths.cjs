#!/usr/bin/env node

/**
 * Fix Asset Paths Script
 * This script replaces all hardcoded /optimo-workforce/ paths with dynamic ones
 * based on the VITE_BASE_PATH environment variable
 */

const fs = require('fs');
const path = require('path');

// Get the base path from environment or use default
const basePath = process.env.VITE_BASE_PATH || '/';

// Files to process
const filesToProcess = [
  'src/components/HeroSection.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/ProblemSolutionSection.tsx',
  'src/components/SocialProofSection.tsx',
  'src/components/GlobalIntelligenceSection.tsx',
  'src/components/AboutPage.tsx'
];

console.log(`🔧 Fixing asset paths with base path: ${basePath}`);

filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all hardcoded /optimo-workforce/ paths
    const originalContent = content;
    content = content.replace(/\/optimo-workforce\/assets\//g, `${basePath}assets/`);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
    }
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('🎉 Asset path fixing complete!');
