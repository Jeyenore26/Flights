import React, { useState } from "react";
import Head from "next/head";
import Eyes from "../components/Sign&Register/Eyes";
import Link from "next/link";
import Input from "../components/Inputs/Input";
import { gql, useMutation } from "@apollo/client";
import { loginMutation } from "../lib/mutationGql/AuthGql";
import Router from "next/router";

function setToken(data) {
  localStorage.removeItem("token");
  localStorage.setItem("token", data.login.token);
}

export default function registermember() {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  console.log(email, password);
  const [loginInput, { data, loading, error }] = useMutation(loginMutation, {
    variables: {
      loginInput: {
        emailOrName: email,
        password: password,
      },
    },
  });
  if (error) console.log(error);
  if (loading) return "...loading";
  console.log(data);
  if (data?.login?.token) {
    setToken(data);
  }
  return (
    <div className="w-full h-[90vh] md:h-screen bg-[#214A5A] overflow-y-hidden overflow-hidden md:overflow-auto">
      <div className="ocean wave1 z-0 h-full  bg-[#214A5A]"></div>
      <div className="ocean wave2 z-0 h-full  bg-[#214A5A]"></div>
      <div className="ocean wave3 z-0 h-full  bg-[#214A5A]"></div>
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-y-hidden">
        <div className="py-4 flex mt-1 items-center justify-between 2xl:mx-[4rem] md:mx-[2rem] mx-0">
          <div>
            <Link href={"/register"}>
              <button className="text-white border-[1px] border-dashed border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-black/20 active:text-white/100 active:bg-black/40 rounded-xl">
                انضم لنا
              </button>
            </Link>
          </div>
          <div className="flex">
            <Link href={"/homepage"} className="cursor-default">
              <div className=" flex items-center space-x-1">
                <button className="cairo_semibold_title text-white hover:text-white/50 active:text-white/20 mt-1 text-lg mr-1">
                  ساعد الارض
                </button>
                <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
              </div>
            </Link>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault;
            loginInput();
            Router.push("/mainpage");
          }}
          className="flex justify-center 2xl:mx-[12rem] md:mx-[2rem] my-[1rem] mx-[1rem] xs:mt-10 mt-14 "
        >
          <div className="z-50 py-4 sm:px-[2%] px-[10%] overflow-x-auto bg-transparent rounded-xl">
            <div dir="rtl" className=" mt-5 md:mt-14 flex justify-center">
              <h1 className="text-white cairo_semibold_title  text-xl md:text-2xl">
                تسجيل الدخول
              </h1>
            </div>

            <Input
              onChange={(e) => setemail(e.target.value)}
              type={"text"}
              required
              lclassName="flex secondarytext xs:justify-start lg:mx-1 xxs:mx-0 "
              label="الاسم او الايميل"
              iclassName=" 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xxs:w-full"
            />

            <Input
              onChange={(e) => setpassword(e.target.value)}
              type={"password"}
              required
              lclassName="flex secondarytext xs:justify-start lg:mx-1 xxs:mx-0 "
              label="كلمة السر"
              iclassName=" 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem]  xxs:w-full"
            />

            <div className="flex secondarytext justify-center my-5">
              <button className="text-white cairo_semibold_title 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem] text-lg bg-green-500 py-2 hover:text-white hover:bg-green-600 active:text-white/100 active:bg-green-700 rounded-xl">
                اهلا بك
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
