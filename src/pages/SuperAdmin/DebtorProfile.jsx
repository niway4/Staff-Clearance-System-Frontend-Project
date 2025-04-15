// import React from "react";
// import Wrapper from "./Wrapper";
// import TitleBar from "../../components/layout/TitleBar";
// import TableCard from "../../components/layout/TableCard";
// import debtors from "../../assets/data/DebtorList.js";
// import Button from "../../components/ui/Button";
// import approveIcon from "../../assets/icons/approve.svg";
// import message from "../../assets/icons/message.svg";

// function DebtorProfile() {
//   return (
//     <Wrapper>
//       <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
//         <TitleBar title="Debtor Profile" />
//         <div className="">
//           <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
//             <div className=" flex-col flex-1 border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4  mb-4">
//               <div className="flex ">
//                 <div className="flex-3 mr-9">
//                   <img
//                     className="rounded-full w-36  border-gray border-4"
//                     src={debtors[0].img}
//                     alt="profile"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <p className="mt-2">Name: {debtors[0].name}</p>
//                   <p>Contact Number: {debtors[0].contactnumber}</p>
//                   <p>Email: {debtors[0].email}</p>
//                   <p>Amount Owed: ${debtors[0].amountowed}</p>
//                   <p>Due Date: {debtors[0].duedate}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-3 h-fit  border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4  mb-4">
//               <div className="flex">
//                 <Button className="rounded-lg w-21" variant="outline">
//                   <div className="flex items-center ">
//                     <img
//                       className="w-6 h-6 mr-3 invert"
//                       src={approveIcon}
//                       alt="approve"
//                     />
//                     Approve Request
//                   </div>
//                 </Button>
//               </div>
//               <div className="flex">
//                 <Button className="mt-5 rounded-lg w-full  " variant="outline">
//                   <div className="flex items-center ">
//                     <img
//                       className="w-6 h-6 mr-3 invert"
//                       src={message}
//                       alt="message"
//                     />
//                     Send Message
//                   </div>
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <TableCard
//             header={[
//               "Loan Office",
//               "Items Borrowed",
//               "Borrowing Date",
//               "Returning Date",
//               "Status",
//               "Comment",
//             ]}
//             inputData={debtors[0].itemsborrowed} // Assuming itemsborrowed is an array of objects
//           />
          
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default DebtorProfile;


// import React from "react";
// import Wrapper from "./Wrapper";
// import TitleBar from "../../components/layout/TitleBar";
// import TableCard from "../../components/layout/TableCard";
// import debtors from "../../assets/data/DebtorList.js";
// import Button from "../../components/ui/Button";
// import approveIcon from "../../assets/icons/approve.svg";
// import message from "../../assets/icons/message.svg";

// function DebtorProfile() {
//   const progressPercentage = 75; // Example progress percentage

//   return (
//     <Wrapper>
//       <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
//         <TitleBar title="Debtor Profile" />
//         <div className="">
//           <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
//             <div className="flex-col flex-1 border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4 mb-4">
//               <div className="flex ">
//                 <div className="flex-3 mr-9">
//                   <img
//                     className="rounded-full w-36 border-gray border-4"
//                     src={debtors[0].img}
//                     alt="profile"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <p className="mt-2">Name: {debtors[0].name}</p>
//                   <p>Contact Number: {debtors[0].contactnumber}</p>
//                   <p>Email: {debtors[0].email}</p>
//                   <p>Amount Owed: ${debtors[0].amountowed}</p>
//                   <p>Due Date: {debtors[0].duedate}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-3 h-fit border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4 mb-4">
//               <div className="flex">
//                 <Button className="rounded-lg w-21" variant="outline">
//                   <div className="flex items-center ">
//                     <img
//                       className="w-6 h-6 mr-3 invert"
//                       src={approveIcon}
//                       alt="approve"
//                     />
//                     Approve Request
//                   </div>
//                 </Button>
//               </div>
//               <div className="flex">
//                 <Button className="mt-5 rounded-lg w-full" variant="outline">
//                   <div className="flex items-center ">
//                     <img
//                       className="w-6 h-6 mr-3 invert"
//                       src={message}
//                       alt="message"
//                     />
//                     Send Message
//                   </div>
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <TableCard
//             header={[
//               "Loan Office",
//               "Items Borrowed",
//               "Borrowing Date",
//               "Returning Date",
//               "Status",
//               "Comment",
//             ]}
//             inputData={debtors[0].itemsborrowed} // Assuming itemsborrowed is an array of objects
//           />
//           {/* Progress Tracking Section */}
//           <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
//             <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
//             <div className="flex items-center mb-2">
//               <div className="w-full bg-gray-300 rounded-full h-4">
//                 <div
//                   className="bg-gold h-4 rounded-full"
//                   style={{ width: `${progressPercentage}%` }}
//                 ></div>
//               </div>
//               <span className="ml-2">{progressPercentage}%</span>
//             </div>
//             <p className="text-sm text-gray-600">
//               You have completed {progressPercentage}% of your obligations.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default DebtorProfile;

