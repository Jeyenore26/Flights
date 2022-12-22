import React from "react";
import { useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
function MainPageContent() {
  const [page, setpage] = useState(0);
  const [show, setshow] = useState(true);
  return (
    <div className="h-screen overflow-hidden">
      {/* nav */}
      <div className=" w-full bg-white absolute">
        <div className="grid grid-cols-6">
          <div className=" p-1 flex items-center">
            <img
              src="africa.jpg"
              alt=""
              className="h-12 w-12 rounded-[40px] ml-2"
            />
            <div className="flex flex-col items-center">
              <BiChevronDown
                className="ml-1 text-xl cursor-pointer hover:text-[#5b5b5b] "
                onClick={() => {
                  setshow(!show);
                }}
              />
              {show && (
                <div className="absolute mt-5 bg-white p-6 flex flex-col items-end ">
                  <p
                    dir="rtl"
                    className="hover:bg-slate-300 active:bg-slate-500 cursor-pointer w-full"
                  >
                    كسمك
                  </p>
                  <p
                    dir="rtl"
                    className="hover:bg-slate-300 active:bg-slate-500 cursor-pointer w-full"
                  >
                    يا
                  </p>
                  <p
                    dir="rtl"
                    className="hover:bg-slate-300 active:bg-slate-500 cursor-pointer w-full"
                  >
                    يوسف
                  </p>
                </div>
              )}
            </div>
          </div>
          <div dir="rtl" className=" col-span-4">
            <input
              placeholder="اضغط هنا للبحث..."
              type="text"
              className="outline-none h-full w-[90%] focus:border-2 p-1"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 h-full">
        {/* body */}

        {page === 0 && (
          <div className=" h-full w-full col-span-5 p-2 bg-[#f6f7fc] grid grid-rows-[280px_minmax(200px,_1fr)] pt-[4rem] justify-center items-center gap-4">
            <img src="asia.jpg" alt="" className="h-full rounded-lg" />
            <div className=" h-full text-center grid grid-rows-2 cairo_regular_title mt-[1rem]">
              <div className=" text-center">
                <p className="font-bold text-2xl">اسم الجروب</p>
                <div className="flex justify-center text-lg mt-2 text-[#adb1b5]">
                  <p className=" border-r-2 border-[#adb1b5] pr-2 mr-2">
                    50k عضو
                  </p>
                  <p>مش عارف</p>
                </div>
              </div>
              <p>
                لسه هظبط حاجات كتير + الوان الصفحه كلها + انيميشنز
                <br />
                احط هنا حاجه؟
              </p>
            </div>
          </div>
        )}
        {page === 1 && (
          <div className="overflow-y-auto h-full w-full col-span-5 p-2 pt-[4rem] bg-[#f6f7fc] grid grid-rows-auto grid-cols-1 gap-3 cairo_regular_title">
            <div className="bg-slate-400 rounded flex flex-col items-end ">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  عضو
                </p>
              </div>
            </div>
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2 ">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  slave
                </p>
              </div>
            </div>{" "}
            <div className="bg-slate-400 rounded flex flex-col items-end">
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">عمر زفارة</p>

                <div className="h-20 w-20 bg-white rounded-[40px] m-2 "></div>
              </div>

              <div dir="rtl" className="p-4 break-all xs:break-normal">
                فتح علبة هاتف Xiaomi Redmi Note 10 :- هاتف Xiaomi Redmi Note 10
                مع اسكرينة تم وضعها بشكل مسبق – رأس الشاحن بقوة 33 واط – سلك USB
                من نوع Type C – جراب ظهر لحماية الهاتف – دبوس معدني – كتيبات
                دليل بدء الاستخدام السريع – ضمان الهاتف .
              </div>
              <div className="flex space-x-2 m-2">
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  منذ سبعة ايام
                </p>
                <p className="text-xs bg-[#11111b] text-white rounded p-1">
                  كو-ادمن
                </p>
              </div>
            </div>
            <div className="text-center">ss</div>
          </div>
        )}
        {/* side nav */}
        <div dir="rtl" className=" h-full w-full p-2 bg-white z-[1000]">
          <div className="flex flex-col mt-4 ">
            <div className="hidden sm:block">
              <img
                src="africa.jpg"
                alt=""
                className="md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-[40px] mx-auto"
              />
              <div className="text-center text-[12px] sm:text-sm md:text-lg mt-3 cairo_regular_title">
                <p>مرحبا بك,</p>
                <p className="font-bold">محمد سامح الدياسطي.</p>
              </div>
            </div>
            <div className="mt-[1rem] sm:mt-[3rem] xl:mt-[5rem] lg:mr-4">
              <div
                className="flex items-center font-bold rounded my-6 sm:my-4 cursor-pointer"
                style={{ transition: "ease 0.2s" }}
                onClick={() => {
                  setpage(0);
                }}
                id={page === 0 ? "selected2" : ""}
              >
                {/*  */}
                {/*  */}
                {/*  */}

                <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                  <HiUserGroup />
                </p>
                <p className="mr-1 text-sm md:text-lg hidden sm:block">
                  الجروب
                </p>
              </div>

              <div className="mt-5 text-[#adb1b5]">
                <div
                  className="flex items-center hover:bg-[#f0f0f0] rounded my-6 sm:my-4 cursor-pointer"
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {
                    setpage(1);
                  }}
                  id={page === 1 ? "selected" : ""}
                >
                  {/*  */}
                  {/*  */}
                  {/*  */}

                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <RiArticleLine />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    البوستات
                  </p>
                </div>

                {/*  */}
                {/*  */}
                {/*  */}

                <div
                  className="flex items-center hover:bg-[#f0f0f0] rounded my-6 sm:my-4 cursor-pointer"
                  onClick={() => {
                    setpage(2);
                  }}
                  style={{ transition: "ease 0.2s" }}
                  id={page === 2 ? "selected" : ""}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <SlCalender />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    المواعيد
                  </p>
                </div>

                {/*  */}
                {/*  */}
                {/*  */}

                <div
                  className="flex items-center hover:bg-[#f0f0f0] rounded my-6 sm:my-4 cursor-pointer"
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {
                    setpage(3);
                  }}
                  id={page === 3 ? "selected" : ""}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <BsChatDots />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    المحادثة
                  </p>
                </div>

                {/*  */}
                {/*  */}
                {/*  */}

                <div
                  className="flex items-center hover:bg-[#f0f0f0] rounded my-6 sm:my-4 cursor-pointer"
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {
                    setpage(4);
                  }}
                  id={page === 4 ? "selected" : ""}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <BsPersonCircle />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    الاعضاء
                  </p>
                </div>

                {/*  */}
                {/*  */}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageContent;

{
  /*
  

            {page === 2 && <p>2</p>}
            {page === 3 && <p>3</p>}
            {page === 4 && <p>4</p>} */
}

//         <div className=" h-full w-full col-span-5 p-2 bg-[#f6f7fc]"></div> the default body div
