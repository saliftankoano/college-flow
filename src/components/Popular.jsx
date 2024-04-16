import Carousel from "./Carousel";

export default function Popular() {
  return (
    <>
      <div className="bg-white pt-[15%] pb-[2.5%]">
        <svg
          width="289"
          height="445"
          viewBox="0 0 289 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[96%]"
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
        <h2 className="font-custom text-black font-medium text-4xl relative mt-[-4%] mb-[3%] ps-[10%]">
          Popular Services
        </h2>

        <Carousel />
      </div>
    </>
  );
}
