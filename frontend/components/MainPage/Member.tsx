import React from "react";
import { useState } from "react";
import { BiCrown } from "react-icons/bi";
import { GiArmorDowngrade, GiArmorUpgrade, GiBootKick } from "react-icons/gi";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

function Member(props: any) {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex space-x-2">
          <button className="ml-1 cursor-default">
            <TbLayoutSidebarLeftExpand
              className={`text-xl cursor-pointer  ${
                props.darker
                  ? "text-[#e2e2e2] hover:text-[#bdbdbd]"
                  : "hover:text-[#5b5b5b]"
              } ${show ? "rotate-180" : ""} ease-linear duration-200`}
              onClick={() => {
                setshow(!show);
              }}
            />
          </button>
          {show && (
            <div
              className={`h-auto p-2 w-auto rounded flex flex-col items-end justify-center space-y-3 md:space-y-2`}
            >
              <div
                id="animate1"
                className="flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <GiArmorUpgrade className="md:ml-2 text-2xl md:text-xl" />
                <p className="hidden md:block ">ترقية</p>
                {/* when member, only leader */}
              </div>
              <div
                id="animate1"
                className="flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <GiBootKick className="md:ml-2 text-2xl md:text-xl" />
                <p className="hidden md:block ">طرد</p>
                {/* when member, leader and admin */}
              </div>
              <div
                id="animate1"
                className="flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <GiArmorDowngrade className="md:ml-2 text-2xl md:text-xl" />
                <p className="hidden md:block ">خفض</p>
                {/* when admin, only leader */}
              </div>
              <div
                id="animate1"
                className="flex flex-row-reverse items-center hover:opacity-50 active:text-[#464646] md:active:opacity-[1] ease-linear duration-75"
              >
                <BiCrown className="md:ml-2 text-2xl md:text-xl" />
                <p className="text-sm hidden md:block">اعطاء قائد</p>
                {/* when admin, only leader */}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center">
          <p
            className={`text-sm sm:text-lg md:text-xl font-semibold text-center md:mt-0 ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            {props.name}
          </p>
          <img
            src={props.img}
            className="h-20 w-20 bg-slate-400 rounded-[40px] m-2 object-cover"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Member;
