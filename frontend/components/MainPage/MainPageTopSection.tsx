import Link from "next/link";
import React, { useEffect } from "react";
import MainPageSwiper from "./MainPageSwiper";

function MainPageTopSection() {
  useEffect(() => {
    let nav = document.getElementById("navbor");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      if (value > 0) {
        nav!.style.backgroundColor = String("#00000081");
      } else {
        nav!.style.backgroundColor = String("transparent");
      }
    });
  });
  return (
    <div>
      {/* nav */}
      <div>
        <div className=" fixed z-[100] w-full">
          <div
            id="navbor"
            className="py-4 flex items-center justify-between px-[4rem]"
          >
            <Link href={"/register"}>
              <button className="rounded-xl bg-white hover:brightness-75 active:brightness-50 text-black px-3 py-1">
                <h1>انضم لنا</h1>
              </button>
            </Link>

            <ul className=" space-x-3 sm:space-x-10 flex items-center font-light text-md md:text-lg">
              <Link href={"/"} className="space-x-[0.35rem]  flex items-center">
                {/* <p className="text-lg sm:text-xl mt-[27%] sm:mt-[3%] text-white ">
                  <ImEarth />
                </p> */}
                <li className="Havar hidden md:block cairo_semibold_title text-white">
                  مكان
                </li>
              </Link>
              <Link href={"/"} className="flex items-center">
                <div className="flex mx-1 space-x-1 ">
                  {/* <p className="text-lg sm:text-2xl mt-[27%] sm:mt-[3%] text-white">
                    <AiOutlineQuestionCircle />
                  </p> */}
                  <li className="Havar hidden md:block cairo_semibold_title text-white">
                    مكان
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
      </div>
      {/* swiper */}
      <MainPageSwiper />
      {/* end of swiper */}
    </div>
  );
}

export default MainPageTopSection;
