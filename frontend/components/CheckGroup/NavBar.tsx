import React from "react";
import Link from "next/link";
import { ImEarth } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";
import {BsDoorClosed} from 'react-icons/bs'

export default function NavBar() {
  return (
    <>
      <div className=" text-black absolute w-full py-4">
        <div className="flex bg-transparent items-center justify-between 2xl:mx-[8rem] xl:mx-[8rem] lg:mx-[8rem] sm:mx-[0rem] xs:mx[0rem] xxs:mx[0rem] md:mx[0rem]">
          <div className="flex hover:text-black/40 active:text-black/80 cursor-pointer">
           <Link href={'/mainpage'}>
         <div className="flex">
         <button>
              <BsDoorClosed className="mx-2 h-6 w-6 " />
            </button>
            <h4 className="cairo_regular_title"> الرجوع</h4>
         </div>
           </Link>
          </div>
          <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-black"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}
