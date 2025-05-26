import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileEditor = () => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [password, setPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const employee = {
    name: "Dr Niway Chemer",
    email: "niway@aastu.edu.et",
    department: "ICT",
    id: "AASTU12345",
  };

  const handleEditClick = () => {
    setShowPasswordPopup(true);
  };

  const handlePasswordSubmit = () => {
    // Simulate password check
    setShowPasswordPopup(false);
    setShowEditForm(true);
  };

  const handleSaveChanges = () => {
    console.log("Saved:", { newName, newEmail, newPassword });
    setShowEditForm(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-blue-900 hover:shadow-lg transition duration-300">
        <div className="flex items-center space-x-3 p-0">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg">AASTU</span>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleProfile}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="/niway.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-white font-medium">{employee.name}</span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-20">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Profile
              </p>
              <div className="text-sm text-gray-800">
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>ID:</strong> {employee.id}</p>
              </div>
              
              <button
                onClick={() => setProfileOpen(false)}
                className="mt-3 w-full text-center text-blue-600 hover:underline text-sm"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Section */}
      <div className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto flex justify-between gap-8">
          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>ID:</strong> {employee.id}</p>

            <button
              onClick={handleEditClick}
              className="mt-4 bg-gold text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Edit Profile
            </button>
          </div>

          {/* Image Upload Section */}
          <div className="w-60 text-center">
            <h3 className="font-semibold mb-2">Profile Image</h3>
            <img
              src={preview || "/niway.png"}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Password Prompt */}
      {showPasswordPopup && (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="font-bold mb-2">Enter your password</h3>
            <input
              type="password"
              className="w-full border p-2 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={handlePasswordSubmit}
                className="bg-blue-900 hover:bg-gold text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Form */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Image Upload Section */}
          <div className="w-60 text-center">
            <h3 className="font-semibold mb-2">Profile Image</h3>
            <img
              src={preview || "/niway.png"}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover border border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-3 text-sm"
            />
          </div>
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="font-bold mb-4">Edit Profile</h3>
            <input
              type="text"
              placeholder="Admin Name"
              className="w-full border p-2 mb-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="email"
              placeholder="New Email"
              className="w-full border p-2 mb-2"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-2 mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowEditForm(false)}
                className="bg-gray-300 hover:bg-gold px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-900 hover:bg-gold text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEditor;