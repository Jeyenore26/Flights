import React from "react";
import Link from "next/link";

function Join() {
  return (
    <div className="pb-[10rem] translate-y-[45rem]">
      <div className="flex items-center justify-center mb-[5rem] mt-[10rem]">
        <p className="text-2xl text-white text-center">icon</p>
        <h1 className="text-2xl text-white text-center">تريد المساعدة؟</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around space-y-10 sm:space-y-0">
        <div className="text-white flex flex-col items-center space-y-3 space-x-3 bg-white p-2 ">
          <h1 className=" text-black text-lg sm:text-xl">icon</h1>
          <p
            dir="rtl"
            className="text-black text-sm sm:text-lg max-w-[15rem] break-words"
          >
            بطاطasasdasdasaasaس صوشسهخاهخشسايهخساشعهشسايعهاسشعايهسابع
          </p>
          <Link href="/">
            <p className="text-black">بوتون</p>
          </Link>
        </div>
        <div className="text-white flex flex-col items-center space-y-3 space-x-3 bg-white p-2 ">
          <h1 className=" text-black text-lg sm:text-xl">icon</h1>
          <p
            dir="rtl"
            className="text-black text-sm sm:text-lg max-w-[15rem] break-words"
          >
            بطاطasasdasdasaasaس صوشسهخاهخشسايهخساشعهشسايعهاسشعايهسابع
          </p>
          <Link href="/">
            <p className="text-black">بوتون</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
