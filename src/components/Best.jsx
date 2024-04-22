import best from "../assets/best.png";
export default function Best() {
  return (
    <>
      <div className="bg-white grid grid-cols-12 grid-rows-2">
        <svg
          width="289"
          height="445"
          viewBox="0 0 289 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="row-start-1 col-start-1 mt-[-30%]"
        >
          <defs>
            <linearGradient
              id="paint0_linear_204_425"
              x1="156.674"
              y1="90.2951"
              x2="-76.6821"
              y2="431.656"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9E920" />
              <stop offset="0.924756" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_204_425"
              x1="252.932"
              y1="80.457"
              x2="252.932"
              y2="446.457"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9E920" />
              <stop offset="1" stopColor="#E9E920" stopOpacity="0.19" />
            </linearGradient>
          </defs>
          <mask
            id="mask0_204_425"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="-94"
            y="62"
            width="321"
            height="321"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M137.759 365.544C216.826 326.122 248.964 230.068 209.542 151.001C170.12 71.9347 74.0659 39.7963 -5.00084 79.2184C-84.0676 118.64 -116.206 214.695 -76.7838 293.761C-37.3618 372.828 58.6924 404.966 137.759 365.544ZM21.2097 288.345C57.6778 313.275 107.451 303.921 132.38 267.453C157.31 230.985 147.957 181.212 111.488 156.283C75.0204 131.353 25.2477 140.707 0.317884 177.175C-24.6119 213.643 -15.2583 263.415 21.2097 288.345Z"
              fill="url(#paint0_linear_204_425)"
              fillOpacity="0.3"
            />
          </mask>
          <g mask="url(#mask0_204_425)">
            <rect
              x="170.192"
              y="80.457"
              width="165.479"
              height="366"
              transform="rotate(34.3568 170.192 80.457)"
              fill="url(#paint1_linear_204_425)"
            />
          </g>
        </svg>

        {/* BEST Image */}
        <img
          className="col-start-2 col-end-12 row-start-1 row-end-9 z-10 pt-[17%]"
          src={best}
        />
        {/* THE BEST TEXT */}
        <div className="col-start-1 col-end-1 z-10 w-[400%] h-[30%] pt-3 ml-[160%] mt-[-70%]">
          <span className="text-white text-6xl">The Best Part?</span>
          <span className="text-[#E9E920] text-6xl">Everything.</span>
          <button className="bg-[#E9E920] mt-[6%] w-[35%] h-[50%] text-[#00392F] text-xl font-bold rounded-full ">
            Get Started
          </button>
        </div>
        <div className=" h-[28%] w-[125%] prop 1 text-white text-base col-start-6 col-end-8 row-start-1 row-end-1 z-10 mt-[135%] ml-[65%]">
          <h2 className="text-lg font-semibold text-[#E9E920]">
            1. Stick to your budget
          </h2>
          <div className="ms-[8%] mt-2">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </div>
          <div className="line ms-[8%] mt-4 border-b-[2px] h-[3px] border-[#E9E920] w-1/3"></div>
        </div>
        <div className=" h-[28%] w-[125%] prop 2 text-white text-base col-start-8 col-end-10 row-start-2 row-end-2 z-10 mt-[9%] ml-[47%]">
          <h2 className="text-lg font-semibold text-[#E9E920]">
            2. Get quality work done quickly
          </h2>
          <div className="ms-[8%] mt-5">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </div>
          <div className="line ms-[8%] mt-4 border-b-[2px] h-[3px] border-[#E9E920] w-1/3"></div>
        </div>
        <div className=" h-[28%] w-[125%] prop 3 text-white text-base col-start-6 col-end-8 row-start-2 row-end-2 z-10 mt-[80%] ml-[65%]">
          <h2 className="text-lg font-semibold text-[#E9E920]">
            3. Pay when you’re happy
          </h2>
          <div className="ms-[8%] mt-2">
            Upfront quotes mean no surprises. Paymentsonly get releasedwhen you
            approve.
          </div>
          <div className="line ms-[8%] mt-4 border-b-[2px] h-[3px] border-[#E9E920] w-1/3"></div>
        </div>
      </div>
    </>
  );
}
