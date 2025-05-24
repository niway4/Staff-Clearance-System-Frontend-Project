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
// import { ViceContext } from "../../contexts/AllDataContext.js";
// import { HRContext } from "../../contexts/AllDataContext.js";

// export default function ClearanceRequestersList() {
//   const navigate = useNavigate();
//   const { head, setHead } = useContext(HeadContext);
//   const { vice, setVice } = useContext(ViceContext);
//   const { HR, setHR } = useContext(HRContext);

//   const [headFilteredData, setHeadFilteredData] = React.useState([]);
//   const [viceFilteredData, setViceFilteredData] = React.useState([]);
//   const [HRFilteredData, setHRFilteredData] = React.useState([]);

//   // const { data, error, loading, get } = useFetch("/cleared");

//   //=================================== head ======================================= //
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
//     if (head?.message) {
//       setHead(headData.message);
//       setHeadFilteredData(headData.message);
//     }
//   }, [headData, head, setHead]);
//   //=================================== vice ======================================= //

//   const {
//     data: viceData,
//     error: viceError,
//     loading: viceLoading,
//     get: getVice,
//   } = useFetch("/request/admin");

//   useEffect(() => {
//     if (!vice) {
//       getVice("/get");
//     } else {
//       setViceFilteredData(vice);
//     }
//   }, []);

//   useEffect(() => {
//     if (vice?.message) {
//       setVice(viceData.message);
//       setViceFilteredData(viceData.message);
//     }
//   }, [viceData, vice, setVice]);

//     //========================================= HR =============================================//

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
//     if (HR?.status) {
//       setHR(HRData.status);
//       setHRFilteredData(HRData.status);
//     }
//   }, [HRData, HR, setHR]);

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

//   // const { data, error, loading, get } = useFetch("status");
//   // useEffect(() => {
//   //   get("/progress");
//   // }, []);
//   // console.log("data", data);

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
//   ];

//   // const [originalData1, setOriginalData1] = React.useState([]);
//   // const [originalData2, setOriginalData2] = React.useState([]);

//   // --- START --- OFFICE APPROVING EMPLOYEES GET API
//   // const {
//   //   data: data1,
//   //   error: error1,
//   //   loading: loading1,
//   //   get: get1,
//   // } = useFetch("/status/admin");

//   // useEffect(() => {
//   //   get1("/displayAll");
//   // }, []);

//   // useEffect(() => {
//   //   if (data1?.status) {
//   //     setOriginalData1(data1.status);
//   //     setHeadFilteredData(data1.status);
//   //   }
//   // }, [data1]);
//   // --- END --- OFFICE APPROVING EMPLOYEES GET API

//   // --- START --- VICE AND HEAD APPROVING EMPLOYEES API
//   // const {
//   //   data: data2,
//   //   error: error2,
//   //   loading: loading2,
//   //   get: get2,
//   // } = useFetch("request/admin");

//   // useEffect(() => {
//   //   get2("/department/get");
//   // }, []);

//   // useEffect(() => {
//   //   if (data2) {
//   //     setOriginalData2(data2);
//   //     setViceFilteredData(data2);
//   //   }
//   // }, [data2]);

//   // --- END --- VICE AND HEAD APPROVING EMPLOYEES API
//   // const renderAction = (row) => {
//   //   if (row.status?.toLowerCase() === "completed") {
//   //     return (
//   //       <button
//   //         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//   //         onClick={(e) => {
//   //           e.stopPropagation(); // Prevent triggering row click
//   //           // handle approval logic here
//   //           alert(`Approved ${row.fname} ${row.lname}`);
//   //         }}
//   //       >
//   //         Approve
//   //       </button>
//   //     );
//   //   }
//   //   return null;
//   // };

//   const { data: postdata, post: postApprove } = useFetch("/cleared");

//   // const handleApprove = async (row) => {
//   //   try {
//   //     await postApprove("/create", { staff_id: row.staff_id || row.id });
//   //     alert("Approved successfully!");

//   //     // Refresh the data after approval
//   //     get1("/displayAll");
//   //   } catch (err) {
//   //     alert("Approval failed. Try again.");
//   //     console.error(err);
//   //   }
//   // };

//   const handleApprove = (row) => {
//     navigate(`/clearedstaffform/${row.staff_id}`);
//   };

//   console.log("postdata", postdata);

