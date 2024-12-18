import React from 'react';

const InventoryManagement = () => {
  const inventory = [
    { name: 'Product A', stock: 30 },
    { name: 'Product B', stock: 5 },  // Low stock
    { name: 'Product C', stock: 100 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left">Product</th>
            <th className="p-2 text-left">Stock Level</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className={item.stock <= 10 ? 'bg-red-100' : ''}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.stock}</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white p-2 rounded">Update Stock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
