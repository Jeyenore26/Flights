import React from "react";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

function Member(props: any) {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center">
          <button className="ml-1">
            <HiDotsVertical
              className={`text-xl  ${
                props.darker
                  ? "text-[#e2e2e2] hover:text-[#bdbdbd]"
                  : "hover:text-[#5b5b5b]"
              } `}
              onClick={() => {
                setshow(!show);
              }}
            />
          </button>
          {show && (
            <div className="bg-black w-[8rem] h-[8rem] mt-[-20rem] ml-[-3rem] absolute"></div>
          )}
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <p
            className={`text-sm sm:text-lg md:text-xl font-semibold mt-5 text-center md:mt-0 ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            {props.name}
          </p>
          <img
            src={props.img}
            className="h-20 w-20 bg-slate-400 rounded-[40px] m-2 "
          ></img>
        </div>
      </div>
    </>
  );
}

export default Member;
