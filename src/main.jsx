import React from "react";
import "./index.css";
import Home from "./Home.jsx";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Chat from "./Chat.jsx";
import Marketplace from "./Marketplace.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
