"use client"

import { useState } from "react"
import { useProgressData } from "./hooks/useProgressData"
import { motion } from "framer-motion"
import { CheckCircle, Clock, AlertCircle, X, Info, ChevronRight, BarChart3, User, Calendar, Clock3 } from "lucide-react"

function ProgressPage() {
  const { data, loading, error } = useProgressData()
  const [activeTab, setActiveTab] = useState("all")
  const [selectedItem, setSelectedItem] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-sideBarColor border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-6 text-gray-600 font-medium">Loading progress data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 max-w-md"
        >
          <div className="flex items-start">
            <AlertCircle className="text-red-500 h-6 w-6 mt-0.5 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Progress</h3>
              <p className="text-red-700 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-red-600 text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 h-10 px-6 py-2"
              >
                Retry
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  const { clearanceItems, stats } = data

  const filteredItems =
    activeTab === "all" ? clearanceItems : clearanceItems.filter((item) => item.status === activeTab)

  const openDialog = (item) => {
    setSelectedItem(item)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 max-w-5xl mx-auto w-full">
      {/* Enhanced Header Section with Gradient Background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-sideBarColor to-blue-800 text-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Clearance Progress</h1>
            <p className="text-blue-200 mt-2">Track your clearance status across all departments</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-200" />
              <span className="text-sm">Started: April 3, 2023</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white"
      >
        <div className="p-6 pb-0 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-sideBarColor" />
                <h3 className="text-lg font-semibold text-sideBarColor">Your Clearance Progress</h3>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Track the status of your clearance requests across departments
              </p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 p-1.5 rounded-full">
              <div className="rounded-full px-3 py-1.5 bg-white shadow-sm text-xs flex items-center font-medium">
                <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                Started: April 3, 2023
              </div>
              <div className="rounded-full px-3 py-1.5 bg-white shadow-sm text-xs flex items-center font-medium">
                <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                {stats.progressPercentage}% Complete
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-8">
            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">Overall Progress</h3>
                <span className="text-sm font-medium text-sideBarColor">{stats.progressPercentage}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sideBarColor to-blue-500 transition-all duration-500 ease-in-out"
                  style={{ width: `${stats.progressPercentage}%` }}
                />
              </div>
            </motion.div>

            {/* Enhanced Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-300">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Total</div>
                  <div className="text-3xl font-bold text-sideBarColor">{stats.totalCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-green-200 shadow-sm bg-white hover:shadow-md transition-all duration-300">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-green-600 uppercase tracking-wider font-medium mb-1">Completed</div>
                  <div className="text-3xl font-bold text-green-600">{stats.completedCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gold shadow-sm bg-white hover:shadow-md transition-all duration-300">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-gold uppercase tracking-wider font-medium mb-1">In Progress</div>
                  <div className="text-3xl font-bold text-gold">{stats.pendingCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-red-200 shadow-sm bg-white hover:shadow-md transition-all duration-300">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-red-600 uppercase tracking-wider font-medium mb-1">Rejected</div>
                  <div className="text-3xl font-bold text-red-600">{stats.rejectedCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Departments</div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="w-full"
            >
              <div className="grid w-full grid-cols-3 rounded-lg bg-gray-100 p-1">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`rounded-md py-2 text-sm font-medium transition-all duration-200 ${
                    activeTab === "all" ? "bg-white shadow-sm text-sideBarColor" : "hover:bg-white/50 text-gray-600"
                  }`}
                >
                  All Departments
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`rounded-md py-2 text-sm font-medium transition-all duration-200 ${
                    activeTab === "completed" ? "bg-white shadow-sm text-green-600" : "hover:bg-white/50 text-gray-600"
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab("in-progress")}
                  className={`rounded-md py-2 text-sm font-medium transition-all duration-200 ${
                    activeTab === "in-progress" ? "bg-white shadow-sm text-gold" : "hover:bg-white/50 text-gray-600"
                  }`}
                >
                  In Progress
                </button>
              </div>

              {/* Enhanced Clearance Items List */}
              <div className="mt-6 space-y-4">
                {filteredItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-32 items-center justify-center rounded-lg border border-dashed border-gray-300"
                  >
                    <div className="text-center">
                      <Info className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">No items to display</p>
                    </div>
                  </motion.div>
                ) : (
                  filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                      className={`rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md ${
                        item.status === "completed" ? "border border-green-200" : "border border-gold"
                      }`}
                    >
                      <div className="p-5 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                                item.status === "completed" ? "bg-green-100" : "bg-amber-100"
                              }`}
                            >
                              {item.status === "completed" ? (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              ) : (
                                <Clock3 className="h-6 w-6 text-gold" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium text-sideBarColor">{item.department} Clearance</h3>
                              <p className="text-xs text-gray-500 mt-1">Submitted on {item.date}</p>
                            </div>
                          </div>
                          <div>
                            {item.status === "completed" ? (
                              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-800">
                                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-800 border-amber-200">
                                <Clock3 className="h-3.5 w-3.5 mr-1" />
                                In Progress
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openDialog(item)}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-gray-200 bg-white hover:bg-gray-50 h-9 px-4 py-2 mt-4 w-full shadow-sm"
                        >
                          <Info className="h-4 w-4 mr-2" />
                          {item.status === "completed" ? "View Approval Details" : "View Processing Details"}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Dialog for item details */}
      {isDialogOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-0 max-h-[90vh] overflow-hidden"
          >
            <div className="bg-sideBarColor text-white p-5 flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {selectedItem.department} Clearance {selectedItem.status === "completed" ? "Approval" : "Status"}
              </h3>
              <button
                onClick={closeDialog}
                className="text-white/70 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-6">
                {selectedItem.status === "completed" ? (
                  <>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Approved By</h4>
                      <div className="rounded-lg bg-green-50 p-4 flex items-center gap-3 border border-green-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                          <User className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{selectedItem.approver.name}</p>
                          <p className="text-sm text-gray-600">{selectedItem.approver.position}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Comments</h4>
                      <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                        <p className="text-sm italic text-gray-700">"{selectedItem.approver.comments}"</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Approval Date</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{selectedItem.approver.date || "April 15, 2023"}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Pending With</h4>
                      <div className="rounded-lg bg-amber-50 p-4 flex items-center gap-3 border border-amber-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                          <User className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{selectedItem.pendingWith.name}</p>
                          <p className="text-sm text-gray-600">{selectedItem.pendingWith.position}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Current Status</h4>
                      <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                        <p className="text-sm italic text-gray-700">"{selectedItem.pendingWith.status}"</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">Last Updated</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{selectedItem.pendingWith.lastUpdated}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeDialog}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-sideBarColor text-white shadow hover:bg-blue-800 h-10 px-6 py-2 w-full"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ProgressPage
