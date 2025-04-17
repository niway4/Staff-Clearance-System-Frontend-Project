import React from "react";
import TitleBar from "../../components/layout/TitleBar";
import Wrapper from "./Wrapper";
import TableCard from "../../components/layout/TableCard";
import employeeData from "../../assets/data/AllEmployees.js";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";

function AllEmployeesList() {
   const header = ["Employee Name", "Department", "Role", "Status"];
   const navigate = useNavigate();
   const handleRowClick = (id) => {
      navigate(`/employees/${id}`);
   };
   return (
      <Wrapper>
         <div>
            <TitleBar title="All Employees List" />
            <div className="flex w-screen items-center">
               <SearchBar placeholder="Search for requests..." />
               <Button
                  className="ml-9 mb-4"
                  variant="outline"
                  onClick={() => {
                     navigate("/add-employee");
                  }}
               >
                  Add Employee
               </Button>
            </div>
            <TableCard
               header={header}
               inputData={employeeData}
               onRowClick={handleRowClick}
            />
         </div>
      </Wrapper>
   );
}

export default AllEmployeesList;
