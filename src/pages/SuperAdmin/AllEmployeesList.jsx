// import React, { useEffect, useState } from "react";
// import TitleBar from "../../components/layout/TitleBar";
// import Wrapper from "./Wrapper";
// import TableCard from "../../components/layout/TableCard";
// import SearchBar from "../../components/layout/SearchBar";
// import Button from "../../components/ui/Button.jsx";
// import { useNavigate } from "react-router-dom";
// import useFetch from "../../api/useFetch.js";
// import { useEmployeeContext } from "../../contexts/EmployeeContext.js";
// import Spinner from "../../components/ui/Spinner.jsx";
// // import { Circles } from 'react-loader-spinner';

// function AllEmployeesList() {
//   // const { data: empdata, get: empget } = useFetch("/admin");

//   // useEffect(() => {
//   //   empget("/allstaffs"); // Fetch data on component mount
//   // }, []);

//   // console.log(empdata);

//   const { employees, setEmployees } = useEmployeeContext();
//   const header = [
//     { label: "First Name", key: "fname" },
//     { label: "Middle Name", key: "sname" },
//     { label: "Last Name", key: "lname" },
//     { label: "Phone", key: "phone" },
//     {
//       label: "E-mail",
//       key: "email",
//     },
//     { label: "Staff ID", key: "id" },
//   ];

//   const [filteredData, setFilteredData] = useState([]);
//   const { data, error, loading, get } = useFetch("/admin");

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!employees) {
//       get("/allstaffs");
//     } else {
//       setFilteredData(employees);
//     }
//   }, [ employees, get]);

//   useEffect(() => {
//     if (data && !employees) {
//       setEmployees(data);
//       setFilteredData(data);
//     }
//   }, [data, employees, setEmployees]);

//   const handleRowClick = (id) => {
//     console.log("Row clicked with ID:", id);
//     navigate(`/employee/${id}`);
//   };

//   const handleSearch = (searchTerm, selectedFilter) => {
//     const lowerSearchTerm = searchTerm.toLowerCase();

//     const filtered = employees?.filter((item) => {
//       const matchesName = item.fname?.toLowerCase().startsWith(lowerSearchTerm);

//       const matchesFilter =
//         selectedFilter === "All" || item.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     setFilteredData(filtered);
//   };

//   if (loading)
//     return (
//       <Wrapper>
//        { console.log(data)}
        
//         <TitleBar title="All Employees List" />
//         <div className="items-center flex justify-between">
//           <SearchBar
//             filterParams={["All", "Active", "Pending"]}
//             searchFunction={handleSearch}
//             placeholder="Search for employees..."
//           />
//         </div>
//         {/* <p>Loading employees...</p> */}
//         <Spinner />
//         {/* <Circles
//           height="80"
//           width="80"
//           color="sideBarColor"
//           ariaLabel="loading-indicator"
//         /> */}
//       </Wrapper>
//     );
//   if (error)
//     return (
//       <Wrapper>
//         <TitleBar title="All Employees List" />
//         <div className="items-center flex justify-between">
//           <SearchBar
//             filterParams={["All", "Active", "Pending"]}
//             searchFunction={handleSearch}
//             placeholder="Search for employees..."
//           />
//         </div>
//         <p>Error: {error.message}</p>
//       </Wrapper>
//     );

//   return (
//     <Wrapper>
//       <div>
//         <TitleBar title="All Employees List" />
//         <div className="items-center flex justify-between">
//           <SearchBar
//             filterParams={["All", "Active", "Pending"]}
//             searchFunction={handleSearch}
//             placeholder="Search for employees..."
//           />
//           <Button
//             className="py-2 ml-9"
//             variant="outline"
//             onClick={() => navigate("/add-employee")}
//           >
//             Add Employee
//           </Button>
//         </div>

//         <TableCard
//           header={header}
//           inputData={filteredData}
//           onRowClick={handleRowClick}
//         />
//       </div>
//     </Wrapper>
//   );
// }

// export default AllEmployeesList;








import React, { useEffect, useState, useCallback } from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import TableCard from "../../components/layout/TableCard";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch.js";
import { useEmployeeContext } from "../../contexts/EmployeeContext.js";
import Spinner from "../../components/ui/Spinner.jsx";

function AllEmployeesList() {
  const { employees, setEmployees } = useEmployeeContext();
  const header = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "Phone", key: "phone" },
    {
      label: "E-mail",
      key: "email",
    },
    { label: "Staff ID", key: "id" },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const { data, error, loading, get } = useFetch("/admin");

  const navigate = useNavigate();

  // Use useCallback to memoize handleSearch to prevent unnecessary re-renders of SearchBar
  const handleSearch = useCallback((searchTerm, selectedFilter) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const filtered = employees?.filter((item) => {
      // Check if any of the name fields (first, middle, last) start with the search term
      const matchesName =
        item.fname?.toLowerCase().startsWith(lowerSearchTerm);
        //  ||
        // item.sname?.toLowerCase().startsWith(lowerSearchTerm) ||
        // item.lname?.toLowerCase().startsWith(lowerSearchTerm);

      const matchesFilter =
        selectedFilter === "All" || item.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setFilteredData(filtered);
  }, [employees]); // Dependency on employees ensures the filter uses the latest data

  useEffect(() => {
    // Only fetch data if employees are not already in the context
    if (!employees || employees.length === 0) {
      get("/allstaffs");
    }
  }, [employees, get]);

  useEffect(() => {
    // When data is fetched, set it in context and apply initial filter
    if (data && data.length > 0) {
      setEmployees(data);
      setFilteredData(data); // Initially show all data
    } else if (employees && employees.length > 0) {
      // If employees are already in context, just set filteredData
      setFilteredData(employees);
    }
  }, [data, employees, setEmployees]);


  const handleRowClick = (id) => {
    console.log("Row clicked with ID:", id);
    navigate(`/employee/${id}`);
  };

  if (loading)
    return (
      <Wrapper>
        <TitleBar title="All Employees List" />
        <div className="items-center flex justify-between">
          <SearchBar
            filterParams={["All", "Active", "Pending"]}
            searchFunction={handleSearch}
            placeholder="Search for employees..."
          />
        </div>
        <Spinner />
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper>
        <TitleBar title="All Employees List" />
        <div className="items-center flex justify-between">
          <SearchBar
            filterParams={["All", "Active", "Pending"]}
            searchFunction={handleSearch}
            placeholder="Search for employees..."
          />
        </div>
        <p>Error: {error.message}</p>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div>
        <TitleBar title="All Employees List" />
        <div className="items-center flex justify-between">
          <SearchBar
            filterParams={["All", "Active", "Pending"]}
            searchFunction={handleSearch}
            placeholder="Search for employees..."
          />
          <Button
            className="py-2 ml-9"
            variant="outline"
            onClick={() => navigate("/add-employee")}
          >
            Add Employee
          </Button>
        </div>

        <TableCard
          header={header}
          inputData={filteredData}
          onRowClick={handleRowClick}
        />
      </div>
    </Wrapper>
  );
}

export default AllEmployeesList;