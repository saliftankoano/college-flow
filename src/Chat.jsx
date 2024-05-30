import BackNav from "./components/BackNav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [nav, setNav] = useState("marketplace");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const navigate = useNavigate();
  const handleTheme = (theme) => {
    setTheme(theme);
  };
  useEffect(() => {}, [theme]);
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
  return (
    <>
      <BackNav themeSelector={handleTheme} navSelector={handleNavSelector} />
      <div
        className={`w-full h-[112vh] mt-[-11%] ${
          theme == "light"
            ? "bg-bkg_light text-text_dark"
            : "bg-bkg_dark text-text_light"
        } flex justify-center items-center`}
      >
        <h1 className={`text-xl flex justify-center`}>
          Feature coming soon...
        </h1>
      </div>
    </>
  );
}
