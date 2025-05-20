"use client";

import { BookOpen, Building, FileCheck, Users, Save, CheckCircle } from 'lucide-react';
import useClearanceForm from "./hooks/useClearanceForm";
import { useEffect, useState } from "react";

function ClearanceForm() {
  const {
    formData,
    handleChange,
    isSubmitting,
    isSavingDraft,
    submitError,
    submitSuccess,
    draftSaved,
    submitForm,
    saveDraft,
  } = useClearanceForm();

  const [showDraftMessage, setShowDraftMessage] = useState(false);

  useEffect(() => {
    if (draftSaved) {
      setShowDraftMessage(true);
      const timer = setTimeout(() => {
        setShowDraftMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [draftSaved]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  const handleSaveDraft = async () => {
   console.log('save it ');
  };

  return (
    <div className="min-h-screen bg-backgroundColor py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-sideBarColor p-4 rounded-full">
              
            </div>
          </div>
          <h1 className="text-3xl font-bold text-sideBarColor">
            University Clearance Request Form
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Please complete all fields to process your clearance request. Fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 p-5 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md shadow-sm">
            <div className="flex">
              <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
              <div>
                <p className="font-medium">Clearance request submitted successfully!</p>
                <p className="text-sm mt-1">
                  Your request has been received and is being processed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Draft Saved Message */}
        {showDraftMessage && (
          <div className="mb-6 p-5 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded-md shadow-sm">
            <div className="flex">
              <CheckCircle className="h-6 w-6 mr-3 text-blue-500" />
              <div>
                <p className="font-medium">Draft saved successfully!</p>
                <p className="text-sm mt-1">You can continue editing this form later.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white border border-lightGray rounded-xl shadow-lg overflow-hidden">
          <div className="bg-sideBarColor text-white p-6">
            <div className="text-xl font-semibold flex items-center">
              <FileCheck className="mr-3 h-6 w-6" />
              Staff Clearance Application
            </div>
            <div className="text-titleBarColor text-sm mt-1 flex items-center">
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Form ID: CLR-2025-04</span>
              <span className="mx-2">•</span>
              
            </div>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {/* Department Information Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-sideBarColor mb-4 flex items-center pb-2 border-b border-lightGray">
                  <Building className="mr-2 h-5 w-5" />
                  Department Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="department"
                      className="block text-gray-700 font-medium"
                    >
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${
                        submitError?.errors?.department
                          ? "border-red-500"
                          : "border-lightGray"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm`}
                    >
                      <option value="" disabled>
                        Select department
                      </option>
                      <option value="computer-science">Computer Science</option>
                      <option value="engineering">Engineering</option>
                      <option value="business">Business Administration</option>
                      <option value="humanities">Humanities</option>
                      <option value="medicine">Medicine</option>
                      <option value="law">Law</option>
                      <option value="education">Education</option>
                      <option value="science">Science</option>
                    </select>
                    {submitError?.errors?.department && (
                      <p className="text-sm text-red-500 mt-1">
                        {submitError.errors.department}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="block text-gray-700 font-medium"
                    >
                      Current Position <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${
                        submitError?.errors?.position
                          ? "border-red-500"
                          : "border-lightGray"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm`}
                    >
                      <option value="" disabled>
                        Select position
                      </option>
                      <option value="professor">Professor</option>
                      <option value="associate-professor">
                        Associate Professor
                      </option>
                      <option value="assistant-professor">
                        Assistant Professor
                      </option>
                      <option value="lecturer">Lecturer</option>
                      <option value="researcher">Researcher</option>
                      <option value="administrative">
                        Administrative Staff
                      </option>
                      <option value="technical">Technical Staff</option>
                      <option value="other">Other</option>
                    </select>
                    {submitError?.errors?.position && (
                      <p className="text-sm text-red-500 mt-1">
                        {submitError.errors.position}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Committee Work Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-sideBarColor mb-4 flex items-center pb-2 border-b border-lightGray">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Committee Work
                </h2>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="committees"
                      className="block text-gray-700 font-medium"
                    >
                      List of Committees I Was Working On{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-evenTableRowColor p-4 rounded-lg">
                      <div className="flex items-center space-x-3 p-2 hover:bg-white rounded transition-colors">
                        <input
                          type="checkbox"
                          id="academicAffairs"
                          name="academicAffairs"
                          checked={formData.committees.academicAffairs}
                          onChange={handleChange}
                          className="h-4 w-4 text-editButtonColor focus:ring-editButtonColor rounded"
                        />
                        <label
                          htmlFor="academicAffairs"
                          className="text-sm font-medium"
                        >
                          Academic Affairs Committee
                        </label>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white rounded transition-colors">
                        <input
                          type="checkbox"
                          id="researchEthics"
                          name="researchEthics"
                          checked={formData.committees.researchEthics}
                          onChange={handleChange}
                          className="h-4 w-4 text-editButtonColor focus:ring-editButtonColor rounded"
                        />
                        <label
                          htmlFor="researchEthics"
                          className="text-sm font-medium"
                        >
                          Research Ethics Committee
                        </label>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white rounded transition-colors">
                        <input
                          type="checkbox"
                          id="curriculumDevelopment"
                          name="curriculumDevelopment"
                          checked={formData.committees.curriculumDevelopment}
                          onChange={handleChange}
                          className="h-4 w-4 text-editButtonColor focus:ring-editButtonColor rounded"
                        />
                        <label
                          htmlFor="curriculumDevelopment"
                          className="text-sm font-medium"
                        >
                          Curriculum Development Committee
                        </label>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white rounded transition-colors">
                        <input
                          type="checkbox"
                          id="studentAffairs"
                          name="studentAffairs"
                          checked={formData.committees.studentAffairs}
                          onChange={handleChange}
                          className="h-4 w-4 text-editButtonColor focus:ring-editButtonColor rounded"
                        />
                        <label
                          htmlFor="studentAffairs"
                          className="text-sm font-medium"
                        >
                          Student Affairs Committee
                        </label>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white rounded transition-colors">
                        <input
                          type="checkbox"
                          id="facultyDevelopment"
                          name="facultyDevelopment"
                          checked={formData.committees.facultyDevelopment}
                          onChange={handleChange}
                          className="h-4 w-4 text-editButtonColor focus:ring-editButtonColor rounded"
                        />
                        <label
                          htmlFor="facultyDevelopment"
                          className="text-sm font-medium"
                        >
                          Faculty Development Committee
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="universityCommittees"
                      className="block text-gray-700 font-medium"
                    >
                      Committees I Was Working On in the Name of the University
                    </label>
                    <textarea
                      id="universityCommittees"
                      name="universityCommittees"
                      value={formData.universityCommittees}
                      onChange={handleChange}
                      placeholder="List all committees you represented the university in"
                      className="w-full px-4 py-3 min-h-[100px] border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Unfinished Work Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-sideBarColor mb-4 flex items-center pb-2 border-b border-lightGray">
                  <Users className="mr-2 h-5 w-5" />
                  Unfinished Work
                </h2>
                <div className="space-y-2">
                  <label
                    htmlFor="unfinishedWork"
                    className="block text-gray-700 font-medium"
                  >
                    Unfinished Work Given by the Department{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="unfinishedWork"
                    name="unfinishedWork"
                    value={formData.unfinishedWork}
                    onChange={handleChange}
                    placeholder="Detail any pending tasks, projects, or responsibilities"
                    className={`w-full px-4 py-3 min-h-[120px] border ${
                      submitError?.errors?.unfinishedWork
                        ? "border-red-500"
                        : "border-lightGray"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm`}
                  ></textarea>
                  {submitError?.errors?.unfinishedWork && (
                    <p className="text-sm text-red-500 mt-1">
                      {submitError.errors.unfinishedWork}
                    </p>
                  )}
                </div>
              </div>

              {/* Reason for Leaving Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-sideBarColor mb-4 flex items-center pb-2 border-b border-lightGray">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Reason for Clearance
                </h2>
                <div className="space-y-2">
                  <label
                    htmlFor="reason"
                    className="block text-gray-700 font-medium"
                  >
                    Reason to Stop Working{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      submitError?.errors?.reason
                        ? "border-red-500"
                        : "border-lightGray"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm`}
                  >
                    <option value="" disabled>
                      Select reason
                    </option>
                    <option value="retirement">Retirement</option>
                    <option value="resignation">Resignation</option>
                    <option value="contract-end">End of Contract</option>
                    <option value="transfer">
                      Transfer to Another Institution
                    </option>
                    <option value="sabbatical">Sabbatical Leave</option>
                    <option value="medical">Medical Reasons</option>
                    <option value="personal">Personal Reasons</option>
                    <option value="other">Other</option>
                  </select>
                  {submitError?.errors?.reason && (
                    <p className="text-sm text-red-500 mt-1">
                      {submitError.errors.reason}
                    </p>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <label
                    htmlFor="reasonDetails"
                    className="block text-gray-700 font-medium"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="reasonDetails"
                    name="reasonDetails"
                    value={formData.reasonDetails}
                    onChange={handleChange}
                    placeholder="Provide additional information about your reason for leaving"
                    className="w-full px-4 py-3 min-h-[100px] border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-editButtonColor shadow-sm"
                  ></textarea>
                </div>
              </div>

              {/* Declaration */}
              <div className="mt-8 p-5 bg-evenTableRowColor rounded-lg border border-lightGray">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className={`mt-1 h-5 w-5 ${
                      submitError?.errors?.declaration ? "border-red-500" : ""
                    } text-editButtonColor focus:ring-editButtonColor rounded`}
                  />
                  <div>
                    <label
                      htmlFor="declaration"
                      className="text-gray-700 font-medium"
                    >
                      Declaration <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      I hereby declare that all the information provided above
                      is true and accurate to the best of my knowledge. I
                      understand that any false information may result in the
                      rejection of my clearance request.
                    </p>
                    {submitError?.errors?.declaration && (
                      <p className="text-sm text-red-500 mt-1">
                        {submitError.errors.declaration}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 border-t bg-evenTableRowColor p-6 mt-8 rounded-b-lg">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={isSavingDraft}
                  className={`px-5 py-2.5 border border-lightGray bg-white text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-editButtonColor flex items-center justify-center shadow-sm ${
                    isSavingDraft ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSavingDraft ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save as Draft
                    </>
                  )}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5 bg-sideBarColor text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sideBarColor flex items-center justify-center shadow-sm ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Clearance Request"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            University Administration Department © {new Date().getFullYear()}
          </p>
          <p className="mt-1">
            For assistance, please contact the HR department at hr@addisababascienceandtechnology.edu
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClearanceForm;
