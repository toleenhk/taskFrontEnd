import React from "react";
import GrayComponents from "../components/GrayComponents";

const Guides = () => {
  return (
    <div
      className=" mb-0 xl:mb-32 "
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className=" pt-10 bg-white">
        <h1
          style={{ fontFamily: "Work Sans, sans-serif" }}
          className="  text-center text-lg font-medium text-black font-al  "
        >
          Here's How It Works
        </h1>
      </div>
      <div className="">
        <div className="   lg:flex lg:justify-between gap-5 pt-10 lg:pt-3    max-w-screen-xl  mx-auto px-16 py-2">
          <div className=" lg:w-80 lg:h-60 flex pb-8 lg:pb-0 ">
            <div className=" mx-auto w-96">
              <span className=" rounded-lg text-secondary text-md">
                <img
                  src="/icons/3square.png"
                  className="py-1 px-2 bg-gray-200 rounded-lg"
                />
              </span>
              <div className="title-guide">
                <h1 className="text-2xl gradient-text pt-3 font-semibold font-al ">
                  55% of Fortune 500 Companies
                </h1>
              </div>
              <div className="paragrph-guid pt-3 leading-tight font-al ">
                <p>Rely on us in their procurement decisions, every month!</p>
              </div>
            </div>
          </div>
          <div className=" lg:w-80 lg:h-60 flex  pb-8 lg:pb-0 ">
            <div className=" mx-auto  w-96 ">
              <span className=" rounded-lg text-secondary text-md">
                <img
                  src="/icons/global.png"
                  className="py-1 px-2 bg-gray-200 rounded-lg"
                />
              </span>
              <div className="title-guide">
                <h1 className="text-2xl gradient-text pt-3 font-semibold font-al ">
                  6 Million Businesses
                </h1>
              </div>
              <div className="paragrph-guid pt-3 leading-tight font-al">
                <p>Rely on AI Multiple as mush as they rely on SimilarWeb</p>
              </div>
            </div>
          </div>
          <div className=" lg:w-80 lg:h-60 flex  pb-8 lg:pb-0">
            <div className=" mx-auto  w-96">
              <span className=" rounded-lg text-secondary text-md">
                <img
                  src="/icons/chart.png"
                  className="py-1 px-2 bg-gray-200 rounded-lg"
                />
              </span>
              <div className="title-guide">
                <h1 className="text-2xl gradient-text pt-3 font-semibold font-al">
                  Data Driven Insights
                </h1>
              </div>
              <div className="paragrph-guid pt-3 leading-tight font-al">
                <p>
                  With data cached in our in-memory data engine, you can power
                  rapid-fire drag-explorations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="common-Solution-section"
        className="xl:flex xl:justify-between gap-16 pt-10  xl:pt-3    max-w-screen-xl  mx-auto xl:px-16 py-2"
      >
        <div className="small pb-10 xl:pb-0 px-16 xl:px-0 ">
          <h4 className="font-sans text-sm font-medium leading-tight tracking-wider text-left font-al">
            Software & Services
          </h4>
          <h1 className="font-sans text-2xl font-medium leading-9 tracking-normal text-left gradient-text py-4 gradient-text font-al">
            Common Solutions
          </h1>
          <div class="  ">
            <div class="overflow-y-auto custom-scrollbar">
              <p className="font-al">
                {" "}
                Common solutions are industry agnostic software and services
                that benefit businesses from all industries. They help
                businesses improve and automate their business processes,
                promote collaboration, improve customer and employee experience,
                manage their data assets, implement AI/ML models and more{" "}
              </p>
            </div>
          </div>
          {/* <p className=" h-44 overflow-y-auto custom-scrollbar">
            Common solutions are industry agnostic software and services that
            benefit businesses from all industries. They help businesses improve
            and automate their business processes, promote collaboration,
            improve customer and employee experience, manage their data assets,
            implement AI/ML models and more <br></br>
            Common solutions are industry agnostic software and services that
            benefit businesses from all industries. They help businesses improve
            and automate their business processes, promote collaboration,
            improve customer and employee experience, manage their data assets,
            implement AI/ML models and more
          </p> */}
        </div>
        <div className=" hidden sm:block px-0 lg:px-28 xl:px-0">
          <GrayComponents />
        </div>
      </div>
    </div>
  );
};

export default Guides;
