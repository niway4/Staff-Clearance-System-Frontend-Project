// import React from "react";
// import TitleBar from "../../components/layout/TitleBar";
// import bkd from "../../assets/images/bkd.jpg";
// import Wrapper from "./Wrapper";

// function SuperAdminDashboard() {
//   return (
//     <Wrapper>
//       <div>
//         <TitleBar title="Human Resource Admin Dashboard" />
//         <div
//           style={{
//             backgroundImage: `url(${bkd})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             minHeight: "100vh",
//           }}
//         >
//           <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-50 p-6">
//             <h1 className="text-5xl font-bold text-white mb-5">
//               Welcome to the Super Admin Dashboard
//             </h1>
//             <h1 className=" text-center mt-4 text-gray-200 text-2xl">
//               Manage your application effectively! A single centralized platform
//               for all your needs to manage <br />
//               employeess and Staff Clearnace process.
//             </h1>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default SuperAdminDashboard;



import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import bkd from "../../assets/images/bkd.jpg";
import Wrapper from "./Wrapper";

function SuperAdminDashboard() {
  return (
    <Wrapper>
      <div>
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
          <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-50 p-6">
            <h1 className="text-5xl font-bold text-white mb-5">
              Welcome to HR Dashboard
            </h1>
            <h2 className="text-center mt-4 text-gray-200 text-2xl">
              Manage your application effectively! A centralized platform for all your needs to manage <br />
              employees and Staff Clearance processes.
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Important Notes Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Important Notes:
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Review employee requests regularly for timely processing.</li>
                  <li>Maintain up-to-date records of employee clearances.</li>
                  <li>Contact support for any technical issues or questions.</li>
                </ul>
              </div>

              {/* Key Responsibilities Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Key Responsibilities:
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Oversee recruitment and onboarding processes.</li>
                  <li>Ensure compliance with company policies and labor laws.</li>
                  <li>Facilitate training and development programs for staff.</li>
                </ul>
              </div>

              {/* Best Practices Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Best Practices:
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Encourage open communication within teams.</li>
                  <li>Regularly update the employee handbook with relevant policies.</li>
                  <li>Use data-driven insights to inform HR strategies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SuperAdminDashboard;