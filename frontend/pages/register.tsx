import React, { useState } from "react";
import Head from "next/head";
import Eyes from "../components/Sign&Register/Eyes";
import Link from "next/link";
import Input from "../components/Inputs/Input";
import { gql, useMutation } from "@apollo/client";
import { registerMutation } from "../lib/mutationGql/AuthGql";
import Router from "next/router";

function setToken(data) {
  localStorage.removeItem("token");
  localStorage.setItem("token", data.register.token);
}

export default function registermember() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [confirmpass, setconfirmpass] = useState("");
  const [regiserInput, { data, loading, error }] = useMutation(
    registerMutation,
    {
      variables: {
        registerInput: {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmpass,
        },
      },
    }
  );
  if (error) console.log(error);
  if (loading) return "...loading";
  if (data?.register?.token) {
    setToken(data);
  }
  return (
    <div className="w-full h-full md:h-screen bg-[#214A5A] overflow-hidden md:overflow-auto">
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-y-hidden">
        <div className="py-4 flex mt-1 items-center justify-between 2xl:mx-[4rem] md:mx-[2rem] mx-0">
          <div>
            <Link href={"/signin"}>
              <button className="text-white border-[1px] border-dashed border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-white/20 active:text-white/100 active:bg-white/40 rounded-xl">
                لديك حساب؟
              </button>
            </Link>
          </div>
          <div className="flex">
            <Link href={"/homepage"} className="cursor-default">
              <div className=" flex items-center space-x-1">
                <button className="cairo_semibold_title text-white hover:text-white/50 active:text-white/20 mt-1 mr-1 text-lg">
                  ساعد الارض
                </button>
                <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
              </div>
            </Link>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            regiserInput();
          }}
          className="flex justify-center register"
        >
          <div className="z-50 p-4 w-[20rem] md:w-[30rem]  bg-transperant rounded-xl m sm:mt-10 xl:mt-1 mb-1">
            <div dir="rtl" className="  md:mt-14 flex justify-center">
              <h1 className="text-white cairo_semibold_title  text-xl md:text-2xl">
                انشاء حساب
              </h1>
            </div>
            <Input
              onChange={(e) => setname(e.target.value)}
              type={"text"}
              required
              lclassName="flex secondarytext xl:mb-0  justify-start mx-1 my-2 "
              label="الاسم "
              iclassName=" w-full  "
            />
            <Input
              onChange={(e) => setemail(e.target.value)}
              type={"email"}
              required
              lclassName="flex secondarytext xl:mb-0  justify-start mx-1 my-2 "
              label="الايميل"
              iclassName="w-full  "
            />

            <div className="md:flex flex-row-reverse">
              <Input
                onChange={(e) => setpassword(e.target.value)}
                type={"password"}
                required
                lclassName="flex secondarytext xl:mb-0  justify-start mx-1 my-2"
                label="كلمة السر"
                iclassName=" w-full md:w-[98%] "
              />
              <Input
                onChange={(e) => setconfirmpass(e.target.value)}
                type={"password"}
                required
                lclassName="flex secondarytext xl:mb-0 justify-start mx-1 my-2 "
                label="تاكيد كلمة السر"
                iclassName=" w-full md:w-[98%] "
              />
            </div>

            <div className="flex justify-center my-3">
              <button
                onClick={() => {
                  Router.push("/group");
                }}
                value={"submit"}
                className="text-white p-1 cairo_semibold_title w-full text-lg bg-green-500 mt-2 hover:text-white hover:bg-green-600 active:text-white/100 active:bg-green-700 rounded-xl"
              >
                نورتنا
              </button>
            </div>
          </div>
        </form>
        <div className="ocean wave1 z-0 h-full  bg-[#214A5A]"></div>
        <div className="ocean wave2 z-0 h-full  bg-[#214A5A]"></div>
        <div className="ocean wave3 z-0 h-full  bg-[#214A5A]"></div>
      </div>
    </div>
  );
}
