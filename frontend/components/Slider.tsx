import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

export default () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 10000,
      }}
      loop={true}
    >
      <SwiperSlide className="slides">
        <div className="w-full flex">
          <img
            className="h-[400px] w-full opacity-[0.9] "
            src="https://images.hdqwalls.com/wallpapers/eiffel-tower-paris-4k-wide.jpg"
            alt="paris"
          ></img>
          <div className="absolute bg-black m-4 top-[80px] p-5 w-[30%]">
            <h1>Paris</h1>
            <h3>Book N'Fly</h3>
            <br />
            <p>pretty nice gaauy croasont Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slides">Slide 2</SwiperSlide>
      <SwiperSlide className="slides">Slide 3</SwiperSlide>
      <SwiperSlide className="slides">Slide 4</SwiperSlide>
    </Swiper>
  );
};
