import React, { useState } from "react";
import {
  Bell,
  ClipboardList,
  Activity,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
//import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

const records = [
  {
    office: "Finance",
    item: "500 ETB",
    borrowDate: "March 27, 2025",
    returnDate: "March 27, 2025",
    status: "Not returned",
    comment: "The returning date has passed",
  },
  {
    office: "Engineering Library",
    item: "Morris book",
    borrowDate: "March 27, 2025",
    returnDate: "March 27, 2025",
    status: "Returned",
    comment: "",
  },
  {
    office: "Chemical Laboratory",
    item: "Litmus paper",
    borrowDate: "March 27, 2025",
    returnDate: "March 27, 2025",
    status: "Not returned",
    comment: "",
  },
  {
    office: "Science Library",
    item: "Toshiba laptop",
    borrowDate: "March 27, 2025",
    returnDate: "March 27, 2025",
    status: "Returned",
    comment: "",
  },
];

function StatusBadge({ status }) {
  const colorClasses =
    status === "Returned"
      ? "bg-green-200 text-green-800"
      : "bg-yellow-200 text-yellow-800";
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${colorClasses}`}
    >
      {status}
    </span>
  );
}

export default function EmployeeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  //const navigate = useNavigate(); // Step 2: Initialize useNavigate

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  //const handleButtonClick = () => {
  // navigate('/support'); // Navigate to the SupportPage
  //};

  // Dummy employee data
  const employee = {
    name: " Dr Niway Chemer",
    email: "john.doe@example.com",
    department: "Finance",
    id: "EMP-123456",
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Slider */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-30`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center space-x-3 p-6">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-bold text-x">STAFF CLEARANCE SYSTEM</span>
            </div>
            <nav className="mt-8 space-y-2 px-2">
              <button className="w-full flex items-center px-4 py-3 hover:bg-yellow-500 rounded-lg transition">
                <ClipboardList className="h-5 w-5 mr-3" /> Your Data
              </button>
              <button className="w-full flex items-center px-4 py-3 hover:bg-yellow-500 rounded-lg transition">
                <Bell className="h-5 w-5 mr-3" /> Notifications
              </button>
              <button className="w-full flex items-center px-4 py-3 hover:bg-yellow-500 rounded-lg transition">
                <Activity className="h-5 w-5 mr-3" /> Progress
              </button>
              <button
                //onClick={handleButtonClick} // Step 3: Attach the function to the button
                className="w-full flex items-center px-4 py-3 hover:bg-yellow-500 rounded-lg transition"
              >
                <HelpCircle className="h-5 w-5 mr-3" /> Support
              </button>
            </nav>
          </div>
          <div className="px-2 mb-6">
            <button className="w-full flex items-center px-4 py-3 hover:bg-blue-700 rounded-lg transition">
              <LogOut className="h-5 w-5 mr-3" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        className="flex-1 flex flex-col transition-margin duration-300"
        style={{ marginLeft: sidebarOpen ? 256 : 0 }}
      >
        {/* Header with Toggle + Profile */}
        <header className="flex items-center justify-between p-4 bg-white shadow-sm">
          {/* // */}

          {/* // */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Your Record</h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="/niway.png"
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-gray-800 font-medium">{employee.name}</span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-20">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Profile
                </p>
                <div className="text-sm text-gray-600">
                  <p>
                    <strong>Name:</strong> {employee.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {employee.email}
                  </p>
                  <p>
                    <strong>Department:</strong> {employee.department}
                  </p>
                  <p>
                    <strong>ID:</strong> {employee.id}
                  </p>
                </div>
                <button
                  onClick={() => setProfileOpen(false)}
                  className="mt-3 w-full text-center text-blue-600 hover:underline text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Dashboard */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-blue-50">
                <tr>
                  {[
                    "Loan Office",
                    "Item",
                    "Borrowing Date",
                    "Returning Date",
                    "Status",
                    "Comment",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {records.map((rec, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {rec.office}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {rec.item}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {rec.borrowDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {rec.returnDate}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={rec.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {rec.comment || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800 font-medium">
              Complete all credits and requirements before applying for
              clearance.
            </p>
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
              Request Clearance
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
