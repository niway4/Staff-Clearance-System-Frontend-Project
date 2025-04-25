import React, { useState } from "react";
import Button from "../ui/Button";
import { Search } from "lucide-react";

const SearchBar = ({ searchFunction,filterParams, placeholder = "Search..." }) => {
  const [tobeSearched, setTobeSearched] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleSearch = (e) => {
    setTobeSearched(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchFunction(tobeSearched, selectedFilter);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center  mb-4">
      <div className="flex items-center space-x-2 relative">
        <span className="text-lg font-bold text-gray-700">Filter:</span>
        <Button variant="outline" onClick={toggleDropdown}>
          {selectedFilter} 
        </Button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-1 w-40 bg-white border border-gold rounded shadow-lg z-10">
            {filterParams.map(
              (filter) => (
                <button
                  key={filter}
                  className="block w-full text-left px-4 py-2 hover:bg-titleBarColor"
                  onClick={() => handleFilterSelect(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        )}
      </div>
      <div className="relative w-full max-w-sm">
        <input
          onKeyDown={handleKeyDown}
          onChange={handleSearch}
          className="border border-gray-300 rounded pl-3 pr-8 py-2  text-sm w-full"
          placeholder={placeholder}
        />
        <Search
          cursor={"pointer"}
          onClick={() => searchFunction(tobeSearched, selectedFilter)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-sideBarColor rounded rounded-l-none  w-8 h-9 p-1 hover:bg-gold hover:text-black transition duration-200"
          size={18}
        />
      </div>
    </div>
  );
};

export default SearchBar;
