// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none";
  const variants = {
    default: "bg-[#6D60F6] text-white hover:bg-[#7f75f7] rounded-xl",
    outline: "border border-[#6D60F6] text-[#6D60F6] hover:bg-[#6D60F6] hover:text-[#fff] rounded-xl",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
