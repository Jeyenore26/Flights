import React from "react";

function Slides(props: any) {
  return (
    <div className="w-full flex">
      <img
        className="2xl:h-[700px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[300px] xs:h-[300px] w-full opacity-[0.8] "
        src="https://images.hdqwalls.com/wallpapers/eiffel-tower-paris-4k-wide.jpg"
        alt="paris"
      ></img>
      <div className="overflow-hidden absolute bg-black/[0.2] m-4 top-[10%] md:top-[10%] right-[50px] md:right-[80px] p-5 w-[60%] xl:w-[23%] sm:w-[50%] h-[65%] ">
        <div
          className="break-all flex flex-col space-y-1 md:space-y-4"
          dir="rtl"
        >
          <h1 className="cairo_semibold_title text-white text-xl md:text-2xl font-bold">
            {props.name}
          </h1>
          <h3 className="cairo_semibold_title text-white text-sm md:text-xl">
            {props.sub}
          </h3>
          <p className="cairo_semibold_title text-white text-sm md:text-lg">
            ما هذا يا ذها ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها
            ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها ارض الجمال
            ارض خضراء الظيبطه الورا ظيبطه
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slides;
