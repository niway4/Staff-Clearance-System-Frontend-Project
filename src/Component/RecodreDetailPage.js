import React from "react";
import { useRecordDetail } from "./hooks/useRecordDetails";

function RecordDetailPage({ recordId, onBack }) {
  const { data: record, loading, error } = useRecordDetail(recordId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400">Loading record details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">Error Loading Record</h3>
          <p className="text-red-700 dark:text-red-400">{error}</p>
          <div className="mt-4 flex gap-2">
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-red-600 text-white shadow hover:bg-red-700 h-9 px-4 py-2"
            >
              Retry
            </button>
            <button 
              onClick={onBack}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-9 px-4 py-2"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!record) {
    return null;
  }

  const handleDownload = () => {
    console.log("Downloading certificate for record:", record.id);
    // Here you would implement the actual download functionality
    alert(`Certificate for ${record.id} is being prepared for download.`);
  };

  const handlePrint = () => {
    console.log("Printing record:", record.id);
    window.print();
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={onBack} 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-9 w-9"
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
            >
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
            <span className="sr-only">Back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Record Details</h1>
            <p className="text-slate-500 dark:text-slate-400">View detailed information about this clearance record</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
        <div className="p-6 pb-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Record {record.id}</h3>
              <p className="text-base text-slate-500 dark:text-slate-400">
                {record.type} - {record.date}
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrint}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-9 px-4 py-2"
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
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print
              </button>
              <button 
                onClick={handleDownload}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
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
                    className="text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</h3>
                  <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
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
                </div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-slate-200 dark:bg-slate-700"></div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Initiated On</h3>
                <p className="text-sm font-medium">{record.date}</p>
              </div>
              {record.status === "completed" && (
                <>
                  <div className="hidden sm:block h-16 w-px bg-slate-200 dark:bg-slate-700"></div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Completed On</h3>
                    <p className="text-sm font-medium">{record.completedDate}</p>
                  </div>
                </>
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
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
                  className="mr-2 text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Department Approvals
              </h3>
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr>
                      <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">Department</th>
                      <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">Status</th>
                      <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">Date</th>
                      <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">Approved By</th>
                      <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.departments.map((dept, index) => (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-4 align-middle font-medium">{dept.name}</td>
                        <td className="p-4 align-middle">
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
                        </td>
                        <td className="p-4 align-middle">{dept.date}</td>
                        <td className="p-4 align-middle">
                          <div>
                            <p className="font-medium">{dept.approver}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{dept.position}</p>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <p className="text-sm italic">"{dept.comments}"</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handleDownload}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Clearance Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordDetailPage;