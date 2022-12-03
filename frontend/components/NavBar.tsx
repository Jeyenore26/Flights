import Link from "next/link";
import React from "react";
import { FaPlaneDeparture } from "react-icons/Fa";
import { BsFillBellFill } from "react-icons/bs";
import PickRegister from "./PickRegister";

export default function NavBar() {
  return (
    <div>
      <img
        src="http://www.wallpapers.net/earth-from-space-hd-wallpaper/download/5120x2160.jpg"
        alt="earth"
        className="w-full h-full fixed z-[-1] brightness-50 bg-black "
      />
      <div className="py-4 flex items-center justify-between">
        <div className=" ml-3 md:ml-[5rem]">
          <PickRegister>
            <button className="rounded-xl bg-white text-black px-3 py-1">
              <h1>
                انضم لنا
              </h1>
            </button>
          </PickRegister>
        </div>
        <ul className=" space-x-3 sm:space-x-10  flex items-center mr-3 md:mr-[5rem] font-light text-md md:text-lg">
          <Link href="/" className="space-x-1  flex items-center">
            <p className="text-lg sm:text-xl mt-[27%] sm:mt-[6%] text-white ">
              <FaPlaneDeparture />
            </p>
            <li className="Havar hidden sm:block cairo_semibold_title text-white">
              {" "}
              كيف تساعد الارض{" "}
            </li>
          </Link>
          <Link href="/" className="space-x-1  flex items-center">
            <p className="text-lg sm:text-xll mt-[27%] sm:mt-[6%] text-white">
              <BsFillBellFill />
            </p>
            <li className="Havar hidden sm:block cairo_semibold_title text-white">
              {" "}
              الاستفسارات{" "}
            </li>
          </Link>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-white"> ساعد الارض</p>
            <p className="text-white text-xl">logo</p>
          </div>
        </ul>
      </div>
    </div>
  );
}
