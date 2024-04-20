import logo from "../assets/cfw.svg";
import circle from "../assets/footer-circle.png";
import "../index.css";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#2C3835] h-[35vh]">
        <div className="inside px-[3.8%] pt-[4%] w-full h-[34vh] inline-flex">
          <div className="w-[30.56%]">
            <img src={logo} alt="college flow logo" className="w-[30%]" />
            <img src={circle} alt="circle" className="w-[30%] z-0 ml-[-17%]" />
          </div>
          <div className="line border-s-[1px] h-[150px] border-white opacity-20"></div>
          <div className="center w-[30.56%] block">
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

          <div className="right w-[29%] ps-[10%] ">
            <div className="text-white">
              <form>
                <label
                  htmlFor="search"
                  className="text-lg font-customs font-medium text-white mb-8"
                >
                  Stay up to date
                </label>
                <div className="relative">
                  <input
                    type="search"
                    id="search"
                    className="email-input block w-full p-4 ps-10 text-sm bg-white opacity-20 border border-gray-300 rounded-lg placeholder-white "
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    className=" absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  rounded-lg px-4 py-2 "
                  >
                    <svg
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
          </div>
        </div>
      </footer>
    </>
  );
}
