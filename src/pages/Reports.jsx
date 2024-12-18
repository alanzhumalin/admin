import React from 'react';

const ReportsAndAnalytics = () => {
  // Placeholder data for reports (you can replace this with API calls later)
  const salesReport = [
    { month: 'January', sales: 1000 },
    { month: 'February', sales: 1500 },
    { month: 'March', sales: 1200 },
  ];

  const customerActivity = [
    { user: 'John Doe', lastLogin: '2024-12-01', activity: 'Purchased product' },
    { user: 'Jane Smith', lastLogin: '2024-12-05', activity: 'Added item to cart' },
  ];

  const inventorySummary = [
    { product: 'Laptop', stock: 20 },
    { product: 'Smartphone', stock: 50 },
    { product: 'Headphones', stock: 100 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports and Analytics</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sales Report</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Month</th>
              <th className="border border-gray-300 px-4 py-2">Sales</th>
            </tr>
          </thead>
          <tbody>
            {salesReport.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.month}</td>
                <td className="border border-gray-300 px-4 py-2">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Activity</h2>
        <ul>
          {customerActivity.map((activity, index) => (
            <li key={index} className="mb-2">
              <strong>{activity.user}</strong> - Last Login: {activity.lastLogin} | Activity: {activity.activity}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Inventory Summary</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {inventorySummary.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.product}</td>
                <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
