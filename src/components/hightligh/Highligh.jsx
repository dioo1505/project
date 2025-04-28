// src/components/hightligh/Highligh.jsx
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webUsageStats";

export default function PieActiveArc() {
  return (
    <div className="flex justify-center">
      <PieChart
        series={[
          {
            data: desktopOS,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
            innerRadius: 40, // Ichki radiusni kattaroq qilish
            outerRadius: 80, // Tashqi radiusni sozlash
            paddingAngle: 5, // Segmentlar orasida bo'shliq qo'shish
            cornerRadius: 0, // Burchaklarni yumaloqlashtirmaslik
            colors: ["#8B5CF6", "#3B82F6", "#10B981"], // LinkedIn (purple), Facebook (blue), Instagram (green)
          },
        ]}
        height={250}
        width={400} // Kenglikni biroz kattaroq qilish
        margin={{ top: 10, bottom: 30, left: 20, right: 20 }} // Pie chart atrofida bo'shliq
        slotProps={{
          legend: {
            direction: "row", // Legendni gorizontal joylashtirish
            position: { vertical: "bottom", horizontal: "middle" }, // Legendni pastda joylashtirish
            padding: -8,
            labelStyle: {
              fontSize: 14,
              fill: "#1F2937", // Tarmoq nomlari uchun qora rang
            },
            itemMarkWidth: 12, // Belgilar kengligi
            itemMarkHeight: 12, // Belgilar balandligi
            markGap: 5, // Belgi va matn orasidagi bo'shliq
            itemGap: 22, // Elementlar orasidagi bo'shliq
          },
        }}
      />
    </div>
  );
}