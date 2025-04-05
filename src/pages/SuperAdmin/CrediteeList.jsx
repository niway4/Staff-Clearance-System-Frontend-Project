import React from "react";
import Wrapper from "./Wrapper";
import TitleBar from "../../components/layout/TitleBar";
import TableCard from "../../components/layout/TableCard";
import debtors from "../../assets/data/DebtorList.js";
import SearchBar from "../../components/layout/SearchBar";
function CrediteeList() {
  return (
    <Wrapper>
      <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        <TitleBar title="Creditees List" />
        <SearchBar placeholder="Search for requests..." />
        <TableCard
          header={[
            "Name",
            "Email",
            "Contact Number",
            "Amount Owed",
            "Due Date",
            "Action",
          ]}
          inputData={debtors}
        />
      </div>
    </Wrapper>
  );
}

export default CrediteeList;
