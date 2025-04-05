// SearchBar.js
import React from 'react';
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Button variant="outline">Filter</Button>
      <div className="relative w-full max-w-sm">
        <Input placeholder={placeholder} className="pl-10" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;