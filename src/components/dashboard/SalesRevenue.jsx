// src/components/Dashboard/SalesRevenue.jsx
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { salesRevenueData } from "../../mock/dashboardData";

const SalesRevenue = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Sales Revenue</h2>
      <LineChart
        xAxis={[{ data: salesRevenueData.labels }]}
        series={salesRevenueData.datasets.map((dataset) => ({
          data: dataset.data,
          label: dataset.label,
          color: dataset.borderColor,
        }))}
        width={600}
        height={300}
      />
    </div>
  );
};

export default SalesRevenue;