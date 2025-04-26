
import { useState, useEffect } from "react";

export function useDashboardData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data that would come from an API
        const mockData = {
          user: {
            id: "EMP001",
            name: "Dr. Sarah Johnson",
            department: "Computer Science",
            position: "Associate Professor",
            notifications: 3,
          },
          stats: {
            completedCount: 3,
            inProgressCount: 2,
            pendingCount: 0,
            rejectedCount: 0,
            totalCount: 5,
            progressPercentage: 50,
          },
          recentUpdates: [
            {
              id: 1,
              title: "Library Clearance Approved",
              time: "2h ago",
              approver: "Ms. Jennifer Adams",
              comment: "All books returned, no outstanding fees.",
              status: "completed",
              
            },
            {
              id: 2,
              title: "IT Department Clearance Approved",
              time: "1d ago",
              approver: "Mr. Robert Chen",
              comment: "All accounts deactivated, equipment returned.",
              status: "completed",
            },
            {
              id: 3,
              title: "Finance Department Review",
              time: "2d ago",
              approver: "Your request is being processed",
              comment: "Checking for outstanding payments and financial obligations.",
              status: "in-progress",
            },
          ],
          requiredActions: [
            {
              id: 1,
              title: "Submit Lab Equipment Form",
              description: "Required for Lab Equipment clearance",
              buttonText: "Submit Form",
              status: "pending",
            },
            {
              id: 2,
              title: "Schedule Exit Interview",
              description: "Required for HR clearance",
              buttonText: "Schedule Now",
              status: "pending",
            },
            {
              id: 3,
              title: "Return Library Books",
              description: "Completed on May 2, 2023",
              status: "completed",
            },
          ],
        };
        
        setData(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch dashboard data. Please try again later.");
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

