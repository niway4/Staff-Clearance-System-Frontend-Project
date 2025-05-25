// import React, { useEffect, useContext, useState } from "react";
// import useFetch from "../../api/useFetch.js";
// import Spinner from "../../components/ui/Spinner";
// import TableCard from "../../components/layout/TableCard"; // Assuming TableCard is correctly imported
// import { HeadContext } from "../../contexts/AllDataContext.js";
// import { useNavigate } from "react-router-dom"; // Don't forget useNavigate

// const RequestForHead = () => {
//   const navigate = useNavigate();
//   const { head, setHead } = useContext(HeadContext);
//   const [headFilteredData, setHeadFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for local search within head data
//   const [selectedFilter, setSelectedFilter] = useState("All"); // State for local filter within head data

//   // useFetch for Head data
//   const {
//     data: headData,
//     error: headError,
//     loading: headLoading,
//     get: getHead,
//   } = useFetch("/request/admin");

//   // Fetch Head data if not already in context
//   useEffect(() => {
//     if (!head) {
//       getHead("/department/get");
//     } else {
//       setHeadFilteredData(head);
//     }
//   }, [head, getHead]);

//   // Update Head context and filtered data when headData changes
//   useEffect(() => {
//     if (headData) { // Assuming headData is the array itself or directly accessible
//       setHead(headData);
//       setHeadFilteredData(headData);
//     }
//   }, [headData, setHead]);

//   // Handle local search and filter for Head data (if applicable, currently no filter in original code)
//   // You'd need to adapt handleSearch if you add filtering for Head data.
//   // For now, I'm keeping the search functionality specific to HR table as in your original code.
//   // If you want a search bar for the Head table too, you'll need to pass `searchTerm` and `selectedFilter` from the parent.
//   // For now, I'll remove the local searchTerm and selectedFilter states in this component for simplicity,
//   // as the original `handleSearch` was only for HR data.
//   // If you need a search for Head table as well, you'd pass it down or manage it similarly to HR.

//   const header2 = [
//     { label: "First Name", key: "staff_fname" },
//     { label: "Middle Name", key: "staff_sname" },
//     { label: "Last Name", key: "staff_lname" },
//     { label: "E-mail", key: "email" },
//     { label: "Current Position", key: "current_position" },
//     { label: "Unfinished Projects", key: "unfinished_project" },
//     { label: "Reason", key: "reason" },
//     { label: "Department Name", key: "dept_name" },
//   ];

//   const handleRowClick = (rowId) => {
//     // This was previously '#', so I'm keeping it as a placeholder.
//     // You'll likely want to navigate to a specific detail page for head requests too.
//     navigate(`#`);
//   };

//   return (
//     <div>
//       <div className="mt-10 text-2xl font-bold">
//         List of employees who are waiting for department head approval:
//       </div>
//       <br />
//       {headLoading && <Spinner />}
//       {headError && (
//         <>
//           {console.log("Error occurred:", headError)}
//           <p className="text-red-600">Can not load department head requests, check your connection.</p>
//         </>
//       )}
//       {!headLoading && !headError && (
//         <TableCard
//           header={header2}
//           inputData={Array.isArray(headFilteredData) ? headFilteredData : []}
//           onRowClick={handleRowClick}
//           // No renderAction for head table in original code, so omit here
//         />
//       )}
//       <br />
//       <br />
//     </div>
//   );
// };

// export default RequestForHead;

//// =============================== from clearance requesters list
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //

// import React, { useEffect, useContext } from "react";
// import TitleBar from "../../components/layout/TitleBar";
// import SearchBar from "../../components/layout/SearchBar";
// import TableCard from "../../components/layout/TableCard";
// import Wrapper from "./Wrapper";
// import useFetch from "../../api/useFetch.js";
// import Spinner from "../../components/ui/Spinner";
// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { HeadContext } from "../../contexts/AllDataContext.js";

// export default function ClearanceRequestersList() {
//   // const { data, error, loading, get } = useFetch("/request/admin");

//   // useEffect(() => {
//   //   get("/get"); // Fetch data on component mount
//   // }, []);

//   //     console.log(data);

//   const navigate = useNavigate();

//   const { head, setHead } = useContext(HeadContext);
//   const [headFilteredData, setHeadFilteredData] = React.useState([]);

//   const {
//     data: headData,
//     error: headError,
//     loading: headLoading,
//     get: getHead,
//   } = useFetch("/request/admin");

//   useEffect(() => {
//     if (!head) {
//       getHead("/department/get");
//     } else {
//       setHeadFilteredData(head);
//     }
//   }, []);