//   const handleSearch = (searchTerm, selectedFilter) => {
//     const filtered1 = HRData.filter((data) => {
//       const name = data.fname || "";
//       const matchesName = name
//         .toLowerCase()
//         .startsWith(searchTerm.toLowerCase());

//       const matchesFilter =
//         selectedFilter === "All" || data.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     const filtered2 = headData.filter((data) => {
//       const name = data.staff_fname || "";
//       const matchesName = name
//         .toLowerCase()
//         .startsWith(searchTerm.toLowerCase());

//       const matchesFilter =
//         selectedFilter === "All" || data.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     setHeadFilteredData(filtered1);
//     setViceFilteredData(filtered2);
//   };

//   const handleRowClick = (rowId) => {
//     navigate(`/requester/${rowId}`);
//   };
//   const handleRowClick2 = (id) => {
//     navigate(`#`);
//   };

//   return (
//     <Wrapper>
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

//         {HRLoading && (
//           // <p className="text-gray-600">Loading...</p>
//           <Spinner />
//         )}
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
//               inputData={
//                 Array.isArray(HRFilteredData) ? HRFilteredData : []
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

//         {
//           headLoading && !headError && <Spinner />
//           // <p className="text-gray-600">Loading...</p>
//         }
//         {headError && (
//           <>
//             {console.log("Error occurred:", headError)}
//             <p className="text-red-600">Can not load, check your connection.</p>
//           </>
//         )}
//         {!headLoading && !headError && viceFilteredData && (
//           <div>
//             <div className="mt-10 text-2xl font-bold">
//               List of employees who are waiting for department head and Vice
//               president approval:
//             </div>{" "}
//             <br />
//             <TableCard
//               header={header2}
//               inputData={
//                 Array.isArray(viceFilteredData) ? viceFilteredData : []
//               }
//               onRowClick={handleRowClick2}
//             />
//           </div>
//         )}
//       </div>
//     </Wrapper>
//   );
// }

// //
// //
// /
// /

// /
// /
// /
// /
// /
// //
// /
// /
// /
// /
// /
// /
// /
// /

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
import { HeadContext } from "../../contexts/AllDataContext.js";

export default function ClearanceRequestersList() {
  // /
  // /
  // /
  // /
  // /
  // /
  // /
  // /

  // const {data, error, loading, get} = useFetch("/request/admin");

  //   useEffect(() => {
  //         get('/get'); // Fetch data on component mount
  //     }, []);

  //     console.log(data);

  // /
  // /
  // /
  // /
  // /
  // /
  // /
  // /

  const navigate = useNavigate();

  const { HR, setHR } = useContext(HRContext);
  const [HRFilteredData, setHRFilteredData] = React.useState([]);

  const { head, setHead } = useContext(HeadContext);
  const [headFilteredData, setHeadFilteredData] = React.useState([]);

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

  //========================================= head =============================================//

  const {
    data: headData,
    error: headError,
    loading: headLoading,
    get: getHead,
  } = useFetch("/request/admin");

  useEffect(() => {
    if (!head) {
      getHead("/department/get");
    } else {
      setHeadFilteredData(head);
    }
  }, []);

  useEffect(() => {
    if (headData && !head) {
      setHead(headData);
      setHeadFilteredData(headData);
    }
  }, [headData, head, setHead]);
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

  const { data: postdata, post: postApprove } = useFetch("/cleared");

  const handleApprove = (row) => {
    navigate(`/clearedstaffform/${row.staff_id}`);
  };

  console.log("postdata", postdata);

  const handleSearch = (searchTerm, selectedFilter) => {
    if (!HR && !head) return;

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
  const handleRowClick2 = (id) => {
    navigate(`#`);
  };

  return (
    <Wrapper>
      {console.log(head)}

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

        {/* //========================================= Head table =============================================// */}

        {headLoading && <Spinner />}
        {headError && (
          <>
            {console.log("Error occurred:", headError)}
            <p className="text-red-600">Can not load, check your connection.</p>
          </>
        )}
        {!headLoading && !headError && headFilteredData && (
          <div>
            <div className="mt-10 text-2xl font-bold ">
              List of employees who are waiting for department head approval:
            </div>
            <br />
            <TableCard
              header={header2}
              inputData={
                Array.isArray(headFilteredData) ? headFilteredData : []
              }
              onRowClick={handleRowClick}
            />
            <br />
            <br />
          </div>
        )}

        {/* //========================================= Head table end =============================================// */}
      </div>
    </Wrapper>
  );
}
