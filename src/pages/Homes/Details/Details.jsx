import React from "react";
import img from "../../../assets/home/chef-service.jpg";

const Details = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center bg-white w-3/5 py-10 text-black">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl lg:text-3xl font-bold">Spicy Restaurant</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
