// CombinedProvider.js
import React from "react";
import { StaffProvider } from "./AllDataContext";
import { HeadProvider } from "./AllDataContext";
import { ViceProvider } from "./AllDataContext";
import { HRProvider } from "./AllDataContext";
import { ThemeProvider } from "./AllDataContext";

const CombinedProvider = ({ children }) => {
  return (
    <StaffProvider>
      <HeadProvider>
        <ViceProvider>
          <HRProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </HRProvider>
        </ViceProvider>
      </HeadProvider>
    </StaffProvider>
  );
};

export default CombinedProvider;
