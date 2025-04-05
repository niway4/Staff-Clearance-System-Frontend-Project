import React from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { Search, LogOut } from "lucide-react";

const requests = [
  "Biniyam Gedefaw",
  "Niway Chemere",
  "Novel Yeshilta",
  "Washiun Melkamu",
  "Yihun Mekam",
];

const RequestRow = ({ name }) => (
  <tr className="border-b border-gray-300">
    <td className="py-2 px-4">{name}</td>
    <td className="py-2 px-4">Computer Eng.</td>
    <td className="py-2 px-4">March 27, 2025</td>
    <td className="py-2 px-4 text-yellow-600">pending</td>
    <td className="py-2 px-4">
      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded">Approve</Button>
    </td>
  </tr>
);

export default function ClearanceRequestersList() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-4">
        <h2 className="text-lg font-bold mb-6">Staff Clearance System</h2>

        <div className="flex items-center mb-6 space-x-2">
          <div className="bg-yellow-400 w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">Franne Lname</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <button className="text-left">Dashboard</button>
          <button className="text-left">Record New Credit</button>
          <button className="text-left">Creditee List</button>
          <button className="text-left font-semibold bg-yellow-500 rounded px-2 py-1">Clearance Requesters List</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Clearance Requesters List</h3>
              <Button variant="ghost" className="flex items-center gap-1 text-yellow-600">
                <LogOut size={18} /> Log Out
              </Button>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <Button variant="outline">Filter</Button>
              <div className="relative w-full max-w-sm">
                <Input placeholder="Search..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>

            <table className="w-full text-left border-t border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Employee Name</th>
                  <th className="py-2 px-4">Department</th>
                  <th className="py-2 px-4">Request Date</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(2)].flatMap(() =>
                  requests.map((name, i) => <RequestRow key={i + name} name={name} />)
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
