import React from 'react';

interface PerformanceProps {
  metrics: string;
  historicalData: string;
}

interface PortfolioPerformanceProps {
  performance: PerformanceProps;
}

const PortfolioPerformance = ({ performance }: PortfolioPerformanceProps) => {
  return (
    <div>
      <h2>Portfolio Performance</h2>
      <p>Performance Metrics: {performance.metrics}</p>
      <p>Historical Data: {performance.historicalData}</p>
    </div>
  );
};

export default PortfolioPerformance;
