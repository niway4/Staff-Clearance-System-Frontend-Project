import React, { useState } from "react";
import useFetch from "../../api/useFetch";
import { useParams } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const ClearedStaffForm = () => {
  const navigate = useNavigate();
  const { staffId } = useParams();
  const { post, loading, error } = useFetch("/cleared");

  const [formData, setFormData] = useState({
    id: staffId,
    fname: "",
    sname: "",
    lname: "",
    position: "",
    cleared_date: "",
    birthdate: "",
    employment_date: "",
    salary: "",
    educational_level: "",
    education_field: "",
    descipline: false,
    pension_number: "",
    nonused_breaks: "",
    public_transport: false,
    last_time_salary: "",
    cleared: true,
    employment_type: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await post("/create", formData);
      alert("Cleared staff data submitted successfully.");
      navigate("/");
    } catch (err) {
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-4 bg-white rounded shadow space-y-4"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Cleared Staff Form</h2>
        {[
          ["fname", "First Name"],
          ["sname", "Second Name"],
          ["lname", "Last Name"],
          ["position", "Position"],
          ["educational_level", "Educational Level"],
          ["education_field", "Education Field"],
          ["salary", "Salary"],
          ["pension_number", "Pension Number"],
          ["nonused_breaks", "Unused Breaks"],
          ["employment_type", "Employment Type"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
        {[
          ["birthdate", "Birth Date"],
          ["employment_date", "Employment Date"],
          ["cleared_date", "Cleared Date"],
          ["last_time_salary", "Last Salary Date"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="date"
              name={name}
              value={formData[name].slice(0, 10)}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="descipline"
              checked={formData.descipline}
              onChange={handleChange}
            />
            Disciplined
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="public_transport"
              checked={formData.public_transport}
              onChange={handleChange}
            />
            Uses Public Transport
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </form>
    </Wrapper>
  );
};

export default ClearedStaffForm;
