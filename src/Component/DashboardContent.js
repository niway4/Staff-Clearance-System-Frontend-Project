 
 
 import { useState } from "react";

import {
  LogOut,
  Home,
  ClipboardList,
  ChevronRight,
  User,
  Bell,
  Search,
} from "lucide-react";
 export default function  DashboardContent() {
  return (
    <div className="relative h-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sideBarColor/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Super Admin Dashboard
        </h1>
        <p className="text-xl max-w-3xl">
          Manage your application effectively! A single centralized platform for
          all your needs to manage employees and Staff Clearance process.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-lightGold/20 flex items-center justify-center mb-3">
              <User size={24} className="text-lightGold" />
            </div>
            <h3 className="text-2xl font-bold">245</h3>
            <p className="text-sm text-lightGray">Total Employees</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-lightGold/20 flex items-center justify-center mb-3">
              <ClipboardList size={24} className="text-lightGold" />
            </div>
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-sm text-lightGray">Pending Approvals</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-lightGold/20 flex items-center justify-center mb-3">
              <LogOut size={24} className="text-lightGold" />
            </div>
            <h3 className="text-2xl font-bold">8</h3>
            <p className="text-sm text-lightGray">Departments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
