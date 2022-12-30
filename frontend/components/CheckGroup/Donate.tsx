import React from "react";
import { GiCrownedHeart } from "react-icons/gi";
import { AiFillBank, AiOutlineMail } from "react-icons/ai";
import { TbHeartHandshake } from "react-icons/tb";
import { BsPaypal } from "react-icons/bs";
const Donate = (props: any) => {
  return (
    <section className="flex justify-center" id="animate33">
      <div className="w-[40rem] bg-[#eaebec] h-[100%] mb-7 rounded-lg">
        <div className="text-black flex justify-end cairo_semibold_title my-3 mr-8">
          ساعد المجموعة
        </div>
        <div className="flex justify-center mb-3">
          <p className="w-full mx-[2rem]  my-[5px] border-t-[1px] border-black"></p>
        </div>
        <div className="mx-[2rem] mt-5">
          <div
            dir="rtl"
            className="text-black/80 w-full text-sm flex justify-start cairo_regular_title my-2"
          >
            نحن لا نطلب المال ولكن نحتاج لمساعدة البيئة و لا نملك ما يكفي من
            المال ف ارجو ان تساعدونا
          </div>
        </div>

        <div dir="rtl" className="mx-[2rem] flex mt-10">
          <BsPaypal className="w-6 h-6 mt-4 text-black" />
          <div className="text-black w-full text-sm flex justify-start cairo_regular_title mt-4 mr-2">
            بايبال
          </div>
        </div>
        <div dir="rtl" className="mx-[2rem] flex">
          <div className="text-black/70 w-full text-sm flex justify-start cairo_regular_title mt-1">
            {props.paypal}
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div className="text-black flex justify-around cairo_semibold_title mb-3 ">
            <GiCrownedHeart className="mt-1 h-5 w-5" />
            <p>شكرا لكم لمساعدة المجموعة</p>
            <GiCrownedHeart className="mt-1 h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Donate;
