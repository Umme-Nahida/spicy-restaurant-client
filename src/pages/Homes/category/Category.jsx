import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"

const Category = () => {
  return (
    <div>
        <div className="text-center">
            <SectionTitle subTitle={"--From 11:00am to 10:00pm--"} heading={"ORDER ONLINE"}></SectionTitle>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-16">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-16">pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-16">soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-16">Dessert</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-16">Salad</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
