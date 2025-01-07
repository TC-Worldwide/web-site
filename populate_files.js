import fs from 'fs';
import path from 'path';

// Define file content
const fileContents = {
  "src/components/layout/Header.tsx": `
import React from 'react';

export default function Header() {
  return <header className="header">Header Content</header>;
}`,
  "src/components/layout/Sidebar.tsx": `
import React from 'react';

export default function Sidebar() {
  return <aside className="sidebar">Sidebar Content</aside>;
}`,
  "src/utils/api.ts": `
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;`,
  // Add content for other files similarly
};

// Populate files
Object.keys(fileContents).forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, fileContents[filePath]);
  console.log(`Populated: ${filePath}`);
});
