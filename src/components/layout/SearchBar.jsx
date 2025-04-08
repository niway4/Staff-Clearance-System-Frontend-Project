// SearchBar.js
import React from "react";
import Button from "../ui/Button";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Button variant="outline">Filter</Button>
      <div className="relative w-full max-w-sm">
        <input
          className="border border-gray-300 rounded px-3 py-2 pl-10 text-sm w-full"
          placeholder={placeholder}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={18}
        />
      </div> 
    </div>
  );
};

export default SearchBar;
