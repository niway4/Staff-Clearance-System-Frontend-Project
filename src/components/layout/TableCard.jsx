import React, { useState } from "react";
import Button from "../ui/Button"; // Adjust the path if necessary

const TableCard = ({ header, inputData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(inputData.length / itemsPerPage);

  // Get current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inputData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <table className="w-full text-left border-black-300 border-2 border-gray-500">
        <thead>
          <tr className="bg-sideBarColor text-white text-lg font-semibold">
            {header.map((h, index) => (
              <th key={index} className="py-2 px-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((inp, index) => (
            <tr key={index} className="even:bg-evenTableRowColor">
              {header.map((key, idx) => (
                <td key={idx} className="py-1 px-2">
                  {key === "Action" ? (
                    <Button className="bg-gold hover:bg-yellow-500 text-white px-4 py-1 rounded">
                      {inp[key.toLowerCase()]} {/* Assuming action is stored in a lowercase key */}
                    </Button>
                  ) : (
                    inp[key.toLowerCase().replace(/\s+/g, '')] // Accessing the property dynamically
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableCard;