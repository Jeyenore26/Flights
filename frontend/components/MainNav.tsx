import Link from "next/link";
import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import {GiExitDoor} from 'react-icons/gi'
import wallpaper from "../public/earthwallpaper.png";
export default function MainNav() {
  return (
    <div className="rounded-b-lg bg-gray-800">
      <section className="2xl:mx-[4rem] xl:mx-[4rem] lg:mx-[4rem] md:mx-[4rem] sm:mx-[1rem] xs:mx-[0rem] xxs:mx-[0rem]">
      <div className="py-4 flex items-center justify-between relative z-[1] ">
          <Link href={"/homepage"}>
           <button className="flex  rounded-xl bg-white hover:brightness-75 active:brightness-50  text-black px-3 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-3 xs:px-3 xxs:px-1 py-1">
           <div className="mt-[5px] mx-1"><GiExitDoor/></div>
           <h1 className="cairo_regular_title">تسجيل الخروج</h1>
           
           </button>
          </Link>
        <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
          <Link href={"/"} className="space-x-1  flex items-center">
          <p className="text-lg sm:text-xl mt-[27%] sm:mt-[3%] text-white ">
              <ImEarth />
            </p>
            <li className="Havar hidden md:block cairo_semibold_title text-white">
              كيف تساعد الارض
            </li>
          </Link>
          <Link href={"/"} className="space-x-1 flex items-center">
           <div className="flex mx-1">
           <p className="text-lg sm:text-2xl mt-[27%] sm:mt-[3%] text-white">
              <AiOutlineUsergroupAdd />
            </p>
            <li className="Havar hidden md:block cairo_semibold_title text-white">
              اصنع مجموعة
            </li>
           </div>
          </Link>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-white"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
        </ul>
      </div>
      </section>
       
    </div>
  );
}
