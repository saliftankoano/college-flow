import HeroLanding from "./HeroLanding";
import LogoSlider from "./components/LogoSlider";
import Navigation from "./components/Navigation";
export default function HomePage() {
  return (
    <div className="block">
      <div className="grid grid-cols-['1fr'] grid-rows-['1fr'] place-items-center">
        <HeroLanding className="overlap" />
        <Navigation className="overlap h-screen w-screen top-0" />
      </div>

      <LogoSlider className="relative" />
    </div>
  );
}
