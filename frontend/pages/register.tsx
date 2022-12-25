import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Eyes from "../components/Sign&Register/Eyes";
import Link from "next/link";
import Input from "../components/Inputs/Input";
import { gql, useMutation } from "@apollo/client";

const registerMutation = gql`
  mutation Register($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      token
    }
  }
`;

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
    localStorage.removeItem("token");
    localStorage.setItem("token", data.register.token);
  }
  return (
    <div className="w-full h-screen">
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-y-hidden">
        <div className="w-screen h-full fixed z-[-1]"></div>
        <img
          src="./greenhills.png"
          className="w-screen h-full fixed z-[-1] brightness-75 cover"
        />
        <div className="py-4 flex mt-1 items-center justify-between 2xl:mx-[4rem] md:mx-[2rem] sm:mx-[2rem] xs:mx-[2rem] xxs:mx-[2rem]">
          <div>
            <Link href={"/signin"}>
              <button className="text-white border-[1px] border-dashed border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-black/20 active:text-white/100 active:bg-black/40 rounded-xl">
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
          className="flex  justify-center  2xl:mx-[12rem] md:mx-[2rem]  sm:mx-[1rem] xs:mx-[1rem] xxs:mx-[1rem] h-fill"
        >
          <div className=" py-4 2xl:px-[2%] md:px-[2%] sm:px-[2%] xs:px-[10%] xxs:px-[5%] overflow-x-auto  bg-black/30 rounded-xl">
            <div className="flex justify-center ">
              <div className=" lg:block xxs:hidden z-10">
                <Eyes />
              </div>
            </div>

            <div dir="rtl" className="mt-14 flex justify-center">
              <h1 className="text-white cairo_semibold_title text-2xl">
                انشاء حساب
              </h1>
            </div>
            <Input
              onChange={(e) => setname(e.target.value)}
              type={"text"}
              required
              lclassName="flex  xs:justify-start mx-1 xxs:justify-center"
              label="الاسم "
              iclassName=" 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[25rem] lg:mx-4 "
            />
            <Input
              onChange={(e) => setemail(e.target.value)}
              type={"email"}
              required
              lclassName="flex xs:justify-start xxs:justify-center"
              label="الايميل"
              iclassName="2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[25rem] lg:mx-4 "
            />

           <div className="md:flex flex-row-reverse">
           <Input
              onChange={(e) => setpassword(e.target.value)}
              type={"password"}
              required
              lclassName="flex  xs:justify-start mr-1 xxs:justify-center"
              label="كلمة السر"
              iclassName=" 2xl:w-[15rem] md:w-[15rem] sm:w-[15rem] xs:w-[12.5rem] xxs:w-[12.5rem] mr-4 ml-1"
            />
            <Input
              onChange={(e) => setconfirmpass(e.target.value)}
              type={"password"}
              required
              lclassName="flex  xs:justify-start xxs:justify-center"
              label="تاكيد كلمة السر"
              iclassName=" 2xl:w-[15rem] md:w-[15rem] sm:w-[15rem] xs:w-[12.5rem] xxs:w-[12.5rem] ml-3 mr-1"
            />
           </div>

            <div className="flex justify-center my-3">
              <button
                value={"submit"}
                className="text-black cairo_semibold_title 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem] text-lg bg-green-400 py-2 hover:text-black hover:bg-green-500 active:text-black/100 active:bg-green-600 rounded-xl"
              >
                نورتنا
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
