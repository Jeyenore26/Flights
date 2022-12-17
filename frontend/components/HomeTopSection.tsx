import React from "react";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { Link as Lonk } from "react-scroll";

function HomeTopSection() {
  return (
    <div className=" w-full h-[110vh] ">
      <div className="topImg bg-cover h-full">
        {/* nav */}
        <div className="mx-[1rem] sm:mx-[4rem]">
          <div className="py-4 flex items-center justify-between ">
            <Link href={"/register"}>
              <button className="rounded-xl bg-white hover:brightness-75 active:brightness-50  text-black px-3 py-1">
                <h1>انضم لنا</h1>
              </button>
            </Link>
            <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
              <Link href={"/"} className="space-x-[0.35rem]  flex items-center">
                <p className="text-lg sm:text-xl mt-[27%] sm:mt-[3%] text-white ">
                  <ImEarth />
                </p>
                <li className="Havar hidden md:block cairo_semibold_title text-white">
                  كيف تساعد الارض
                </li>
              </Link>
              <Link href={"/"} className="flex items-center">
                <div className="flex mx-1 space-x-1 ">
                  <p className="text-lg sm:text-2xl mt-[27%] sm:mt-[3%] text-white">
                    <AiOutlineQuestionCircle />
                  </p>
                  <li className="Havar hidden md:block cairo_semibold_title text-white">
                    الاستفسارات
                  </li>
                </div>
              </Link>
              <Link href={"/homepage"} className="cursor-default">
                <div className=" flex items-center space-x-1">
                  <p className="cairo_semibold_title text-white"> ساعد الارض</p>
                  <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
                </div>
              </Link>
            </ul>
          </div>
        </div>
        {/* sidetext */}
        <div
          dir="rtl"
          className=" font-2xl text-[15px] md:text-[20px] lg:text-2xl text-white w-[99%] md:w-[48rem] mt-[6rem] mx-auto"
        >
          <div className=" flex-col items-center bg-[#0f29406f] p-[4rem] shadow-2xl">
            <p className="cairo_bold_title ">
              لقد حان الوقت لحماية بيتنا مان الوقت لحماية بيتنا من التلوث إن
              الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
              لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
            </p>
            <Lonk
              to="midTo"
              offset={-100}
              smooth={true}
              className="flex justify-center -mb-8 mt-2"
              duration={2000}
            >
              <p className="p-3 bg-[#58a8e7] hover:brightness-90 active:brightness-75 cursor-pointer">
                {" "}
                ماذا تقصد؟
              </p>
            </Lonk>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTopSection;
