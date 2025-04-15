import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import TableCard from "../../components/layout/TableCard";
import employeeData from "../../assets/data/AllEmployees.js";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button.jsx";
function AllEmployeesList() {
  const header = ["Employee Name", "Department", "Role", "Status", "Action"];
  return (
    <Wrapper>
      <div>
        <TitleBar title="All Employees List" />
        <SearchBar placeholder="Search for requests..." />
        <TableCard header={header} inputData={employeeData} />
      </div>
    </Wrapper>
  );
}

export default AllEmployeesList;
