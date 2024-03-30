import Footer from "./components/Footer";
import LogoSlider from "./components/LogoSlider";
import Services from "./components/Services";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="w-[100%] bg-[#000000]">
      <Hero />
      <LogoSlider />
      <Services />
      <Footer />
    </div>
  );
}
