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
              props.darker ? "text-gray-500" : "text-gray-500"
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
                name={props.owners.name}
                role={props.owners.role}
                img={props.owners.photoLink}
              />
            </div>
          </div>
        </div>

        {/* start */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div
            className={`flex items-center ${
              props.darker ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <IoIosPeople className="text-3xl mr-2" />

            <p className="text-2xl"> الاعضاء</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`rounded-lg flex flex-col md:items-end w-[99%] sm:w-[80%] md:w-[40rem] my-10 p-2${
                props.darker ? "bg-[#fff] text-gray-500" : "bg-[#fff] border-2"
              }`}
            >
              <div className="grid w-full gap-y-[2rem] text-gray-500 gap-x-4 justify-items-center h-[10rem] overflow-auto">
                {props.members.map((member) => {
                  {
                    return (
                      <>
                        <Member
                          name={member.name}
                          role={member.role}
                          img={member.photoLink}
                        />
                      </>
                    );
                  }
                })}
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
