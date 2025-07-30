import React from "react";

const 
Spinner = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
    </div>
  //    <div className="flex justify-center items-center h-20">
  //    <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  //  </div>
  );
};

export default Spinner;
