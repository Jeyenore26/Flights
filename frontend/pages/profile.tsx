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
import BACKENDURL from "../lib/rest";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log(token);
  return token;
}

function setToken(token) {
  console.log(token);
  localStorage.removeItem("token");
  localStorage.setItem("token", token);
}

function load(url, token) {
  console.log(url);
  return new Promise(async function (resolve, reject) {
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    // resolve
    resolve(res);

    console.log(res);
  });
}
export default function profile() {
  let [data, setdata] = useState<string[]>([]);
  const [disabled, setdisabled] = useState(true);
  if (typeof window !== "undefined" && (!data || data.length == 0)) {
    const token = localStorage.getItem("token") as string;
    load(`${BACKENDURL}/user/profile`, token).then((res: any) => {
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
  let img = data.photoLink;

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
  if (updateData?.updateProfile.token) {
    setToken(updateData?.updateProfile.token);
  }
  return (
    <>
      <NavBar />

      <div className="bg-white hidden justify-center md:h-screen xxs:h-full w-full xxs:flex items-center">
        <Head>
          <title className="cairo_black_title">حسابك الشخصي</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <section
          dir="rtl"
          className="bg-white py-full overflow-hidden"
          id="animate33"
        >
          <div className="flex md:flex-row xxs:flex-col justify-items-center">
            <div className="profile flex justify-center">
              <div className="flex flex-col-reverse items-center">
                <div className="flex flex-col my-10 md:flex-row justify-center mt-5 md:mb-0 xxs:mb-4 xxs:mr-5">
                  <span
                    onClick={() => {
                      setopen(true);
                    }}
                    className="flex justify-center cursor-pointer ml-5 text-white xxs:w-80 md:w-32 hover:text-white/80 hover:border-gray-400 active:border-gray-300 px-4 py-1 active:text-white/60 border-[1px] border-white bg-gray-500 rounded"
                  >
                    <AiOutlineEdit className="mt-1" />
                    <button
                      dir="rtl"
                      className="cairo_regular_title cursor-pointer "
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
                      onClick={() => {
                        groupInput();

                        window.location.reload();
                      }}
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
                <img src={img} className="w-80 h-80 bg-cover rounded-md" />
              </div>
            </div>

            <section className="flex justify-center md:mx-0 mx-[12rem]">
              <div className=" md:mr-10 md:ml-0 mt-5 ">
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
                    iclassName={
                      disabled
                        ? "border-none mt-1"
                        : "border-dotted border-2 border-blue-600 mt-1"
                    }
                  />
                </span>
                <span className="flex md:justify-start xxs:justify-center ">
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
                        ? "border-none mt-1"
                        : "border-dotted border-2 border-blue-600 mt-1"
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
                        ? "border-none mt-1"
                        : "border-dotted border-2 border-blue-600 mt-1"
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
            </section>
          </div>
        </section>
        {!disabled && (
          <>
            <div
              id="animate12"
              className="fixed bottom-0 py-2 px-3 mb-2 rounded-full bg-gray-200 flex justify-center text-red-700 cairo_semibold_title"
            >
              ليتم حفظ التغيرات ضع كلمة السر
            </div>
          </>
        )}
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
