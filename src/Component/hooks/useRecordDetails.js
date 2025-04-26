import { useState, useEffect } from "react";

export function useRecordDetail(recordId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!recordId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data that would come from an API
        const mockData = {
          id: recordId,
          type: "Annual Clearance",
          date: "2023-04-15",
          status: "completed",
          completedDate: "2023-04-20",
          departments: [
            {
              name: "Library",
              status: "completed",
              date: "2023-04-16",
              approver: "Jennifer Adams",
              position: "Head Librarian",
              comments: "All books returned, no outstanding fees.",
            },
            {
              name: "IT Department",
              status: "completed",
              date: "2023-04-17",
              approver: "Robert Chen",
              position: "IT Manager",
              comments:
                "All accounts deactivated, equipment returned in good condition.",
            },
            {
              name: "Finance",
              status: "completed",
              date: "2023-04-18",
              approver: "Michael Thompson",
              position: "Finance Director",
              comments: "No outstanding payments or financial obligations.",
            },
            {
              name: "Lab Equipment",
              status: "completed",
              date: "2023-04-19",
              approver: "Dr. Lisa Rodriguez",
              position: "Lab Manager",
              comments: "All lab equipment returned and accounted for.",
            },
            {
              name: "Human Resources",
              status: "completed",
              date: "2023-04-20",
              approver: "Sarah Wilson",
              position: "HR Manager",
              comments: "Exit interview completed, all documentation received.",
            },
          ],
        };

        setData(mockData);
        setError(null);
      } catch (err) {
        setError(
          `Failed to fetch record details for ${recordId}. Please try again later.`
        );
        console.error(`Error fetching record details for ${recordId}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recordId]);

  return { data, loading, error };
}

