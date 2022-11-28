import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-[400px] w-[400px]"
      >
        <SwiperSlide className="slides">Slide 1</SwiperSlide>
        <SwiperSlide className="slides">Slide 2</SwiperSlide>
        <SwiperSlide className="slides">Slide 3</SwiperSlide>
        <SwiperSlide className="slides">Slide 4</SwiperSlide>
        <SwiperSlide className="slides">Slide 5</SwiperSlide>
        <SwiperSlide className="slides">Slide 6</SwiperSlide>
        <SwiperSlide className="slides">Slide 7</SwiperSlide>
        <SwiperSlide className="slides">Slide 8</SwiperSlide>
        <SwiperSlide className="slides">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
