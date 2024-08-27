import React from "react";

const Button = ({ label }) => {
  return (
    <button className="border-2 border-secondary px-4 font-semibold py-2 rounded-full">
      {label}
    </button>
  );
};

export default Button;
