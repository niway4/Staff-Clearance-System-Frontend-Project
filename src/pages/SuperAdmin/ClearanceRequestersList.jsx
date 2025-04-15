import React from "react";
import employeeRequests from "../../assets/data/employeeRequests";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";

const header = [
  "Employee Name",
  "Department",
  "Request Date",
  "Status",
  "Action",
];

export default function ClearanceRequestersList() {
  return (
    <Wrapper>

      <div>
        <TitleBar title="Clearance Requesters List" />
        <SearchBar placeholder="Search for requests..." />
        <TableCard header={header} inputData={employeeRequests} />
      </div>
    </Wrapper>
  );
}
