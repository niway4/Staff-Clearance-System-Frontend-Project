// import React, { useRef, useState } from "react";
// import { div } from "framer-motion/client";
// import { useReactToPrint } from "react-to-print";
// import Wrapper from "./Wrapper";

// const ComponentToPrint = React.forwardRef((props, ref) => {
//   const { text } = props;
//   const formRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     hireDate: "",
//     level: "",
//     salary: "",
//     dept: "",
//     program: "",
//     field: "",
//     empId: "",
//     serviceYears: "",
//     leaveStart: "",
//     leaveEnd: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const canvasEl = React.useRef(null);
//   const shadowRootHostEl = React.useRef(null);
//   return (
//     <div className="relativeCSS m-16" ref={ref}>
//       <style type="text/css" media="print">
//         {"@page { size: portrait; }"}
//       </style>
//       <div className="flash" />

//       <div ref={formRef} className="memo-paper">
//         <h2 className="center">
//           አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ
//           <br />
//           ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY
//         </h2>
//         <p className="center">
//           <strong>INTER-OFFICE MEMO</strong><br />
//           <strong>የስራ መልቀቂያ ደብዳቤ</strong>
//         </p>
// {/*
//         <p>ወደ፡ ______________________</p>
//         <p>ከ፡ _______________________</p>
//         <p>ቀን፡ _____________________</p> */}

//         <p>
//           <strong>ርዕስ፡ የእ.ኤ.አ. ባንክ ለወጪ ማስታወቂያ (Salary Request)</strong>
//         </p>

//         <p>
//           ስም፣ የተወሰነ ተመራቂ ባለሙያ ከሆነ በእርሱ መሠረት ከወርሃዊ ደመወዝ እና ከመስክ ደመወዝ የሚከፈል ወጪ
//           እንዲፈጸም በዚህ የምንለኝ መረጃ ተዘምኗል፡፡
//         </p>

//         <ol>
//           <li>
//             ሙሉ ስም፡{" "}
//             <input
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የትውልድ ቀን፡{" "}
//             <input
//               name="dob"
//               type="date"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የተቀመጠበት ቀን፡{" "}
//             <input
//               name="hireDate"
//               type="date"
//               value={formData.hireDate}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የተቀመጠበት ደረጃ (Level)፡{" "}
//             <input
//               name="level"
//               value={formData.level}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የወርሃዊ ደመወዝ፡{" "}
//             <input
//               name="salary"
//               value={formData.salary}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የሚሰሩበት ክፍል (Department)፡{" "}
//             <input name="dept" value={formData.dept} onChange={handleChange} />
//           </li>
//           <li>
//             Program፡{" "}
//             <input
//               name="program"
//               value={formData.program}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             መስክ፡{" "}
//             <input
//               name="field"
//               value={formData.field}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የሠራተኛ መለያ ቁጥር፡{" "}
//             <input
//               name="empId"
//               value={formData.empId}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             አገልግሎት ዘመን፡{" "}
//             <input
//               name="serviceYears"
//               value={formData.serviceYears}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             ከ፡{" "}
//             <input
//               name="leaveStart"
//               type="date"
//               value={formData.leaveStart}
//               onChange={handleChange}
//             />
//             {"  "}እስከ፡{" "}
//             <input
//               name="leaveEnd"
//               type="date"
//               value={formData.leaveEnd}
//               onChange={handleChange}
//             />
//             {"  "}ድረስ
//           </li>
//         </ol>

//         <p>ይህ መረጃ ለወጪ ክፍያ ተዘጋጅቷል፡፡</p>
//         <p className="right">እንቁጽ፡ ___________________</p>
//       </div>

//       <div ref={shadowRootHostEl} />
//     </div>
//   );
// });

// const LeavingLetter = () => {
//   const componentRef = React.useRef(null);

//   const reactToPrintContent = () => {
//     return componentRef.current;
//   };

//   const handlePrint = useReactToPrint({
//     documentTitle: "SuperFileName",
//   });

//   return (
//     <Wrapper>
//       <div>
//         <ComponentToPrint ref={componentRef} />
//         <button className="bg-sideBarColor text-white font-bold text-2xl m-6" onClick={() => handlePrint(reactToPrintContent)}>🖨️ Print Form</button>
//       </div>
//     </Wrapper>
//   );
// };
// export default LeavingLetter;

// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //
// /

// import React, { useRef, useState, useEffect } from "react";
// import { div, p } from "framer-motion/client";
// import { useReactToPrint } from "react-to-print";
// import { useParams, useNavigate } from "react-router-dom";
// import useFetch from "../../api/useFetch";

// const ComponentToPrint = React.forwardRef((props, { staffDetail }, ref) => {
//   const { text } = props;

