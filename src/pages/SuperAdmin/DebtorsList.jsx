import React from "react";
import Wrapper from "./Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import TableCard from "../../components/layout/TableCard.jsx";
import debtors from "../../assets/data/DebtorList.js";
import SearchBar from "../../components/layout/SearchBar.jsx";
function DebtorsList() {
  const handleSerch = (searchTerm) => {
    const filteredData = debtors.filter(
      (data) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.contactnumber.toString().includes(searchTerm) ||
        data.amountowed.toString().includes(searchTerm) ||
        data.duedate.includes(searchTerm)
    );
    return filteredData;
  }
  return (
    <Wrapper>
      <div >
        <TitleBar title="Debtors List" />
        <SearchBar filterParams={[ ]} searchFunction={handleSerch} placeholder="Search for Debtors..." />
        <TableCard
          header={[
            "Name",
            "Email",
            "Contact Number",
            "Amount Owed",
            "Due Date",
       
          ]}
          inputData={debtors}
        />
      </div>
    </Wrapper>
  );
}

export default DebtorsList;
