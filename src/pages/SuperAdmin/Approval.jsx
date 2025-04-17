import React from "react";
import Wrapper from "./Wrapper";
import TitleBar from "../../components/layout/TitleBar";
import ApprovalForm from "../../components/forms/ApprovalForm";

function Approval() {
   return (
      <Wrapper>
         <TitleBar title={"Approval"} />
         <div className="flex items-center justify-center h-[calc(100vh-60px)] bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-green-600 text-center animate-blow">
               You have successfully approved the clearance request.
            </h1>
            <div className="mt-6 w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
               <ApprovalForm />
            </div>
         </div>
      </Wrapper>
   );
}

export default Approval;
