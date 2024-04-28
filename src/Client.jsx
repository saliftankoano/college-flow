import Marketplace from "./Marketplace";
import BackNav from "./components/BackNav";
import { useState, useEffect } from "react";
import ClientDash from "./components/ClientDash";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

export default function Client() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [clientNav, setClientNav] = useState(localStorage.getItem("clientNav"));
  const [dashVisible, setDashVisible] = useState(false);
  const [marketVisible, setMarketVisible] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);

  // Function to handle theme change in Client component
  function handleThemeChange(newTheme) {
    setTheme(newTheme);
    // You can add any additional actions here
  }

  // Function to handle client navigation
  function handleClientNav(newNav) {
    setClientNav(newNav);
    if (newNav == "dashboard") {
      setMarketVisible(false);
      setChatVisible(false);
      setDashVisible(true);
    } else if (newNav == "marketplace") {
      setChatVisible(false);
      setDashVisible(false);
      setMarketVisible(true);
    } else {
      setDashVisible(false);
      setMarketVisible(false);
      setChatVisible(true);
    }
  }

  return (
    <>
      <div className={`block ${theme} h-full`}>
        <BackNav
          themeSelector={handleThemeChange}
          navSelector={handleClientNav}
          onThemeChange={handleThemeChange} // Pass the handleThemeChange function as a prop
        />
        {dashVisible && <ClientDash />}
        {marketVisible && <Marketplace />}
        {chatVisible && <Chat />}

        {/* You can remove these lines if you don't need to display the theme and clientNav */}
        {theme}
        {clientNav}
        <Footer />
      </div>
    </>
  );
}
