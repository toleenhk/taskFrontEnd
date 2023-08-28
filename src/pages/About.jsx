// import React from "react";
// import { AiOutlineMail } from "react-icons/ai";
// const Contact = () => {
//   return (
//     <div className=" flex justify-center text-center bg-gray-200 items-center rounded-md mx-auto h-56">
//       <div className="p-14 text-left">
//         <div className=" pb-3">
//           <h1 className=" insight-font  leading-[38.4px] font-al gradient-text">
//             Never miss valuable insights
//           </h1>
//           <p className="font-all py-1">Nice to see you back so soon</p>
//         </div>
//         <div className=" relative  border-black border bg-white    rounded-lg px-4 pt-1">
//           <div className=" absolute bg-gray-200 -top-[1px] -right-[4px] border rounded-bl-lg  rounded-tr-lg  border-gray-200 border-b-black border-l-black   w-[21rem] h-[1.8rem] inverted-edge "></div>
//           <div className="p-1 flex gap-2 items-center">
//             <div className="w-[15px] h-[15px] ">
//               <AiOutlineMail className="" />
//             </div>

//             <label htmlFor="input" className="font-al contact-email ">
//               Email
//             </label>
//           </div>
//           <div className="flex gap-4 font-al ">
//             <input
//               id="input"
//               type="text"
//               className=" w-full pt-[7px] pb-[7px] "
//               placeholder="Enter Your Email Adress"
//             />
//           </div>
//           <button className=" absolute bottom-0 -right-28 w-89 h-39 rounded-6 font-al font-al pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-gradient-to-r from-blue-500 to-blue-900 font-medium text-base leading-[17.6px] text-white">
//             I'm in!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// Main

// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import Guides from "./Guides";
// import Al from "./Al";
// import Articales from "./Articales";
// import { Link } from "react-router-dom";
// import Insight from "./Insight";
// import InsightSec from "./InsightSec";
// import Contact from "./Contact";
// import Footer from "./Footer";
// const Main = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   return (
//     <>
//       {" "}
//       {/* the line of the image */}
//       <div className=" hidden md:block">
//         <span className="z-0 absolute  right-0 top-80  w-5/12  h-56  bg-transparent border-black border-b-2 border-l-2 rounded-bl-lg "></span>
//         <span className="z-0 absolute md:right-5 2xl:right-20 top-0  w-36  h-40  bg-transparent border-black border-r-2 border-b-2 rounded-br-lg"></span>
//       </div>
//       <div className=" pb-56">
//         <div className=" flex justify-between gap-5 pt-8  p-4  max-w-screen-xl  mx-auto sm:px-8 py-2 ">
//           <div className="flex-1 mt-7  flex flex-col justify-start ">
//             <div className="pr-10 lg:pr-36 ">
//               <h1 className="text-4xl  leading-tight text-blue-600  font-sans  font-medium">
//                 Choose The Right Solution For Your Business
//               </h1>
//               <p className="mt-3 pr-24 ">
//                 We aggregate public & private data on B2B technology like AI,
//                 IoT & RPA to help you choose with confidence{" "}
//               </p>
//             </div>
//             {/* <div className="">
//           <div className="mt-5 pb-1  border border-black rounded-lg  ">
//             <label
//               htmlFor="textInput"
//               className="flex w-20 items-center gap-1 text-sm px-4 border-r  border-black rounded-full"
//             >
//               <BsSearch />
//               Search
//             </label>
//             <input
//               type="text"
//               id="textInput"
//               placeholder="Enter text"
//               value={inputValue}
//               onChange={handleInputChange}
//               className=" w-full"
//             />
//           </div>
//         </div> */}

//             {/* <div className="relative">
//           <div className="flex flex-col">
//             <label
//               htmlFor="input"
//               className="flex items-center gap-1 w-20 border border-b-0 border-black relative rounded  text-sm"
//             >
//               <BsSearch /> Search
//               <span className="absolute top-full left-0 right-0 h-1 bg-white"></span>
//             </label>
//             <input
//               id="input"
//               type="text"
//               className="border  border-black rounded"
//               placeholder="Enter text"
//             />
//           </div>
//         </div> */}

//             <div className="relative pt-10">
//               <div className="flex flex-col">
//                 <div className="flex ">
//                   <label
//                     htmlFor="input"
//                     className="p-1 flex items-center gap-1 w-20 border-2 rounded-t-lg border-b-0 border-black relative  text-sm  hover:border-opacity-100  transition-all duration-300"
//                   >
//                     <BsSearch className="text-gray-500" /> Search
//                     {/* this line for the curve */}
//                     <div className=" z-20 absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-t-0 border-r-0  border-black rounded-bl-full transform translate-x-3 translate-y-3/2  "></div>
//                     {/* the next two line to hide the extra line */}
//                     <div className=" z-10 absolute bottom-0 right-0 w-3 h-3 bg-white border-0  border-black rounded-pr-full transform translate-x-2  translate-y-0.5  "></div>
//                     <div className=" z-10 absolute bottom-0 right-0 w-3 h-3 bg-white  border-0  border-black rounded-pr-full transform translate-x-3  translate-y-0.5  "></div>
//                     {/* this line so we code hide the line between the label and the input */}
//                     <span className=" z-10 absolute top-full left-0 right-0 h-1 bg-white"></span>
//                   </label>
//                 </div>
//                 <input
//                   id="input"
//                   type="text"
//                   className="border-2 border-black rounded-r focus-within:outline-0 rounded-bl-lg p-2  "
//                   placeholder="Enter text"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* the right img of the main page */}
//           <div className=" hidden md:block relative flex-1 ">
//             <img
//               className="lg:h-[450px] md:h-[400px] xl:max-w-[500px] right-3  absolute z-10"
//               src="/image/image 85.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <Guides />
//       <Al />
//       <div className=" my-40 mx-20 relative">
//         <div className="absolute left-30 -top-20 md:-top-10 md:left-20 font-semibold text-lg">
//           Explore Popular Articles
//         </div>
//         <Link className="absolute left-30 md:right-20 -top-10 text-blue-700 font-sans font-medium">
//           see more
//         </Link>
//         <Articales />
//       </div>
//       <div>
//         <Insight />
//       </div>
//       <div>
//         <InsightSec />
//       </div>
//       <div className=" items-center lg:mx-16">
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Main;
