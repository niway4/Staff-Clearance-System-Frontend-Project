// import { useState } from "react";

// const useFetch = (baseURL) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async (url, options = {}) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`${baseURL}${url}`, options);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const get = (url) => fetchData(url);

//   const get = (url) =>
//     fetchData(url, {
//       method: "GET",
//       credentials: "include",
//     });
//   // const post = (url, body) =>
//   //   fetchData(url, {
//   //     method: "POST",
//   //     credentials: "include",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(body),
//   //   });
//   //======================================= new post method start =====================================================//
//   const post = (url, body, isFormData = false) =>
//     fetchData(url, {
//       method: "POST",
//       credentials: "include",
//       headers: isFormData ? undefined : { "Content-Type": "application/json" },
//       body: isFormData ? body : JSON.stringify(body),
//     });

//   //======================================= new post method end =====================================================//

// //   const put = (url, body) =>
// //     fetchData(url, {
// //       method: "PUT",
// //       credentials: "include",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(body),
// //     });

//   //======================================= new put method start =====================================================//
//   const put = (url, body, isFormData = false) =>
//     fetchData(url, {
//       method: "PUT",
//       credentials: "include",
//       headers: isFormData ? undefined : { "Content-Type": "application/json" },
//       body: isFormData ? body : JSON.stringify(body),
//     });

//   //======================================= new post method end =====================================================//
//   const del = (url) =>
//     fetchData(url, {
//       method: "DELETE",
//       credentials: "include",
//     });

//   return { data, error, loading, get, post, put, del };
// };

// export default useFetch;

//==========================



















import { useState } from "react";

const useFetch = (baseURL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * Generic fetch function that handles API requests and standardizes responses.
   * It always returns an object with { success: boolean, data: any, message: string, error: Error | null }.
   * This allows consuming components to consistently check 'response.success'.
   *
   * @param {string} url - The endpoint URL relative to baseURL.
   * @param {object} options - Fetch API options (method, headers, body, etc.).
   * @returns {Promise<object>} A promise that resolves to a standardized response object.
   */
  const fetchData = async (url, options = {}) => {
    setLoading(true);
    setError(null); // Clear previous errors before a new request

    try {
      const response = await fetch(`${baseURL}${url}`, options);
      let result = null;

      // Try to parse JSON even if the response is not OK, as servers often send error details in JSON.
      try {
        result = await response.json();
      } catch (jsonError) {
        // If JSON parsing fails (e.g., empty response, plain text error),
        // treat result as null or a simple message.
        result = {
          message: response.statusText || `HTTP status ${response.status}`,
        };
      }

      if (!response.ok) {
        // If the HTTP status is not in the 200-299 range, it's an error.
        const errorMessage =
          result.message || `HTTP error! Status: ${response.status}`;
        const err = new Error(errorMessage);
        setError(err); // Set the error state for the hook
        // Return a standardized error object for the caller
        return {
          success: false,
          message: errorMessage,
          data: result,
          error: err,
        };
      }

      // If the HTTP status is OK (200-299)
      setData(result); // Set the data state for the hook
      // Return a standardized success object for the caller
      return {
        success: true,
        message: result.message || "Operation successful", // Use backend message or a default
        data: result,
        error: null,
      };
    } catch (err) {
      // This catches network errors (e.g., no internet, CORS issues)
      const errorMessage =
        err.message || "An unexpected network error occurred.";
      setError(err); // Set the error state for the hook
      // Return a standardized error object for the caller
      return { success: false, message: errorMessage, data: null, error: err };
    } finally {
      setLoading(false);
    }
  };

  const get = (url) =>
    fetchData(url, {
      method: "GET",
      credentials: "include",
    });

  const post = (url, body, isFormData = false) =>
    fetchData(url, {
      method: "POST",
      credentials: "include",
      headers: isFormData
        ? undefined
        //  { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
      body: isFormData ? body : JSON.stringify(body),
    });

  const put = (url, body, isFormData = false) =>
    fetchData(url, {
      method: "PUT",
      credentials: "include",
      headers: isFormData
        ? undefined 
        // { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
      body: isFormData ? body : JSON.stringify(body),
    });

  const del = (url) =>
    fetchData(url, {
      method: "DELETE",
      credentials: "include",
    });

  return { data, error, loading, get, post, put, del };
};

export default useFetch;