import React from "react";
import { Pie } from "react-chartjs-2"; // Import Pie chart
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"; // Import from chart.js
import Wrapper from "./Wrapper";
import TitleBar from "../../components/layout/TitleBar";
import TableCard from "../../components/layout/TableCard";
import debtors from "../../assets/data/DebtorList.js";
import Button from "../../components/ui/Button";
import approveIcon from "../../assets/icons/approve.svg";
import message from "../../assets/icons/message.svg";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

function DebtorProfile() {
  const progressPercentage = 75; // Example progress percentage
  const returnedDebts = 3; // Example count of returned debts
  const remainingDebts = 2; // Example count of remaining debts

  // Data for the pie chart
  const data = {
    labels: ["Returned Debts", "Remaining Debts"],
    datasets: [
      {
        data: [returnedDebts, remainingDebts],
        backgroundColor: ["#4CAF50", "#FF6384"],
        hoverBackgroundColor: ["#45a049", "#ff6384"],
      },
    ],
  };

  return (
    <Wrapper>
      <div >
        <TitleBar title="Debtor Profile" />
        <div className="">
          <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
            <div className="flex-col flex-1 border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4 mb-4">
              <div className="flex ">
                <div className="flex-3 mr-9">
                  <img
                    className="rounded-full w-36 border-gray border-4"
                    src={debtors[0].img}
                    alt="profile"
                  />
                </div>
                <div className="flex-1">
                  <p className="mt-2">Name: {debtors[0].name}</p>
                  <p>Contact Number: {debtors[0].contactnumber}</p>
                  <p>Email: {debtors[0].email}</p>
                  <p>Amount Owed: ${debtors[0].amountowed}</p>
                  <p>Due Date: {debtors[0].duedate}</p>
                </div>
              </div>
            </div>
            <div className="flex-3 h-fit border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4 mb-4">
              <div className="flex">
                <Button className="rounded-lg w-21" variant="outline">
                  <div className="flex items-center ">
                    <img
                      className="w-6 h-6 mr-3 invert"
                      src={approveIcon}
                      alt="approve"
                    />
                    Approve Request
                  </div>
                </Button>
              </div>
              <div className="flex">
                <Button className="mt-5 rounded-lg w-full" variant="outline">
                  <div className="flex items-center ">
                    <img
                      className="w-6 h-6 mr-3 invert"
                      src={message}
                      alt="message"
                    />
                    Send Message
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <TableCard
            header={[
              "Loan Office",
              "Items Borrowed",
              "Borrowing Date",
              "Returning Date",
              "Status",
              "Comment",
            ]}
            inputData={debtors[0].itemsborrowed} // Assuming itemsborrowed is an array of objects
          />
          {/* Progress Tracking Section */}
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="ml-2">{progressPercentage}%</span>
            </div>
            <p className="text-sm text-gray-600">
              You have completed {progressPercentage}% of your obligations.
            </p>
          </div>
          {/* Debts Chart Section */}
          <div className="mt-6 p-4 w-64 border border-gray-300 rounded-lg bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-2">Debt Overview</h3>
            <Pie data={data} />
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Returned Debts: {returnedDebts}</span>
              <span>Remaining Debts: {remainingDebts}</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default DebtorProfile;