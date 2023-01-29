import React, { useState } from "react";
import GroupInput from "../Inputs/GroupInput";
import { MdGroupAdd } from "react-icons/md";
import Router from "next/router";
import { gql, useMutation } from "@apollo/client";
import { createGroupMutation } from "../../lib/mutationGql/CreateGql";
import ImageInput from "../Inputs/ImageInput";
import CreateProfile from "./CreateProfile";
function getToken() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token;
}

const photos = [
  "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",

  "https://th.bing.com/th/id/R.1ffbff14c120b1a9f5e399aafb274c60?rik=W8wv6qitunQd1g&pid=ImgRaw&r=0",

  "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
  "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",

  "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
  "https://th.bing.com/th/id/OIP.28fWEEaVP8gJEszigjqGOwHaHT?pid=ImgDet&w=887&h=874&rs=1",
];

export default function () {
  const [groupname, setgroupname] = useState("");
  const [groupnumber, setgroupnumber] = useState("");
  const [groupprovide, setgroupprovide] = useState("");
  /* page two*/

  const [groupplace, setgroupplace] = useState("");
  const [paypal, setpaypal] = useState("");

  const photoLink = Math.floor(Math.random() * photos.length);

  /* page three*/
  const createInput = {
    name: groupname,
    description: groupprovide,
    phone: groupnumber,
    paypalName: paypal,
    workplace: groupplace,
  };
  const token = getToken();
  const [groupInput, { data, loading, error }] = useMutation(
    createGroupMutation,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      variables: {
        createGroupInput: createInput,
      },
    }
  );

  console.log(error);
  console.log(data);
  if (error) console.log(error);
  if (data) console.log(data);
  function pageone() {
    event?.preventDefault();
    setpage(2);
  }
  function pagetwo() {
    setpage(page + 1);
  }
  //groupInput();

  function pagethree() {
    event?.preventDefault();
    setpage(page + 1);
  }
  const [page, setpage] = useState(1);
  const [disable, setdis] = useState(false);
  const [open, setopen] = useState(false);
  const pagecolor = { color: "blue" };
  return (
    <>
      <div
        className="flex items-center min-h-screen bg-gray-50 "
        id="animate32"
      >
        <div className="flex-1 h-full mt-[-1rem] sm:mt-[1rem] w-[80%] md:max-w-5xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 xxs:h-10 mt-0 object-cover md:h-auto md:w-1/2">
              <img
                className="object-cover h-0 md:block w-full md:h-full brightness-90"
                src="./group1.jpg"
                alt="img"
              />
            </div>
            <div
              dir="rtl"
              className="flex xxs:mt-[-20px] md:mt-8 items-center justify-center p-6 sm:p-12 md:w-2/3"
            >
              <div className="w-full">
                <span className="flex">
                  <h3 className="mb-4 text-xl cairo_semibold_title font-bold text-blue-600">
                    انشاء مجموعة
                  </h3>
                  <MdGroupAdd className="w-6 h-6 mx-2 mt-1 text-blue-600" />
                </span>
                <div className="flex flex-wrap mx-auto">
                  <a
                    className={
                      page === 1
                        ? "pageon  sm:px-6 sm:w-auto flex xxs:justify-center md:justify-start cairo_regular_title"
                        : "pageoff sm:px-6 sm:w-auto xxs:justify-center hover:text-gray-900 cairo_regular_title"
                    }
                  >
                    الخطوة الاولى
                  </a>
                  <a
                    className={
                      page === 2
                        ? "pageon sm:px-6 sm:w-auto sm:justify-start cairo_regular_title"
                        : "pageoff sm:px-6 sm:w-auto sm:justify-start hover:text-gray-900 cairo_regular_title"
                    }
                  >
                    الخطوة الثانية
                  </a>
                </div>
                {/* First Page*/}
                <form
                  onSubmit={pageone}
                  style={{ width: page === 1 ? "100%" : "30%" }}
                  className="PageContent"
                >
                  <div
                    style={{ display: page === 1 ? "block" : "none" }}
                    className="PageContent "
                  >
                    <GroupInput
                      onChange={(e) => setgroupname(e.target.value)}
                      label="اسم المجموعة"
                      required
                      type={"text"}
                      placeholder="اسم المجموعة"
                      lclassName="text-black focus:text-black"
                    />
                  </div>

                  <div
                    style={{ display: page === 1 ? "block" : "none" }}
                    className="PageContent"
                  >
                    <GroupInput
                      onChange={(e) => setgroupnumber(e.target.value)}
                      label="رقم المجموعة"
                      required
                      type={"number"}
                      max={11}
                      placeholder="رقم المجموعة"
                      lclassName="text-black"
                    />
                  </div>
                  <div
                    style={{ display: page === 1 ? "block" : "none" }}
                    className="PageContent"
                  >
                    <div dir="rtl" className="space-y-5 flex-grow">
                      <div className="flex flex-col">
                        <label
                          className={`font-semibold cairo_regular_title mt-4 text-lg text-black`}
                        >
                          اختر احد المجالات
                        </label>
                      </div>
                    </div>
                    <input
                      onChange={(e) => setgroupprovide(e.target.value)}
                      list="works"
                      name="work"
                      placeholder="اختر احد المجالات"
                      className={` bg-transparent	border-2 rounded-md	text-right w-[100%] h-12 focus:outline-none  ease-in-out text-green text-black/80 focus:text-black focus:border-blue-600  focus:border-primary focus:border-dashed py-1 px-2  transition`}
                    ></input>
                    <datalist id="works">
                      <option value="فريق تطهير المجاري المائية">
                        فريق تطهير المجاري المائية
                      </option>
                      <option value="فريق قياس نسبة تلوث المصانع">
                        فريق قياس نسبة تلوث المصانع
                      </option>
                      <option value="فريق متطوعين للحمياية المدنية">
                        فريق متطوعين للحمياية المدنية
                      </option>
                      <option value="فريق زراعة اشجار">فريق زراعة اشجار</option>
                    </datalist>
                  </div>
                  <div className="flex justify-start">
                    <button
                      onSubmit={() => {
                        setpage(page + 1);
                      }}
                      type="submit"
                      style={{ display: page === 1 ? "block" : "none" }}
                      className={
                        disable
                          ? "px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title"
                          : "px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] border border-transparent rounded-lg focus:outline-none cairo_regular_title"
                      }
                    >
                      الخطوة القادمة
                    </button>
                  </div>
                </form>
                {/* Second Page*/}

                {page === 2 && (
                  <>
                    <form
                      onSubmit={(e) => {
                        event?.preventDefault();
                        groupInput();
                        Router.push("/mainpage");
                      }}
                      style={{ width: page === 2 ? "100%" : "35%" }}
                      className="PageContent"
                    >
                      <div className="PageContent">
                        <GroupInput
                          onChange={(e) => setgroupplace(e.target.value)}
                          label="موقع العمل"
                          required
                          type={"text"}
                          min={8}
                          max={10}
                          placeholder="مثال: مصر -شمال سيناء"
                          lclassName="text-black focus:text-black"
                        />
                      </div>
                      <div className="PageContent">
                        <GroupInput
                          onChange={(e) => setpaypal(e.target.value)}
                          label="اسم حساب البايبال للتبرعات"
                          required
                          type={"text"}
                          placeholder=" اسم حساب البايبال للتبرعات"
                          lclassName="text-black"
                        />
                      </div>

                      <div className="flex justify-start">
                        <button
                          type="submit"
                          style={{ display: page === 2 ? "block" : "none" }}
                          className={
                            disable
                              ? "px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title"
                              : "px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] border border-transparent rounded-lg focus:outline-none cairo_regular_title"
                          }
                        >
                          انتهيا
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
