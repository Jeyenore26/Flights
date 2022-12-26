import React from "react";

function Member(props: any) {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <p
          className={`text-sm sm:text-lg md:text-xl font-semibold mt-5 text-center md:mt-0 ${
            props.darker ? "text-[#e2e2e2]" : ""
          }`}
        >
          {props.name}
        </p>
        <img
          src={props.img}
          className="h-20 w-20 bg-slate-400 rounded-[40px] m-2 "
        ></img>
      </div>
    </div>
  );
}

export default Member;
