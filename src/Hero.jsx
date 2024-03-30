import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";

export default function Hero() {
  return (
    <section className="">
      <Navigation className="w-screen" />

      <div className="h-[96vh] grid w-[100%] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-transparent dark:bg-gray-900 bg-[url('./assets/student1.png')]">
        <div className="mt-[-10%] ml-[8.3%] mr-auto place-self-center lg:col-span-7">
          <h1 className="text-black max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            CUNY Students With Skills You Need
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
            Hire students from NYC to complete your projects in Business, Tech,
            Marketing, Education, Math and Art .
          </p>
          <a
            href="#"
            className="ease-in transition-all inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Sign Up
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="ease-in transition-all inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:text-black hover:border-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Explore
          </a>
        </div>
      </div>

      <div className="absolute bottom-[3.7%] left-0 w-[100%] overflow-hidden leading-[0] rotate-[180deg]">
        <svg
          className="relative block h-[85px] w-[calc(100%+1.3px)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#000000]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
