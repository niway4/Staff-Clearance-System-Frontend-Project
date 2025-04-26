import React, { useContext } from "react";
import Button from "../ui/Button";
import { LogOut } from "lucide-react";
import { Menu, X } from "lucide-react";
import { SideBarContext } from "../../contexts/SideBarProvider";

const TitleBar = ({ title }) => {
  const SideBarCtx = useContext(SideBarContext);

  return (
    <div className="flex bg-titleBarColor py-2 px-6 rounded-lg justify-between items-center mb-4">
      <button
        onClick={SideBarCtx.toggleSidebar}
        className="text-gray-600 focus:outline-none"
      >
        {SideBarCtx.isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <h3 className="font-serif text-3xl font-bold">{title}</h3>
      <Button variant="ghost" className="flex items-center gap-1 ">
        <LogOut size={25} /> Log Out
      </Button>
    </div>
  );
};

export default TitleBar;
