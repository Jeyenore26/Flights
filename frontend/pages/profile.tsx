import React from "react";
import Image from "next/image";
import Head from "next/head";
import Eyes from "../components/Sign&Register/Eyes";
import Link from "next/link";
import Input from "../components/Inputs/Input";
import GroupInput from "../components/Inputs/GroupInput";
import BInputOutline from "../components/Inputs/BInputOutline";
import NavBar from "../components/CheckGroup/NavBar";
import { AiOutlineEdit } from "react-icons/ai";

export default function profile() {
  return (
    <>
      <NavBar />

      <div className="bg-white justify-center h-full w-full flex items-center">
        <Head>
          <title className="cairo_black_title">حسابك الشخصي</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <section dir="rtl" className="bg-white py-full" id="animate33">
          <div className="flex md:flex-row xxs:flex-col justify-items-center">
            <div className="profile flex justify-center">
              <div className="flex flex-col-reverse items-center">
                <div className="flex xxs:flex-col md:flex-row  justify-center mt-5 md:mb-0 xxs:mb-4">
                <button className="rounded-md w-80  cairo_regular_title shadow-lg lg:py-1 xxs:py-2 cursor-pointer md:px-4 hover:bg-[#2b7543] active:bg-[#1a4929] text-sm  bg-[#39A059] text-white hover:text-white/60 active:text-white/40">
                    غير الصورة
                  </button>
                  <span className="flex justify-center cursor-pointer w-80 hover:text-slate-300 px-4 py-1 active:text-slate-400">
                    <AiOutlineEdit className="mt-1" />
                    <button
                      dir="rtl"
                      className="cairo_regular_title cursor-pointer "
                    >
                      تعديل
                    </button>
                  </span>
                 
                </div>
                <img
                  src="./avater2.png"
                  className="w-80 h-80 bg-cover rounded-md"
                />
              </div>
              
            </div>
            <div className=" md:mr-10 mt-5 xxs:ml-[-5.5rem]">
              <span className="flex justify-center">
                <BInputOutline
                  value={"محمد اسامة"}
                  label="الاسم"
                  type={"text"}
                  disabled
                />
                <BInputOutline
                  value={"01126894555"}
                  label="الرقم"
                  type={"text"}
                  disabled
                />
              </span>
              <span className="flex justify-center">
                <BInputOutline
                  value={"لا يوجد"}
                  label="اسم المجموعة"
                  type={"text"}
                  disabled
                />
                <BInputOutline
                  value={"لا يوجد"}
                  iclassName="w-[200%]"
                  label="الرتبة"
                  type={"text"}
                  disabled
                />
              </span>
              <span className="flex justify-center xxs:ml-12 md:ml-0">
                <BInputOutline
                  value={"amakku123141@gmail.com"}
                  iclassName="w-[200%] xxs:mr-[-3rem] md:mr-0"
                  label="بريد التوصل"
                  type={"text"}
                  disabled
                />
              </span>
            </div>

          
          </div>
        </section>
      </div>
    </>
  );
}
