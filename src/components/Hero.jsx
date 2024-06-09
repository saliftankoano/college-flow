import { useNavigate } from "react-router-dom";
import cunyCircle from "../assets/cuny-circle.svg";
import Popular from "./Popular";

export default function Hero() {
  const navigate = useNavigate();
  function signUp() {
    navigate("/signup");
  }
  return (
    <>
      <section className="greenSection w-full h-[90%] bg-[#004439]">
        <div className="left ">
          <div className="mt-1 inline-flex sm:inline-flex">
            <img
              className="w-[30%] xl:scale-[.6] xl:translate-x-[-20%] mt-[-6%]"
              src={cunyCircle}
              alt="small circle"
            />
            <h1 className="w-[65%] ml-[-7%] h-[90%] mt-[10%] flex justify-center items-center text-center text-white font-extrabold tracking-tight leading-none text-[2.2rem] sm:text-6xl md:text-6xl lg:w-[60%] lg:text-6xl lg:text-center xl:text-left xl:ml-[-24%] xl:z-10 xl:w-[50%]">
              CUNY Students With Skills You Need
            </h1>
          </div>
          <p className="w-[90%] ml-[5%] text-[#fff] text-center italic opacity-60 xl:w-[44%] xl:mt-[-12%] xl:ml-[5.5%] xl:text-left xl:text-xl">
            Hire students from NYC to complete your projects in Business, Tech,
            Marketing, Education, Math and Art .
          </p>
          <div className="getStarted-wrapper mt-4 w-full flex justify-center items-center xl:w-[12%] xl:ml-[5.5%]">
            <div
              onClick={signUp}
              className="ease-in transition-all inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-2xl bg-[#E9E920] hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
            </div>
          </div>

          <div className="numbers w-[95%] mx-auto mt-4 flex place-content-between xl:w-[25%] xl:ml-[5.5%] xl:mt-[4%]">
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
        <div className="right mt-6 inline-flex justify-center items-center sm:w-[90%] sm:mx-[5%] md:inline-flex md:w-[90%] md:mx-[5%] lg:inline-flex lg:w-[90%] lg:mx-[5%] xl:flex xl:justify-end xl:mt-[-35%]">
          <img
            width="800px"
            height="480px"
            fetchPriority="high"
            src="https://ik.imagekit.io/engineerbf24/college-flow/hero-landing.png?updatedAt=1717742815178"
            srcSet="https://ik.imagekit.io/engineerbf24/tr:w-501,h-485/college-flow/hero-landing.png?updatedAt=1717742815178 400w, https://ik.imagekit.io/engineerbf24/tr:w-601,h-585/college-flow/hero-landing.png?updatedAt=1717742815178 800w, https://ik.imagekit.io/engineerbf24/college-flow/hero-landing.png?updatedAt=1717742815178 1200w"
            alt="black college student with a bright smile"
          />
        </div>
      </section>
      <section className="w-[100%] ">
        <Popular />
      </section>
    </>
  );
}
