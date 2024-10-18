import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "./ui/button";

function NavigatorSlide({ sr }) {
  return (
    <div className="flex gap-2 ">
      <Button size="rounded" variant="outline" onClick={() => sr.slidePrev()}>
        <IoIosArrowBack />
      </Button>
      <Button size="rounded" variant="outline" onClick={() => sr.slideNext()}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
}

export default NavigatorSlide;
