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
            <h1 className="text-5xl ">Beautiful home with modern amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/2.jpg)] ">        
            <h1 className="text-5xl ">Cozy townhouse in a family-friendly neighborhood.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/3.jpg)] ">        
            <h1 className="text-5xl ">Modern apartment with stunning city views.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/4.jpg)] ">        
            <h1 className="text-5xl ">Comfortable student housing near campus.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/5.jpg)] ">        
            <h1 className="text-5xl ">Retirement community with various amenities.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/6.jpg)] ">        
            <h1 className="text-5xl ">Charming vacation rental by the beach.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPage;
