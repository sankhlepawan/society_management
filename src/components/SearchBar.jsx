import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search residents..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/3 p-2 border rounded-lg shadow-sm mb-2"
    />
  );
};

export default SearchBar;
