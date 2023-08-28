import React from "react";
import { MdOutlineBuildCircle } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { BsBuildingCheck } from "react-icons/bs";

import { Link } from "react-router-dom";
const GrayRectangleTwo = () => {
  return (
    <div>
      <div className=" first-slide slide-guide slide-guide-active   h-[14.5625rem] ">
        <div className="  flex  gap-5">
          <div className="relative w-[14.5625rem] h-[14.5625rem] rounded-lg solutions-color ">
            <div className=" absolute top-6 left-4 ">
              <Link
                to="/"
                className="flex gap-2 text-blue-700 font-semibold items-center"
              >
                <MdOutlineBuildCircle className="icon-size" />
                <h4 className=" text-lg  ">adjustment</h4>
              </Link>
            </div>
            <div className=" absolute bottom-0 right-0">
              <div className=" h-[5rem] w-[3.5625rem] bg-white rounded-tl-lg"></div>
            </div>
            <div className=" absolute left-[11.5rem] top-0  ">
              <div className="solutions-color h-[9.55rem] w-[3.6875rem] rounded-br-lg rounded-tr-lg "></div>
            </div>
            <div className="relative curve-three"></div>
          </div>
          <div className="w-[13.6875rem] h-[5.125rem] rounded-lg solutions-color z-20 relative">
            <div className=" absolute top-6 left-4">
              <Link
                className="flex gap-2 text-lg  text-blue-700 font-semibold items-center"
                to="/"
              >
                <BiBrain className="icon-size" />
                <h4 className="text-lg">Ideas</h4>
              </Link>
            </div>
            <div className=" absolute w-[6.6875rem] h-[6.8rem] rounded-lg solutions-color top-[5.7rem] right-28 "></div>
            <div className=" absolute w-[10.7875rem] h-[4.3rem] rounded-lg solutions-color top-[10.3rem] right-28 ">
              <div className="absolute left-6 bottom-3">
                <Link
                  className="flex gap-2 text-lg  text-blue-700 font-semibold items-center"
                  to="/"
                >
                  <GiProgression className="icon-size" />
                  <h4 className=" text-lg  ">Progress</h4>
                </Link>
              </div>
            </div>
            <div className=" relative second-curve  "></div>
            <div className=" absolute w-[7.4875rem] h-[8.9rem] rounded-tl-lg rounded-bl-lg solutions-color top-[5.7rem] -right-[1.2rem] ">
              <div className="absolute left-6 bottom-3">
                <Link
                  className="flex gap-2 text-lg  text-blue-700 font-semibold items-center"
                  to="/"
                >
                  <BsBuildingCheck className="icon-size" />
                  <h4 className=" text-lg  ">Industy</h4>
                </Link>
              </div>
            </div>
            {/* <div className=" absolute w-[6.6875rem] h-[4.6rem] rounded-tl-lg rounded-tr-lg bg-green-700 top-[1.1rem] left-[7.7rem] "></div> */}
          </div>
          <div className="relative z-20 ">
            <div className="relative  curves    "></div>
          </div>
          <div className="relative">
            <div className=" absolute w-[4.625rem] h-[14.7rem] -top-[0.1rem] rounded-lg -right-[2.9rem] solutions-color   "></div>
          </div>
          <div className="relative">
            <div className=" absolute w-[4.625rem] h-[14.7rem] -top-[0.1rem] rounded-lg -right-[2.9rem] solutions-color  "></div>
          </div>
          <div className="relative">
            {/* <div className=" absolute w-[5.625rem] h-[14.7rem] -top-[0.1rem] rounded-lg -right-[8.2rem] bg-red-300   "></div> */}
            <div className=" absolute w-[9.625rem] h-[14.5rem] -top-[0rem] rounded-lg -right-[12.2rem] solutions-color   "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrayRectangleTwo;
