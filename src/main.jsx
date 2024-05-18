import React from "react";
import "./index.css";
import Home from "./Home.jsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import StudentDash from "./StudentDash.jsx";
import Client from "./Client.jsx";
import SignIn from "./SignIn.jsx";
// Importing font

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/clientdash" element={<Client />} />
        <Route path="/studentdash" element={<StudentDash />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
