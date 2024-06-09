import logo from "../assets/cfw.svg";
import circle from "../assets/footer-circle.png";
import "../index.css";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#2C3835]">
        <div className="inside px-[3.8%] pt-[4%] w-full h-[34vh] inline-flex">
          <div className="w-[30.56%]">
            <img
              fetchPriority="low"
              src={logo}
              alt="college flow logo"
              className="w-[30%]"
            />
            <img
              fetchPriority="low"
              src={circle}
              alt="circle"
              className="w-[30%] z-0 ml-[-17%]"
            />
          </div>
          <div className="line border-s-[1px] h-[150px] border-white opacity-20"></div>
          <div className="center w-[36%] block">
            <div className="links text-center text-white">
              <div className="services w-full flex place-content-evenly">
                <a href="#" className="Home w-1/2">
                  Home
                </a>
                <a href="#" className="About w-1/2">
                  About
                </a>
              </div>
              <div className="mt-8 w-full flex place-content-evenly relative">
                <a href="#" className="Services w-1/2">
                  Services
                </a>
                <a href="#" className="Contact w-1/2">
                  Contact
                </a>
              </div>
            </div>
            <span className="block mt-[15%] text-center text-white">
              Copyright @ 2024 - All right reserved
            </span>
          </div>
          <div className="line border-s-[1px] h-[150px] border-white opacity-20"></div>

          <div className="right ps-[10%] ">
            <div className="text-white">
              <form>
                <label
                  htmlFor="search"
                  className="text-lg block font-customs font-medium text-white mb-2"
                >
                  Stay up to date
                </label>
                <div className="inline-flex">
                  <input
                    type="search"
                    id="search"
                    className="email-input w-full h-[50%]p-4 ps-10 text-sm placeholder-white opacity-20 border border-gray-300 rounded-lg "
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    className="grid grid-cols-1 grid-rows-1 focus:ring-4 focus:outline-none  rounded-lg px-4 py-2 "
                  >
                    <svg
                      className="relative left-[-10%]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_227_2924)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_227_2924">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="social inline-flex  space-x-4 mt-3">
              {/* FACEBOOK LOGO */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.000976562"
                  width="32"
                  height="32"
                  rx="5"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M26.001 16C26.001 10.48 21.521 6 16.001 6C10.481 6 6.00098 10.48 6.00098 16C6.00098 20.84 9.44098 24.87 14.001 25.8V19H12.001V16H14.001V13.5C14.001 11.57 15.571 10 17.501 10H20.001V13H18.001C17.451 13 17.001 13.45 17.001 14V16H20.001V19H17.001V25.95C22.051 25.45 26.001 21.19 26.001 16Z"
                  fill="white"
                />
              </svg>

              {/* X LOGO */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.000976562"
                  width="32"
                  height="32"
                  rx="5"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M21.7521 6.025H24.8189L18.1189 14.4756L26.001 25.975H19.8294L14.9956 19.0007L9.46457 25.975H6.39591L13.5623 16.9361L6.00098 6.025H12.3293L16.6986 12.3998L21.7521 6.025ZM20.6758 23.9493H22.3751L11.4059 7.94429H9.58231L20.6758 23.9493Z"
                  fill="white"
                />
              </svg>

              {/* YT LOGO */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="5"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M14 19L19.19 16L14 13V19ZM25.56 11.17C25.69 11.64 25.78 12.27 25.84 13.07C25.91 13.87 25.94 14.56 25.94 15.16L26 16C26 18.19 25.84 19.8 25.56 20.83C25.31 21.73 24.73 22.31 23.83 22.56C23.36 22.69 22.5 22.78 21.18 22.84C19.88 22.91 18.69 22.94 17.59 22.94L16 23C11.81 23 9.2 22.84 8.17 22.56C7.27 22.31 6.69 21.73 6.44 20.83C6.31 20.36 6.22 19.73 6.16 18.93C6.09 18.13 6.06 17.44 6.06 16.84L6 16C6 13.81 6.16 12.2 6.44 11.17C6.69 10.27 7.27 9.69 8.17 9.44C8.64 9.31 9.5 9.22 10.82 9.16C12.12 9.09 13.31 9.06 14.41 9.06L16 9C20.19 9 22.8 9.16 23.83 9.44C24.73 9.69 25.31 10.27 25.56 11.17Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
