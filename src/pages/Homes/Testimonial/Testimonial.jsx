import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa6";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(reviews);

  return (
    <div className="p-20">
      <SectionTitle
        subTitle={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      {/* carousel */}
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-w-screen-md"
      >
        {reviews.map((item) => (
          <SwiperSlide
            key={item._id}
          >
            <div className="px-24 py-10 flex flex-col items-center mx-auto justify-center space-y-2">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <FaQuoteLeft className="text-5xl"></FaQuoteLeft>
              <p className="text-center">{item.details}</p>
              <h1 className="text-yellow-400 text-2xl ">{item.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
