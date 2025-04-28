// src/components/Dashboard/TopSelling.jsx
import React from "react";
import { topSellingProducts } from "../../mock/dashboardData";
import { IoIosArrowForward } from "react-icons/io";

const TopSelling = () => {
  return (
    <div className="bg-white px-[24px] py-[32px] rounded-lg shadow-md w-full">
      <h2 className="text-lg font-bold mb-4 text-gray-900">Top Selling Products</h2>
      <div className="space-y-4">
        {topSellingProducts.map((product) => (
          <div key={product.rank} className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{product.sales.toLocaleString()} in sales</p>
              <p className="text-sm text-gray-500">#{product.rank}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 flex items-center gap-1 text-blue-500">
        See All <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TopSelling;