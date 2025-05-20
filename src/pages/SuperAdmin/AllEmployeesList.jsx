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
  const { data: empdata, get: empget } = useFetch("/admin");

  useEffect(() => {
    empget("/allstaffs"); // Fetch data on component mount
  }, []);

  console.log(empdata);

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

  useEffect(() => {
    if (!employees) {
      get("/allstaffs");
    } else {
      setFilteredData(employees);
    }
  }, []);

  useEffect(() => {
    if (data && !employees) {
      setEmployees(data);
      setFilteredData(data);
    }
  }, [data, employees, setEmployees]);

  const handleRowClick = (id) => {
    console.log("Row clicked with ID:", id);
    navigate(`/employee/${id}`);
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
