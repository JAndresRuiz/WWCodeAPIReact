import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../Styles/Header.css";
import hamburgerButton from "../assets/hamburger.svg";
import Home from "./Home";
import BuyCards from "./BuyCards";
import OurBlog from "./OurBlog";

const Header = () => {
  const [movilePanel, setMovilePanel] = useState({ left: "100%" });
  const [darkMode, setDarkMode] = useState(false);
  const [button, setButton] = useState("Dark Mode");

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
      setButton("Ligth Mode");
    } else {
      body.classList.remove("dark-mode");
      setButton("Dark Mode");
    }
  }, [darkMode]);

  const moviletoggle = () => {
    if (movilePanel.left == "100%") {
      setMovilePanel({
        left: "0",
      });
    } else {
      setMovilePanel({
        left: "100%",
      });
    }
  };

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "buycards") {
      return <BuyCards />;
    } else if (currentPage === "ourblog") {
      return <OurBlog />;
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    currentPage, navigateTo,
    <>
      <header className="headerContainer">
        <div className="logoHeaderImage">
          <img src={logo} alt="Logo Pokemon" />
        </div>
        <img
          src={hamburgerButton}
          className="hamburgerButton"
          onClick={moviletoggle}
        />
        <nav className="linksButtonHeader">
          <div className="navLinksHeaderContent" style={movilePanel}>
            <ul className="navLinksHeader">
              <li>
                <a onClick={() => navigateTo("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigateTo("buycards")}>Buy Cards</a>
              </li>
              <li>
                <a onClick={() => navigateTo("ourblog")}>Our Blog</a>
              </li>
            </ul>
            <button
              className="Dark Light"
              onClick={() => setDarkMode(!darkMode)}
            >
              {button}
            </button>
          </div>
        </nav>
      </header>
      <div>{renderPage()}</div>
    </>
  );
};

export default Header;
