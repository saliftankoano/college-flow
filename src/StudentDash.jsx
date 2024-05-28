import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marketplace from "./Marketplace";

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
