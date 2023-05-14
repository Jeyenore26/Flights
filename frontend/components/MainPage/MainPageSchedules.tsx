import React, { useState } from "react";
import { BiBuildingHouse, BiChevronDown, BiTimeFive } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
const MainPageSchedules = (props: any) => {
  const [accordian, setaccordian] = useState(false);
  console.log(props);
  return (
    <div>
      <div className="flex flex-col cairo_regular_title" id="animate1">
        <button
          dir="rtl"
          className={`w-[95%] sm:w-[80%] p-3 cursor-pointer text-right mx-auto rounded-md ease-out duration-[0.5s] ${
            accordian ? "rounded-b-none" : ""
          } ${
            props.darker
              ? "bg-[#212121] text-[#e2e2e2] hover:brightness-90 active:brightness-75"
              : "bg-white hover:bg-[#ededed] active:bg-[#dddddd]"
          }`}
          onClick={() => {
            setaccordian(!accordian);
          }}
        >
          <div className="flex items-center justify-between">
            {/* limit input letters of title*/}
            <p className="text-[17px] max-w-[90%]">{props.title}</p>
            <BiChevronDown
              className={`text-2xl ease-out duration-[0.2s] ${
                accordian ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
        <div
          className={`overflow-auto w-[95%] sm:w-[80%] mb-[2rem] sm:mb-[1rem] mx-auto rounded-b-md ease-out duration-[0.3s] ${
            accordian ? "h-[24rem]" : "h-0"
          } ${props.darker ? "text-[#e2e2e2] " : "text-black "}`}
        >
          <div dir="rtl">
            <div className="flex sm:flex-row flex-col sm:border-b-2 border-transparent">
              <div
                className={`${
                  props.darker ? "bg-[#171717]" : "bg-white"
                } h-[3rem] sm:h-[10rem] w-full sm:w-[6rem] flex items-center justify-center`}
              >
                <BsInfo className="text-3xl" />
              </div>
              <div
                className={`${
                  props.darker ? "bg-[#1c1c1c]" : "bg-white"
                } h-[10rem] w-full flex items-center justify-start`}
              >
                <p className="m-2">{props.details}</p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:border-b-2 border-transparent">
              <div
                className={`${
                  props.darker ? "bg-[#171717]" : "bg-white"
                } h-[3rem] sm:h-[6rem] w-full sm:w-[6rem] flex items-center justify-center`}
              >
                <BiBuildingHouse className="text-3xl" />
              </div>
              <div
                className={`${
                  props.darker ? "bg-[#1c1c1c]" : "bg-white"
                } h-[6rem] w-full flex items-center`}
              >
                <p className="m-2"> {props.place}</p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:border-b-2 border-transparent">
              <div
                className={`${
                  props.darker ? "bg-[#171717]" : "bg-white"
                } h-[3rem] sm:h-[6rem] w-full sm:w-[6rem] flex items-center justify-center`}
              >
                <BiTimeFive className="text-3xl" />
              </div>
              <div
                className={`${
                  props.darker ? "bg-[#1c1c1c]" : "bg-white"
                } h-[6rem] w-full flex items-center`}
              >
                <p className="m-2 ">{props.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageSchedules;
