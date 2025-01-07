import fs from 'fs';
import path from 'path';

// Paths to all files
const files = [
  './src/App.tsx',
  './src/components/InteractiveChart.tsx',
  './src/components/layout/FloatingPanel.tsx',
  './src/components/layout/Footer.tsx',
  './src/components/VirtualBoardroom.tsx',
  './src/components/widgets/InvestmentSummary.tsx',
  './src/components/widgets/PortfolioPerformance.tsx',
  './src/components/widgets/RealTimeAnalytics.tsx',
  './src/components/widgets/WireTransferStatus.tsx',
  './src/contexts/AuthContext.tsx',
  './src/contexts/DataContext.tsx',
  './src/contexts/ThemeContext.tsx',
  './src/hooks/useAuth.ts',
  './src/hooks/useFetch.ts',
  './src/hooks/useTheme.ts',
  './src/index.tsx',
  './src/pages/Dashboard.tsx',
  './src/pages/Login.tsx',
  './src/pages/MarketTrends.tsx',
  './src/pages/Portfolio.tsx',
  './src/pages/Reports.tsx',
  './src/pages/Settings.tsx',
  './src/reportWebVitals.ts',
  './src/utils/chartUtils.ts',
  './src/utils/constants.ts',
];

// Add `export {};` to all files
files.forEach((file) => {
  const filePath = path.resolve(file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('export {};')) {
      fs.appendFileSync(filePath, '\n\nexport {};');
      console.log(`Added 'export {};' to ${file}`);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
});