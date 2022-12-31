import React, { useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { RiEye2Line } from "react-icons/ri";
export default function SaveWorld() {
  return (
    <>
      <section
        id="helphere"
        className="w-full h-full mt-[20rem] mb-[6rem] text-center"
      >
        <div className="flex justify-center cairo_semibold_title text-[2rem]  text-black">
          كيف تساعد الارض هنا؟؟
        </div>
        <div className="flex justify-center">
          <p className="w-40  mt-[3rem] border-t-[3px] border-[#81c132] "></p>
        </div>

        <div className="flex justify-evenly mt-[7rem]">
          <span className="flex flex-col items-center text-lg xs:text-2xl gap-5">
            <FaSearchLocation className="text-[3rem] xs:text-[5rem]" />
            <span dir="rtl" className="cairo_semibold_title ">
              ابحث عن حل لمشكلة
            </span>
          </span>
          <span className="flex flex-col items-center text-lg xs:text-2xl gap-5">
            <AiOutlineUsergroupAdd className="text-[3rem] xs:text-[5rem]" />
            <span dir="rtl" className="cairo_semibold_title ">
              انشاء مجموعة
            </span>
          </span>
          <p className="border-r-[2px] border-[#000000] h-[8rem] xs:h-40"></p>
          <span className="flex flex-col items-center text-lg xs:text-2xl gap-5">
            <RiEye2Line className="text-[3rem] xs:text-[5rem]" />
            <span dir="rtl" className="cairo_semibold_title ">
              أبحث عن مجموعة
            </span>
          </span>
          <span className="flex flex-col items-center text-lg xs:text-2xl gap-5">
            <GrUserWorker className="text-[3rem] xs:text-[5rem]" />
            <span dir="rtl" className="cairo_semibold_title ">
              ساعد المجموعة
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
