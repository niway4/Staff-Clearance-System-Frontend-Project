import React, { useState } from "react";
import employeeData from "../../assets/data/AllEmployees.js";
import Wrapper from "../../pages/SuperAdmin/Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import Button from "../ui/Button.jsx";

const AddEmployeeForm = () => {
   const [formData, setFormData] = useState({
      employeename: "",
      id: "",
      department: "",
      role: "",
      status: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newEmployee = { ...formData };
      employeeData.push(newEmployee);
      console.log("New Employee Added Successfully!");
      setFormData({
         employeename: "",
         id: "",
         department: "",
         role: "",
         status: "",
      });
   };

   return (
      <Wrapper>
         <TitleBar title="Add New Employee" />
         <div className="flex items-center justify-center bg-white ">
            <div className="flex flex-col items-center justify-center border-sideBarColor border h-fit  p-4 m-6 bg-lightGray rounded-lg shadow-xl">
               <form onSubmit={handleSubmit} className="space-y-4">
                  <label htmlFor="employeename" className="block">
                     Employee Name:
                  </label>
                  <input
                     type="text"
                     id="employeename"
                     name="employeename"
                     placeholder="Enter Employee Name"
                     value={formData.employeename}
                     onChange={handleChange}
                     className="border rounded p-2 w-full  focus:outline-sideBarColor"
                     required
                  />
                  <label htmlFor="id" className="block">
                     Employee ID:
                  </label>
                  <input
                     type="number"
                     id="id"
                     name="id"
                     placeholder="Enter Employee ID"
                     value={formData.id}
                     onChange={handleChange}
                     className="border rounded p-2 w-full  focus:outline-sideBarColor"
                     required
                  />
                  <label htmlFor="department" className="block">
                     Department:
                  </label>
                  <input
                     type="text"
                     id="department"
                     name="department"
                     placeholder="Enter Department"
                     value={formData.department}
                     onChange={handleChange}
                     className="border rounded p-2 w-full  focus:outline-sideBarColor"
                     required
                  />
                  <label htmlFor="role" className="block">
                     Role:
                  </label>
                  <input
                     type="text"
                     id="role"
                     name="role"
                     placeholder="Enter Role"
                     value={formData.role}
                     onChange={handleChange}
                     className="border rounded p-2 w-full  focus:outline-sideBarColor"
                     required
                  />
                  <label htmlFor="status" className="block">
                     Status:
                  </label>
                  <input
                     type="text"
                     id="status"
                     name="status"
                     placeholder="Enter Status"
                     value={formData.status}
                     onChange={handleChange}
                     className="border rounded p-2 w-full  focus:outline-sideBarColor"
                     required
                  />
                  <Button variant="ghost">Add Employee</Button>
               </form>
            </div>
         </div>
      </Wrapper>
   );
};

export default AddEmployeeForm;
