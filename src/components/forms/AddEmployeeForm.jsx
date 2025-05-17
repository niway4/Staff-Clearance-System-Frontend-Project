import React, { useState } from "react";
import useEmplyeeData from "../../assets/data/useEmployeeData.js";
import Wrapper from "../../pages/SuperAdmin/Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import Button from "../ui/Button.jsx";
import useFetch from "../../api/useFetch.js";
import { Phone } from "lucide-react";
import "./style.css"; 

const AddEmployeeForm = () => {
  // const {  employeeData, fetcheError, fetchLoading } = useEmplyeeData(); // Fetch employee data from the API
  const { data, error, loading, post } = useFetch(
    "https://aastu-clearance.onrender.com"
  );

  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    lname: "",
    phone: "",
    address: "",
    email: "",
    is_academic: false,
    dept_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    console.log(formData);
    await post("/addEmployee", formData);
    setFormData({
      fname: "",
      sname: "",
      lname: "",
      Phone: "",
      address: "",
      email: "",
      is_academic: false,
      dept_id: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <TitleBar title="Add New Employee" />
      <div className="flex items-center justify-center bg-white ">
        <div className="flex flex-col items-center justify-center border-sideBarColor border h-fit  p-4 m-6 bg-lightGray rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="employeename" className="block">
              First Name:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
              value={formData.fname}
              onChange={handleChange}
              className="border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />

            <label htmlFor="lname" className="block">
              Middle Name:
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter Middle Name"
              value={formData.lname}
              onChange={handleChange}
              className="border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />
            <label htmlFor="sname" className="block">
              Last Name:
            </label>
            <input
              type="text"
              id="sname"
              name="sname"
              placeholder="Enter Last Name"
              value={formData.sname}
              onChange={handleChange}
              className="border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />

            <label htmlFor="phone" className="block">
              Phone Number:
            </label>
            <input
           
              type="number"
              id="phone"
              name="phone"
            //   min={1}
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="no-spinner border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />
      

            <label htmlFor="address" className="block">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />
            <label htmlFor="email" className="block">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 w-full  focus:outline-sideBarColor"
              required
            />

            {/* is_academic */}

            {/* dept_id */}

            <Button variant="ghost">Add Employee</Button>
          </form>
        </div>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && `${console.log(data)}`}
      </div>
    </Wrapper>
  );
};

export default AddEmployeeForm;
