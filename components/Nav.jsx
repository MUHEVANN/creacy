import Link from "next/link";
import React from "react";
import { links } from "@/public/data";
import { IoIosMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Logo from "./Logo";
import ButtonWithUp from "./ButtonWithUp";
function Nav() {
  return (
    <nav>
      <div className="lg:flex border border-white rounded-full py-[14px] bg-[#B7BBBB] hidden">
        {links.map((link, i) => (
          <Link
            href={link.link}
            key={i}
            className={`px-[20px]  border-white text-white capitalize hover:text-white/80 transition-300 leading-none ${
              i !== links.length - 1 && "border-r"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger className="text-white text-2xl">
            <IoIosMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>

              <SheetDescription className="hidden">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col text-white text-xl mt-3">
              {links.map((link, i) => (
                <Link
                  href={link.link}
                  key={i}
                  className="py-2 capitalize hover:text-white/60 transition-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-5 flex items-center">
                <ButtonWithUp>BOOK A CALL</ButtonWithUp>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Nav;
