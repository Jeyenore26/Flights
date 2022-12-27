import React from "react";
import { MdGroup } from "react-icons/md";

import Member from "../MainPage/Member";

export default function Group(props: any) {
  return (
    <div className="h-screen cairo_regular_title">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center">
          <MdGroup className="text-3xl mr-2" />

          <p className="text-2xl"> المجموعات</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="rounded-lg flex flex-col md:items-end w-[90%] my-10 p-2 bg-[#fff] border-2">
            <div>
              <img
                src="https://alwafd.news/images/thumbs/828/news/51623d659b28897f5846dd8b4b9993e3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
