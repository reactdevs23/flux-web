"use client";

import { car, robotImg, sportsCar } from "@/images";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "./Card";

const DiverseOutput = () => {
  // Swiper reference and active index state
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Data for the carousel
  const data = [
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: sportsCar,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: sportsCar,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: sportsCar,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: sportsCar,
    },
  ];

  return (
    <section className="section-spacing container mx-auto flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
      {/* Heading and Description */}
      <div className="max-w-[882px] w-full flex flex-col gap-2 sm:gap-4 md:gap-6">
        <h2 className="heading text-center">Diverse Outputs</h2>
        <p className="text text-center">
          From pixel art to photorealistic images, meeting various creative
          needs
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-3 sm:gap-6 md:gap-24 max-w-[450px] sm:max-w-full w-full mx-auto sm:m-0">
          {/* Desktop View: Card List */}
          <div className="hidden sm:flex flex-col gap-2 order-2 sm:order-1">
            {data.map((el, i) => (
              <button onClick={() => swiperRef.current?.slideTo(i)} key={i}>
                <Card {...el} id={i} activeIndex={activeIndex} />
              </button>
            ))}
          </div>

          <div className="w-full order-1 sm:order-2 overflow-hidden h-auto rounded-[24px] md:rounded-[30px] mx-auto sm:m-0">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]} // Add Pagination module
              pagination={{
                clickable: true,
              }}
              className="w-full h-auto"
              breakpoints={{
                768: {
                  pagination: false, // Disable pagination on desktop
                },
              }}
            >
              {data.map((el, i) => (
                <SwiperSlide key={i} className="">
                  <Image
                    width={537}
                    height={492}
                    src={el.img.src}
                    alt={el.title}
                    className="w-full  rounded-[22px] object-cover object-center mb-3 sm:mb-0"
                  />

                  <div className="flex sm:hidden">
                    <Card {...el} id={i} activeIndex={activeIndex} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseOutput;
