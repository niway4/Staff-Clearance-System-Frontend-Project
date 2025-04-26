import React from "react";
import classNames from "classnames";

export default function Button({ children, className = "", variant = "", ...props }) {
  const baseStyle = "px-4 py-1  rounded text-sm font-semibold ";
  const variants = {
    ghost: "bg-sideBarColor hover:bg-gold hover:font-bold text-white hover:text-black",
    outline: "border border-gray-300 bg-gold text-white hover:bg-sideBarColor",
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
