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
  let count = 0;
  let timeInSeconds = 1000;
  function cycleArray() {
    let continent = tarray[count];
    console.log(continent);
    count++;
    if (count == tarray.length) {
      count = 0;
    }
  }

  setInterval(cycleArray, timeInSeconds);

  return (
    <>
      <div>
        {/* <MainPageTopSection
          img="./africa.jpg"
          name="افريقيا"
          desc="عبارات و كلام عن أفريقيا من اقتباسات و كلمات المشاهير و الحكماء قمنا بجمعها بعناية . تحتوي الصفحة على 369 حكمة و قول مأثور عن أفريقيا."
        /> */}
      </div>
    </>
  );
}

/* <MainNav />
        <Groups />
        <BottomPick />
        <Leaf /> */
