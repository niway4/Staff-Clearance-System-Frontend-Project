import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import ClearanceRequestersList from "./pages/SuperAdmin/ClearanceRequestersList";
import OfficePage from "./Component/OfficeDashboard";
import DepartmentDashboard from "./Component/DepartmentDashboard";
import ClearanceForm from "./Component/ClearanceForm";
import ProfileEditor from "./Comp/ProfileEditor";
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
import StaffClearanceSystem  from "./Component/staffClearanceSystem";

import CreateRecord from "./Component/CreatRecordePage";
// Novel
import LandingPage from "./Comp/LandingPage";
import Login from "./Comp/Login";
import LoginPage from "./Comp/LoginPage";
import SupportPage from "./Comp/Supportpage";
import EmployeeHomePage from "./Comp/EmployeeHomePage";
//vice
import ViceDashBoard from "./pages/Vice/ViceDashBoard";
import ApprovalRequestersList from "./pages/Vice/ApprovalRequestersList";
//dep. head
import HeadDashBoard from "./pages/DepartmentHead/HeadDashBoard";
import HeadList from "./pages/DepartmentHead/ApprovalRequestersList";
// cleared staff
import ClearedStaff from "./pages/SuperAdmin/ClearedStaff";
import ClearedStaffProfile from "./pages/SuperAdmin/ClearedStaffProfile";
import ClearedStaffForm from "./pages/SuperAdmin/ClearedStaffForm";


function App() {
  const navigate = useNavigate();
  return (
    <SideBarProvider>
      <EmployeeProvider>
        <Routes>
          {/* id based */}
         
          <Route path="/experienceletter" element={<ExperienceLetter />} />
          <Route path="/leavingletter" element={<LeavingLetter />} />
          <Route path="/leavingletter/:id" element={<LeavingLetter />} />

          <Route path="/employee/:id" element={<EditEmployee />} />

          {/* vice president routes */}
          <Route path="/vicelist" element={<ApprovalRequestersList />} />
          <Route path="/vdb" element={<ViceDashBoard />} />

          {/*dep.t head routes */}
          <Route path="/headlist" element={<HeadList />} />
          <Route path="/headdb" element={<HeadDashBoard />} />

          {/* HR route */}
          <Route path="/hrprofile" element={<HrProfile />} />
          <Route path="/requester/:id" element={<RequesterProfile />} />
          {/* cleared staff */}
          <Route path="/clearedstaff" element={<ClearedStaff />} />
          <Route path="/clearedstaff/:id" element={<ClearedStaffProfile />} />
          <Route path="/clearedstaffform" element={<ClearedStaffForm />} />
          <Route path="/clearedstaffform/:id" element={<ClearedStaffForm />} />

          {/* Novel Route */}
          <Route path="/example" element={<ExampleComponent />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/supportpage" element={<SupportPage />} />
          <Route path="/employeehomepage" element={<EmployeeHomePage />} />
          <Route
            path="/superAdminDashboard"
            element={<SuperAdminDashboard />}
          />
          <Route path="/dashboard" element={<SuperAdminDashboard />} />
          <Route path="/employees" element={<AllEmployeesList />} />
          {/* <Route path="/employee/:id" element={<EmplyeeDetail />} /> */}
          <Route path="/add-employee" element={<AddEmployeeForm />} />
          {/* <Route path="/edit-employee/:id" element={<EditEmployee />} /> */}
          <Route path="/debtors" element={<DebtorsList />} />
          <Route path="/requesters" element={<ClearanceRequestersList />} />
          <Route path="/debtorsprofile" element={<DebtorProfile />} />
          <Route path="/approval" element={<Approval />} />
          {/* fsnfsonlf */}
          <Route
            path="/staffDashboard"
            element={
              <Dashboard
                user={user}
                stats={stats}
                onNavigateToProgress={() => navigate("/progress")}
                 onNavigateToForm={() => navigate("/form")}


              />
            }

            
          />

          <Route  path="/test" element={< StaffClearanceSystem/>}/>
          <Route path="/employee" element={<DepartmentDashboard />} />
          <Route path="/office" element={<OfficePage />} />
          <Route path="/form" element={<ClearanceForm />} />
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
            path="/create"
            element={
              <CreateRecord
                onBackClick={() => navigate("/office")}
                onSubmit={(data) => {
                  console.log("Form submitted:", data);
                  navigate("/office");
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
