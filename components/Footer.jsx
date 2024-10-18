import Link from "next/link";
import BoldSpan from "./BoldSpan";
import ButtonWithUp from "./ButtonWithUp";
import Logo from "./Logo";
import SectionName from "./SectionName";
import { links } from "@/public/data";
import CopyRight from "./CopyRight";
function Footer() {
  return (
    <footer className="main__container pb-5 mt-12">
      <div className="bg-secondary content__container rounded">
        <SectionName number={"(05)"}>Contact Us</SectionName>

        <div className="mt-6 mb-12 flex justify-between ">
          <h3 className="big-text font-third ">
            Lets <BoldSpan>discus</BoldSpan> your vision{" "}
            <span className="flex gap-2">
              <ButtonWithUp size="lg" className="font-primary">
                Lets Talk
              </ButtonWithUp>{" "}
              <BoldSpan>with us</BoldSpan>
            </span>
          </h3>
          <ul className="flex  flex-col items-end">
            <li>Sendangrejo, Karanganom,</li>
            <li>Klaten Utara, Klaten,</li>
            <li>087812418286,</li>
            <li>muhammadevankusyanto@gmail.com,</li>
          </ul>
        </div>

        <div className="pt-6 border-t flex items-center justify-between">
          <Logo />
          <div className="flex gap-12">
            {links.map((link, i) => (
              <Link
                href={link.link}
                key={i}
                className="capitalize text-white/60 hover:text-white transition-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <CopyRight />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
