import React from "react";
import employeeRequests from "../../assets/data/employeeRequests";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";

const header = ["Employee Name", "Department", "Request Date", "Status"];

export default function ClearanceRequestersList() {
  const [filteredData, setFilteredData] = React.useState(employeeRequests);
  const handleSearch = (searchTerm, selectedFilter) => {
    const filtered = employeeRequests.filter((data) => {
      const matchesName = data.employeename
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDepartment = data.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = data.requestdate
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
        <TitleBar title="Clearance Requesters List" />
        <SearchBar filterParams={['All','Approved', 'Pending', 'Rejected']} searchFunction={handleSearch} placeholder="Search for requests..." />
        <TableCard header={header} inputData={filteredData} />
      </div>
    </Wrapper>
  );
}
