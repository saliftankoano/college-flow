import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="h-full">
        <Navigation />
        <Hero />
        <Logos />
        <Footer />
      </div>
    </>
  );
}
