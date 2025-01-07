import React from 'react';
import InteractiveChart from '../InteractiveChart';

const RealTimeAnalytics = ({ analytics }: { analytics: any }) => {
  return (
    <div>
      <h2>Real-Time Analytics</h2>
      <InteractiveChart data={analytics} options={{
        responsive: true,
        maintainAspectRatio: false
      }} />
    </div>
  );
};

export default RealTimeAnalytics;
