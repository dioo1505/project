// src/components/Dashboard/TodayStats.jsx
import React from "react";
import { todayStats } from "../../mock/dashboardData";
import box from "../../assets/iconly-glass-chart.svg.png"
import box1 from "../../assets/iconly-glass-discount.svg.png"
import box2 from "../../assets/div.MuiBox-root3.png"
import TopSelling from './TopSelling';

const TodayStats = () => {
  return (
    <div className='flex justify-between'>
      <div className="grid grid-cols-3 gap-4 mb-6">
      <div
        className="bg-[#FEF3F2] py-[32px] rounded-[20px] flex items-center gap-[16px] justify-center"
        style={{ width: "227px", height: "114px" }}
      >
        <img className='w-[48px] h-[47px]' src={box} alt="image" />
        <div className='flex flex-col gap-[2.77px]'>
        <h3 className="text-gray-500 text-sm">Sales</h3>
        <p className="text-[23.3px] font-jakarta font-bold leading-[28px] text-[#111927]">
          ${(todayStats.sales / 1000).toFixed(1)}k
        </p>
        </div>
      </div>
      <div
        className="bg-[#FFFAEB] py-[32px] rounded-[20px] flex items-center gap-[16px] justify-center"
        style={{ width: "227px", height: "114px" }}
      >
        <img className='w-[48px] h-[47px]' src={box1} alt="image" />
        <div className='flex flex-col gap-[2.77px]'>
        <h3 className="text-gray-500 text-sm">Cost</h3>
        <p className="text-[23.3px] font-jakarta font-bold leading-[28px] text-[#111927]">
          ${(todayStats.cost / 1000).toFixed(1)}k
        </p>
        </div>
      </div>
      <div
        className="bg-[#F0FDF9] py-[32px] rounded-[20px] flex items-center gap-[16px] justify-center"
        style={{ width: "227px", height: "114px" }}
      >
        <img className='w-[48px] h-[47px]' src={box2} alt="image" />
        <div className='flex flex-col gap-[2.77px]'>
        <h3 className="text-gray-500 text-sm">Profit</h3>
        <p className="text-[23.3px] font-jakarta font-bold leading-[28px] text-[#111927]">
          ${(todayStats.profit / 1000).toFixed(1)}k
        </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default TodayStats;