import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aiVideo from "../assets/videos/ai.mp4";
import webVideo from "../assets/videos/web.mp4";
import designVideo from "../assets/videos/design.mp4";
import digitalVideo from "../assets/videos/digital.mp4";
import edVideo from "../assets/videos/education.mp4";
import maVideo from "../assets/videos/marketing.mp4";
import artVideo from "../assets/videos/art.mp4";
import viVideo from "../assets/videos/video.mp4";
import vrVideo from "../assets/videos/vr.mp4";
import bizVideo from "../assets/videos/biz.mp4";

const videos = [
  aiVideo,
  webVideo,
  designVideo,
  digitalVideo,
  edVideo,
  maVideo,
  artVideo,
  viVideo,
  vrVideo,
  bizVideo,
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <>
      <div className="parent bg-white w-full">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {videos.map((video, index) => {
            return (
              <div
                className="slider overflow-hidden mx-[10px] bg-white"
                key={index}
              >
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  className="w-[294px] h-[364px] object-cover rounded-[8px] "
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
