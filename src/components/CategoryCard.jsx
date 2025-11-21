import React from "react";

const CategoryCard = ({ name, img, description, sunlight, water, soil }) => {
  return (
    <div data-aos="zoom-in" className="bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={img} alt={name} className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"/>
      <div className="p-4">
        <p className="text-lg font-semibold text-green-700">{name}</p>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

       <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
        <li>
          <span className="font-semibold">Sunlight:</span>
          <span className="text-gray-500"> {sunlight}</span>
        </li>
        <li>
          <span className="font-semibold">Water:</span>
          <span className="text-gray-500"> {water}</span>
        </li>
        <li>
          <span className="font-semibold">Soil:</span>
          <span className="text-gray-500"> {soil}</span>
        </li>
       </ul>
      </div>
    </div>
  );
};

export default CategoryCard;
