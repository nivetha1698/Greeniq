import React from "react";

const PlantCard = ({ name, price, img }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"/>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-green-700 font-bold mt-1">${price}</p>
        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
