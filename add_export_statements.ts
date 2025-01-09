import fs from 'fs';
import path from 'path';

// Paths to all files
const files: string[] = [
  './src/App.tsx',
  './src/components/InteractiveChart.tsx',
  // ...existing code...
  './src/utils/constants.ts',
];

// Add `export {};` to all files
files.forEach((file) => {
  const filePath: string = path.resolve(file);
  if (fs.existsSync(filePath)) {
    const content: string = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('export {};')) {
      fs.appendFileSync(filePath, '\n\nexport {};');
      console.log(`Added 'export {};' to ${file}`);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
});
