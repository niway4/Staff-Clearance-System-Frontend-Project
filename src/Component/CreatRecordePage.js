import React, { useState } from "react";
import { useCreateRecord } from "./hooks/useCreateRecord";

function CreateRecord({ onSubmit, onCancel }) {
  const { submitRecord, loading, error, success } = useCreateRecord();
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    clearanceType: "",
    date: "",
    notes: "",
    items: {
      booksReturned: false,
      noFees: false,
      equipmentReturned: false,
      accessCardsSurrendered: false,
      accountsDeactivated: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await submitRecord(formData);
    
    if (result && onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-lg overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Create Clearance Record</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Add a new clearance record for an employee</p>
        </div>
        
        {error && (
          <div className="mx-6 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mx-6 mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-green-700 dark:text-green-400">Record created successfully!</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="p-6 pt-0 space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="employeeId" className="text-sm font-medium">
                    Employee ID
                  </label>
                  <input
                    id="employeeId"
                    name="employeeId"
                    placeholder="Enter employee ID"
                    required
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                    value={formData.employeeId}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="employeeName" className="text-sm font-medium">
                    Employee Name
                  </label>
                  <input
                    id="employeeName"
                    name="employeeName"
                    placeholder="Enter employee name"
                    required
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                    value={formData.employeeName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm font-medium">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                    value={formData.department}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="business">Business School</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="medical">Medical School</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="clearanceType" className="text-sm font-medium">
                    Clearance Type
                  </label>
                  <select
                    id="clearanceType"
                    name="clearanceType"
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                    value={formData.clearanceType}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  >
                    <option value="">Select clearance type</option>
                    <option value="library">Library</option>
                    <option value="finance">Finance</option>
                    <option value="it">IT Department</option>
                    <option value="lab">Lab Equipment</option>
                    <option value="admin">Administrative</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Clearance Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Enter any additional notes"
                  className="flex h-24 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800"
                  value={formData.notes}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Clearance Items Checkboxes */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Clearance Items</label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(formData.items).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={handleCheckboxChange}
                        disabled={loading}
                        className="h-4 w-4 rounded border-slate-200 bg-white text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:ring-offset-slate-900"
                      />
                      <span className="text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onCancel}
                disabled={loading}
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-50 dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-500"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Create Record'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecord;