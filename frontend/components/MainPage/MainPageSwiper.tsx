import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import React from "react";
import MainPageSwipe from "./MainPageSwipe";

function MainPageSwiper() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <MainPageSwipe
            name="افريقيا"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواتها ..."
            img="./africa.jpg"
            id="africa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSwipe
            name="اسيا"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./asia.jpg"
            id="asia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSwipe
            name="اوروبا"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./europe.jpg"
            id="eu"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSwipe
            name=" استراليا"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./australia.jpg"
            id="aus"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MainPageSwipe
            name=" امريكا الشمالية"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./north-a.jpg"
            id="na"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSwipe
            name=" امريكا الجنوبية"
            desc=" Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./south-a.jpg"
            id="sa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSwipe
            name="انتركاتيكا"
            desc="Nov 18, 2017 — تعد أفريقيا قارة شابة ناهضة ومهمة بكل المعايير السياسية والاقتصادية وحتى العسكرية إذا ما ألقينا نظرة إلى موقعها الجغرافي المميز وثرواته"
            img="./antarcatica.jpg"
            id="ant"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainPageSwiper;
