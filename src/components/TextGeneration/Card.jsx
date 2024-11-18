import Image from "next/image";
import React from "react";

const Card = ({ img, title }) => {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-4 lg:gap-6   items-start  
            `}
    >
      {" "}
      <div className=" w-full h-full overflow-hidden  rounded-[24px] md:rounded-[30px]  ">
        <Image
          src={img.src}
          width={353}
          height={280}
          alt={title}
          className="w-full h-full rounded-[24px] md:rounded-[30px] object-cover object-center	origin-center		transition-transform duration-500 cursor-pointer hover:scale-110"
        />
      </div>
      <div className="flex flex-col sm:gap-1">
        <p className="text-green  text-sm md:text-base font-bold leading-[100%] md:leading-[90%]">
          Prompt:
        </p>
        <p className="text-black  text-base md:text-2xl ">{title}</p>
      </div>
    </div>
  );
};

export default Card;
