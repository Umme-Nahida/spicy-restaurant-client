import React from "react";
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className=" bg-cover bg-black bg-opacity-80"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-80 p-20">
        <SectionTitle
          subTitle={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex items-center gap-x-10 ">
          <img src={img} alt="" className="w-1/2" />
          <div className="text-white space-y-3">
            <h4>March 20, 2023</h4>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent border border-b-4 hover:bg-yellow-400 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
