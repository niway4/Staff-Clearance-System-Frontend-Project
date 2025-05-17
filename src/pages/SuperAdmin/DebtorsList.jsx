import React from "react";
import Wrapper from "./Wrapper.jsx";
import TitleBar from "../../components/layout/TitleBar.jsx";
import TableCard from "../../components/layout/TableCard.jsx";
import debtors from "../../assets/data/DebtorList.js";
import SearchBar from "../../components/layout/SearchBar.jsx";
// import { label } from "framer-motion/client";
import useFetch from "../../api/useFetch.js";

function DebtorsList() {
  const { data, error, loading, post } = useFetch("https://aastu-clearance.onrender.com"); // base URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = { email: 'biniyamgashe@gmail.com', password: "123456" };
    await post('/login', newData);
};
  const handleSerch = (searchTerm) => {
    const filteredData = debtors.filter(
      (data) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.contactnumber.toString().includes(searchTerm) ||
        data.amountowed.toString().includes(searchTerm) ||
        data.duedate.includes(searchTerm)
    );
    return filteredData;
  }
  return (
    <Wrapper>
      <div >
        <TitleBar title="Debtors List" />
        <SearchBar filterParams={[ ]} searchFunction={handleSerch} placeholder="Search for Debtors..." />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          hello
        </button>
        
        <TableCard
         header={[
          {label: "Name", key: "name"},
          {label: "Email", key: "email"},
          {label: "Contact Number", key: "contactnumber"},
          {label: "Amount Owed", key: "amountowed"},
          {label: "Due Date", key: "duedate"},
          {label: "Status", key: "status"}


       
         ]}
          inputData={debtors}
        />
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && `${console.log(data)}`}
        </div>
      </div>
    </Wrapper>
  );
}

export default DebtorsList;
