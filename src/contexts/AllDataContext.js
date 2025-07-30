// userContext.js
import React, { createContext, useState } from "react";

const StaffContext = createContext();

const StaffProvider = ({ children }) => {
  const [staff, setStaff] = useState(null);
  return (
    <StaffContext.Provider value={{ staff, setStaff }}>
      {children}
    </StaffContext.Provider>
  );
};

export { StaffContext, StaffProvider };

//ClearanceRequestersList.jsx

// Head
const HeadContext = createContext();

const HeadProvider = ({ children }) => {
  const [head, setHead] = useState(null);
  return (
    <HeadContext.Provider value={{ head, setHead }}>
      {children}
    </HeadContext.Provider>
  );
};

export { HeadContext, HeadProvider };

// Vice
const ViceContext = createContext();

const ViceProvider = ({ children }) => {
  const [vice, setVice] = useState(null);
  return (
    <ViceContext.Provider value={{ vice, setVice }}>
      {children}
    </ViceContext.Provider>
  );
};

export { ViceContext, ViceProvider };

// HR
const HRContext = createContext();

const HRProvider = ({ children }) => {
  const [HR, setHR] = useState(null);
  return (
    <HRContext.Provider value={{ HR, setHR }}>
      {children}
    </HRContext.Provider>
  );
};

export {HRContext, HRProvider };

// themeContext.js
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
