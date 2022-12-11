import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Join() {
  return (
    <div className="translate-y-[130rem] flex justify-center items-center flex-col pb-[10rem]">
      <Link
        to="changePage"
        offset={-100}
        smooth={true}
        className="flex justify-center"
        duration={2000}
      >
        <h1 className="text-6xl boba">تريد الانضمام؟</h1>
      </Link>
    </div>
  );
}

export default Join;
