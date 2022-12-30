import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { Link as Lonk } from "react-scroll";

function HomeTopSection() {
  return (
    <div className="w-full">
      <div
        className="topImg bg-cover 2xl:h-[95vh] h-[100vh] mb-[20rem]"
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
          className=" font-2xl text-2xl text-white w-[90%] md:w-[45rem] mt-[4rem] md:mt-[6rem] xl:mt-[9rem] mx-auto"
          id="animate35"
        >
          <div className="box1 w-[5rem] h-[5rem] absolute" id="animate22"></div>

          <div className="flex-col items-center bg-[#74ae2d28] shadow-2xl">
            <p className="cairo_semibold_title text-xl xl:text-2xl pt-[2rem] p-6">
              على سبيل المثال، ستكون حياته مهددة بالخطر في عام 2050 بشكل أكبر
              بكثير من الناس الذين يعيشون الآن". وينقل موقع قناة "الحرة"
              الأمريكية عن رهبان، تأكيده أن "الوضع قاتم للغاية"
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
  );
}

export default HomeTopSection;
