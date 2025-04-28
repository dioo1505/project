// src/components/Layout/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">E-Commerce</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">SYNC Data</button>
    </div>
  );
};

export default Navbar;