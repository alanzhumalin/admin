import React from 'react';
import OrderRow from './OrderRow';

const OrderList = ({ orders, handleConfirmOrder, processingOrderId }) => {
  if (orders.length === 0) {
    return <p className="text-center text-gray-500">No orders found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border w-1/6">Order ID</th>
            <th className="p-2 border w-1/4">User ID</th>
            <th className="p-2 border w-1/6">Order Date</th>
            <th className="p-2 border w-1/6">Total Price</th>
            <th className="p-2 border w-1/6">Items</th>
            <th className="p-2 border w-1/6">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              handleConfirmOrder={handleConfirmOrder}
              processingOrderId={processingOrderId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
