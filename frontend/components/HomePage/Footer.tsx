import Link from "next/link";
import React from "react";
import { Link as Lonk } from "react-scroll";

function Footer() {
  return (
    <>
      <div className=" w-full p-[2rem] text-white mt-[10rem] bg-[#14151d] flex flex-col-reverse md:flex-row items-center justify-center">
        <img src="LOGO3.png" className="w-[6rem] h-[5rem] mr-[-20px]" />
      </div>
      <div className=" w-full p-[2rem] text-white bg-[#14151d] flex flex-col-reverse md:flex-row items-center justify-center">
        <Lonk
          to="helpEarth"
          offset={-100}
          smooth={true}
          className=" mt-[-3rem] "
          duration={2000}
        >
          <p className="py-3 mx-2  cairo_regular_title hover:brightness-90 active:brightness-75 cursor-pointer">
            حلول لمساعدة الارض
          </p>
        </Lonk>
        <Link href={"/register"}>
          <p className="py-3 mt-[-3rem] mx-2  cairo_regular_title hover:brightness-90 active:brightness-75 cursor-pointer">
            انشاء حساب
          </p>
        </Link>
        <Link href={"/signin"}>
          <p className="py-3 mt-[-3rem] mx-2  cairo_regular_title hover:brightness-90 active:brightness-75 cursor-pointer">
            تسجيل الدخول
          </p>
        </Link>
        <Lonk
          to="midTo"
          offset={-100}
          smooth={true}
          className=" mt-[-3rem] mr-8"
          duration={2000}
        >
          <p className="py-3 mx-2  cairo_regular_title hover:brightness-90 active:brightness-75 cursor-pointer">
            الارض في خطر
          </p>
        </Lonk>
      </div>
      <div className="flex bg-[#14151d] justify-center">
        <p className="w-[40rem]  border-t-[3px] border-[#fff] "></p>
      </div>
      <div
        dir="rtl"
        className=" w-full p-[2rem] text-white bg-[#14151d] flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <div dir="rtl" className="flex mb-8">
          <h1 className="text-lg">تواصل معنا : </h1>
          <p className="font-bold mr-1 mt-1">iiakku1812@gmail.com</p>
        </div>
        <div>
          <p className="text-lg mb-8">&copy; 2023 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
