import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface InteractiveChartProps {
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;
}

const InteractiveChart = ({ data, options }: InteractiveChartProps) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>(data);

  const fetchChartData = async () => {
    // Implement data fetching logic
    const fetchedData: ChartData<'line'> = await fetch('/api/chart-data').then(res => res.json());
    setChartData(fetchedData);
  };

  const updateChart = (newData: number[]) => {
    setChartData((prevData: ChartData<'line'>) => ({
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
