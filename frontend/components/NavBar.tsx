import Link from "next/link";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import {MdCancel} from 'react-icons/md'
import wallpaper from "../public/earthwallpaper.png";
export default function NavBar() {
  return (
    <div>
      <div className="py-4 flex items-center justify-between relative z-[1] ">
        
        <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
          <Link href={"/"} className="space-x-[0.35rem]  flex items-center">
            <p className="text-lg sm:text-xl mt-[27%] sm:mt-[3%] text-black ">
              <ImEarth />
            </p>
            <li className="Havar hidden md:block cairo_semibold_title text-black">
              كيف تساعد الارض
            </li>
          </Link>
          <Link href={"/"} className="flex items-center">
            <div className="flex mx-1 space-x-1 ">
              <p className="text-lg sm:text-2xl mt-[27%] sm:mt-[3%] text-black">
                <AiOutlineQuestionCircle />
              </p>
              <li className="Havar hidden md:block cairo_semibold_title text-black">
                الاستفسارات
              </li>
            </div>
          </Link>
         <Link href={'/homepage'}>
         <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-black"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
         </Link>
        </ul>
      </div>
    </div>
  );
}
