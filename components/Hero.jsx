import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Category from "@/components/Category";
import SliderHero from "@/components/SliderHero";
import ButtonWithUp from "./ButtonWithUp";
function Hero() {
  return (
    <section className="main__container  h-screen xl:py-[2rem] lg:py-[1.6rem] md:py-[1.3rem] py-[1rem]">
      <div className="bg-[url('../public/hero/hero.jpg')] h-full rounded-xl content__container bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
          <div className="hidden md:flex">
            <ButtonWithUp size="lg" className="uppercase ">
              Book a Call
            </ButtonWithUp>
          </div>
        </div>

        <div className="py-10 md:py-16 flex flex-col justify-between h-full">
          <h1 className="xl:text-8xl md:text-7xl text-5xl sm:text-6xl w-full md:max-w-[80%] xl:max-w-[60%] text-white">
            Capturing beautiful moment inside lens and shutterspeed
          </h1>
          <div className="flex flex-col gap-4  md:flex-row justify-between ">
            {/* category */}
            <Category />

            {/* slider */}
            <SliderHero />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
