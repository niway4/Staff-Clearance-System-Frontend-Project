import React, { useContext } from "react";
import Sidebar from "../../components/layout/SideBar";
import personAvatar2 from "../../assets/images/personAvatar2.jpg";
import dashboard from "../../assets/icons/dashboard.svg";
import employees from "../../assets/icons/employees.svg";
import debtors from "../../assets/icons/debtors.svg";
import requesters from "../../assets/icons/requesters.svg";
import { SideBarContext } from "../../contexts/SideBarProvider";

function Wrapper({ children }) {
  const SideBarCtx = useContext(SideBarContext);
  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: dashboard },
    { to: "/employees", label: "Manage Employees", icon: employees },
    { to: "/requesters", label: "Clearance Requesters List", icon: requesters },
    // { to: "/req4hr", label: "Requests for HR", icon: requesters },
    { to: "/req4head", label: "Requests for Department Head", icon: requesters },
    { to: "/req4vice", label: "Requests for Vice President", icon: requesters },

    { to: "/clearedstaff", label: "Cleared Staff", icon: debtors },
  ];

  const AdminData = {
    name: "Abebe Tesfaye",
    role: "HR Admin",
    img: personAvatar2,
  };

  return (
    <div className="flex h-screen ">
      {SideBarCtx.isSidebarOpen && (
        <Sidebar AdminData={AdminData} navItems={navItems} />
      )}
      <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
