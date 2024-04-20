import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import Services from "./components/Services";
import ValueProp from "./components/ValueProp";
import Hero from "./Hero";
import Logos from "./components/Logos";
import Best from "./components/Best";
export default function Home() {
  return (
    <div className="w-[100%] bg-whie">
      <Navigation />
      <Hero />
      <Popular />
      <Logos />
      <Best />
      <Footer />
    </div>
  );
}
