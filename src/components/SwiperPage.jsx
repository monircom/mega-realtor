import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperPage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <h1 className="text-3xl">Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <h1 className="text-3xl">Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <h1 className="text-3xl">Slide 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            <h1 className="text-3xl">Slide 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide5">
            <h1 className="text-3xl">Slide 5</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide6">
            <h1 className="text-3xl">Slide 6</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPage;
