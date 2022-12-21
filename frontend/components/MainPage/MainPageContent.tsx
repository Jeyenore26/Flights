import React from "react";

function MainPageContent() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="relative w-full bg-white">
        <div className="grid grid-cols-6">
          <div className=" p-1">
            <img
              src="africa.jpg"
              alt=""
              className="h-12 w-12 rounded-[40px] ml-2"
            />
          </div>
          <div dir="rtl" className=" col-span-4">
            <input
              placeholder="اضغط هنا للبحث..."
              type="text"
              className="outline-none h-full w-full focus:border-2 p-1"
            />
          </div>
          <div className=" p-1 bg-[#14ff7e]">
            {/* <p className=" text-2xl text-black font-bold text-end p-1">
              ساعد الارض
            </p> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 h-full">
        <div className=" h-full w-full col-span-5 p-2 bg-[#f6f7fc]"></div>
        <div dir="rtl" className=" h-full w-full p-2 border-l-2 bg-white">
          <div className="flex flex-col mt-4">
            <img
              src="africa.jpg"
              alt=""
              className="md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-[40px] mx-auto"
            />
            <div className="text-center text-[12px] sm:text-sm md:text-lg mt-3 cairo_regular_title">
              <p>مرحبا بك,</p>
              <p className="font-bold">محمد سامح الدياسطي.</p>
            </div>
            <div className="mt-[5rem] mr-5">
              <p className="font-bold text-xl mb-5">الجروب</p>
              <div className="mt-5 space-y-2 text-[#c6c4cb]">
                <p className="">البوستات</p>
                <p className="">المواعيد</p>
                <p className="">الشات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageContent;

/* <div className="my-14  flex items-center" dir="rtl">
        <img
          src="asia.jpg"
          alt=""
          className="h-20 w-20 rounded drop-shadow-xl	"
        />
        <div className="flex flex-col mr-6">
          <p className="font-bold text-2xl">اسم جروبك</p>
          <div className="flex mt-2 font-sm text-lg items-center">
            <p className="text-[#cacbcd]">نوع جروبك</p>
            <p className="mr-2 pr-2 border-r-2 text-[#cacbcd]">50k عضو</p>
          </div>
        </div>
      </div> */
