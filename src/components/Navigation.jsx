import { useNavigate } from "react-router-dom";
import bxpLogo from "../assets/cfw.svg";
export default function Navigation() {
  const Navigate = useNavigate();

  function handleSignIn() {
    Navigate("/signin");
  }

  return (
    <nav className="z-40 h-[10%] w-[100%] bg-[#004439] text-white  border-gray-200">
      <div className="bg-[#004439] h-[100%] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            width="96"
            height="51"
            viewBox="0 0 96 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16184 20.1799C6.1885 20.1799 5.31517 20.0532 4.54184 19.7999C3.7685 19.5466 3.1085 19.1732 2.56184 18.6799C2.0285 18.1732 1.61517 17.5799 1.32184 16.8999C1.0285 16.2066 0.881836 15.4399 0.881836 14.5999C0.881836 13.4532 1.1485 12.4666 1.68184 11.6399C2.2285 10.8132 2.98184 10.1799 3.94184 9.73992C4.91517 9.29992 6.04184 9.07992 7.32184 9.07992C8.49517 9.07992 9.52184 9.25992 10.4018 9.61992C11.2818 9.96659 11.9751 10.4532 12.4818 11.0799C12.9885 11.6932 13.2685 12.4132 13.3218 13.2399H9.98184C9.90184 12.8932 9.73517 12.6066 9.48184 12.3799C9.24184 12.1399 8.93517 11.9599 8.56184 11.8399C8.1885 11.7199 7.7685 11.6599 7.30184 11.6599C6.66184 11.6599 6.11517 11.7866 5.66184 12.0399C5.2085 12.2799 4.86184 12.6266 4.62184 13.0799C4.38184 13.5199 4.26184 14.0332 4.26184 14.6199C4.26184 15.2599 4.38184 15.8066 4.62184 16.2599C4.87517 16.7132 5.2285 17.0532 5.68184 17.2799C6.13517 17.5066 6.6685 17.6199 7.28184 17.6199C7.73517 17.6199 8.1485 17.5532 8.52184 17.4199C8.9085 17.2866 9.2285 17.0999 9.48184 16.8599C9.7485 16.6199 9.9285 16.3266 10.0218 15.9799H13.3818C13.3151 16.8466 12.9951 17.5932 12.4218 18.2199C11.8485 18.8466 11.1018 19.3332 10.1818 19.6799C9.27517 20.0132 8.2685 20.1799 7.16184 20.1799ZM20.877 20.1999C19.9036 20.1999 19.0236 20.0799 18.237 19.8399C17.4503 19.5866 16.7703 19.2199 16.197 18.7399C15.6236 18.2599 15.1836 17.6799 14.877 16.9999C14.5703 16.3066 14.417 15.5199 14.417 14.6399C14.417 13.4799 14.6836 12.4866 15.217 11.6599C15.7636 10.8332 16.517 10.1999 17.477 9.75992C18.4503 9.30659 19.5836 9.07992 20.877 9.07992C21.837 9.07992 22.7103 9.20659 23.497 9.45992C24.297 9.71325 24.977 10.0799 25.537 10.5599C26.1103 11.0266 26.5503 11.6066 26.857 12.2999C27.1636 12.9932 27.317 13.7732 27.317 14.6399C27.317 15.7866 27.0503 16.7799 26.517 17.6199C25.9836 18.4599 25.237 19.0999 24.277 19.5399C23.317 19.9799 22.1836 20.1999 20.877 20.1999ZM20.877 17.6199C21.5303 17.6199 22.0836 17.4999 22.537 17.2599C23.0036 17.0066 23.357 16.6599 23.597 16.2199C23.837 15.7666 23.957 15.2399 23.957 14.6399C23.957 14.1866 23.8903 13.7799 23.757 13.4199C23.6236 13.0466 23.4236 12.7332 23.157 12.4799C22.8903 12.2132 22.5636 12.0132 22.177 11.8799C21.8036 11.7332 21.3703 11.6599 20.877 11.6599C20.2236 11.6599 19.6636 11.7799 19.197 12.0199C18.7436 12.2599 18.397 12.6066 18.157 13.0599C17.917 13.4999 17.797 14.0266 17.797 14.6399C17.797 15.0932 17.8636 15.5066 17.997 15.8799C18.1436 16.2399 18.3436 16.5532 18.597 16.8199C18.8636 17.0732 19.1836 17.2732 19.557 17.4199C19.9436 17.5532 20.3836 17.6199 20.877 17.6199ZM28.8809 19.9999V5.41992H32.2409V19.9999H28.8809ZM34.2324 19.9999V5.41992H37.5924V19.9999H34.2324ZM45.564 20.1799C44.2573 20.1799 43.124 19.9599 42.164 19.5199C41.204 19.0799 40.4573 18.4532 39.924 17.6399C39.3907 16.8266 39.124 15.8466 39.124 14.6999C39.124 13.5132 39.3907 12.5066 39.924 11.6799C40.4707 10.8399 41.2173 10.1999 42.164 9.75992C43.124 9.30659 44.244 9.07992 45.524 9.07992C46.884 9.07992 48.0373 9.33325 48.984 9.83992C49.944 10.3332 50.6573 11.0466 51.124 11.9799C51.604 12.9132 51.7973 14.0399 51.704 15.3599H42.504C42.5173 15.8799 42.6507 16.3332 42.904 16.7199C43.1707 17.1066 43.5307 17.4066 43.984 17.6199C44.4507 17.8199 45.004 17.9199 45.644 17.9199C46.3773 17.9199 46.9973 17.7999 47.504 17.5599C48.024 17.3066 48.3573 16.9799 48.504 16.5799H51.684C51.5907 17.2866 51.264 17.9132 50.704 18.4599C50.1573 19.0066 49.4373 19.4332 48.544 19.7399C47.664 20.0332 46.6707 20.1799 45.564 20.1799ZM42.424 13.6999L42.304 13.5199H48.544L48.384 13.6799C48.3707 13.2132 48.2507 12.8066 48.024 12.4599C47.7973 12.1132 47.4707 11.8466 47.044 11.6599C46.6307 11.4732 46.1173 11.3799 45.504 11.3799C44.9173 11.3799 44.404 11.4732 43.964 11.6599C43.524 11.8332 43.1707 12.0932 42.904 12.4399C42.6507 12.7866 42.4907 13.2066 42.424 13.6999ZM58.7759 23.5399C57.6159 23.5399 56.6292 23.3999 55.8159 23.1199C55.0159 22.8399 54.3892 22.4399 53.9359 21.9199C53.4959 21.3999 53.2425 20.7932 53.1759 20.0999H56.3759C56.4425 20.3666 56.5759 20.5866 56.7759 20.7599C56.9892 20.9466 57.2692 21.0866 57.6159 21.1799C57.9625 21.2732 58.3692 21.3199 58.8359 21.3199C59.4092 21.3199 59.9092 21.2466 60.3359 21.0999C60.7759 20.9666 61.1092 20.7399 61.3359 20.4199C61.5759 20.0999 61.6959 19.6799 61.6959 19.1599V17.4599H61.5559C61.2359 18.0599 60.7225 18.5199 60.0159 18.8399C59.3225 19.1599 58.5692 19.3199 57.7559 19.3199C57.0092 19.3199 56.3292 19.1999 55.7159 18.9599C55.1025 18.7066 54.5759 18.3532 54.1359 17.8999C53.7092 17.4466 53.3759 16.9132 53.1359 16.2999C52.9092 15.6732 52.7959 14.9732 52.7959 14.1999C52.7959 13.1732 53.0092 12.2732 53.4359 11.4999C53.8625 10.7266 54.4492 10.1332 55.1959 9.71992C55.9559 9.29325 56.8292 9.07992 57.8159 9.07992C58.6825 9.07992 59.4492 9.24659 60.1159 9.57992C60.7825 9.89992 61.2759 10.3399 61.5959 10.8999H61.7359L61.8959 9.27992H65.0559V18.7399C65.0559 19.5132 64.9225 20.1932 64.6559 20.7799C64.4025 21.3799 64.0159 21.8866 63.4959 22.2999C62.9759 22.7132 62.3225 23.0199 61.5359 23.2199C60.7625 23.4332 59.8425 23.5399 58.7759 23.5399ZM58.9359 16.8599C59.5092 16.8599 59.9959 16.7599 60.3959 16.5599C60.8092 16.3466 61.1292 16.0599 61.3559 15.6999C61.5825 15.3266 61.6959 14.9066 61.6959 14.4399V13.9799C61.6959 13.4999 61.5825 13.0732 61.3559 12.6999C61.1292 12.3266 60.8092 12.0332 60.3959 11.8199C59.9959 11.6066 59.5225 11.4999 58.9759 11.4999C58.4159 11.4999 57.9225 11.6132 57.4959 11.8399C57.0825 12.0532 56.7625 12.3599 56.5359 12.7599C56.3092 13.1599 56.1959 13.6332 56.1959 14.1799C56.1959 14.7399 56.3092 15.2199 56.5359 15.6199C56.7625 16.0199 57.0825 16.3266 57.4959 16.5399C57.9092 16.7532 58.3892 16.8599 58.9359 16.8599ZM72.9663 20.1799C71.6597 20.1799 70.5263 19.9599 69.5663 19.5199C68.6063 19.0799 67.8597 18.4532 67.3263 17.6399C66.793 16.8266 66.5263 15.8466 66.5263 14.6999C66.5263 13.5132 66.793 12.5066 67.3263 11.6799C67.873 10.8399 68.6197 10.1999 69.5663 9.75992C70.5263 9.30659 71.6463 9.07992 72.9263 9.07992C74.2863 9.07992 75.4397 9.33325 76.3863 9.83992C77.3463 10.3332 78.0597 11.0466 78.5263 11.9799C79.0063 12.9132 79.1997 14.0399 79.1063 15.3599H69.9063C69.9197 15.8799 70.053 16.3332 70.3063 16.7199C70.573 17.1066 70.933 17.4066 71.3863 17.6199C71.853 17.8199 72.4063 17.9199 73.0463 17.9199C73.7797 17.9199 74.3997 17.7999 74.9063 17.5599C75.4263 17.3066 75.7597 16.9799 75.9063 16.5799H79.0863C78.993 17.2866 78.6663 17.9132 78.1063 18.4599C77.5597 19.0066 76.8397 19.4332 75.9463 19.7399C75.0663 20.0332 74.073 20.1799 72.9663 20.1799ZM69.8263 13.6999L69.7063 13.5199H75.9463L75.7863 13.6799C75.773 13.2132 75.653 12.8066 75.4263 12.4599C75.1997 12.1132 74.873 11.8466 74.4463 11.6599C74.033 11.4732 73.5197 11.3799 72.9063 11.3799C72.3197 11.3799 71.8063 11.4732 71.3663 11.6599C70.9263 11.8332 70.573 12.0932 70.3063 12.4399C70.053 12.7866 69.893 13.2066 69.8263 13.6999Z"
              fill="white"
            />
            <path
              d="M52.3663 42.9999V34.8199H50.4863V32.2799H52.3663V31.5599C52.3663 30.4799 52.7063 29.6866 53.3863 29.1799C54.0796 28.6732 55.0796 28.4199 56.3863 28.4199H58.3463V30.6199H56.9063C56.5196 30.6199 56.2263 30.7066 56.0263 30.8799C55.8396 31.0532 55.7463 31.3132 55.7463 31.6599V32.2799H58.1463V34.8199H55.7463V42.9999H52.3663ZM59.5666 42.9999V28.4199H62.9266V42.9999H59.5666ZM70.9182 43.1999C69.9448 43.1999 69.0648 43.0799 68.2782 42.8399C67.4915 42.5866 66.8115 42.2199 66.2382 41.7399C65.6648 41.2599 65.2248 40.6799 64.9182 39.9999C64.6115 39.3066 64.4582 38.5199 64.4582 37.6399C64.4582 36.4799 64.7248 35.4866 65.2582 34.6599C65.8048 33.8332 66.5582 33.1999 67.5182 32.7599C68.4915 32.3066 69.6248 32.0799 70.9182 32.0799C71.8782 32.0799 72.7515 32.2066 73.5382 32.4599C74.3382 32.7132 75.0182 33.0799 75.5782 33.5599C76.1515 34.0266 76.5915 34.6066 76.8982 35.2999C77.2048 35.9932 77.3582 36.7732 77.3582 37.6399C77.3582 38.7866 77.0915 39.7799 76.5582 40.6199C76.0248 41.4599 75.2782 42.0999 74.3182 42.5399C73.3582 42.9799 72.2248 43.1999 70.9182 43.1999ZM70.9182 40.6199C71.5715 40.6199 72.1248 40.4999 72.5782 40.2599C73.0448 40.0066 73.3982 39.6599 73.6382 39.2199C73.8782 38.7666 73.9982 38.2399 73.9982 37.6399C73.9982 37.1866 73.9315 36.7799 73.7982 36.4199C73.6648 36.0466 73.4648 35.7332 73.1982 35.4799C72.9315 35.2132 72.6048 35.0132 72.2182 34.8799C71.8448 34.7332 71.4115 34.6599 70.9182 34.6599C70.2648 34.6599 69.7048 34.7799 69.2382 35.0199C68.7848 35.2599 68.4382 35.6066 68.1982 36.0599C67.9582 36.4999 67.8382 37.0266 67.8382 37.6399C67.8382 38.0932 67.9048 38.5066 68.0382 38.8799C68.1848 39.2399 68.3848 39.5532 68.6382 39.8199C68.9048 40.0732 69.2248 40.2732 69.5982 40.4199C69.9848 40.5532 70.4248 40.6199 70.9182 40.6199ZM80.7886 42.9999L77.7086 32.2799H80.9086L83.0286 40.1399H83.1686L85.1286 32.2799H88.4486L90.3686 40.1999H90.4486L92.6286 32.2799H95.6886L92.5886 42.9999H88.5486L86.6886 36.0199H86.5886L84.7686 42.9999H80.7886Z"
              fill="white"
            />
          </svg>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleSignIn}
            type="button"
            className="ease-in transition-all text-black bg-[#E9E920] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center"
          >
            Sign In
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full h-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#66000000] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-[#E9E920] bg-blue-700 rounded md:bg-transparent md:text-white "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white opacity-60 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white opacity-60 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white opacity-60 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
