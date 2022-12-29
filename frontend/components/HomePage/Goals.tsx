import React, { useEffect } from "react";

function Goals() {
  useEffect(() => {
    let gaols = document.getElementById("gaolsanimation");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      if (value > 1000) {
        gaols!.style.opacity = String(0.00029 * value);
      }
    });
  });
  return (
    <section
      id="gaolsanimation"
      className="goalssection py-40 translate-y-[30rem]"
    >
      <div className="relative wsection mx-auto">
        <div className="w-[100%] griid">
          {/* Up three from left to right */}

          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3 ">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3 ">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3 ">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>

          {/* DOwn three from left to right */}
          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3 ">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3 ">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="relative text-right opacity-60 mx-2 my-2 py-16 bg-white"
          >
            <div className="flex">
              <p className="cairo_semibold_title text-[2rem] mt-[-10px] mr-3">
                غير عاداتك
              </p>
            </div>
            <div className="flex">
              <p className="flex cairo_regular_title text-lg mx-3">
                ليس لدينا جميعا رفاهية المشي في كل مكان لكن المركبات هي اكبر حل
                وسط للهواء ز هذه الانابيب الخلفية على مستوي الشارع
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
