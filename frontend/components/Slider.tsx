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
            className="2xl:h-[700px] xl:h-[600px] lg:h-[500px] md:h-[500px] sm:h-[300px] xs:h-[300px] w-full opacity-[0.8] "
            src="https://images.hdqwalls.com/wallpapers/eiffel-tower-paris-4k-wide.jpg"
            alt="paris"
          ></img>
          <div className="overflow-hidden absolute bg-black/[0.2] m-4 top-[10%] md:top-[10%] right-[50px] md:right-[80px] p-5 w-[60%] xl:w-[23%] sm:w-[50%] h-[65%] ">
            <div className="break-all flex flex-col space-y-1 md:space-y-4" dir='rtl' >
              <h1 className="cairo_semibold_title text-white text-xl md:text-2xl font-bold">فرنسا</h1>
              <h3 className="cairo_semibold_title text-white text-sm md:text-xl"> باريس </h3>
              <p className="cairo_semibold_title text-white text-sm md:text-lg">ما هذا يا ذها ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها ارض الجمال ارض خضراء الظيبطه الورا ظيبطه</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slides">Slide 2</SwiperSlide>
      <SwiperSlide className="slides">Slide 3</SwiperSlide>
      <SwiperSlide className="slides">Slide 4</SwiperSlide>
    </Swiper>
  );
};
