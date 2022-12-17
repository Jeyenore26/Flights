import React, { useEffect, useState } from "react";
import {
  HiOutlineMagnifyingGlassCircle,
  HiOutlineMagnifyingGlassMinus,
  HiUserGroup,
} from "react-icons/hi2";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { GiPineTree, GiBlackFlag } from "react-icons/gi";
export default function BottomPick() {
  const [on, seton] = useState(false);

  useEffect(() => {
    let wotah = document.getElementById("wotah");
    let folag = document.getElementById("folag");
    let twee = document.getElementById("twee");
    let trashxd = document.getElementById("trashxd");

    if (on) {
      wotah!.style.opacity = String(1);
    }
  });

  return (
    <div className=" fixed bottom-0 right-0 p-3 m-4  ">
      {!on && (
        <div
          className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 group rounded-full p-4 "
          onClick={() => {
            seton(!on);
          }}
        >
          <span className="text-white group-hover:text-white/70 group-active:text-white/90">
            <HiUserGroup className="w-8 h-8" />
          </span>
        </div>
      )}
      {on && (
        <>
          <div
            id="wotah"
            className="opacity-0 my-5 m-3 border-[2px] border-full rounded-full p-1 hover:text-black/50 hover:border-black/40 active:text-black/90 active:border-black/80 border-gray-700"
          >
            <IoWaterOutline className="w-7 h-7" />
          </div>
          <div
            id="folag"
            className="opacity-0 my-5 m-3 flex justify-center border-[2px] border-full rounded-full p-1 hover:text-black/20 hover:border-black/40 active:text-black/90 active:border-black/80 border-gray-700"
          >
            <GiBlackFlag className="w-7 h-7 " />
          </div>
          <div
            id="twee"
            className="opacity-0 my-5 m-3 border-[2px] border-full rounded-full p-1 hover:text-black/20 hover:border-black/40 active:text-black/90 active:border-black/80 border-gray-700"
          >
            <GiPineTree className="w-7 h-7 " />
          </div>
          <div
            id="trashxd"
            className="opacity-0 my-5 m-3 border-[2px] border-full rounded-full p-1 hover:text-black/20 hover:border-black/40 active:text-black/90 active:border-black/80 border-gray-700"
          >
            <CgTrash className="w-7 h-7 " />
          </div>
          {/* <div
            id="where is this??"
            className="my-5 m-3 border-[2px] 2xl:hidden xl:hidden lg:hidden md:hidden border-full rounded-full p-1 hover:text-black/50 hover:border-black/40 active:text-black/90 active:border-black/80 border-gray-700"
          >
            <HiOutlineMagnifyingGlassCircle className="w-7 h-7" />
          </div> */}
          <div
            className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 group rounded-full p-4 "
            onClick={() => {
              seton(!on);
            }}
          >
            <span className="text-white group-hover:text-white/70 group-active:text-white/90">
              <MdOutlineKeyboardArrowDown className="w-8 h-8" />
            </span>
          </div>
        </>
      )}
    </div>
  );
}
