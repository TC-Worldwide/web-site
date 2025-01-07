export {};

export const getChartOptions = (isDarkTheme: boolean) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: isDarkTheme ? 'white' : 'black'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: isDarkTheme ? 'white' : 'black'
      }
    },
    y: {
      ticks: {
        color: isDarkTheme ? 'white' : 'black'
      }
    }
  }
});