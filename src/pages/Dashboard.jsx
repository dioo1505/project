// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import TodayStats from "../components/dashboard/Todaystats";
import TopSelling from "../components/dashboard/TopSelling";
import SalesRevenue from "../components/dashboard/SalesRevenue";
import SalesByCountry from "../components/dashboard/SalesByCountry";
import CostBreakdown from "../components/dashboard/CostBreakdown";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Stats</h2>
        <TodayStats />
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <SalesRevenue />
          </div>
          <div>
            <TopSelling />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
            <SalesByCountry />
          </div>
          <div>
            <CostBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;