import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEmplyeeData from "../../assets/data/useEmployeeData"; // Import the custom hook to fetch employee data

function EditEmployee() {
const {employeeData, fetcheError, fetchLoading} = useEmplyeeData();

  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundEmployee = employeeData.find(emp => emp.id === parseInt(id, 10));
    if (foundEmployee) {
      setEmployee(foundEmployee);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save changes, e.g., API call to update the employee
    console.log("Employee updated:", employee);
    navigate(`/employee/${id}`); // Redirect back to the employee detail page
  };

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="employeename">Employee Name</label>
          <input
            type="text"
            id="employeename"
            name="employeename"
            value={employee.employeename}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;