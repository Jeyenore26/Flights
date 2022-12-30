import React, { useEffect, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";
import BInputOutline from "../components/Inputs/BInputOutline";
import NavBar from "../components/CheckGroup/NavBar";
import { AiOutlineEdit } from "react-icons/ai";
import ProfileModal from "../components/Profile/ProfileModal";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
export default function profile() {
  const [openpost, setopenpost] = useState(false);
  return (
    <>
      <NavBar />
      {openpost && <ProfileModal setIsOpen={setopenpost} />}

      <div className="bg-white hidden  justify-center md:h-screen xxs:h-full w-full xxs:flex items-center">
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
                  <span className="flex justify-center cursor-pointer xxs:w-80 md:w-32 hover:text-slate-300 px-4 py-1 active:text-slate-400">
                    <AiOutlineEdit className="mt-1" />
                    <button
                      dir="rtl"
                      className="cairo_regular_title cursor-pointer "
                      onClick={() => setopenpost(true)}
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
            <div className=" md:mr-10 md:ml-0 mt-5 xxs:ml-[-5.5rem]">
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
              <span className="flex md:justify-start xxs:justify-center xxs:ml-12 md:ml-0">
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

export function getServerSideProps(context) {
  const gay = "";
  const token = getToken();
  console.log(token);
  axios({
    method: "GET",
    url: `http://localhost:5000/user/profile`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => console.log(res));
  return {
    props: {
      gay,
    },
  };
}
