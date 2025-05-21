"use client"

import { useEffect, useState } from "react"
import { CheckCircle, FileCheck, Loader2, User, XCircle, AlertCircle } from "lucide-react"

export default function DepartmentDashboard() {
  const [clearanceRequests, setClearanceRequests] = useState([])
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch clearance requests from the backend
  useEffect(() => {
    const fetchClearanceRequests = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/request/admin/department/get")

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        setClearanceRequests(data)
      } catch (err) {
        console.error("Failed to fetch clearance requests:", err)
        setError("Failed to load clearance requests. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchClearanceRequests()
  }, [])

  // Filter requests based on search term and status filter
  const filteredRequests = clearanceRequests.filter((request) => {
    const fullName = `${request.staff_fname} ${request.staff_sname} ${request.staff_lname}`.toLowerCase()
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) || request.staff_id.toString().includes(searchTerm)

    const matchesStatus = statusFilter === "all" || request.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleApprove = async (staff_id) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/request/admin/update", {
        method: "",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staff_id: staff_id,
          status: "approved",
        }),
      })

      if (!response.ok) throw new Error("Approval failed")

      setClearanceRequests((prev) =>
        prev.map((request) => (request.staff_id === staff_id ? { ...request, status: "approved" } : request)),
      )

      if (selectedRequest?.staff_id === staff_id) {
        setSelectedRequest((prev) => ({ ...prev, status: "approved" }))
      }

      alert(`Request ${staff_id} approved successfully`)
    } catch (err) {
      console.error("Approval error:", err)
      alert(`Approval failed: ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReject = async (staff_id) => {
    setIsSubmitting(true)
    try {
      const response = await fetch(`/wasman/melkam`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staff_id: staff_id,
          status: "rejected",
        }),
      })

      if (!response.ok) throw new Error("Rejection failed")

      setClearanceRequests((prev) =>
        prev.map((request) => (request.staff_id === staff_id ? { ...request, status: "rejected" } : request)),
      )

      if (selectedRequest?.staff_id === staff_id) {
        setSelectedRequest((prev) => ({ ...prev, status: "rejected" }))
      }

      alert(`Request ${staff_id} rejected successfully`)
    } catch (err) {
      console.error("Rejection error:", err)
      alert(`Rejection failed: ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusBadge = (status) => {
    const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"

    switch (status) {
      case "pending":
        return <span className={`${baseStyle} bg-yellow-100 text-yellow-800`}>Pending</span>
      case "approved":
        return (
          <span className={`${baseStyle} bg-green-100 text-green-800`}>
            <CheckCircle className="mr-1 h-3 w-3" />
            Approved
          </span>
        )
      case "rejected":
        return (
          <span className={`${baseStyle} bg-red-100 text-red-800`}>
            <XCircle className="mr-1 h-3 w-3" />
            Rejected
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-backgroundColor">
      {/* Header remains the same */}
      <header className="bg-sideBarColor text-white shadow-md">{/* ... keep existing header structure ... */}</header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter controls remain the same */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* ... keep search and filter inputs ... */}
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="h-5 w-5 mr-3 text-red-500" />
            <p>{error}</p>
          </div>
        )}

        {/* Updated Request Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 text-sideBarColor animate-spin" />
                <span className="ml-2 text-sideBarColor">Loading clearance requests...</span>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-lightGray">
                <thead className="bg-sideBarColor text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Staff ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Department</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Submitted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-lightGray">
                  {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => (
                      <tr
                        key={request.staff_id}
                        className="hover:bg-blue-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedRequest(request)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-sideBarColor">
                          {request.staff_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {`${request.staff_fname} ${request.staff_sname} ${request.staff_lname}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {request.current_position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.dept_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {new Date(request.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <button
                            className="text-editButtonColor hover:text-sideBarColor font-medium"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedRequest(request)
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                        No clearance requests found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Updated Details Panel */}
        {selectedRequest && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-sideBarColor text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FileCheck className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-medium">Clearance Request Details</h3>
              </div>
              <div>{getStatusBadge(selectedRequest.status)}</div>
            </div>

            <div className="p-6">
              {/* Employee Information */}
              <div className="mb-6 pb-6 border-b border-lightGray">
                <div className="flex items-start">
                  <div className="bg-sideBarColor rounded-full p-3 mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-sideBarColor">
                      {`${selectedRequest.staff_fname} ${selectedRequest.staff_sname} ${selectedRequest.staff_lname}`}
                    </h4>
                    <p className="text-gray-600">
                      {selectedRequest.current_position} • {selectedRequest.dept_name}
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium text-gray-700">Email:</span>{" "}
                        <span className="text-gray-600">{selectedRequest.email}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-gray-700">Submitted:</span>{" "}
                        <span className="text-gray-600">
                          {new Date(selectedRequest.created_at).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-sideBarColor mb-3 pb-2 border-b border-lightGray">
                  Unfinished Projects
                </h4>
                <div className="bg-evenTableRowColor rounded-lg p-4">
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">
                    {selectedRequest.unfinished_projects || "No unfinished projects reported."}
                  </p>
                </div>
              </div>

              {/* Clearance Reason */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-sideBarColor mb-3 pb-2 border-b border-lightGray">
                  Reason for Clearance
                </h4>
                <div className="bg-evenTableRowColor rounded-lg p-4">
                  <p className="text-sm text-gray-600">{selectedRequest.reason || "No reason provided."}</p>
                </div>
              </div>

              {/* Action Buttons */}
              {selectedRequest.status === "pending" && (
                <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6 pt-4 border-t border-lightGray">
                  <button
                    onClick={() => handleReject(selectedRequest.staff_id)}
                    disabled={isSubmitting}
                    className={`px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 flex items-center justify-center ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <XCircle className="h-4 w-4 mr-2" />
                    )}
                    Reject Request
                  </button>
                  <button
                    onClick={() => handleApprove(selectedRequest.staff_id)}
                    disabled={isSubmitting}
                    className={`px-4 py-2 bg-sideBarColor text-white rounded-lg hover:bg-opacity-90 flex items-center justify-center ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    )}
                    Approve Request
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
