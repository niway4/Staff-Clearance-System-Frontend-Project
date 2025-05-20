import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";
import { useEffect } from "react";
import TableCard from "../../components/layout/TableCard.jsx";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/layout/SearchBar.jsx";

function ClearedStaff() {
  const [originalData, setOriginalData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

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
  const { data, error, loading, get } = useFetch("/cleared");

  useEffect(() => {
    get("/get");
  }, []);

  useEffect(() => {
    if (data?.message) {
      setOriginalData(data.message);
      setFilteredData(data.message);
    }
  }, [data]);
  console.log("Cleared Staff Data", data);
  

  // search

  const handleSearch = (searchTerm, selectedFilter) => {
    const filtered = originalData.filter((data) => {
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
      <div>
        <TitleBar title="Cleared Staff" />
        <SearchBar
          filterParams={["All", "Approved", "Pending", "Rejected"]}
          searchFunction={handleSearch}
          placeholder="Search for requests..."
        />
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}

         {!loading && originalData && (

        <TableCard
          header={header}
          inputData={Array.isArray(filteredData) ? filteredData : []}
          onRowClick={handleRowClick}
          // renderAction={(row) =>
          //   row.status === "completed" ? (
          //     <button
          //       onClick={(e) => {
          //         e.stopPropagation(); // Prevent row navigation
          //         handleApprove(row);
          //       }}
          //       className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          //     >
          //       Approve
          //     </button>
          //   ) : (
          //     <span className="text-gray-400">N/A</span>
          //   )
          // }
        />
         )}
      </div>
    </Wrapper>
  );
}

export default ClearedStaff;
