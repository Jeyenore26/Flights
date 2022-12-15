import React, { useState } from "react";

function CreateInput({
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
    min,
    max,

}: {
    required?: boolean;
    disabled?: boolean;
    min?: number;
    max?:number;
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
                minLength={min}
                maxLength={max}
                className={` bg-transparent	border-4 rounded-lg	 text-right w-[100%] h-12 focus:outline-none ${error ? "border-red-600 focus:border-red-600" : ""
                    }  ease-in-out text-green text-white/30 focus:text-black focus:border-blue-600 focus:outline-none focus:border-primary focus:border-dashed py-1 px-2 rounded-md transition ${iclassName}`}
            />
        </div>
    );
}

export default CreateInput;
