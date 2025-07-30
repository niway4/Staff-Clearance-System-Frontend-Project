import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react"; // Icons from lucide-react
import { Link } from "react-router-dom";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-sideBarColor text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need assistance with the staff clearance process?
          Reach out to us through the details below or fill out the contact
          form.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 flex items-start space-x-4">
            <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
              <p className="text-gray-600">
                For general inquiries and support.
              </p>
              <a
                href="mailto:clearance@astu.edu.et"
                className="text-blue-700 hover:underline font-medium"
              >
                clearance@astu.edu.et
              </a>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex items-start space-x-4">
            <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Call Us</h2>
              <p className="text-gray-600">
                Monday - Friday, 8:00 AM - 5:00 PM (EAT)
              </p>
              <a
                href="tel:+251118721000"
                className="text-green-700 hover:underline font-medium"
              >
                +251 118 721 000
              </a>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-purple-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Visit Us</h2>
              <p className="text-gray-600">
                Addis Ababa Science and Technology University
                <br />
                P.O.Box: 16417, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 flex items-start space-x-4">
            <Globe className="h-6 w-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Official Website
              </h2>
              <p className="text-gray-600">Find more information about ASTU.</p>
              <a
                href="https://www.astu.edu.et"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:underline font-medium"
              >
                www.astu.edu.et
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-sideBarColor text-center mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="text-center">
            

              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sideBarColor hover:bg-editButtonColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sideBarColor transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
