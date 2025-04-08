import React from "react";
import Wrapper from "./Wrapper";
import TitleBar from "../../components/layout/TitleBar";
import TableCard from "../../components/layout/TableCard";
import debtors from "../../assets/data/DebtorList.js";

function DebtorProfile() {
  return (
    <Wrapper>
      <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        <TitleBar title="Debtor Profile" />
        <TableCard
          header={[
            "Loan Office",
            "Items Borrowed",
            "Borrowing Date",
            "Returning Date",
            "Status",
            "Comment",
          ]}
          inputData={debtors[0].itemsborrowed} // Assuming itemsborrowed is an array of objects
    
        />
      </div>
    </Wrapper>
  );
}

export default DebtorProfile;
