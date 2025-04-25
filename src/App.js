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
import Approval from "./pages/SuperAdmin/Approval";
import AddEmployeeForm from "./components/forms/AddEmployeeForm";
import EmplyeeDetail from "./pages/SuperAdmin/EmployeeDetail";
import EditEmployee from "./pages/SuperAdmin/EditEmployee";
// import Wasman from "./wasman";
function App() {
  return (
    <Router>
      {/* <Wasman /> */}
      <Routes>
        <Route path="/" element={<SuperAdminDashboard />} />
        <Route path="/dashboard" element={<SuperAdminDashboard />} />
        <Route path="/employees" element={<AllEmployeesList />} />
        <Route path="/employees/:id" element={<EmplyeeDetail />} />
        <Route path="/add-employee" element={<AddEmployeeForm />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/debtors" element={<DebtorsList />} />
        <Route path="/requesters" element={<ClearanceRequestersList />} />
        <Route path="/debtorsprofile" element={<DebtorProfile />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
