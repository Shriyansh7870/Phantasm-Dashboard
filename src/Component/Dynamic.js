import React from "react";



const DynamicInputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  className = "", // Default to an empty string
}) => {
  return (
    <div className={`mb-4 ${className} lg:flex-1`}>
      {" "}
      {/* Apply flex-1 only on lg and above */}
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default DynamicInputField;
