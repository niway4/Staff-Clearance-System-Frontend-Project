import React from "react";
import { useDashboardData } from "./hooks/useDashboardData";

function Dashboard({ onNavigateToProgress, onNavigateToRecords }) {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] mx-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Loading dashboard data...
          </p>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] mx-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md text-center">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">
            Error Loading Dashboard
          </h3>
          <p className="text-red-700 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-red-600 text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 h-10 px-4 py-2"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { user, stats, recentUpdates, requiredActions } = data;

  const handleActionClick = (actionId) => {
    console.log(`Action clicked: ${actionId}`);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">
            Track and manage your clearance process
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={onNavigateToProgress}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Request Status
          </button>
          <button
            onClick={onNavigateToRecords}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 dark:hover:bg-blue-900 h-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            New Clearance
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Progress Card */}
        <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-sm font-medium">Clearance Progress</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold">
              {stats.progressPercentage}%
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 mt-2">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              {stats.completedCount} of {stats.totalCount} departments completed
            </p>
          </div>
        </div>

        {/* Completed Card */}
        <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-sm font-medium">Completed</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-green-600">
                {stats.completedCount}
              </div>
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
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Library, IT, HR
            </p>
          </div>
        </div>

        {/* In Progress Card */}
        <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-sm font-medium">In Progress</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-amber-600">
                {stats.inProgressCount}
              </div>
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
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Finance, Lab Equipment
            </p>
          </div>
        </div>

        {/* Estimated Completion Card */}
        <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-sm font-medium">Estimated Completion</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold">May 15</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              5 days remaining
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-12">
        {/* Recent Updates */}
        <div className="md:col-span-8 rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Recent Updates</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Latest activity on your clearance requests
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-6">
              {recentUpdates.map((update) => (
                <div key={update.id} className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      update.status === "completed"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : "bg-amber-100 dark:bg-amber-900/30"
                    }`}
                  > 

                    {update.status === "completed" ? (
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
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
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
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{update.title}</p>
                      <span className="text-xs text-slate-600 dark:text-slate-300">
                        {update.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Approved by: {update.approver}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      &ldquo;{update.comment}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={onNavigateToProgress}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View All Updates
              </button>
            </div>
          </div>
        </div>

        {/* Required Actions */}
        <div className="md:col-span-4 rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 transition-colors duration-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Required Actions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Tasks you need to complete
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {requiredActions.map((action) => (
                <div
                  key={action.id}
                  className={`rounded-lg border p-4 transition-colors duration-200 ${
                    action.status === "completed"
                      ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                      : "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        action.status === "completed"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-amber-100 dark:bg-amber-900/30"
                      }`}
                    >
                      {action.status === "completed" ? (
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
                          className="text-green-600"
                          aria-hidden="true"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      ) : (
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
                          className="text-amber-600"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{action.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  {action.buttonText && action.status !== "completed" && (
                    <button
                      onClick={() => handleActionClick(action.id)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 h-10 px-4 py-2 w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {action.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
