import React from "react";
import classNames from "classnames";

export default function Button({
  children,
  className = "",
  variant = "",
  ...props
}) {
  const baseStyle = "px-4 py-1  rounded text-sm font-semibold ";
  const variants = {
    ghost:
      "bg-sideBarColor hover:bg-gold hover:font-bold text-white hover:text-black",
    outline: "border border-gray-300 bg-gold text-white hover:bg-sideBarColor",
  };
  const handleSignOut = async () => {
    // Remove token from cookies
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    await fetch("/logout", {
      method: "POST",
      credentials: "include", // required to send cookies
    });
    // Remove from localStorage
    localStorage.removeItem("token");
    // Redirect
    window.location.href = "/dashboard"; // or "/dashboard", depending on your logic
  };

  return (
    <button
      onClick={handleSignOut}
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
