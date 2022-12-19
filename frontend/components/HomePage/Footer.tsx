import React from "react";

function Footer() {
  return (
    <div className=" w-full p-[2rem] text-white mt-[10rem] bg-[#14151d] flex flex-col-reverse md:flex-row items-center justify-between">
      <div dir="rtl">
        <h1 className="text-lg">تواصل معنا : </h1>
        <p className="font-bold">iiakku1812@gmail.com</p>
      </div>
      <div>
        <p className="text-lg mb-8">&copy; 2023 جميع الحقوق محفوظة</p>
      </div>
      <div className="flex items-center">
        <img src="./LOGO3.png" className="w-[8rem] h-[6rem] mb-8"></img>
      </div>
    </div>
  );
}

export default Footer;