//   const formRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     hireDate: "",
//     level: "",
//     salary: "",
//     dept: "",
//     program: "",
//     field: "",
//     empId: "",
//     serviceYears: "",
//     leaveStart: "",
//     leaveEnd: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const canvasEl = React.useRef(null);
//   const shadowRootHostEl = React.useRef(null);

//   if (!props) {
//     return <div>Loading staff data...</div>;
//   }
//   return (
//     <div className="relativeCSS m-16" ref={ref}>
//       <style type="text/css" media="print">
//         {"@page { size: portrait; }"}
//       </style>
//       <div className="flash" />

//       <div ref={formRef} className="memo-paper">
//         <h2 className="center">
//           አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ
//           <br />
//           ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY
//         </h2>
//         <p className="center">
//           <strong>INTER-OFFICE MEMO</strong>
//           <br />
//           <strong>የስራ መልቀቂያ ደብዳቤ</strong>
//         </p>

//         {/* <p>ወደ፡ __________{staffDetail.fname}___________</p> */}
//         <p>ከ፡ _______________________</p>
//         <p>ቀን፡ _____________________</p>

//         <p>
//           <strong>ርዕስ፡ የእ.ኤ.አ. ባንክ ለወጪ ማስታወቂያ (Salary Request)</strong>
//         </p>

//         <p>
//           ስም፣ የተወሰነ ተመራቂ ባለሙያ ከሆነ በእርሱ መሠረት ከወርሃዊ ደመወዝ እና ከመስክ ደመወዝ የሚከፈል ወጪ
//           እንዲፈጸም በዚህ የምንለኝ መረጃ ተዘምኗል፡፡
//         </p>

//         <ol>
//           <li>
//             ሙሉ ስም፡{" "}
//             <input
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የትውልድ ቀን፡{" "}
//             <input
//               name="dob"
//               type="date"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የተቀመጠበት ቀን፡{" "}
//             <input
//               name="hireDate"
//               type="date"
//               value={formData.hireDate}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የተቀመጠበት ደረጃ (Level)፡{" "}
//             <input
//               name="level"
//               value={formData.level}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የወርሃዊ ደመወዝ፡{" "}
//             <input
//               name="salary"
//               value={formData.salary}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የሚሰሩበት ክፍል (Department)፡{" "}
//             <input name="dept" value={formData.dept} onChange={handleChange} />
//           </li>
//           <li>
//             Program፡{" "}
//             <input
//               name="program"
//               value={formData.program}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             መስክ፡{" "}
//             <input
//               name="field"
//               value={formData.field}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             የሠራተኛ መለያ ቁጥር፡{" "}
//             <input
//               name="empId"
//               value={formData.empId}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             አገልግሎት ዘመን፡{" "}
//             <input
//               name="serviceYears"
//               value={formData.serviceYears}
//               onChange={handleChange}
//             />
//           </li>
//           <li>
//             ከ፡{" "}
//             <input
//               name="leaveStart"
//               type="date"
//               value={formData.leaveStart}
//               onChange={handleChange}
//             />
//             {"  "}እስከ፡{" "}
//             <input
//               name="leaveEnd"
//               type="date"
//               value={formData.leaveEnd}
//               onChange={handleChange}
//             />
//             {"  "}ድረስ
//           </li>
//         </ol>

//         <p>ይህ መረጃ ለወጪ ክፍያ ተዘጋጅቷል፡፡</p>
//         <p className="right">እንቁጽ፡ ___________________</p>
//       </div>

//       <div ref={shadowRootHostEl} />
//     </div>
//   );
// });

// const LeavingLetter = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // this is a string
//   const staffId = parseInt(id); // convert it to number
//   const { data, error, loading, get } = useFetch("/cleared");
//   const [staffDetail, setStaffDetail] = useState(null);

//   useEffect(() => {
//     get("/get");
//   }, []);

//   useEffect(() => {
//     if (data?.message && Array.isArray(data.message)) {
//       const found = data.message.find((staff) => staff.id === staffId);
//       setStaffDetail(found || null);
//     }
//   }, [data, staffId]);

//   const componentRef = React.useRef(null);

//   const reactToPrintContent = () => {
//     return componentRef.current;
//   };

//   const handlePrint = useReactToPrint({
//     documentTitle: "SuperFileName",
//   });

//   return (
//     <div>
//       <div>
//         {loading && <p className="text-gray-600">Loading...</p>}
//         {error && <p className="text-red-600">Error: {error.message}</p>}

