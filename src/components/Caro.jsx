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

import { useState } from "react";

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

export default function Caro() {
  const [pos, setPos] = useState(0);

  function moveLeft() {
    setPos((prevPos) => (prevPos === 0 ? videos.length - 5 : prevPos - 1));
  }

  function moveRight() {
    setPos((prevPos) => (prevPos === videos.length - 5 ? 0 : prevPos + 1));
  }
  const getVideoIndex = (index) => {
    return (index + videos.length) % videos.length;
  };

  return (
    <>
      <div className="wrapper relative h-[100vh] w-[100%] bg-white ">
        <div className="inline-flex h-[365px] justify-center items-center">
          <div
            className="z-10 left-arrow relative left-[1.5%] flex items-center justify-center bg-white rounded-[50%] hover:cursor-pointer"
            onClick={moveLeft}
          >
            <svg
              className="w-[35px] h-[35px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.69 6.70978C14.7827 6.80229 14.8562 6.91218 14.9064 7.03315C14.9566 7.15413 14.9824 7.28381 14.9824 7.41478C14.9824 7.54575 14.9566 7.67543 14.9064 7.7964C14.8562 7.91738 14.7827 8.02726 14.69 8.11978L10.81 11.9998L14.69 15.8798C14.877 16.0668 14.982 16.3204 14.982 16.5848C14.982 16.8492 14.877 17.1028 14.69 17.2898C14.503 17.4768 14.2494 17.5818 13.985 17.5818C13.7206 17.5818 13.467 17.4768 13.28 17.2898L8.68998 12.6998C8.59727 12.6073 8.52373 12.4974 8.47355 12.3764C8.42336 12.2554 8.39753 12.1257 8.39753 11.9948C8.39753 11.8638 8.42336 11.7341 8.47355 11.6132C8.52373 11.4922 8.59727 11.3823 8.68998 11.2898L13.28 6.69978C13.66 6.31978 14.3 6.31978 14.69 6.70978Z"
                fill="#0D1717"
                fill-opacity="0.7"
              />
            </svg>
          </div>
          <div className="videos w-full flex transition transform duration-[6000] ease-in">
            {[0, 1, 2, 3, 4].map((offset) => {
              const videoIndex = getVideoIndex(pos + offset);
              const video = videos[videoIndex];
              return (
                <div
                  className=" rounded-[8px]  min-w-[252px] mr-[8px]"
                  key={videoIndex}
                >
                  <div className="Upper-text text-white z-10 absolute mt-[2%] ps-[2%]">
                    <span className="font-light text-white">
                      The best websites {videoIndex}
                    </span>
                    <h1 className="w-[94%] font-extrabold italic ">
                      Web Development
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
              );
            })}
          </div>

          <div
            className=" z-10 right-arrow relative right-[2%] flex items-center justify-center bg-white rounded-[50%] hover:cursor-pointer"
            onClick={moveRight}
          >
            <svg
              className="w-[35px] h-[35px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31002 6.70978C9.21732 6.80229 9.14377 6.91218 9.09359 7.03315C9.04341 7.15413 9.01758 7.28381 9.01758 7.41478C9.01758 7.54575 9.04341 7.67543 9.09359 7.7964C9.14377 7.91738 9.21732 8.02726 9.31002 8.11978L13.19 11.9998L9.31002 15.8798C9.12304 16.0668 9.018 16.3204 9.018 16.5848C9.018 16.8492 9.12304 17.1028 9.31002 17.2898C9.497 17.4768 9.7506 17.5818 10.015 17.5818C10.2794 17.5818 10.533 17.4768 10.72 17.2898L15.31 12.6998C15.4027 12.6073 15.4763 12.4974 15.5265 12.3764C15.5766 12.2554 15.6025 12.1257 15.6025 11.9948C15.6025 11.8638 15.5766 11.7341 15.5265 11.6132C15.4763 11.4922 15.4027 11.3823 15.31 11.2898L10.72 6.69978C10.34 6.31978 9.70002 6.31978 9.31002 6.70978Z"
                fill="#0D1717"
                fill-opacity="0.7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
