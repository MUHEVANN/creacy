"use client";
import React, { useEffect, useRef, useState } from "react";
import { categorySlider } from "@/public/data";
import useCategoryStore from "@/store/categoryStore";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import NavigatorSlide from "./NavigatorSlide";
function ExpertiseSlider() {
  const [categoryTitle, setCategoryTitle] = useState([]);
  const [categoryImage, setCategoryImage] = useState([]);

  const { category } = useCategoryStore();

  const swiperRef = useRef(null);
  useEffect(() => {
    const categoryItems = categorySlider.find(
      (item) => item.category === category
    );

    setCategoryTitle(categoryItems.items[0]);
    setCategoryImage(categoryItems.items);
  }, [category]);

  const handleSlideChange = (swiper) => {
    const categoryItems = categorySlider.find(
      (item) => item.category === category
    );
    setCategoryTitle(categoryItems.items[swiper.activeIndex]);
    console.log(swiper);
  };
  return (
    <div className="flex-1 ">
      {categorySlider
        .filter((item) => item.category === category)
        .map((item, i) => (
          <div
            className="flex flex-col md:flex-row gap-4 w-full h-full "
            key={i}
          >
            <div className="w-full md:w-[30%] flex md:items-end md:mb-[6.5rem] ">
              {categoryTitle && (
                <div className="">
                  <h3 className="text-3xl">{categoryTitle.title}</h3>
                  <h3>{categoryTitle.desc}</h3>
                </div>
              )}
            </div>
            <div className="w-full md:w-[70%] h-full relative ">
              <div className=" w-full h-full  md:absolute top-0 relative md:-right-[2.5rem]">
                <Swiper
                  onSlideChange={handleSlideChange}
                  slidesPerView={"auto"}
                  spaceBetween={50}
                  className="w-full h-[85%] md:h-[90%] "
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  {categoryImage.map((item, i) => (
                    <SwiperSlide className="text-black max-w-[70%]" key={i}>
                      <div className="w-full h-full relative rounded-lg">
                        <Image
                          src={item.image}
                          alt="expertise"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="md:h-[10%] h-[15%]   flex items-end">
                  <NavigatorSlide sr={swiperRef.current} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ExpertiseSlider;
