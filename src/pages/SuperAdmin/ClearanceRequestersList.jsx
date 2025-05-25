// import React, { useEffect, useContext } from "react";
// import TitleBar from "../../components/layout/TitleBar";
// import SearchBar from "../../components/layout/SearchBar";
// import TableCard from "../../components/layout/TableCard";
// import Wrapper from "./Wrapper";
// import useFetch from "../../api/useFetch.js";
// import Spinner from "../../components/ui/Spinner";
// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { HRContext } from "../../contexts/AllDataContext.js";
// import { HeadContext } from "../../contexts/AllDataContext.js";

// export default function ClearanceRequestersList() {
//   const { data, error, loading, get } = useFetch("/request/admin");

//   useEffect(() => {
//     get("/get"); // Fetch data on component mount
//   }, []);

//   //     console.log(data);

//   const navigate = useNavigate();

//   const { HR, setHR } = useContext(HRContext);
//   const [HRFilteredData, setHRFilteredData] = React.useState([]);

//   const { head, setHead } = useContext(HeadContext);
//   const [headFilteredData, setHeadFilteredData] = React.useState([]);

//   //========================================= HR =============================================//

//   const {
//     data: HRData,
//     error: HRError,
//     loading: HRLoading,
//     get: getHR,
//   } = useFetch("/status/admin");

//   useEffect(() => {
//     if (!HR) {
//       getHR("/displayAll");
//     } else {
//       setHRFilteredData(HR);
//     }
//   }, []);

//   useEffect(() => {
//     if (HRData?.status) {
//       setHR(HRData.status);
//       setHRFilteredData(HRData.status);
//     }
//   }, [HRData, HR, setHR]);

//   //========================================= head =============================================//

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

//   const {
//     data: postData,
//     error: postError,
//     loading: postLoading,
//     post,
//   } = useFetch("/admin");

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     const newData = { username: "bina", password: "123456" };
//     await post("/login", newData);
//   };

//   const header1 = [
//     { label: "First Name", key: "fname" },
//     { label: "Middle Name", key: "sname" },
//     { label: "Last Name", key: "lname" },
//     { label: "E-mail", key: "email" },
//     { label: "Status", key: "status" },
//     { label: "Updated Date", key: "updated_at" },
//     { label: "Action", key: "action" },
//   ];
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

//   const { data: postdata, post: postApprove } = useFetch("/cleared");

//   const handleApprove = (row) => {
//     navigate(`/clearedstaffform/${row.staff_id}`);
//   };

//   console.log("postdata", postdata);

//   const handleSearch = (searchTerm, selectedFilter) => {
//     if (!HR && !head) return;

//     const filtered1 = HR.filter((data) => {
//       const name = data.fname || "";
//       const matchesName = name
//         .toLowerCase()
//         .startsWith(searchTerm.toLowerCase());

//       const matchesFilter =
//         selectedFilter === "All" || data.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     setHRFilteredData(filtered1);
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
//         <TitleBar title="Clearance Requesters List" />
//         <SearchBar
//           filterParams={["All", "Approved", "Pending", "Rejected"]}
//           searchFunction={handleSearch}
//           placeholder="Search for requests..."
//         />
//         <div>
//           <button onClick={handleSignIn}>login</button>
//           <br />

//           {postLoading && <p>post Loading...</p>}
//           {postError && <p>post Error: {postError.message}</p>}
//           {postData && ` posted ${console.log(postData)}`}
//         </div>
//         {/* //========================================= HR table =============================================// */}

//         {HRLoading && <Spinner />}
//         {HRError && (
//           <>
//             {console.log("Error occurred:", HRError)}
//             <p className="text-red-600">Can not load, check your connection.</p>
//           </>
//         )}
//         {!HRLoading && !HRError && HRFilteredData && (
//           <div>
//             <div className="mt-10 text-2xl font-bold ">
//               List of employees who are aproving the clearance request in
//               different offices:
//             </div>
//             <br />
//             <TableCard
//               header={header1}
//               inputData={Array.isArray(HRFilteredData) ? HRFilteredData : []}
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

//         {/* //========================================= Head table =============================================// */}

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
//         )}

//         {/* //========================================= Head table end =============================================// */}
//       </div>
//     </Wrapper>
//   );
// }


// ==================================  take outing head and vice seapratelly


import React, { useEffect, useContext } from "react";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";
import Spinner from "../../components/ui/Spinner";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HRContext } from "../../contexts/AllDataContext.js";

export default function ClearanceRequestersList() {
  const { data, error, loading, get } = useFetch("/request/admin");

  useEffect(() => {
    get("/get"); // Fetch data on component mount
  }, []);

      console.log(data);

  const navigate = useNavigate();

  const { HR, setHR } = useContext(HRContext);
  const [HRFilteredData, setHRFilteredData] = React.useState([]);


  //========================================= HR =============================================//

  const {
    data: HRData,
    error: HRError,
    loading: HRLoading,
    get: getHR,
  } = useFetch("/status/admin");


  
  useEffect(() => {
    if (!HR) {
      getHR("/displayAll");
    } else {
      setHRFilteredData(HR);
    }
  }, []);

  useEffect(() => {
    if (HRData?.status) {
      setHR(HRData.status);
      setHRFilteredData(HRData.status);
    }
  }, [HRData, HR, setHR]);


  //========================================= login post API =============================================//

  const {
    data: postData,
    error: postError,
    loading: postLoading,
    post,
  } = useFetch("/admin");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const newData = { username: "bina", password: "123456" };
    await post("/login", newData);
  };

  const header1 = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "E-mail", key: "email" },
    { label: "Status", key: "status" },
    { label: "Updated Date", key: "updated_at" },
    { label: "Action", key: "action" },
  ];


  const { data: postdata, post: postApprove } = useFetch("/cleared");

  const handleApprove = (row) => {
    navigate(`/clearedstaffform/${row.staff_id}`);
  };

  console.log("postdata", postdata);

  const handleSearch = (searchTerm, selectedFilter) => {
    if (!HR ) return;

    const filtered1 = HR.filter((data) => {
      const name = data.fname || "";
      const matchesName = name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setHRFilteredData(filtered1);
  };

  const handleRowClick = (rowId) => {
    navigate(`/requester/${rowId}`);
  };


  return (
    <Wrapper>

      <div>
        <TitleBar title="Clearance Requesters List" />
        <SearchBar
          filterParams={["All", "Approved", "Pending", "Rejected"]}
          searchFunction={handleSearch}
          placeholder="Search for requests..."
        />
        <div>
          <button onClick={handleSignIn}>login</button>
          <br />

          {postLoading && <p>post Loading...</p>}
          {postError && <p>post Error: {postError.message}</p>}
          {postData && ` posted ${console.log(postData)}`}
        </div>
        {/* //========================================= HR table =============================================// */}

        {HRLoading && <Spinner />}
        {HRError && (
          <>
            {console.log("Error occurred:", HRError)}
            <p className="text-red-600">Can not load, check your connection.</p>
          </>
        )}
        {!HRLoading && !HRError && HRFilteredData && (
          <div>
            <div className="mt-10 text-2xl font-bold ">
              List of employees who are aproving the clearance request in
              different offices:
            </div>
            <br />
            <TableCard
              header={header1}
              inputData={Array.isArray(HRFilteredData) ? HRFilteredData : []}
              onRowClick={handleRowClick}
              renderAction={(row) =>
                row.status === "completed" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row navigation
                      handleApprove(row);
                    }}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )
              }
            />
            <br />
            <br />
          </div>
        )}

      </div>
    </Wrapper>
  );
}
