import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import bkd from "../../assets/images/bkd.jpg";
import Wrapper from "./Wrapper";

function SuperAdminDashboard() {
  return (
    <Wrapper>
      <div className="min-w-[600px] overflow-auto">
        <TitleBar title="Human Resource Admin Dashboard" />
        <div
          style={{
            backgroundImage: `url(${bkd})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat min-h-screen"
            style={{ backgroundImage: `url(${bkd})` }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8 py-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 text-center">
                Welcome to HR Dashboard
              </h1>
              <h2 className="text-center mt-4 text-gray-200 text-lg sm:text-xl md:text-2xl">
                Manage your application effectively! A centralized platform for
                all your needs to manage <br className="hidden sm:block" />
                employees and Staff Clearance processes.
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Important Notes:
                  </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>
                      Review employee requests regularly for timely processing.
                    </li>
                    <li>Maintain up-to-date records of employee clearances.</li>
                    <li>
                      Contact support for any technical issues or questions.
                    </li>
                  </ul>
                </div>
                {/* Card 2 */}
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Key Responsibilities:
                  </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Oversee recruitment and onboarding processes.</li>
                    <li>
                      Ensure compliance with company policies and labor laws.
                    </li>
                    <li>
                      Facilitate training and development programs for staff.
                    </li>
                  </ul>
                </div>
                {/* Card 3 */}
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Best Practices:
                  </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Encourage open communication within teams.</li>
                    <li>
                      Regularly update the employee handbook with relevant
                      policies.
                    </li>
                    <li>Use data-driven insights to inform HR strategies.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SuperAdminDashboard;
