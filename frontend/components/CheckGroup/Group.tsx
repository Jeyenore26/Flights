import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";
import { TbHeartHandshake } from "react-icons/tb";
const Group = (props: any) => {
  console.log(props);
  return (
    <section className="flex justify-center mt-5" id="animate33">
      <div className="w-[40rem] bg-[#eaebec] h-full rounded-lg mb-5">
        <div className="text-black flex justify-end cairo_semibold_title my-3 mr-8">
          حول المجموعة
        </div>
        <div className="flex justify-center mb-3">
          <p className="w-full mx-[2rem]  my-[5px] border-t-[1px] border-black"></p>
        </div>
        <div className="mx-[2rem]">
          <div
            dir="rtl"
            className="text-black/80 w-full text-sm flex justify-start cairo_regular_title my-2"
          ></div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <section dir="rtl" className="mx-[2rem] flex">
            <GiEarthAfricaEurope className="w-6 h-6 mt-4 text-black" />
            <div className="text-black w-full text-sm flex justify-start cairo_regular_title mt-4 mr-2">
              المكان
            </div>
          </section>
          <section dir="rtl" className="mx-[2rem] flex">
            <div className="text-black/70 w-full text-sm flex justify-start cairo_regular_title mt-1">
              {props.workplace}
            </div>
          </section>
          <section dir="rtl" className="mx-[2rem] flex">
            <AiFillClockCircle className="w-6 h-6 mt-4 text-black" />
            <div className="text-black w-full text-sm flex justify-start cairo_regular_title mt-4 mr-2">
              السجل
            </div>
          </section>
          <section dir="rtl" className="mx-[2rem] flex">
            <div className="text-black/70 w-full text-sm flex justify-start cairo_regular_title mt-1">
              تم انشاء هذا الجروب يوم {props?.createdAt?.split("T")[0]}
            </div>
          </section>
          <section dir="rtl" className="mx-[2rem] flex">
            <TbHeartHandshake className="w-6 h-6 mt-4 text-black" />
            <div className="text-black w-full  text-sm flex justify-start cairo_regular_title mt-4 mr-2">
              ماذا ننقذ
            </div>
          </section>
          <section dir="rtl" className="mx-[2rem] flex">
            <div className="text-black/70 w-full  text-sm flex justify-start cairo_regular_title mt-1 ">
              {props.description}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Group;
