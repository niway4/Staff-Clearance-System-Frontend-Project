import React from "react";
import classNames from "classnames";

export default function Button({ children, className = "", variant = "", ...props }) {
  const baseStyle = "px-4 py-2 rounded text-sm font-medium";
  const variants = {
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
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
