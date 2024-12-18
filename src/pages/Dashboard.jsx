import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-lg">100</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Total Orders</h2>
          <p className="text-lg">50</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Low Inventory</h2>
          <p className="text-lg">5</p>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/products" className="text-blue-600 hover:underline">Go to Product Management</Link>
      </div>
    </div>
  );
};

export default Dashboard;
