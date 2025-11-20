import React from "react";

const CategoryCard = ({ name, img, onClick }) => {
  return (
    <div
      onClick={onClick} // optional: navigate to category page
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <p className="font-semibold text-green-700">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
