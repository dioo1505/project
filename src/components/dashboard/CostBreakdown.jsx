// src/components/Dashboard/CostBreakdown.jsx
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { costBreakdownData } from "../../mock/dashboardData";

const CostBreakdown = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Cost Breakdown</h2>
      <p className="text-sm text-gray-500 mb-4">Based on selected period</p>
      <PieChart
        series={[
          {
            data: costBreakdownData,
            innerRadius: 30,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        width={300}
        height={200}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: 10,
          },
        }}
      />
    </div>
  );
};

export default CostBreakdown;