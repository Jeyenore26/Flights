import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { Link as Lonk } from "react-scroll";

function HomeTopSection() {
  return (
    <div className="w-full">
      <div
        className="topImg bg-cover h-[40rem] md:h-[95vh] mb-[10rem] md:mb-[20rem]"
        id="animate32"
      >
        {/* nav */}
        <div className="mx-[1rem] sm:mx-[4rem]">
          <div
            className="py-4 flex items-center justify-between"
            id="animate34"
          >
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
        <div className="flex items-center justify-center h-[80%]">
          <div
            dir="rtl"
            className=" font-2xl text-2xl text-white w-[90%] md:w-[45rem] mx-auto"
            id="animate35"
          >
            <div
              className="box1 w-[5rem] h-[5rem] absolute"
              id="animate22"
            ></div>

            <div className="flex-col items-center bg-[#74ae2d28] shadow-2xl">
              <p className="cairo_semibold_title text-lg lg:text-xl xl:text-2xl pt-[2rem] p-6 break-all">
                إن الإنسان بدأ حياته على الأرض وهو يحاول أن يحمي نفسه من نوائب
                الطبيعة. وانتهى به الأمر بعد آلاف السنين وهو يحاول أن يحمي
                الطبيعة من نفسه. لم يقتصر التلوث على سطح الأرض بل طال جوفها،
                أيضاً، وبات يهدد حياة كل الكائنات.
              </p>
              <div className="flex justify-center pb-[2rem]">
                <Lonk to="midTo" smooth={true} duration={2000}>
                  <p className="p-3 bg-[#74AE2D] cairo_regular_title hover:brightness-90 active:brightness-75 cursor-pointer">
                    ماذا تقصد؟
                  </p>
                </Lonk>
              </div>
            </div>
            <div
              className="box2 w-[5rem] h-[5rem] float-left -mt-20"
              id="animate22"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTopSection;
