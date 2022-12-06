import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function SideText() {
  return (
    <div
      dir="rtl"
      className=" text-[15px] sm:text-xl text-white w-[20rem] md:w-[50rem] mt-[130px] sm:mt-[200px] text-right flexs  items-center space-y-8 justify-end relative z-[1]"
    >
      <div className="flex justify-end">
        <p className=" break-words cairo_bold_title ">
          لقد حان الوقت لحماية بيتنا من التلوث إن الاستخدام الصحيح للعلم ليس
          لغزو الطبيعة بل للعيش فيها واستخدامه من أجل حياة أكثر استدامةً لقد حان
          الوقت لحماية بيتنا من التلوث إن الاستخدام الصحيح للعلم ليس لغزو
          الطبيعة بل للعيش فيها واستخدامه من أجل حياة أكثر استدامةً لقد حان
          الوقت لحماية بيتنا من التلوث إن الاستخدام الصحيح للعلم ليس لغزو
          الطبيعة بل للعيش فيها واستخدامه من أجل حياة أكثر استدامةً لقد حان
          الوقت لحماية بيتنا من التلوث إن الاستخدام الصحيح للعلم ليس لغزو
          الطبيعة بل للعيش فيها واستخدامه من أجل حياة أكثر استدامةً
        </p>
        <Link to="problems" offset={-100} smooth={true}>
          <BsArrowDownCircle className="text-3xl animate-pulse hover:animate-none hover:brightness-90 active:brightness-75 mt-12 mr-12 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default SideText;
