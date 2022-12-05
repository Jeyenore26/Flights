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
        <div dir="rtl" className="space-y-5 flex-grow">
            <div className="flex flex-col">
                {label && (
                    <label
                        className={`font-semibold mt-4 text-lg text-white ${lclassName}`}
                    >
                        {label}
                    </label>
                )}
                {error && (
                    <label
                        className={`font-semibold text-sm text-red-600 ${lclassName}`}
                    >
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
                className={`border-gray-400  text-right border-2 border-solid w-[100%] h-12 focus:outline-none ${error ? "border-red-600 focus:border-red-600" : ""
                    } focus:border-primary focus:border-dashed py-1 px-2 rounded-md transition ${iclassName}`}
            />
        </div>
    );
}

export default Input;
