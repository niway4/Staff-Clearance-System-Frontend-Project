import React, { useState, useEffect } from "react";
import useEmplyeeData from "../../assets/data/useEmployeeData.js";
import Wrapper from "../../pages/SuperAdmin/Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import Button from "../ui/Button.jsx";
import useFetch from "../../api/useFetch.js";
import { Phone } from "lucide-react";
import "./style.css";
import { moveItem } from "framer-motion";

const AddEmployeeForm = () => {
  // const {  employeeData, fetcheError, fetchLoading } = useEmplyeeData(); // Fetch employee data from the API
  const { data, error, loading, post } = useFetch("/admin");
  const {
    data: getData,
    error: getError,
    loading: getLoading,
    get,
  } = useFetch("/admin");

  useEffect(() => {
    get("/department");
  }, []);

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

    await post("/register", formData);
    console.log(formData);
    setFormData({
      fname: "",
      sname: "",
      lname: "",
      phone: "",
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
        <div className="flex flex-col items-center justify-center border-sideBarColor border h-fit w-4/6 p-4 m-6 bg-lightGray rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="w-full space-y-4 ">
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
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                id="is_academic"
                name="is_academic"
                checked={formData.is_academic}
                onChange={(e) =>
                  setFormData({ ...formData, is_academic: e.target.checked })
                }
                className="w-6 h-6 text-sideBarColor border-gray-300 rounded focus:ring-sideBarColor"
              />
              <label
                htmlFor="is_academic"
                className="text-gray-700 text-xl pl-3"
              >
                IS ACADEMIC
              </label>
            </div>

            {/* dept_id */}

            <label htmlFor="dept_id" className="block">
              Department:
            </label>
            <select
              id="dept_id"
              name="dept_id"
              value={formData.dept_id}
              onChange={handleChange}
              className="border rounded p-2 w-full focus:outline-sideBarColor"
              // required
            >
              <option value="" disabled>
                Select Department
              </option>
              {getData &&
                getData.map((department) => (
                  <option key={department.dept_id} value={department.dept_id}>
                    {department.name}
                  </option>
                ))}
            </select>

            <Button variant="ghost">Add Employee</Button>
          </form>
        </div>
      </div>
      <div>
        {loading && <p>postLoading...</p>}
        {error && <p>postError: {error.message}</p>}{" "}
        {data && (
          <>
            <p>Post Data Below:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
        <div>
          {getLoading && <p>getLoading...</p>}
          {getError && <p>getError: {getError.message}</p>}{" "}
          {getData && (console.log(`Get data below \n ${getData}`)
            // <>
            //   <p>Get Data Below:</p>
            //   <pre>{JSON.stringify(getData, null, 2)}</pre>
            // </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AddEmployeeForm;
