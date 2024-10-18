"use client";
import useAwardsStore from "@/store/awardsStore";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function HoverTrigger({ children, year, i }) {
  const { setIsHover, setIdHover } = useAwardsStore();
  const handleHover = (i) => {
    setIsHover(true);
    setIdHover(i);
  };
  return (
    <motion.div
      onHoverStart={() => handleHover(i)}
      onHoverEnd={() => setIsHover(false)}
      onClick={() => handleHover(i)}
      className="flex justify-between  transition-300 hover:cursor-pointer hover:rounded-lg border-b  hover:bg-secondary p-5 group"
    >
      <span className="text-xl">{year}</span>
      <h2 className="text-3xl capitalize font-third max-w-[300px] ">
        {children}
      </h2>
      <Button
        size="icon"
        className="group-hover:-rotate-[45deg] transition-300 bg-transparent border text-white group-hover:bg-white group-hover:text-black "
      >
        <FaArrowRightLong />
      </Button>
    </motion.div>
  );
}

export default HoverTrigger;