//   useEffect(() => {
//     if (headData && !head) {
//       setHead(headData);
//       setHeadFilteredData(headData);
//     }
//   }, [headData, head, setHead]);
//   //========================================= login post API =============================================//

//   // const {
//   //   data: postData,
//   //   error: postError,
//   //   loading: postLoading,
//   //   post,
//   // } = useFetch("/admin");

//   // const handleSignIn = async (e) => {
//   //   e.preventDefault();
//   //   const newData = { username: "bina", password: "123456" };
//   //   await post("/login", newData);
//   // };

//   // const header2 = [
//   //   { label: "First Name", key: "fname" },
//   //   { label: "Middle Name", key: "sname" },
//   //   { label: "Last Name", key: "lname" },
//   //   { label: "E-mail", key: "email" },
//   //   { label: "Status", key: "status" },
//   //   { label: "Updated Date", key: "updated_at" },
//   //   { label: "Action", key: "action" },
//   // ];

//   const header1 = [
//     { label: "First Name", key: "staff_fname" },
//     { label: "Middle Name", key: "staff_sname" },
//     { label: "Last Name", key: "staff_lname" },
//     { label: "E-mail", key: "email" },
//     { label: "Current Position", key: "current_position" },
//     { label: "Unfinished Projects", key: "unfinished_project" },
//     { label: "Reason", key: "reason" },
//     { label: "Department Name", key: "dept_name" },
//   ];

//   const { data: postdata, post: postApprove } = useFetch("/cleared");

//   const handleApprove = (row) => {
//     navigate(`/clearedstaffform/${row.staff_id}`);
//   };

//   console.log("postdata", postdata);

//   const handleSearch = (searchTerm, selectedFilter) => {
//     if (!head) return;

//     const filtered1 = head.filter((data) => {
//       const name = data.fname || "";
//       const matchesName = name
//         .toLowerCase()
//         .startsWith(searchTerm.toLowerCase());

//       const matchesFilter =
//         selectedFilter === "All" || data.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     setHeadFilteredData(filtered1);
//   };

//   const handleRowClick = (rowId) => {
//     navigate(`/requester/${rowId}`);
//   };
//   const handleRowClick2 = (id) => {
//     navigate(`#`);
//   };

//   return (
//     <Wrapper>
//       {console.log(head)}

//       <div>
//         <TitleBar title="request for department head" />
//         <SearchBar
//           filterParams={["All", "Approved", "Pending", "Rejected"]}
//           searchFunction={handleSearch}
//           placeholder="Search for requests..."
//         />
//         {/* <div>
//           <button onClick={handleSignIn}>login</button>
//           <br />

//           {postLoading && <p>post Loading...</p>}
//           {postError && <p>post Error: {postError.message}</p>}
//           {postData && ` posted ${console.log(postData)}`}
//         </div> */}
//         {/* //========================================= head table =============================================// */}

//         {headLoading && <Spinner />}
//         {headError && (
//           <>
//             {console.log("Error occurred:", headError)}
//             <p className="text-red-600">Can not load, check your connection.</p>
//           </>
//         )}
//         {!headLoading && !headError && headFilteredData && (
//           <div>
//             <div className="mt-10 text-2xl font-bold ">
//               List of employees who are waiting for department head approval:
//             </div>
//             <br />
//             <TableCard
//               header={header1}
//               inputData={
//                 Array.isArray(headFilteredData) ? headFilteredData : []
//               }
//               onRowClick={handleRowClick}
//               renderAction={(row) =>
//                 row.status === "completed" ? (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent row navigation
//                       handleApprove(row);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Approve
//                   </button>
//                 ) : (
//                   <span className="text-gray-400">N/A</span>
//                 )
//               }
//             />
//             <br />
//             <br />
//           </div>
//         )}

//         {/* //========================================= Head table =============================================//

//         {headLoading && <Spinner />}
//         {headError && (
//           <>
//             {console.log("Error occurred:", headError)}
//             <p className="text-red-600">Can not load, check your connection.</p>
//           </>
//         )}
//         {!headLoading && !headError && headFilteredData && (
//           <div>
//             <div className="mt-10 text-2xl font-bold ">
//               List of employees who are waiting for department head approval:
//             </div>
//             <br />
//             <TableCard
//               header={header2}
//               inputData={
//                 Array.isArray(headFilteredData) ? headFilteredData : []
//               }
//               onRowClick={handleRowClick}
//             />
//             <br />
//             <br />
//           </div>
//         )} */}

//         {/* //========================================= Head table end =============================================// */}
//       </div>
//     </Wrapper>
//   );
// }

// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //

