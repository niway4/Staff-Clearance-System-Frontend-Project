// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useEmplyeeData from "../../assets/data/useEmployeeData"; // Import the custom hook to fetch employee data

// function EditEmployee() {
// const {employeeData, fetcheError, fetchLoading} = useEmplyeeData();

//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const foundEmployee = employeeData.find(emp => emp.id === parseInt(id, 10));
//     if (foundEmployee) {
//       setEmployee(foundEmployee);
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to save changes, e.g., API call to update the employee
//     console.log("Employee updated:", employee);
//     navigate(`/employee/${id}`); // Redirect back to the employee detail page
//   };

//   if (!employee) {
//     return <div>Employee not found</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Edit Employee</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="employeename">Employee Name</label>
//           <input
//             type="text"
//             id="employeename"
//             name="employeename"
//             value={employee.employeename}
//             onChange={handleChange}
//             required
//             className="border rounded p-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="department">Department</label>
//           <input
//             type="text"
//             id="department"
//             name="department"
//             value={employee.department}
//             onChange={handleChange}
//             required
//             className="border rounded p-2 w-full"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditEmployee;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";
import Wrapper from "./Wrapper";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // this is a string
  const staffId = parseInt(id); // convert it to number
  const { data, error, loading, get } = useFetch("/admin");
  const [staffDetail, setStaffDetail] = useState(null);

  useEffect(() => {
    get("/allstaffs");
  }, []);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const found = data.find((staff) => staff.id === staffId);
      setStaffDetail(found || null);
    }
  }, [data, staffId]);

  return (
    <Wrapper>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2 flex justify-between items-center">
            Cleared Staff Profile
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/leavingletter/${id}`)}
                className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
              >
                Print Leaving Letter
              </button>
              <button
                onClick={() => navigate("/experienceletter")}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
              >
                Print Experience Letter
              </button>
            </div>
          </h1>
          {loading && <p className="text-gray-600">Loading...</p>}
          {error && <p className="text-red-600">Error: {error.message}</p>}
          {!loading && staffDetail ? (
            <div className="mb-8 space-y-2 text-lg text-gray-700">
              <p><strong>First Name:</strong> {staffDetail.fname}</p>
              <p><strong>Middle Name:</strong> {staffDetail.sname}</p>
              <p><strong>Last Name:</strong> {staffDetail.lname}</p>
              <p><strong>Position:</strong> {staffDetail.position}</p>
              <p><strong>Birthdate:</strong> {new Date(staffDetail.birthdate).toLocaleDateString()}</p>
              <p><strong>Salary:</strong> {staffDetail.salary}</p>
              <p><strong>Cleared:</strong> {staffDetail.cleared ? "Yes" : "No"}</p>
              {/* Add more fields as needed */}
            </div>
          ) : (
            !loading && <p className="text-gray-500">No staff found with ID: {id}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default EditEmployee;
