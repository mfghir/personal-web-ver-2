import { useState } from "react";
// import { i18n } from "./i18n";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import GoTopButton from "./common/GoTopButton";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
// import { i18n } from "./i18n";
import i18n from "./i18n.js";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const [language, setLanguage] = useState("fa");
  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <CommonStyles language={language}>
      <div className="App">
        <Navbar handleOnclick={handleOnclick} />

        <div className="layout">
          <GoTopButton />

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolios" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      <ToastContainer rtl={language === "fa" ? true : false} />
    </CommonStyles>
  );
}

export default App;

const CommonStyles = styled.div`
  .home-container *,
  .aboutme-container *,
  .resume-container *,
  .portfolio-container *,
  .contact-container * {
    animation: load 0.4s;
  }

  @keyframes load {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .home-container,
  .aboutme-container,
  .resume-container,
  .portfolio-container,
  .contact-container,
  .menu,
  .menu-mobile,
  .form-container form input {
    direction: ${(props) => (props.language === "fa" ? "RTL" : "")};
    font-family: ${(props) =>
      props.language === "fa" ? "'Noto Sans Arabic', sans-serif" : ""};
    font-family: ${(props) =>
      props.language === "en" ? "'Poppins', sans-serif" : ""};

    font-family: ${(props) =>
      props.language === "ko" ? "'Gowun Dodum', sans-serif" : ""};
  }

  .form-container form button,
  .langs .name {
    font-family: ${(props) =>
      props.language === "fa" ? "'Noto Sans Arabic', sans-serif" : ""};
    font-family: ${(props) =>
      props.language === "en" ? "'Poppins', sans-serif" : ""};

    font-family: ${(props) =>
      props.language === "ko" ? "'Gowun Dodum', sans-serif" : ""};
  }

  .home-container h2 {
    direction: ltr;
    font-family: "Poppins", sans-serif;
  }
`;
