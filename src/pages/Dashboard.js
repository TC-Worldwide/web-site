import React, { useEffect, useState } from "react";
import axios from "axios";
// ...existing code...

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [fundPerformance, setFundPerformance] = useState(null);
  const [wireTransfers, setWireTransfers] = useState(null);

  useEffect(() => {
    // Fetch real-time analytics
    axios.get("/api/analytics").then((response) => setAnalytics(response.data));
    // Fetch fund performance data
    axios
      .get("/api/fund-performance")
      .then((response) => setFundPerformance(response.data));
    // Fetch wire transfer tracking data
    axios
      .get("/api/wire-transfers")
      .then((response) => setWireTransfers(response.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Analytics</h2>
        {analytics ? (
          <pre>{JSON.stringify(analytics, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
      <div>
        <h2>Fund Performance</h2>
        {fundPerformance ? (
          <pre>{JSON.stringify(fundPerformance, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
      <div>
        <h2>Wire Transfers</h2>
        {wireTransfers ? (
          <pre>{JSON.stringify(wireTransfers, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Dashboard;
