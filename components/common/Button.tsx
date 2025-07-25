import React from "react";
import { ButtonProps } from "../../interfaces/index.ts/index.jsx";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};

export default Button;
