import React from "react";
import { useEffect } from "react";

const HomeExplanation = () => {
  useEffect(() => {
    let promblem1 = document.getElementById("midTo");
    let promblem2 = document.getElementById("problem2");
    let promblem3 = document.getElementById("problem3");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value);
      if (value > 300) {
        promblem1!.style.opacity = String(1);
      }
      if (value > 600) {
        promblem2!.style.opacity = String(1);
      }
      if (value > 1000) {
        promblem3!.style.opacity = String(1);
      }
    });
  });
  return (
    <div id="midTo" className=" mt-[1rem] ">
      <div className="flex md:flex-row-reverse flex-col-reverse xxs:mr-[0rem]  lg:mr-[10rem] text-left">
        <div className="text-left md:mr-[7.4rem] sm:mr-0 lg:mr-0">
          <img
            src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/9453205e492449dc8a8bc4da86362dcd.jpg"
            alt=""
            className=" shadow-lg shadow-black md:mt-[-40px] lg:mr-0 mx-auto  sm:w-[30rem] sm:h-[20rem] lg:w-[50rem] lg:h-[30rem]"
          />
        </div>
        <div dir="rtl" className="my-4 cairo_bold_title text-3xl mr-[1rem]">
          <p className="float-right">الارض في خطر</p>
          <p className="w-16  mt-[5rem] border-t-[3px] border-[#81c132] "></p>
          <p
            dir="rtl"
            className="cairo_regular_title text-right float-right mt-4 text-[18px] text-1 md:ml-[8rem]  xl:ml-[5rem]"
          >
            {" "}
            ولقد برزت هذه المشكلة نتيجة للتقدم التقني، والصناعي، والحضاري لذا
            علينا ان نساعد في عمليات تنظيف الارض من الفمامة و الغازات
          </p>
        </div>
      </div>

      {/* problem 2*/}
      <section
        id="problem2"
        className="flex lg:mt-0 2xl:mx-32 lg:mr-32 xxs:mt-20 lg:flex-row justify-center md:flex-col flex-col"
      >
        <div></div>
        <div
          dir="rtl"
          className="bg-[#F2F2F2] z-50 md:mx-[7rem] sm:mx-32 lg:ml-[50px] lg:mr-[-120px] mb-16 px-2 rounded-sm "
        >
          <span className=" mt-2 flex">
            <p className=" text-2xl cairo_bold_title pb-2">
              جمال الطبيعة الخلاب
            </p>
          </span>
          <p className="w-16 mt-[1rem] border-t-[3px] border-[#81c132] "></p>

          <span className="flex">
            <p className=" text-[18px] cairo_regular_title mt-7 overflow-hidden ">
              الطبيعة هي هذا الكون العجيب المدهش الساحر الذي يشمل البحار،
              والأشجار، والجبال وغيرها،
            </p>
          </span>
        </div>
        <img
          src="./greenimg2.png"
          alt=""
          className="shadow-lg shadow-black z-10 mx-auto rounded-md xxs:mt-[-30px] xxs:w-[50rem] sm:w-[30rem] lg:w-[30rem] xxs:h-[24rem] 2xl:w-[35rem]  2xl:h-[25rem] md:w-max sm:mt-[-80px] "
        />

        <div
          dir="rtl"
          className="z-50 md:mx-[14rem] sm:mx-20 lg:mx-10 mb-10 rounded-sm "
        >
          <span className=" flex">
            <p className="text-[18px] cairo_regular_title mt-10 md:mt-20 mr-2 overflow-hidden ">
              لكي نساعد الارض يجب علينا ان ندرك اننا نحن سبب حدوث هذه المشاكل
              الكبيرة في الارض و اننا من يجب عليه انا يصلحها
            </p>
          </span>
        </div>
      </section>
      {/*Problem3 */}
      <div
        id="problem3"
        dir="rtl"
        className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xxs:flex-col justify-between 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-10"
      >
        <div className=" my-12 mr-2">
          <span className="cairo_bold_title text-2xl">
            هناك 9 طرق لنساعد الارض
          </span>

          <div className="flex">
            <p className="w-16 border-t-[3px] border-[#81c132] pb-3 mt-5"></p>
          </div>
          <span className="cairo_regular_title text-xl flex 2xl:ml-[10rem] xl:ml-[10rem] lg:ml-[10rem] md:ml-[10rem]">
            انا لا اقول انه انا احد ابطال الطبيعة ولا الرجل الصحيح وكن انا اريد
            مساعدة بيتي و عالمي من التدهور القريب انا لا اقول انه انا احد ابطال
            الطبيعة ولا الرجل الصحيح وكن انا اريد مساعدة بيتي و عالمي من التدهور
            القريب{" "}
          </span>
        </div>
        <div className="flex md:mr-[1rem] lg:mr-0">
          <div>
            <img
              src="./earth3.png"
              alt=""
              className=" z-20 w-full mt-[2rem] 2xl:mt-[7rem] xl:mt-14 lg:mt-40 absolute xxs:mx-auto sm:mr-[-40px]  xl:mr-[15rem] lg:mr-[5rem] md:mr-[10rem] 2xl:w-[30rem] xl:w-[24rem] lg:h-[16rem] lg:w-[18rem] md:w-[30rem] opacity-90  2xl:h-[27rem] "
            />
          </div>
          <div className="bg-[#E1E1E1]  xs:py-[5rem] xl:py-[11rem] lg:px-[10rem] lg:py-[9rem] 2xl:px-[17rem] 2xl:py-[13rem] mt-[13rem]  z-0"></div>
          <div>
            <img
              src="./earth4.png"
              alt=""
              className=" rounded-lg absolute 2xl:w-[30rem] xl:w-[25rem] md:mt-[10rem] xxs:mx-auto sm:mr-[-40px] xl:h-[15rem] lg:w-[20rem] lg:mt-[27rem] lg:h-[15rem] lg:mr-[-25rem]  2xl:mr-[-40rem] xl:mr-[-40rem]  mt-[24rem]  md:w-[30rem] z-10 opacity-90 2xl:h-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplanation;