//         {!loading && staffDetail ? (
//           <div>
//             {staffDetail.fname}
//             <ComponentToPrint ref={componentRef} staffDetail={staffDetail} />
//             <button
//               className="bg-sideBarColor text-white font-bold text-2xl m-6"
//               onClick={() => handlePrint(reactToPrintContent)}
//             >
//               🖨️ Print Form
//             </button>
//           </div>
//         ) : (
//           !loading && (
//             <p className="text-gray-500">No staff found with ID: {id}</p>
//           )
//         )}
//       </div>
//       {/* <ComponentToPrint ref={componentRef} staffDetail={staffDetail} />
// <button className="bg-sideBarColor text-white font-bold text-2xl m-6" onClick={() => handlePrint(reactToPrintContent)}>🖨️ Print Form</button> */}
//     </div>
//   );
// };
// export default LeavingLetter;

// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //
// /

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import Wrapper from "./Wrapper";

// const ComponentToPrint = React.forwardRef((props, ref) => {
//   const { staffDetail } = props;

//   if (!staffDetail) {
//     return <div>Loading...</div>; // or handle loading state
//   }

//   return (
//     <div className="relativeCSS m-16" ref={ref}>
//       <style type="text/css" media="print">
//         {"@page { size: portrait; }"}
//       </style>
//       <div className="flash" />

//       <div className="memo-paper">
//         <h2 className="center">
//           አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ
//           <br />
//           ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY
//         </h2>
//         <p className="center">
//           <strong>INTER-OFFICE MEMO</strong><br />
//           <strong>የስራ መልቀቂያ ደብዳቤ</strong>
//         </p>

//         <p>
//           <strong>ርዕስ፡ የእ.ኤ.አ. ባንክ ለወጪ ማስታወቂያ (Salary Request)</strong>
//         </p>

//         <p>
//           ስም፣ የተወሰነ ተመራቂ ባለሙያ ከሆነ በእርሱ መሠረት ከወርሃዊ ደመወዝ እና ከመስክ ደመወዝ የሚከፈል ወጪ
//           እንዲፈጸም በዚህ የምንለኝ መረጃ ተዘምኗል፡፡
//         </p>

//         <ol>
//           <li>
//             ሙሉ ስም፡ {staffDetail.fname} {staffDetail.sname} {staffDetail.lname}
//           </li>
//           <li>
//             የትውልድ ቀን፡ {new Date(staffDetail.birth_date).toLocaleDateString()}
//           </li>
//           <li>
//             የተቀመጠበት ቀን፡ {new Date(staffDetail.employment_date).toLocaleDateString()}
//           </li>
//           <li>
//             የተቀመጠበት ደረጃ (Level)፡ {staffDetail.educational_level}
//           </li>
//           <li>
//             የወርሃዊ ደመወዝ፡ {staffDetail.salary}
//           </li>
//           <li>
//             የሚሰሩበት ክፍል (Department)፡ {staffDetail.dept_id} {/* Adjust as necessary */}
//           </li>
//           <li>
//             Program፡ {staffDetail.program} {/* Adjust as necessary */}
//           </li>
//           <li>
//             መስክ፡ {staffDetail.education_field}
//           </li>
//           <li>
//             የሠራተኛ መለያ ቁጥር፡ {staffDetail.empId} {/* Adjust as necessary */}
//           </li>
//           <li>
//             አገልግሎት ዘመን፡ {staffDetail.serviceYears} {/* Adjust as necessary */}
//           </li>
//           <li>
//             ከ፡ {new Date(staffDetail.leaveStart).toLocaleDateString()} እስከ፡ {new Date(staffDetail.leaveEnd).toLocaleDateString()}
//           </li>
//         </ol>

//         <p>ይህ መረጃ ለወጪ ክፍያ ተዘጋጅቷል፡፡</p>
//         <p className="right">እንቁጽ፡ ___________________</p>
//       </div>
//     </div>
//   );
// });

// const LeavingLetter = ({ staffDetail }) => {
//   const componentRef = useRef(null);

//   const reactToPrintContent = () => {
//     return componentRef.current;
//   };

//   const handlePrint = useReactToPrint({
//     content: reactToPrintContent,
//     documentTitle: "SuperFileName",
//   });

//   return (
//     <Wrapper>
//       <div>
//         <ComponentToPrint ref={componentRef} staffDetail={staffDetail} />
//         <button className="bg-sideBarColor text-white font-bold text-2xl m-6" onClick={handlePrint}>🖨️ Print Form</button>
//       </div>
//     </Wrapper>
//   );
// };

// export default LeavingLetter;

// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //

