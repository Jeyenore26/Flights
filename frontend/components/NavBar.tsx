import Link from "next/link";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import wallpaper from "../public/earthwallpaper.png";
export default function NavBar() {
  return (
    <div>
      <div className="py-4 flex items-center justify-between relative z-[1] ">
        <div>
          <Link href={"/register"}>
            <p className="rounded-xl bg-white hover:brightness-75 active:brightness-50  text-black px-3 py-1">
              <h1>انضم لنا</h1>
            </p>
          </Link>
        </div>
        <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
          <Link href={"/"} className="space-x-1  flex items-center">
          <div className="flex mx-1">
          <p className="text-lg sm:text-xl mt-[27%] sm:mt-[3%] text-white ">
              <ImEarth />
            </p>
            <li className="Havar hidden md:block cairo_semibold_title text-white">
              كيف تساعد الارض
            </li>
          </div>
          </Link>
          <Link href={"/"} className="space-x-1 flex items-center">
           <div className="flex mx-1">
           <p className="text-lg sm:text-2xl mt-[27%] sm:mt-[3%] text-white">
              <AiOutlineQuestionCircle />
            </p>
            <li className="Havar hidden md:block cairo_semibold_title text-white">
              الاستفسارات
            </li>
           </div>
          </Link>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-white"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
        </ul>
      </div>
    </div>
  );
}
