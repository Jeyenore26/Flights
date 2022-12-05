import React from "react";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

function problems() {
  return (
    <div id="problems" className="translate-y-[41rem]">
      <div
        dir="rtl"
        className=" flex items-center flex-col sm:flex-row 2xl:w-[80%] lg:w-[80%] xl:w-[80%] md:w-[100%] xs:w-[100%]  mx-auto border-2 border-white border-solid "
      >
        <img
          src="https://media.discordapp.net/attachments/1046740126467887104/1047945297818558524/cleanwater.png"
          alt="problem1"
          className="2xl:w-[25%] sm:w-[50%] 2xl:ml-4"
        />
        <p className="text-white font-light text-sm md:text-lg break-words">
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
        className="flex items-center flex-col sm:flex-row 2xl:w-[80%] lg:w-[80%] xl:w-[80%] md:w-[100%] xs:w-[100%]  mx-auto border-2  border-solid border-white"
      >
        <img
          src="https://media.discordapp.net/attachments/1046740126467887104/1047945297818558524/cleanwater.png"
          alt="problem1"
          className="2xl:w-[25%] sm:w-[50%] 2xl:mr-4"
        />
        <p className="text-white font-light text-sm md:text-lg break-words">
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
