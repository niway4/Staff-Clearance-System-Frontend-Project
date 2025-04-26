import React, { useState } from "react";
import { useProgressData } from "./hooks/useProgressData";

function ProgressPage() {
  const { data, loading, error } = useProgressData();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400">Loading progress data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">Error Loading Progress</h3>
          <p className="text-red-700 dark:text-red-400">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-red-600 text-white shadow hover:bg-red-700 h-9 px-4 py-2"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { clearanceItems, stats } = data;

  const filteredItems =
    activeTab === "all" ? clearanceItems : clearanceItems.filter((item) => item.status === activeTab);

  const openDialog = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clearance Progress</h1>
          <p className="text-slate-500 dark:text-slate-400">Track your clearance status across departments</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
        <div className="p-6 pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Your Clearance Progress</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Track the status of your clearance requests across departments</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
              <div className="rounded-full px-3 py-1 bg-white dark:bg-slate-900 shadow-sm text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Started: April 3, 2023
              </div>
              <div className="rounded-full px-3 py-1 bg-white dark:bg-slate-900 shadow-sm text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                {stats.progressPercentage}% Complete
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Overall Progress</h3>
                <span className="text-sm font-medium">{stats.progressPercentage}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500 ease-in-out"
                  style={{ width: `${stats.progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mb-1">Total</div>
                  <div className="text-3xl font-bold">{stats.totalCount}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-green-200 dark:border-green-800 shadow-sm bg-white dark:bg-slate-900">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-green-600 uppercase tracking-wider font-medium mb-1">Completed</div>
                  <div className="text-3xl font-bold text-green-600">{stats.completedCount}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800 shadow-sm bg-white dark:bg-slate-900">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-amber-600 uppercase tracking-wider font-medium mb-1">In Progress</div>
                  <div className="text-3xl font-bold text-amber-600">{stats.inProgressCount}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Departments</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-red-200 dark:border-red-800 shadow-sm bg-white dark:bg-slate-900">
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs text-red-600 uppercase tracking-wider font-medium mb-1">Rejected</div>
                  <div className="text-3xl font-bold text-red-600">{stats.rejectedCount}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Departments</div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="grid w-full grid-cols-3 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`rounded-md py-1.5 text-sm font-medium ${
                    activeTab === "all" ? "bg-white dark:bg-slate-900 shadow-sm" : ""
                  }`}
                >
                  All Departments
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`rounded-md py-1.5 text-sm font-medium ${
                    activeTab === "completed" ? "bg-white dark:bg-slate-900 shadow-sm" : ""
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab("in-progress")}
                  className={`rounded-md py-1.5 text-sm font-medium ${
                    activeTab === "in-progress" ? "bg-white dark:bg-slate-900 shadow-sm" : ""
                  }`}
                >
                  In Progress
                </button>
              </div>
              <div className="mt-6 space-y-4">
                {filteredItems.length === 0 ? (
                  <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
                    <p className="text-sm text-slate-500 dark:text-slate-400">No items to display</p>
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md ${
                        item.status === "completed"
                          ? "border border-green-200 dark:border-green-800"
                          : "border border-amber-200 dark:border-amber-800"
                      }`}
                    >
                      <div className="p-4 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                item.status === "completed"
                                  ? "bg-green-100 dark:bg-green-900/30"
                                  : "bg-amber-100 dark:bg-amber-900/30"
                              }`}
                            >
                              {item.status === "completed" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-green-600"
                                >
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-amber-600"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{item.department} Clearance</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Submitted on {item.date}</p>
                            </div>
                          </div>
                          <div>
                            {item.status === "completed" ? (
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-1"
                                >
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-1"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                In Progress
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <button
                          onClick={() => openDialog(item)}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-8 px-3 py-2 mt-4 w-full shadow-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                          {item.status === "completed" ? "View Approval Details" : "View Processing Details"}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog for item details */}
      {isDialogOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {selectedItem.department} Clearance {selectedItem.status === "completed" ? "Approval" : "Status"}
              </h3>
              <button onClick={closeDialog} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="space-y-4 py-4">
              {selectedItem.status === "completed" ? (
                <>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Approved By</h4>
                    <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{selectedItem.approver.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{selectedItem.approver.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Comments</h4>
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3 bg-slate-50 dark:bg-slate-900">
                      <p className="text-sm italic">"{selectedItem.approver.comments}"</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Pending With</h4>
                    <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{selectedItem.pendingWith.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{selectedItem.pendingWith.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Current Status</h4>
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3 bg-slate-50 dark:bg-slate-900">
                      <p className="text-sm italic">"{selectedItem.pendingWith.status}"</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Last Updated</h4>
                    <p className="text-sm">{selectedItem.pendingWith.lastUpdated}</p>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4">
              <button
                onClick={closeDialog}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2 w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressPage;