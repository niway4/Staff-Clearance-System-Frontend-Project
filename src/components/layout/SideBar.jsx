// Sidebar.js
import React from "react";
import NavLinkItem from "../ui/NavLinkItem";
import aastuLogo from "../../assets/images/aastuLogo.png";

const Sidebar = ({ AdminData, navItems }) => {
  return (
    <div className="w-64 bg-sideBarColor text-white flex flex-col p-4">
      <div className="flex mb-6 items-center">
        <img className="rounded-full w-14 h-14 mr-4" src={aastuLogo} alt="AASTU-LOGO" />
        <h2 className="text-lg font-bold">Staff Clearance System</h2>
      </div>
      <hr className="border-gray-300 w-full my-4" />
      <div className="flex items-center my-4 space-x-2">
        <img className="w-14 h-14 rounded-full" src={AdminData.img} alt="Admin-Image" />
        <div>
          <p className="font-semibold">{AdminData.name}</p>
          <p className="text-sm">{AdminData.role}</p>
        </div>
      </div>
      <hr className="border-gray-300 w-full mt-4 mb-6" />
      <nav className="flex flex-col gap-6">
        {navItems.map((item, index) => (
          <NavLinkItem key={index} to={item.to}>
            {item.label}
          </NavLinkItem>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;