import React from "react";
import { Articles } from "../data";
import Card from "../components/Card";

const Articales = () => {
  return (
    <div
      className="pt-4"
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="flex flex-wrap justify-center gap-5  ">
        {Articles.map(({ id, date, title, author, path }) => {
          return (
            <Card
              key={id}
              id={id}
              date={date}
              title={title}
              author={author}
              path={path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articales;
