import BoldSpan from "./BoldSpan";
import ButtonWithUp from "./ButtonWithUp";
import SectionName from "./SectionName";
import { works } from "@/public/data";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
function Work() {
  return (
    <section className="main__container py-[6rem]">
      {/* name section */}
      <div className="mb-6 md:mb-12">
        <SectionName number="(03)">Our Work</SectionName>
      </div>
      <div className="flex justify-between gap-8 flex-col lg:flex-row">
        {/* explore */}
        <h3 className="big-text text-white/60 font-third ">
          <BoldSpan>Explore</BoldSpan> the artistry and precision behind{" "}
          <BoldSpan>our portfolio</BoldSpan> of timeless photography
        </h3>
        <div className="flex flex-col justify-between gap-4">
          <p className="text-xl text-white/60 max-w-[500px]">
            Embark On A Visual Journey Through Our Cherished Moments Captured
            With Creativity And Precision. Each Image In Our Portfolio Reflects
            Our Dedication To Preserving Life&apos;s Beauty And Significance.
          </p>
          <ButtonWithUp size="lg" variant="outline">
            Explore
          </ButtonWithUp>
        </div>
      </div>

      {/* hover card */}
      <div className="flex gap-4 mt-24">
        {works.map((work, i) => (
          <div
            className={`flex-1 w-full hover:grow-[2] hover:cursor-pointer transition-300 min-h-[600px] rounded-lg bg-center bg-cover bg-no-repeat group relative`}
            key={i}
            style={{ backgroundImage: `url(${work.image})` }}
          >
            {/* category */}
            <div className="absolute right-5 top-5 max-w-[300px] flex flex-wrap  justify-end gap-3">
              {work.category.map((category, i) => (
                <Button
                  key={i}
                  className="bg-white/20 opacity-0 group-hover:opacity-100 transition-300"
                  variant="outline"
                >
                  {category}
                </Button>
              ))}
            </div>
            {/* title */}
            <div className="h-full p-5 flex flex-col justify-end gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl max-w-[400px] translate-y-[3rem] group-hover:translate-y-0 transition-300">
                  {work.title}
                </h1>
                <p className="max-w-[400px] opacity-0 group-hover:opacity-100 transition-300">
                  {work.desc}
                </p>
              </div>
              <Button className="justify-between" size="lg" variant="outline">
                More Detail{" "}
                <span>
                  <FaChevronRight />
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
