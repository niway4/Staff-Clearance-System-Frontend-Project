// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../../api/useFetch";
// import { useNavigate } from "react-router-dom";

// const ClearedStaffProfile = () => {

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { data, error, loading, get } = useFetch("/status");
//   const [originalData, setOriginalData] = useState([]);

//   useEffect(() => {
//     get("/displayall/" + id);
//   }, []);

//   useEffect(() => {
//     if (data?.data) {
//       setOriginalData(data.data);
//     }
//   }, [data]);

  

//   const firstRecord = originalData[0];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
//         <div>
//           <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2 flex justify-between items-center">
//             Cleared Staff Profile
//             <div className="space-x-2">
//               <button
//                 onClick={() => {
//                   navigate("/leavingletter");
//                 }}
//                 className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700 transition duration-200"
//               >
//                 Print Leaving Letter
//               </button>
//               <button
//                 onClick={() => {
//                   navigate("/experienceletter");
//                 }}
//                 className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition duration-200"
//               >
//                 Print Experience Letter
//               </button>
//             </div>
//           </h1>
//         </div>

//         {loading && <p className="text-gray-600">Loading...</p>}
//         {error && <p className="text-red-600">Error: {error.message}</p>}

//         {!loading && firstRecord && (
//           <div className="mb-8">
//             <p className="text-lg font-semibold text-gray-700">
//               <span className="mr-2 text-gray-500">First Name:</span>
//               {firstRecord.fname}
//             </p>
//             <p className="text-lg font-semibold text-gray-700">
//               <span className="mr-2 text-gray-500">Middle Name:</span>
//               {firstRecord.sname}
//             </p>
//             <p className="text-lg font-semibold text-gray-700">
//               <span className="mr-2 text-gray-500">Last Name:</span>
//               {firstRecord.lname}
//             </p>
//           </div>
//         )}

//         {originalData.length === 0 ? (
//           <p className="text-gray-500">No progress records available.</p>
//         ) : (
//           <div className="grid gap-6">
//             {originalData.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg p-4 shadow bg-gray-50"
//               >
//                 <p>
//                   <strong>Item:</strong> {item.item_name}
//                 </p>
//                 <p>
//                   <strong>Office:</strong> {item.office_name}
//                 </p>
//                 <p>
//                   <strong>Status:</strong>{" "}
//                   <span
//                     className={`px-2 py-1 rounded text-white ${
//                       item.description === "completed"
//                         ? "bg-green-600"
//                         : item.description === "pending"
//                         ? "bg-yellow-500"
//                         : "bg-red-600"
//                     }`}
//                   >
//                     {item.description}
//                   </span>
//                 </p>
//                 <p>
//                   <strong>Updated At:</strong>{" "}
//                   {new Date(item.updated_at).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClearedStaffProfile;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";
import Wrapper from "./Wrapper";

const ClearedStaffProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // this is a string
  const staffId = parseInt(id); // convert it to number
  const { data, error, loading, get } = useFetch("/cleared");
  const [staffDetail, setStaffDetail] = useState(null);

  useEffect(() => {
    get("/get");
  }, []);

  useEffect(() => {
    if (data?.message && Array.isArray(data.message)) {
      const found = data.message.find((staff) => staff.id === staffId);
      setStaffDetail(found || null);
    }
  }, [data, staffId]);

  return (
    <Wrapper>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2 flex justify-between items-center">
            Cleared Staff Profile
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/leavingletter/${id}`)}
                className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
              >
                Print Leaving Letter
              </button>
              <button
                onClick={() => navigate("/experienceletter")}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
              >
                Print Experience Letter
              </button>
            </div>
          </h1>
          {loading && <p className="text-gray-600">Loading...</p>}
          {error && <p className="text-red-600">Error: {error.message}</p>}
          {!loading && staffDetail ? (
            <div className="mb-8 space-y-2 text-lg text-gray-700">
              <p><strong>First Name:</strong> {staffDetail.fname}</p>
              <p><strong>Middle Name:</strong> {staffDetail.sname}</p>
              <p><strong>Last Name:</strong> {staffDetail.lname}</p>
              <p><strong>Position:</strong> {staffDetail.position}</p>
              <p><strong>Birthdate:</strong> {new Date(staffDetail.birthdate).toLocaleDateString()}</p>
              <p><strong>Salary:</strong> {staffDetail.salary}</p>
              <p><strong>Cleared:</strong> {staffDetail.cleared ? "Yes" : "No"}</p>
              {/* Add more fields as needed */}
            </div>
          ) : (
            !loading && <p className="text-gray-500">No staff found with ID: {id}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ClearedStaffProfile;
