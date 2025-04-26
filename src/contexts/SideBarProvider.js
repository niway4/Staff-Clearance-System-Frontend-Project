import React, { createContext } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
