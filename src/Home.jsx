import LogoSlider from "./components/LogoSlider";
import Hero from "./Hero";
import ServiceCategory from "./components/ServiceCategory";

export default function Home() {
  const categories = [
    "AI Services",
    "Digital Marketing",
    "Graphics & Design",
    "Programming & Tech",
    "Video & Animation",
    "Writing & Translation",
  ];
  return (
    <div className="w-screen">
      <Hero className="" />
      <LogoSlider className="relative" />
      <ServiceCategory />
    </div>
  );
}
