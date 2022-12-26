import React from "react";
import { TbCrown } from "react-icons/tb";

function MainPageMembers(props: any) {
  return (
    <div className="grid grid-cols-1 bg-white h-full overflow-y-auto gap-2 cairo_regular_title">
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex items-center">
            <TbCrown className="text-xl ml-2" />

            <p className="">قائد المجموعة</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`rounded-lg flex flex-col items-end origin-right w-[40%] my-10 p-2 ${
                props.darker ? "bg-[#242424] text-[#e2e2e2]" : "bg-[#fff]"
              }`}
              id="animate1"
            >
              <div className="flex items-center">
                <p className="text-xl font-semibold mb-1">التنين المجنح </p>
                <div className="h-20 w-20 bg-slate-400 rounded-[40px] m-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>المشرفون</p>
      </div>
      <div>
        <p>الاعضاء</p>
      </div>
    </div>
  );
}

export default MainPageMembers;
