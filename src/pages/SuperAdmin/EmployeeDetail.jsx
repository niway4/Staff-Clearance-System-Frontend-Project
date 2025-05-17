import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {employeeData} from "../../assets/data/AllEmployees"; 

function EmployeeDetail() {

  const { id } = useParams(); // Extract id from route parameters
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeData = () => {
      const foundEmployee = employeeData.find(
        (emp) => emp.id === parseInt(id, 10)
      );
      if (foundEmployee) {
        setEmployee(foundEmployee);
      } else {
        console.error("Employee not found");
      }
    };

    fetchEmployeeData();
  }, [id]);

  if (!employee) {
    return <div className="text-center">Employee not found</div>;
  }

  const handleClearance = (status) => {
    const message = status === "approve" ? "Clearance Approved" : "Clearance Rejected";
    if (window.confirm(`Are you sure you want to ${message.toLowerCase()}?`)) {
      alert(message);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // Logic to delete the employee
      // In a real application, you would also update the state and possibly make an API call
      console.log(`Employee ${employee.employeename} deleted.`);
      navigate("/employees");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {employee.employeename}
        </p>
        <p>
          <strong>ID:</strong> {employee.id}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Status:</strong> {employee.status}
        </p>
        <p>
          <strong>Contact:</strong> {employee.contact || "N/A"}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Clearance Status</h2>
        <div className={`p-4 text-white rounded ${employee.clearanceStatus === 'Approved' ? 'bg-green-500' : 'bg-red-500'}`}>
          {employee.clearanceStatus || "Pending"}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => handleClearance("approve")}
        >
          Approve Clearance
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => handleClearance("reject")}
        >
          Reject Clearance
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          onClick={() => navigate(`/edit-employee/${id}`)} // Navigate to edit page
        >
          Edit Employee
        </button>
        <button
          className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
          onClick={handleDelete}
        >
          Delete Employee
        </button>
      </div>
      <button
        className="mt-4 bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => navigate("/employees")}
      >
        Back to Employee List
      </button>
    </div>
  );
}

export default EmployeeDetail;