import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function SideText() {
  return (
    <div
      dir="rtl"
      className=" text-[15px] sm:text-xl text-white font-medium m-auto w-[20rem] md:w-[50rem] mt-[130px] sm:mt-[200px] text-center flex flex-col items-center space-y-8 relative z-[1] "
    >
      <p className="break-words">
        من المخاطر التي تهددها ، هو حماية  بكل اشكالها ، حياة الانسان
        والحيوان والنبات. وهذا واجب على كل المجتمعات والدول ومنظمة الامم المتحدة
        ، والطباطس التعبانه نفسيا ميتينك لضمان حياة هانئة طويلة تعرف عليهاء.
      </p>
      <Link to="problems" offset={-100} smooth={true}>
        <BsArrowDownCircle className="text-3xl animate-pulse hover:animate-none hover:brightness-90 active:brightness-75 mb-[40rem] cursor-pointer" />
      </Link>
    </div>
  );
}

export default SideText;
