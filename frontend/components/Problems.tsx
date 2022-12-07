import React from "react";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

function problems() {
  return (
    <div id="problems" className="translate-y-[81rem] mx-[1rem] flex-col justify-center">
      <div
        dir="rtl"
        className=" flex items-center flex-col sm:flex-row w-[80%] mx-auto sm:w-[90%] border-white bg-white rounded-2xl mb-[2rem] "
      >
        <img
          src="https://media.discordapp.net/attachments/1046740126467887104/1047945297818558524/cleanwater.png"
          alt="problem1"
          className="2xl:w-[25%] sm:w-[20rem] w-[100%] 2xl:ml-4 rounded-2xl  md:rounded-l-none rounded-b-none sm:rounded-b-2xl"
        />
        <p className="text-black font-medium text-sm xl:text-xl break-words mr-2 sm:ml-2 md:mr-6 my-7">
          من المخاطر التي تهددها ، هو حماية للحياة بكل اشكالها ، حياة الانسان
          والحيوان والنبات. وهذا واجب على كل المجتمعات والدول ومنظمة الامم
          المتحدة ، والطباطس التعبانه نفسيا ميتينك لضمان حياة هانئة طويلة لكل
          الاحي من المخاطر التي تهددها ، هو حماية للحياة بكل اشكالها ، حياة
          الانسان والحيوان والنبات. وهذا واجب على كل المجتمعات والدول ومنظمة
          الامم المتحدة ، والطباطس التعبانه نفسيا ميتينك لضمان حياة هانئة طويلة
          لكل الاحياء.اء.
        </p>
      </div>
      <div
        dir="ltr"
        className="flex items-center flex-col sm:flex-row w-[80%] mx-auto sm:w-[90%] border-white bg-white rounded-2xl"
      >
        <img
          src="https://media.discordapp.net/attachments/1046740126467887104/1047945297818558524/cleanwater.png"
          alt="problem1"
          className="2xl:w-[25%] sm:w-[20rem] w-[100%] 2xl:mr-4 rounded-2xl  md:rounded-r-none rounded-b-none sm:rounded-b-2xl"
        />
        <p dir ="rtl" className="text-black font-medium text-sm xl:text-xl break-words mr-2 md:mr-6 my-7">
          من المخاطر التي تهددها ، هو حماية للحياة بكل اشكالها ، حياة الانسان
          والحيوان والنبات. وهذا واجب على كل المجتمعات والدول ومنظمة الامم
          المتحدة ، والطباطس التعبانه نفسيا ميتينك لضمان حياة هانئة طويلة لكل
          الاحي من المخاطر التي تهددها ، هو حماية للحياة بكل اشكالها ، حياة
          الانسان والحيوان والنبات. وهذا واجب على كل المجتمعات والدول ومنظمة
          الامم المتحدة ، والطباطس التعبانه نفسيا ميتينك لضمان حياة هانئة طويلة
          لكل الاحياء.اء.
        </p>
      </div>
      <Link
        to="intrstd"
        smooth={true}
        className="flex justify-center my-4 mb-[40rem]"
      >
        <BsArrowDownCircle className="text-white text-3xl animate-pulse hover:animate-none hover:brightness-90 active:brightness-75 cursor-pointer" />
      </Link>
    </div>
  );
}

export default problems;
