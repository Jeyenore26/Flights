import React from "react";
import { GiRamProfile } from "react-icons/gi";
import Link from "next/link";

function Groups() {
  return (
    <div
      dir="rtl"
      className="mx-[8rem] border-[#2F3436] border-2 rounded-2xl my-[3.5rem] h-[80vh] z-20"
    >
      <div className="flex justify-end">
        <span className="relative -top-9 z-10">
          <img src="leaf.png" className="w-20 h-20 rotate-45" />
        </span>
      </div>
      <div className="mx-[8rem] flex items-center border-2 border-black z-20 -mt-10 pb-10">
        <GiRamProfile className="h-[12rem] w-[15rem] " />
        <div className="flex-col space-y-4 mr-2">
          <h1 className="font-bold text-3xl">زا جوووت.</h1>
          <p className="font-light text-lg">
            الماعز واحد المعز، أحد أنواع جنس الوعل، وهو من الحيوانات القوية التي
            يمكنها تحمل العيش في بيئات مختلفة، فهي تعيش في أعالي الجبال وفي
            السهول وحتى يمكنها في الواحات والصحاري. جسم الماعز رشيق وقوي ومغطى
            بالشعر وذلك مكنها من إيجاد طعامها بسهولة على الأرض وحتى في تسلقها
            الشجيرات لأكل الأوراق والبراعم.
          </p>
          <div className="flex justify-between">
            <span className="flex">
              <p className="ml-10">التايب</p>
            </span>
            <Link href="/">
              <button className="bg-[#2F3436] rounded-xl text-white cairo_blod_title px-8 py-1  justify-center">
                القي نظرة
              </button>
            </Link>
            <div>
              <img
                src="https://caupo.ee/blog/wp-content/uploads/2019/12/caupo-768x1024.jpg"
                alt="s"
                className="w-[4rem] h-[4rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
