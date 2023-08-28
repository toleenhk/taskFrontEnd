import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className=" flex justify-center text-center bg-gray-200 items-center rounded-md mx-auto lg:p-16 p-24">
      <div className="xl:p-14 text-left">
        <div className=" pb-10 px-0 md:px-4">
          <h1 className=" insight-font  leading-[38.4px] font-al gradient-text">
            Never miss valuable insights
          </h1>
          <p className="font-all py-1 text-blue-gray-700">
            Nice to see you back so soon
          </p>
        </div>
        <div className=" relative rounded-md px-4 pt-1 fancy-inverted-curve ">
          <div className=" absolute fancy-inverted-curve2 "></div>
          <div className=" p-1 flex gap-2 items-center border-l-2 border-t-2 border-r-2 border-black rounded-tl-md rounded-tr-md w-24 borderofemail bg-white relative">
            <div className=" absolute hidding-extraItems"></div>
            <div className="w-[15px] h-[15px] pl-2 ">
              <AiOutlineMail className="" />
            </div>

            <label htmlFor="input" className="font-al contact-email pl-2 ">
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
            <button className=" absolute top-20 right-44 lg:top-auto lg:bottom-0 lg:-right-28 rounded-md font-al font-al pt-[11px] pr-[20px] pb-[11.5px] pl-[20px] bg-gradient-to-r from-blue-500 to-blue-900 font-medium text-base leading-[17.6px] text-white">
              I'm in!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
