// Modal.jsx
import React from "react";
import classNames from "classnames";

const Modal = ({ isOpen, onClose, title, variant, buttonText, children }) => {
  if (!isOpen) return null;
  const baseStyle = "text-white py-2 px-4 rounded";
  const variants = {
    ghost:
      "bg-sideBarColor hover:bg-gold hover:font-bold text-white hover:text-black",
    outline: "border border-gray-300 bg-gold text-white hover:bg-sideBarColor",
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        // onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 w-96">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2"
            onClick={onClose}
            Cancel
          ></button>
          <button className={classNames(baseStyle, variants[variant])}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
