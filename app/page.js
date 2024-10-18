import About from "@/components/About";
import Awards from "@/components/Awards";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
