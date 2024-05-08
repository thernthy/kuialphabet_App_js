import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
export default function CommendSlider() {
  return (
    <>
      <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
        <SwiperSlide>
            <div className="tptestimonial">
                 <div className="tptestimonial__rating">
                    {/* <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span> */}
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                       experience with him</p>
                 </div>
                 <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                        <img class="mr-25" src={require("../../assets/img/dev_profile/thy.JPG")} className='h-10 w-10 rounded-full mr-2' alt="" />
                       <div class="tptestimonial__title">
                          <h4 class="tp-testi-heading">thern thy</h4>
                          <span>webdeverloper</span>
                       </div>
                    </div>
                 </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="tptestimonial">
                 <div className="tptestimonial__rating">
                    {/* <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span> */}
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                       experience with him</p>
                 </div>
                 <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                        <img class="mr-25" src={require("../../assets/img/dev_profile/thy.JPG")} className='h-10 w-10 rounded-full mr-2' alt="" />
                       <div class="tptestimonial__title">
                          <h4 class="tp-testi-heading">thern thy</h4>
                          <span>webdeverloper</span>
                       </div>
                    </div>
                 </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="tptestimonial">
                 <div className="tptestimonial__rating">
                    {/* <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span> */}
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                       experience with him</p>
                 </div>
                 <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                        <img class="mr-25" src={require("../../assets/img/dev_profile/thy.JPG")} className='h-10 w-10 rounded-full mr-2' alt="" />
                       <div class="tptestimonial__title">
                          <h4 class="tp-testi-heading">thern thy</h4>
                          <span>webdeverloper</span>
                       </div>
                    </div>
                 </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
