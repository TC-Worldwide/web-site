import React from 'react';

const PortfolioPerformance = ({ performance }: { performance: any }) => {
  return (
    <div>
      <h2>Portfolio Performance</h2>
      <p>Performance Metrics: {performance.metrics}</p>
      <p>Historical Data: {performance.historicalData}</p>
    </div>
  );
};

export default PortfolioPerformance;
