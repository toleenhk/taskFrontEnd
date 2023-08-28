import React, { useState } from "react";
import GrayRectangle from "./GrayRectangle";

const GrayComponents = () => {
  const slideContent = [
    <GrayRectangle />,
    <GrayRectangle />,
    <p>hiii</p>,
    // Add more slide content here
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const goToPreviousSlide = () => {
    setActiveSlide(
      (activeSlide - 1 + slideContent.length) % slideContent.length
    );
  };

  // const goToNextSlide = () => {
  //   setActiveSlide((activeSlide + 1) % slideContent.length);
  // };

  return (
    <div className=" slide-container double max-w-full  ">
      <div className="slideshow-repeat-container">
        <button
          className="carousel-btn right-0 top-0 "
          onClick={goToPreviousSlide}
        >
          Next
        </button>
        <div className="rectangle-container relative"></div>
        <div className="slide-content-gray animation-slide">
          {slideContent[activeSlide]}
        </div>{" "}
      </div>
    </div>
  );
};

export default GrayComponents;

// import React, { useState } from "react";
// import GrayRectangle from "./GrayRectangle";

// const GrayComponents = () => {
//   const slideContent = [
//     <GrayRectangle />,
//     <GrayRectangle />,
//     // Add more slide content here
//   ];

//   const [activeSlide, setActiveSlide] = useState(0);
//   const [prevSlide, setPrevSlide] = useState(0);

//   const goToPreviousSlide = () => {
//     setActiveSlide(
//       (activeSlide - 1 + slideContent.length) % slideContent.length
//     );
//   };

//   // const goToNextSlide = () => {
//   //   setActiveSlide((activeSlide + 1) % slideContent.length);
//   // };

//   return (
//     <div className=" w-[30rem] slide-container double max-w-full  ">
//       <div className="slideshow-repeat-container">
//         <button
//           className="carousel-btn right-0 top-0 "
//           onClick={goToPreviousSlide}
//         >
//           Next
//         </button>
//         <div className="rectangle-container relative"></div>
//         <div className="slide-content-gray animation-slide">
//           {slideContent.map((content, index) => (
//             <div
//               key={index}
//               className={`slide-item ${index === activeSlide ? "active" : ""}`}
//               style={{
//                 transform: `translateX(-${activeSlide * 100}%)`,
//                 transition: `transform 1s ease-in-out`,
//               }}
//             >
//               {content}
//             </div>
//           ))}
//         </div>{" "}
//       </div>
//     </div>
//   );
// };

// export default GrayComponents;

//css
/* test */

// .slider-controls {
//     display: flex;
//     justify-content: center;
//   }

//   /* animation */
//   .slide-item {
//     display: inline-block;
//     width: 100%;
//   }

//   .active {
//     opacity: 1;
//   }

//   .slide-content-gray {
//     display: flex;
//     overflow: hidden;
//   }
