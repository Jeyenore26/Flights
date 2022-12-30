import React, { useEffect, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";
import BInputOutline from "../components/Inputs/BInputOutline";
import NavBar from "../components/CheckGroup/NavBar";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}
function load(url, token) {
  return new Promise(async function (resolve, reject) {
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    // resolve
    resolve(res); // see note below!
  });
}
export default function profile() {
  let [data, setdata] = useState<string[]>([]);
  const [disabled, setdisabled] = useState(true);
  if (typeof window !== "undefined" && (!data || data.length == 0)) {
    const token = localStorage.getItem("token") as string;
    load(`http://localhost:5000/user/profile`, token).then((res: any) => {
      console.log(res.data);
      setdata(res.data);

      localStorage.removeItem("groupName");
    });
    console.log(data);
  }
  const [openpost, setopenpost] = useState(false);
  const [name, setname] = useState(data.name);
  const [number, setnumber] = useState(data.phone);
  const [email, setemail] = useState(data.email);

  return (
    <>
      <NavBar />

      <div className="bg-white hidden justify-center md:h-screen xxs:h-screen w-full xxs:flex items-center">
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
                <div className="flex xxs:flex-col md:flex-row justify-center mt-5 md:mb-0 xxs:mb-4">
                  {disabled && (
                    <span
                      className="flex justify-center cursor-pointer xxs:w-80 md:w-32 hover:text-slate-300 hover:border-slate-400 active:border-slate-300 px-4 py-1 active:text-slate-400 border-[1px] border-black rounded"
                      onClick={() => setdisabled(false)}
                    >
                      <AiOutlineEdit className="mt-1" />
                      <button
                        dir="rtl"
                        className="cairo_regular_title cursor-pointer "
                      >
                        تعديل
                      </button>
                    </span>
                  )}
                  {!disabled && (
                    <span
                      className="flex justify-center cursor-pointer xxs:w-80 md:w-32 hover:text-slate-300 hover:border-slate-400 active:border-slate-300 px-4 py-1 active:text-slate-400 border-[1px] border-black rounded"
                      onClick={() => setdisabled(false)}
                    >
                      <AiOutlineEdit className="mt-1" />
                      <button
                        dir="rtl"
                        className="cairo_regular_title cursor-pointer "
                      >
                        حفظ
                      </button>
                    </span>
                  )}
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
                  value={data.name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  label="الاسم"
                  type={"text"}
                  disabled={disabled}
                  iclassName={
                    disabled
                      ? "border-none mt-1"
                      : "border-dotted border-2 border-blue-600 mt-1"
                  }
                />
                <BInputOutline
                  value={data.phone}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                  label="الرقم"
                  type={"text"}
                  disabled={disabled}
                  lclassName="mr-4"
                  iclassName={
                    disabled
                      ? "border-none mr-4 mt-1"
                      : "border-dotted border-2 border-blue-600 mr-4 mt-1"
                  }
                />
              </span>
              <span className="flex justify-center mr-[-11px]">
                <BInputOutline
                  value={data.memberOf}
                  label="اسم المجموعة"
                  type={"text"}
                  disabled
                />
                <BInputOutline
                  value={data.role}
                  iclassName="w-[200%]"
                  label="الرتبة"
                  type={"text"}
                  disabled
                />
              </span>
              <span className="flex md:justify-start xxs:justify-center xxs:ml-12 md:ml-0">
                <BInputOutline
                  value={data.email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  label="بريد التوصل"
                  type={"text"}
                  disabled={disabled}
                  iclassName={
                    disabled
                      ? "border-none w-[200%] xxs:mr-[-3rem] md:mr-0 mt-1"
                      : "border-dotted border-2 border-blue-600 w-[200%] xxs:mr-[-3rem] md:mr-0 mt-1"
                  }
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

  return {
    props: {
      gay,
    },
  };
}
