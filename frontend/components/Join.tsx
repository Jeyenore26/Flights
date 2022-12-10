import React from "react";
import Link from "next/link";

function Join() {
  return (
    <div className="pb-[10rem] translate-y-[125rem]">
      <div className="flex items-center justify-center mb-[5rem] mt-[10rem] ">
        <p className="text-2xl text-white text-center">icon</p>
        <h1 className="text-2xl text-white text-center">تريد المساعدة؟</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around space-y-10 sm:space-y-0 ">
        <div
          id="join1"
          className="text-white flex flex-col items-center space-y-3 bg-white rounded-2xl w-0 overflow-hidden"
        >
          <h1 className=" text-black text-lg sm:text-xl m-2">icon</h1>
          <p
            dir="rtl"
            className="text-black text-sm sm:text-lg max-w-[15rem] break-all m-1"
          >
            الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
          </p>
          <Link href="/">
            <p className="my-2 hover:brightness-75 active:brightness-50 text-black bg-white m-1 border-2 border-black rounded-lg px-1 py-1">
              انضم للعائلة
            </p>
          </Link>
        </div>
        <div
          id="join2"
          className="text-white flex flex-col items-center space-y-3 bg-white rounded-2xl w-0 overflow-hidden"
        >
          <h1 className=" text-black text-lg sm:text-xl m-2">icon</h1>
          <p
            dir="rtl"
            className="text-black text-sm sm:text-lg max-w-[15rem] break-all m-1"
          >
            الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
          </p>
          <Link href="/">
            <p className="my-2 hover:brightness-75 active:brightness-50 text-black bg-white m-1 border-2 border-black rounded-lg px-1 py-1">
              انضم للعائلة
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
