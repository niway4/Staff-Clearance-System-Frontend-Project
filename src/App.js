import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import ClearanceRequestersList from "./pages/SuperAdmin/ClearanceRequestersList";
import AllEmployeesList from "./pages/SuperAdmin/AllEmployeesList";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard";
import DebtorsList from "./pages/SuperAdmin/DebtorsList";
import DebtorProfile from "./pages/SuperAdmin/DebtorProfile";
import Approval from "./pages/SuperAdmin/Approval";
import AddEmployeeForm from "./components/forms/AddEmployeeForm";
import EmplyeeDetail from "./pages/SuperAdmin/EmployeeDetail";
import EditEmployee from "./pages/SuperAdmin/EditEmployee";
import LeavingLetter from "./pages/SuperAdmin/LeavingLetter";
import ExperienceLetter from "./pages/SuperAdmin/ExperienceLetter";
import SideBarProvider from "./contexts/SideBarProvider";
import ExampleComponent from "./assets/data/emp";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import HrProfile from "./pages/SuperAdmin/HrProfile";
import RequesterProfile from "./pages/SuperAdmin/RequesterProfile";
// import Wasman from "./wasman";
import {
  user,
  stats,
  clearanceItems,
  clearanceRecords,
} from "./assets/data/AppData";
import Dashboard from "./Component/DashbordPage";
import Progress from "./Component/ProgressPage";
import Records from "./Component/RecordPage";
import RecordDetail from "./Component/RecodreDetailPage";
import CreateRecord from "./Component/CreatRecordePage";
// Novel
import LandingPage from "./Comp/LandingPage";
import Login from "./Comp/Login";
import LoginPage from "./Comp/LoginPage";
import SupportPage from "./Comp/Supportpage";
import EmployeeHomePage from "./Comp/EmployeeHomePage";
import ViceDashBoard from "./pages/Vice/ViceDashBoard";
import ApprovalRequestersList from "./pages/Vice/ApprovalRequestersList";

function RecordDetailWrapper({ records }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const record = records.find((r) => r.id === id);

  return (
    <RecordDetail record={record} onBackClick={() => navigate("/records")} />
  );
}
function App() {
  const navigate = useNavigate();
  return (
    <SideBarProvider>
      <EmployeeProvider>
        <Routes>
          {/* id based */}
          <Route path="/clearance-progress/:employeeId" element={<Dashboard />} />
          <Route path="/experienceletter" element={<ExperienceLetter />} />
          <Route path="/leavingletter" element={<LeavingLetter />} />

          {/* vice president routes */}
          <Route path="/approvalreq" element={<ApprovalRequestersList />} />
          <Route path="/vdb" element={<ViceDashBoard />} />

          {/* HR route */}
          <Route path="/hrprofile" element={<HrProfile />} />
          <Route path="/employee/:id" element={<RequesterProfile />} />

          {/* Novel Route */}
          <Route path="/example" element={<ExampleComponent />} />
          <Route path="/novel" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/supportpage" element={<SupportPage />} />
          <Route path="/employeehomepage" element={<EmployeeHomePage />} />
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
          {/* fsnfsonlf */}
          <Route
            path="/wasman"
            element={
              <Dashboard
                user={user}
                stats={stats}
                onNavigateToProgress={() => navigate("/progress")}
              />
            }
          />
          <Route
            path="/progress"
            element={
              <Progress
                items={clearanceItems}
                stats={stats}
                onBackClick={() => navigate("/")}
              />
            }
          />
          <Route
            path="/records"
            element={
              <Records
                records={clearanceRecords}
                onBackClick={() => navigate("/")}
                onViewRecord={(id) => navigate(`/records/${id}`)}
              />
            }
          />
          <Route
            path="/records/:id"
            element={<RecordDetailWrapper records={clearanceRecords} />}
          />
          <Route
            path="/create"
            element={
              <CreateRecord
                onBackClick={() => navigate("/records")}
                onSubmit={(data) => {
                  console.log("Form submitted:", data);
                  navigate("/records");
                }}
              />
            }
          />
          {<Route path="*" element={<navigate to="/dashboard" replace />} />}
        </Routes>
      </EmployeeProvider>
    </SideBarProvider>
  );
}

export default App;
