import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    genre: "",
    author: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="p-4 bg-gray-100">
      <h3 className="text-lg font-bold mb-2">Filter Books</h3>
      <div className="flex gap-4">
        <select
          name="genre"
          value={filters.genre}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="science">Science</option>
        </select>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={filters.author}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="availability"
          value={filters.availability}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="borrowed">Borrowed</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;