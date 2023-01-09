import React from "react";

import Link from "next/link";

const GroupCalls = (props: any) => {
  return (
    <div>
      <div
        dir="rtl"
        className="flex flex-col sm:flex-row items-center w-full"
        id="animate32"
      >
        <img
          src={props.img}
          alt=""
          className="w-full md:w-[18rem] h-[20rem] mb-8 md:mb-0 md:h-[16rem] mr-2 rounded bg-cover"
        />
        <div className="flex flex-col w-[100%] space-y-8 mr-5">
          <p className="text-2xl"> {props.name}</p>
          <div className="flex justify-between">
            <p className="text-lg text-black/70">{props.desc}</p>
            <div className="">
              <Link href={`/CheckGroup?=${props.name}`}>
                <button
                  onClick={() => {
                    localStorage.setItem("groupname", props.name);
                    console.log(props.name, typeof props.name);
                  }}
                  className="bg-lime-600 confirmbtn p-2 px-4 rounded ml-5 mt-3 text-white hover:bg-opacity-80 active:hover:bg-opacity-60"
                >
                  القي نظرة
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-sm">{props.members} </p>
              <div className="border-l-2 border-[black] mx-2 py-2 "></div>
              <p className="text-sm">{props.place}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCalls;
