import React from "react";

const Al = () => {
  return (
    <div
      className="flex justify-around  items-center pt-4  p-4  max-w-screen-xl  mx-auto sm:px-8 py-2"
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <img
        src="/image/image 87.png"
        className=" object-contain hidden md:block xl:mt-0 mt-24"
        alt=""
        srcset=""
      />
      <div className=" container-paragraph-Al font-al ">
        <span className="font-al text-xs  font-semibold font-al gradient-text-dar ">
          HOW AIMULTIPLE WORKS
        </span>
        <h2 className=" gradient-text text-3xl font-semibold font-sans pb-5 pt-2">
          Powered with AI
        </h2>
        <p className=" font-al font-normal text-base leading-tight">
          There are many sources of data on tech solutions; reviews, case
          studies, feature lists etc. We bring it all together and extract the
          important insights so you can choose with confidence.
        </p>
      </div>
    </div>
  );
};

export default Al;
