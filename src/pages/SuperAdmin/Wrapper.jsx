import React from "react";
import Sidebar from "../../components/layout/SideBar";
import personAvatar from "../../assets/images/personAvatar.jpg";
import dashboard from "../../assets/icons/dashboard.svg";
import employees from "../../assets/icons/employees.svg";
import debtors from "../../assets/icons/debtors.svg";
import requesters from "../../assets/icons/requesters.svg";

function Wrapper({ children }) {
  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: dashboard },
    { to: "/employees", label: "Manage Employees", icon: employees },
    { to: "/Debtors", label: "Debtors List", icon: debtors },
    { to: "/requesters", label: "Clearance Requesters List", icon: requesters },
  ];

  const AdminData = {
    name: "Novel Dejene",
    role: "Admin",
    img: personAvatar,
  };

  return (
    <div className="flex h-screen ">
      <Sidebar AdminData={AdminData} navItems={navItems} />
      <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
