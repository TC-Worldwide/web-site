import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

const InteractiveChart = ({ data, options }: { data: any, options: any }) => {
  const [chartData, setChartData] = useState(data);

  const fetchChartData = async () => {
    // Implement data fetching logic
    const fetchedData = await fetch('/api/chart-data').then(res => res.json());
    setChartData(fetchedData);
  };

  const updateChart = (newData: number[]) => {
    setChartData((prevData: ChartData) => ({
      ...prevData,
      datasets: [
      {
        ...prevData.datasets[0],
        data: newData,
      },
      ],
    }));
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  // Example usage of updateChart function
  useEffect(() => {
    const newData = [10, 20, 30, 40, 50];
    updateChart(newData);
  }, []);

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default InteractiveChart;
