import React from "react";
import { useRecordsData } from "./hooks/useRecordsData";

function RecordsPage({ onViewRecord }) {
  const { loading, error, filteredRecords, filters, updateFilters } =
    useRecordsData();

  const handleSearchChange = (e) => {
    updateFilters({ searchTerm: e.target.value });
  };

  const handleStatusFilterChange = (e) => {
    updateFilters({ statusFilter: e.target.value });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Loading records data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">
            Error Loading Records
          </h3>
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

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Clearance Records
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            View your clearance history and status
          </p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Your Clearance History</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                View all your past and current clearance requests
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-9 px-4 py-2">
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export Records
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  placeholder="Search records..."
                  className="flex h-9 w-full rounded-full border border-slate-200 bg-white pl-9 sm:w-[300px] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                  value={filters.searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="flex h-9 w-[180px] rounded-full border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                  value={filters.statusFilter}
                  onChange={handleStatusFilterChange}
                >
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                </select>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 w-[120px]">
                      Record ID
                    </th>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        Type
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
                        >
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </div>
                    </th>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        Date
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
                        >
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </div>
                    </th>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">
                      Status
                    </th>
                    <th className="h-10 px-4 text-right align-middle font-medium text-slate-500 dark:text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="h-24 text-center">
                        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mb-2 opacity-50"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                          <p>No records found.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredRecords.map((record) => (
                      <tr
                        key={record.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      >
                        <td className="p-4 align-middle font-medium">
                          {record.id}
                        </td>
                        <td className="p-4 align-middle">{record.type}</td>
                        <td className="p-4 align-middle">{record.date}</td>
                        <td className="p-4 align-middle">
                          {record.status === "completed" ? (
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
                        </td>
                        <td className="p-4 align-middle text-right">
                          <button
                            onClick={() =>
                              onViewRecord && onViewRecord(record.id)
                            }
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-8 px-3 py-2"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordsPage;
