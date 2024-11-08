import React, { useState } from "react";

const PaginatedList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages needed
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      {/* Display the current items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li> // Replace with your custom rendering logic
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => paginate(num + 1)}
            className={currentPage === num + 1 ? "active" : ""}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedList;
