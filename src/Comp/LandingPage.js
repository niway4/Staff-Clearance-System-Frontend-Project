import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* 🔵 HEADER with Logo */}
      <header className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-green-100 hover:shadow-lg transition duration-300">
        
        <div className="flex items-center space-x-3 p-0">
         <img src="/Logo.png" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
         <span className="font-bold text-xl text-blue-500">AASTU</span>
        </div>

      </header>

      {/* 🔷 MAIN Landing Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 text-center"
        >
          Employee Clearance System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-600 max-w-2xl text-center mb-8"
        >
          Simplify your clearance process with our digital platform. Track
          progress, receive updates, and complete all departmental clearances
          efficiently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white border-2px px-6 py-3 rounded-lg text-lg flex items-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* 🧩 Roles Section */}
        <section className="mt-16 grid gap-6 md:grid-cols-3 w-full max-w-6xl">
          {[
            {
              title: "Teachers",
              desc: "Initiate your clearance, track progress, and get notified instantly.",
            },
            {
              title: "Offices",
              desc: "Record employee data, update cases, and ensure smooth workflows.",
            },
            {
              title: "Admins",
              desc: "Oversee the clearance process, resolve conflicts, and generate reports.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-green-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {item.title}
              </h3>
              <p className="text-green-700">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
     
      <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">How the Clearance System Works</h2>
        <div className="w-[800px] h-[450px] mx-auto">
          <iframe
           className="w-full h-full rounded-lg shadow-lg"
           src="https://www.youtube.com/embed/xZtadif15WU?si=YTimv4o-zkniP2PW"
           title="Clearance System Tutorial"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>


      {/* ⚫ FOOTER */}
      <footer className="bg-white text-center py-4 border-t text-blue-500 text-sm ">
        © {new Date().getFullYear()} clearance-system. All rights reserved.
      </footer>
    </div>
  );
}

