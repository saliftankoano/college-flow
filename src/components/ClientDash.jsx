import circle from "../assets/circle.svg";
import profile from "../assets/profile-dash.svg";
import pencil from "../assets/pencil.svg";
import line from "../assets/horizontal.svg";
import located from "../assets/location.svg";
import member from "../assets/member.svg";
import add from "../assets/add.svg";
import bigHorizontal from "../assets/big-horizontal.svg";
import lineOff from "../assets/line-off.svg";
import lineOn from "../assets/line-on.svg";
import circle1On from "../assets/circle1-on.svg";
import circle2Off from "../assets/circle2-off.svg";
import circle3Off from "../assets/circle3-off.svg";
import circle4Off from "../assets/circle4-off.svg";

import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";

export default function ClientDash() {
  const [showPanel, setPanel] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  useEffect(() => {}, [showPanel, showQuestions]);
  function addService() {}

  function addProject() {
    setPanel(false);
    setShowQuestions(true);
  }
  return (
    <>
      {showPanel && (
        <div className="w-full h-full inline-flex">
          <div className="left w-[35%]">
            <img
              className="z-0 mt-[-9.5%] translate-x-[-40%]"
              src={circle}
              alt="circle shape"
            />
            <div className="z-10 info w-[60%] translate-y-[-128%] pt-[5%] ml-[22%] mt-[9%]">
              <div className="top-card w-full mt-[-2%] px-[5%] bg-white border-[#0D1717] border-[1px] border-opacity-20 rounded-xl">
                <img
                  className="mx-auto pt-5"
                  src={profile}
                  alt="profile picture"
                />
                <div className="names mt-3">
                  <div className="w-full inline-flex mx-auto justify-center">
                    {" "}
                    Name <img className="ml-2" src={pencil} alt="pencil" />
                  </div>
                  <div className="w-full username inline-flex justify-center">
                    Username <img className="ml-2" src={pencil} alt="pencil" />
                  </div>
                </div>
                <img className="mt-5" src={line} />
                <div className="mt-3 from w-full inline-flex">
                  <img className="" src={located} alt="location dot" />
                  <span className="mr-[62%]">From</span>
                  <span className="date font-bold ml-[3%]">USA</span>
                </div>
                <div className="membership w-full inline-flex my-4">
                  <img className="" src={member} alt="person icon" />
                  <span className="mr-[21%]">Member since</span>
                  <span className="date font-bold">DEC 2023</span>
                </div>
              </div>
              <div className="bottom-card"></div>
            </div>
          </div>
          <div className="right w-[60%] mt-[4%]">
            <div className="services pb-6 w-full">
              <div className="inline-flex">
                <span className="text-xl font-bold mr-4">Services</span>
                <img src={add} onClick={addService} />
              </div>
              <img className="mt-8" src={bigHorizontal} />
            </div>
            <div className="work pb-6">
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
      )}
      {showQuestions && (
        <div className="w-full inline-flex">
          <div className="form-stepper w-1/4 mt-10 invisible">
            <div className="steps z-10 w-2/4 flex flex-wrap text-black relative left-10">
              <div className="overview w-full">
                <div className="inline-flex">
                  <img src={circle1On} />{" "}
                  <span className="text-lg pl-2">Overview</span>
                </div>
                <img className="ml-4 mt-[-3.5%]" src={lineOff} />
              </div>
              <div className="pricing w-full">
                <div className="inline-flex">
                  <img src={circle2Off} />{" "}
                  <span className="text-lg pl-2">Pricing</span>
                </div>
                <img className="ml-4 mt-[-3.5%]" src={lineOff} />
              </div>
              <div className="gallery w-full">
                <div className="inline-flex">
                  <img src={circle3Off} />{" "}
                  <span className="text-lg pl-2">Gallery</span>
                </div>
                <img className="ml-4 mt-[-3.5%]" src={lineOff} />
              </div>
              <div className="description w-full">
                <div className="inline-flex">
                  <img src={circle4Off} />{" "}
                  <span className="text-lg pl-2">Description</span>
                </div>
              </div>
            </div>
            {/*<img className="ml-[-45%] z-0" src={circle} />*/}
          </div>
          <div className="form-container w-3/4">
            <div className="w-[80%]">
              <ProjectForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
