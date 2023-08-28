import React, { useState } from "react";
import GrayRectangle from "./GrayRectangle";
import ReactSlick from "./ReactSlick";

const GrayComponents = () => {
  // const slideContent = [
  //   <GrayRectangle />,
  //   <GrayRectangle />,
  //   <GrayRectangle />,
  //   // Add more slide content here
  // ];

  // useEffect(() => {
  //   const interval = setInterval(goToPreviousSlide, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval);
  // }, [activeSlide]);

  // const goToNextSlide = () => {
  //   setActiveSlide((activeSlide + 1) % slideContent.length);
  // };

  return <ReactSlick />;
};

export default GrayComponents;
