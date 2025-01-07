import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { getChartOptions } from '../utils/chartUtils';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    data: number[];
  }[];
}

const renderContent = (
  isLoading: boolean,
  error: string | null,
  chartData: ChartData | null,
  options: any,
  fetchChartData: () => void,
  setSelectedDataset: (value: string) => void,
  selectedDataset: string,
  isDarkTheme: boolean,
  setIsDarkTheme: (value: boolean) => void
) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chartData) return <div>No data available</div>;

  return (
    <div>
      <h2>Interactive Chart</h2>
      <select onChange={(e) => setSelectedDataset(e.target.value)} value={selectedDataset}>
        <option value="dataset1">Dataset 1</option>
        <option value="dataset2">Dataset 2</option>
        <option value="dataset3">Dataset 3</option>
      </select>
      <button onClick={fetchChartData}>Refresh Data</button>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Toggle {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
      <div id="chart-container" className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

const updateChart = (newData: ChartData, setChartData: React.Dispatch<React.SetStateAction<ChartData | null>>) => {
  setChartData(newData);
};

const InteractiveChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDataset, setSelectedDataset] = useState<string>('dataset1');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const fetchChartData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.example.com/chart-data?dataset=${selectedDataset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch chart data');
      }
      const newData: ChartData = await response.json();
      updateChart(newData, setChartData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [selectedDataset]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  const options = getChartOptions(isDarkTheme);

  return renderContent(
    isLoading,
    error,
    chartData,
    options,
    fetchChartData,
    setSelectedDataset,
    selectedDataset,
    isDarkTheme,
    setIsDarkTheme
  );
};

export default InteractiveChart;
