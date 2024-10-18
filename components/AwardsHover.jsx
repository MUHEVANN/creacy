import HoverTrigger from "./HoverTrigger";
import { awardsHover } from "@/public/data";
import TriggerImage from "./TriggerImage";
function AwardsHover() {
  return (
    <div className="flex gap-8 flex-col lg:flex-row">
      {/* hover trigger */}
      <div className="flex-1 flex flex-col order-2 lg:order-none">
        {awardsHover.map((item, i) => (
          <HoverTrigger year={item.year} i={i} key={i}>
            {item.title}
          </HoverTrigger>
        ))}
      </div>

      {/* image */}
      <div className="lg:w-[30%] ">
        <TriggerImage />
      </div>
    </div>
  );
}

export default AwardsHover;
