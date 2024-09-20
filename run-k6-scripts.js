const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Directory containing k6 scripts
const scriptDir = path.join(__dirname, 'K6 performance');

// Get all .js files in the directory
const files = fs.readdirSync(scriptDir).filter(file => file.endsWith('.js'));

if (files.length === 0) {
  console.error('No .js files found in the K6 performance directory.');
  process.exit(1);
}

files.forEach(file => {
  const filePath = path.join(scriptDir, file);
  try {
    console.log(`Running k6 script: ${filePath}`);
    execSync(`k6 run "${filePath}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running script ${filePath}:`, error.message);
  }
});
