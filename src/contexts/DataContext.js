import React, { createContext, useContext, useState } from "react";
import useFetch from "../api/useFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cache, setCache] = useState({}); // dynamic cache
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetcher = useFetch(""); // base URL

  const getData = async (key, url) => {
    if (cache[key]) return cache[key];

    setLoading(true);
    setError(null);
    try {
      const data = await fetcher.get(url);
      if (data) {
        setCache((prev) => ({ ...prev, [key]: data }));
        return data;
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    return null;
  };

  const refreshData = async (key, url) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await fetcher.get(url);
      if (data) {
        setCache((prev) => ({ ...prev, [key]: data }));
        return data;
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    return null;
  };

  return (
    <DataContext.Provider
      value={{ getData, refreshData, cache, loading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

// await refreshData("clearedStaff", "/cleared/get");
