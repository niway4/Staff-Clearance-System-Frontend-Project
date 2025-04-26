// src/hooks/useCreateRecord.js
import { useState } from "react";

export function useCreateRecord() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitRecord = async (formData) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(null);


      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful submission
      console.log("Record submitted:", formData);
      setSuccess(true);

      return true;
    } catch (err) {
      setError("Failed to submit record. Please try again later.");
      console.error("Error submitting record:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitRecord, loading, error, success };
}
