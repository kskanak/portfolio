import React from "react";
import img from "../../../assets/IMG_20190906_174504_HDR.jpg";

const Banner = () => {
  return (
    <div id="home">
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Md khaladul Alam
              <span className="text-violet-400 ml-1">Kanak</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Front End Developer || Web Developer <br />
              <small>
                {" "}
                A Front End Focused Web Develper building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall products
              </small>
            </p>
            <p></p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg">
            <img
              src={img}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-80 xl:h-112 2xl:h-128 roundd-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
