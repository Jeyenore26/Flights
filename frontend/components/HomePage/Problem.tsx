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
            className=" shadow-lg shadow-black md:mt-[-40px] lg:mr-0 mx-auto  sm:w-[30rem] sm:h-[20rem] lg:w-[55rem] lg:h-[25rem]"
          />
        </div>
        <div dir="rtl" className="my-4 cairo_bold_title text-3xl mr-[1rem]">
          <p className="float-right"> التلوث </p>
          <p className="w-16  mt-[5rem] border-t-[3px] border-[#81c132] "></p>
          <p
            dir="rtl"
            className="cairo_regular_title text-right float-right mt-4 text-[18px] text-1 md:ml-[8rem]  xl:ml-[5rem]"
          >
            منذ الثورة الصناعية والتطور التكنولوجي، يتزايد التلوث البيئي بشكل
            مضطرد، ما يؤثر سلباً على الكائنات الحيّة ومصادر الحياة. الأسباب
            معروفة وكذلك الحلول، ولكن الدول الصناعية الكبرى تماطل وتؤجل تطبيق
            الحلول لأنها تقلص من أرباحها.
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
            <p className=" text-2xl cairo_bold_title pb-2">الاحتباس الحراري</p>
          </span>
          <p className="w-16 mt-[1rem] border-t-[3px] border-[#81c132] "></p>

          <span className="flex">
            <p className=" text-[18px] cairo_regular_title mt-7 overflow-hidden ">
              الاحتباس الحراري عملية طبيعية تساعد في الحفاظ على درجات حرارة
              مناسبة للحياة وبدونها يمكن أن تتحول الأرض إلى كوكبٍ متجمد وغير
              صالح للسكن، لكن زيادة تركيز الغازات الدفيئة الناتجة عن النشاط
              البشري قد ضاعفت من تأثير الاحتباس الحراري الطبيعي بشكل كبير مما
              تسبب في الاحتباس الحراري الضار.
            </p>
          </span>
        </div>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/504/431/580/desert-storm-wheather-weather-changes-wallpaper-preview.jpg"
          alt=""
          className="shadow-lg brightness-90 shadow-black z-10 mx-auto rounded-md xxs:mt-[-30px] xxs:w-[50rem] sm:w-[30rem] lg:w-[30rem] xxs:h-[24rem] 2xl:w-[35rem]  2xl:h-[25rem] md:w-max sm:mt-[-80px] "
        />

        <div
          dir="rtl"
          className="z-50 md:mx-[14rem] sm:mx-20 lg:mx-10 mb-10 rounded-sm "
        >
          <span className=" flex">
            <p className="text-[18px] cairo_regular_title mt-10 md:mt-20 mx-2 overflow-hidden lg:break-all">
              يقدر أن هذه الظاهرة قد سببت ارتفاع في درجة الحرارة بمقدار 0.02 °س
              منذ عام 1900.
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
          <span className="cairo_bold_title text-2xl">حان الوقت للتحرك. </span>

          <div className="flex">
            <p className="w-16 border-t-[3px] border-[#81c132] pb-3 mt-5"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplanation;
