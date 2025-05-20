import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { text } = props;
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    hireDate: "",
    level: "",
    salary: "",
    dept: "",
    program: "",
    field: "",
    empId: "",
    serviceYears: "",
    leaveStart: "",
    leaveEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="print-container m-16" ref={ref}>
      <style type="text/css" media="print">
        {"@page { size: portrait; }"}
      </style>
      <div className="memo-paper">
        <h2 className="text-center font-bold text-2xl">
          አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ
          <br />
          ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY
        </h2>
        <p className="text-center font-semibold">
          
          <br />
          የስራ ልምድ ደብዳቤ
        </p>

        <div className="info-section">
          <p>ቁጥር፡ _______________________</p>
          <p>ቀን፡ _____________________</p>

          <p className="font-bold">
            ለሚመከተው ሁሉ
          </p>

          <p>
           የዩኒቨርሲቲያችን ሰራተኝ የነበሩት የስራ ልምድ ማስረጃ እንዲጻፍላቸው ማመልከቻ ጠይቀዋል። በዚሁ መሰረት
           ከዩኒቨርሲቲያችን የስራ ልምድ ደብዳቤ ይገኛል፡፡
           
          </p>

          <ol className="form-list">
            {Object.keys(formData).map((key) => (
              <li key={key}>
                <label>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="input-field"
                  />
                </label>
              </li>
            ))}
          </ol>
          <p>ይህ መረጃ ለወጪ ክፍያ ተዘጋጅቷል፡፡</p>
          <p className="right">እንቁጽ፡ ___________________</p>
        </div>
      </div>
    </div>
  );
});

const LeavingLetter = () => {
  const componentRef = useRef(null);
  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    documentTitle: "SuperFileName",
  });

  return (
    <div className="container">
      <button
        className="print-button"
        onClick={() => handlePrint(reactToPrintContent)}
      >
        🖨️ Print Form
      </button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default LeavingLetter;
