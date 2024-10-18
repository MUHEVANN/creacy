import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Up() {
  return (
    <Link
      href={"/"}
      className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full bg-white text-black  items-center flex justify-center hover:bg-white/90"
    >
      <GoArrowUpRight size={22} />
    </Link>
  );
}

export default Up;
