import React from "react";
import Button from "../ui/Button";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Button variant="outline">Filter</Button>
      <div className="relative w-full max-w-sm">
        <input
          className="border border-gray-300 rounded pl-3 pr-8 py-2  text-sm w-full"
          placeholder={placeholder}
        />
        <Search
          cursor={"pointer"}
          onClick={() => console.log("clicked")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-sideBarColor rounded rounded-l-none  w-8 h-9 p-1 hover:bg-gold hover:text-black transition duration-200"
          size={18}
        />
      </div>
    </div>
  );
};

export default SearchBar;
