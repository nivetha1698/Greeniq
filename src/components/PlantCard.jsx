import React from "react";

const PlantCard = ({ name, img }) => {
  return (
    <div data-aos="zoom-in-up" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"/>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
};

export default PlantCard;
