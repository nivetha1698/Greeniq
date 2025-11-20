import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="text-green-700 font-bold">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Quantity input */}
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, e.target.value)}
          className="w-16 p-1 border rounded text-center"
        />

        {/* Remove button */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
