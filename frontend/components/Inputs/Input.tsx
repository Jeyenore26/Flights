import React, { useState } from "react";

function Input({
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
  disabled,
}: {
  required?: boolean;
  disabled?: boolean;
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
    <div dir="rtl" className="space-y-2 md:space-y-5 flex-grow">
      <div className="flex flex-col">
        {label && (
          <label className={`font-semibold  text-white ${lclassName}`}>
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
        className={` bg-transparent rounded-xl	border-[1.1px] text-right w-[100%] py-1 mb-2 focus:outline-none ${
          error ? "border-red-600 focus:border-red-600" : ""
        }  ease-in-out text-green text-white/70 focus:text-white focus:border-[#819FAC] focus:outline-none focus:border-primary focus:border-dashed  px-2 transition ${iclassName}`}
      />
    </div>
  );
}

export default Input;
