"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { amenda, avatar2, avatar3, avatar4, avatar5, shape } from "@/images";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Slide from "./Slide";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Track the active index
  };

  const data = [
    {
      img: amenda,
      name: "Amenda",
      country: "United States",
      feedback:
        "I have been looking everywhere and have settled on Upscayl. It's free, which is a definite bonus, but it also seems better than all the paid ones I tried the trial of!",
    },
    {
      img: avatar2,
      name: "Shphia",
      country: "Canada",
      feedback:
        "I have been looking everywhere and have settled on Upscayl. It's free, which is a definite bonus, but it also seems better than all the paid ones I tried the trial of!",
    },
    {
      img: avatar3,
      name: "Tom",
      country: "United Kingdom",
      feedback:
        "I have been looking everywhere and have settled on Upscayl. It's free, which is a definite bonus, but it also seems better than all the paid ones I tried the trial of!",
    },
    {
      img: avatar4,
      name: "Liam",
      country: "Australia",
      feedback:
        "I have been looking everywhere and have settled on Upscayl. It's free, which is a definite bonus, but it also seems better than all the paid ones I tried the trial of!",
    },
    {
      img: avatar5,
      name: "Elon",
      country: "Australia",
      feedback:
        "I have been looking everywhere and have settled on Upscayl. It's free, which is a definite bonus, but it also seems better than all the paid ones I tried the trial of!",
    },
  ];

  return (
    <div className="section-spacing    w-11/12	 md:w-full  mx-auto py-32 flex flex-col gap-10 md:gap-16">
      <div
        className={
          "max-w-[925px] w-full md:w-11/12	 mx-auto flex flex-col gap-2 sm:gap-4 md:gap-6"
        }
      >
        <h2 className="heading text-center ">People Seem to like Us</h2>
        <div className="flex mx-auto justify-center gap-2 sm:gap-4">
          <Image
            src={shape.src}
            width={100}
            height={100}
            alt="Shape"
            className="w-[24px] md:w-[34.83px] "
          />
          <div>
            <p className="text-[15.59] md:text-[28.70px] text-secondary font-medium text-center">
              Trusted by 3 Million Users
            </p>
            <div className="flex items-center justify-center gap-2  sm:gap-4 ">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-base md:text-xl text-yellow" />
              ))}
            </div>
          </div>
          <Image
            src={shape.src}
            width={100}
            height={100}
            alt="Shape"
            className="w-[24px] md:w-[34.83px] transform scale-x-[-1]  "
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation]} // Add both modules
        onSlideChange={handleSlideChange} // Handle slide change
        loop={true}
        slidesPerView={2.2}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          1024: {
            slidesPerView: 1.8,
          },
          768: {
            slidesPerView: 1.4,
          },
          280: {
            slidesPerView: 1,
          },
        }}
        className="w-full px-4"
        ref={swiperRef}
      >
        {data.map((el, i) => (
          <SwiperSlide
            key={i}
            className="flex gap-4 opacity-40 cursor-not-allowed items-center bg-white rounded-[19px]"
          >
            <Slide {...el} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className=" hidden md:flex justify-end gap-4  mx-auto max-w-[790px] w-full">
        <button
          className="arrowButton"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <MdOutlineChevronLeft className="text-black hover:text-green text-xl " />
        </button>
        <button
          className="arrowButton"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <MdOutlineChevronRight className="text-black hover:text-green text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
