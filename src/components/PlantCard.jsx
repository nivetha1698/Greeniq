import React from "react";

const PlantCard = ({ plant, onAddToCart, onWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Plant Image */}
      <img src={plant?.img} alt={plant?.name} className="w-full h-48 object-cover"/>

      {/* Plant Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{plant?.name}</h3>
          <p className="text-green-700 font-bold mt-1">${plant?.price}</p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex space-x-2">
          <button onClick={() => onAddToCart(plant)} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Add to Cart
          </button>

          {onWishlist && (
            <button onClick={() => onWishlist(plant)} className="w-12 bg-white border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
              ♥
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
