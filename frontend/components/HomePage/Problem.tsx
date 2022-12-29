import React from "react";
import { useEffect } from "react";

const HomeExplanation = () => {
  useEffect(() => {
    let promblem1 = document.getElementById("problem1");
    let promblem2 = document.getElementById("problem2");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value);
      if (value > 100) {
        promblem1!.style.opacity = String(0.002 * value);
      }
    });
  });
  return (
    <div id="midTo" className=" mt-[1rem] ">
      <div
        id="problem1"
        className=" flex  2xl:flex-row-reverse  xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse xs:flex-col=reverse xxs:flex-col-reverse 2xl:mr-[10rem] xl:mr-[10rem] lg:mr-[10rem] md:mr-[10rem] text-left"
      >
        <div className="text-left">
          <img
            src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/9453205e492449dc8a8bc4da86362dcd.jpg"
            alt=""
            className=" shadow-lg shadow-black md:mt-[-40px]  mx-auto lg:mr-0 md:mr-[-100px]  sm:w-[80rem] lg:w-[50rem] h-[30rem]"
          />
        </div>
        <div
          dir="rtl"
          className="xxs:my-4 my-4  cairo_bold_title text-3xl lg:mr-[1rem] md:mr-[-90px]"
        >
          <p className="float-right">كيف نساعد الارض؟</p>
          <p className="w-16  mt-[5rem] border-t-[3px] border-[#81c132] "></p>
          <p
            dir="rtl"
            className="cairo_regular_title text-right float-right mt-4 text-[18px] text-1  md:ml-[5rem]"
          >
            {" "}
            ولقد برزت هذه المشكلة نتيجة للتقدم التقني، والصناعي، والحضاري
            للإنسان ولقد برزت هذه المشكلة نتيجة للتقدم التقني، والصناعي،
            والحضاري للإنسان،،
          </p>
        </div>
      </div>

      {/* problem 2 */}
      <section
        id="problem2"
        className="flex 2xl:flex-row xl:flex-row lg:flex-row justify-center md:flex-col sm:flex-col xxs:flex-col"
      >
        <div></div>
        <div
          dir="rtl"
          className="bg-[#F2F2F2] z-50 2xl:mr-[-120px] xl:mr-[-120px] lg:mr-[-120px]  mb-10 px-2 rounded-sm "
        >
          <span className="absolute mt-2   flex">
            <p className=" text-2xl cairo_bold_title">جمال الطبيعة الخلاب</p>
          </span>
          <p className="w-16  mt-[5rem] border-t-[3px] border-[#81c132] "></p>

          <span className=" flex">
            <p className=" text-[18px] cairo_regular_title mt-10 overflow-hidden">
              الخلابالخلابالخلابالخلابالخلابالخلاب جمال الطبيعة الخلاب
              الخلابالخلابالخلابالخلابالخلابالخلاب جمال الطبيعة الخلاب
            </p>
          </span>
        </div>
        <img
          src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/9453205e492449dc8a8bc4da86362dcd.jpg"
          alt=""
          className=" shadow-lg shadow-black mx-auto imagea z-10  rounded-md xxs:mt-[-30px] xxs:w-[50rem] xxs:h-[24rem] 2xl:w-[35rem]  2xl:h-[25rem] md:w-max sm:mt-[-80px] "
        />

        <div dir="rtl" className="z-50   mb-10  rounded-sm ">
          <span className=" flex">
            <p className=" text-[22px] cairo_regular_title mt-20 mr-20 overflow-hidden ">
              الخلابالخلابالخلابالخلابالخلابالخلاب جمال الطبيعة الخلاب
              الخلابالخلابالخلابالخلابالخلابالخلاب جمال الطبيعة الخلاب
            </p>
          </span>
        </div>
      </section>
      {/*Problem 3  */}
      <div
        dir="rtl"
        className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xxs:flex-col justify-between  2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-10"
      >
        <div className="py-[10rem] mt-32">
          <span className="cairo_bold_title text-2xl">
            هناك 9 طرق كثيرة لنساعد الارض
          </span>
          <div className="flex">
            <p className="w-16  mt-[3rem] border-t-[3px] border-[#81c132] "></p>
          </div>
          <span className="cairo_regular_title text-xl flex 2xl:ml-[10rem] xl:ml-[10rem] lg:ml-[10rem] md:ml-[10rem]">
            انا لا اقول انه انا احد ابطال الطبيعة ولا الرجل الصحيح وكن انا اريد
            مساعدة بيتي و عالمي من التدهور القريب انا لا اقول انه انا احد ابطال
            الطبيعة ولا الرجل الصحيح وكن انا اريد مساعدة بيتي و عالمي من التدهور
            القريب{" "}
          </span>
        </div>
        <div className="flex ">
          <div>
            <img
              src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/9453205e492449dc8a8bc4da86362dcd.jpg"
              alt=""
              className="  imagea z-20   2xl:mt-[7rem] xl:mt-14 lg:mt-20 absolute xxs:mx-auto sm:mr-[-40px] 2xl:mr-[15rem] xl:mr-[15rem] lg:mr-[8rem] md:mr-[10rem] 2xl:w-[30rem] xl:w-[24rem] lg:w-[18rem] md:w-[30rem] opacity-90  2xl:h-[27rem] "
            />
          </div>
          <div className="bg-[#E1E1E1] xl:px-[15rem] xl:py-[11rem] lg:px-[12rem] lg:py-[9rem] 2xl:px-[17rem] 2xl:py-[13rem] mt-[13rem]  z-0"></div>
          <div>
            <img
              src="https://www.iisd.org/sites/default/files/styles/og_image/public/2020-12/plastic-in-ocean.jpg?itok=LrjpIznP"
              alt=""
              className="  imagea  absolute 2xl:w-[30rem] xl:w-[25rem] md:mt-[10rem] xxs:mx-auto sm:mr-[-40px]  xl:h-[15rem] lg:w-[25rem] lg:mt-[30rem] lg:h-[15rem] lg:mr-[-30rem]  2xl:mr-[-40rem] xl:mr-[-40rem]  mt-[24rem]  md:w-[30rem] z-10 opacity-90 2xl:h-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplanation;
