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
        loop={true}
        autoplay={{
          delay: 3500,
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
          <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/1.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/2.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/3.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/4.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/5.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/6.jpg)] ">        
            <h1 className="text-5xl ">Beautiful single-family home with modern amenities.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPage;
