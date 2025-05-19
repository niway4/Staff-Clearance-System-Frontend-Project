import React, { useEffect } from "react";
import employeeRequests from "../../assets/data/employeeRequests";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";

export default function ClearanceRequestersList() {
  const header1 = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "E-mail", key: "email" },
    { label: "Status", key: "status" },
    { label: "Updated Date", key: "updated_at" },
  ];
  const header2 = [
    { label: "Id", key: "id" },
    { label: "Name", key: "username" },
    { label: "E-mail", key: "email" },
    { label: "Phone", key: "phone" },
    {
      label: "Address",
      key: "address",
      render: (address) => `${address.street}, ${address.city}`,
    },
    { label: "website", key: "website" },
  ];

  const {
    data: data1,
    error: error1,
    loading: loading1,
    get: get1,
  } = useFetch("/status/admin");

  const {
    data: data2,
    error: error2,
    loading: loading2,
    get: get2,
  } = useFetch("https://jsonplaceholder.typicode.com");
  

  const [filteredData1, setFilteredData1] = React.useState([]);
  const [filteredData2, setFilteredData2] = React.useState([]);

  useEffect(() => {
    get1("/displayAll");
  }, []);

  useEffect(() => {
    get2("/users");
  }, []);

  useEffect(() => {
    if (data1) setFilteredData1(data1);
  }, [data1]);

  useEffect(() => {
    if (data2) setFilteredData2(data2);
  }, [data2]);

  const handleSearch = (searchTerm, selectedFilter) => {
    const fData1 = filteredData1.status;
    const filtered1 = fData1.filter((data) => {
      const matchesName = data.fname
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    const filtered2 = filteredData2.filter((data) => {
      const matchesName = data.name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setFilteredData1(filtered1);
    setFilteredData2(filtered2);
  };

  const handleRowClick = () => {
    console.log("hello");
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
        <TableCard
          header={header1}
          inputData={filteredData1.status}
          onRowClick={handleRowClick}
        />
        <div className="mt-10">
          Second Table {console.log(filteredData1, filteredData2)}
        </div>
        <TableCard
          header={header2}
          inputData={filteredData2}
          onRowClick={handleRowClick}
        />
      </div>
    </Wrapper>
  );
}
