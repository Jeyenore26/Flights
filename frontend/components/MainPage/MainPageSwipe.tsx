import React from "react";

function MainPageSwipe(props: any) {
  return (
    <div id={props.id} className="h-screen">
      <img
        src={props.img}
        alt=""
        className="w-full h-[100vh] bg-cover brightness-[.60] z-[-100] relative"
      />
      <div className="container1 ">
        <div className="flex flex-col items-end justify-end space-y-5 mt-[-25rem] mr-[35px] lg:mr-[90px]">
          <p className="text-4xl md:text-6xl text-white font-bold">
            {props.name}
          </p>
          <div
            dir="rtl"
            className="w-[15rem] md:w-[30rem] text-white font-sm text-sm md:text-lg"
          >
            {props.desc}
          </div>
        </div>
        <div className="md:flex md:items-center md:space-x-4 ml-[1rem] ">
          <div className="bg-[#cfcfcf56] relative z-[1000] w-[13rem] h-[20rem] mt-[-11rem] xl:mt-[-14rem] hidden lg:block">
            asdasdsa{" "}
          </div>
          <div className="bg-[#aeaeae56] relative z-[1000] w-[13rem] md:h-[20rem] h-[14rem] mt-[2rem] xs:mt-[-11rem] xl:mt-[-14rem] mx-auto xs:mx-7">
            asdasdsa{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageSwipe;
