import React, { useRef, useState } from "react";
import { div } from "framer-motion/client";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { text } = props;
  const formRef = useRef(null);

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
  const canvasEl = React.useRef(null);
  const shadowRootHostEl = React.useRef(null);
  return (
    <div className="relativeCSS m-16" ref={ref}>
      <style type="text/css" media="print">
        {"@page { size: portrait; }"}
      </style>
      <div className="flash" />

      <div ref={formRef} className="memo-paper">
        <h2 className="center">
          አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ
          <br />
          ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY
        </h2>
        <p className="center">
          <strong>INTER-OFFICE MEMO</strong><br />
          <strong>የስራ መልቀቂያ ደብዳቤ</strong>
        </p>

        <p>ወደ፡ ______________________</p>
        <p>ከ፡ _______________________</p>
        <p>ቀን፡ _____________________</p>

        <p>
          <strong>ርዕስ፡ የእ.ኤ.አ. ባንክ ለወጪ ማስታወቂያ (Salary Request)</strong>
        </p>

        <p>
          ስም፣ የተወሰነ ተመራቂ ባለሙያ ከሆነ በእርሱ መሠረት ከወርሃዊ ደመወዝ እና ከመስክ ደመወዝ የሚከፈል ወጪ
          እንዲፈጸም በዚህ የምንለኝ መረጃ ተዘምኗል፡፡
        </p>

        <ol>
          <li>
            ሙሉ ስም፡{" "}
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </li>
          <li>
            የትውልድ ቀን፡{" "}
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
          </li>
          <li>
            የተቀመጠበት ቀን፡{" "}
            <input
              name="hireDate"
              type="date"
              value={formData.hireDate}
              onChange={handleChange}
            />
          </li>
          <li>
            የተቀመጠበት ደረጃ (Level)፡{" "}
            <input
              name="level"
              value={formData.level}
              onChange={handleChange}
            />
          </li>
          <li>
            የወርሃዊ ደመወዝ፡{" "}
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </li>
          <li>
            የሚሰሩበት ክፍል (Department)፡{" "}
            <input name="dept" value={formData.dept} onChange={handleChange} />
          </li>
          <li>
            Program፡{" "}
            <input
              name="program"
              value={formData.program}
              onChange={handleChange}
            />
          </li>
          <li>
            መስክ፡{" "}
            <input
              name="field"
              value={formData.field}
              onChange={handleChange}
            />
          </li>
          <li>
            የሠራተኛ መለያ ቁጥር፡{" "}
            <input
              name="empId"
              value={formData.empId}
              onChange={handleChange}
            />
          </li>
          <li>
            አገልግሎት ዘመን፡{" "}
            <input
              name="serviceYears"
              value={formData.serviceYears}
              onChange={handleChange}
            />
          </li>
          <li>
            ከ፡{" "}
            <input
              name="leaveStart"
              type="date"
              value={formData.leaveStart}
              onChange={handleChange}
            />
            {"  "}እስከ፡{" "}
            <input
              name="leaveEnd"
              type="date"
              value={formData.leaveEnd}
              onChange={handleChange}
            />
            {"  "}ድረስ
          </li>
        </ol>

        <p>ይህ መረጃ ለወጪ ክፍያ ተዘጋጅቷል፡፡</p>
        <p className="right">እንቁጽ፡ ___________________</p>
      </div>

      <div ref={shadowRootHostEl} />
    </div>
  );
});

const LeavingLetter = () => {
  const componentRef = React.useRef(null);

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    documentTitle: "SuperFileName",
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button className="bg-sideBarColor text-white font-bold text-2xl m-6" onClick={() => handlePrint(reactToPrintContent)}>🖨️ Print Form</button>
    </div>
  );
};
export default LeavingLetter;
