import React, { useState } from "react";

function BInputOutline({
  label,
  type,
  placeholder,
  value,
  onChange,
  iprops,
  iref,
  required,
  error,
  iclassName,
  lclassName,
  flex,
  disabled,
}: {
  required?: boolean;
  disabled?: boolean;
  flex?: string;
  iref?: any;
  label?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  value?: any;
  error?: string;
  iclassName?: string;
  lclassName?: string;
  iprops?: {};
  onChange?: (e: any) => any;
}) {
  return (
    <div dir="rtl" className="">
      <div className={`flex justify-start ${flex}`}>
        {label && (
          <label
            className={`font-semibold mt-4 text-lg text-black ${lclassName}`}
          >
            {label}
          </label>
        )}
        {error && (
          <label className={`font-semibold text-sm text-red-600 ${lclassName}`}>
            {error}
          </label>
        )}
      </div>

      <input
        {...iprops}
        ref={iref}
        required={required}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={` bg-transparent	text-start w-[full] h-12 focus:outline-none ${
          error ? "border-red-600 focus:border-red-600" : ""
        }  ease-in-out text-green text-black/30 focus:text-black focus:border-blue-600 focus:outline-none focus:border-primary focus:border-dashed rounded-md transition ${iclassName}`}
      />
    </div>
  );
}

export default BInputOutline;
