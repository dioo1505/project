// src/components/Dashboard/SalesByCountry.jsx
import React from "react";
import { salesByCountry } from "../../mock/dashboardData";

const SalesByCountry = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Sales by Country</h2>
      <p className="text-2xl font-bold mb-4">${(152000 / 1000).toFixed(1)}K</p>
      <img src="/assets/images/world-map.png" alt="World Map" className="mb-4" />
      <div className="space-y-4">
        {salesByCountry.map((country, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={country.flag} alt={`${country.country} flag`} className="w-5 h-5 mr-2" />
              <span>{country.country}</span>
            </div>
            <span>{country.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesByCountry;