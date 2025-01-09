import React from 'react';

interface SummaryProps {
  totalInvestments: number;
  netProfit: number;
  openOpportunities: number;
}

const InvestmentSummary = ({ summary }: { summary: SummaryProps }) => {
  return (
    <div>
      <h2>Investment Summary</h2>
      <p>Total Investments: {summary.totalInvestments}</p>
      <p>Net Profit: {summary.netProfit}</p>
      <p>Open Opportunities: {summary.openOpportunities}</p>
    </div>
  );
};

export default InvestmentSummary;
