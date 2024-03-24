import HeroLanding from "./HeroLanding";
import LogoSlider from "./components/LogoSlider";
import Navigation from "./components/Navigation";
export default function Home1() {
  return (
    <div className="w-screen">
      <div className="relative h-[97vh]">
        <Navigation className="" />
        <HeroLanding className="" />
      </div>
      <LogoSlider className="relative" />
    </div>
  );
}
