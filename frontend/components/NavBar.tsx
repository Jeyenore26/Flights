import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="border-b-2 py-6 flex justify-between">
      <div className=" ml-3 md:ml-[5rem] flex space-x-4">
        <h1 className="text-lg font-medium">logo</h1>
        <h1 className="text-lg font-medium">Book n'Fly!</h1>
      </div>
      <ul className=" space-x-5 lg:space-x-10 flex mr-3 md:mr-[5rem] font-light text-md md:text-lg">
        <Link href="/" className="space-x-1 flex">
          <p>icon1</p>
          <li className="navBtn hidden sm:block cairo_semibold_title"> الرحلات </li>
        </Link>
        <Link href="/" className="space-x-1 flex">
          <p>icon2</p>
          <li className="navBtn hidden sm:block cairo_semibold_title"> الاشعارات </li>
        </Link>
        <Link href="/" className="flex space-x-1">
          <p>icon3</p>
          <li className="navBtn hidden sm:block cairo_semibold_title"> تسجيل الدخول </li>
        </Link>
      </ul>
    </div>
  );
}
