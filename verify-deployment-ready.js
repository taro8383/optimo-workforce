#!/usr/bin/env node

/**
 * Verify Deployment Readiness
 * This script checks if all paths are correctly configured for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying deployment readiness...\n');

// Check if hardcoded paths exist
const filesToCheck = [
  'src/components/HeroSection.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/ProblemSolutionSection.tsx',
  'src/components/SocialProofSection.tsx',
  'src/components/GlobalIntelligenceSection.tsx',
  'src/components/AboutPage.tsx',
  'index.html'
];

let hasHardcodedPaths = false;

filesToCheck.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('/optimo-workforce/')) {
      console.log(`❌ ${filePath} still contains hardcoded paths`);
      hasHardcodedPaths = true;
    } else {
      console.log(`✅ ${filePath} - No hardcoded paths found`);
    }
  }
});

// Check vite config
const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
if (viteConfig.includes('base:')) {
  console.log('✅ vite.config.ts - Base path is configurable');
} else {
  console.log('❌ vite.config.ts - Base path configuration missing');
}

// Check deployment scripts
const deploymentScripts = [
  'deploy-custom-domain.sh',
  'deploy-custom-domain.bat',
  'deploy.sh',
  'deploy.bat'
];

deploymentScripts.forEach(script => {
  if (fs.existsSync(script)) {
    console.log(`✅ ${script} - Deployment script ready`);
  } else {
    console.log(`❌ ${script} - Missing deployment script`);
  }
});

console.log('\n📋 Summary:');
if (!hasHardcodedPaths) {
  console.log('✅ All hardcoded paths have been removed');
  console.log('✅ Ready for custom domain deployment');
  console.log('\n🚀 Next step: Run the deployment script');
  console.log('   Windows: deploy-custom-domain.bat');
  console.log('   Unix/Mac: ./deploy-custom-domain.sh');
} else {
  console.log('❌ Some hardcoded paths remain - run fix-asset-paths.cjs');
}
