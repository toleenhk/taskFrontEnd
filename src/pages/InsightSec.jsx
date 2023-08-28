import React from "react";

const InsightSec = () => {
  return (
    <div className="relative  ">
      <div className="flex justify-between flex-wrap  items-center gap-16   max-w-screen-xl  mx-auto px-16 py-24 lg:py-52">
        <div className="flex-1 in-w-[200px] hidden lg:block  ">
          <div className=" ">
            <div className="   ">
              <img
                src="/image/Union (2).png"
                className=" absolute  object-contain left-0 top-48 "
                alt=""
                srcset=""
              />
              <img
                src="/image/Group 216.png"
                className="absolute object-contain top-56 left-32 "
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] font-al">
          <div className="mx-auto w-96 lg:w-auto ">
            <p className="leading-[34.4px] insight-font-hint font-al">
              WHY AIMULTIPLE
            </p>
            <h3 className="font-al  insight-font gradient-text-dark ">
              Data is everywhere, insights are rare.{" "}
              <span className=" gradient-text ">We provide insights.</span>
            </h3>
            <p className="p-insight-font font-al leading-[19.2px] pt-5 text-blue-gray-700 ">
              Businesses today are faced with a growing number of tech solutions
              to choose from, each with its own unique set of features and
              benefits. It can be challenging to decide which solution is best
              when there are so many options available with so many sources of
              data, such as reviews, case studies, and feature lists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightSec;
