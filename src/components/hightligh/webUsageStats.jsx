// src/components/hightligh/webUsageStats.js
export const desktopOS = [
  { id: 0, value: 30, label: "LinkedIn" }, // Purple
  { id: 1, value: 30, label: "Facebook" }, // Blue
  { id: 2, value: 55, label: "Instagram" }, // Green
];

export const valueFormatter = (item) => `${item.value}%`;