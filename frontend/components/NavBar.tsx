import Link from "next/link";
import React from "react";
import { FaPlaneDeparture } from "react-icons/Fa";
import { BsFillBellFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="bg-[#41729F] border-b-2 py-3 flex justify-between">
      <div className=" flex items-center ml-3 md:ml-[5rem]">
        <img
          className=" w-[4rem] sm:w-[5rem] mt-1"
          alt="synjat"
          src="https://media.discordapp.net/attachments/1046764038723481640/1046764097489866843/LOGO3.png"
        ></img>
        <h1 className="text-lg sm:text-xl font-medium text-white">
          Book n'Fly!
        </h1>
      </div>
      <ul className=" space-x-10 lg:space-x-10  flex items-center mr-3 md:mr-[5rem] font-light text-md md:text-lg">
        <Link href="/" className="space-x-1  flex items-center">
          <p className="text-lg sm:text-xl mt-[27%] sm:mt-[6%] ">
            <FaPlaneDeparture />
          </p>
          <li className="Havar hidden sm:block cairo_semibold_title text-white">
            {" "}
            الرحلات{" "}
          </li>
        </Link>
        <Link href="/" className="space-x-1  flex items-center">
          <p className="text-lg sm:text-xll mt-[27%] sm:mt-[6%]">
            <BsFillBellFill />
          </p>
          <li className="Havar hidden sm:block cairo_semibold_title text-white">
            {" "}
            الاشعارات{" "}
          </li>
        </Link>
        <Link href="/" className=" flex items-center space-x-1">
          <p className="text-lg sm:text-xl mt-[27%] sm:mt-[4%]">
            <BsPersonCircle />
          </p>
          <li className="Havar hidden sm:block cairo_semibold_title text-white">
            {" "}
            تسجيل الدخول{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
}
