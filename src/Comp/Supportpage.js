import React, { useState } from "react";

const faqs = [
  { question: "How to navigate the page?", answer: "Use the side navigation or buttons to explore sections." },
  { question: "How to change my password?", answer: "Go to settings > security > change password." },
  { question: "How to change email?", answer: "Contact support or update it from your profile settings." },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">
        How can we help you?
      </h1>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl space-y-4 mb-12">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-blue-200 rounded-lg p-4 cursor-pointer transition hover:bg-blue-50"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-blue-700">{faq.question}</h2>
              <span className="text-blue-600 text-xl">{openIndex === idx ? "-" : "+"}</span>
            </div>
            {openIndex === idx && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <p className="text-center font-semibold text-blue-700 mb-2">
        For other specific questions
      </p>
      <p className="text-center text-blue-800 font-medium mb-6">
        Contact support using the form
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Ask Here</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your question..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
