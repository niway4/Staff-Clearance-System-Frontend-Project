import React from "react";
import Wrapper from "./Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import TableCard from "../../components/layout/TableCard.jsx";
import debtors from "../../assets/data/DebtorList.js";
import SearchBar from "../../components/layout/SearchBar.jsx";
function DebtorsList() {
  return (
    <Wrapper>
      <div >
        <TitleBar title="Debtors List" />
        <SearchBar placeholder="Search for requests..." />
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
