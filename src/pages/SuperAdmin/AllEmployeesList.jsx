import React, { useEffect, useState } from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import TableCard from "../../components/layout/TableCard";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch.js";
import { useEmployeeContext } from "../../contexts/EmployeeContext.js";

function AllEmployeesList() {
  const { employees, setEmployees } = useEmployeeContext();
  const header = [
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

  const [filteredData, setFilteredData] = useState([]);
  const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com");

  const navigate = useNavigate();

  // useEffect(() => {get("/users");  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setFilteredData(data);
  //   }
  // }, [data]);

  useEffect(() => {
    if (!employees) {
      get("/users");
    } else {
      setFilteredData(employees);
    }
  }, []);

  useEffect(() => {
    if (data && !employees) {
      setEmployees(data);
      setFilteredData(data);
    }
  }, [data]);
  const handleRowClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const handleSearch = (searchTerm, selectedFilter) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const filtered = employees?.filter((item) => {
      const matchesName = item.username
        ?.toLowerCase()
        .startsWith(lowerSearchTerm);

      const matchesFilter =
        selectedFilter === "All" || item.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setFilteredData(filtered);
  };

  if (loading)
    return (
      <Wrapper>
        <p>Loading employees...</p>
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper>
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
