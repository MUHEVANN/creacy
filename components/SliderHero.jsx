"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderHero } from "@/public/data";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import { useRef, useState } from "react";
function SliderHero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwiper = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="w-full relative md:w-[60%] xl:w-[40%] h-[20vh] md:h-full ">
      <div className="relative md:absolute left-0 md:-right-[2.5rem] bottom-0">
        <div className="mb-3 md:mb-8 text-white flex justify-between max-w-[300px] md:max-w-[70%] items-center">
          <span>01</span>
          <div className="w-[80%] grid grid-cols-3 items-center">
            {sliderHero.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current.slideTo(i)}
                className={`bg-white w-full h-[2px] rounded-full hover:cursor-pointer ${
                  activeIndex === i ? "h-[5px]" : "h-[2px]"
                }`}
              ></button>
            ))}
          </div>
          <span>03</span>
        </div>
        <Swiper
          spaceBetween={5}
          slidesPerView={"auto"}
          onSlideChange={handleSwiper}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {sliderHero.map((slide, i) => (
            <SwiperSlide key={i} className="max-w-[80%]">
              <div className="flex  gap-4 p-2 backdrop-blur-[4px] border border-white rounded-lg">
                <div className="h-[100px] w-[100px] md:w-[150px] md:h-[150px] ">
                  <div className="relative h-full w-full">
                    <Image
                      src={slide.image}
                      fill
                      alt="slider-hero"
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="w-[200px] max-w-max md:max-w-full md:flex-1 flex flex-col justify-between text-white">
                  <h1 className="xl:text-4xl md:text-[2xl] lg:text-3xl">
                    {slide.title}
                  </h1>
                  <span>{slide.desc}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderHero;
