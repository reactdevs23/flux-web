import React from "react";

const Card = ({ title, info, id, activeIndex }) => {
  return (
    <div className="flex flex-col items-start gap-0  sm:gap-2 sm:py-3 md:border-b border-black border-opacity-10 transition-transform transition-all duration-300 ease-in-out duration-500 cursor-pointer group pt-  sm:pb-3 last:border-0 pb-8">
      <h3
        className={` text-xl font-bold ${
          id === activeIndex ? "activeColor" : "text-black"
        } group-hover:text-green`}
      >
        {title}
      </h3>
      <p
        className={`text-base md:text-xl text-left ${
          id === activeIndex ? "activeColor" : "text-black"
        } group-hover:text-green`}
      >
        {info}
      </p>
    </div>
  );
};

export default Card;
