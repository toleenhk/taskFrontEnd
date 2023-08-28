import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Guides from "./Guides";
import Al from "./Al";
import Articales from "./Articales";
import { Link } from "react-router-dom";
import Insight from "./Insight";
import InsightSec from "./InsightSec";
import Contact from "./Contact";
import Footer from "./Footer";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      {" "}
      {/* the line of the image */}
      <div className=" hidden lg:block">
        <span className="z-0 absolute  right-0 top-80  w-5/12  h-56  bg-transparent border-black border-b-2 border-l-2 rounded-bl-lg "></span>
        <span className="z-0 absolute md:right-5 2xl:right-20 top-0  w-36  h-40  bg-transparent border-black border-r-2 border-b-2 rounded-br-lg"></span>
      </div>
      <div className=" lg:pb-56 pb-36 mx-10 lg:mx-0">
        <div className=" flex justify-between gap-5 pt-8  p-4  max-w-screen-xl  mx-auto sm:px-8 py-2 ">
          <div className="flex-1 mt-7  flex flex-col justify-start ">
            <div
              className="pr-10 lg:pr-36 "
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <h1 className="text-4xl  leading-tight text-blue-500  font-al  font-medium">
                Choose The Right Solution For Your Business
              </h1>
              <p className="mt-3 pr-24 font-al ">
                We aggregate public & private data on B2B technology like AI,
                IoT & RPA to help you choose with confidence{" "}
              </p>
            </div>
            {/* <div className="">
          <div className="mt-5 pb-1  border border-black rounded-lg  ">
            <label
              htmlFor="textInput"
              className="flex w-20 items-center gap-1 text-sm px-4 border-r  border-black rounded-full"
            >
              <BsSearch />
              Search
            </label>
            <input
              type="text"
              id="textInput"
              placeholder="Enter text"
              value={inputValue}
              onChange={handleInputChange}
              className=" w-full"
            />
          </div>
        </div> */}

            {/* <div className="relative">
          <div className="flex flex-col">
            <label
              htmlFor="input"
              className="flex items-center gap-1 w-20 border border-b-0 border-black relative rounded  text-sm"
            >
              <BsSearch /> Search
              <span className="absolute top-full left-0 right-0 h-1 bg-white"></span>
            </label>
            <input
              id="input"
              type="text"
              className="border  border-black rounded"
              placeholder="Enter text"
            />
          </div>
        </div> */}

            <div
              className=" text-left w-96 pt-10"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <div className=" relative rounded-md  pt-1 fancy-inverted-curve-Main ">
                <div className=" absolute fancy-inverted-curve2-Main "></div>
                <div className=" p-1 flex gap-2 items-center border-l-2 border-t-2 border-r-2 border-black rounded-tl-md rounded-tr-md w-24 borderofemail bg-white relative">
                  <div className=" absolute hidding-extraItems"></div>
                  <div className="w-[15px] h-[15px] pl-2 ">
                    <AiOutlineMail className="" />
                  </div>

                  <label
                    htmlFor="input"
                    className="font-al contact-email pl-2 "
                  >
                    Email
                  </label>
                </div>
                <div className="lg:flex lg:gap-4 font-al ">
                  <input
                    id="input"
                    type="text"
                    className=" w-full pt-[7px] pb-[7px] border-2 rounded-md border-black pl-3  "
                    placeholder="Enter Your Email Adress"
                  />
                  <button className=" absolute top-20 right-44 xl:top-auto xl:bottom-0 xl:-right-28 rounded-md font-al font-al pt-[11px] pr-[20px] pb-[11.5px] pl-[20px] bg-gradient-to-r from-blue-500 to-blue-900 font-medium text-base leading-[17.6px] text-white">
                    I'm in!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* the right img of the main page */}
          <div className=" hidden lg:block relative flex-1 ">
            <img
              className="lg:h-[450px] md:h-[400px] xl:max-w-[500px] right-3  absolute z-10"
              src="/image/image 85.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Guides />
      <Al />
      <div className=" my-20 lg:my-40 mx-20 relative">
        <div className="absolute left-30 -top-20 md:-top-10 md:left-20 font-semibold text-lg gradient-text-dark">
          Explore Popular Articles
        </div>
        <Link className="absolute left-30 md:right-20 -top-10 gradient-text font-sans font-medium">
          see more
        </Link>
        <Articales />
      </div>
      <div>
        <Insight />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <InsightSec />
      </div>
      <div
        className=" items-center lg:mx-16"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Main;
