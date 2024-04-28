import { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Marketplace() {
  const [displayName, setDisplayName] = useState();
  const [categoryFocus, setCategoryFocus] = useState("None");
  const [artBg, setArtBg] = useState();

  const [aiBg, setAiBg] = useState();
  const [webBg, setWebBg] = useState();
  const [marketingBg, setMarketingBg] = useState();
  const [videoBg, setVideoBg] = useState();
  const [designBg, setDesignBg] = useState();
  const [edBg, setEdBg] = useState();
  const [bizBg, setBizBg] = useState();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [text, setText] = useState(localStorage.getItem("text"));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(name);
      }
    });
  }, []);

  if (!displayName) {
    return null;
  }
  function setEverythingNormal() {
    setAiBg("bg-white");
    setArtBg("bg-white");
    setBizBg("bg-white");
    setDesignBg("bg-white");
    setEdBg("bg-white");
    setMarketingBg("bg-white");
    setVideoBg("bg-white");
    setWebBg("bg-white");
  }

  function handleAi() {
    setEverythingNormal();
    setAiBg("bg-[#E9E920]");
    setCategoryFocus("AI");
  }
  function handleArt() {
    setEverythingNormal();
    setArtBg("bg-[#E9E920]");
    setCategoryFocus("Art");
  }
  function handleWeb() {
    setEverythingNormal();
    setWebBg("bg-[#E9E920]");
    setCategoryFocus("Web");
  }
  function handleMarketing() {
    setEverythingNormal();
    setMarketingBg("bg-[#E9E920]");
    setCategoryFocus("Marketing");
  }
  function handleVideo() {
    setEverythingNormal();
    setVideoBg("bg-[#E9E920]");
    setCategoryFocus("Video");
  }
  function handleDesign() {
    setEverythingNormal();
    setDesignBg("bg-[#E9E920]");
    setCategoryFocus("Design");
  }
  function handleEducation() {
    setEverythingNormal();
    setEdBg("bg-[#E9E920]");
    setCategoryFocus("Education");
  }
  function handleBusiness() {
    setEverythingNormal();
    setBizBg("bg-[#E9E920]");
    setCategoryFocus("Business");
  }

  return (
    <>
      <div className={`${theme} h-full`}>
        <div
          className={`text-2xl text-black font-monaswb w-2/4 font-semibold text-center mx-auto`}
        >
          Explore a curated selection of interactive design projects, from
          advanced web design to detailed illustrations
        </div>
        <div className="menu-options w-full mt-4 inline-flex items-center justify-center text-[#004439] ">
          <div
            onClick={handleAi}
            className={`hover: cursor-pointer ai py-1 px-4 h-[10%] mx-4 ${aiBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            AI
          </div>
          <div
            onClick={handleWeb}
            className={`hover: cursor-pointer web py-1 px-4 h-[10%] mx-4 ${webBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Web Development
          </div>
          <div
            onClick={handleDesign}
            className={`hover: cursor-pointer design py-1 px-4 h-[10%] mx-4 ${designBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Design
          </div>
          <div
            onClick={handleMarketing}
            className={`hover: cursor-pointer marketing py-1 px-4 h-[10%] mx-4 ${marketingBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Digital Marketing
          </div>
          <div
            onClick={handleEducation}
            className={`hover: cursor-pointer ed py-1 px-4 h-[10%] mx-4 ${edBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Education
          </div>
          <div
            onClick={handleVideo}
            className={`hover: cursor-pointer vid py-1 px-4 h-[10%] mx-4 ${videoBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Video
          </div>
          <div
            onClick={handleBusiness}
            className={`hover: cursor-pointer biz py-1 px-4 h-[10%] mx-4 ${bizBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Business
          </div>
          <div
            onClick={handleArt}
            className={`hover: cursor-pointer art py-1 px-4 h-[10%] mx-4 ${artBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Art
          </div>
        </div>
        {auth != null && (
          <h1 className="text-4xl">
            {" "}
            Welcome dear Client: {displayName} Focus: {categoryFocus}{" "}
          </h1>
        )}
      </div>
    </>
  );
}
