// import React, { useContext } from "react";
// import TitleBar from "../../components/layout/TitleBar";
// import Wrapper from "./Wrapper";
// import useFetch from "../../api/useFetch.js";
// import { useEffect } from "react";
// import TableCard from "../../components/layout/TableCard.jsx";
// import { useNavigate } from "react-router-dom";
// import SearchBar from "../../components/layout/SearchBar.jsx";
// import Spinner from "../../components/ui/Spinner.jsx";
// import { StaffContext } from "../../contexts/AllDataContext.js";

// function ClearedStaff() {
//   const { staff, setStaff } = useContext(StaffContext);

//   const [filteredData, setFilteredData] = React.useState([]);
//   const { data, error, loading, get } = useFetch("/cleared");

//   const navigate = useNavigate();

//   const header = [
//     { label: "First Name", key: "fname" },
//     { label: "Middle Name", key: "sname" },
//     { label: "Last Name", key: "lname" },
//     { label: "Cleared Date", key: "cleared_date" },
//     {
//       label: "Educational Level",
//       key: "educational_level",
//     },
//     { label: "Postition", key: "position" },
//   ];
//   // fetch cleared data

//   useEffect(() => {
//     if (!staff) {
//       get("/get");
//     } else {
//       setFilteredData(staff);
//     }
//   }, []);

//   useEffect(() => {
//     if (data && !staff) {
//       setStaff(data.message);
//       setFilteredData(data.message);
//     }
//   }, [data, staff, setStaff]);

//   const handleSearch = (searchTerm, selectedFilter) => {
//     const filtered = staff.filter((data) => {
//       const name = data.fname || "";
//       const matchesName = name
//         .toLowerCase()
//         .startsWith(searchTerm.toLowerCase());

//       const matchesFilter =
//         selectedFilter === "All" || data.status === selectedFilter;

//       return matchesName && matchesFilter;
//     });

//     setFilteredData(filtered);
//   };

//   // row click
//   const handleRowClick = (rowId) => {
//     navigate(`/clearedstaff/${rowId}`);
//   };

//   return (
//     <Wrapper>
//       {console.log(data)}

//       <div>
//         <TitleBar title="Cleared Staff" />
//         <SearchBar
//           filterParams={["All", "Approved", "Pending", "Rejected"]}
//           searchFunction={handleSearch}
//           placeholder="Search for requests..."
//         />
//         {loading && <Spinner />}
//         {error && <p className="text-red-600">Error: {error.message}</p>}

//         {!loading && staff && (
//           <TableCard
//             header={header}
//             inputData={Array.isArray(filteredData) ? filteredData : []}
//             onRowClick={handleRowClick}
//           />
//         )}
//       </div>
//     </Wrapper>
//   );
// }

// export default ClearedStaff;









import React, { useContext } from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";
import { useEffect } from "react";
import TableCard from "../../components/layout/TableCard.jsx";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/layout/SearchBar.jsx";
import Spinner from "../../components/ui/Spinner.jsx";
import { StaffContext } from "../../contexts/AllDataContext.js";

function ClearedStaff() {
  const { staff, setStaff } = useContext(StaffContext);

  const [filteredData, setFilteredData] = React.useState([]);
  const { data, error, loading, get } = useFetch("/cleared");

  const navigate = useNavigate();

  const header = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "Cleared Date", key: "cleared_date" },
    {
      label: "Educational Level",
      key: "educational_level",
    },
    { label: "Postition", key: "position" },
  ];
  // fetch cleared data

  useEffect(() => {
    if (!staff) {
      get("/get");
    } else {
      setFilteredData(staff);
    }
  }, []);

  useEffect(() => {
    if (data && !staff) {
      setStaff(data.message);
      setFilteredData(data.message);
    }
  }, [data, staff, setStaff]);

  const handleSearch = (searchTerm, selectedFilter) => {
    if (!staff) return;
    const filtered = staff.filter((data) => {
      const name = data.fname || "";
      const matchesName = name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setFilteredData(filtered);
  };

  // row click
  const handleRowClick = (rowId) => {
    navigate(`/clearedstaff/${rowId}`);
  };

  return (
    <Wrapper>
      {console.log(data)}

      <div>
        <TitleBar title="Cleared Staff" />
        
        {loading && <Spinner />}
        {error && <p className="text-red-600">Error: {error.message}</p>}

        {!loading && staff && (
          <div>
            <SearchBar
            filterParams={["All", "Approved", "Pending", "Rejected"]}
            searchFunction={handleSearch}
            placeholder="Search for requests..."
                    />
            <TableCard
              header={header}
              inputData={Array.isArray(filteredData) ? filteredData : []}
              onRowClick={handleRowClick}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default ClearedStaff;
