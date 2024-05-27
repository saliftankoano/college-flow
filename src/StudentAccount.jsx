import circle from "./assets/circle.svg";
import profile from "./assets/profile-dash.svg";
import pencil from "./assets/pencil.svg";
import line from "./assets/horizontal.svg";
import located from "./assets/location.svg";
import member from "./assets/member.svg";
import add from "./assets/add.svg";
import bigHorizontal from "./assets/big-horizontal.svg";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNav from "./components/BackNav";

export default function StudentAccount() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [nav, setNav] = useState("marketplace");
  const navigate = useNavigate();

  const handleTheme = (theme) => {
    setTheme(theme);
  };
  const handleNavSelector = async (navChosen) => {
    setNav(navChosen);
    if (navChosen == "account") {
      navigate("/studentaccount");
    } else if (navChosen == "marketplace") {
      navigate("/marketplace");
    } else {
      navigate("/chat");
    }
  };

  function addService() {}
  function addProject() {
    setShowDash(false);
    setShowQuestions(true);
  }
  return (
    <>
      <BackNav themeSelector={handleTheme} navSelector={handleNavSelector} />
      <div className={`w-full h-full flex ${theme} flex-wrap`}>
        <div className="left">
          <img
            className="z-0 mt-[-7.5%] ml-[-40%]"
            src={circle}
            alt="circle shape"
          />
          <div className="z-10 info  flex w-[60%] mt-[-80%] pt-[5%] ml-[22%]">
            <div className="top-card w-full mt-[-2%] px-[5%] bg-white border-[#0D1717] border-[1px] border-opacity-20 rounded-xl">
              <img
                className="mx-auto pt-5"
                src={profile}
                alt="profile picture"
              />
              <div className="names mt-3">
                <div className="w-full inline-flex mx-auto justify-center">
                  {auth.currentUser.displayName}
                  <img className="ml-2" src={pencil} alt="pencil" />
                </div>
              </div>
              <img className="mt-5" src={line} />
              <div className="mt-3 from w-full inline-flex">
                <img className="" src={located} alt="location dot" />
                <div className="flex">
                  <div className="">From</div>
                  <div className="date font-bold ml-8">USA</div>
                </div>
              </div>
              <div className="membership w-full inline-flex my-4">
                <img className="" src={member} alt="person icon" />
                <span className="">Member since</span>
                <span className="ml-8 date font-bold">DEC 2023</span>
              </div>
            </div>
            <div className="bottom-card"></div>
          </div>
        </div>
        <div className="right mt-[4%] px-[5%] ">
          <div className="profile-options w-full mt-[2%]">
            <div className="services pb-6 w-full">
              <div className="inline-flex">
                <span className="text-xl font-bold mr-4">Services</span>
                <img src={add} onClick={addService} />
              </div>
              <img className="mt-8" src={bigHorizontal} />
            </div>
            <div className="work pb-6 w-full">
              <span className="text-xl font-bold">Work History</span>
              <img className="mt-8" src={bigHorizontal} />
            </div>
            <div className="projects pb-6 w-full">
              <div className="inline-flex">
                <span className="text-xl font-bold mr-4">Projects</span>
                <img src={add} onClick={addProject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
