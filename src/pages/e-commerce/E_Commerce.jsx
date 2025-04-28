// src/pages/e-commerce/E_Commerce.jsx
import React from "react";
import TodayStats from "../../components/dashboard/TodayStats";
import TopSelling from "../../components/dashboard/TopSelling";
import SalesRevenue from "../../components/dashboard/SalesRevenue";
import SalesByCountry from "../../components/dashboard/SalesByCountry";
import CostBreakdown from "../../components/dashboard/CostBreakdown";
import { GrRotateLeft } from "react-icons/gr";


const E_Commerce = () => {
  return (
    <div className="p-6">
      {/* Sarlavha va tugma */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[33.3px] font-jakarta leading-[40px] font-bold text-[#111927]">E-Commerce</h1>
        <div className='flex items-center w-[132.8px] h-[40.5px] rounded-[12px] bg-[#6366F1] justify-center gap-[8px]'>
        <GrRotateLeft className='text-[#fff]'/>
        <button className="text-[14px] text-[#fff] leading-[24.5px] font-semibold font-inter">
          SYNC Data
        </button>
        </div>
      </div>

      {/* Dashboard bo‘limlari */}
     <div className='flex gap-[32px]'>
     <div className='w-[778.66px] h-[229.96px] rounded-[20px] shadow-md bg-white py-[31.2px] px-[24px] mb-[32px]'>
      <h2 className="text-[16.7px] leading-[20px] font-bold mb-4 text-[#111927]">Today's Stats</h2>
      <TodayStats />
      </div>
      <div>
          <TopSelling />
        </div>
     </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <SalesRevenue />
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
  );
};

export default E_Commerce;