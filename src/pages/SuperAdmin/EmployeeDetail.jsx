// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../../api/useFetch";

// const EmployeeDetail = () => {
//   const { id } = useParams();
//   const { data, error, loading, get } = useFetch("/admin");
//   const [originalData, setOriginalData] = useState({});

//   useEffect(() => {
//     get("/allstaffs/" + id);
//   }, []);

//   useEffect(() => {
//     if (data?.data) {
//       setOriginalData(data.data);
//     }
//   }, [data]);

//   console.log("Employee Detail Data", data);

//   return (
//     // <div className="min-h-screen bg-gray-100 p-6">
//     //   <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
//     //     <div>
//     //       <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2 flex justify-between items-center">
//     //         Employee Profile
//     //       </h1>
//     //     </div>

//     //     {loading && <p className="text-gray-600">Loading...</p>}
//     //     {error && <p className="text-red-600">Error: {error.message}</p>}

//     //     {!loading && Object.keys(originalData).length > 0 && (
//     //       <div className="mb-8">
//     //         <p className="text-lg font-semibold text-gray-700">
//     //           <span className="mr-2 text-gray-500">First Name:</span>
//     //           {data.fname}
//     //         </p>
//     //         {/* Uncomment and adjust as needed */}
//     //         {/* <p className="text-lg font-semibold text-gray-700">
//     //           <span className="mr-2 text-gray-500">Middle Name:</span>
//     //           {originalData.sname}
//     //         </p>
//     //         <p className="text-lg font-semibold text-gray-700">
//     //           <span className="mr-2 text-gray-500">Last Name:</span>
//     //           {originalData.lname}
//     //         </p> */}
//     //         {/* Add more fields as needed */}
//     //       </div>
//     //     )}
//     //   </div>
//     // </div>
//     <div>hello</div>
//   );
// };

// export default EmployeeDetail;