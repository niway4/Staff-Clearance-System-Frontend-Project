import { useState } from "react";

const useFetch = (baseURL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseURL}${url}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // const get = (url) => fetchData(url);

  const get = (url) =>
    fetchData(url, {
      method: "GET",
      credentials: "include",
    });
  const post = (url, body) =>
    fetchData(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  const put = (url, body) =>
    fetchData(url, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  const del = (url) =>
    fetchData(url, {
      method: "DELETE",
      credentials: "include",
    });

  return { data, error, loading, get, post, put, del };
};

export default useFetch;
