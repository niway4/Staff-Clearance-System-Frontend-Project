import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ClearanceRequestersList from "./pages/SuperAdmin/ClearanceRequestersList";
import AllEmployeesList from "./pages/SuperAdmin/AllEmployeesList";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard";
import DebtorsList from "./pages/SuperAdmin/DebtorsList";
import DebtorProfile from "./pages/SuperAdmin/DebtorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuperAdminDashboard />} />
        <Route path="/dashboard" element={<SuperAdminDashboard />} />
        <Route path="/employees" element={<AllEmployeesList />} />
        <Route path="/debtors" element={<DebtorsList />} />
        <Route path="/requesters" element={<ClearanceRequestersList />} />
        <Route path="/debtorsprofile" element={<DebtorProfile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
