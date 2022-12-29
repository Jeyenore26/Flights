import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function SideText() {
  return (
    <div
      dir="rtl"
      className="font-2xl text-[15px] md:text-[20px] lg:text-2xl text-white xxs:w-full md:w-[48rem] mt-[130px] sm:mt-[170px] xl:mt-[200px] relative z-[1] xxs:mx-0 md:mx-auto"
    >
      <div className=" flex-col items-right">
        <p
          dir="rtl"
          className="text-right cairo_bold_title break-words  xxs:mx-0  sidetext border-[#000]"
        >
          لقد حان الوقت لحماية بيتنا مان الوقت لحماية بيتنا من التلوث إن
          الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
          لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
        </p>
        <Link
          to="prob1"
          offset={-100}
          smooth={true}
          className="flex justify-center"
          duration={2000}
        >
          <BsArrowDownCircle className="  mt-[1rem] text-2xl sm:text-3xl animate-pulse hover:animate-none hover:brightness-90 active:brightness-75 cursor-pointer " />
        </Link>
      </div>
    </div>
  );
}

export default SideText;
