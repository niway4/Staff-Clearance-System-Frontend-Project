"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-backgroundColor">
      {/* Enhanced Header with Logo and Navigation */}
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-sideBarColor shadow-lg sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-gold shadow-md"
          />
          <span className="text-white font-bold text-xl hidden md:block">
            ClearanceSystem
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-lightGold transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-lightGold transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-lightGold transition-colors duration-300"
          >
            Contact
          </Link>
          <Link to="/Login">
            <button className="bg-gold hover:bg-lightGold text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Sign In
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-sideBarColor border-b border-blue-800"
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            <Link
              to="/"
              className="text-white hover:text-lightGold transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-lightGold transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-lightGold transition-colors duration-300"
            >
              Contact
            </Link>
            <Link to="/Login">
              <button className="bg-gold hover:bg-lightGold text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 w-full text-center">
                Sign In
              </button>
            </Link>
          </div>
        </motion.div>
      )}

      {/* Enhanced Main Landing Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                custom={0}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="inline-block bg-sideBarColor text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Streamlined Employee Clearance
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-sideBarColor mb-6 leading-tight"
              >
                Employee <span className="text-gold">Clearance</span> System
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Simplify your clearance process with our digital platform. Track
                progress, receive updates, and complete all departmental
                clearances efficiently in one centralized system.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <Link to="/Login">
                  <button className="bg-sideBarColor hover:bg-gold text-white px-8 py-3 rounded-lg text-lg font-medium flex items-center shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link to="/demo">
                  <button className="bg-transparent border-2 border-sideBarColor text-sideBarColor hover:bg-sideBarColor hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300">
                    Watch Demo
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>

          {/* Enhanced Roles Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sideBarColor mb-8 text-center">
              Designed for <span className="text-gold">Everyone</span> in Your
              Organization
            </h2>

            <div className="grid gap-8 md:grid-cols-3 w-full">
              {[
                {
                  title: "Teachers",
                  desc: "Initiate your clearance, track progress, and get notified instantly when your requests are processed.",
                  icon: "👨‍🏫",
                },
                {
                  title: "Offices",
                  desc: "Record employee data, update cases, and ensure smooth workflows with our intuitive interface.",
                  icon: "🏢",
                },
                {
                  title: "Admins",
                  desc: "Oversee the clearance process, resolve conflicts, and generate comprehensive reports.",
                  icon: "👩‍💼",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * idx + 0.7 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-gold transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-sideBarColor mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="my-16 bg-gradient-to-r from-sideBarColor to-blue-800 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
              How the Clearance System Works
            </h2>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-8">
              Watch our quick tutorial to see how easy it is to manage the
              clearance process with our system.
            </p>
            <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border-4 border-white/20">
              <iframe
                className="w-full aspect-video"
                title="Clearance System Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="my-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sideBarColor mb-8 text-center">
              Key <span className="text-gold">Features</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Real-time Updates",
                  desc: "Get instant notifications on clearance progress",
                },
                {
                  title: "Digital Signatures",
                  desc: "Approve documents with secure digital signatures",
                },
                {
                  title: "Document Storage",
                  desc: "Access all your clearance documents in one place",
                },
                {
                  title: "Automated Workflows",
                  desc: "Predefined processes ensure nothing is missed",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * idx + 1 }}
                  className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gold"
                >
                  <h3 className="text-lg font-semibold text-sideBarColor mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="my-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sideBarColor mb-4">
              Ready to Streamline Your Clearance Process?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join hundreds of organizations that have simplified their employee
              clearance procedures.
            </p>
            <Link to="/Login">
              <button className="bg-gold hover:bg-lightGold text-white px-10 py-4 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </motion.section>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-sideBarColor text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-10 w-10 rounded-full object-cover border border-gold"
              />
              <span className="font-bold text-xl">ClearanceSystem</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Simplifying the employee clearance process with our comprehensive
              digital platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-lightGold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-lightGold">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-blue-200">Addis Ababa Science and Technology</li>
              <li className="text-blue-200">Campus Building</li>
              <li className="text-blue-200">support@clearancesystem.com</li>
              <li className="text-blue-200">+251970388311</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-300">
            © {new Date().getFullYear()} Clearance System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
