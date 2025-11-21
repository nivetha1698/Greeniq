import React from "react";

const CategoryCard = ({ name, img, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img src={img} alt={name} className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"/>
      <div className="p-3 text-center">
        <p className="font-semibold text-green-700">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
