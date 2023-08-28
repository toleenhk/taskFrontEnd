import React from "react";
import { Articles } from "../data";

const Card = ({ id, date, title, author, path }) => {
  return (
    <div className=" bg-white text-slate-950 font-al ">
      <a href="#">
        <img className="rounded-t-lg object-contain" src={path} alt="" />
      </a>
      <div className=" px-3">
        <p className="text-[12px] text-[#757575] py-3">{date}</p>
        <div className="">
          <a href="#">
            <h5 className=" w-64 mb-2 text-md font-medium leading-[23.4px] tracking-tight text-[18px] text-gray-700">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-worksans font-normal text-[14px] leading-[14px]">
            <span className="text-[#757575]">by </span>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
