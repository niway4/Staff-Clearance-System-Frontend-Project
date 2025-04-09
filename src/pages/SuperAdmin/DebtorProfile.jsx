import React from "react";
import Wrapper from "./Wrapper";
import TitleBar from "../../components/layout/TitleBar";
import TableCard from "../../components/layout/TableCard";
import debtors from "../../assets/data/DebtorList.js";
import Button from "../../components/ui/Button";
import approveIcon from "../../assets/icons/approve.svg";
import message from "../../assets/icons/message.svg";

function DebtorProfile() {
  return (
    <Wrapper>
      <div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        <TitleBar title="Debtor Profile" />
        <div className="">
          <div className="flex flex-col items-center md:flex-row gap-4 mb-4">
            <div className=" flex flex-1 border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4  mb-4">
              <h2 className="text-xl font-semibold">Debtor Information</h2>
            <div className="flex-1">
            <img className="rounded-full border-gray border-4" src={debtors[0].img} alt="profile" />

              </div>
             <div className="flex-1">

              <p className="mt-2">Name: {debtors[0].name}</p>
              <p>Contact Number: {debtors[0].contactnumber}</p>
              <p>Email: {debtors[0].email}</p>
              <p>Amount Owed: ${debtors[0].amountowed}</p>
              <p>Due Date: {debtors[0].duedate}</p>
              <p>Action: {debtors[0].action}</p>
             </div>
            </div>
            <div className="flex-3 h-fit  border border-black rounded-xl shadow-xl shadow-gray-400 bg-white p-4  mb-4">
              <div className="flex">
                <Button className="rounded-lg w-21" variant="outline">
                  <div className="flex items-center ">
                    <img
                      className="w-6 h-6 mr-3 invert"
                      src={approveIcon}
                      alt="approve"
                    />
                    Approve Request
                  </div>
                </Button>
              </div>
              <div className="flex">
                <Button className="mt-5 rounded-lg w-full  " variant="outline">
                  <div className="flex items-center ">
                    <img
                      className="w-6 h-6 mr-3 invert"
                      src={message}
                      alt="message"
                    />
                    Send Message
                  </div>
                </Button>
              </div>
            </div>
          </div>
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
      </div>
    </Wrapper>
  );
}

export default DebtorProfile;
