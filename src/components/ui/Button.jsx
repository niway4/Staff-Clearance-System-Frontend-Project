import React from "react";
import classNames from "classnames";

export default function Button({ children, className = "", variant = "", ...props }) {
  const baseStyle = "px-4 py-2 rounded text-sm font-semibold ";
  const variants = {
    ghost: "bg-yellow-500 hover:bg-orange-500 hover:font-bold text-white  ",
    outline: "border border-gray-300 bg-sideBarColor text-white hover:bg-blue-700",
  };
  return (
    <button
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
