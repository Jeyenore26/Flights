import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Slides from "./Slides";

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
        <Slides
          name="فرنسا"
          sub="باريس"
          parag="            ما هذا يا ذها ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها
            ارض الجمال ارض خضراء الظيبطه الورا ظيبطه ما هذا يا ذها ارض الجمال
            ارض خضراء الظيبطه الورا ظيبطه"
        />
      </SwiperSlide>
    </Swiper>
  );
};
