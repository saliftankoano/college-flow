import biz from "../assets/biz.jpg";
export default function ValueProp() {
  return (
    <>
      <div className="w-[100%] mt-[8%] inline-flex text-white pl-[4%] pb-[5%]">
        <div className="left w-[45%]  pb-[2.5%]">
          <h1 className="text-4xl font-bold text-[#00BA01] pb-4">
            The best part? Everything.
          </h1>
          <span className="prop1">
            <span className="inline-flex">
              <span className="pt-[.25%]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_2)">
                    <path
                      d="M8.00274 1.50049C4.4179 1.50049 1.50133 4.41706 1.50133 8.0019C1.50133 11.5867 4.4179 14.5033 8.00274 14.5033C11.5876 14.5033 14.5042 11.5867 14.5042 8.0019C14.5042 4.41706 11.5876 1.50049 8.00274 1.50049ZM6.81499 11.2645L4.29569 8.46482L5.03929 7.79561L6.78967 9.74041L10.9409 4.79683L11.7079 5.43885L6.81499 11.2645Z"
                      fill="#00BA01"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <h3 className="text-[#00BA01]"> Stick to your budget</h3>
            </span>
            <p className="pb-5 w-[65%]">
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </span>
          <span className="prop2">
            <span className="inline-flex">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_2)">
                    <path
                      d="M8.00274 1.50049C4.4179 1.50049 1.50133 4.41706 1.50133 8.0019C1.50133 11.5867 4.4179 14.5033 8.00274 14.5033C11.5876 14.5033 14.5042 11.5867 14.5042 8.0019C14.5042 4.41706 11.5876 1.50049 8.00274 1.50049ZM6.81499 11.2645L4.29569 8.46482L5.03929 7.79561L6.78967 9.74041L10.9409 4.79683L11.7079 5.43885L6.81499 11.2645Z"
                      fill="#00BA01"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className="text-[#00BA01]"> Get quality work done quickly</h3>
            </span>
            <p className="pb-5 w-[65%]">
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
          </span>
          <span className="prop3">
            <span className="inline-flex">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_2)">
                    <path
                      d="M8.00274 1.50049C4.4179 1.50049 1.50133 4.41706 1.50133 8.0019C1.50133 11.5867 4.4179 14.5033 8.00274 14.5033C11.5876 14.5033 14.5042 11.5867 14.5042 8.0019C14.5042 4.41706 11.5876 1.50049 8.00274 1.50049ZM6.81499 11.2645L4.29569 8.46482L5.03929 7.79561L6.78967 9.74041L10.9409 4.79683L11.7079 5.43885L6.81499 11.2645Z"
                      fill="#00BA01"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className="text-[#00BA01]"> Pay when you're happy</h3>
            </span>
            <p className="pb-5 w-[65%]">
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
          </span>
        </div>
        <div className="right w-[52%] pr-[3%]">
          <img src={biz} className="w-[100%] rounded-2xl" />
        </div>
      </div>
    </>
  );
}
