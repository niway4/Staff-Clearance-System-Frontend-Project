import React from "react";
import Sidebar from "../../components/layout/SideBar";
import personAvatar from "../../assets/images/personAvatar.jpg";

function Wrapper({ children }) {
  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/employees", label: "Manage Employees" },
    { to: "/creditees", label: "Creditee List" },
    { to: "/requesters", label: "Clearance Requesters List" },
  ];

  const AdminData = {
    name: "Novel Dejene",
    role: "Admin",
    img: personAvatar,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar AdminData={AdminData} navItems={navItems} />

      {/* Main Content */}
      {children}
    </div>
  );
}

export default Wrapper;
