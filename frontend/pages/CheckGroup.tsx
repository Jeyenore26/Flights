import React, { useState } from "react";
import NavBar from "../components/CheckGroup/NavBar";
import dynamic from "next/dynamic";
const Members = dynamic(() => import("../components/CheckGroup/Members"));
const Proves = dynamic(() => import("../components/CheckGroup/Proves"));
const Group = dynamic(() => import("../components/CheckGroup/Group"));
const Activity = dynamic(() => import("../components/CheckGroup/Activity"));
const Donate = dynamic(() => import("../components/CheckGroup/Donate"));

export default function checkgroup() {
  const [page, setpage] = useState(1);
  return (
    <>
      <section className="bg-white h-full w-full">
        <NavBar />
        <div className=" w-full h-max">
          <section className="xl:mx-[20rem]">
            <img src="./asia.jpg" className="h-[22.8rem] w-full" />
            <div className="bg-[#39A059] w-full h-10 rounded-b-lg flex justify-end ">
              <span className="cairo_regular_title flex mt-1 mr-5 text-white justify-center">
                <span className="text-white/80 mx-1">The Tree </span> مجموعة تتم
                إدارتها بواسطة
              </span>
            </div>
            <div className="mx-[2rem] mt-4">
              <div dir="rtl" className="flex justify-between ">
                <div>
                  <h1 className="text-black cairo_bold_title text-[20px]">
                    ذا كوك
                  </h1>
                  <div dir="rtl" className="flex justify-start mt-1">
                    <h1 className="text-black/60 cairo_bold_title text-[15px] ml-3 ">
                      المكان مصر
                    </h1>
                    <h1 className="text-black cairo_bold_title text-[15px]">
                      .
                    </h1>
                    <h1 className="text-black/60 cairo_bold_title text-[13px] mt-1 mr-2">
                      4444 عضو
                    </h1>
                  </div>
                </div>
                <button className="bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] hover:text-white/40 active:text-white/70 md:px-8 xxs:py-2 py-2 xxs:px-4  md:text-[17px] mb-10 text-white rounded-lg">
                  انضم للمجموعة
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="lg:w-full xxs:w-10 mx-[2rem]  my-[1rem] border-t-[1px] border-[#fff] "></p>
            </div>
          </section>
          <section className="md:mx-[31rem] ">
            <div dir="rtl" className="flex justify-center ">
              <span
                onClick={() => {
                  setpage(1);
                }}
                className={
                  page === 1
                    ? "text-[#754b5a] transition-1  cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1 mr-5 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2 border-white cursor-pointer text-[15px] py-1 mr-5 mb-2"
                }
              >
                المجموعة
              </span>

              <span
                onClick={() => {
                  setpage(3);
                }}
                className={
                  page === 3
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1 mr-5 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2 border-white cursor-pointer text-[15px] py-1 mr-5 mb-2"
                }
              >
                الوسائط
              </span>
              <span
                onClick={() => {
                  setpage(2);
                }}
                className={
                  page === 2
                    ? "text-[#754b5a] transition-1 cairo_regular_title cursor-pointer text-[15px] border-b-2 border-[#754b5a] py-1 mr-5 mb-2"
                    : "text-black hover:text-black/40 active:text-black/80 cairo_regular_title border-b-2 border-white cursor-pointer text-[15px] py-1 mr-5 mb-2"
                }
              >
                ساعدنا
              </span>
            </div>
          </section>
        </div>
        {page === 1 && (
          <>
            <Group />
            <Members />
            <Activity />
          </>
        )}
        {page === 2 && (
          <>
            <Donate />
          </>
        )}

        {page === 3 && <Proves />}
      </section>
    </>
  );
}
