import React from "react";
import { useEffect } from "react";

const HomeExplanation = () => {
  useEffect(() => {
    let goaltxt1 = document.getElementById("goaltxt1");
    let goaltxt2 = document.getElementById("goaltxt2");
    let goaltxt3 = document.getElementById("goaltxt3");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (value > 1800) {
        setTimeout(() => {
          goaltxt1!.style.opacity = String(1);
          goaltxt2!.style.opacity = String(1);
          goaltxt3!.style.opacity = String(1);
        }, 500);

        goaltxt1!.style.height = String(12 + "rem");
        goaltxt2!.style.height = String(12 + "rem");
        goaltxt3!.style.height = String(12 + "rem");
      }
    });
  });
  return (
    <div id="midTo" className="container1 my-[15rem] ">
      <div className="flex flex-col-reverse items-center md:items-stretch md:flex-row">
        <img
          src="https://images.unsplash.com/photo-1416512149338-1723408867e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVhZCUyMGZvcmVzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className=" shadow-lg shadow-black mx-auto mb-10 md:mb-0 md:mx-0 imagea"
        />
        <div
          dir="rtl"
          className="flex items-center md:items-start flex-col bg-[#efefef] p-3 md:w-full w-[19rem]"
        >
          <h1 className="mb-6 text-xl xl:text-4xl">ما خطب الارض؟</h1>
          <div className="w-12 mb-10 border-t-2 border-black"></div>

          <p className=" text-[15px] xl:text-lg 2xl:text-xl m-2 md:ml-8 text-center md:text-start">
            أصبحت الحياة المدنية تقطع دورة الحياة أو تعيقها في الطبيعة، وهو ما
            يعرف بصناعة الإنسان للمواد السامة وإلقائها في دورة الحياة man-made
            toxic agents التي تلوث البيئة وتسممها، ويرتد أثرها الضار عليه، ولأن
            بعض الأنظمة البيئية تتكون من دورة حياة معقده ومتفرعة، ما يساعد على
            حفظ النظام البيئي في حالة كسر الدورة أو تغيير مسارها، وتنشأ علاقة
            جديدة لتحافظ عليها.
          </p>
        </div>
      </div>

      <img
        src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/9453205e492449dc8a8bc4da86362dcd.jpg"
        alt=""
        className=" shadow-lg shadow-black imagea md:mt-[-40px] mx-auto"
      />
      <img
        src="https://www.iisd.org/sites/default/files/styles/og_image/public/2020-12/plastic-in-ocean.jpg?itok=LrjpIznP"
        alt=""
        className=" md:float-left shadow-lg shadow-black imagea mt-[20rem] md:mt-[-50px] md:relative mx-auto md:mx-0"
      />
      <p
        dir="rtl"
        className="bg-[#efefef] w-[30%] xl:w-[25rem] mx-auto md:mx-0 md:float-right md:mb-0 mb-[20rem] mt-[-37rem] md:mt-[-15rem] p-8 text-[15px] xl:text-xl"
      >
        ولقد برزت هذه المشكلة نتيجة للتقدم التقني، والصناعي، والحضاري للإنسان،
        ويشمل تلوث البيئة كلاً من البر والبحر وطبقة الهواء التي فوقها.
        <div className="w-12 border-t-2 border-black mt-5"></div>
      </p>
      <div
        dir="rtl"
        className=" mt-[4rem] flex flex-col bg-[#efefef] p-3 w-[35rem] md:w-[40rem] float-right "
      >
        <p className=" text-[15px] xl:text-lg 2xl:text-xl ml-8 md:text-start text-center">
          وتتوالى التقارير والإحصائيات التي تؤشر بشكل واضح عن آثار التلوث في
          الإنسان الذي هو المسؤول عن إحداث هذا التلوث. وبالرغم من أن تلك الأرقام
          تصفعنا دون أن نتعظ، فإننا نستمر في إحداث التلوث، وكل من كان يعتقد أن
          تصدير نفاياته بعيداً آلاف الأميال يكون قد تخلص منها فيكشتف أنه كمن
          يلقي نفايات بيته تحت وسادته.
        </p>
        <div className="w-12 mt-5 border-t-2 border-black mx-auto md:mx-0"></div>
      </div>
      <div className="mt-[45rem] md:mt-[28rem]">
        <p className="text-2xl text-center">احا؟ وماذا نفعل؟</p>
        <div className="w-12 border-t-2 border-black mt-5 mx-auto"></div>
        <p className="text-center mt-5">
          !للأسف يا عزيزي المشاهد منقدرش نعمل حاجه لوحدنا.. بس بقوة الصداقة نقدر
          منعملش حاجه بردو
        </p>
        {/* gaols */}
        <div className="flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0 space-x-0 md:space-x-4 mt-[5rem]">
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl w-[15rem] lg:w-[17rem]">
            <h1
              dir="rtl"
              className=" w-[13.8rem] lg:w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              قطع الخلف
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[13rem] lg:max-w-[15rem] break-words mt-4 ml-[0.8rem]"
              id="goaltxt1"
            >
              الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
              لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
            </p>
            <img
              src="https://media.tenor.com/J3IFw6SF46MAAAAC/anime-girl.gif"
              alt="s"
              className=" absolute h-full rounded-2xl bg-cover opacity-0 ease duration-300 hover:opacity-100"
            />
          </div>
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl w-[15rem] lg:w-[17rem]">
            <h1
              dir="rtl"
              className=" w-[13.8rem] lg:w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              قطع الخلف
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[13rem] lg:max-w-[15rem] break-words mt-4 ml-[0.8rem]"
              id="goaltxt2"
            >
              الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
              لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
            </p>
            <img
              src="https://media2.giphy.com/media/4NCTxxmZuCW4w15yFC/200w.gif?cid=6c09b952hvv5kzpmt36psi76nenlosvw6yhi9bp0op52v7kt&rid=200w.gif&ct=g"
              alt="s"
              className="absolute h-full rounded-2xl bg-cover opacity-0 ease duration-300 hover:opacity-100"
            />
          </div>
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl w-[15rem] lg:w-[17rem]">
            <h1
              dir="rtl"
              className=" w-[13.8rem] lg:w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              dont hover me
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[13rem] lg:max-w-[15rem] break-words mt-4 ml-[0.8rem]"
              id="goaltxt3"
            >
              الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
              لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJsli3S58jAkA9unQa2x0v6mB25BKMPHihHd3fQ--ZF3zYmCEyjmfL0fAt0LfgR_IScQ&usqp=CAU"
              alt="s"
              className="absolute h-full rounded-2xl bg-cover opacity-0 ease duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplanation;
