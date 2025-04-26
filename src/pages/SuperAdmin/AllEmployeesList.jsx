import React, { useState } from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import TableCard from "../../components/layout/TableCard";
import employeeData from "../../assets/data/AllEmployees.js";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";

function AllEmployeesList() {
  const header = ["Employee Name", "Department", "Role", "Status"];
  const [filteredData, setFilteredData] = useState(employeeData);
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const handleSearch = (searchTerm, selectedFilter) => {
    const filtered = employeeData.filter((data) => {
      const matchesName = data.employeename
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDepartment = data.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = data.role
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return (matchesName || matchesDepartment || matchesRole) && matchesFilter;
    });

    setFilteredData(filtered);
  };

  return (
    <Wrapper>
      <div>
        <TitleBar title="All Employees List" />
          <div className="items-center flex justify-between ">  
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
          inputData={filteredData} // Pass filtered data to TableCard
          onRowClick={handleRowClick}
        />
      </div>
    </Wrapper>
  );
}

export default AllEmployeesList;
