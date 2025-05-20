import React, { useEffect } from "react";
import TitleBar from "../../components/layout/TitleBar";
import SearchBar from "../../components/layout/SearchBar";
import TableCard from "../../components/layout/TableCard";
import Wrapper from "./Wrapper";
import useFetch from "../../api/useFetch.js";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ClearanceRequestersList() {
  const navigate = useNavigate();
  // login post API
  const {
    data: postData,
    error: postError,
    loading: postLoading,
    post,
  } = useFetch("/admin");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const newData = { username: "bina", password: "123456" };
    await post("/login", newData);
  };

  const { data, error, loading, get } = useFetch("status");
  useEffect(() => {
    get("/progress");
  }, []);

  const header1 = [
    { label: "First Name", key: "fname" },
    { label: "Middle Name", key: "sname" },
    { label: "Last Name", key: "lname" },
    { label: "E-mail", key: "email" },
    { label: "Status", key: "status" },
    { label: "Updated Date", key: "updated_at" },
    { label: "Action", key: "action" },
  ];
  const header2 = [
    { label: "First Name", key: "staff_fname" },
    { label: "Middle Name", key: "staff_sname" },
    { label: "Last Name", key: "staff_lname" },
    { label: "E-mail", key: "email" },
  ];

  const [originalData1, setOriginalData1] = React.useState([]);
  const [originalData2, setOriginalData2] = React.useState([]);
  const [filteredData1, setFilteredData1] = React.useState([]);
  const [filteredData2, setFilteredData2] = React.useState([]);

  // --- START --- OFFICE APPROVING EMPLOYEES GET API
  const {
    data: data1,
    error: error1,
    loading: loading1,
    get: get1,
  } = useFetch("/status/admin");

  useEffect(() => {
    get1("/displayAll");
  }, []);

  useEffect(() => {
    if (data1?.status) {
      setOriginalData1(data1.status);
      setFilteredData1(data1.status);
    }
  }, [data1]);
  // --- END --- OFFICE APPROVING EMPLOYEES GET API

  // --- START --- VICE AND HEAD APPROVING EMPLOYEES API
  const {
    data: data2,
    error: error2,
    loading: loading2,
    get: get2,
  } = useFetch("status/admin");

  useEffect(() => {
    get2("/request");
  }, []);

  useEffect(() => {
    if (data2) {
      setOriginalData2(data2);
      setFilteredData2(data2);
    }
  }, [data2]);

  // --- END --- VICE AND HEAD APPROVING EMPLOYEES API
  const renderAction = (row) => {
    if (row.status?.toLowerCase() === "completed") {
      return (
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering row click
            // handle approval logic here
            alert(`Approved ${row.fname} ${row.lname}`);
          }}
        >
          Approve
        </button>
      );
    }
    return null;
  };

  const {data:postdata, post: postApprove } = useFetch("/cleared");

  // const handleApprove = async (row) => {
  //   try {
  //     await postApprove("/create", { staff_id: row.staff_id || row.id });
  //     alert("Approved successfully!");

  //     // Refresh the data after approval
  //     get1("/displayAll");
  //   } catch (err) {
  //     alert("Approval failed. Try again.");
  //     console.error(err);
  //   }
  // };

const handleApprove = (row)=>{
  navigate(`/clearedstaffform/${row.staff_id}`);

}

console.log("postdata", postdata);

  const handleSearch = (searchTerm, selectedFilter) => {
    const filtered1 = originalData1.filter((data) => {
      const name = data.fname || "";
      const matchesName = name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    const filtered2 = originalData2.filter((data) => {
      const name = data.staff_fname || "";
      const matchesName = name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" || data.status === selectedFilter;

      return matchesName && matchesFilter;
    });

    setFilteredData1(filtered1);
    setFilteredData2(filtered2);
  };

  const handleRowClick = (rowId) => {
    navigate(`/requester/${rowId}`);
  };
  const handleRowClick2 = (id) => {
    navigate(`#`);
  };

  return (
    <Wrapper>
      <div>
        <TitleBar title="Clearance Requesters List" />
        <SearchBar
          filterParams={["All", "Approved", "Pending", "Rejected"]}
          searchFunction={handleSearch}
          placeholder="Search for requests..."
        />
        <div>
          <button onClick={handleSignIn}>login</button>
          <br />

          {postLoading && <p>post Loading...</p>}
          {postError && <p>post Error: {postError.message}</p>}
          {postData && ` posted ${console.log(postData)}`}
        </div>
        <div className="mt-10 text-2xl font-bold ">
          List of employees who are aproving the clearance request in different
          offices:
        </div>
        <br />
        {loading1 && <p className="text-gray-600">Loading...</p>}
        {error1 && (
          <>
            {console.log("Error occurred:", error)}
            <p className="text-red-600">Can not load, check your connection.</p>
          </>
        )}
        {!loading1 && filteredData1 && (
          <TableCard
            header={header1}
            inputData={Array.isArray(filteredData1) ? filteredData1 : []}
            onRowClick={handleRowClick}
            renderAction={(row) =>
              row.status === "completed" ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row navigation
                    handleApprove(row);
                  }}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Approve
                </button>
              ) : (
                <span className="text-gray-400">N/A</span>
              )
            }
          />
        )}

        <div className="mt-10 text-2xl font-bold">
          List of employees who are waiting for department head and Vice
          president approval:
        </div>
        <br />
        {loading2 && <p className="text-gray-600">Loading...</p>}
        {error2 && (
          <>
            {console.log("Error occurred:", error)}
            <p className="text-red-600">Can not load, check your connection.</p>
          </>
        )}
        {!loading2 && filteredData2 && (
          <TableCard
            header={header2}
            inputData={Array.isArray(filteredData2) ? filteredData2 : []}
            onRowClick={handleRowClick2}
          />
        )}
      </div>
    </Wrapper>
  );
}
