import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import ComputerEngineering from "../../assets/images/ComputerEngineering.jpg";
import Wrapper from "./Wrapper";

function SuperAdminDashboard() {


  return (
    <Wrapper>
      <div
        className="flex-1 bg-backgroundColor p-6 overflow-auto relative"
        style={{
          backgroundImage: `url(${ComputerEngineering})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TitleBar title="Super Admin Dashboard" />
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-6">
          <h1 className="text-5xl font-bold text-white">
            Welcome to the Super Admin Dashboard
          </h1>
          <h1 className="mt-4 text-gray-200 text-2xl">
            Manage your application effectively!
          </h1>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SuperAdminDashboard;
