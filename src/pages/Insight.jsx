import React from "react";

const Insight = () => {
  return (
    <div
      className="flex justify-between flex-wrap  items-center gap-16   max-w-screen-xl  mx-auto px-16 py-2 "
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="flex-1 ">
        <div className=" w-96 lg:w-auto m-auto">
          {/* min-w-[200px] */}
          <p className="leading-[34.4px] insight-font-hint font-al gradient-text-dark">
            WHY AIMULTIPLE
          </p>
          <h3 className="font-al  insight-font gradient-text-dark ">
            Data is everywhere, insights are rare.{" "}
            <span className=" gradient-text">We provide insights.</span>
          </h3>
          <p className="p-insight-font font-al leading-[19.2px] pt-5 text-blue-gray-700">
            Businesses today are faced with a growing number of tech solutions
            to choose from, each with its own unique set of features and
            benefits. It can be challenging to decide which solution is best
            when there are so many options available with so many sources of
            data, such as reviews, case studies, and feature lists.
          </p>
        </div>
      </div>
      <div className="flex-1 in-w-[200px] hidden lg:block">
        <div className="flex align-bottom ">
          <img
            src="/image/image 86.png"
            className=" object-contain object-bottom"
            alt=""
            srcset=""
          />
          <img
            src="/image/Group 214.png"
            className=" object-contain object-bottom"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Insight;
