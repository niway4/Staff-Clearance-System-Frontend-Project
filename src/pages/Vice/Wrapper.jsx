import React, { useContext } from "react";
import Sidebar from "../../components/layout/SideBar";
import personAvatar from "../../assets/images/personAvatar.jpg";
import dashboard from "../../assets/icons/dashboard.svg";
import requesters from "../../assets/icons/requesters.svg";
import { SideBarContext } from "../../contexts/SideBarProvider";

function Wrapper({ children }) {
  const SideBarCtx = useContext(SideBarContext);
  const navItems = [
    { to: "/vdb", label: "Dashboard", icon: dashboard },
    {
      to: "/test",
      label: "Approval Requesters List",
      icon: requesters,
    },
  ];

  const AdminData = {
    name: "FName LName",
    role: "Vice President",
    img: personAvatar,
  };

  return (
    <div className="flex h-screen min-w-[1024px] overflow-auto">
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
