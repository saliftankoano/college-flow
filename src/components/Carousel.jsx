// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  LucideCircleChevronLeft,
  LucideCircleChevronRight,
} from "lucide-react";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <LucideCircleChevronLeft size={42} color="black" />,
  nextArrow: <LucideCircleChevronRight size={42} color="black" />,
};
export default function Carousel() {
  const videos = [
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/ai.mp4?updatedAt=1717745077816",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/web.mp4?updatedAt=1717745073975",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/design.mp4?updatedAt=1717745072242",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/digital.mp4?updatedAt=1717745080852",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/education.mp4?updatedAt=1717745077257",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/consult.mp4?updatedAt=1717745090878",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/art.mp4?updatedAt=1717745072407",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/video.mp4?updatedAt=1717745076025",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/vr.mp4?updatedAt=1717745080897",
    "https://ik.imagekit.io/engineerbf24/college-flow/videos/biz.mp4?updatedAt=1717745073908",
  ];
  const categoryNames = [
    "Artificial Intelligence",
    "Web Development",
    "Design",
    "Digital Marketing",
    "Education",
    "Consulting",
    "Art",
    "Videograpgy",
    "Virtual Reality",
    "Business",
  ];
  const categoryHeading = [
    "AI Made Easy",
    "The Best Websites",
    "Delightful Aesthetics",
    "Grow Your Reach",
    "Learn With Pros ",
    "Receive Guidance",
    "Free Expression",
    "Capture The Moment",
    "Beyond This World",
    "Get To The Bag",
  ];
  return (
    <div className="w-[90%] m-auto">
      <div className="mt-20">
        <Slider {...settings} className="gap-8">
          {videos.map((video, index) => (
            <div
              className="relative rounded-[8px]  max-w-[252px] gap-8"
              key={index}
            >
              <div className="Upper-text text-white z-10 absolute mt-[2%] ps-[2%]">
                <span className="font-light text-white">
                  {categoryHeading[index]}
                </span>
                <h1 className="w-[94%] font-extrabold italic ">
                  {categoryNames[index]}
                </h1>
              </div>
              <div className="video z-0 overflow-hidden">
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  className="w-[100%] h-[364px] object-cover rounded-[8px] "
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
