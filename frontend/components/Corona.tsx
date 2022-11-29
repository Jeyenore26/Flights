import Link from "next/link";
import React from "react";

const Corona = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[150px] w-full object-cover brightness-50	"
        src="https://images.hdqwalls.com/wallpapers/city-4k-buildings-skyscraper-view-l3.jpg"
      ></img>
      <div className="absolute space-y-4">
        <h1 className="text-2xl text-white">اخبار كورونا</h1>
        <Link
          href="/"
          className="text-xl text-white bg-[#609ED8] flex justify-center rounded-2xl p-1 hover:brightness-[.90] active:brightness-[.70]"
        >
          اضغط هنا
        </Link>
      </div>
    </div>
  );
};

export default Corona;
