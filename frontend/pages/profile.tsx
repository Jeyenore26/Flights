import React, { useEffect, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";
import BInputOutline from "../components/Inputs/BInputOutline";
import NavBar from "../components/CheckGroup/NavBar";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import ProfileModal from "../components/Profile/ProfileModal";
import { useMutation } from "@apollo/client";
import { updateProfileMutation } from "../lib/mutationGql/AuthGql";
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
  //cuz typescript sucks
  //@ts-ignore
  let Iname = data.name;
  //@ts-ignore
  let Iemail = data.email;
  //@ts-ignore
  //@ts-ignore

  let Inumber = data.phone;
  //@ts-ignore

  let IgroupName = data.memberOf;
  //@ts-ignore

  let Irole = data.role;

  //@ts-ignore
  const [name, setname] = useState("");
  //@ts-ignore

  const [number, setnumber] = useState("");
  //@ts-ignore

  const [email, setemail] = useState("");
  //@ts-ignore

  const [password, setpassword] = useState("");
  const [open, setopen] = useState(false);
  const updateInput = {
    name: name,
    email: email,
    number: number,
    password: password,
  };
  const token = getToken();
  console.log(email, name, password, number);
  const [groupInput, { data: updateData, loading, error }] = useMutation(
    updateProfileMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        updateProfileInput: {
          name: name,
          email: email,
          password: password,
          phone: number,
        },
      },
    }
  );
  console.log(data);
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
                  <span className="flex justify-center cursor-pointer ml-5 text-white xxs:w-80 md:w-32 hover:text-white/80 hover:border-gray-400 active:border-gray-300 px-4 py-1 active:text-white/60 border-[1px] border-white bg-gray-500 rounded">
                    <AiOutlineEdit className="mt-1" />
                    <button
                      dir="rtl"
                      className="cairo_regular_title cursor-pointer "
                      onClick={() => {
                        setopen(true);
                      }}
                    >
                      غير الصورة
                    </button>
                    {open && <ProfileModal setIsOpen={setopen} />}
                  </span>
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
                      className="flex justify-center cursor-pointer text-white xxs:w-80 md:w-32 hover:text-white/80 hover:border-green-400 active:border-green-300 px-4 py-1 active:text-white/60 border-[1px] border-white bg-green-500 rounded"
                      onClick={() => groupInput()}
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
                  placeholder={Iname}
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
                  placeholder={Inumber}
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
              <span className="flex md:justify-start xxs:justify-center xxs:ml-12 md:ml-0">
                <BInputOutline
                  placeholder={Iemail}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  label="بريد التوصل"
                  type={"text"}
                  disabled={disabled}
                  iclassName={
                    disabled
                      ? "border-none ml-3 mt-1"
                      : "border-dotted border-2 border-blue-600 ml-3 mt-1"
                  }
                />
                <BInputOutline
                  placeholder={"كلمة السر"}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  label="كلمة السر"
                  type={"text"}
                  disabled={disabled}
                  iclassName={
                    disabled
                      ? "border-none  mt-1"
                      : "border-dotted border-2 border-blue-600  mt-1"
                  }
                />
              </span>
              <span className="flex justify-center mr-[-11px]">
                <BInputOutline
                  placeholder={IgroupName}
                  label="اسم المجموعة"
                  iclassName="ml-2 mr-3"
                  lclassName="mr-3"
                  type={"text"}
                  disabled
                />
                <BInputOutline
                  placeholder={Irole}
                  iclassName="w-[200%]"
                  label="الرتبة"
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

  return {
    props: {
      gay,
    },
  };
}
