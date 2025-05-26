"use client";

import { useDashboardData } from "./hooks/useDashboardData";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  Shield,
  Clock3,
  ChevronRight,
  BarChart3,
  FileText,
} from "lucide-react";

function Dashboards({ onNavigateToProgress, onNavigateToForm }) {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] mx-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-sideBarColor border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-6 text-gray-600 font-medium">
            Loading dashboard data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 max-w-md"
        >
          <div className="flex items-start">
            <AlertCircle className="text-red-500 h-6 w-6 mt-0.5 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Error Loading Dashboard
              </h3>
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
    );
  }

  if (!data) return null;

  const { user, stats, recentUpdates, requiredActions } = data;

  const handleActionClick = (actionId) => {};

  return (
    <div className="space-y-8 pb-12">
      {/* Enhanced Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-sideBarColor to-blue-800 text-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </h1>
            <p className="text-blue-200 mt-2">
              Track and manage your clearance process with ease
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3 flex-shrink-0"
          >
            <button
              onClick={onNavigateToProgress}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-white/10 text-white hover:bg-white/20 h-11 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-1 focus:ring-offset-blue-600"
            >
              <Clock className="mr-2 h-5 w-5" />
              Request Status
            </button>
            <button
              onClick={onNavigateToForm}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-gold hover:bg-lightGold text-white shadow-md h-11 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 focus:ring-offset-blue-600"
            >
              <Shield className="mr-2 h-5 w-5" />
              New Clearance
            </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-600">
              Clearance Progress
            </h3>
          </div>
          <div className="px-6 py-6">
            <div className="text-3xl font-bold text-sideBarColor">
              {stats.progressPercentage}%
            </div>
            <div className="h-3 w-full rounded-full bg-gray-100 mt-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sideBarColor to-blue-500 transition-all duration-500"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
              {stats.completedCount} of {stats.totalCount} departments completed
            </p>
          </div>
        </motion.div>

        {/* Completed Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-600">Completed</h3>
          </div>
          <div className="px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-green-600">
                {stats.completedCount}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 flex items-center">
              <FileText className="h-4 w-4 text-gray-500 mr-1.5" />
              Library, IT, HR
            </p>
          </div>
        </motion.div>

        {/* In Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-600">In Progress</h3>
          </div>
          <div className="px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-gold">
                {stats.inProgressCount}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Clock3 className="h-6 w-6 text-gold" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 flex items-center">
              <FileText className="h-4 w-4 text-gray-500 mr-1.5" />
              Finance, Lab Equipment
            </p>
          </div>
        </motion.div>

        {/* Estimated Completion Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-600">
              Estimated Completion
            </h3>
          </div>
          <div className="px-6 py-6">
            <div className="text-3xl font-bold text-sideBarColor">May 15</div>
            <p className="text-sm text-gray-600 mt-3 flex items-center">
              <Clock className="h-4 w-4 text-gray-500 mr-1.5" />5 days remaining
            </p>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-12">
        {/* Recent Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-8 rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white"
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-sideBarColor">
                Recent Updates
              </h3>
              <p className="text-sm text-gray-500">
                Latest activity on your clearance requests
              </p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      update.status === "completed"
                        ? "bg-green-100"
                        : "bg-amber-100"
                    }`}
                  >
                  
                    {update.status === "completed" ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <Clock3 className="h-6 w-6 text-gold" />
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-medium text-sideBarColor">
                        {update.title}
                      </p>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                        {update.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Approved by:</span>{" "}
                      {update.approver}
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;{update.comment}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onNavigateToProgress}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-gray-200 bg-white shadow-sm hover:bg-gray-50 hover:border-gray-300 h-10 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-sideBarColor focus:ring-offset-2"
              >
                View All Updates
                <ChevronRight className="ml-1 h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Required Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-4 rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white"
        >
          <div className="p-6 border-b border-gray-100 bg-sideBarColor text-white">
            <h3 className="text-lg font-semibold">Required Actions</h3>
            <p className="text-sm text-blue-200">Tasks you need to complete</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {requiredActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
                  className={`rounded-lg border p-4 transition-all duration-200 hover:shadow-md ${
                    action.status === "completed"
                      ? "bg-green-50 border-green-200"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        action.status === "completed"
                          ? "bg-green-100"
                          : "bg-amber-100"
                      }`}
                    >
                      {action.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Clock3 className="h-5 w-5 text-gold" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {action.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  {action.buttonText && action.status !== "completed" && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleActionClick(action.id)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-gold hover:bg-lightGold text-white shadow-md h-10 px-4 py-2 w-full mt-3 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                    >
                      {action.buttonText}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white p-6"
      >
        <h3 className="text-lg font-semibold text-sideBarColor mb-4">
          Quick Links
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { title: "My Profile", icon: "👤" },
            { title: "Department Status", icon: "🏢" },
            { title: "Documents", icon: "📄" },
            { title: "Help Center", icon: "❓" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 cursor-pointer transition-colors"
            >
              <div className="text-2xl mb-2">{link.icon}</div>
              <span className="text-sm font-medium text-gray-700">
                {link.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboards;
