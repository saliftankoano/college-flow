import React from "react";
import heroMan from "./assets/hero-man.png";
export default function Hero() {
  return (
    <>
      <section className="pt-[10%] bg-[#004439] w-full">
        <div className=" h-[88vh] grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-[#004439]">
          {/* Man Big circle */}
          <svg
            width="801"
            height="686"
            viewBox="0 0 801 686"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bigHeroCircle absolute top-[18%] right-[0%] z-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M725.491 686C772.958 614.832 800.925 527.447 800.925 433C800.925 193.861 621.632 0 400.462 0C179.293 0 0 193.861 0 433C0 527.447 27.9666 614.832 75.4342 686H725.491Z"
              fill="#00352C"
            />
            <ellipse cx="400" cy="412" rx="245" ry="263" fill="#023B30" />
          </svg>

          {/* Bottom circle to float */}

          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[15%] z-0"
          >
            <circle cx="6.5" cy="6.5" r="6.5" fill="#E9E920" />
          </svg>
          {/* Top Left circle to float */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[40%] top-[30%] z-0"
          >
            <circle cx="6.5" cy="6.5" r="6.5" fill="#E9E920" />
          </svg>
          {/* Top Right circle to float */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[18%] top-[17%] z-0 animate-moveDiagonal"
          >
            <circle cx="6.5" cy="6.5" r="6.5" fill="#E9E920" />
          </svg>
          {/* Hero Man */}
          <img
            src={heroMan}
            alt="college black male student with a radiant smile"
            className=" scale-[1] absolute top-[10%] right-[7%] z-10"
          />
          {/* CUNY circle */}
          <svg
            width="240"
            height="320"
            viewBox="0 0 240 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="leftHeroCircle absolute left-[-.1%] z-0 top-[15%]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M219.72 237.904C262.745 160.738 235.069 63.3049 157.904 20.2798C80.7385 -22.7453 -16.6951 4.93082 -59.7202 82.0962C-102.745 159.262 -75.0692 256.695 2.09618 299.72C79.2615 342.745 176.695 315.069 219.72 237.904ZM79.9367 239.947C124.111 239.947 159.922 204.136 159.922 159.961C159.922 115.786 124.111 79.9757 79.9367 79.9757C35.7619 79.9757 -0.048851 115.786 -0.048851 159.961C-0.048851 204.136 35.7619 239.947 79.9367 239.947Z"
              fill="#002720"
              fillOpacity="0.38"
            />
          </svg>
          {/* Man Shoulder circle */}
          <svg
            width="320"
            height="320"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" rightHerocircle absolute right-[2%] z-0 top-[50%]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299.72 237.904C342.745 160.738 315.069 63.3049 237.904 20.2798C160.738 -22.7453 63.3049 4.93082 20.2798 82.0962C-22.7453 159.262 4.93083 256.695 82.0962 299.72C159.262 342.745 256.695 315.069 299.72 237.904ZM159.937 239.946C204.111 239.946 239.922 204.135 239.922 159.96C239.922 115.785 204.111 79.9747 159.937 79.9747C115.762 79.9747 79.9511 115.785 79.9511 159.96C79.9511 204.135 115.762 239.946 159.937 239.946Z"
              fill="url(#paint0_linear_305_181)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_305_181"
                x1="20.2796"
                y1="82.0959"
                x2="299.72"
                y2="237.904"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D52C" />
                <stop offset="0.0001" stopColor="#D5D52C" />
                <stop offset="1" stopColor="#D5D52C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="z-10 mt-[-15%] ml-[8.3%] mr-auto place-self-center lg:col-span-7">
            <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              CUNY Students With Skills You Need
            </h1>
            <p className="max-w-2xl mb-6 text-[#fff] italic opacity-60 lg:mb-8 md:text-lg lg:text-xl">
              Hire students from NYC to complete your projects in Business,
              Tech, Marketing, Education, Math and Art .
            </p>
            <a
              href="/signup"
              className="ease-in transition-all inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-2xl bg-[#E9E920] hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="numbers w-[450px] flex place-content-between mt-[8.5%]">
              <div className="students">
                <span className="text-3xl text-white font-bold">260 +</span>
                <hr className="mt-[5.5px] border-[#E9E920] border-2 mb-1" />
                <span className="text-xl text-white opacity-60">Students</span>
              </div>
              <div className="projects">
                <span className="text-3xl text-white font-bold">100+</span>
                <hr className="mt-[5.5px] border-[#E9E920] border-2 mb-1" />
                <span className="text-xl text-white opacity-60">Projects</span>
              </div>
              <div className="clients">
                <span className="text-3xl text-white font-bold">300+</span>
                <hr className="mt-[5.5px] border-[#E9E920] border-2 mb-1" />
                <span className="text-xl text-white opacity-60">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
