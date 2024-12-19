import React from 'react';

const OrderDetails = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="border p-2 rounded bg-gray-100">
          <div>
            <span className="font-semibold">{item.productName}</span>
            <br />
            <span className="text-gray-500 text-sm">
              {item.quantity} pcs x {item.unitPrice} ₸ = {item.totalPrice} ₸
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderDetails;
