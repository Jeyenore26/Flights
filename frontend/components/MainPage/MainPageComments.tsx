import React from "react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { ImImage } from "react-icons/im";

function MainPageComments(props: any) {
  const [liked, setLiked] = useState(false);
  const [pic, setPic] = useState(false);
  return (
    <div>
      <div>
        <div
          className={`rounded flex flex-col items-end origin-right  ${
            props.darker ? "bg-[#242424] text-[#e2e2e2]" : "bg-[#fff]"
          }`}
          id="animate1"
        >
          <div className="flex items-center">
            <p className="text-xl font-semibold mb-1">{props.name} </p>

            <img
              src={props.profImg}
              className="h-20 object-cover w-20 bg-slate-400 rounded-[40px] m-2 "
            ></img>
          </div>
          <div dir="rtl" className="p-4 break-all xs:break-words  sm:text-lg">
            {props.desc}
          </div>

          <div className="flex justify-between items-center w-full">
            <div
              className={`ml-2 flex items-center ${
                props.darker ? "text-white" : "text-black"
              }`}
            >
              <button>
                <AiFillLike
                  className={`text-3xl ease-linear duration-75 ${
                    liked ? "text-[#33ca47]" : "hover:text-[#696969]"
                  }`}
                  onClick={() => {
                    setLiked(!liked);
                  }}
                />
              </button>
              <p className="ml-2 text-xl mt-1">{props.like}</p>
            </div>
            <div className="flex space-x-2 m-2">
              <p className="text-xs bg-[#39A059] text-[#e2e2e2] rounded p-1">
                {props.time}
              </p>
              <p className="text-xs bg-[#39A059] text-[#e2e2e2] rounded p-1">
                {props.role}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`border-b-2 my-4 sm:my-0 ${
            props.darker ? "border-[#e2e2e2]" : "border-black"
          } w-[10rem] mx-auto translate-y-[1rem]`}
          id="animate2"
        ></div>
      </div>
    </div>
  );
}

export default MainPageComments;
