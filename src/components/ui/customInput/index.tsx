import type { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput = ({ label, className = "", ...props }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-primary font-medium">{label}</label>}
      <input
        {...props}
        className={`border border-gray-300 rounded px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${className}`}
      />
    </div>
  );
};

export default CustomInput;
