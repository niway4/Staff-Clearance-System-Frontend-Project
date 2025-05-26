import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          About the Clearance Management System
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          The University Clearance Management System is a modern web-based platform
          designed to simplify and streamline the clearance process for university staff.
          Traditionally, this process involved paperwork and multiple in-person visits to
          different departments. This software eliminates that hassle by automating and digitizing the process.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Staff can start the clearance process with a single click.</li>
          <li>Departments can update staff status and obligations in real-time.</li>
          <li>Admins can manage, track, and resolve clearance requests efficiently.</li>
          <li>Automated notifications keep everyone informed.</li>
          <li>Clear progress tracking from submission to approval.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700">Who Uses the System?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Staff/Teachers:</strong> Initiate clearance and monitor their progress.
          </li>
          <li>
            <strong>Departments:</strong> Input pending obligations or approve clearance.
          </li>
          <li>
            <strong>Administrators:</strong> Oversee the entire process, generate reports,
            and resolve conflicts.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700">Why It Matters</h2>
        <p className="text-gray-700">
          By reducing paperwork, eliminating delays, and improving transparency, this system
          ensures a faster and more reliable clearance process for everyone involved. It’s built
          to serve the needs of both small and large academic institutions.
        </p>

        <div className="text-center pt-6">
          <p className="text-gold italic">
            "Efficiency, Transparency, Simplicity — the future of staff clearance."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;