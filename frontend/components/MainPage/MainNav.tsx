import React from "react";
import Link from "next/link";
import { ImEarth } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";

export default function MainNav() {
  return (
    <>
      <div className="bg-[#2F3436] text-white w-full py-4">
        <div className="flex items-center justify-between 2xl:mx-[8rem] xl:mx-[8rem] lg:mx-[0rem] sm:mx-[0rem] xs:mx[0rem] xxs:mx[0rem] md:mx[0rem]">
          <div className="flex hover:text-white/40 active:text-white/80 cursor-pointer">
            <button>
              <CgProfile className="mx-2 h-6 w-6 " />
            </button>
            <h4 className="cairo_regular_title">اسم الشخص</h4>
          </div>
          <div className="flex">
            <button>
              <AiOutlineFilter className="w-8 h-8 text-white mx-4 hover:text-white/40 active:text-white/80" />
            </button>
            <input
              dir="rtl"
              type="search"
              className="border-2 border-[##707070] rounded-2xl bg-white px-5 py-1 text-white 2xl:w-[30rem] lg:w-[20rem] md:w-[15rem] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden focus:text-black"
              placeholder="بحث"
            ></input>
          </div>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-white"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}
