import React, { useEffect } from "react";

function Goals() {
  return (
    <section id="gaolsanimation" className="goalssection py-40">
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
                الحرص على الزراعة وزيادة المساحات الخضراء من خلال كثرة الأشجار
                والزهور والنباتات.
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
                الحرص على نظافة المكان الذي يعيش فيه الإنسان. s
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
                التخلص بكفاءةٍ من النفايات والقمامة بطريقةٍ سليمةٍ وصحية، لأنها
                تضر بصحة الإنسان وتجلب إليه الحشرات والأمراض المختلفة.
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
                إعادة تدوير المواد المختلفة مثل: الأوراق والصناديق والعلب
                الفارغة؛ لأنّها من أهمّ مصادر التلوث بالنسبة للإنسان.
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
                عدم الإسراف في استخدام الماء وترشيد استهلاكها، من خلال تجنب
                القيام ببعض السلوكيّات كغسل السيارات باستخدام الأنابيب،
                والاستحمام لساعاتٍ وغيرها من السلوكيات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
