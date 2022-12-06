import Link from "next/link";
import React from "react";
import { FaPlaneDeparture } from "react-icons/Fa";
import { BsFillBellFill } from "react-icons/bs";
import wallpaper from "../public/earthwallpaper.png";
export default function NavBar() {
  return (
    <div>
      <div className="py-4 flex items-center justify-between relative z-[1] ">
        <div>
          <Link href={"/register"}>
            <button className="rounded-xl bg-white hover:bg-black/30 hover:text-white/60 active:bg-black/40 hover:text-white/80 text-black px-3 py-1">
              <h1>انضم لنا</h1>
            </button>
          </Link>
        </div>
        <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
          <Link href="/" className="space-x-1  flex items-center">
            <p className="text-lg sm:text-xl mt-[27%] sm:mt-[6%] text-white ">
              <FaPlaneDeparture />
            </p>
            <li className="Havar hidden sm:block cairo_semibold_title text-white">
              كيف تساعد الارض
            </li>
          </Link>
          <Link href="/" className="space-x-1  flex items-center">
            <p className="text-lg sm:text-xll mt-[27%] sm:mt-[6%] text-white">
              <BsFillBellFill />
            </p>
            <li className="Havar hidden sm:block cairo_semibold_title text-white">
              الاستفسارات
            </li>
          </Link>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-white"> ساعد الارض</p>
            <img
            src="./LogoIcon.png"
            className="w-10 h-10 mt-1"
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
