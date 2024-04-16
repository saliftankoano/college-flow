import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import LogoSlider from "./components/LogoSlider";
import Popular from "./components/Popular";
import Services from "./components/Services";
import ValueProp from "./components/ValueProp";
import Hero from "./Hero";
export default function Home() {
  return (
    <div className="w-[100%] bg-whie">
      <Navigation />
      <Hero />
      <Popular />
      <Footer />
    </div>
  );
}
