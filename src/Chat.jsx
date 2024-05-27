import BackNav from "./components/BackNav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
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
  return (
    <>
      <BackNav themeSelector={handleTheme} navSelector={handleNavSelector} />
      <div className="w-full h-[100vh]">
        <h1 className="text-xl mt-40 text-black"> Feature coming soon...</h1>
      </div>
    </>
  );
}
