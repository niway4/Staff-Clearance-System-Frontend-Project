import React, { useEffect } from "react";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ClearanceRequestersList() {
const navigate = useNavigate();
  // login post API
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

  const { data, error, loading, get } = useFetch("status");
  useEffect(() => {
    get("/progress");
  }, []);

  const header1 = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "E-mail", key: "email" },
    { label: "Status", key: "status" },
    { label: "Updated Date", key: "updated_at" },
  ];
  const header2 = [
    { label: "First Name", key: "staff_fname" },
    { label: "Middle Name", key: "staff_sname" },
    { label: "Last Name", key: "staff_lname" },
    { label: "E-mail", key: "email" },
  ];

  const [originalData1, setOriginalData1] = React.useState([]);
  const [originalData2, setOriginalData2] = React.useState([]);
  const [filteredData1, setFilteredData1] = React.useState([]);
  const [filteredData2, setFilteredData2] = React.useState([]);

// --- START --- OFFICE APPROVING EMPLOYEES GET API
  const {
    data: data1,
    error: error1,
    loading: loading1,
    get: get1,
  } = useFetch("/status/admin");

  useEffect(() => {
    get1("/displayAll");
  }, []);

  useEffect(() => {
    if (data1?.status) {
      setOriginalData1(data1.status);
      setFilteredData1(data1.status);
    }
  }, [data1]);
  // --- END --- OFFICE APPROVING EMPLOYEES GET API

  // --- START --- VICE AND HEAD APPROVING EMPLOYEES API
  const {
    data: data2,
    error: error2,
    loading: loading2,
    get: get2,
  } = useFetch("status/admin");

  useEffect(() => {
    get2("/request");
  }, []);

  useEffect(() => {
    if (data2) {
      setOriginalData2(data2);
      setFilteredData2(data2);
    }
  }, [data2]);
  // --- END --- VICE AND HEAD APPROVING EMPLOYEES API

  // const handleSearch = (searchTerm, selectedFilter) => {
  //   const filtered1 = originalData1.filter((data) => {
  //     // const matchesName = data.username
  //     //   .toLowerCase()
  //     //   .startsWith(searchTerm.toLowerCase());

  //     // const matchesFilter =
  //     //   selectedFilter === "All" || data.status === selectedFilter;

  //     // return matchesName && matchesFilter;
  //   });

  //   const filtered2 = originalData2.filter((data) => {
  //     const matchesName = data.fname
  //       .toLowerCase()
  //       .startsWith(searchTerm.toLowerCase());

  //     const matchesFilter =
  //       selectedFilter === "All" || data.status === selectedFilter;

  //     return matchesName && matchesFilter;
  //   });

  //   setFilteredData1(filtered1);
  //   setFilteredData2(filtered2);
  // };
  const handleSearch = (searchTerm, selectedFilter) => {
    const filtered1 = originalData1.filter((data) => {
      const name = data.username || "";
      const matchesName = name.toLowerCase().startsWith(searchTerm.toLowerCase());
  
      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;
  
      return matchesName && matchesFilter;
    });
  
    const filtered2 = originalData2.filter((data) => {
      const name = data.fname || "";
      const matchesName = name.toLowerCase().startsWith(searchTerm.toLowerCase());
  
      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;
  
      return matchesName && matchesFilter;
    });
  
    setFilteredData1(filtered1);
    setFilteredData2(filtered2);
  };
  
  const handleRowClick = (rowId) => {
    // <Link to={`/employee/${id}`}></Link>

    console.log("Row clicked with ID:", rowId);
     navigate(`/employee/${rowId}`);
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
        <div className="mt-10 text-2xl font-bold ">
          List of employees who are aproving the clearance request in different
          offices:
        </div>
        <br />
        {/* <TableCard
          header={header1}
          inputData={filteredData1}
          onRowClick={()=>{handleRowClick()}}
        /> */}
        <TableCard
  header={header1}
  inputData={Array.isArray(filteredData1) ? filteredData1 : []}
  onRowClick={handleRowClick}
/>

        <div className="mt-10 text-2xl font-bold">
          List of employees who are waiting for department head and Vice
          president approval:
        </div>
        <br />
        {/* <TableCard
          header={header2}
          inputData={filteredData2}
          onRowClick={handleRowClick}
        /> */}
        <TableCard
  header={header2}
  inputData={Array.isArray(filteredData2) ? filteredData2 : []}
  onRowClick={handleRowClick}
/>

      </div>
    </Wrapper>
  );
}
