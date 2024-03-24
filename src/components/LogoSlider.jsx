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
    <div className="logos bg-[#b0b0b0] whitespace-nowrap overflow-hidden scroll-m-0 p-[1%]">
      <article className="format lg:format-lg w-screen p-[1%]">
        <h1 className="text-black text-center w-screen">
          A talented pool from 25 CUNY Colleges
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
    </div>
  );
}
