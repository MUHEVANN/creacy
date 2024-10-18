import BoldSpan from "./BoldSpan";
import ButtonWithUp from "./ButtonWithUp";
import SectionName from "./SectionName";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 main__container gap-8 py-[4rem] ">
      <div className="flex flex-col gap-6 justify-between">
        <SectionName number="(01)">About</SectionName>
        <div>
          <p className="capitalize text-white/60 max-w-[450px]">
            We Ardently Strive To Encapsulate Life&apos;s Most Precious Moments,
            Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic With
            The Timeless Essence Of The Human Experience.
          </p>
        </div>
      </div>
      <div>
        <h1 className="big-text font-third text-white/60">
          <BoldSpan>Photography</BoldSpan> is driven by a deep passion for{" "}
          <BoldSpan>capturing life&apos;s</BoldSpan> most{" "}
          <BoldSpan>precious moments</BoldSpan> with artistry and a touch of
          magic
        </h1>
        <ButtonWithUp
          size="lg"
          variant="outline"
          className="text-[18px] uppercase"
          containerStyle={"mt-12"}
        >
          Learn More
        </ButtonWithUp>
      </div>
    </div>
  );
}

export default About;
