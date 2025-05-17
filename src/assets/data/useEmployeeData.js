import { useEffect } from "react";
import useFetch from "../../api/useFetch";

const useEmployeeData = () => {
  const { data, error, loading, get } = useFetch(
    "https://jsonplaceholder.typicode.com"
  );

  useEffect(() => {
    get("/posts");
  }, [get]);
  const limitedData = data ? data.slice(0, 10) : []; // Properly handled in a hook

  return {
    employeeData: limitedData,
    fetchError: error,
    fetchLoading: loading,
  };
};

export default useEmployeeData;
