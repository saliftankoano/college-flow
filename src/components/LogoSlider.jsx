import c1 from "../assets/colleges/baruch-logo.png";
import c2 from "../assets/colleges/bcc-logo.png";
import c3 from "../assets/colleges/bk-logo.png";
import c4 from "../assets/colleges/bmcc-logo.png";

import c6 from "../assets/colleges/ccny-logo.svg";
import c7 from "../assets/colleges/city-tech-logo.png";
import c8 from "../assets/colleges/craig-logo.svg";
import c9 from "../assets/colleges/grad-logo.png";
import c10 from "../assets/colleges/guttman-logo.png";

import c11 from "../assets/colleges/hostos-logo.png";
import c12 from "../assets/colleges/hunter-logo.png";
import c13 from "../assets/colleges/jj-logo.svg";
import c14 from "../assets/colleges/kcc-logo.svg";
import c15 from "../assets/colleges/labor-logo.png";

import c16 from "../assets/colleges/laguardia-logo.svg";
import c17 from "../assets/colleges/law-logo.png";
import c18 from "../assets/colleges/lehman-logo.png";
import c19 from "../assets/colleges/macaulay-logo.png";
import c20 from "../assets/colleges/medgars-logo.png";

import c21 from "../assets/colleges/ph-logo.svg";
import c22 from "../assets/colleges/profesionnal-studies-logo.png";
import c23 from "../assets/colleges/qc-logo.jpeg";
import c24 from "../assets/colleges/qcc-logo.svg";
import c25 from "../assets/colleges/staten-logo.svg";
import c26 from "../assets/colleges/york-logo.svg";
const colleges = [
  c1,
  c2,
  c3,
  c4,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
];
export default function LogoSlider() {
  return (
    <>
      <div className="w-[100%] border-white bg-black whitespace-nowrap overflow-hidden scroll-m-0">
        <article className="format lg:format-lg w-screen p-[1%]">
          <h1 className="text-white text-center w-screen">
            Talent from 25 CUNY Colleges
          </h1>
        </article>
        <div className="inline-flex animate-[slide_120s_infinite_linear]">
          {colleges.map((college, key) => (
            <img
              key={key}
              className="colleges"
              src={college}
              alt="college logo"
            />
          ))}
          {colleges.map((college, key) => (
            <img
              key={key}
              className="colleges"
              src={college}
              alt="college logo"
            />
          ))}
        </div>
        {/* <div className="relative w-[100%] overflow-hidden leading-[0] rotate-[180deg]">
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
        </div> */}
      </div>
    </>
  );
}
