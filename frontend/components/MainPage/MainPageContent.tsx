import React, { useEffect } from "react";
import { useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import {
  BsChatDots,
  BsPersonCircle,
  BsFillMoonFill,
  BsSunFill,
} from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi";
import { BiArrowBack, BiChevronDown, BiLogOut, BiPlus } from "react-icons/bi";
import MainPageComments from "./MainPageComments";
import MainPageSchedules from "./MainPageSchedules";
import MainPageMembers from "./MainPageMembers";
import CreateShModal from "./CreateShModal";
import CreatePostModal from "./CreatePostModal";
function MainPageContent() {
  const [page, setpage] = useState(0);
  const [show, setshow] = useState(false);
  const [dark, setdark] = useState(false);
  const [openpost, setopenpost] = useState(false);
  const [openschedule, setopenschedule] = useState(false);

  return (
    <div
      className="h-screen overflow-hidden"
      style={dark ? { colorScheme: "dark" } : {}}
    >
      {/* nav */}
      {openpost && <CreatePostModal setIsOpen={setopenpost} />}
      {openschedule && <CreateShModal setIsOpen={setopenschedule} />}
      <div
        className={`w-full ${
          dark ? "bg-[#1d1d1d]" : "bg-white"
        } absolute z-[998] origin-right`}
        id="animate1"
      >
        <div className="grid grid-cols-6" id="animate32">
          <div className=" p-1 flex items-center">
            <img
              src="africa.jpg"
              alt=""
              className="h-12 w-12 rounded-[40px] ml-2"
            />
            <div className="flex flex-col items-center">
              <div className="flex">
                <button className="ml-1">
                  <BiChevronDown
                    className={`text-xl  ${
                      dark
                        ? "text-[#e2e2e2] hover:text-[#bdbdbd]"
                        : "hover:text-[#5b5b5b]"
                    } `}
                    onClick={() => {
                      setshow(!show);
                    }}
                  />
                </button>
                <button className="text-xl ml-5 z-[10000]">
                  {!dark && (
                    <BsFillMoonFill
                      onClick={() => {
                        setdark(!dark);
                      }}
                      className={`${dark ? "text-[#e2e2e2]" : ""}`}
                    />
                  )}
                  {dark && (
                    <BsSunFill
                      onClick={() => {
                        setdark(!dark);
                      }}
                      className={`${dark ? "text-[#e2e2e2]" : ""}`}
                    />
                  )}
                </button>
              </div>

              {show && (
                <div
                  className={`absolute mt-7 h-[6rem] py-2 px-2 flex flex-col items-end rounded-xl space-y-2 overflow-hidden ${
                    dark ? "bg-[#1d1d1d] text-[#e2e2e2]" : "bg-white text-black"
                  }`}
                  id={show ? "animate4" : ""}
                >
                  <button
                    dir="rtl"
                    className="hover:text-[#929292] active:text-[#bababa] cursor-pointer w-full text-sm cairo_regular_title flex items-center"
                  >
                    <BsPersonCircle className="ml-1" /> الملف الشخصي
                  </button>

                  <button
                    dir="rtl"
                    className="hover:text-[#929292] active:text-[#bababa] cursor-pointer w-full text-sm cairo_regular_title flex items-center"
                  >
                    <BiLogOut className="ml-1" /> تسجيل الخروج
                  </button>

                  <button
                    dir="rtl"
                    className="hover:text-[#929292] active:text-[#bababa] cursor-pointer w-full text-sm cairo_regular_title flex items-center"
                  >
                    <HiUserGroup className="ml-1" /> الجروبات
                  </button>
                </div>
              )}
            </div>
          </div>
          <div dir="rtl" className=" col-span-4 z-[1000]">
            <input
              placeholder="اضغط هنا للبحث..."
              type="text"
              className={`outline-none h-full w-[65%] sm:w-[90%] focus:border-2 p-1 ${
                dark
                  ? "bg-[#242424] border-[#393939] text-[#e2e2e2]"
                  : "bg-white"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 h-full">
        {/* body */}

        {page === 0 && (
          <div
            className={`h-full w-full col-span-5 p-2 ${
              dark ? "bg-[#161616]" : "bg-[#f6f7fc]"
            } grid grid-rows-[280px_minmax(200px,_1fr)] pt-[4rem] justify-center items-center gap-4`}
          >
            <img
              src="asia.jpg"
              alt=""
              className="h-full rounded-lg"
              id="animate33"
            />
            <div className=" h-full text-center grid grid-rows-2 cairo_regular_title mt-[1rem]">
              <div className=" text-center" id="animate33">
                <p
                  className={`font-bold text-2xl ${
                    dark ? "text-[#e2e2e2]" : "text-black"
                  }`}
                >
                  اسم الجروب
                </p>
                <div className="flex justify-center text-lg mt-2 text-[#adb1b5]">
                  <p className=" border-r-2 border-[#adb1b5] pr-2 mr-2">
                    50k عضو
                  </p>
                  <p>مش عارف</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === 1 && (
          <div
            className={`overflow-y-auto h-full w-full col-span-5 p-2 pt-[4rem] flex flex-col gap-7 cairo_regular_title ${
              dark ? "bg-[#161616]" : "bg-[#f6f7fc]"
            }`}
          >
            <MainPageComments
              darker={dark}
              name="عمر زفارة"
              desc="لماذالماذا عمر جيلماذا عمر جيلماذا عمر جيلماذا عمر جيلماذا عمر جيلماذا عمر جيلماذا عمر جيلماذا عمر جي عمر جي"
              time="منذ القرن العشرين"
              role="ابن كلب"
            />
          </div>
        )}
        {page === 2 && (
          <div
            className={`h-full w-full col-span-5 p-2 pt-[4rem] overflow-y-auto ${
              dark ? "bg-[#161616]" : "bg-[#f6f7fc]"
            }`}
          >
            <MainPageSchedules
              darker={dark}
              title="تنظيف  تنظيف من عمر تنظيف من اشكال عمر
              ssssالارض من  عمر"
              details="جسم عمر رشيق وقوي ومغطى بالشعر وذلك مكنه من إيجاد طعامه بسهولة
              على الأرض وحتى في تسلقه الشجيرات لأكل الأوراق والبراعم. ويسمى
               عمر التيس او انثى المعزة"
              place="بين جبلين"
              time="2020/12/2 2:00pm"
              participants="5 مشاركين"
            />
            <MainPageSchedules
              darker={dark}
              title="2 تنظيف ssssssssssssssss تنظيف من اشكال عمر تنظيف من اشكال عمر
              ssssالارض من اشكال عمر"
              details="2جسم عمر رشيق وقوي ومغطى بالشعر وذلك مكنه من إيجاد طعامه بسهولة
              على الأرض وحتى في تسلقه الشجيرات لأكل الأوراق والبراعم. ويسمى
              ذكر عمر التيس والأنثى معزة"
              place="2بين جبلين"
              time="22020/12/2 2:00pm"
              participants="2 5 مشاركين"
            />
          </div>
        )}
        {page == 3 && (
          <div
            className={`h-full w-full col-span-5 p-2 pt-[4rem] overflow-y-auto ${
              dark ? "bg-[#161616]" : "bg-[#f6f7fc]"
            }`}
          >
            <MainPageMembers darker={dark} />
          </div>
        )}
        {page == 2 && (
          <div
            id="animate33"
            className="fixed bottom-0 left-0 my-[2rem] hidden min-[655px]:flex lg:mx-6 bg-[#39A059] active:brightness-[1.1] hover:brightness-90 p-2 ml-2 rounded-full items-center justify-center"
          >
            <BiPlus
              onClick={() => setopenschedule(true)}
              className={` text-4xl cursor-pointer text-white ${
                dark ? "" : ""
              }`}
            />
          </div>
        )}

        {page == 1 && (
          <div
            id="animate33"
            className="fixed bottom-0 left-0 my-[2rem] hidden min-[655px]:flex lg:mx-6 bg-[#39A059] active:brightness-[1.1] hover:brightness-90 p-2 ml-2 rounded-full items-center justify-center"
          >
            <BiPlus
              onClick={() => setopenpost(true)}
              className={` text-4xl cursor-pointer text-white ${
                dark ? "" : ""
              }`}
            />
          </div>
        )}
        {/* side nav */}
        <div
          dir="rtl"
          className={`h-full w-full  p-2 z-[999] origin-bottom ${
            dark
              ? "bg-[#1d1d1d] text-[#e2e2e2] border-white"
              : "bg-white border-black"
          }`}
          id="animate1"
        >
          <div className="flex flex-col mt-4 " id="animate32">
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
                <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                  <HiUserGroup />
                </p>
                <p className="mr-1 text-sm md:text-lg hidden sm:block">
                  الجروب
                </p>
              </div>

              <div className="mt-5 text-[#adb1b5]">
                <div
                  className={`flex items-center ${
                    dark
                      ? "hover:bg-[#2a2a2a] hover:text-[#e2e2e2]"
                      : "hover:bg-[#f0f0f0] hover:text-black"
                  }
                 ${
                   dark && page === 1
                     ? "border-r-2 text-[#e2e2e2] rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#2a2a2a]"
                     : ""
                 } ${
                    !dark && page === 1
                      ? "border-r-2 text-black border-black rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#f0f0f0]"
                      : ""
                  } rounded my-6 sm:my-4 cursor-pointer`}
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {
                    setpage(1);
                  }}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <RiArticleLine />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    البوستات
                  </p>
                </div>

                <div
                  className={`flex items-center ${
                    dark
                      ? "hover:bg-[#2a2a2a] hover:text-[#e2e2e2]"
                      : "hover:bg-[#f0f0f0] hover:text-black"
                  }
                 ${
                   dark && page === 2
                     ? "border-r-2 text-[#e2e2e2] rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#2a2a2a]"
                     : ""
                 } ${
                    !dark && page === 2
                      ? "border-r-2 text-black border-black rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#f0f0f0]"
                      : ""
                  } rounded my-6 sm:my-4 cursor-pointer`}
                  onClick={() => {
                    setpage(2);
                  }}
                  style={{ transition: "ease 0.2s" }}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <SlCalender />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    المواعيد
                  </p>
                </div>

                <div
                  className={`flex items-center ${
                    dark
                      ? "hover:bg-[#2a2a2a] hover:text-[#e2e2e2]"
                      : "hover:bg-[#f0f0f0] hover:text-black"
                  }
               ${
                 dark && page === 3
                   ? "border-r-2 text-[#e2e2e2] rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#2a2a2a]"
                   : ""
               } ${
                    !dark && page === 3
                      ? "border-r-2 text-black border-black rounded-br-none rounded-tr-none sm:pr-[0.5rem] pr-[2px] sm:bg-[#f0f0f0]"
                      : ""
                  } rounded my-6 sm:my-4 cursor-pointer`}
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {
                    setpage(3);
                  }}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <BsPersonCircle />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    الاعضاء
                  </p>
                </div>
                <div
                  className={`flex items-center min-[655px]:hidden ${
                    dark
                      ? "hover:bg-[#2a2a2a] hover:text-[#e2e2e2]"
                      : "hover:bg-[#f0f0f0] hover:text-black"
                  }`}
                  style={{ transition: "ease 0.2s" }}
                  onClick={() => {}}
                >
                  <p className="text-2xl sm:text-xl mx-auto sm:mx-0">
                    <BiPlus />
                  </p>
                  <p className="mr-1 text-sm md:text-lg hidden sm:block">
                    اضافة
                  </p>
                </div>
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
