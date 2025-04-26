// src/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  return (
  
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* 🔵 HEADER with Logo */}
     <header className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-green-100 hover:shadow-lg transition duration-300">
       <div className="flex items-center space-x-3 p-0">
         <img src="/Logo.png" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
         <span className="font-bold text-xl text-blue-500">AASTU</span>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-lg p-20 max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Sign In/Log In</h1>
          <form>
           <div className="mb-6"> {/* Increased margin */}
            <label className="block text-blue-700 text-sm font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              className="shadow appearance-none border rounded-lg w-full py-1.5 px-2 text-gray-700 focus:outline focus:shadow-outline-blue"
              required
            />
          </div>
          <div className="mb-6"> {/* Increased margin */}
            <label className="block text-blue-700 text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="shadow appearance-none border rounded-lg w-full py-1.5 px-2 text-gray-700 focus:outline focus:shadow-outline-blue"
              required
            />
          </div>
          <div className="flex items-center justify-center"> {/* Centered the button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-blue-600 text-sm">
          <button 
            onClick={() => alert('Forgot password functionality not implemented.')}
            className="hover:text-blue-800 underline focus:outline-none"
          >
            Forgot password?
          </button>
        </p>
      </div>
     </div>
    
   
  </div> 
  );
};

export default LoginPage;