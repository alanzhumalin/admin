import React from 'react';

const OrderManagement = () => {
  const orders = [
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Shipped' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white p-2 rounded">Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
