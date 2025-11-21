import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search plants, pots, seeds..."
        className="w-full p-4 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"/>
      <button type="submit" className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
