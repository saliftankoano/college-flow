import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cfc from "../assets/cfc.svg";
import cfy from "../assets/cfy.svg";
import profile from "../assets/profile.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function BackNav({ themeSelector, navSelector }) {
  const [clientNav, setClientNav] = useState("marketplace");
  const [theme, setTheme] = useState(" bg-white");
  const [logo, setLogo] = useState("light");
  const [text, setText] = useState("text-[#0D1717]");

  const Navigate = useNavigate();

  // Save initial states in LocalStorage for persistent storage across pages
  useEffect(() => {
    localStorage.setItem("clientNav", clientNav);
    localStorage.setItem("theme", theme);
    localStorage.setItem("logo", logo);
    localStorage.setItem("text", text);
  }, [clientNav, theme, logo, text]);

  useEffect(() => {}, [clientNav]);

  // Handle theme selection
  function handleThemeSelector(themeChosen) {
    themeSelector(themeChosen);
    onThemeChange(themeChosen); // Call the callback function with the new theme
  }

  // Handle navigation selection
  function handleNavSelector(navChosen) {
    setClientNav(navChosen);
    navSelector(navChosen);
  }

  // Toggle theme
  function handleTheme() {
    setText(text === " text-[#0D1717]" ? " text-white" : " text-[#0D1717]");
    setLogo(logo === "light" ? "dark" : "light");
    setTheme(theme === " bg-white" ? " dark: bg-[#0D1717]" : " bg-white");
    handleThemeSelector(theme); // Pass the updated theme to the handler
    localStorage.setItem("text", text);
    localStorage.setItem("theme", theme);
    localStorage.setItem("logo", logo);
  }

  return (
    <>
      <div
        className={`inline-flex py-2 w-full border-[1px] border-t-0 border-[#004439] border-opacity-10 ${theme}`}
      >
        <div className="logo w-[10%] flex justify-center">
          <a href="/studentdash">
            {logo === "light" ? (
              <img src={cfc} alt="light logo" />
            ) : (
              <img src={cfy} alt="dark logo" />
            )}
          </a>
        </div>
        <div
          className={`ml-[5%] font-customs font-medium text-base inline-flex ${text} space-x-6 items-center`}
        >
          <div
            className={`account h-full content-center hover:cursor-pointer`}
            onClick={() => {
              handleNavSelector("account");
            }}
          >
            Account
          </div>
          <div
            className={`market h-full content-center hover:cursor-pointer`}
            onClick={() => {
              handleNavSelector("marketplace");
            }}
          >
            Marketplace
          </div>
          <div
            className={`chat h-full content-center hover:cursor-pointer`}
            onClick={() => {
              handleNavSelector("chat");
            }}
          >
            Chat
          </div>
        </div>
        <div
          className="toggle-btn flex items-center ml-[55%] hover:cursor-pointer"
          onClick={handleTheme}
        >
          {theme === " bg-white" ? (
            <img src={moon} alt="moon icon" />
          ) : (
            <img src={sun} alt="sun icon" />
          )}
        </div>
        <div className="profile-pic flex items-center ml-[2.5%]">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </>
  );
}
