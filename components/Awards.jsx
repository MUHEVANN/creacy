import React from "react";
import SectionName from "./SectionName";
import BoldSpan from "./BoldSpan";
import AwardsHover from "./AwardsHover";

function Awards() {
  return (
    <section className="main__container py-6">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-6">
        <SectionName number={"(04)"}>Awards</SectionName>
        <h3 className="text-3xl sm:text-4xl md:text-6xl max-w-[900px] font-third ">
          <BoldSpan>Award</BoldSpan> is a pixel that{" "}
          <BoldSpan>reflecting</BoldSpan> our ongoing dedication to{" "}
          <BoldSpan>innovation</BoldSpan>
          and excellence
        </h3>
      </div>

      <div>
        <AwardsHover />
      </div>
    </section>
  );
}

export default Awards;
