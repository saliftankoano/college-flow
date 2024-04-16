import logo from "../assets/cfw.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#2C3835] h-[35vh]">
        <div className="mt-[4%] inside px-[3.8%] w-[96.2%] inline-flex">
          <div className="w-[30.56%]">
            <img src={logo} alt="college flow logo" className="w-[30%]" />
          </div>
          <div className="line border-s-[1px] h-[150px] border-white opacity-20"></div>
          <div className="center w-[30.56%] block">
            <div className="links text-center">
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
            <span className="block mt-[15%] text-center">
              Copyright @ 2024 - All right reserved
            </span>
          </div>
          <div className="line border-s-[1px] h-[150px] border-white opacity-20"></div>

          <div className="right w-[30.56%]"></div>
        </div>
      </footer>
    </>
  );
}