import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import useFetch from "../../api/useFetch";
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import { div } from "framer-motion/client";
import Button from "../../components/ui/Button";
import TitleBar from "../../components/layout/TitleBar";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const staffId = parseInt(id);
  const { data, get } = useFetch("/cleared");
  const [staffDetail, setStaffDetail] = useState(null);

  useEffect(() => {
    get("/get");
  }, [get]);

  useEffect(() => {
    if (data?.message && Array.isArray(data.message)) {
      const found = data.message.find((staff) => staff.id === staffId);
      setStaffDetail(found || null);
    }
  }, [data, staffId]);

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

  return (
    <div className="relativeCSS m-16" ref={ref}>
      {" "}
      <style type="text/css" media="print">
        {"@page { size: portrait; }"}{" "}
      </style>
      <div className="flash" />{" "}
      <div ref={formRef} className="memo-paper">
        {" "}
        <h2 className="text-center font-bold text-2xl">
          አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ <br /> ADDIS ABABA SCIENCE & TECHNOLOGY
          UNIVERSITY{" "}
        </h2>{" "}
        <p className="text-center font-semibold">
          <strong>INTER-OFFICE MEMO</strong>
          <br /> <strong>የስራ መልቀቂያ ደብዳቤ</strong>{" "}
        </p>
        <br /> <p className="text-center font-semibold"> </p>{" "}
        <li className="list-none text-right font-bold mr-18">
          Ref. No: <input />{" "}
        </li>{" "}
        <li className="list-none text-right font-bold mr-18">
          Date: <input />{" "}
        </li>{" "}
        {/* <div className="text-right font-bold mr-18">Ref. No: </div> */}
        {/* <div className="text-right font-bold mr-18">Date: </div> */}
        <div className="text-center font-bold">
          ጉዳዩ:- የስራ መልቀቂያ መስጠትን ይመከታል፤
        </div>{" "}
        {staffDetail ? (
          <ol>
            <div>
              ከላይ በእርሱ እንደተገለጸው በዩኒቨርሲቲያችን ውስጥ ከዚህ በታች በተገለጸው የግል ማህደር ውስጥ
              የተገለጹት የስራ መልቀቂያ እንዲስጥዎት በማመልከቻ ጠይቀዋል።
            </div>
            <div className="text-left ">በዚሁ መሰረት የሰራተኛውን/ዋን የግል ማህደር በማየት፤</div>
            <br />{" "}
            <div className="ml-24">
              <li>
                1. ሙሉ ስም፡ {staffDetail.fname} {staffDetail.sname}{" "}
                {staffDetail.lname}{" "}
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />{" "}
              </li>{" "}
              <li>
                2. የትውልድ ቀን፡ {staffDetail.birthdate.split("T")[0]}{" "}
                {/* <input
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                3. የቅጥር ቀን፡ {staffDetail.employment_date.split("T")[0]}{" "}
                {/* <input
                  name="hireDate"
                  type="date"
                  value={formData.hireDate}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                4. የትምህርት ደረጃ (Level)፡ {staffDetail.educational_level}{" "}
                {/* <input
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                5. የወርሃዊ ደመወዝ፡ {staffDetail.salary}{" "}
                {/* <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                6. የሚሰሩበት ክፍል (Department)፡ {staffDetail.education_field}{" "}
                {/* <input
                  name="dept"
                  value={formData.dept}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                7. የስራ መደብ: {staffDetail.position}{" "}
                {/* <input
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                8. የሠራተኛ መለያ ቁጥር፡ {staffDetail.pension_number}{" "}
                {/* <input
                  name="empId"
                  value={formData.empId}
                  onChange={handleChange}
                />{" "} */}
              </li>{" "}
              <li>
                9. አገልግሎት ዘመን፡ {staffDetail.last_time_salary.split("T")[0]}{" "}
                <input
                  name="serviceYears"
                  value={formData.serviceYears}
                  onChange={handleChange}
                />{" "}
              </li>{" "}
              <li>10. የለቀቁበት ቀን፡ {staffDetail.cleared_date.split("T")[0]} </li>{" "}
            </div>
            <br />
            <p>
              ከ {staffDetail.cleared_date.split("T")[0]} ጀምሮ ከዩኒቨርሲቲያችን ጋር
              የነበራቸው የስራ ውል የተቋረጠ መሆኑን እንገልጻለን።
            </p>{" "}
            <div className="text-right">ከሠላምታ ጋር</div>{" "}
          </ol>
        ) : (
          <p>Loading staff details...</p>
        )}
      </div>{" "}
    </div>
  );
});

const LeavingLetter = () => {
  const componentRef = useRef(null);

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "SuperFileName",
  });

  const handleDownload = () => {
    if (componentRef.current) {
      const element = componentRef.current;
      html2pdf().from(element).save("LeavingLetter.pdf");
    }
  };

  return (
    <Wrapper>
      <TitleBar title="Leaving Letter" />
      <div>
        <ComponentToPrint ref={componentRef} />{" "}
        <Button
          className="py-2 text-center hover:text-white ml-9"
          variant="outline"
          onClick={handleDownload}
        >
          Download the Letter
        </Button>
      </div>{" "}
    </Wrapper>
  );
};

export default LeavingLetter;
