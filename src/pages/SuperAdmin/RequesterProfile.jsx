import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams(); // this gets the ":id" from the URL

  useEffect(() => {
    // You can now fetch employee data using the ID
    console.log("Employee ID:", id);
    // fetch(`/api/employee/${id}`)...
  }, [id]);

  return <div>Showing details for Employee ID: {id}</div>;
};

export default EmployeeDetail;
