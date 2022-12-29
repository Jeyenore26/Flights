import React from "react";
import { IoIosPeople } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";

import Member from "./Member";

function MainPageMembers(props: any) {
  return (
    <div className="grid grid-cols-1 h-full overflow-y-auto gap-2 cairo_regular_title">
      <div id="animate31">
        <div className="flex flex-col items-center justify-center mt-10">
          <div
            className={`flex items-center ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            <RiVipCrownFill className="text-2xl mr-2" />

            <p className="text-2xl">قائد المجموعة</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`rounded-lg flex flex-col md:items-end w-[99%] sm:w-[80%] md:w-[40rem] my-10 p-2 ${
                props.darker
                  ? "bg-[#242424] text-[#e2e2e2]"
                  : "bg-[#fff] border-2"
              }`}
            >
              <Member
                name="التنين المجنح"
                img="https://i.pinimg.com/736x/eb/e0/7f/ebe07f5cd329966effbbce521e99eb2b--garden-sculptures-garden-statues.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div
            className={`flex items-center ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            <MdAdminPanelSettings className="text-3xl mr-2" />

            <p className="text-2xl"> المشرفون</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`rounded-lg flex flex-col md:items-end w-[99%] sm:w-[80%] md:w-[40rem] my-10 p-2 ${
                props.darker
                  ? "bg-[#242424] text-[#e2e2e2]"
                  : "bg-[#fff] border-2"
              }`}
            >
              <div className="flex flex-col items-center md:items-end w-full gap-9">
                <Member
                  name=" امير الظلام"
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDRvSoVI9Mv60gEpZCyufhpyHgBtf41CIHA&usqp=CAU"
                />
                <Member
                  name="بحجابي ملكة"
                  img="https://static.lahamag.com/attachments/79/1478334511.580670.original.jpg"
                />
                <Member
                  name=" الطائر المجروح"
                  img="https://www.vetogate.com/UploadCache/libfiles/8/5/600x338o/245.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* start */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div
            className={`flex items-center ${
              props.darker ? "text-[#e2e2e2]" : ""
            }`}
          >
            <IoIosPeople className="text-3xl mr-2" />

            <p className="text-2xl"> الاعضاء</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`rounded-lg flex flex-col md:items-end w-[99%] sm:w-[80%] md:w-[40rem] my-10 p-2 ${
                props.darker
                  ? "bg-[#242424] text-[#e2e2e2]"
                  : "bg-[#fff] border-2"
              }`}
            >
              <div className="grid w-full gap-y-[3rem] gap-x-4 justify-items-center h-[40rem] overflow-auto">
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
                <Member name="محمد سامح الدياسطي" img="africa.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default MainPageMembers;
