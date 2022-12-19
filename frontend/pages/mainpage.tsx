import React, { useEffect } from "react";
import BottomPick from "../components/MainPage/BottomPick";
import Groups from "../components/MainPage/Groups";
import Leaf from "../components/MainPage/Leaf";
import MainNav from "../components/MainPage/MainNav";
export default function mainpage() {
  let tarray = [
    { name: "1ماما", desc: "1محمد لحمه" },
    { name: "مام2ا", desc: "محمد لحم2ه" },
    { name: "مام3ا", desc: "محمد لحم3ه" },
    { name: "مام4ا", desc: "محمد لحم4ه" },
    { name: "مام5ا", desc: "محمد لحم5ه" },
    { name: "مام6ا", desc: "محمد لحم6ه" },
    { name: "مام7ا", desc: "محمد لحم7ه" },
  ];

  setInterval(function momafun(): any {
    tarray.some(({ name, desc }, index) => {
      for (let i = 0; i < 1; i + 1) {
        setTimeout(() => {
          console.log(i);
        }, 3000);
      }
    });
  }, 1000);

  return (
    <>
<<<<<<< Updated upstream
      <section className="w-[100%] h-screen bg-slate-200">
        <MainNav />
        <Groups />
        <BottomPick />
        <Leaf/>
      </section>
=======
      <div>
        {/* <MainPageTopSection
          img="./africa.jpg"
          name="افريقيا"
          desc="عبارات و كلام عن أفريقيا من اقتباسات و كلمات المشاهير و الحكماء قمنا بجمعها بعناية . تحتوي الصفحة على 369 حكمة و قول مأثور عن أفريقيا."
        /> */}
      </div>
>>>>>>> Stashed changes
    </>
  );
}

/* <MainNav />
        <Groups />
        <BottomPick />
        <Leaf /> */
