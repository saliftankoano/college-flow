import lineOff from "./assets/line-off.svg";
import lineOn from "./assets/line-on.svg";
import circle1On from "./assets/circle1-on.svg";
import circle2Off from "./assets/circle2-off.svg";
import circle3Off from "./assets/circle3-off.svg";
import circle4Off from "./assets/circle4-off.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./components/ProjectForm";
import BackNav from "./components/BackNav";
import Marketplace from "./Marketplace";
import Chat from "./Chat";

export default function StudentDash() {
  const [showDash, setShowDash] = useState(false);
  const [showMarket, setShowMarket] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [nav, setNav] = useState("marketplace");
  const navigate = useNavigate();

  useEffect(() => {}, [theme]);

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
      <Marketplace />
    </>
  );
}
