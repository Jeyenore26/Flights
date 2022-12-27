import React, { useState } from "react";

function ImageInput({
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
    flex?:string;
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
                    <label
                        className={`font-semibold text-sm text-red-600 ${lclassName}`}
                    >
                        {error}
                    </label>
                )}
            </div>

            <input
              className={`${value} ? "text-titleText" : "text-transparent"} mt-2  w-full file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main 
              block
              font-small
              bg-white bg-clip-padding
              transition
              ease-in-out
              m-0
              focus:border-main focus:outline-none`}
              type="file"
              id="resume"
              {...iprops}
                ref={iref}
                required={required}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                
              
            />
        </div>
    );
}

export default ImageInput;
