import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GrayRectangle from "./GrayRectangle";
import GrayRectangleTwo from "./GrayRectangleTwo";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const ReactSlick = () => {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    cssEase: "linear",
  };
  return (
    <div className="cursor-grab focus:cursor-grabbing w-[42rem] slide-container pl-4 xl:pl-0 double max-w-full ">
      <div className="slideshow-repeat-container">
        <button className="carousel-btn right-0 top-0 ">
          <Arrow />
        </button>
        <div className="rectangle-container relative"></div>
        <div className=" absolute"></div>
        <div className="slide-content-gray animation-slide blurred-end relative">
          <div className=" absolute w-44  h-64 z-50 blurred-end   right-0 "></div>
          <Slider {...settings}>
            <div>
              <GrayRectangle />
            </div>
            <div>
              <GrayRectangleTwo />
            </div>
          </Slider>
        </div>{" "}
      </div>
    </div>
  );
};

export default ReactSlick;