import React, { useEffect, useContext, useState, useCallback } from "react";
import useFetch from "../../api/useFetch.js";
import Spinner from "../../components/ui/Spinner";
import TableCard from "../../components/layout/TableCard";
import { HeadContext } from "../../contexts/AllDataContext.js";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/layout/SearchBar.jsx"; // Assuming path is correct
import TitleBar from "../../components/layout/TitleBar.jsx"; // Assuming path is correct
import Wrapper from "../SuperAdmin/Wrapper.jsx"; // Assuming Wrapper is needed here too for consistent layout

const RequestForHead = () => {
  const navigate = useNavigate();
  const { head, setHead } = useContext(HeadContext);
  const [headFilteredData, setHeadFilteredData] = useState([]); // Initialize as empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // useFetch for Head data
  const {
    data: headData,
    error: headError,
    loading: headLoading,
    get: getHead,
  } = useFetch("/request/admin"); // Base URL for the fetch

  // Effect to fetch Head data if not in context
  useEffect(() => {
    if (!head || head.length === 0) {
      // Check if head is empty or not loaded
      getHead("/department/get"); // Specific endpoint for head data
    } else {
      setHeadFilteredData(head); // Use existing context data if available
    }
  }, []);

  // Effect to update Head context and filtered data when headData from fetch changes
  useEffect(() => {
    if (headData && Array.isArray(headData)) {
      // Ensure headData is an array
      setHead(headData); // Update context
      setHeadFilteredData(headData); // Update local filtered state
    }
  }, [headData, setHead]); // Removed 'head' from dependency as it's updated here

  // Local search and filter handler for the SearchBar
  const handleSearch = useCallback((term, filter) => {
    setSearchTerm(term);
    setSelectedFilter(filter);
  }, []);

  // Effect to apply filtering whenever base data (head), searchTerm, or selectedFilter changes
  useEffect(() => {
    if (!head || !Array.isArray(head)) {
      setHeadFilteredData([]); // Ensure it's an empty array if no data
      return;
    }

    const filtered = head.filter((data) => {
      const staffName = `${data.staff_fname || ""} ${data.staff_sname || ""} ${
        data.staff_lname || ""
      }`;
      const deptName = data.dept_name || "";
      const email = data.email || "";

      const matchesSearch =
        staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deptName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase());

      // Note: Original data for head table doesn't have a 'status' field.
      // If you need filtering by status, ensure your /department/get endpoint provides it,
      // or adjust/remove this part of the filter. For now, assuming status filtering is not directly applicable.
      // const matchesFilter = selectedFilter === "All" || data.status === selectedFilter;

      // Returning only based on search term for now, as no status filter key provided in header2.
      return matchesSearch;
    });

    setHeadFilteredData(filtered);
  }, [head, searchTerm, selectedFilter]); // Include selectedFilter even if not directly used in matchesFilter

  const header2 = [
    { label: "First Name", key: "staff_fname" },
    { label: "Middle Name", key: "staff_sname" },
    { label: "Last Name", key: "staff_lname" },
    { label: "E-mail", key: "email" },
    { label: "Current Position", key: "current_position" },
    { label: "Unfinished Projects", key: "unfinished_project" },
    { label: "Reason", key: "reason" },
    { label: "Department Name", key: "dept_name" },
  ];

  const handleRowClick = (rowId) => {
    // This was previously '#', so I'm keeping it as a placeholder.
    // You'll likely want to navigate to a specific detail page for head requests too.
    navigate(`#`); // Adjust this path if needed
  };

  return (
    <Wrapper>
      <div>
        <TitleBar title="Requests for Department Head Approval" />
        <SearchBar
          filterParams={["All"]} // Adjust filter params if your head data has a status field
          searchFunction={handleSearch}
          placeholder="Search requests by name..."
        />

        {headLoading && <Spinner />}
        {headError && (
          <>
            {console.log("Error occurred:", headError)}
            <p className="text-red-600">
              Can not load department head requests, check your connection.
            </p>
          </>
        )}

        {/* Condition for "No employees are waiting..." */}
        {!headLoading && !headError && headFilteredData.length === 0 ? (
          <div>
            <div className="mt-10 text-2xl text-center font-bold">
              No employees are waiting for Department Head approval.
            </div>
            <br />
          </div>
        ) : (
          // Condition for displaying the table (only if there are requests)
          !headLoading &&
          !headError && (
            <div>
              <div className="mt-10 text-2xl font-bold">
                List of employees who are waiting for Department Head approval:
              </div>
              <br />
              <TableCard
                header={header2}
                inputData={headFilteredData} // Pass the filtered array directly
                onRowClick={handleRowClick}
                // No renderAction for head table in original code, so omit here
              />
              <br />
              <br />
            </div>
          )
        )}
      </div>
    </Wrapper>
  );
};

export default RequestForHead;
