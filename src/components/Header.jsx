import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Styles/Header.css";
import hamburgerButton from "../assets/hamburger.svg";
import logo from "../assets/logo.png";
import BuyCards from "./BuyCards";
import Home from "./Home";
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

  return (
    <>
      <Router>
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/buycards">Buy Cards</Link>
                </li>
                <li>
                  <Link to="ourblog">Our Blog</Link>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buycards" element={<BuyCards />} />
          <Route path="ourblog" element={<OurBlog />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
