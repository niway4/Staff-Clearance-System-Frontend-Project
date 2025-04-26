import { useState, useEffect } from "react";

export function useRecordsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchTerm: "",
    statusFilter: "all",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data that would come from an API
        const mockData = {
          records: [
            {
              id: "CLR-2023-001",
              type: "Annual Clearance",
              date: "2023-04-15",
              status: "completed",
              departments: [
                { name: "Library", status: "completed" },
                { name: "IT Department", status: "completed" },
                { name: "Finance", status: "completed" },
                { name: "Lab Equipment", status: "completed" },
                { name: "Human Resources", status: "completed" },
              ],
            },
            {
              id: "CLR-2022-042",
              type: "Department Transfer",
              date: "2022-09-10",
              status: "completed",
              departments: [
                { name: "Library", status: "completed" },
                { name: "IT Department", status: "completed" },
                { name: "Finance", status: "completed" },
                { name: "Previous Department", status: "completed" },
                { name: "New Department", status: "completed" },
              ],
            },
            {
              id: "CLR-2023-015",
              type: "Equipment Clearance",
              date: "2023-02-22",
              status: "completed",
              departments: [
                { name: "Lab Equipment", status: "completed" },
                { name: "IT Department", status: "completed" },
              ],
            },
            {
              id: "CLR-2023-089",
              type: "End of Contract",
              date: "2023-05-01",
              status: "in-progress",
              departments: [
                { name: "Library", status: "completed" },
                { name: "IT Department", status: "completed" },
                { name: "Finance", status: "in-progress" },
                { name: "Lab Equipment", status: "in-progress" },
                { name: "Human Resources", status: "completed" },
              ],
            },
          ],
        };

        setData(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch records data. Please try again later.");
        console.error("Error fetching records data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredRecords =
    data?.records.filter((record) => {
      const matchesSearch =
        record.id.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        record.type.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesStatus =
        filters.statusFilter === "all" ||
        record.status === filters.statusFilter;

      return matchesSearch && matchesStatus;
    }) || [];

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    data,
    loading,
    error,
    filteredRecords,
    filters,
    updateFilters,
  };
}
