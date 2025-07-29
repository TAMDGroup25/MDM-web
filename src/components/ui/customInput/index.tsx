import type { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput = ({ label, className = "", ...props }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[#053158] font-medium">{label}</label>}
      <input
        {...props}
        className={`border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mdm focus:border-mdm transition-colors ${className}`}
      />
    </div>
  );
};

export default CustomInput;
