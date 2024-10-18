import React from "react";
import SectionName from "./SectionName";
import { category, categorySlider } from "@/public/data";
import ExpertiseSlider from "./ExpertiseSlider";
import ExpertiseCategory from "./ExpertiseCategory";
function Expertise() {
  return (
    <div className="main__container">
      <div className="content__container bg-secondary rounded-lg h-screen flex flex-col overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="flex flex-col justify-between">
            <SectionName number={"(02)"}>Our Expertise</SectionName>
            <h3 className="big-text">
              When moments captured every dreams crafted into beautiful reality
            </h3>
          </div>

          <div>
            <ExpertiseCategory />
          </div>
        </div>
        <ExpertiseSlider />
      </div>
    </div>
  );
}

export default Expertise;
