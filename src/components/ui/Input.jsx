import React from "react";

export const Input = ({ type = "text", className = "", ...props }) => {
  return (
    <input
      type={type}
      className={`border rounded px-3 py-2 ${className}`}
      {...props}
    />
  );
};
