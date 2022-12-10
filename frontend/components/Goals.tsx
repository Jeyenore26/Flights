import React from "react";

function Goals() {
  /*h-[13.1rem] w-[50rem] p-8*/
  return (
    <div className="translate-y-[110rem]">
      <div className="hidden md:block">
        <div
          id="line1"
          className="absolute left-0 right-0 top-[2.1rem] mx-auto border-r-2 w-1 h-[0]"
        ></div>
        <div
          id="line2"
          className="absolute left-0 right-0 mx-auto border-t-2 border-r-2 border-l-2  top-[10.8rem] w-[0]"
        ></div>
      </div>

      <p className="text-3xl text-white text-center mb-[5rem] ">اهدافنا</p>
      <div className="translate-y-[8rem]" id="goalY">
        <div className="flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0">
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl  ">
            <h1
              dir="rtl"
              className=" w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              قطع الخلف
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[15rem] break-words mt-4 ml-[0.8rem]"
              id="goaltxt1"
            >
              الاستخدام الصحيحان الوقت لحماية بيتنا من التلوث إن الصحيحان الوقت
              لحماية بيتنا من التلوث إن الاستخدام الصحيحن التلوث إن الاستخدام
            </p>
            <img
              src="https://media.tenor.com/J3IFw6SF46MAAAAC/anime-girl.gif"
              alt="s"
              className="absolute h-full rounded-2xl bg-cover opacity-0 ease duration-300 hover:opacity-100"
            />
          </div>
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl ">
            <h1
              dir="rtl"
              className=" w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              قطع الخلف
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[15rem] break-words mt-4 ml-[0.8rem]"
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
          <div className="text-white flex flex-col drop-shadow-xl bg-[#14151d] rounded-2xl">
            <h1
              dir="rtl"
              className=" w-[15.8rem] text-lg md:text-xl p-1 md:p-2 rounded-t-xl m-2"
            >
              dont hover me
            </h1>
            <p
              dir="rtl"
              className=" text-md md:text-lg max-w-[15rem] break-words mt-4 ml-[0.8rem]"
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
}

export default Goals;
