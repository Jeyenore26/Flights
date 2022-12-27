import React from "react";

const GroupCalls = (props: any) => {
  return (
    <div>
      <div dir="rtl" className="flex items-center">
        <img src={props.img} alt="" className="w-[15rem] h-[15rem] rounded" />
        <div className="flex flex-col w-[80%] md:w-[60%] space-y-5 mr-5">
          <p className="text-2xl"> {props.name}</p>
          <p className="text-sm">{props.desc}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="">{props.members} </p>
              <div className="border-l-2 border-[black] mx-2 py-3 "></div>
              <p className="">{props.place}</p>
            </div>
            <div className="">
              <button className="bg-green-500 p-1">اضغط ع *يز عمر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCalls;
