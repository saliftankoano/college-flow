import popCircle from "../assets/pop-circle.svg";
import Carousel from "./Carousel";

export default function Popular() {
  return (
    <>
      <div className="w-full bg-white pt-[15%] pb-[2.5%]">
        <img
          className="scale-[.8] mt-[-25%] ml-[-10%] sm:scale-[1] sm:mt-[-15%] sm:ml-0 md:scale-[1] md:mt-[-15%] md:ml-0 lg:scale-[1] lg:mt-[-15%] lg:ml-0"
          src={popCircle}
          alt="yellow semi circle"
        />
        <h2 className="font-custom text-black font-medium text-4xl relative mt-[-31%] mb-[3%] ps-[10%]  md:mb-[10%] lg:text-6xl lg:mt-[-18%]">
          Popular Services
        </h2>
        <Carousel />
        <img
          className="m-auto sm:mt-[15%] lg:mt-[-20%]]"
          src="https://ik.imagekit.io/engineerbf24/The%20Best%20Part.png?updatedAt=1717736889692"
          alt="students laying on the grass daydreaming."
        />
      </div>
    </>
  );
}
