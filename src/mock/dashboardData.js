// src/data/dashboardData.js

// Today's Stats ma'lumotlari
export const todayStats = {
  sales: 152000,
  cost: 99700,
  profit: 32100,
};

export const topSellingProducts = [
  { name: "Healthcare Erbology", sales: 13153, category: "In Accessories", rank: 1 },
  { name: "Makeup Lancome Rouge", sales: 10300, category: "In Accessories", rank: 2 },
  { name: "Lounge Puff Fabric Slipper", sales: 5300, category: "In Accessories", rank: 3 },
  { name: "Skincare Necessaire", sales: 1203, category: "In Accessories", rank: 4 },
  { name: "Skincare Soja CO", sales: 254, category: "In Accessories", rank: 5 },
];
// Sales Revenue (Line Chart ma'lumotlari)
export const salesRevenueData = {
  labels: ["20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
  datasets: [
    {
      label: "Sales",
      data: [50, 60, 70, 50, 80, 90, 60, 100, 80, 110, 90],
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
    },
    {
      label: "Revenue",
      data: [30, 40, 50, 30, 60, 70, 40, 80, 60, 90, 70],
      borderColor: "#F59E0B",
      backgroundColor: "#F59E0B",
    },
  ],
};

// Sales by Country
export const salesByCountry = [
  { country: "United States", value: 60, flag: "/assets/images/us.png" },
  { country: "Spain", value: 20, flag: "/assets/images/spain.png" },
  { country: "United Kingdom", value: 10, flag: "/assets/images/uk.png" },
  { country: "Germany", value: 5, flag: "/assets/images/germany.png" },
  { country: "Canada", value: 5, flag: "/assets/images/canada.png" },
];

// Cost Breakdown (Pie Chart ma'lumotlari)
export const costBreakdownData = [
  { id: 0, value: 485900, label: "Strategy", color: "#F59E0B" },
  { id: 1, value: 335600, label: "Outsourcing", color: "#10B981" },
  { id: 2, value: 145200, label: "Marketing", color: "#3B82F6" },
  { id: 3, value: 245800, label: "Other", color: "#E5E7EB" },
];