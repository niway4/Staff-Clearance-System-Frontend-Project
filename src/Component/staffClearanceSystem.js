import { useEffect, useState } from "react";
import { User, Search } from "lucide-react";
import Wrapper from "../pages/Vice/Wrapper";
import axios from "axios";

export default function ApprovalRequestList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [processingId, setProcessingId] = useState(null);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchClearanceRequests = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/request/admin/get");
        // Ensure we're getting an array from the API
        const data = Array.isArray(response.data) ? response.data : [];
        setRequests(data);
      } catch (err) {
        console.error("Failed to fetch clearance requests:", err);
        setRequests([]); // Reset to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchClearanceRequests();
  }, []);

  // Safe filtering with array check
  const filteredRequests = Array.isArray(requests) 
    ? requests.filter(request => {
        const search = searchTerm.toLowerCase();
        return (
          request.employeeName?.toLowerCase().includes(search) ||
          request.department?.toLowerCase().includes(search)
        );
      })
    : [];

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  const handleApprove = async (staff_id) => {
    try {
      setProcessingId(staff_id);
      await axios.put("/request/admin/approve", { staff_id });
      
      setRequests(prev => {
        if (!Array.isArray(prev)) return prev;
        return prev.map(request => 
          request.staff_id === staff_id 
            ? { ...request, status: "Approved" } 
            : request
        );
      });
    } catch (err) {
      console.error("Failed to approve request:", err);
    } finally {
      setProcessingId(null);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/request/admin/get");
      const data = Array.isArray(response.data) ? response.data : [];
      setRequests(data);
    } catch (err) {
      console.error("Failed to refresh data:", err);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="p-8 bg-backgroundColor">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-sideBarColor">
              Approval Request List
            </h1>
            <p className="text-gray-600 mt-2">
              Review and approve pending requests
            </p>
          </div>

          {/* Search and refresh section */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sideBarColor focus:border-sideBarColor sm:text-sm"
                placeholder="Search by name or department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={refreshData}
              className="px-4 py-2 bg-sideBarColor text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 text-sm font-medium flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh
            </button>
          </div>

          {/* Table section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-titleBarColor">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-sideBarColor uppercase tracking-wider">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Employee Name
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-sideBarColor uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-sideBarColor uppercase tracking-wider">
                      Request Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-sideBarColor uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-sideBarColor uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                        Loading requests...
                      </td>
                    </tr>
                  ) : filteredRequests.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                        No approval requests found
                      </td>
                    </tr>
                  ) : (
                    filteredRequests.map((request) => (
                      <tr 
                        key={request.staff_id} 
                        className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                      >
                        {/* Table cells remain the same as previous version */}
                        {/* ... (keep the same table cell structure) */}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination section remains the same */}
        </div>
      </div>
    </Wrapper>
  );
}