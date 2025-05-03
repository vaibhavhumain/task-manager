import React from "react";

function Filter({ setFilter, filter }) {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="mr-2">Filter by Status: </label>
      <select
        id="filter"
        className="p-2 border rounded"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
